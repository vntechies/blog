/**
 * VNTechies B2B lead web app — bound to the "VNTechies B2B Leads" sheet.
 * Deployment steps: see README.md in this folder.
 *
 * The site posts JSON as text/plain (no CORS preflight):
 *   fetch(LEAD_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(lead) })
 *
 * The pure functions below take no Google service, so they run under `node --test`
 * (see Code.test.mjs). Only doPost / doGet touch SpreadsheetApp, MailApp, etc.
 */

var PDF_URL =
  'https://vntechies.dev/static/docs/vntechies-ho-so-dao-tao-doanh-nghiep.pdf'
var ZALO_URL = 'https://zalo.me/0905068885'
var REPLY_TO = 'info@vntechies.dev'
var SENDER_NAME = 'VNTechies'
var DECK_VERSION = '11/2026'

var TEAM_SIZES = ['1–4', '5–10', '11–30', 'trên 30']
var INTERESTS = ['Cloud/AWS', 'DevOps', 'Data', 'AI']

var HEADERS = [
  'Thời gian',
  'Họ tên',
  'Công ty',
  'Email',
  'Điện thoại',
  'Quy mô',
  'Mảng quan tâm',
  'Nhu cầu',
  'Trang',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'Phiên bản hồ sơ',
  'Đồng ý',
]

var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
var SEEN_TTL_SECONDS = 600
var DAILY_CAP = 200
var TIMEZONE = 'Asia/Ho_Chi_Minh'

// ---------------------------------------------------------------------------
// Pure helpers
// ---------------------------------------------------------------------------

function str_(value) {
  if (value === null || value === undefined) return ''
  return String(value).trim()
}

function clip_(value, max) {
  var text = str_(value)
  return text.length > max ? text.slice(0, max) : text
}

function validateLead_(data) {
  var input = data && typeof data === 'object' ? data : {}

  if (str_(input.website) !== '') return { ok: false, error: 'spam' }

  var name = clip_(input.name, 100)
  var company = clip_(input.company, 150)
  var email = clip_(input.email, 254).toLowerCase()

  if (name === '') return { ok: false, error: 'missing_name' }
  if (company === '') return { ok: false, error: 'missing_company' }
  if (email === '') return { ok: false, error: 'missing_email' }
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return { ok: false, error: 'invalid_email' }
  }

  var teamSize = str_(input.teamSize)
  if (TEAM_SIZES.indexOf(teamSize) === -1) {
    return { ok: false, error: 'invalid_team_size' }
  }
  if (input.consent !== true) return { ok: false, error: 'missing_consent' }

  var interests = []
  var wanted = Array.isArray(input.interests) ? input.interests : []
  for (var i = 0; i < wanted.length; i++) {
    var item = str_(wanted[i])
    if (INTERESTS.indexOf(item) !== -1 && interests.indexOf(item) === -1) {
      interests.push(item)
    }
  }

  return {
    ok: true,
    lead: {
      name: name,
      company: company,
      email: email,
      phone: clip_(input.phone, 30),
      teamSize: teamSize,
      interests: interests,
      message: clip_(input.message, 2000),
      consent: true,
      page: clip_(input.page, 200),
      utm_source: clip_(input.utm_source, 100),
      utm_medium: clip_(input.utm_medium, 100),
      utm_campaign: clip_(input.utm_campaign, 100),
      deckVersion: str_(input.deckVersion) || DECK_VERSION,
    },
  }
}

// The requester email may only greet the person. Anything that looks like a
// URL, a domain, an address or a script tag is dropped for a plain greeting.
function safeName_(name) {
  var text = str_(name)
  if (
    text.length > 60 ||
    text.indexOf('://') !== -1 ||
    text.indexOf('www.') !== -1 ||
    text.indexOf('@') !== -1 ||
    text.indexOf('<') !== -1
  ) {
    return 'Anh/Chị'
  }
  return text
}

// A cell starting with = + - @ would be run as a formula by Sheets.
function toCell_(value) {
  var text = value === null || value === undefined ? '' : String(value)
  if (/^[=+\-@]/.test(text)) return "'" + text
  return text
}

function formatTime_(now) {
  return Utilities.formatDate(
    now,
    TIMEZONE,
    'yyyy-MM-dd HH:mm'
  )
}

function buildRow_(lead, now, formatter) {
  var format = formatter || formatTime_
  var cells = [
    format(now),
    lead.name,
    lead.company,
    lead.email,
    lead.phone,
    lead.teamSize,
    lead.interests.join(', '),
    lead.message,
    lead.page,
    lead.utm_source,
    lead.utm_medium,
    lead.utm_campaign,
    lead.deckVersion,
    lead.consent ? 'Có' : 'Không',
  ]
  return cells.map(toCell_)
}

function buildAlertEmail_(lead, sheetUrl) {
  var lines = [
    'Lead mới từ trang doanh nghiệp vntechies.dev/enterprises',
    '',
    'Họ tên: ' + lead.name,
    'Công ty: ' + lead.company,
    'Email: ' + lead.email,
    'Điện thoại: ' + (lead.phone || '—'),
    'Quy mô: ' + lead.teamSize,
    'Mảng quan tâm: ' + (lead.interests.length ? lead.interests.join(', ') : '—'),
    'Nhu cầu: ' + (lead.message || '—'),
    '',
    'Trang: ' + (lead.page || '—'),
    'utm_source: ' + (lead.utm_source || '—'),
    'utm_medium: ' + (lead.utm_medium || '—'),
    'utm_campaign: ' + (lead.utm_campaign || '—'),
    'Phiên bản hồ sơ: ' + lead.deckVersion,
    '',
    'Bảng lead: ' + sheetUrl,
  ]
  return {
    subject: '[B2B lead] ' + lead.company + ': ' + lead.teamSize,
    body: lines.join('\n'),
  }
}

function escapeH_(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// A fixed Vietnamese message: no field of the request beyond the greeting name.
function buildRequesterEmail_(lead) {
  var greeting = safeName_(lead.name)
  var lines = [
    'Chào ' + greeting + ',',
    '',
    'Cảm ơn ' + greeting + ' đã quan tâm tới chương trình đào tạo doanh nghiệp của VNTechies.',
    'Hồ sơ đào tạo doanh nghiệp (phiên bản ' + DECK_VERSION + '):',
    PDF_URL,
    '',
    'Đội ngũ VNTechies sẽ liên hệ lại trong thời gian sớm nhất.',
    'Cần trao đổi ngay, ' + greeting + ' có thể nhắn Zalo: ' + ZALO_URL,
    '',
    'VNTechies',
  ]
  var htmlBody =
    '<p>Chào ' + escapeH_(greeting) + ',</p>' +
    '<p>Cảm ơn ' + escapeH_(greeting) +
    ' đã quan tâm tới chương trình đào tạo doanh nghiệp của VNTechies.</p>' +
    '<p>Hồ sơ đào tạo doanh nghiệp (phiên bản ' + DECK_VERSION + '):<br>' +
    '<a href="' + PDF_URL + '">' + PDF_URL + '</a></p>' +
    '<p>Đội ngũ VNTechies sẽ liên hệ lại trong thời gian sớm nhất.<br>' +
    'Cần trao đổi ngay, ' + escapeH_(greeting) +
    ' có thể <a href="' + ZALO_URL + '">nhắn Zalo</a>: ' + ZALO_URL + '</p>' +
    '<p>VNTechies</p>'
  return {
    subject: 'Hồ sơ đào tạo doanh nghiệp VNTechies (phiên bản ' + DECK_VERSION + ')',
    body: lines.join('\n'),
    htmlBody: htmlBody,
  }
}

function handleLead_(data, deps) {
  var result = validateLead_(data)
  if (!result.ok) {
    // Bots are not told that they were rejected.
    if (result.error === 'spam') return { ok: true }
    return { ok: false, error: result.error }
  }

  var lead = result.lead

  if (deps.dailyCountExceeded()) return { ok: false, error: 'rate_limited' }
  if (deps.isDuplicate(lead.email)) return { ok: true, duplicate: true }

  deps.appendRow(buildRow_(lead, deps.now(), deps.formatTime))

  var alert = buildAlertEmail_(lead, deps.sheetUrl)
  deps.sendMail({
    to: deps.notifyTo,
    subject: alert.subject,
    body: alert.body,
    replyTo: lead.email,
    name: SENDER_NAME,
  })

  var requester = buildRequesterEmail_(lead)
  deps.sendMail({
    to: lead.email,
    subject: requester.subject,
    body: requester.body,
    htmlBody: requester.htmlBody,
    name: SENDER_NAME,
    replyTo: REPLY_TO,
  })

  deps.markSeen(lead.email)
  return { ok: true }
}

// ---------------------------------------------------------------------------
// Google services
// ---------------------------------------------------------------------------

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  )
}

function getSheet_() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = spreadsheet.getSheets()[0]
  sheet.setName('Leads')
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS)
    sheet.setFrozenRows(1)
  }
  return sheet
}

function getConfig_(key, fallback) {
  var value = PropertiesService.getScriptProperties().getProperty(key)
  return value ? value : fallback
}

function todayKey_() {
  return 'count:' + Utilities.formatDate(new Date(), TIMEZONE, 'yyyy-MM-dd')
}

function dailyCountExceeded_() {
  var used = Number(getConfig_(todayKey_(), '0'))
  return used >= DAILY_CAP
}

function bumpDailyCount_() {
  var props = PropertiesService.getScriptProperties()
  var key = todayKey_()
  var used = Number(props.getProperty(key) || '0')
  props.setProperty(key, String(used + 1))
}

function seenKey_(email) {
  return 'seen:' + email
}

function isDuplicate_(email) {
  return CacheService.getScriptCache().get(seenKey_(email)) !== null
}

function markSeen_(email) {
  CacheService.getScriptCache().put(seenKey_(email), '1', SEEN_TTL_SECONDS)
}

function doPost(e) {
  try {
    var raw = e && e.postData ? e.postData.contents : ''
    var data
    try {
      data = JSON.parse(raw)
    } catch (parseError) {
      return json_({ ok: false, error: 'bad_request' })
    }

    var lock = LockService.getScriptLock()
    lock.waitLock(10000)
    try {
      var sheet = getSheet_()
      var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
      var result = handleLead_(data, {
        appendRow: function (row) {
          sheet.appendRow(row)
        },
        sendMail: function (mail) {
          MailApp.sendEmail(mail)
        },
        isDuplicate: isDuplicate_,
        markSeen: markSeen_,
        dailyCountExceeded: dailyCountExceeded_,
        notifyTo: getConfig_('NOTIFY_TO', REPLY_TO),
        sheetUrl: spreadsheet.getUrl(),
        now: function () {
          return new Date()
        },
        formatTime: formatTime_,
      })
      if (result.ok) bumpDailyCount_()
      return json_(result)
    } finally {
      lock.releaseLock()
    }
  } catch (error) {
    return json_({ ok: false, error: 'server_error' })
  }
}

function doGet() {
  return json_({ ok: true, service: 'b2b-leads' })
}

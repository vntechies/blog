import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import vm from 'node:vm'

const here = dirname(fileURLToPath(import.meta.url))
const source = readFileSync(join(here, 'Code.gs'), 'utf8')

function loadScript() {
  const context = vm.createContext({})
  vm.runInContext(source, context, { filename: 'Code.gs' })
  return context
}

const PDF_URL = 'https://vntechies.dev/static/docs/vntechies-ho-so-dao-tao-doanh-nghiep.pdf'
const ZALO_URL = 'https://zalo.me/0905068885'

function validLead(overrides = {}) {
  return {
    name: 'Lan Nguyễn',
    company: 'Acme',
    email: 'Lan.Nguyen@Acme.vn',
    phone: '0905 068 885',
    teamSize: '11–30',
    interests: ['AI'],
    message: '',
    consent: true,
    website: '',
    page: '/enterprises',
    utm_source: 'li',
    utm_medium: '',
    utm_campaign: 'q4',
    deckVersion: '11/2026',
    ...overrides,
  }
}

test('validateLead_ accepts a valid lead and lower-cases the email', () => {
  const ctx = loadScript()
  const result = ctx.validateLead_(validLead())
  assert.equal(result.ok, true)
  assert.equal(result.lead.email, 'lan.nguyen@acme.vn')
  assert.equal(result.lead.name, 'Lan Nguyễn')
  assert.deepEqual([...result.lead.interests], ['AI'])
})

test('validateLead_ rejects a filled honeypot as spam', () => {
  const result = loadScript().validateLead_(validLead({ website: 'http://x' }))
  assert.equal(result.ok, false)
  assert.equal(result.error, 'spam')
})

test('validateLead_ rejects a missing company', () => {
  const result = loadScript().validateLead_(validLead({ company: '   ' }))
  assert.equal(result.ok, false)
  assert.equal(result.error, 'missing_company')
})

test('validateLead_ rejects a bad email address', () => {
  const result = loadScript().validateLead_(validLead({ email: 'bad@' }))
  assert.equal(result.ok, false)
  assert.equal(result.error, 'invalid_email')
})

test('validateLead_ rejects an unknown team size', () => {
  const result = loadScript().validateLead_(validLead({ teamSize: '100' }))
  assert.equal(result.ok, false)
  assert.equal(result.error, 'invalid_team_size')
})

test('validateLead_ rejects consent=false', () => {
  const result = loadScript().validateLead_(validLead({ consent: false }))
  assert.equal(result.ok, false)
  assert.equal(result.error, 'missing_consent')
})

test('validateLead_ filters interests to the known list', () => {
  const result = loadScript().validateLead_(validLead({ interests: ['AI', 'Hack'] }))
  assert.equal(result.ok, true)
  assert.deepEqual([...result.lead.interests], ['AI'])
})

test('safeName_ keeps a plain name', () => {
  assert.equal(loadScript().safeName_('Lan'), 'Lan')
})

test('safeName_ replaces a URL, a domain, an address or a long name', () => {
  const ctx = loadScript()
  const fallback = 'Anh/Chị'
  assert.equal(ctx.safeName_('Xin chào http://evil.example'), fallback)
  assert.equal(ctx.safeName_('www.evil.vn'), fallback)
  assert.equal(ctx.safeName_('a@b.co'), fallback)
  assert.equal(ctx.safeName_('a'.repeat(61)), fallback)
})

test('toCell_ neutralises a formula', () => {
  const ctx = loadScript()
  assert.equal(ctx.toCell_('=IMPORTXML(1)'), "'=IMPORTXML(1)")
  assert.equal(ctx.toCell_('Acme'), 'Acme')
})

test('buildAlertEmail_ subject names the company and the team size', () => {
  const ctx = loadScript()
  const email = ctx.buildAlertEmail_(ctx.validateLead_(validLead()).lead, 'https://sheet')
  assert.equal(email.subject, '[B2B lead] Acme: 11–30')
})

test('buildRequesterEmail_ carries the fixed PDF link and no lead text', () => {
  const ctx = loadScript()
  const lead = ctx.validateLead_(
    validLead({
      company: 'Evil https://evil.example',
      message: 'xem https://evil.example nhé',
    })
  ).lead
  const email = ctx.buildRequesterEmail_(lead)
  for (const part of [email.body, email.htmlBody]) {
    assert.ok(part.includes(PDF_URL))
    assert.ok(part.includes(ZALO_URL))
    assert.ok(!part.includes('evil.example'))
  }
  assert.ok(email.subject.includes('11/2026'))
})

function fakeDeps(overrides = {}) {
  const calls = { appendRow: [], sendMail: [], markSeen: [], isDuplicate: [], recordSaved: [] }
  const deps = {
    appendRow: (row) => calls.appendRow.push(row),
    recordSaved: () => calls.recordSaved.push(true),
    sendMail: (mail) => calls.sendMail.push(mail),
    isDuplicate: (email) => {
      calls.isDuplicate.push(email)
      return false
    },
    markSeen: (email) => calls.markSeen.push(email),
    dailyCountExceeded: () => false,
    notifyTo: 'team@example.org',
    sheetUrl: 'https://sheet.example',
    now: () => new Date('2026-11-20T03:04:05Z'),
    formatTime: (date) => `T:${date.toISOString()}`,
    ...overrides,
  }
  return { calls, deps }
}

test('handleLead_ writes one row and sends the alert then the requester email', () => {
  const ctx = loadScript()
  const { calls, deps } = fakeDeps()
  const result = ctx.handleLead_(validLead(), deps)
  assert.equal(result.ok, true)
  assert.equal(calls.appendRow.length, 1)
  assert.equal(calls.sendMail.length, 2)
  assert.equal(calls.sendMail[0].to, 'team@example.org')
  assert.equal(calls.sendMail[0].replyTo, 'lan.nguyen@acme.vn')
  assert.equal(calls.sendMail[1].to, 'lan.nguyen@acme.vn')
  assert.equal(calls.sendMail[1].replyTo, 'info@vntechies.dev')
  assert.equal(calls.sendMail[1].name, 'VNTechies')
  assert.equal(calls.markSeen.length, 1)
})

test('handleLead_ answers ok to a bot without writing or sending', () => {
  const ctx = loadScript()
  const { calls, deps } = fakeDeps()
  const result = ctx.handleLead_(validLead({ website: 'http://bot' }), deps)
  assert.equal(result.ok, true)
  assert.equal(calls.appendRow.length, 0)
  assert.equal(calls.sendMail.length, 0)
  assert.equal(calls.markSeen.length, 0)
})

test('handleLead_ treats a repeat as a duplicate without writing or sending', () => {
  const ctx = loadScript()
  const { calls, deps } = fakeDeps({ isDuplicate: () => true })
  const result = ctx.handleLead_(validLead(), deps)
  assert.deepEqual({ ...result }, { ok: true, duplicate: true })
  assert.equal(calls.appendRow.length, 0)
  assert.equal(calls.sendMail.length, 0)
})

test('handleLead_ refuses once the daily cap is reached', () => {
  const ctx = loadScript()
  const { calls, deps } = fakeDeps({ dailyCountExceeded: () => true })
  const result = ctx.handleLead_(validLead(), deps)
  assert.equal(result.ok, false)
  assert.equal(result.error, 'rate_limited')
  assert.equal(calls.appendRow.length, 0)
  assert.equal(calls.sendMail.length, 0)
})

test('buildRow_ follows HEADERS and prefixes every cell through toCell_', () => {
  const ctx = loadScript()
  const lead = ctx.validateLead_(validLead({ company: '=ACME' })).lead
  const row = ctx.buildRow_(lead, new Date('2026-11-20T03:04:05Z'), () => '2026-11-20 10:04')
  assert.equal(row.length, ctx.HEADERS.length)
  assert.equal(row[0], '2026-11-20 10:04')
  assert.equal(row[2], "'=ACME")
  assert.deepEqual([...ctx.HEADERS].slice(0, 4), ['Thời gian', 'Họ tên', 'Công ty', 'Email'])
})

test('handleLead_ records the daily count once for a saved lead', () => {
  const ctx = loadScript()
  const { calls, deps } = fakeDeps()
  ctx.handleLead_(validLead(), deps)
  assert.equal(calls.recordSaved.length, 1)
})

test('handleLead_ does not record the daily count for honeypot spam', () => {
  const ctx = loadScript()
  const { calls, deps } = fakeDeps()
  ctx.handleLead_(validLead({ website: 'http://bot' }), deps)
  assert.equal(calls.recordSaved.length, 0)
})

test('handleLead_ does not record the daily count for a duplicate', () => {
  const ctx = loadScript()
  const { calls, deps } = fakeDeps({ isDuplicate: () => true })
  ctx.handleLead_(validLead(), deps)
  assert.equal(calls.recordSaved.length, 0)
})

test('handleLead_ does not record the daily count for a validation error', () => {
  const ctx = loadScript()
  const { calls, deps } = fakeDeps()
  const result = ctx.handleLead_(validLead({ company: '' }), deps)
  assert.equal(result.ok, false)
  assert.equal(calls.recordSaved.length, 0)
})

test('handleLead_ does not record the daily count when rate limited', () => {
  const ctx = loadScript()
  const { calls, deps } = fakeDeps({ dailyCountExceeded: () => true })
  ctx.handleLead_(validLead(), deps)
  assert.equal(calls.recordSaved.length, 0)
})

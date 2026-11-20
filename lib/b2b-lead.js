// Client logic for the B2B lead form. No imports, so `node --test` can load it.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const REQUIRED_MESSAGES = {
  name: 'Vui lòng nhập họ tên',
  company: 'Vui lòng nhập tên công ty',
  email: 'Vui lòng nhập email công việc',
  teamSize: 'Vui lòng chọn quy mô',
  consent: 'Vui lòng đồng ý để VNTechies liên hệ',
}

export function validateLeadForm(form = {}) {
  const errors = {}
  const name = (form.name || '').trim()
  const company = (form.company || '').trim()
  const email = (form.email || '').trim()

  if (!name) errors.name = REQUIRED_MESSAGES.name
  if (!company) errors.company = REQUIRED_MESSAGES.company
  if (!email) errors.email = REQUIRED_MESSAGES.email
  else if (!EMAIL_RE.test(email)) errors.email = 'Email chưa đúng định dạng'
  if (!form.teamSize) errors.teamSize = REQUIRED_MESSAGES.teamSize
  if (form.consent !== true) errors.consent = REQUIRED_MESSAGES.consent

  return errors
}

function utm(search, key) {
  if (!search) return ''
  const params = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search)
  return params.get(key) || ''
}

export function buildLeadPayload(
  form = {},
  { pathname = '/enterprises', search = '' } = {},
  deckVersion
) {
  return {
    name: (form.name || '').trim(),
    company: (form.company || '').trim(),
    email: (form.email || '').trim(),
    phone: (form.phone || '').trim(),
    teamSize: form.teamSize || '',
    interests: Array.isArray(form.interests) ? form.interests : [],
    message: (form.message || '').trim(),
    consent: form.consent === true,
    website: form.website || '',
    page: pathname || '',
    utm_source: utm(search, 'utm_source'),
    utm_medium: utm(search, 'utm_medium'),
    utm_campaign: utm(search, 'utm_campaign'),
    deckVersion: deckVersion || '',
  }
}

export async function submitLead({
  url,
  payload,
  fetchImpl = typeof fetch === 'function' ? fetch : undefined,
  timeoutMs = 15000,
}) {
  if (!url || typeof fetchImpl !== 'function') return 'failed'

  const controller = typeof AbortController === 'function' ? new AbortController() : null
  let timer
  const timeout = new Promise((resolve) => {
    timer = setTimeout(() => {
      if (controller) controller.abort()
      resolve('failed')
    }, timeoutMs)
  })

  const request = (async () => {
    try {
      const response = await fetchImpl(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        signal: controller ? controller.signal : undefined,
      })
      if (!response || !response.ok) return 'failed'
      const data = await response.json()
      return data && data.ok === true ? 'ok' : 'failed'
    } catch {
      return 'failed'
    }
  })()

  try {
    return await Promise.race([request, timeout])
  } finally {
    clearTimeout(timer)
  }
}

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { validateLeadForm, buildLeadPayload, submitLead } from './b2b-lead.js'

const validForm = {
  name: 'Lan Nguyễn',
  company: 'Acme',
  email: 'lan@acme.vn',
  phone: '0905 068 885',
  teamSize: '11–30',
  interests: ['AI', 'Data'],
  message: '',
  consent: true,
  website: '',
}

test('validateLeadForm reports every missing required field', () => {
  const errors = validateLeadForm({ interests: [] })
  assert.deepEqual(Object.keys(errors).sort(), ['company', 'consent', 'email', 'name', 'teamSize'])
})

test('validateLeadForm reports a malformed email', () => {
  const errors = validateLeadForm({ ...validForm, email: 'bad@' })
  assert.deepEqual(errors, { email: 'Email chưa đúng định dạng' })
})

test('validateLeadForm returns nothing for a valid form', () => {
  assert.deepEqual(validateLeadForm(validForm), {})
})

test('buildLeadPayload reads the campaign values from the query string', () => {
  const payload = buildLeadPayload(
    validForm,
    {
      pathname: '/enterprises',
      search: '?utm_source=li&utm_campaign=q4',
    },
    '11/2026'
  )
  assert.equal(payload.utm_source, 'li')
  assert.equal(payload.utm_campaign, 'q4')
  assert.equal(payload.utm_medium, '')
  assert.equal(payload.deckVersion, '11/2026')
  assert.equal(payload.page, '/enterprises')
})

test('submitLead fails when no script URL is configured', async () => {
  const result = await submitLead({ url: '', payload: {} })
  assert.equal(result, 'failed')
})

test('submitLead fails when the request rejects', async () => {
  const result = await submitLead({
    url: 'https://script.example/exec',
    payload: {},
    fetchImpl: () => Promise.reject(new Error('offline')),
  })
  assert.equal(result, 'failed')
})

test('submitLead fails when the request never answers', async () => {
  const result = await submitLead({
    url: 'https://script.example/exec',
    payload: {},
    fetchImpl: () => new Promise(() => {}),
    timeoutMs: 50,
  })
  assert.equal(result, 'failed')
})

test('submitLead fails when the script answers ok:false', async () => {
  const result = await submitLead({
    url: 'https://script.example/exec',
    payload: {},
    fetchImpl: async () => ({
      ok: true,
      json: async () => ({ ok: false, error: 'rate_limited' }),
    }),
  })
  assert.equal(result, 'failed')
})

test('submitLead fails when the answer is not JSON', async () => {
  const result = await submitLead({
    url: 'https://script.example/exec',
    payload: {},
    fetchImpl: async () => ({
      ok: true,
      json: async () => {
        throw new SyntaxError('Unexpected token <')
      },
    }),
  })
  assert.equal(result, 'failed')
})

test('submitLead fails on a non-2xx answer', async () => {
  const result = await submitLead({
    url: 'https://script.example/exec',
    payload: {},
    fetchImpl: async () => ({ ok: false, status: 500 }),
  })
  assert.equal(result, 'failed')
})

test('submitLead posts plain-text JSON and reads ok:true', async () => {
  const requests = []
  const result = await submitLead({
    url: 'https://script.example/exec',
    payload: { name: 'Lan' },
    fetchImpl: async (url, init) => {
      requests.push({ url, init })
      return { ok: true, json: async () => ({ ok: true }) }
    },
  })
  assert.equal(result, 'ok')
  assert.equal(requests.length, 1)
  assert.equal(requests[0].init.method, 'POST')
  assert.equal(requests[0].init.headers['Content-Type'], 'text/plain;charset=utf-8')
  assert.equal(requests[0].init.body, JSON.stringify({ name: 'Lan' }))
})

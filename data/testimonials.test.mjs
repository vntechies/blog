import test from 'node:test'
import assert from 'node:assert/strict'
import testimonials, { pickTestimonials } from './testimonials.js'

// Quotes as returned on origin/main, before outcome cards existed.
const MAIN_QUOTES = {
  aws: ['Võ Phi Hùng', 'Lê Văn Thắng', 'Trần Duy Mạnh', 'Lưu Bình Công'],
  data: ['Trần Duy Mạnh', 'Võ Phi Hùng', 'Lê Văn Thắng', 'Lưu Bình Công'],
  general: ['Võ Phi Hùng', 'Lê Văn Thắng', 'Trần Duy Mạnh', 'Lưu Bình Công'],
  devops: ['Nguyễn Tiến Nghiệp', 'Đặng Hoàng Linh', 'Nguyễn Quốc Trường', 'Võ Phi Hùng'],
}

const isOutcome = (item) => item.kind === 'outcome'

test('the outcome entry carries the expected fields', () => {
  const outcome = testimonials.find(isOutcome)
  assert.deepEqual(
    {
      title: outcome.title,
      summary: outcome.summary,
      source: outcome.source,
      date: outcome.date,
      image: outcome.image,
      href: outcome.href,
      topics: outcome.topics,
    },
    {
      title: 'Học viên khoá DevOps nhận offer DevSecOps',
      summary: 'Từ nền tảng DevOps vững chắc, học viên đã tự tin bước sang lĩnh vực DevSecOps.',
      source: 'VNTechies',
      date: '09/2026',
      image: '/static/images/outcomes/devsecops-offer-2026-09.jpg',
      href: 'https://www.facebook.com/share/p/1GCtjy6E3p/',
      topics: ['devops'],
    }
  )
  assert.ok(outcome.imageAlt, 'outcome image needs alt text')
  assert.equal(outcome.quote, undefined, 'an outcome is not a quote')
})

test('the default selection returns no outcome', () => {
  assert.equal(pickTestimonials('devops').some(isOutcome), false)
})

test('the hero topic still opens with the same quote', () => {
  assert.equal(pickTestimonials('general', 1)[0].name, MAIN_QUOTES.general[0])
  assert.equal(
    pickTestimonials('general', 1)[0].quote,
    'Không chỉ học để thi chứng chỉ, mình hiểu được cách thiết kế hệ thống thực tế và tối ưu chi phí cloud.'
  )
})

for (const topic of Object.keys(MAIN_QUOTES)) {
  test(`pickTestimonials('${topic}') returns the same names as on origin/main`, () => {
    const names = pickTestimonials(topic).map((t) => t.name)
    assert.deepEqual(names.slice(0, MAIN_QUOTES[topic].length), MAIN_QUOTES[topic])
    assert.equal(names.length, MAIN_QUOTES[topic].length)
  })
}

test('includeOutcomes puts the outcome first on the DevOps page', () => {
  const items = pickTestimonials('devops', 4, { includeOutcomes: true })
  assert.equal(items.length, 4)
  assert.equal(items[0].kind, 'outcome')
  assert.equal(items.filter(isOutcome).length, 1)
  assert.deepEqual(
    items.slice(1).map((t) => t.name),
    ['Nguyễn Tiến Nghiệp', 'Đặng Hoàng Linh', 'Nguyễn Quốc Trường']
  )
})

test('includeOutcomes does not leak outcomes into other topics', () => {
  for (const topic of ['aws', 'data', 'general']) {
    assert.equal(pickTestimonials(topic, 4, { includeOutcomes: true }).some(isOutcome), false)
  }
})

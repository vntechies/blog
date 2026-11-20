// Verified learner quotes and outcomes, one source for every course page.
//
// topics: which pages a quote fits ('aws', 'devops', 'data', 'general'). Pages pick by
// topic and show each person once.
// Optional proof fields (rendered when present, add them as learners share them):
//   before / after: job title before and after the course, e.g. 'Sinh viên năm 4' → 'Cloud Engineer'
//   credly: public link to the certification badge
//   audience: 'student' | 'working', shown as a label so readers find people like them
//
// Entries are quotes by default. An entry with `kind: 'outcome'` is not a quote: it is a
// result VNTechies reported, so it carries the fields below instead of name/quote/role.
// Outcome fields:
//   title / summary: what happened, in VNTechies' own words (summary is not a quote)
//   source / date: who reported it and when, rendered as "Theo {source} · {date}"
//   image / imageAlt: the proof, e.g. a redacted document
//   href: the public post the result comes from
//   topics: same as quotes
// Outcomes only reach pages that ask for them with pickTestimonials(..., { includeOutcomes: true }).

const testimonials = [
  {
    kind: 'outcome',
    title: 'Học viên khoá DevOps nhận offer DevSecOps',
    summary: 'Từ nền tảng DevOps vững chắc, học viên đã tự tin bước sang lĩnh vực DevSecOps.',
    source: 'VNTechies',
    date: '09/2026',
    image: '/static/images/outcomes/devsecops-offer-2026-09.jpg',
    imageAlt:
      'Thư mời nhận việc vị trí DevSecOps của học viên khoá DevOps (đã ẩn tên học viên và công ty)',
    href: 'https://www.facebook.com/share/p/1GCtjy6E3p/',
    topics: ['devops'],
  },
  {
    name: 'Võ Phi Hùng',
    role: 'Division Manager',
    image: '/static/images/customers/vophihung.jpg',
    quote: 'Khoá học rất thực tế, mentor tận tâm, mình đã pass SAA-C03 ngay lần đầu!',
    topics: ['aws'],
    audience: 'working',
  },
  {
    name: 'Võ Phi Hùng',
    role: 'Division Manager',
    image: '/static/images/customers/vophihung.jpg',
    quote:
      'Không chỉ học để thi chứng chỉ, mình hiểu được cách thiết kế hệ thống thực tế và tối ưu chi phí cloud.',
    topics: ['general'],
    audience: 'working',
  },
  {
    name: 'Lê Văn Thắng',
    role: 'Tech Lead',
    image: '/static/images/customers/lethang.jpg',
    quote:
      'Khóa học có cấu trúc rõ, mentor phản hồi nhanh. Mình áp dụng được ngay vào dự án AWS của team.',
    topics: ['aws', 'general'],
    audience: 'working',
  },
  {
    name: 'Trần Duy Mạnh',
    role: 'Data Engineer',
    image: '/static/images/customers/tranduymanh.jpg',
    quote:
      'Điểm mạnh nhất là phần lab thực tế và review CV/career path. Mình tự tin hơn rất nhiều khi phỏng vấn.',
    topics: ['data', 'general'],
    audience: 'working',
  },
  {
    name: 'Nguyễn Tiến Nghiệp',
    role: 'Frontend Developer',
    image: '/static/images/customers/nguyen tien nghiep.jpg',
    quote:
      'Với 5 năm kinh nghiệm IT mình thấy VNTechies rất hữu ích cho các bạn mới làm quen DevOps. Khoá học dễ học, dễ hiểu, bổ ích. Recommend cho mọi người.',
    topics: ['devops'],
    audience: 'working',
  },
  {
    name: 'Đặng Hoàng Linh',
    role: 'Senior BrSE',
    image: '/static/images/customers/dang hoang linh.jpg',
    quote: 'Khóa học và series hữu ích cho DevOps beginner 👍',
    topics: ['devops'],
    audience: 'working',
  },
  {
    name: 'Nguyễn Quốc Trường',
    role: 'Developer Lead',
    image: '/static/images/customers/nguyen quoc truong.jpg',
    quote:
      'VNTechies đưa ra nhiều kiến thức bổ ích về DevOps, giúp mình càng hiểu rõ hơn hệ thống mình đang làm việc.',
    topics: ['devops'],
    audience: 'working',
  },
  {
    name: 'Lưu Bình Công',
    role: 'Project Manager',
    image: '/static/images/customers/luubinhcong.jpg',
    quote: 'Thông tin rất cụ thể, dễ tiếp cận. Mình thực sự đã được giúp đỡ.',
    topics: ['general'],
    audience: 'working',
  },
]

// Topic-specific quotes first, then general ones; each person at most once.
// Outcomes for the topic come first, in data order (deduped by href), only when asked.
export function pickTestimonials(topic, limit = 4, { includeOutcomes = false } = {}) {
  const outcomes = includeOutcomes
    ? testimonials.filter((t) => t.kind === 'outcome' && t.topics.includes(topic))
    : []
  const ranked = [
    ...testimonials.filter((t) => t.kind !== 'outcome' && t.topics.includes(topic)),
    ...testimonials.filter((t) => t.kind !== 'outcome' && t.topics.includes('general')),
  ]
  const seen = new Set()
  const quotes = ranked.filter((t) => (seen.has(t.name) ? false : seen.add(t.name)))
  const seenHrefs = new Set()
  const pickedOutcomes = outcomes.filter((t) =>
    seenHrefs.has(t.href) ? false : seenHrefs.add(t.href)
  )
  return [...pickedOutcomes, ...quotes].slice(0, limit)
}

export default testimonials

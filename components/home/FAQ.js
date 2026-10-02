import Link from '@/components/Link'

// Inline answer links: accent text, soft underline (5.2:1 light, 7.8:1 dark)
const answerLink =
  'font-medium text-brand-strong underline decoration-brand-strong/40 underline-offset-2 hover:decoration-current'

const faqs = [
  {
    question: 'Trang web này do ai quản lý?',
    answer: (
      <>
        VNTechies Dev Blog là một dự án mã nguồn mở, trang web và các bài viết được đóng góp từ cộng
        đồng và phi lợi nhuận. Bạn có thể tham khảo source code của website này trên github repo{' '}
        <a
          href="https://github.com/vntechies/blog"
          className={answerLink}
          target="_blank"
          rel="noreferrer"
        >
          vntechies/blog
        </a>
      </>
    ),
  },
  {
    question: 'Làm thế nào để đóng góp cho VNTechies Dev Blog?',
    answer: (
      <>
        Các bạn có thể làm theo hướng dẫn tại trang{' '}
        <a href="/docs/contribute" className={answerLink} target="_blank" rel="noreferrer">
          Đóng góp / Từ thiện ❤️‍🔥
        </a>
        . VNTechies xin cảm ơn 🙏
      </>
    ),
  },
  {
    question: 'Làm thế nào để liên hệ với VNTechies?',
    answer: (
      <>
        Nhanh nhất là nhắn Zalo{' '}
        <a
          href="https://zalo.me/0905068885"
          className={answerLink}
          target="_blank"
          rel="noreferrer"
        >
          0905 068 885
        </a>
        , hoặc facebook messenger của VNTechies tại{' '}
        <a href="https://m.me/vntechies" className={answerLink} target="_blank" rel="noreferrer">
          @vntechies
        </a>{' '}
        hoặc email{' '}
        <a href="mailto:info@vntechies.dev" className={answerLink} target="_blank" rel="noreferrer">
          info@vntechies.dev
        </a>{' '}
      </>
    ),
  },
]

const FAQ = () => {
  return (
    <section className="page-section">
      <div className="mb-10 text-center sm:mb-12">
        <h2 className="page-heading">Câu hỏi thường gặp</h2>
        <p className="page-lead mx-auto max-w-2xl">
          Tìm hiểu thêm về VNTechies và cách thức hoạt động của chúng tôi
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="surface-panel p-6 sm:p-8">
            <h3 className="flex items-start gap-4 text-xl font-bold">
              <span className="icon-tile h-8 w-8 rounded-lg text-sm tabular-nums">{index + 1}</span>
              <span className="pt-0.5">{faq.question}</span>
            </h3>
            <div className="mt-3 text-fg-muted sm:pl-12">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ

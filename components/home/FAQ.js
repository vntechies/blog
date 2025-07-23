import Link from '@/components/Link'

const faqs = [
  {
    question: 'Trang web này do ai quản lý?',
    answer: (
      <>
        VNTechies Dev Blog là một dự án mã nguồn mở, trang web và các bài viết được đóng góp từ cộng
        đồng và phi lợi nhuận. Bạn có thể tham khảo source code của website này trên github repo{' '}
        <a
          href="https://github.com/vntechies/blog"
          className="font-medium text-orange-600 underline hover:no-underline dark:text-orange-400"
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
        <a
          href="/docs/contribute"
          className="font-medium text-orange-600 underline hover:no-underline dark:text-orange-400"
          target="_blank"
          rel="noreferrer"
        >
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
        Các bạn có thể liên hệ trực tiếp qua facebook messenger của VNTechies tại{' '}
        <a
          href="https://m.me/vntechies"
          className="font-medium text-orange-600 underline hover:no-underline dark:text-orange-400"
          target="_blank"
          rel="noreferrer"
        >
          @vntechies
        </a>{' '}
        để được phản hồi nhanh nhất hoặc liên hệ qua email{' '}
        <a
          href="mailto:info@vntechies.dev"
          className="font-medium text-orange-600 underline hover:no-underline dark:text-orange-400"
          target="_blank"
          rel="noreferrer"
        >
          info@vntechies.dev
        </a>{' '}
      </>
    ),
  },
]

const FAQ = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Câu hỏi{' '}
            <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent dark:from-gray-300 dark:to-gray-100">
              thường gặp
            </span>
          </h2>
          <p className="text-lg mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            Tìm hiểu thêm về VNTechies và cách thức hoạt động của chúng tôi
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
                  <div className="absolute top-0 right-0 h-32 w-32 -translate-y-16 translate-x-16 transform rounded-full bg-gradient-to-br from-orange-100 to-orange-200 opacity-10 dark:from-orange-900 dark:to-orange-800"></div>

                  <div className="relative">
                    <h3 className="mb-4 flex items-start text-xl font-bold text-gray-900 dark:text-white">
                      <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      {faq.question}
                    </h3>
                    <div className="ml-12 leading-relaxed text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

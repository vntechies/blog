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
          className="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500"
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
          className="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500"
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
          className="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500"
          target="_blank"
          rel="noreferrer"
        >
          @vntechies
        </a>{' '}
        để được phản hồi nhanh nhất hoặc liên hệ qua email{' '}
        <a
          href="mailto:info@vntechies.dev"
          className="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500"
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
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Câu hỏi thường gặp
        </h2>
        <div className="grid border-t border-gray-200 pt-8 text-left dark:border-gray-700 md:gap-16">
          <div>
            {faqs.map((faq) => (
              <div key={faq.question} className="mb-10">
                <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {faq.question}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

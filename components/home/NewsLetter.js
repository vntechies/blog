import NewsletterForm, { BlogNewsletterForm } from '../NewsletterForm'

const Newsletter = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Bản tin VNTechies
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl md:mb-12">
            Cập nhật những tin tức mới nhất của VNTechies về Cloud/DevOps, được gửi vào mỗi sáng thứ
            7 hàng tuần.
          </p>
          <BlogNewsletterForm />
        </div>
      </div>
    </section>
  )
}

export default Newsletter

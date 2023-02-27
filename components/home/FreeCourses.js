import Link from '@/components/Link'
import Card from '@/components/Card'

const FreeCourses = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-12">
        <h2 className="lg:text-6xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl">
          Khoá học DevOps miễn phí
        </h2>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <Card
              title="90 Ngày DevOps 🚀"
              description='Hành trình học tập, tìm hiểu các kiến thức nền tảng về "DevOps" trong 90 ngày'
              imgSrc="/static/images/90daysdevop.png"
              href="/courses/90-ngay-devops/gioi-thieu"
              showMore={false}
            />
            <Card
              title="AWS Cloud Development Kit 😶‍🌫️"
              description="Hướng dẫn sử dụng AWS CDK 💪"
              imgSrc="/static/images/awscdk.png"
              href="/courses/aws/cdk/gioi-thieu"
              showMore={false}
            />
          </div>
        </div>
        <Link
          href="/courses"
          className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 py-1 px-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          role="alert"
          aria-label="Toàn bộ các khoá học miễn phí"
        >
          <span className="text-xs mr-3 rounded-full bg-primary-700 px-4 py-1.5 text-white">
            FREE
          </span>{' '}
          <span className="text-sm font-medium">Toàn bộ các khoá học miễn phí</span>
          <svg
            className="ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default FreeCourses

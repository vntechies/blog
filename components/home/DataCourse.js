import Link from 'next/link'
import Image from 'next/image'

const DataCourse = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-purple-100 opacity-20 dark:bg-purple-900"></div>
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-indigo-100 opacity-20 dark:bg-indigo-900"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text content */}
          <div>
            <div className="mb-4 inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              <span className="mr-2">🚀</span>ĐỘC QUYỀN tại VNTechies
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Chinh phục thế giới{' '}
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Data Engineer Bootcamp
              </span>
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Chương trình 9 tuần (18 buổi) giúp bạn xây dựng năng lực Data Engineering thực chiến:
              từ SQL, ETL, Data Lakehouse đến Kafka Streaming, Airflow orchestration, DataHub và
              Feature Store.
            </p>
            <div className="xs:grid-cols-2 mb-6 grid grid-cols-1 gap-3 sm:gap-4">
              {[
                {
                  title: 'SQL + Data Modeling',
                  description: 'Thiết kế Data Mart, SCD và mô hình dữ liệu thực tế',
                },
                {
                  title: 'Spark + Data Lakehouse',
                  description: 'Triển khai kiến trúc bronze/silver/gold với batch pipeline',
                },
                {
                  title: 'Kafka + Streaming',
                  description: 'Xây CDC pipeline và xử lý dữ liệu real-time',
                },
                {
                  title: 'Airflow + DataHub + Feast',
                  description: 'Orchestration, governance, feature store cho hệ thống hoàn chỉnh',
                },
              ].map((feature, index) => (
                <div key={index} className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                  <h3 className="mb-1 font-medium text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/courses/data-engineer-bootcamp/gioi-thieu"
                className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:bg-purple-700"
              >
                Bắt đầu học ngay
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </Link>
              <Link
                href="/courses/register"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Đăng ký tư vấn lộ trình
              </Link>
            </div>
          </div>
          {/* Image content */}
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/static/images/courses/data-bootcamp.png"
                alt="Data Engineer Bootcamp VDT-C01"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataCourse

import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-orange-100 opacity-20 dark:bg-orange-900"></div>
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-blue-100 opacity-20 dark:bg-blue-900"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Header Section */}
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
            <span className="mr-2">🚀</span>4 khoá học AWS mới đã ra mắt
          </div>

          {/* Main heading */}
          <h1 className="lg:text-6xl mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Chinh phục{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              AWS Certification
            </span>
            <br />
            cùng VNTechies
          </h1>

          {/* Subtitle */}
          <p className="text-lg mx-auto mb-10 max-w-2xl text-gray-600 dark:text-gray-300 sm:text-xl">
            Nâng tầm sự nghiệp IT với các khoá học chứng chỉ AWS được thiết kế bởi chuyên gia
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:bg-orange-600 hover:shadow-xl"
            >
              Khám phá khoá học
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Đọc bài viết
            </Link>
          </div>
        </div>

        {/* Featured Courses */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Solution Architect',
              code: 'SAA-C03',
              level: 'Associate',
              color: 'from-blue-500 to-blue-600',
              link: '/courses/aws/saa/gioi-thieu',
              image: '/static/images/courses/saa.png',
            },
            {
              title: 'Cloud Practitioner',
              code: 'CLF-C02',
              level: 'Foundational',
              color: 'from-green-500 to-green-600',
              link: '/courses/aws/clf/gioi-thieu',
              image: '/static/images/courses/clf.png',
            },
            {
              title: 'Developer',
              code: 'DVA-C02',
              level: 'Associate',
              color: 'from-cyan-500 to-cyan-600',
              link: '/courses/aws/dva/gioi-thieu',
              image: '/static/images/courses/dva.png',
            },
            {
              title: 'AI Practitioner',
              code: 'AIF-C01',
              level: 'Foundational',
              color: 'from-purple-500 to-purple-600',
              link: '/courses/aws/aif/gioi-thieu',
              image: '/static/images/courses/aif.png',
            },
          ].map((course, index) => (
            <Link key={index} href={course.link} className="group">
              <div
                className={`relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 ${
                  course.title === 'Solution Architect' ? 'ring-2 ring-orange-400' : ''
                }`}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  {course.image ? (
                    <Image
                      src={course.image}
                      alt={`AWS ${course.title} certification`}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain"
                    />
                  ) : (
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${course.color} text-white`}
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  AWS {course.title}
                </h3>
                <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">{course.level}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-orange-500 group-hover:text-orange-600">
                    Xem chi tiết →
                  </span>
                  <span className="text-xs rounded bg-gray-100 px-2 py-1 font-mono text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                    {course.code}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

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

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Header Section */}
        <div className="text-center">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
            <span className="mr-2">🚀</span>4 khoá học AWS mới đã ra mắt
          </div>

          {/* Main heading */}
          <h1 className="lg:text-6xl mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Chinh phục
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              AWS Certification
            </span>{' '}
            và{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Cloud DevOps
            </span>
            <br />
            cùng VNTechies
          </h1>

          {/* Social Media Links */}
          <div className="mb-4 flex flex-wrap justify-center gap-3">
            <a
              href="https://fb.me/vntechies"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              aria-label="Facebook"
            >
              <svg
                className="h-5 w-5 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://discord.gg/k2uDgd7NZ4"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl"
              aria-label="Discord"
            >
              <svg
                className="h-5 w-5 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@vntechies.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl"
              aria-label="TikTok"
            >
              <svg
                className="h-5 w-5 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@vntechies"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl"
              aria-label="YouTube"
            >
              <svg
                className="h-5 w-5 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/courses/aws/saa/gioi-thieu"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:bg-orange-600 hover:shadow-xl"
            >
              Khoá học AWS SAA
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
              href="/aws-certification-paths"
              className="inline-flex items-center justify-center rounded-lg border border-orange-300 bg-orange-50 px-8 py-3 text-base font-semibold text-orange-700 shadow-sm transition-all hover:bg-orange-100 dark:border-orange-600 dark:bg-orange-900/20 dark:text-orange-300 dark:hover:bg-orange-900/30"
            >
              Định hướng AWS
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </Link>
            <Link
              href="/courses/"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Tất cả khoá học
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
              title: 'DevOps Engineer',
              code: 'VDE-C01',
              level: 'Associate',
              color: 'from-purple-500 to-purple-600',
              link: '/courses/devops/gioi-thieu',
              image: '/static/images/courses/vde.png',
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
                      alt={
                        course.code === 'VDE-C01'
                          ? 'DevOps Engineer'
                          : `AWS ${course.title} certification`
                      }
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
                  {course.code === 'VDE-C01'
                    ? 'Course DevOps Engineer VDE-C01'
                    : `AWS ${course.title} certification`}
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

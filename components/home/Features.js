import { featuredLinks } from '@/data/Links'
import Link from '@/components/Link'

const Features = () => {
  const getIcon = (index) => {
    const iconProps = {
      className: 'h-8 w-8',
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
    }

    switch (index) {
      case 0:
        return (
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
          </svg>
        )
      case 1:
        return (
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
      default:
        return (
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        )
    }
  }

  return (
    <section className="relative bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Chào mừng tới{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              VNTechies
            </span>
          </h2>
          <p className="text-lg mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            Khám phá những tính năng nổi bật giúp bạn thành công trong hành trình học tập
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredLinks.map((link, index) => (
            <div key={link.title} className="group relative">
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800">
                <div className="absolute top-0 right-0 h-32 w-32 -translate-y-16 translate-x-16 transform rounded-full bg-gradient-to-br from-orange-100 to-orange-200 opacity-20 dark:from-orange-900 dark:to-orange-800"></div>

                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
                    {getIcon(index)}
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
                    {link.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                    {link.summary}
                  </p>

                  <Link href={link.url} aria-label={`Đọc thêm "${link.title}"`}>
                    <span className="inline-flex items-center font-semibold text-orange-500 transition-colors hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
                      Đọc thêm
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

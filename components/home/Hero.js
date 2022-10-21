import Image from 'next/image'
import Link from '@/components/Link'

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h2 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Xin chào 👋
          </h2>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            {`Chào mừng tới VNTechies Dev Blog 🇻🇳 Kho tài nguyên dành cho người Việt yêu công nghệ 👨‍💻👩‍💻`}
          </p>
          <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <Link
              href="/blog"
              className="mr-3 inline-flex items-center justify-center rounded-lg bg-primary-400 px-5 py-3 text-center text-base font-medium hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:focus:ring-primary-900"
            >
              Đọc bài ngay!
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://github.com/vntechies/blog"
              target="_blank"
              rel="noopener"
              className="text-white-500 dark:text-black-400 flex items-center space-x-2"
            >
              <svg
                role="img"
                width="24"
                height="24"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span> Xem trên Github</span>
            </Link>
          </div>
        </div>
        <div className="hidden min-h-full lg:col-span-5 lg:mt-0 lg:flex">
          <Image
            priority
            height="400px"
            width="400px"
            objectFit="contain"
            src="/static/images/cloud.png"
            alt="cloud"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

import Link from '@/components/Link'
import Card from '@/components/Card'

const FreeCourses = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-blue-100 opacity-20 dark:bg-blue-900"></div>
        <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-cyan-100 opacity-20 dark:bg-cyan-900"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800 dark:bg-green-900/30 dark:text-green-300">
            <span className="mr-2">🎓</span>100% Miễn phí
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Khoá học{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
              DevOps
            </span>{' '}
            miễn phí
          </h2>
          <p className="text-lg mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            Hành trình học tập DevOps toàn diện từ cơ bản đến nâng cao, hoàn toàn miễn phí
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            title="90 Ngày DevOps v2 ♾️"
            description="Tập trung vào DevSecOps với các kiến thức bảo mật và chuyên sâu trong SDLC"
            imgSrc="/static/images/ogps/90daysdevopsv2.png"
            href="/courses/90-ngay-devops-v2/gioi-thieu"
            showMore={false}
          />
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
          <Card
            title="K8S Springboot 🕸️"
            description="Triển khai ứng dụng Spring boot trên Kubernetes 🚀🕸️"
            imgSrc="/static/images/ogps/k8s-springboot.png"
            href="/courses/k8s-spring-boot/gioi-thieu"
            showMore={false}
          />
        </div>

        <div className="mt-16 text-center">
          <Link href="/courses" role="alert" aria-label="Toàn bộ các khoá học miễn phí">
            <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
              <span className="text-xs mr-3 rounded-full bg-green-500 px-3 py-1 font-bold text-white">
                FREE
              </span>
              Toàn bộ các khoá học miễn phí
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FreeCourses

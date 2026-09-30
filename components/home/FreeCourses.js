import Link from '@/components/Link'
import Card from '@/components/Card'

const freeCourses = [
  {
    title: '90 Ngày DevOps v2 ♾️',
    description: 'Tập trung vào DevSecOps với các kiến thức bảo mật và chuyên sâu trong SDLC',
    imgSrc: '/static/images/ogps/90daysdevopsv2.png',
    href: '/courses/90-ngay-devops-v2/gioi-thieu',
  },
  {
    title: '90 Ngày DevOps 🚀',
    description: 'Hành trình học tập, tìm hiểu các kiến thức nền tảng về "DevOps" trong 90 ngày',
    imgSrc: '/static/images/90daysdevop.png',
    href: '/courses/90-ngay-devops/gioi-thieu',
  },
  {
    title: 'AWS Cloud Development Kit 😶‍🌫️',
    description: 'Hướng dẫn sử dụng AWS CDK 💪',
    imgSrc: '/static/images/awscdk.png',
    href: '/courses/aws/cdk/gioi-thieu',
  },
  {
    title: 'K8S Springboot 🕸️',
    description: 'Triển khai ứng dụng Spring boot trên Kubernetes 🚀🕸️',
    imgSrc: '/static/images/ogps/k8s-springboot.png',
    href: '/courses/k8s-spring-boot/gioi-thieu',
  },
]

const FreeCourses = () => {
  return (
    <section className="page-section">
      <div className="mb-10 text-center sm:mb-12">
        <span className="page-eyebrow">100% Miễn phí</span>
        <h2 className="page-heading">Khoá học DevOps miễn phí</h2>
        <p className="page-lead mx-auto max-w-2xl">
          Hành trình học tập DevOps toàn diện từ cơ bản đến nâng cao, hoàn toàn miễn phí
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {freeCourses.map((course) => (
          <Card key={course.href} {...course} showMore={false} />
        ))}
      </div>

      <div className="mt-10 text-center sm:mt-12">
        <Link href="/courses#mien-phi" className="action-btn-secondary">
          <span>Toàn bộ các khoá học miễn phí</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default FreeCourses

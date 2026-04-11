import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import {
  FaArrowRight,
  FaCertificate,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaHandshake,
  FaUserTie,
  FaCode,
  FaUsers,
} from 'react-icons/fa'
import Image from 'next/image'
import { useState } from 'react'

const testimonials = [
  {
    rating: 5,
    comment: 'Khoá học rất thực tế, mentor tận tâm, mình đã pass SAA-C03 ngay lần đầu!',
    author: 'Võ Phi Hùng - Division Manager',
    image: '/static/images/customers/vophihung.jpg',
  },
  {
    rating: 5,
    comment: 'Nội dung chi tiết, nhiều lab thực hành, cực kỳ hữu ích cho người mới.',
    author: 'Lê Văn Thắng - Tech Lead',
    image: '/static/images/customers/lethang.jpg',
  },
  {
    rating: 5,
    comment:
      'VNTechies đưa ra nhiều kiến thức bổ ích về DEVOPS, giúp mình càng hiểu rõ hơn hệ thống mình đang làm việc',
    author: 'Nguyễn Quốc Trường - Developer Lead',
    image: '/static/images/customers/nguyen quoc truong.jpg',
  },
  {
    rating: 5,
    comment: '🥰 Thông tin rất cụ thể, dễ tiếp cận. Mình thực sự đã được giúp đỡ',
    author: 'Lưu Bình Công - Project Manager',
    image: '/static/images/customers/luubinhcong.jpg',
  },
  {
    rating: 5,
    comment: 'Khóa học và series hữu ích cho devops beginner 👍',
    author: 'Đặng Hoàng Linh - Senior BrSE',
    image: '/static/images/customers/dang hoang linh.jpg',
  },
  {
    rating: 5,
    comment:
      'Blog rất chất lượng, series 90 ngày DevOps rất phù hợp với cá nhân mình. Cảm ơn đội ngũ của VNTechies rất nhiều',
    author: 'Đào Mạnh Nhất - Software Developer',
    image: '/static/images/customers/daomanhnhat.jpg',
  },
  {
    rating: 5,
    comment:
      'Với 5 năm kinh nghiệm IT mình thấy VNTechies rất hữu ích cho các bạn mới làm quen devops . Khoá học dễ học dễ hiểu bổ ích . Recommend cho mọi người',
    author: 'Nguyễn Tiến Nghiệp - Frontend Developer',
    image: '/static/images/customers/nguyen tien nghiep.jpg',
  },
  {
    rating: 5,
    comment: 'Rất nhiều kiến thức chất lượng và hữu ích cho người muốn tìm hiểu về Tech',
    author: 'Trần Duy Mạnh - Data Engineer',
    image: '/static/images/customers/tranduymanh.jpg',
  },
]
const certificationPaths = {
  foundational: {
    title: 'Foundational',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800',
    certs: [
      {
        name: 'AWS Certified Cloud Practitioner',
        code: 'CLF-C02',
        logo: '/courses/aws/logos/clf.png',
        description: 'Kiến thức cơ bản về AWS Cloud',
        duration: '90 phút',
        questions: '65 câu hỏi',
        passingScore: '700/1000',
        cost: '$100',
        prerequisites: 'Không yêu cầu',
        audience: 'Người mới bắt đầu với AWS',
        courseHref: '/courses/aws/clf/gioi-thieu',
      },
      {
        name: 'AWS Certified AI Practitioner',
        code: 'AIF-C01',
        logo: '/courses/aws/logos/aif.png',
        description: 'AI và Machine Learning cơ bản trên AWS',
        duration: '90 phút',
        questions: '65 câu hỏi',
        passingScore: '700/1000',
        cost: '$100',
        prerequisites: 'Không yêu cầu',
        audience: 'Business Leaders, AI Practitioners',
        href: '/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-ai-practitioner',
        courseHref: '/courses/aws/aif/gioi-thieu',
      },
    ],
  },
  associate: {
    title: 'Associate',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    certs: [
      {
        name: 'AWS Certified Machine Learning Engineer',
        code: 'MLE-A01',
        logo: '/courses/aws/logos/mle.png',
        description: 'Machine Learning Engineering trên AWS',
        duration: '130 phút',
        questions: '65 câu hỏi',
        passingScore: '720/1000',
        cost: '$150',
        prerequisites: 'Associate level cert (khuyến nghị)',
        audience: 'ML Engineers, Data Scientists',
        href: '/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-machine-learning-engineer-associate',
      },
      {
        name: 'AWS Certified Solutions Architect',
        code: 'SAA-C03',
        logo: '/courses/aws/logos/saa.png',
        description: 'Thiết kế kiến trúc trên AWS',
        duration: '130 phút',
        questions: '65 câu hỏi',
        passingScore: '720/1000',
        cost: '$150',
        prerequisites: 'Cloud Practitioner (khuyến nghị)',
        audience: 'Solutions Architects, Solution Design Engineers',
        href: '/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-associate-saa-c03',
        courseHref: '/courses/aws/saa/gioi-thieu',
      },
      {
        name: 'AWS Certified CloudOps Administrator',
        code: 'SOA-C03',
        logo: '/courses/aws/logos/soa.png',
        description: 'Vận hành hệ thống trên AWS',
        duration: '130 phút',
        questions: '65 câu hỏi',
        passingScore: '720/1000',
        cost: '$150',
        prerequisites: 'Cloud Practitioner (khuyến nghị)',
        audience: 'System Administrators, DevOps Engineers',
        href: '/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-sysops-associate',
      },
      {
        name: 'AWS Certified Developer',
        code: 'DVA-C02',
        logo: '/courses/aws/logos/dva.png',
        description: 'Phát triển ứng dụng trên AWS',
        duration: '130 phút',
        questions: '65 câu hỏi',
        passingScore: '720/1000',
        cost: '$150',
        prerequisites: 'Cloud Practitioner (khuyến nghị)',
        audience: 'Software Developers, Software Engineers',
        href: '/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-developer-associate',
        courseHref: '/courses/aws/dva/gioi-thieu',
      },
      {
        name: 'AWS Certified Data Engineer',
        code: 'DEA-C01',
        logo: '/courses/aws/logos/dea.png',
        description: 'Kỹ thuật dữ liệu trên AWS',
        duration: '130 phút',
        questions: '65 câu hỏi',
        passingScore: '720/1000',
        cost: '$150',
        prerequisites: 'Cloud Practitioner (khuyến nghị)',
        audience: 'Data Engineers, Data Architects',
        courseHref: '/courses/aws/dea/gioi-thieu',
      },
    ],
  },
  professional: {
    title: 'Professional',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800',
    certs: [
      {
        name: 'AWS Certified DevOps Engineer',
        code: 'DOP-C02',
        logo: '/courses/aws/logos/dop.png',
        description: 'DevOps practices trên AWS',
        duration: '180 phút',
        questions: '75 câu hỏi',
        passingScore: '750/1000',
        cost: '$300',
        prerequisites: 'Developer Associate hoặc SysOps Associate',
        audience: 'DevOps Engineers, System Administrators',
      },
      {
        name: 'AWS Certified Solutions Architect',
        code: 'SAP-C02',
        logo: '/courses/aws/logos/sap.png',
        description: 'Thiết kế kiến trúc phức tạp trên AWS',
        duration: '180 phút',
        questions: '75 câu hỏi',
        passingScore: '750/1000',
        cost: '$300',
        prerequisites: 'Solutions Architect Associate (khuyến nghị)',
        audience: 'Senior Solutions Architects',
        href: '/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-professional-sap-c01',
      },
    ],
  },

  specialty: {
    title: 'Specialty',
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    borderColor: 'border-orange-200 dark:border-orange-800',
    certs: [
      {
        name: 'AWS Certified Machine Learning',
        code: 'MLS-C01',
        logo: '/courses/aws/logos/mls.png',
        description: 'Machine Learning trên AWS',
        duration: '180 phút',
        questions: '65 câu hỏi',
        passingScore: '750/1000',
        cost: '$300',
        prerequisites: 'Associate level cert (khuyến nghị)',
        audience: 'ML Engineers, Data Scientists',
      },
      {
        name: 'AWS Certified Advanced Networking',
        code: 'ANS-C01',
        logo: '/courses/aws/logos/ans.png',
        description: 'Mạng nâng cao trên AWS',
        duration: '170 phút',
        questions: '65 câu hỏi',
        passingScore: '750/1000',
        cost: '$300',
        prerequisites: 'Associate level cert (khuyến nghị)',
        audience: 'Network Engineers, Network Architects',
      },
      {
        name: 'AWS Certified Security',
        code: 'SCS-C02',
        logo: '/courses/aws/logos/scs.png',
        description: 'Bảo mật trên AWS',
        duration: '170 phút',
        questions: '65 câu hỏi',
        passingScore: '750/1000',
        cost: '$300',
        prerequisites: 'Associate level cert (khuyến nghị)',
        audience: 'Security Engineers, Security Architects',
      },
    ],
  },
}

const rolePaths = [
  {
    role: 'Solutions Architect',
    description:
      'Design, develop, and manage cloud infrastructure and assets, work with DevOps to migrate applications to the cloud.',
    paths: [
      {
        name: 'Cloud Practitioner',
        code: 'CLF-C02',
        level: 'foundational',
        note: 'Tùy chọn cho chuyên gia IT/cloud',
      },
      {
        name: 'AI Practitioner',
        code: 'AIF-C01',
        level: 'foundational',
        note: 'Khuyến nghị cho chuyên gia IT/cloud',
      },
      { name: 'Solutions Architect', code: 'SAA-C03', level: 'associate' },
      { name: 'Solutions Architect', code: 'SAP-C02', level: 'professional' },
      { name: 'Security', code: 'SCS-C02', level: 'specialty', note: 'Chuyên sâu' },
    ],
  },
  {
    role: 'Application Architect',
    description:
      'Design significant aspects of application architecture including user interface, middleware, and infrastructure, and ensure enterprise-wide scalable, reliable, and manageable systems.',
    paths: [
      {
        name: 'Cloud Practitioner',
        code: 'CLF-C02',
        level: 'foundational',
        note: 'Tùy chọn cho chuyên gia IT/cloud',
      },
      {
        name: 'AI Practitioner',
        code: 'AIF-C01',
        level: 'foundational',
        note: 'Khuyến nghị cho chuyên gia IT/cloud',
      },
      { name: 'Solutions Architect', code: 'SAA-C03', level: 'associate' },
      { name: 'Developer', code: 'DVA-C02', level: 'associate' },
      { name: 'DevOps Engineer', code: 'DOP-C02', level: 'professional' },
      { name: 'Solutions Architect', code: 'SAP-C02', level: 'professional', note: 'Chuyên sâu' },
    ],
  },
  {
    role: 'ML Engineer',
    description:
      'Design and implement machine learning solutions, build ML pipelines, and deploy ML models at scale on AWS.',
    paths: [
      {
        name: 'Cloud Practitioner',
        code: 'CLF-C02',
        level: 'foundational',
        note: 'Tùy chọn cho chuyên gia IT/cloud',
      },
      { name: 'AI Practitioner', code: 'AIF-C01', level: 'foundational' },
      { name: 'ML Engineer', code: 'MLE-A01', level: 'associate' },
      { name: 'Machine Learning', code: 'MLS-C01', level: 'specialty', note: 'Chuyên sâu' },
    ],
  },
]

const CertificationCard = ({ cert, level }) => {
  const levelConfig = certificationPaths[level]
  const hasVNTechiesCourse = cert.courseHref

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border-2 sm:rounded-2xl ${levelConfig.borderColor} ${levelConfig.bgColor} p-4 transition-all hover:scale-105 hover:shadow-xl sm:p-6`}
    >
      {hasVNTechiesCourse && (
        <div className="text-xs absolute -right-6 top-3 rotate-45 bg-gradient-to-r from-orange-500 to-red-600 px-6 py-1 font-bold text-white sm:-right-8 sm:top-4 sm:px-8">
          VNTechies
        </div>
      )}

      <div className="mb-4 text-center sm:mb-6">
        <Image
          src={cert.logo}
          alt={cert.name}
          width={80}
          height={80}
          className="mx-auto h-16 w-16 object-contain sm:h-20 sm:w-20 lg:h-24 lg:w-24"
        />
        <span className="text-xs mt-2 inline-block rounded-full bg-white/80 px-3 py-1.5 font-bold text-gray-800 shadow-sm dark:bg-gray-800/80 dark:text-gray-200 sm:mt-3 sm:px-4 sm:py-2 sm:text-sm">
          {cert.code}
        </span>
      </div>

      <h3 className="sm:text-lg mb-2 text-center text-base font-bold leading-tight text-gray-900 dark:text-white sm:mb-3">
        {cert.name}
      </h3>

      <p className="text-xs mb-4 text-center text-gray-600 dark:text-gray-400 sm:mb-6 sm:text-sm">
        {cert.description}
      </p>

      <div className="text-xs mb-4 grid grid-cols-2 gap-2 sm:mb-6 sm:gap-3">
        <div className="rounded-lg bg-white/60 p-2 text-center dark:bg-gray-800/60 sm:p-3">
          <div className="text-xs font-semibold text-gray-900 dark:text-white sm:text-sm">
            {cert.duration}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Thời gian</div>
        </div>
        <div className="rounded-lg bg-white/60 p-2 text-center dark:bg-gray-800/60 sm:p-3">
          <div className="text-xs font-semibold text-gray-900 dark:text-white sm:text-sm">
            {cert.questions}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Câu hỏi</div>
        </div>
        <div className="rounded-lg bg-white/60 p-2 text-center dark:bg-gray-800/60 sm:p-3">
          <div className="text-xs font-semibold text-gray-900 dark:text-white sm:text-sm">
            {cert.passingScore}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Điểm đỗ</div>
        </div>
        <div className="rounded-lg bg-white/60 p-2 text-center dark:bg-gray-800/60 sm:p-3">
          <div className="text-xs font-semibold text-gray-900 dark:text-white sm:text-sm">
            {cert.cost}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Chi phí</div>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {hasVNTechiesCourse ? (
          <>
            <Link href={cert.courseHref}>
              <button className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-600 py-3 text-sm font-bold text-white shadow-lg transition-all hover:shadow-xl sm:py-4 sm:text-base">
                🎆 Khóa học VNTechies
              </button>
            </Link>
            {cert.href && (
              <Link href={cert.href}>
                <button className="w-full rounded-xl border-2 border-gray-300 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 sm:py-3 sm:text-base">
                  Xem kinh nghiệm thi
                </button>
              </Link>
            )}
          </>
        ) : (
          <>
            {cert.href && (
              <Link href={cert.href}>
                <button
                  className={`w-full rounded-xl bg-gradient-to-r ${levelConfig.color} py-3 text-sm font-semibold text-white transition-all hover:shadow-lg sm:py-4 sm:text-base`}
                >
                  Xem kinh nghiệm thi
                </button>
              </Link>
            )}
            <div className="rounded-xl border-2 border-dashed border-gray-300 p-3 text-center dark:border-gray-600 sm:p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                Khóa học sắp ra mắt
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Đăng ký nhận thông báo</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const CertBadge = ({ cert }) => {
  const levelColors = {
    foundational: 'bg-gray-600',
    associate: 'bg-blue-600',
    professional: 'bg-teal-600',
    specialty: 'bg-purple-600',
  }

  return (
    <div className="relative flex flex-col items-center">
      <div
        className={`${levelColors[cert.level]} relative h-20 w-20 rotate-45 transform rounded-lg`}
      >
        <div className="absolute inset-2 flex -rotate-45 flex-col items-center justify-center text-center">
          <div className="text-xs font-bold text-white">{cert.name}</div>
          <div className="text-xs uppercase text-gray-200">{cert.level}</div>
        </div>
      </div>
      {cert.note && (
        <div className="text-xs max-w-20 mt-2 text-center text-gray-500">{cert.note}</div>
      )}
    </div>
  )
}

const RolePathCard = ({ roleData }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{roleData.role}</h3>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">{roleData.description}</p>
        </div>

        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {roleData.paths.map((cert, index) => (
              <div key={cert.code} className="flex items-center">
                <CertBadge cert={cert} />
                {index < roleData.paths.length - 1 && (
                  <FaArrowRight className="mx-4 h-4 w-4 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AWSCertificationPaths() {
  const [showDiagram, setShowDiagram] = useState(false)

  return (
    <>
      <PageSEO
        title="AWS Certification Paths - Lộ trình chứng chỉ AWS 2025"
        description="Hướng dẫn chi tiết các lộ trình chứng chỉ AWS từ Foundational đến Professional và Specialty. Cập nhật mới nhất 2025."
        image="/static/images/aws.png"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                <FaCertificate className="mr-2 h-4 w-4" />
                Cập nhật 2025
              </div>
              <h1 className="lg:text-6xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                AWS{' '}
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Certification Paths
                </span>
              </h1>
              <p className="text-lg mt-6 max-w-2xl text-gray-600 dark:text-gray-300">
                Khám phá các lộ trình chứng chỉ AWS phù hợp với vai trò và mục tiêu nghề nghiệp của
                bạn. Từ Foundational đến Professional và Specialty.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-orange-500/20 to-red-600/20 blur-xl"></div>
              <img
                src="/static/images/aws.png"
                alt="AWS Certification Roadmap"
                className="relative rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Learning Path Selector */}
        <section id="certification-paths" className="mb-12 sm:mb-20">
          <div className="mb-8 px-4 text-center sm:mb-12">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white sm:mb-4 sm:text-4xl">
              Chọn lộ trình phù hợp với bạn
            </h2>
            <p className="sm:text-lg text-base text-gray-600 dark:text-gray-400">
              VNTechies giúp bạn xác định lộ trình tối ưu dựa trên nền tảng hiện tại
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 to-teal-100 p-6 transition-all hover:scale-105 dark:from-emerald-900/20 dark:to-teal-900/20 sm:rounded-2xl sm:p-8">
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-emerald-200/50 dark:bg-emerald-800/50 sm:h-24 sm:w-24"></div>
              <div className="relative">
                <div className="text-lg mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white sm:mb-4 sm:h-12 sm:w-12 sm:text-xl">
                  🌱
                </div>
                <h3 className="text-lg mb-2 font-bold text-gray-900 dark:text-white sm:mb-3 sm:text-xl">
                  Mới bắt đầu
                </h3>
                <p className="mb-3 text-sm text-gray-600 dark:text-gray-400 sm:mb-4 sm:text-base">
                  Chưa có kinh nghiệm IT/Cloud
                </p>
                <div className="text-xs mb-4 space-y-1 sm:mb-6 sm:space-y-2 sm:text-sm">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2">✓</span> AWS Cloud Practitioner
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2">✓</span> AWS AI Practitioner
                  </div>
                </div>
                <Link href="/courses/aws/clf/gioi-thieu">
                  <button className="w-full rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-600 sm:py-3 sm:text-base">
                    Bắt đầu với CLF
                  </button>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 p-6 transition-all hover:scale-105 dark:from-blue-900/20 dark:to-indigo-900/20 sm:rounded-2xl sm:p-8">
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-blue-200/50 dark:bg-blue-800/50 sm:h-24 sm:w-24"></div>
              <div className="relative">
                <div className="text-lg mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white sm:mb-4 sm:h-12 sm:w-12 sm:text-xl">
                  💼
                </div>
                <h3 className="text-lg mb-2 font-bold text-gray-900 dark:text-white sm:mb-3 sm:text-xl">
                  Vai trò kinh doanh
                </h3>
                <p className="mb-3 text-sm text-gray-600 dark:text-gray-400 sm:mb-4 sm:text-base">
                  Sales, Marketing, Management
                </p>
                <div className="text-xs mb-4 space-y-1 sm:mb-6 sm:space-y-2 sm:text-sm">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2">✓</span> Hiểu biết Cloud cơ bản
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2">✓</span> Kiến thức AI/ML
                  </div>
                </div>
                <Link href="/courses/aws/aif/gioi-thieu">
                  <button className="w-full rounded-lg bg-blue-500 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-600 sm:py-3 sm:text-base">
                    Bắt đầu với AIF
                  </button>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 p-6 transition-all hover:scale-105 dark:from-purple-900/20 dark:to-pink-900/20 sm:rounded-2xl sm:p-8">
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-purple-200/50 dark:bg-purple-800/50 sm:h-24 sm:w-24"></div>
              <div className="relative">
                <div className="text-lg mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-white sm:mb-4 sm:h-12 sm:w-12 sm:text-xl">
                  🚀
                </div>
                <h3 className="text-lg mb-2 font-bold text-gray-900 dark:text-white sm:mb-3 sm:text-xl">
                  Chuyên gia IT
                </h3>
                <p className="mb-3 text-sm text-gray-600 dark:text-gray-400 sm:mb-4 sm:text-base">
                  Có kinh nghiệm IT/STEM
                </p>
                <div className="text-xs mb-4 space-y-1 sm:mb-6 sm:space-y-2 sm:text-sm">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2">✓</span> Solutions Architect
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2">✓</span> Developer/DevOps
                  </div>
                </div>
                <Link href="/courses/aws/saa/gioi-thieu">
                  <button className="w-full rounded-lg bg-purple-500 py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-600 sm:py-3 sm:text-base">
                    Bắt đầu với SAA
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Certification Path */}
        <section className="mb-12 sm:mb-16">
          <div className="mb-8 px-4 text-center sm:mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:mb-8 sm:text-3xl">
              Hệ thống chứng chỉ
            </h2>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-slate-50 to-gray-100 p-4 dark:from-gray-800 dark:to-gray-900 sm:rounded-2xl sm:p-6">
            <div className="mx-auto max-w-6xl">
              {/* Vertical Layout for Mobile */}
              <div className="flex flex-col gap-8 md:grid md:grid-cols-4 md:gap-6">
                {/* Foundational */}
                <div className="text-center">
                  <div className="mb-4 sm:mb-6">
                    <span className="rounded bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-2 text-sm font-bold text-white sm:px-4 sm:text-base">
                      FOUNDATIONAL
                    </span>
                  </div>
                  <div className="flex flex-col gap-6 sm:gap-8">
                    <div>
                      <Image
                        src="/courses/aws/logos/clf.png"
                        alt="CLF-C02"
                        width={120}
                        height={120}
                        className="mx-auto mb-3 h-24 w-24 sm:mb-4 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                      />
                      <div className="text-sm font-semibold sm:text-base">CLF-C02</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/aif.png"
                        alt="AIF-C01"
                        width={120}
                        height={120}
                        className="mx-auto mb-3 h-24 w-24 sm:mb-4 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                      />
                      <div className="text-sm font-semibold sm:text-base">AIF-C01</div>
                    </div>
                  </div>
                </div>

                {/* Associate */}
                <div className="text-center">
                  <div className="mb-4 sm:mb-6">
                    <span className="rounded bg-gradient-to-r from-blue-500 to-cyan-600 px-3 py-2 text-sm font-bold text-white sm:px-4 sm:text-base">
                      ASSOCIATE
                    </span>
                  </div>
                  <div className="flex flex-col gap-6 sm:gap-8">
                    <div>
                      <Image
                        src="/courses/aws/logos/mle.png"
                        alt="MLE-A01"
                        width={120}
                        height={120}
                        className="mx-auto mb-3 h-24 w-24 sm:mb-4 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                      />
                      <div className="text-sm font-semibold sm:text-base">MLE-A01</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/saa.png"
                        alt="SAA-C03"
                        width={120}
                        height={120}
                        className="mx-auto mb-3 h-24 w-24 sm:mb-4 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                      />
                      <div className="text-sm font-semibold sm:text-base">SAA-C03</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/soa.png"
                        alt="SOA-C03"
                        width={120}
                        height={120}
                        className="mx-auto mb-3 h-24 w-24 sm:mb-4 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                      />
                      <div className="text-sm font-semibold sm:text-base">SOA-C03</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/dva.png"
                        alt="DVA-C02"
                        width={120}
                        height={120}
                        className="mx-auto mb-3 h-24 w-24 sm:mb-4 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                      />
                      <div className="text-sm font-semibold sm:text-base">DVA-C02</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/dea.png"
                        alt="DEA-C01"
                        width={120}
                        height={120}
                        className="mx-auto mb-3 h-24 w-24 sm:mb-4 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                      />
                      <div className="text-sm font-semibold sm:text-base">DEA-C01</div>
                    </div>
                  </div>
                </div>

                {/* Professional */}
                <div className="text-center">
                  <div className="mb-4 sm:mb-6">
                    <span className="rounded bg-gradient-to-r from-purple-500 to-indigo-600 px-3 py-2 text-sm font-bold text-white sm:px-4 sm:text-base">
                      PROFESSIONAL
                    </span>
                  </div>
                  <div className="flex flex-col gap-6 sm:gap-8">
                    <div>
                      <Image
                        src="/courses/aws/logos/sap.png"
                        alt="SAP-C02"
                        width={120}
                        height={120}
                        className="mx-auto mb-3 h-24 w-24 sm:mb-4 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                      />
                      <div className="text-sm font-semibold sm:text-base">SAP-C02</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/dop.png"
                        alt="DOP-C02"
                        width={120}
                        height={120}
                        className="mx-auto mb-3 h-24 w-24 sm:mb-4 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                      />
                      <div className="text-sm font-semibold sm:text-base">DOP-C02</div>
                    </div>
                  </div>
                </div>

                {/* Specialty */}
                <div className="text-center">
                  <div className="mb-4 sm:mb-6">
                    <span className="rounded bg-gradient-to-r from-orange-500 to-red-600 px-3 py-2 text-sm font-bold text-white sm:px-4 sm:text-base">
                      SPECIALTY
                    </span>
                  </div>
                  <div className="flex flex-col gap-6 sm:gap-8">
                    <div>
                      <Image
                        src="/courses/aws/logos/mls.png"
                        alt="MLS-C01"
                        width={120}
                        height={120}
                        className="mx-auto mb-3 h-24 w-24 sm:mb-4 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                      />
                      <div className="text-sm font-semibold sm:text-base">MLS-C01</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/ans.png"
                        alt="ANS-C01"
                        width={120}
                        height={120}
                        className="mx-auto mb-3 h-24 w-24 sm:mb-4 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                      />
                      <div className="text-sm font-semibold sm:text-base">ANS-C01</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/scs.png"
                        alt="SCS-C02"
                        width={120}
                        height={120}
                        className="mx-auto mb-3 h-24 w-24 sm:mb-4 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                      />
                      <div className="text-sm font-semibold sm:text-base">SCS-C02</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Role-based Learning Paths */}
        <section className="mb-12 sm:mb-16">
          <div className="rounded-t-lg bg-gray-800 p-4 text-white sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold sm:text-2xl">Lộ trình chứng chỉ AWS</h2>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-white sm:px-6">
            <h3 id="architecture" className="sm:text-lg text-base font-semibold">
              Kiến trúc - Architecture
            </h3>
          </div>

          <div className="space-y-8 border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900 sm:space-y-12 sm:p-8">
            {/* Solutions Architect */}
            <div
              id="solutions-architect"
              className="space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Solutions Architect
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kiến trúc sư giải pháp
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Thiết kế, phát triển và quản lý hạ tầng cloud và tài sản, làm việc với DevOps để
                  di chuyển ứng dụng lên cloud.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-6">
                  <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <Image
                      src="/courses/aws/logos/clf.png"
                      alt="Cloud Practitioner"
                      width={80}
                      height={80}
                      className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                    />
                    <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                    <Image
                      src="/courses/aws/logos/aif.png"
                      alt="AI Practitioner"
                      width={80}
                      height={80}
                      className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                    />
                    <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                    <Image
                      src="/courses/aws/logos/saa.png"
                      alt="Solutions Architect Associate"
                      width={80}
                      height={80}
                      className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                    <Image
                      src="/courses/aws/logos/sap.png"
                      alt="Solutions Architect Professional"
                      width={80}
                      height={80}
                      className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                    />
                    <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                    <Image
                      src="/courses/aws/logos/scs.png"
                      alt="Security Specialty"
                      width={80}
                      height={80}
                      className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Application Architect */}
            <div
              id="application-architect"
              className="space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Application Architect
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kiến trúc sư ứng dụng
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Thiết kế các khía cạnh quan trọng của kiến trúc ứng dụng bao gồm giao diện người
                  dùng, middleware và hạ tầng, đảm bảo hệ thống có thể mở rộng, đáng tin cậy và quản
                  lý được trên toàn doanh nghiệp.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-6">
                  <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <Image
                      src="/courses/aws/logos/clf.png"
                      alt="Cloud Practitioner"
                      width={80}
                      height={80}
                      className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                    />
                    <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                    <Image
                      src="/courses/aws/logos/aif.png"
                      alt="AI Practitioner"
                      width={80}
                      height={80}
                      className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                    />
                    <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                    <Image
                      src="/courses/aws/logos/saa.png"
                      alt="Solutions Architect Associate"
                      width={80}
                      height={80}
                      className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                    <Image
                      src="/courses/aws/logos/dva.png"
                      alt="Developer Associate"
                      width={80}
                      height={80}
                      className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                    />
                    <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                    <Image
                      src="/courses/aws/logos/dop.png"
                      alt="DevOps Engineer Professional"
                      width={80}
                      height={80}
                      className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                    />
                    <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                    <Image
                      src="/courses/aws/logos/sap.png"
                      alt="Solutions Architect Professional"
                      width={80}
                      height={80}
                      className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 id="development" className="text-lg font-semibold">
              Phát triển - Development
            </h3>
          </div>

          <div className="border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Software Development Engineer */}
            <div
              id="software-engineer"
              className="space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Software Development/Full stack Engineer
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kỹ sư phát triển phần mềm
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Phát triển, xây dựng và bảo trì phần mềm trên các nền tảng và thiết bị khác nhau.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                  <Image
                    src="/courses/aws/logos/clf.png"
                    alt="Cloud Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/aif.png"
                    alt="AI Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/saa.png"
                    alt="Solutions Architect Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/dva.png"
                    alt="Developer Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/dop.png"
                    alt="DevOps Engineer Professional"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 id="operations" className="text-lg font-semibold">
              Vận hành - Operations
            </h3>
          </div>

          <div className="border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Systems Administrator */}
            <div
              id="systems-admin"
              className="mb-12 space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Systems Administrator
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Quản trị viên hệ thống
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Cài đặt, nâng cấp và bảo trì các thành phần máy tính và phần mềm, tích hợp các quy
                  trình tự động hóa.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                  <Image
                    src="/courses/aws/logos/clf.png"
                    alt="Cloud Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/saa.png"
                    alt="Solutions Architect Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/soa.png"
                    alt="SysOps Administrator Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/dop.png"
                    alt="DevOps Engineer Professional"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </div>
              </div>
            </div>

            {/* Cloud Engineer */}
            <div
              id="cloud-engineer"
              className="space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Cloud Engineer
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kỹ sư cloud
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Triển khai và vận hành hạ tầng điện toán mạng của tổ chức và triển khai hệ thống
                  bảo mật để duy trì an toàn dữ liệu.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                  <Image
                    src="/courses/aws/logos/clf.png"
                    alt="Cloud Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/saa.png"
                    alt="Solutions Architect Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/soa.png"
                    alt="SysOps Administrator Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/scs.png"
                    alt="Security Specialty"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/dop.png"
                    alt="DevOps Engineer Professional"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/ans.png"
                    alt="Advanced Networking Specialty"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 id="devops-section" className="text-lg font-semibold">
              DevOps
            </h3>
          </div>

          <div className="border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Test Engineer */}
            <div
              id="test-engineer"
              className="mb-12 space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Test Engineer
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kỹ sư kiểm thử
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Tích hợp kiểm thử và các thực hành tốt nhất về chất lượng cho phát triển phần mềm
                  từ thiết kế đến phát hành, xuyên suốt chu kỳ sống sản phẩm.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                  <Image
                    src="/courses/aws/logos/clf.png"
                    alt="Cloud Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/saa.png"
                    alt="Solutions Architect Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/dva.png"
                    alt="Developer Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/dop.png"
                    alt="DevOps Engineer Professional"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </div>
              </div>
            </div>

            {/* Cloud DevOps Engineer */}
            <div
              id="devops"
              className="mb-12 space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Cloud DevOps Engineer
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kỹ sư DevOps cloud
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Thiết kế, triển khai và vận hành môi trường điện toán đám mây hỗn hợp quy mô lớn
                  toàn cầu, thúc đẩy các pipeline CI/CD DevOps tự động hóa toàn diện.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                  <Image
                    src="/courses/aws/logos/clf.png"
                    alt="Cloud Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/saa.png"
                    alt="Solutions Architect Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/dva.png"
                    alt="Developer Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/soa.png"
                    alt="SysOps Administrator Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/mle.png"
                    alt="ML Engineer Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/dop.png"
                    alt="DevOps Engineer Professional"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </div>
              </div>
            </div>

            {/* DevSecOps Engineer */}
            <div
              id="devsecops"
              className="space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  DevSecOps Engineer
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kỹ sư DevSecOps
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Tăng tốc việc áp dụng cloud doanh nghiệp đồng thời cho phép cung cấp khả năng
                  nhanh chóng và ổn định bằng các nguyên tắc, phương pháp và công nghệ CI/CD.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                  <Image
                    src="/courses/aws/logos/clf.png"
                    alt="Cloud Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/saa.png"
                    alt="Solutions Architect Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/soa.png"
                    alt="SysOps Administrator Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/mle.png"
                    alt="ML Engineer Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/dop.png"
                    alt="DevOps Engineer Professional"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/scs.png"
                    alt="Security Specialty"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 id="data-analytics" className="text-lg font-semibold">
              Data Engineering - Data Engineer Bootcamp (VDT-C01)
            </h3>
          </div>

          <div className="border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Cloud Data Engineer */}
            <div
              id="data-engineer"
              className="space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Cloud Data Engineer
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kỹ sư dữ liệu cloud
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Tự động hóa việc thu thập và xử lý dữ liệu có cấu trúc/bán cấu trúc và giám sát
                  hiệu suất pipeline dữ liệu.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                  <Image
                    src="/courses/aws/logos/clf.png"
                    alt="Cloud Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/aif.png"
                    alt="AI Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/saa.png"
                    alt="Solutions Architect Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/dea.png"
                    alt="Data Engineer Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/mls.png"
                    alt="Machine Learning Specialty"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 id="security" className="text-lg font-semibold">
              Bảo mật - Security
            </h3>
          </div>

          <div className="border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Cloud Security Engineer */}
            <div
              id="security-engineer"
              className="mb-12 space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Cloud Security Engineer
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kỹ sư bảo mật cloud
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Thiết kế kiến trúc bảo mật máy tính và phát triển các thiết kế bảo mật mạng chi
                  tiết. Phát triển, thực hiện và theo dõi hiệu suất của các biện pháp bảo mật để bảo
                  vệ thông tin.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                  <Image
                    src="/courses/aws/logos/clf.png"
                    alt="Cloud Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/aif.png"
                    alt="AI Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/saa.png"
                    alt="Solutions Architect Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/soa.png"
                    alt="SysOps Administrator Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/scs.png"
                    alt="Security Specialty"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/dop.png"
                    alt="DevOps Engineer Professional"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/ans.png"
                    alt="Advanced Networking Specialty"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </div>
              </div>
            </div>

            {/* Cloud Security Architect */}
            <div
              id="security-architect"
              className="space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Cloud Security Architect
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kiến trúc sư bảo mật cloud
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Thiết kế và triển khai các giải pháp cloud doanh nghiệp áp dụng quản trị để xác
                  định, truyền đạt và giảm thiểu rủi ro kinh doanh và kỹ thuật.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                  <Image
                    src="/courses/aws/logos/clf.png"
                    alt="Cloud Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/aif.png"
                    alt="AI Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/saa.png"
                    alt="Solutions Architect Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/scs.png"
                    alt="Security Specialty"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/sap.png"
                    alt="Solutions Architect Professional"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 id="networking" className="text-lg font-semibold">
              Mạng - Networking
            </h3>
          </div>

          <div className="border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Network Engineer */}
            <div
              id="network-engineer"
              className="space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Network Engineer
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kỹ sư mạng
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Thiết kế và triển khai mạng máy tính và thông tin, chẳng hạn như mạng cục bộ
                  (LAN), mạng diện rộng (WAN), intranet, extranet, v.v.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                  <Image
                    src="/courses/aws/logos/clf.png"
                    alt="Cloud Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/saa.png"
                    alt="Solutions Architect Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/ans.png"
                    alt="Advanced Networking Specialty"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/scs.png"
                    alt="Security Specialty"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 id="ai-ml" className="text-lg font-semibold">
              AI/ML
            </h3>
          </div>

          <div className="rounded-b-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Prompt Engineer */}
            <div
              id="prompt-engineer"
              className="mb-12 space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Prompt Engineer
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kỹ sư prompt
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Thiết kế, kiểm thử và tinh chỉnh các prompt văn bản để tối ưu hóa hiệu suất của
                  các mô hình ngôn ngữ AI.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                  <Image
                    src="/courses/aws/logos/clf.png"
                    alt="Cloud Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/aif.png"
                    alt="AI Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/mle.png"
                    alt="ML Engineer Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/mls.png"
                    alt="Machine Learning Specialty"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </div>
              </div>
            </div>

            {/* Machine Learning Engineer */}
            <div
              id="ml-engineer"
              className="mb-12 space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Machine Learning Engineer
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kỹ sư Machine Learning
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Nghiên cứu, xây dựng và thiết kế các hệ thống trí tuệ nhân tạo (AI) để tự động hóa
                  các mô hình dự đoán và thiết kế các hệ thống, mô hình và sơ đồ machine learning.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                  <Image
                    src="/courses/aws/logos/clf.png"
                    alt="Cloud Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/aif.png"
                    alt="AI Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/saa.png"
                    alt="Solutions Architect Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/mle.png"
                    alt="ML Engineer Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/dea.png"
                    alt="Data Engineer Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/mls.png"
                    alt="Machine Learning Specialty"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </div>
              </div>
            </div>

            {/* Machine Learning Ops Engineer */}
            <div
              id="mlops"
              className="mb-12 space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Machine Learning Ops Engineer
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kỹ sư MLOps
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Xây dựng và duy trì các nền tảng và hạ tầng AI và ML. Thiết kế, triển khai và hỗ
                  trợ vận hành hoạt động mô hình AI/ML và hạ tầng triển khai.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                  <Image
                    src="/courses/aws/logos/clf.png"
                    alt="Cloud Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/aif.png"
                    alt="AI Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/saa.png"
                    alt="Solutions Architect Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/mle.png"
                    alt="ML Engineer Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/dea.png"
                    alt="Data Engineer Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/dop.png"
                    alt="DevOps Engineer Professional"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </div>
              </div>
            </div>

            {/* Data Scientist */}
            <div
              id="data-scientist"
              className="space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Data Scientist
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Nhà khoa học dữ liệu
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Phát triển và triển khai các mô hình AI/ML để giải quyết các vấn đề kinh doanh.
                  Đào tạo và tinh chỉnh các mô hình và đánh giá hiệu suất của chúng.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                  <Image
                    src="/courses/aws/logos/clf.png"
                    alt="Cloud Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/aif.png"
                    alt="AI Practitioner"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/saa.png"
                    alt="Solutions Architect Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/mle.png"
                    alt="ML Engineer Associate"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                  <FaArrowRight className="h-4 w-4 flex-shrink-0 rotate-90 text-gray-400 sm:h-5 sm:w-5 sm:rotate-0" />
                  <Image
                    src="/courses/aws/logos/mls.png"
                    alt="Machine Learning Specialty"
                    width={80}
                    height={80}
                    className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* TODO Lộ trình thực tế */}
        </section>

        {/* Certification Details */}
        <section className="mb-12 sm:mb-16">
          <div className="mb-8 px-4 text-center sm:mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:mb-8 sm:text-3xl">
              Thông tin các kỳ thi chứng chỉ AWS
            </h2>
          </div>
        </section>

        {/* Certification Levels */}
        {Object.entries(certificationPaths).map(([level, config]) => (
          <section key={level} className="mb-12 sm:mb-16">
            <div className="mb-6 px-4 text-center sm:mb-8">
              <h2
                className={`inline-block rounded-lg bg-gradient-to-r ${config.color} px-4 py-2 text-xl font-bold text-white sm:px-6 sm:py-3 sm:text-2xl`}
              >
                {config.title}
              </h2>
            </div>

            <div
              className={`grid gap-4 sm:gap-6 ${
                config.certs.length === 1
                  ? 'grid-cols-1 lg:mx-auto lg:max-w-md'
                  : config.certs.length === 2
                  ? 'grid-cols-1 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {config.certs.map((cert) => (
                <CertificationCard key={cert.code} cert={cert} level={level} />
              ))}
            </div>
          </section>
        ))}

        {/* Study Tips Section */}
        <section className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:from-blue-900/20 dark:to-indigo-900/20 sm:rounded-2xl sm:p-8">
          <h2 className="mb-4 text-center text-xl font-bold text-gray-900 dark:text-white sm:mb-6 sm:text-2xl">
            💡 Lời khuyên cho việc lấy chứng chỉ AWS
          </h2>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start space-x-3">
              <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Bắt đầu với Foundation (CLF hoặc SAA)
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Nền tảng vững chắc cho tất cả chứng chỉ khác
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Thực hành hands-on</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Sử dụng AWS Free Tier để thực hành
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Luyện đề thường xuyên
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Sử dụng practice tests để đánh giá kiến thức
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Tham gia cộng đồng</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Học hỏi từ kinh nghiệm của những người đã đỗ
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Đọc documentation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  AWS docs là nguồn tài liệu chính thức và đáng tin cậy
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Chọn khóa học chất lượng
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Khóa học VNTechies với chuyên gia và thực hành
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose VNTechies */}
        <section className="bg-slate-50 py-12 dark:bg-slate-800 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center sm:mb-16">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:mb-4 sm:text-4xl">
                Tại sao chọn <span className="text-orange-600">VNTechies</span>?
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 sm:text-xl">
                Khác biệt trong phương pháp "Học để làm" - Không chỉ pass chứng chỉ
              </p>
            </div>

            {/* Main USP Highlight */}
            <div className="mb-12 rounded-xl bg-slate-900 p-6 text-white sm:mb-16 sm:rounded-2xl sm:p-8">
              <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2">
                <div>
                  <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                    <FaCode className="h-6 w-6 sm:h-8 sm:w-8" />
                    <h3 className="text-lg font-bold sm:text-2xl">
                      Học để làm - Không chỉ lý thuyết
                    </h3>
                  </div>
                  <p className="sm:text-lg mb-4 text-sm opacity-90 sm:mb-6">
                    50% thời lượng là thực hành lab. Mục tiêu: Sau khóa học, bạn có kiến thức để tự
                    tin ứng tuyển và làm việc với AWS ngay lập tức.
                  </p>
                  <div className="mb-4 rounded-lg bg-white/10 p-3 sm:mb-6 sm:p-4">
                    <h4 className="sm:text-lg mb-2 text-base font-semibold text-orange-400 sm:mb-3">
                      🎯 Giá trị vượt trội
                    </h4>
                    <p className="text-xs opacity-90 sm:text-sm">
                      Định hướng nghề nghiệp, tips viết CV, phỏng vấn cho các vị trí Cloud/DevOps
                      thông qua seminar cuối khoá học.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    <div className="text-xs rounded-lg bg-white/20 px-3 py-1.5 font-medium sm:px-4 sm:py-2 sm:text-sm">
                      ✓ Account lab free, giảm giá 50% thi chứng chỉ
                    </div>
                    <div className="text-xs rounded-lg bg-white/20 px-3 py-1.5 font-medium sm:px-4 sm:py-2 sm:text-sm">
                      ✓ Chia sẻ kinh nghiệm thực chiến từ mentor
                    </div>
                    <div className="text-xs rounded-lg bg-white/20 px-3 py-1.5 font-medium sm:px-4 sm:py-2 sm:text-sm">
                      ✓ Portfolio và side projects mạnh mẽ
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Image
                    src="/static/images/andyquote.png"
                    alt="Andy Jassy Quote"
                    width={300}
                    height={225}
                    className="mx-auto mb-3 h-auto max-w-full rounded-lg sm:mb-4"
                  />
                  <p className="sm:text-lg text-sm font-medium italic opacity-90">
                    "Không có con đường tắt để thành công, chỉ có trải nghiệm thực tế mới giúp bạn
                    vững vàng trên hành trình Cloud!"
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Key Differentiators */}
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800 sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900 sm:mb-6 sm:h-16 sm:w-16">
                  <FaUserTie className="h-6 w-6 text-orange-600 dark:text-orange-400 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg mb-3 font-bold text-gray-900 dark:text-gray-100 sm:mb-4 sm:text-xl">
                  Mentor thực chiến 100% MNC
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                  Toàn bộ mentor đều là chuyên gia AWS đang làm việc tại các công ty nước ngoài, có
                  kinh nghiệm dự án thực tế phong phú.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800 sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900 sm:mb-6 sm:h-16 sm:w-16">
                  <FaHandshake className="h-6 w-6 text-orange-600 dark:text-orange-400 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg mb-3 font-bold text-gray-900 dark:text-gray-100 sm:mb-4 sm:text-xl">
                  Cam kết đồng hành
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                  Hỗ trợ học viên đến khi thi đỗ chứng chỉ. Giải đáp thắc mắc, review CV, tư vấn
                  phỏng vấn và định hướng nghề nghiệp.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800 sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900 sm:mb-6 sm:h-16 sm:w-16">
                  <FaUsers className="h-6 w-6 text-orange-600 dark:text-orange-400 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg mb-3 font-bold text-gray-900 dark:text-gray-100 sm:mb-4 sm:text-xl">
                  Cộng đồng & Network
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                  Tham gia cộng đồng VNTechies với hàng ngàn thành viên, cơ hội việc làm và kết nối
                  với các chuyên gia hàng đầu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12 sm:mb-16">
          <div className="mb-8 px-4 text-center sm:mb-12">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white sm:mb-4 sm:text-3xl">
              Câu chuyện thành công
            </h2>
            <p className="sm:text-lg text-base text-gray-600 dark:text-gray-400">
              Học viên VNTechies đã thành công như thế nào?
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800 sm:rounded-2xl sm:p-6"
              >
                <div className="mb-3 flex items-center sm:mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
                  />
                  <div className="ml-3 sm:ml-4">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white sm:text-base">
                      {testimonial.author.split(' - ')[0]}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                      {testimonial.author.split(' - ')[1]}
                    </p>
                  </div>
                </div>
                <div className="mb-3 flex sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="h-3 w-3 text-yellow-400 sm:h-4 sm:w-4" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-2xl bg-slate-800 p-8 text-center text-white sm:rounded-3xl sm:p-12">
          <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-4xl">
            Bắt đầu hành trình AWS của bạn hôm nay
          </h2>

          <div className="mb-6 flex flex-col gap-3 px-4 sm:mb-8 sm:flex-row sm:justify-center sm:gap-4">
            <Link href="/courses">
              <button className="sm:text-lg w-full rounded-xl bg-orange-500 px-6 py-3 text-base font-bold text-white transition-all hover:bg-orange-600 sm:w-auto sm:px-8 sm:py-4">
                🚀 Xem tất cả khóa học
              </button>
            </Link>
            <Link href="https://www.facebook.com/groups/acevntechies/">
              <button className="sm:text-lg w-full rounded-xl border-2 border-gray-400 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-gray-700 sm:w-auto sm:px-8 sm:py-4">
                💬 Tham gia cộng đồng
              </button>
            </Link>
          </div>

          <div className="text-xs flex flex-col items-center justify-center gap-4 text-gray-400 sm:flex-row sm:gap-8 sm:text-sm">
            <p className="mt-6 text-sm opacity-75">
              Liên hệ ngay qua{' '}
              <Link
                href="https://m.me/vntechies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline"
              >
                {' '}
                Messenger{' '}
              </Link>
              để được tư vấn miễn phí
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

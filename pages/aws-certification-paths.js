import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import {
  FaArrowRight,
  FaCertificate,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa'
import Image from 'next/image'
import { useState } from 'react'

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
      className={`group relative overflow-hidden rounded-2xl border-2 ${levelConfig.borderColor} ${levelConfig.bgColor} p-6 transition-all hover:scale-105 hover:shadow-xl`}
    >
      {hasVNTechiesCourse && (
        <div className="text-xs absolute -right-8 top-4 rotate-45 bg-gradient-to-r from-orange-500 to-red-600 px-8 py-1 font-bold text-white">
          VNTechies
        </div>
      )}

      <div className="mb-6 text-center">
        <Image
          src={cert.logo}
          alt={cert.name}
          width={100}
          height={100}
          className="mx-auto h-24 w-24 object-contain"
        />
        <span className="mt-3 inline-block rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-gray-800 shadow-sm dark:bg-gray-800/80 dark:text-gray-200">
          {cert.code}
        </span>
      </div>

      <h3 className="text-lg mb-3 text-center font-bold text-gray-900 dark:text-white">
        {cert.name}
      </h3>

      <p className="mb-6 text-center text-sm text-gray-600 dark:text-gray-400">
        {cert.description}
      </p>

      <div className="text-xs mb-6 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-white/60 p-3 text-center dark:bg-gray-800/60">
          <div className="font-semibold text-gray-900 dark:text-white">{cert.duration}</div>
          <div className="text-gray-600 dark:text-gray-400">Thời gian</div>
        </div>
        <div className="rounded-lg bg-white/60 p-3 text-center dark:bg-gray-800/60">
          <div className="font-semibold text-gray-900 dark:text-white">{cert.questions}</div>
          <div className="text-gray-600 dark:text-gray-400">Câu hỏi</div>
        </div>
        <div className="rounded-lg bg-white/60 p-3 text-center dark:bg-gray-800/60">
          <div className="font-semibold text-gray-900 dark:text-white">{cert.passingScore}</div>
          <div className="text-gray-600 dark:text-gray-400">Điểm đỗ</div>
        </div>
        <div className="rounded-lg bg-white/60 p-3 text-center dark:bg-gray-800/60">
          <div className="font-semibold text-gray-900 dark:text-white">{cert.cost}</div>
          <div className="text-gray-600 dark:text-gray-400">Chi phí</div>
        </div>
      </div>

      <div className="space-y-3">
        {hasVNTechiesCourse ? (
          <>
            <Link href={cert.courseHref}>
              <button className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-600 py-4 font-bold text-white shadow-lg transition-all hover:shadow-xl">
                🎆 Khóa học VNTechies
              </button>
            </Link>
            {cert.href && (
              <Link href={cert.href}>
                <button className="w-full rounded-xl border-2 border-gray-300 py-3 font-semibold text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
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
                  className={`w-full rounded-xl bg-gradient-to-r ${levelConfig.color} py-4 font-semibold text-white transition-all hover:shadow-lg`}
                >
                  Xem kinh nghiệm thi
                </button>
              </Link>
            )}
            <div className="rounded-xl border-2 border-dashed border-gray-300 p-4 text-center dark:border-gray-600">
              <p className="text-sm text-gray-500 dark:text-gray-400">Khóa học sắp ra mắt</p>
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
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20 rounded-3xl bg-slate-800 px-8 py-16 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-orange-100 px-6 py-3 text-orange-800">
              <FaCertificate className="mr-2 h-5 w-5" />
              <span className="font-semibold">Lộ trình chứng chỉ AWS 2025</span>
            </div>

            <h1 className="lg:text-6xl mb-6 text-5xl font-bold text-white">
              Thành thạo AWS
              <span className="block text-orange-400">Cùng VNTechies</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
              Từ Zero đến Hero với lộ trình học có hệ thống, được thiết kế bởi các chuyên gia AWS có
              kinh nghiệm thực tế
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/courses">
                <button className="text-lg rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition-all hover:bg-orange-600">
                  🚀 Bắt đầu học ngay
                </button>
              </Link>
              <Link href="#certification-paths">
                <button className="text-lg rounded-xl border-2 border-gray-400 px-8 py-4 font-semibold text-white transition-all hover:bg-gray-700">
                  Xem lộ trình
                </button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-400">15+</div>
                <div className="text-sm text-gray-400">Chứng chỉ AWS</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">1000+</div>
                <div className="text-sm text-gray-400">Học viên thành công</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">95%</div>
                <div className="text-sm text-gray-400">Tỷ lệ đỗ</div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path Selector */}
        <section id="certification-paths" className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Chọn lộ trình phù hợp với bạn
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              VNTechies giúp bạn xác định lộ trình tối ưu dựa trên nền tảng hiện tại
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 p-8 transition-all hover:scale-105 dark:from-emerald-900/20 dark:to-teal-900/20">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-emerald-200/50 dark:bg-emerald-800/50"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white">
                  🌱
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  Mới bắt đầu
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Chưa có kinh nghiệm IT/Cloud
                </p>
                <div className="mb-6 space-y-2 text-sm">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2">✓</span> AWS Cloud Practitioner
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2">✓</span> AWS AI Practitioner
                  </div>
                </div>
                <Link href="/courses/aws/clf/gioi-thieu">
                  <button className="w-full rounded-lg bg-emerald-500 py-3 font-semibold text-white transition-all hover:bg-emerald-600">
                    Bắt đầu với CLF
                  </button>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-8 transition-all hover:scale-105 dark:from-blue-900/20 dark:to-indigo-900/20">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-200/50 dark:bg-blue-800/50"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white">
                  💼
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  Vai trò kinh doanh
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Sales, Marketing, Management
                </p>
                <div className="mb-6 space-y-2 text-sm">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2">✓</span> Hiểu biết Cloud cơ bản
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2">✓</span> Kiến thức AI/ML
                  </div>
                </div>
                <Link href="/courses/aws/aif/gioi-thieu">
                  <button className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition-all hover:bg-blue-600">
                    Bắt đầu với AIF
                  </button>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-100 p-8 transition-all hover:scale-105 dark:from-purple-900/20 dark:to-pink-900/20">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-purple-200/50 dark:bg-purple-800/50"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500 text-white">
                  🚀
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  Chuyên gia IT
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">Có kinh nghiệm IT/STEM</p>
                <div className="mb-6 space-y-2 text-sm">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2">✓</span> Solutions Architect
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2">✓</span> Developer/DevOps
                  </div>
                </div>
                <Link href="/courses/aws/saa/gioi-thieu">
                  <button className="w-full rounded-lg bg-purple-500 py-3 font-semibold text-white transition-all hover:bg-purple-600">
                    Bắt đầu với SAA
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Certification Path */}
        <section className="mb-16">
          <div className="mb-12 text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
              Hệ thống chứng chỉ
            </h2>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-gray-100 p-6 dark:from-gray-800 dark:to-gray-900">
            <div className="mx-auto max-w-6xl">
              {/* Compact Layout */}
              <div className="grid gap-6 md:grid-cols-4">
                {/* Foundational */}
                <div className="text-center">
                  <div className="mb-3">
                    <span className="text-xs rounded bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1 font-bold text-white">
                      FOUNDATIONAL
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <Image
                        src="/courses/aws/logos/clf.png"
                        alt="CLF-C02"
                        width={120}
                        height={120}
                        className="h-30 w-30 mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold">CLF-C02</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/aif.png"
                        alt="AIF-C01"
                        width={120}
                        height={120}
                        className="h-30 w-30 mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold">AIF-C01</div>
                    </div>
                  </div>
                </div>

                {/* Associate */}
                <div className="text-center">
                  <div className="mb-3">
                    <span className="text-xs rounded bg-gradient-to-r from-blue-500 to-cyan-600 px-3 py-1 font-bold text-white">
                      ASSOCIATE
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div>
                      <Image
                        src="/courses/aws/logos/mle.png"
                        alt="MLE-A01"
                        width={120}
                        height={120}
                        className="h-30 w-30 mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold">MLE-A01</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/saa.png"
                        alt="SAA-C03"
                        width={120}
                        height={120}
                        className="h-30 w-30 mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold">SAA-C03</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/soa.png"
                        alt="SOA-C03"
                        width={120}
                        height={120}
                        className="h-30 w-30 mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold">SOA-C03</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/dva.png"
                        alt="DVA-C02"
                        width={120}
                        height={120}
                        className="h-30 w-30 mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold">DVA-C02</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/dea.png"
                        alt="DEA-C01"
                        width={120}
                        height={120}
                        className="h-30 w-30 mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold">DEA-C01</div>
                    </div>
                  </div>
                </div>

                {/* Professional */}
                <div className="text-center">
                  <div className="mb-3">
                    <span className="text-xs rounded bg-gradient-to-r from-purple-500 to-indigo-600 px-3 py-1 font-bold text-white">
                      PROFESSIONAL
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <Image
                        src="/courses/aws/logos/sap.png"
                        alt="SAP-C02"
                        width={120}
                        height={120}
                        className="h-30 w-30 mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold">SAP-C02</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/dop.png"
                        alt="DOP-C02"
                        width={120}
                        height={120}
                        className="h-30 w-30 mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold">DOP-C02</div>
                    </div>
                  </div>
                </div>

                {/* Specialty */}
                <div className="text-center">
                  <div className="mb-3">
                    <span className="text-xs rounded bg-gradient-to-r from-orange-500 to-red-600 px-3 py-1 font-bold text-white">
                      SPECIALTY
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div>
                      <Image
                        src="/courses/aws/logos/mls.png"
                        alt="MLS-C01"
                        width={120}
                        height={120}
                        className="h-30 w-30 mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold">MLS-C01</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/ans.png"
                        alt="ANS-C01"
                        width={120}
                        height={120}
                        className="h-30 w-30 mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold">ANS-C01</div>
                    </div>
                    <div>
                      <Image
                        src="/courses/aws/logos/scs.png"
                        alt="SCS-C02"
                        width={120}
                        height={120}
                        className="h-30 w-30 mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold">SCS-C02</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Role-based Learning Paths */}
        <section className="mb-16">
          <div className="rounded-t-lg bg-gray-800 p-6 text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Lộ trình chứng chỉ AWS</h2>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 className="text-lg font-semibold">Kiến trúc - Architecture</h3>
          </div>

          <div className="space-y-12 border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Solutions Architect */}
            <div id="solutions-architect" className="grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/aif.png"
                  alt="AI Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/sap.png"
                  alt="Solutions Architect Professional"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/scs.png"
                  alt="Security Specialty"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>

            {/* Application Architect */}
            <div id="application-architect" className="grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/aif.png"
                  alt="AI Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dva.png"
                  alt="Developer Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dop.png"
                  alt="DevOps Engineer Professional"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/sap.png"
                  alt="Solutions Architect Professional"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 className="text-lg font-semibold">Phát triển - Development</h3>
          </div>

          <div className="border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Software Development Engineer */}
            <div id="software-engineer" className="grid items-center gap-8 lg:grid-cols-3">
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Software Development Engineer
                </h3>
                <h4 className="text-lg mb-4 font-medium text-gray-700 dark:text-gray-300">
                  Kỹ sư phát triển phần mềm
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Phát triển, xây dựng và bảo trì phần mềm trên các nền tảng và thiết bị khác nhau.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/aif.png"
                  alt="AI Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dva.png"
                  alt="Developer Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dop.png"
                  alt="DevOps Engineer Professional"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 className="text-lg font-semibold">Vận hành - Operations</h3>
          </div>

          <div className="border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Systems Administrator */}
            <div id="systems-admin" className="mb-12 grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/soa.png"
                  alt="SysOps Administrator Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dop.png"
                  alt="DevOps Engineer Professional"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>

            {/* Cloud Engineer */}
            <div id="cloud-engineer" className="grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/soa.png"
                  alt="SysOps Administrator Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/scs.png"
                  alt="Security Specialty"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dop.png"
                  alt="DevOps Engineer Professional"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/ans.png"
                  alt="Advanced Networking Specialty"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 className="text-lg font-semibold">DevOps</h3>
          </div>

          <div className="border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Test Engineer */}
            <div id="test-engineer" className="mb-12 grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dva.png"
                  alt="Developer Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dop.png"
                  alt="DevOps Engineer Professional"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>

            {/* Cloud DevOps Engineer */}
            <div id="devops" className="mb-12 grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dva.png"
                  alt="Developer Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/soa.png"
                  alt="SysOps Administrator Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/mle.png"
                  alt="ML Engineer Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dop.png"
                  alt="DevOps Engineer Professional"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>

            {/* DevSecOps Engineer */}
            <div id="devsecops" className="grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/soa.png"
                  alt="SysOps Administrator Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/mle.png"
                  alt="ML Engineer Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dop.png"
                  alt="DevOps Engineer Professional"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/scs.png"
                  alt="Security Specialty"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 className="text-lg font-semibold">Phân tích dữ liệu - Data Analytics</h3>
          </div>

          <div className="border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Cloud Data Engineer */}
            <div id="data-engineer" className="grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/aif.png"
                  alt="AI Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dea.png"
                  alt="Data Engineer Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/mls.png"
                  alt="Machine Learning Specialty"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 className="text-lg font-semibold">Bảo mật - Security</h3>
          </div>

          <div className="border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Cloud Security Engineer */}
            <div id="security-engineer" className="mb-12 grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/aif.png"
                  alt="AI Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/soa.png"
                  alt="SysOps Administrator Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/scs.png"
                  alt="Security Specialty"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dop.png"
                  alt="DevOps Engineer Professional"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/ans.png"
                  alt="Advanced Networking Specialty"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>

            {/* Cloud Security Architect */}
            <div id="security-architect" className="grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/aif.png"
                  alt="AI Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/scs.png"
                  alt="Security Specialty"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/sap.png"
                  alt="Solutions Architect Professional"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 className="text-lg font-semibold">Mạng - Networking</h3>
          </div>

          <div className="border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Network Engineer */}
            <div id="network-engineer" className="grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/ans.png"
                  alt="Advanced Networking Specialty"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/scs.png"
                  alt="Security Specialty"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
            <h3 className="text-lg font-semibold">AI/ML</h3>
          </div>

          <div className="rounded-b-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            {/* Prompt Engineer */}
            <div id="prompt-engineer" className="mb-12 grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/aif.png"
                  alt="AI Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/mle.png"
                  alt="ML Engineer Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/mls.png"
                  alt="Machine Learning Specialty"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>

            {/* Machine Learning Engineer */}
            <div id="ml-engineer" className="mb-12 grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/aif.png"
                  alt="AI Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/mle.png"
                  alt="ML Engineer Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dea.png"
                  alt="Data Engineer Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/mls.png"
                  alt="Machine Learning Specialty"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>

            {/* Machine Learning Ops Engineer */}
            <div id="mlops" className="mb-12 grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/aif.png"
                  alt="AI Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/mle.png"
                  alt="ML Engineer Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dea.png"
                  alt="Data Engineer Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/dop.png"
                  alt="DevOps Engineer Professional"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>

            {/* Data Scientist */}
            <div id="data-scientist" className="grid items-center gap-8 lg:grid-cols-3">
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
              <div className="flex items-center justify-center gap-4 lg:col-span-2">
                <Image
                  src="/courses/aws/logos/clf.png"
                  alt="Cloud Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/aif.png"
                  alt="AI Practitioner"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/saa.png"
                  alt="Solutions Architect Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/mle.png"
                  alt="ML Engineer Associate"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <FaArrowRight className="h-4 w-4 text-gray-400" />
                <Image
                  src="/courses/aws/logos/mls.png"
                  alt="Machine Learning Specialty"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
            </div>
          </div>
          {/* TODO Lộ trình thực tế */}
        </section>

        {/* Certification Details */}
        <section className="mb-16">
          <div className="mb-12 text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
              Thông tin các kỳ thi chứng chỉ AWS
            </h2>
          </div>
        </section>

        {/* Certification Levels */}
        {Object.entries(certificationPaths).map(([level, config]) => (
          <section key={level} className="mb-16">
            <div className="mb-8 text-center">
              <h2
                className={`inline-block rounded-lg bg-gradient-to-r ${config.color} px-6 py-3 text-2xl font-bold text-white`}
              >
                {config.title}
              </h2>
            </div>

            <div
              className={`grid gap-6 ${
                config.certs.length === 1
                  ? 'md:grid-cols-1 lg:mx-auto lg:max-w-md'
                  : config.certs.length === 2
                  ? 'md:grid-cols-2 lg:mx-auto lg:max-w-4xl'
                  : 'md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {config.certs.map((cert) => (
                <CertificationCard key={cert.code} cert={cert} level={level} />
              ))}
            </div>
          </section>
        ))}

        {/* Study Tips Section */}
        <section className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-blue-900/20 dark:to-indigo-900/20">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
            💡 Lời khuyên cho việc lấy chứng chỉ AWS
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        {/* Why VNTechies */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Tại sao chọn VNTechies?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Không chỉ là khóa học, chúng tôi mang đến hệ sinh thái học tập toàn diện
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  🎯
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    Lộ trình có hệ thống
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Từ cơ bản đến nâng cao, được thiết kế bởi các chuyên gia có kinh nghiệm thực tế
                    tại các công ty lớn
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  🛠️
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    Thực hành thực tế
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Không chỉ lý thuyết, mỗi bài học đều có lab thực hành và dự án thực tế
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  👥
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    Cộng đồng hỗ trợ
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Discord với hơn 5000 thành viên, mentor 1-1, và các sự kiện offline thường xuyên
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  🏆
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    Tỷ lệ đỗ cao
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    95% học viên đỗ chứng chỉ ngay lần đầu tiên với phương pháp học tập được chứng
                    minh
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                  📚
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    Tài liệu tiếng Việt
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Toàn bộ nội dung được biên soạn bằng tiếng Việt, dễ hiểu và áp dụng
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                  🚀
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    Hỗ trợ nghề nghiệp
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Tư vấn CV, phỏng vấn và kết nối với các cơ hội việc làm tại các công ty đối tác
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Câu chuyện thành công
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Học viên VNTechies đã thành công như thế nào?
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex items-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">Minh T.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">DevOps Engineer</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Từ zero kinh nghiệm cloud đến Solutions Architect trong 6 tháng. Khóa học VNTechies
                giúp mình có nền tảng vững chắc và thực hành thực tế."
              </p>
              <div className="mt-4 flex space-x-2">
                <span className="text-xs rounded-full bg-green-100 px-3 py-1 font-semibold text-green-800">
                  CLF
                </span>
                <span className="text-xs rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-800">
                  SAA
                </span>
                <span className="text-xs rounded-full bg-purple-100 px-3 py-1 font-semibold text-purple-800">
                  DOP
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex items-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">Hương N.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">ML Engineer</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Chuyển từ Data Analyst sang ML Engineer nhờ khóa học AI Practitioner và ML
                Engineer. Lương tăng gấp đôi sau 1 năm."
              </p>
              <div className="mt-4 flex space-x-2">
                <span className="text-xs rounded-full bg-orange-100 px-3 py-1 font-semibold text-orange-800">
                  AIF
                </span>
                <span className="text-xs rounded-full bg-red-100 px-3 py-1 font-semibold text-red-800">
                  MLE
                </span>
                <span className="text-xs rounded-full bg-yellow-100 px-3 py-1 font-semibold text-yellow-800">
                  MLS
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex items-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">Quân L.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Cloud Architect</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Từ System Admin truyền thống đến Cloud Architect tại công ty đa quốc gia. VNTechies
                không chỉ dạy lý thuyết mà còn hướng dẫn thực hành."
              </p>
              <div className="mt-4 flex space-x-2">
                <span className="text-xs rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-800">
                  SAA
                </span>
                <span className="text-xs rounded-full bg-indigo-100 px-3 py-1 font-semibold text-indigo-800">
                  SAP
                </span>
                <span className="text-xs rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-800">
                  SCS
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-3xl bg-slate-800 p-12 text-center text-white">
          <h2 className="mb-6 text-4xl font-bold">Bắt đầu hành trình AWS của bạn hôm nay</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Tham gia cộng đồng hơn 5000+ học viên đã thành công với VNTechies
          </p>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/courses">
              <button className="text-lg rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition-all hover:bg-orange-600">
                🚀 Xem tất cả khóa học
              </button>
            </Link>
            <Link href="https://discord.gg/k2uDgd7NZ4">
              <button className="text-lg rounded-xl border-2 border-gray-400 px-8 py-4 font-semibold text-white transition-all hover:bg-gray-700">
                💬 Tham gia cộng đồng
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              Miễn phí tư vấn
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              Hỗ trợ 24/7
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              Cộng đồng sôi động
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

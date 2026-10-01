import PremiumCourseHero from '@/components/course/PremiumCourseHero'
import React from 'react'
import Image from '../components/Image'
import {
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaAward,
  FaClock,
  FaRocket,
  FaGlobe,
  FaDollarSign,
  FaChartLine,
  FaLightbulb,
  FaCloud,
  FaCode,
  FaUserTie,
  FaHandshake,
} from 'react-icons/fa'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import CourseRegistrationForm from '../components/CourseRegistrationForm'
import OtherCoursesSection from '@/components/OtherCoursesSection'
import { MONTHLY_INTAKE } from '@/data/courseOffers'
import { pickTestimonials } from '@/data/testimonials'
import {
  AudienceFit,
  CourseFactsStrip,
  CourseFAQ,
  SalaryEvidence,
  StickyEnrollBar,
  TestimonialGrid,
} from '@/components/course/SalesSections'

const courseInfo = {
  title: 'Khoá học AWS Certified Cloud Practitioner (CLF-C02)',
  subtitle: 'Bước đầu tiên vào thế giới Cloud Computing - Từ Zero đến AWS Certified',
  image: '/static/images/ogps/courses/aws-clf-ogp.png',
  startDate: 'Khai giảng hàng tháng',
  duration: '8 buổi học (16 giờ)',
  location: 'Online qua Google',
  price: '5.000.000 VNĐ',
  earlyBird: '2.499.000 VNĐ',
  registrationLink: 'https://m.me/vntechies',
}

// Statistics data - Aligned with AWS Cloud Foundations
const stats = [
  { number: '200+', label: 'Học viên VNTechies' },
  { number: '99%', label: 'Tỷ lệ pass chứng chỉ' },
  { number: '10', label: 'Modules theo chuẩn giáo trình quốc tế' },
  { number: '585', label: 'Phút thực hành lab (49% thời lượng)' },
]

// Course highlights - Aligned with AWS Cloud Foundations
const highlights = [
  {
    icon: <FaRocket className="text-2xl text-blue-500" />,
    title: '🎯 Entry-level Friendly',
    description: 'Không cần background IT - Phù hợp cho người mới hoặc chuyển nghành IT',
  },
  {
    icon: <FaAward className="text-2xl text-yellow-500" />,
    title: '🎉 Certification Focused',
    description: 'Tập trung 100% vào việc pass AWS Cloud Practitioner exam',
  },
  {
    icon: <FaDollarSign className="text-2xl text-green-500" />,
    title: '💰 Voucher 50%',
    description: 'Giảm 50% chi phí đăng ký thi chứng chỉ AWS Cloud Practitioner sau khóa học',
  },
]

// Learning outcomes - Aligned with AWS Cloud Foundations
const learningOutcomes = [
  'Hiểu rõ các khái niệm về điện toán đám mây và hệ sinh thái AWS',
  'Nắm vững 4 domains chính của kỳ thi Cloud Practitioner (CLF - C02)',
  'Thực hành trực tiếp với hơn 20 dịch vụ cốt lõi của AWS (50% thời lượng là lab thực hành)',
  'Hiểu về bảo mật và tuân thủ trên AWS',
  'Vượt qua kỳ thi AWS Cloud Practitioner với mức độ tự tin cao',
  'Sẵn sàng cho các khóa học chứng chỉ AWS nâng cao (SAA, DVA, AIF, v.v.)',
  'Giảm 50% chi phí đăng ký thi chứng chỉ AWS Cloud Practitioner sau khóa học',
]

// Curriculum overview - 8 buổi học gộp từ 10 modules
const curriculum = [
  {
    week: 'Buổi 1',
    title: 'Cloud Concepts & Economics',
    topics: [
      'Introduction to cloud computing',
      'Advantages of the cloud',
      'Introduction to AWS',
      'Moving to the AWS Cloud',
      'Fundamentals of pricing',
      'Total cost of ownership',
      'Activity: Simple Monthly Calculator',
      'AWS Organizations',
      'AWS billing and cost management',
      'Technical support models',
      'Activity: Sample Exam Question',
      'Knowledge check',
    ],
  },
  {
    week: 'Buổi 2',
    title: 'AWS Global Infrastructure & Security',
    topics: [
      'AWS global infrastructures',
      'Demo: AWS global infrastructure',
      'AWS services and service categories',
      'Activity: AWS Management Console Clickthrough',
      'AWS shared responsibility model',
      'Activity: AWS Shared Responsibility Model',
      'AWS IAM',
      'Demo: AWS IAM Console',
      'Securing a new AWS account',
      'Lab: Introduction to AWS IAM',
      'Securing accounts & data',
      'Working to ensure compliance',
      'Activity: Sample Exam Question',
      'Knowledge check',
    ],
  },
  {
    week: 'Buổi 3',
    title: 'Networking and Content Delivery',
    topics: [
      'Networking basics',
      'Amazon VPC',
      'VPC networking',
      'Activity: Label This diagram',
      'Demo: Amazon VPC Console',
      'VPC security',
      'Activity: Design a VPC',
      'Lab: Build a VPC and Launch a Web Server',
      'Route 53',
      'CloudFront',
      'Activity: Sample Exam Question',
      'Knowledge check',
    ],
  },
  {
    week: 'Buổi 4',
    title: 'Compute Services',
    topics: [
      'Compute services overview',
      'Amazon EC2 part 1, 2, 3',
      'Demo: Amazon EC2',
      'Lab: Introduction to Amazon EC2',
      'Activity: Amazon EC2 Versus Managed Services',
      'Demo: Amazon EC2 Part Console',
      'Amazon EC2 cost optimization',
      'Container services',
      'Introduction to AWS Lambda',
      'Activity: AWS Lambda',
      'Introduction to AWS Elastic Beanstalk',
      'Activity: Sample Exam Question',
      'Knowledge check',
    ],
  },
  {
    week: 'Buổi 5',
    title: 'Storage Services',
    topics: [
      'AWS EBS',
      'Demo: Amazon Elastic Block Store Console',
      'Lab: Working with EBS',
      'AWS S3',
      'Demo: AWS S3 Console',
      'AWS EFS',
      'Demo: AWS EFS Console',
      'AWS S3 Glacier',
      'Demo: AWS S3 Glacier Console',
      'Activity: Storage Technology Selection',
      'Activity: Sample Exam Question',
      'Knowledge check',
    ],
  },
  {
    week: 'Buổi 6',
    title: 'Database Services',
    topics: [
      'Amazon RDS',
      'Demo: Amazon RDS Console',
      'Lab: Build a Database Server',
      'Amazon DynamoDB',
      'Demo: Amazon DynamoDB',
      'Amazon Redshift',
      'Amazon Aurora',
      'Activity: Database case study',
      'Activity: Sample Exam Question',
      'Knowledge check',
    ],
  },
  {
    week: 'Buổi 7',
    title: 'Cloud Architecture & Well-Architected Framework',
    topics: [
      'AWS Well-Architected Framework design principles',
      'Activity: AWS Well-Architected Framework Design Principles',
      'Operational excellence',
      'Security',
      'Reliability',
      'Performance efficiency',
      'Cost optimization',
      'Reliability & high availability',
      'AWS Trusted Advisor',
      'Activity: Interpret AWS Trusted Advisor Recommendations',
      'Activity: Sample Exam Question',
      'Knowledge check',
    ],
  },
  {
    week: 'Buổi 8',
    title: 'Auto Scaling, Monitoring & Exam Prep',
    topics: [
      'Elastic Load Balancing',
      'Activity: Elastic Load Balancing',
      'Amazon CloudWatch',
      'Activity: Amazon CloudWatch',
      'Amazon EC2 auto scaling',
      'Lab: Scale & Load Balance your Architecture',
      'Exam preparation & review',
      'Mock exam practice',
      'Final Q&A session',
      'Activity: Sample Exam Question',
      'Knowledge check',
    ],
  },
]

// Sales content (facts from this page and /pricing; salary figures cited)
const courseFacts = [
  { label: 'Lớp mới', value: MONTHLY_INTAKE },
  { label: 'Thời lượng', value: '8 buổi · 16 giờ' },
  { label: 'Hình thức', value: 'Online · 50% thời lượng là lab' },
  { label: 'Học phí', value: 'Ưu đãi 2.499.000₫ (gốc 5.000.000₫)' },
]

const audience = {
  student: [
    'Khoá nhập môn: không cần kiến thức cloud trước đó',
    <>
      Học phí ưu đãi 2.499.000₫, thêm{' '}
      <Link href="/pricing#financial-aid" className="underline underline-offset-2">
        Financial Aid
      </Link>{' '}
      hỗ trợ tới 500.000₫
    </>,
    'Tài khoản AWS thực hành miễn phí, 50% thời lượng là lab',
    'Nền tảng để học tiếp các chứng chỉ SAA, DVA, AIF',
  ],
  working: [
    'Chỉ 8 buổi (16 giờ), học online',
    'Hiểu cloud đủ để làm việc cùng team kỹ thuật, khách hàng và đối tác dùng AWS',
    'Giảm 50% lệ phí thi CLF-C02 sau khoá học',
    'Bận đột xuất? Xem lại video record, truy cập trọn đời',
  ],
}

const salaryEvidence = [
  {
    value: '29,2 triệu ₫',
    label: 'Lương trung vị/tháng của Cloud Engineer tại Việt Nam (3 năm kinh nghiệm)',
    source: {
      name: 'ITviec, Vietnam IT Salary & Recruitment Market Report 2024–2025',
      url: 'https://itviec.com/report/vietnam-it-salary-and-recruitment-market-2024-2025',
    },
  },
  {
    value: '$100',
    label: 'Lệ phí thi CLF-C02. Học viên VNTechies được hỗ trợ giảm 50%',
    source: {
      name: 'AWS Certification (CLF-C02)',
      url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    },
  },
]

const faq = [
  {
    q: 'Bao giờ khai giảng lớp tiếp theo?',
    a: (
      <>
        Khoá học khai giảng hàng tháng. Bạn đăng ký trước, tư vấn viên sẽ xếp bạn vào lớp gần nhất
        và gửi lịch học cụ thể. Muốn biết ngay lịch lớp tới, nhắn Zalo{' '}
        <a
          href={siteMetadata.zalo}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          {siteMetadata.zaloDisplay}
        </a>
        .
      </>
    ),
  },
  {
    q: 'Mình chưa biết gì về cloud, có học được không?',
    a: 'Có. CLF-C02 là chứng chỉ nhập môn và khoá học bắt đầu từ các khái niệm điện toán đám mây, sau đó thực hành trực tiếp với hơn 20 dịch vụ cốt lõi của AWS.',
  },
  {
    q: 'Lệ phí thi CLF-C02 là bao nhiêu?',
    a: 'Lệ phí thi do AWS quy định là 100 USD. Học viên VNTechies được hỗ trợ giảm 50% chi phí đăng ký thi sau khoá học.',
  },
  {
    q: 'Học xong CLF thì nên học gì tiếp?',
    a: 'CLF là bước đầu tiên. Sau khoá, bạn có thể học tiếp SAA-C03 (kiến trúc), DVA-C02 (phát triển ứng dụng) hoặc AIF-C01 (AI) tuỳ định hướng.',
  },
  {
    q: 'Nếu học thử thấy không phù hợp thì sao?',
    a: (
      <>
        Bạn được hoàn 30% học phí trong 3 ngày đầu (chưa truy cập nội dung, hoàn thành dưới 5%) hoặc
        20% trong 7 ngày (hoàn thành dưới 10%). Xem đầy đủ tại{' '}
        <Link href="/pricing#hoan-tien" className="underline underline-offset-2">
          chính sách hoàn tiền
        </Link>
        .
      </>
    ),
  },
]

export default function CourseSpecial({ frontMatter, mentorDetails, otherCourses = [] }) {
  const info = {
    title: frontMatter?.title || courseInfo.title,
    subtitle: frontMatter?.subtitle || courseInfo.subtitle,
    image: courseInfo.image,
    startDate: frontMatter?.startDate || courseInfo.startDate,
    duration: frontMatter?.duration || courseInfo.duration,
    schedule: frontMatter?.schedule || courseInfo.schedule,
    location: frontMatter?.location || courseInfo.location,
    price: courseInfo.price,
    earlyBirdPrice: frontMatter?.earlyBirdPrice || courseInfo.earlyBird,
    registrationLink: frontMatter?.registrationLink || courseInfo.registrationLink,
  }
  const mentors = mentorDetails

  return (
    <div className="course-page premium-course min-h-screen">
      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 8px rgba(255, 153, 0, 0.7), 0 0 12px rgba(255, 153, 0, 0.5);
        }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 2rem 2rem;
        }
      `}</style>

      {/* Hero Section */}
      <PremiumCourseHero courseKey="aws/clf" />
      <CourseRegistrationForm courseTitle="AWS CLF-C02" theme="blue" />
      <div id="course-details" className="premium-course-details">
        <CourseFactsStrip facts={courseFacts} />

        {/* Course Highlights */}
        <section className="py-22 bg-slate-100 dark:bg-gray-900">
          <div className="rounded-2xl p-8 text-white dark:bg-slate-900">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white">
              Tại Sao Chọn Học Cloud Practitioner Với{' '}
              <span className="text-purple-600">VNTechies</span>?
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 p-6 text-center transition-shadow hover:shadow-lg dark:border-gray-900"
                >
                  <div className="mb-4 flex justify-center">{highlight.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Course Information */}
        <section className="bg-gray-50 py-16 px-4 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Course Details */}
              <div>
                <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
                  Thông Tin Khóa Học
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaClock className="mt-1 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Thời gian học</h3>
                      <p className="text-gray-600 dark:text-gray-300">{info.duration}</p>
                      <p className="text-gray-600 dark:text-gray-300">{info.schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaGlobe className="mt-1 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Hình thức học</h3>
                      <p className="text-gray-600 dark:text-gray-300">{info.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaDollarSign className="mt-1 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Học phí</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span>{info.price}</span>
                      </p>
                      <div className="mt-2 text-xs text-green-600 dark:text-green-400">
                        Hỗ trợ học phí lên tới 500.000đ
                      </div>
                      <Link
                        href="/pricing#financial-aid"
                        className="text-xs font-semibold text-green-700 hover:underline dark:text-green-300"
                      >
                        Financial Aid Program
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaUsers className="mt-1 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Khai giảng</h3>
                      <p className="text-gray-600 dark:text-gray-300">{info.startDate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Outcomes */}
              <div>
                <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
                  Sau Khóa Học Bạn Sẽ
                </h2>
                <div className="space-y-3">
                  {learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-green-500" />
                      <p className="text-gray-700 dark:text-gray-300">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="bg-white py-16 px-4 dark:bg-gray-800">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
              Chương Trình Học Chi Tiết
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {curriculum.map((module, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-gray-50 p-6 shadow-lg transition hover:shadow-xl dark:bg-gray-700"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                      {module.week}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    {module.title}
                  </h3>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start space-x-2">
                        <FaLightbulb className="mt-1 flex-shrink-0 text-yellow-500" />
                        <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialGrid items={pickTestimonials('aws')} />

        {/* Mentor Section */}
        <section className="bg-gray-100 px-4 py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
              Đội ngũ Mentor
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-600 dark:text-gray-300">
              100% là chuyên gia AWS tại các công ty nước ngoài (MNC), giàu kinh nghiệm dự án thực
              tế
            </p>

            {/* Instructor Stats */}
            <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">9+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Mentor tham gia giảng dạy
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">
                  100%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Mentor giữ vị trí Senior/Lead/Manager
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">
                  9+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Năm kinh nghiệm AWS</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-orange-600 dark:text-orange-400">
                  100%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Mentor có AWS Certification Professional level
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {mentors.map((m, idx) => {
                const slug = m.slug || (m.name ? m.name.toLowerCase().replace(/\s+/g, '-') : '')
                return (
                  <Link
                    key={idx}
                    href={`/authors/${slug}`}
                    className="block"
                    passHref
                    legacyBehavior
                  >
                    <a className="flex h-full flex-col items-center justify-between rounded-xl bg-gray-50 p-6 shadow transition hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-indigo-700">
                      <div className="flex flex-col items-center" style={{ minHeight: 260 }}>
                        <Image
                          src={m.avatar || m.avatar_url || '/data/authors/default.jpg'}
                          alt={m.name}
                          width={240}
                          height={240}
                          className="mb-3 rounded-full object-cover shadow-lg"
                        />
                      </div>
                      <div className="flex w-full flex-1 flex-col items-center justify-center">
                        {m.currentPosition && (
                          <div className="mb-1 text-center text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                            {m.currentPosition}
                          </div>
                        )}
                        {m.occupation && (
                          <div className="mb-2 text-center text-xs text-gray-500 dark:text-gray-400">
                            {m.occupation}
                          </div>
                        )}
                        <div className="text-center text-lg font-bold">{m.name}</div>
                        <div className="text-center text-sm text-gray-600 dark:text-gray-300">
                          {m.title}
                        </div>
                        {m.bio && <div className="mt-1 text-center text-sm">{m.bio}</div>}
                        {m.socials && (
                          <div className="mt-2 flex justify-center gap-2">
                            {m.socials.map((s, i) => (
                              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
                                <Image
                                  src={s.icon}
                                  alt={s.name}
                                  width={24}
                                  height={24}
                                  className="inline h-6 w-6"
                                />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
        {/* Student Benefits Section */}
        <section className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
              Quyền lợi của học viên
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <FaRocket className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  LAB THỰC HÀNH 50%
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  50% thời lượng khóa học là lab thực hành trực tiếp trên AWS Console với tài khoản
                  thật
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <FaDollarSign className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  VOUCHER 50% LỆ PHÍ THI
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Giảm 50% chi phí đăng ký thi chứng chỉ sau khi hoàn thành khóa học
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <FaClock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  TRUY CẬP TRỌN ĐỜI
                </h3>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-purple-500" />
                    <span>Tài liệu khóa học và video record trọn đời</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-purple-500" />
                    <span>Cập nhật kiến thức mới nhất từ AWS</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
                  <FaUsers className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  CỘNG ĐỒNG HỖ TRỢ
                </h3>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-yellow-500" />
                    <span>
                      <strong>Career Center:</strong> Giới thiệu việc làm từ Mentor và cộng đồng
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-yellow-500" />
                    <span>
                      <strong>VNTechies Community:</strong> Kết nối và xây dựng network chuyên
                      nghiệp
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-yellow-500" />
                    <span>
                      <strong>Cộng đồng Q&A:</strong> Hỏi đáp, tư vấn kiến thức và công việc 24/7
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                  <FaAward className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  SỰ KIỆN ĐỘC QUYỀN
                </h3>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-red-500" />
                    <span>Miễn phí tham gia Master Class và Workshop</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-red-500" />
                    <span>Alumni's Support và Office Hour với chuyên gia</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-red-500" />
                    <span>Cập nhật trend và công nghệ mới nhất trong ngành</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                  <FaChartLine className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  HỖ TRỢ THI CHỨNG CHỈ
                </h3>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-indigo-500" />
                    <span>Mock exams và practice tests miễn phí</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-indigo-500" />
                    <span>Hướng dẫn đăng ký thi và lịch thi</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-indigo-500" />
                    <span>Review và feedback trước khi thi thật</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AudienceFit student={audience.student} working={audience.working} />

        <section className="px-4 pb-8">
          <div className="mx-auto max-w-6xl">
            <SalaryEvidence
              title="Cloud đáng học thế nào? Số liệu thị trường"
              items={salaryEvidence}
              note="Số liệu khảo sát thị trường để tham khảo. Thu nhập thực tế phụ thuộc kinh nghiệm, vị trí và công ty; VNTechies không cam kết mức lương."
            />
          </div>
        </section>

        {/* Registration Form */}

        <CourseFAQ items={faq} />

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">
              🚀 Đừng Bỏ Lỡ Cơ Hội Thay Đổi Sự Nghiệp!
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Chỉ còn 20 suất với giá ưu đãi 50%. Đăng ký ngay để bắt đầu hành trình lên mây của
              bạn!
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#registration-form"
                className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-colors hover:bg-gray-100"
              >
                <FaRocket className="mr-2" />
                Đăng Ký Ngay - Chỉ {info.earlyBirdPrice}
              </a>
            </div>
            <p className="mt-4 text-sm text-blue-100">
              💰 Giảm 50% lệ phí thi chứng chỉ | Thực hành miễn phí trên tài khoản AWS | 📚 Tài liệu
              học tập trọn đời
            </p>
          </div>
        </section>

        {/* Other Courses Section */}
        <OtherCoursesSection otherCourses={otherCourses} />
      </div>
      <StickyEnrollBar
        code="AWS CLF-C02"
        intake={MONTHLY_INTAKE}
        fromPrice={2499000}
        offer={null}
        active={false}
      />
      <div className="h-16" aria-hidden="true" />
    </div>
  )
}

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
} from 'react-icons/fa'
import Link from 'next/link'

const testimonials = [
  {
    rating: 5,
    comment:
      'Khóa học tuyệt vời! Từ zero kiến thức cloud đến pass AWS Cloud Practitioner chỉ sau 8 tuần. Mentor rất tận tâm!',
    author: 'Nguyễn Thị Lan - Marketing Manager',
  },
  {
    rating: 5,
    comment:
      'Nội dung dễ hiểu, thực tế. Mình là người không có background IT nhưng vẫn học được. Recommended!',
    author: 'Trần Văn Minh - Sales Executive',
  },
  {
    rating: 5,
    comment: 'Pass Cloud Practitioner ngay lần đầu! Giờ đang tiếp tục học SAA. Cảm ơn VNTechies!',
    author: 'Lê Thị Hương - Project Manager',
  },
  {
    rating: 5,
    comment:
      'Khóa học giúp mình hiểu rõ cloud computing và mở ra career path mới. Đầu tư xứng đáng!',
    author: 'Phạm Đức Anh - Fresher Developer',
  },
  {
    rating: 5,
    comment:
      'Mentor kinh nghiệm, giảng dạy dễ hiểu. Lab thực hành giúp mình tự tin với AWS console',
    author: 'Võ Thị Mai - Business Analyst',
  },
  {
    rating: 5,
    comment: 'Chuyển career từ finance sang cloud. Khóa học này là starting point hoàn hảo!',
    author: 'Nguyễn Hoàng Nam - Finance Manager',
  },
]

const courseInfo = {
  title: 'Khoá học AWS Certified Cloud Practitioner (CLF-C02)',
  subtitle: 'Bước đầu tiên vào thế giới Cloud Computing - Từ Zero đến AWS Certified',
  image: '/static/images/courses/awsclfc02Info.png',
  startDate: '15/08/2025',
  duration: '6 tuần (12 buổi, 24h)',
  location: 'Online qua Zoom',
  price: '5.000.000 VNĐ',
  earlyBird: '1.199.000 VNĐ (giảm 20% - chỉ 50 suất đầu)',
  registrationLink: 'https://m.me/vntechies',
}

// Statistics data
const stats = [
  { number: '100+', label: 'Học viên đã tham gia' },
  { number: '99%', label: 'Tỷ lệ pass chứng chỉ' },
  { number: '12', label: 'Buổi học đi kèm thực hành và ôn tập kĩ lưỡng' },
  { number: '5+', label: 'Mentor kinh nghiệm' },
]

// Course highlights
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
    icon: <FaChartLine className="text-2xl text-purple-500" />,
    title: '🚀 Career Booster',
    description: 'Mở ra career path mới với mức lương cạnh tranh trên thị trường',
  },
]

// Learning outcomes
const learningOutcomes = [
  'Hiểu rõ cloud computing concepts và AWS ecosystem',
  'Nắm vững 4 domains chính của Cloud Practitioner exam',
  'Làm thực tế với 20+ AWS core services',
  'Master AWS pricing models và cost optimization',
  'Hiểu AWS security và compliance frameworks',
  'Có khả năng tư vấn AWS solutions cho businesses',
  'Pass AWS Cloud Practitioner exam với confidence',
  'Ready cho next-level AWS certifications',
]

// Curriculum overview
const curriculum = [
  {
    week: 'Tuần 1',
    title: 'Cloud Computing Foundation',
    topics: [
      'Cloud vs On-premises',
      'IaaS, PaaS, SaaS',
      'AWS Global Infrastructure and Reliability',
      'Compute in the Cloud',
      'AWS Console hands-on',
    ],
  },
  {
    week: 'Tuần 2',
    title: 'Core AWS Services',
    topics: [
      'Networking',
      'Storage & Database',
      'RDS, DynamoDB intro',
      'Lambda serverless',
      'Hands-on labs',
    ],
  },
  {
    week: 'Tuần 3',
    title: 'Security & Compliance',
    topics: [
      'Shared Responsibility Model',
      'IAM deep dive',
      'Encryption & KMS',
      'Security best practices',
    ],
  },
  {
    week: 'Tuần 4',
    title: 'Monitoring & Pricing',
    topics: ['Monitoring and Analytics', 'Cost management tools', 'Pricing Models', 'Support Plan'],
  },
  {
    week: 'Tuần 5',
    title: 'Migration & Innovation',
    topics: ['Migration and Innovation', 'Exam strategies', 'Mock exams 1'],
  },
  {
    week: 'Tuần 6',
    title: 'Exam Preparation',
    topics: ['Mock exams 2'],
  },
]

export default function CourseSpecial({ frontMatter, mentorDetails }) {
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
    <div
      className="min-h-screen"
      style={{ backgroundColor: '#0d1117', fontFamily: "'Be Vietnam Pro', sans-serif" }}
    >
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
      <section className="flex min-h-screen items-center justify-center p-4">
        <div
          className="flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-gray-700 shadow-2xl md:flex-row"
          style={{ backgroundColor: '#161b22' }}
        >
          {/* Left Content */}
          <div className="z-10 w-full p-8 text-white md:w-3/5 md:p-10">
            <div className="mb-6 flex items-center">
              <Image
                src="/static/images/logo.png"
                alt="Logo VNTECHIES"
                width={40}
                height={40}
                className="mr-3 h-10"
              />
              <span className="text-xl font-bold tracking-wider text-gray-300">VNTECHIES</span>
            </div>

            <p className="text-lg text-gray-400">Khoá học</p>
            <h1 className="my-2 text-3xl font-black uppercase md:text-4xl">
              AWS Certified <br />
              <span className="text-glow" style={{ color: '#FF9900' }}>
                Cloud Practitioner
              </span>
            </h1>
            <p className="mb-8 text-xl font-bold text-gray-500">(CLF-C02)</p>

            <div className="mb-8 space-y-4 text-gray-300">
              <div className="flex items-start">
                <FaCheckCircle
                  className="mr-3 mt-1 h-5 w-5 flex-shrink-0"
                  style={{ color: '#FF9900' }}
                />
                <span>
                  <b>Nền tảng vững chắc:</b> Lộ trình tinh gọn, bám sát đề thi thật.
                </span>
              </div>
              <div className="flex items-start">
                <FaCheckCircle
                  className="mr-3 mt-1 h-5 w-5 flex-shrink-0"
                  style={{ color: '#FF9900' }}
                />
                <span>
                  <b>Thực chiến:</b> 35%+ thời lượng là Lab & Use Case trên tài khoản AWS.
                </span>
              </div>
              <div className="flex items-start">
                <FaCheckCircle
                  className="mr-3 mt-1 h-5 w-5 flex-shrink-0"
                  style={{ color: '#FF9900' }}
                />
                <span>
                  <b>Cộng đồng:</b> Hỗ trợ 1-1 và tham gia cộng đồng 3000+ thành viên.
                </span>
              </div>
            </div>

            {/* Key Stats */}
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#FF9900' }}>
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href={info.registrationLink}
              className="text-lg inline-flex items-center rounded-lg px-8 py-4 font-semibold transition-colors hover:opacity-90"
              style={{ backgroundColor: '#FF9900', color: '#000' }}
            >
              <FaRocket className="mr-2" />
              Đăng Ký Ngay - Chỉ {info.earlyBirdPrice}
            </Link>
          </div>

          {/* Right Image */}
          <div className="bg-grid-pattern relative flex w-full items-center justify-center overflow-hidden p-6 md:w-2/5">
            <div
              className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full opacity-10 blur-3xl"
              style={{ backgroundColor: '#FF9900' }}
            ></div>
            <div
              className="absolute -top-20 -left-24 h-72 w-72 rounded-full opacity-10 blur-3xl"
              style={{ backgroundColor: '#2563eb' }}
            ></div>

            <div className="relative flex h-full w-full items-center justify-center">
              <Image
                src={info.image}
                alt={info.title}
                width={400}
                height={300}
                className="h-auto max-w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="bg-white py-16 px-4 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Tại Sao Chọn Khóa Học Của Chúng Tôi?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 p-6 text-center transition-shadow hover:shadow-lg dark:border-gray-700"
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
                      <span className="line-through">{info.price}</span>
                      <span className="ml-2 font-bold text-red-600">{info.earlyBirdPrice}</span>
                    </p>
                    <p className="text-sm text-gray-500">Early bird - Chỉ 50 suất đầu</p>
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
              <div key={index} className="rounded-lg bg-gray-50 p-6 dark:bg-gray-700">
                <div className="mb-4 flex items-center">
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

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-4 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Học Viên Nói Gì Về Chúng Tôi
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 italic text-gray-700 dark:text-gray-300">
                  "{testimonial.comment}"
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Mentor Section */}
      <section className="bg-gray-100 px-4 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
            Đội ngũ Mentor
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-600 dark:text-gray-300">
            100% là chuyên gia AWS tại các công ty nước ngoài (MNC), giàu kinh nghiệm dự án thực tế
          </p>

          {/* Instructor Stats */}
          <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">4+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Mentor tham gia giảng dạy
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Mentor giữ vị trí Senior/Lead/Manager
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">9+</div>
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
                <Link key={idx} href={`/authors/${slug}`} className="block" passHref legacyBehavior>
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
                        <div className="text-xs mb-2 text-center text-gray-500 dark:text-gray-400">
                          {m.occupation}
                        </div>
                      )}
                      <div className="text-lg text-center font-bold">{m.name}</div>
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
                <FaClock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">TRỌN ĐỜI</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Truy cập vào hệ thống thư viện nội bộ của VNTechies, tài liệu khóa học và video
                record
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <FaUsers className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Cộng đồng hỗ trợ học viên
              </h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start space-x-2">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span>
                    <strong>Career Center:</strong> Giới thiệu việc làm từ Mentor và cộng đồng
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span>
                    <strong>VNTechies Community:</strong> Kết nối và xây dựng network chuyên nghiệp
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span>
                    <strong>Cộng đồng Q&A:</strong> Hỏi đáp, tư vấn kiến thức và công việc 24/7
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <FaAward className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Sự kiện độc quyền
              </h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start space-x-2">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-purple-500" />
                  <span>Miễn phí tham gia Master Class và Workshop</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-purple-500" />
                  <span>Alumni's Support và Office Hour với chuyên gia</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-purple-500" />
                  <span>Cập nhật trend và công nghệ mới nhất trong ngành</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">
            🚀 Đừng Bỏ Lỡ Cơ Hội Thay Đổi Sự Nghiệp!
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Chỉ còn 50 suất early bird với giá ưu đãi 20%. Đăng ký ngay để bắt đầu hành trình lên
            mây của bạn!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={info.registrationLink}
              className="text-lg inline-flex items-center rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
            >
              <FaRocket className="mr-2" />
              Đăng Ký Ngay - Chỉ {info.earlyBirdPrice}
            </Link>
          </div>
          <p className="mt-4 text-sm text-blue-100">
            💰 Hoàn tiền 100% nếu không pass exam | Tư vấn 1:1 với chuyên gia | 📚 Tài liệu học tập
            trọn đời
          </p>
        </div>
      </section>
    </div>
  )
}

import React from 'react'
import Image from '../components/Image'
import {
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaGraduationCap,
  FaUserTie,
  FaHandshake,
  FaCode,
  FaLaptopCode,
  FaCertificate,
  FaRocket,
} from 'react-icons/fa'
import Link from 'next/link'

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

const courseInfo = {
  title: 'AWS Academy Cloud Developing - Phát triển ứng dụng Cloud',
  subtitle: 'Học lập trình & phát triển ứng dụng thực tế trên AWS',
  image: '/static/images/courses/aws-cloud-developing.png',
  startDate: '15/02/2025',
  duration: '10 tuần (40 giờ học)',
  schedule: 'Tối Thứ 3 & Thứ 6 (19:30 - 21:30)',
  location: 'Online qua Zoom + Lab thực hành',
  price: '12.000.000 VNĐ',
  earlyBird: '10.800.000 VNĐ (giảm 10%)',
  registrationLink: 'https://m.me/vntechies',
}

const stats = [
  { number: '40h', label: 'Thời lượng học tập' },
  { number: '14', label: 'Module thực hành' },
  { number: '20+', label: 'Lab hands-on' },
  { number: '100%', label: 'Ứng dụng thực tế' },
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
    price: frontMatter?.price || courseInfo.price,
    earlyBirdPrice: frontMatter?.earlyBirdPrice || courseInfo.earlyBirdPrice,
    registrationLink: frontMatter?.registrationLink || courseInfo.registrationLink,
    hotline: frontMatter?.hotline || courseInfo.hotline,
    objectives: frontMatter?.objectives || courseInfo.objectives,
    forWho: frontMatter?.forWho || courseInfo.forWho,
    content: frontMatter?.content || courseInfo.content,
  }

  const mentors = mentorDetails

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-slate-50 px-4 py-24 dark:from-gray-900 dark:to-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-1 lg:order-1">
              <div className="mb-8 inline-flex items-center rounded-full bg-gradient-to-r from-yellow-100 to-yellow-50 px-6 py-3 text-yellow-700 shadow-sm dark:from-yellow-900/30 dark:to-yellow-800/20 dark:text-yellow-400">
                <FaCode className="mr-3 h-5 w-5" />
                <span className="font-semibold">🚧 Khóa học đang hoàn thiện - Sắp ra mắt</span>
              </div>

              <h1 className="lg:text-6xl mb-8 text-5xl font-bold leading-tight text-gray-900 dark:text-gray-100">
                <span className="bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent dark:from-gray-100 dark:to-slate-300">
                  AWS Cloud
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Developing
                </span>
                <br />
                <span className="text-4xl lg:text-5xl">cho Developer</span>
              </h1>

              {/* Special Offer Highlight */}
              <div className="mb-8 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white shadow-xl">
                <div className="text-center">
                  <div className="mb-4">
                    <h3 className="text-lg mb-2 font-bold">🎁 Ưu đãi đặc biệt</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white/10 p-3">
                      <div className="flex items-center gap-3">
                        <FaCertificate className="h-5 w-5 flex-shrink-0 text-yellow-300" />
                        <span className="text-sm font-medium">
                          Voucher giảm 50% lệ phí thi chứng chỉ AWS DVA-C02
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-yellow-200">(Tiết kiệm $75)</div>
                    </div>
                    <div className="flex items-center justify-center gap-3 rounded-lg bg-white/10 p-3">
                      <FaLaptopCode className="h-5 w-5 flex-shrink-0 text-yellow-300" />
                      <span className="text-sm font-medium">
                        Tài khoản AWS thực hành miễn phí toàn khóa học
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coming Soon Notice */}
              <div className="mb-10 rounded-2xl border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 p-8 shadow-xl dark:border-yellow-700 dark:from-yellow-900/20 dark:to-orange-900/20">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold text-yellow-800 dark:text-yellow-300">
                    🚧 Khóa học đang được hoàn thiện
                  </h3>
                  <p className="mt-2 text-yellow-700 dark:text-yellow-400">
                    Chúng tôi đang chuẩn bị nội dung chất lượng cao nhất cho bạn
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-600" />
                    <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      Giáo án và kho tài liệu độc quyền
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-600" />
                    <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      Lập trình, triển khai, vận hành ứng dụng cloud-native
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-600" />
                    <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      Hỗ trợ nghề nghiệp & CV, phỏng vấn cuối khoá học
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-600" />
                    <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      Giảng viên tới từ các công ty đa quốc gia
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-600" />
                    <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {'>'}30 thời lượng thực hành với các dự án thực tế
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-600" />
                    <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      Chứng chỉ AWS Developer Associate (DVA-C02)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="https://m.me/vntechies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 font-bold text-white shadow-xl transition hover:from-orange-700 hover:to-orange-600 hover:shadow-2xl"
                >
                  💬 Liên hệ tư vấn & cập nhật thông tin
                  <FaRocket className="ml-3 h-5 w-5" />
                </a>
                <div className="text-center">
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">📢 Đăng ký nhận thông báo:</span> Chúng tôi sẽ
                    thông báo ngay khi khóa học sẵn sàng
                  </p>
                </div>
              </div>
            </div>

            <div className="relative order-2 lg:order-2">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/20 to-slate-600/20 blur-xl"></div>
              <Image
                src="/static/images/courses/awsdvac02-hero.png"
                alt={info.title}
                width={650}
                height={450}
                className="relative rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Team Section */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Đội ngũ Mentor
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              100% là chuyên gia AWS tại các công ty nước ngoài (MNC), giàu kinh nghiệm dự án thực
              tế
            </p>
          </div>

          {/* Mentor Stats */}
          <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-orange-600">4+</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Mentor tham gia giảng dạy
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-orange-600">100%</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Mentor giữ vị trí Senior/Lead/Manager
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-orange-600">9+</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Năm kinh nghiệm AWS
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-orange-600">100%</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Mentor có AWS Certification Professional level
              </div>
            </div>
          </div>

          {/* Mentor Profiles */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {mentors &&
              mentors.map((m, idx) => {
                const slug = m.slug || (m.name ? m.name.toLowerCase().replace(/\s+/g, '-') : '')
                return (
                  <Link
                    key={idx}
                    href={`/authors/${slug}`}
                    className="block"
                    passHref
                    legacyBehavior
                  >
                    <a className="flex h-full flex-col items-center justify-between rounded-xl bg-gray-50 p-6 shadow transition hover:bg-orange-50 dark:bg-gray-800 dark:hover:bg-orange-900/20">
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
                          <div className="mb-1 text-center text-sm font-semibold text-orange-700 dark:text-orange-300">
                            {m.currentPosition}
                          </div>
                        )}
                        {m.occupation && (
                          <div className="text-xs mb-2 text-center text-gray-500 dark:text-gray-400">
                            {m.occupation}
                          </div>
                        )}
                        <div className="text-lg text-center font-bold text-gray-900 dark:text-gray-100">
                          {m.name}
                        </div>
                        <div className="text-center text-sm text-gray-600 dark:text-gray-300">
                          {m.title}
                        </div>
                        {m.bio && (
                          <div className="mt-1 text-center text-sm text-gray-600 dark:text-gray-300">
                            {m.bio}
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

      {/* Testimonials */}
      <section className="bg-slate-50 py-20 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Học viên nói gì?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              90% học viên pass chứng chỉ ngay lần đầu và có việc làm tốt
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl dark:bg-gray-900"
              >
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(t.rating)].map((_, idx) => (
                    <FaStar key={idx} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-4 text-gray-700 dark:text-gray-300">
                  "{t.comment}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.image}
                    alt={t.author}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {t.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-orange-600 to-yellow-600 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">🚧 Khóa học đang hoàn thiện</h2>
          <p className="mb-8 text-xl opacity-90">
            Đăng ký nhận thông báo để là người đầu tiên biết khi khóa học ra mắt!
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
              💬 Thông báo sớm nhất
            </div>
            <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
              🎁 Ưu đãi đặc biệt
            </div>
            <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
              📚 Tài liệu miễn phí
            </div>
            <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
              👥 Tư vấn 1:1
            </div>
          </div>

          <a
            href="https://m.me/vntechies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-2xl bg-white px-8 py-4 text-xl font-bold text-orange-600 shadow-2xl transition hover:bg-gray-50"
          >
            💬 Liên hệ Messenger ngay
            <FaRocket className="ml-3 h-6 w-6" />
          </a>

          <p className="mt-6 text-sm opacity-90">
            🔔 Chúng tôi sẽ thông báo ngay khi khóa học sẵn sàng và có ưu đãi đặc biệt cho những
            người đăng ký sớm!
          </p>
        </div>
      </section>
    </div>
  )
}

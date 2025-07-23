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
  title: 'Khoá học AWS Certified Solutions Architect – Associate (SAA-C03)',
  subtitle: 'Luyện thi & thực chiến AWS cùng chuyên gia',
  image: '/static/images/courses/awssaac03-hero.png',
  startDate: '15/07/2025',
  duration: '8 tuần (16 buổi, 32h)',
  schedule: 'Tối Thứ 3 & Thứ 6 (20:00 - 22:00)',
  location: 'Online qua Zoom',
  price: '8.000.000 VNĐ',
  earlyBird: '7.200.000 VNĐ (giảm 10%)',
  registrationLink: 'https://m.me/vntechies',
}

const stats = [
  { number: '20+', label: 'Học viên đã tham gia' },
  { number: '90%', label: 'Tỷ lệ pass chứng chỉ' },
  { number: '11', label: 'Buổi học thực hành' },
  { number: '4+', label: 'Mentor kinh nghiệm' },
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
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-orange-500/20 to-slate-600/20 blur-xl"></div>
              <Image
                src="/static/images/courses/awssaac03-hero.png"
                alt={info.title}
                width={650}
                height={450}
                className="relative rounded-3xl object-cover shadow-2xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-8 inline-flex items-center rounded-full bg-gradient-to-r from-orange-100 to-orange-50 px-6 py-3 text-orange-700 shadow-sm dark:from-orange-900/30 dark:to-orange-800/20 dark:text-orange-400">
                <FaRocket className="mr-3 h-5 w-5" />
                <span className="font-semibold">Học để làm - Không chỉ lý thuyết</span>
              </div>

              <h1 className="lg:text-6xl mb-8 text-5xl font-bold leading-tight text-gray-900 dark:text-gray-100">
                <span className="bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent dark:from-gray-100 dark:to-slate-300">
                  AWS SAA-C03
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Thực chiến
                </span>
                <br />
                <span className="text-4xl lg:text-5xl">cùng chuyên gia</span>
              </h1>

              {/* Key Features */}
              <div className="mb-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl">
                <div className="mb-6">
                  <h3 className="text-md text-center font-bold text-orange-400">
                    Khoá học Cloud Computing được lựa chọn nhiều nhất
                  </h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                    <span className="text-sm leading-relaxed">
                      Giáo án và kho tài liệu độc quyền
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                    <span className="text-sm leading-relaxed">
                      35% thời lượng lab và use case thực tế
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                    <span className="text-sm leading-relaxed">
                      Giảng viên đến từ các công ty đa quốc gia
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                    <span className="text-sm leading-relaxed">
                      Luyện đề, tips pass chứng chỉ từ senior mentor
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                    <span className="text-sm leading-relaxed">
                      Hỗ trợ nghề nghiệp & CV, phỏng vấn cuối khoá học
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                    <span className="text-sm leading-relaxed">
                      Tham gia cộng đồng Cloud 3000+ thành viên
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={info.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 font-bold text-white shadow-xl transition hover:from-orange-700 hover:to-orange-600 hover:shadow-2xl"
                >
                  Đăng ký ngay
                  <FaRocket className="ml-3 h-5 w-5" />
                </a>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Tư vấn:</span>{' '}
                  <Link
                    href="https://m.me/vntechies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    Messenger VNTechies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Con số ấn tượng</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-2 text-5xl font-bold text-orange-500">{stat.number}</div>
                <div className="text-base font-medium text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose VNTechies */}
      <section className="bg-slate-50 py-20 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Tại sao chọn <span className="text-orange-600">VNTechies</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Khác biệt trong phương pháp "Học để làm" - Không chỉ pass chứng chỉ
            </p>
          </div>

          {/* Main USP Highlight */}
          <div className="mb-16 rounded-2xl bg-slate-900 p-8 text-white">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <FaCode className="h-8 w-8" />
                  <h3 className="text-2xl font-bold">Học để làm - Không chỉ lý thuyết</h3>
                </div>
                <p className="text-lg mb-6 opacity-90">
                  35% thời lượng là thực hành với các dự án thực tế. Mục tiêu: Sau khóa học, bạn có
                  thể tự tin ứng tuyển và làm việc với AWS ngay lập tức.
                </p>
                <div className="mb-6 rounded-lg bg-white/10 p-4">
                  <h4 className="text-lg mb-3 font-semibold text-orange-400">
                    🎯 Giá trị vượt trội
                  </h4>
                  <p className="text-sm opacity-90">
                    Định hướng nghề nghiệp, tips viết CV, phỏng vấn cho các vị trí Cloud/DevOps
                    thông qua seminar cuối khoá học.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium">
                    ✓ 11 buổi lab thực hành
                  </div>
                  <div className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium">
                    ✓ Dự án capstone
                  </div>
                  <div className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium">
                    ✓ Portfolio mạnh mẽ
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Image
                  src="/static/images/andyquote.png"
                  alt="Andy Jassy Quote"
                  width={400}
                  height={300}
                  className="mb-4 rounded-lg"
                />
                <p className="text-lg font-medium italic opacity-90">
                  "Không có con đường tắt để thành công, chỉ có trải nghiệm thực tế mới giúp bạn
                  vững vàng trên hành trình Cloud!"
                </p>
              </div>
            </div>
          </div>

          {/* 3 Key Differentiators */}
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-8 shadow-sm dark:bg-gray-800">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                <FaUserTie className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Mentor thực chiến 100% MNC
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Toàn bộ mentor đều là chuyên gia AWS đang làm việc tại các công ty nước ngoài, có
                kinh nghiệm dự án thực tế phong phú.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-8 shadow-sm dark:bg-gray-800">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                <FaHandshake className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Cam kết đồng hành
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hỗ trợ học viên đến khi pass chứng chỉ. Giải đáp thắc mắc 24/7, review CV, tư vấn
                phỏng vấn và định hướng nghề nghiệp.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-8 shadow-sm dark:bg-gray-800">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                <FaUsers className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Cộng đồng & Network
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tham gia cộng đồng VNTechies với hàng ngàn thành viên, cơ hội việc làm và kết nối
                với các chuyên gia hàng đầu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Objectives Section */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Mục tiêu khoá học
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              4 trụ cột chính giúp bạn thành công với AWS SAA-C03
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 dark:from-orange-900/20 dark:to-orange-800/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600">
                <FaGraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Nắm vững kiến thức AWS SAA-C03 mới nhất
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Hiểu rõ các dịch vụ cốt lõi, kiến trúc tổng quan và các chủ đề trọng tâm trong kỳ
                thi.
              </p>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 dark:from-slate-800/50 dark:to-slate-700/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-700">
                <FaLaptopCode className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Thực hành triển khai dịch vụ AWS
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Làm lab thực tế, xây dựng giải pháp trên AWS, áp dụng kiến thức sử dụng AI trong
                việc triển khai dự án thật.
              </p>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 dark:from-orange-900/20 dark:to-orange-800/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600">
                <FaCertificate className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Kỹ năng giải đề & tips pass chứng chỉ
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Luyện đề, phân tích đáp án, chia sẻ kinh nghiệm thi thực tế từ mentor.
              </p>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 dark:from-slate-800/50 dark:to-slate-700/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-700">
                <FaUserTie className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Định hướng nghề nghiệp Cloud/DevOps
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Tư vấn lộ trình, hỗ trợ CV, phỏng vấn, kết nối cộng đồng và mentor sau khoá học.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This Course For Section */}
      <section className="bg-slate-50 py-20 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Khoá học dành cho ai?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              3 nhóm đối tượng phù hợp nhất với khoá học này
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                <FaGraduationCap className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Sinh viên yêu thích AWS
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sinh viên muốn theo ngành Cloud/DevOps nhưng chưa biết bắt đầu từ đâu, hoặc đã tìm
                hiểu về AWS nhưng kiến thức rời rạc, chưa được hệ thống.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                <FaRocket className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Người muốn chuyển ngành
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Các bạn muốn chuyển ngành Cloud/DevOps, nhưng cảm thấy kiến thức chưa đủ, muốn được
                cái nhìn tổng quan để lựa chọn vị trí phù hợp trong ngành.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                <FaUserTie className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Engineers muốn thăng tiến
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Engineers đã làm việc trong ngành, muốn hệ thống hoá kiến thức AWS và tạo cơ hội mới
                tiến trong sự nghiệp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
            Nội dung khoá học
          </h2>
          <div className="overflow-x-auto">
            <table className="border-spacing-y-2 min-w-full border-separate rounded-lg border border-gray-300 text-sm dark:border-gray-600 md:text-base">
              <thead>
                <tr className="bg-orange-50 dark:bg-orange-900/30">
                  <th className="text-xs w-12 border border-gray-200 px-1 py-2 text-center font-bold text-orange-700 dark:border-gray-600 dark:text-orange-300 sm:w-16 sm:px-3 sm:text-sm md:text-base">
                    Buổi
                  </th>
                  <th className="text-xs border border-gray-200 px-2 py-2 text-center font-bold text-orange-700 dark:border-gray-600 dark:text-orange-300 sm:px-3 sm:text-sm md:text-base">
                    Nội dung
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-top">
                  <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                    1
                  </td>
                  <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                    <div className="ml-2 space-y-1">
                      <div>Kiến thức nền tảng kiến trúc AWS</div>
                      <div>Quản lý tài khoản và bảo mật (IAM, MFA)</div>
                      <div className="font-semibold text-orange-700 dark:text-orange-300">
                        🔧 Lab 1: Làm quen Console và CLI
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                    2–3
                  </td>
                  <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                    <div className="ml-2 space-y-1">
                      <div>Networking cơ bản và nâng cao (VPC, Subnet, Route Table)</div>
                      <div className="font-semibold text-orange-700 dark:text-orange-300">
                        🔧 Lab 2 & 3: Thiết lập hạ tầng mạng riêng trên AWS
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                    4–5
                  </td>
                  <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                    <div className="ml-2 space-y-1">
                      <div>Dịch vụ tính toán (EC2, Auto Scaling)</div>
                      <div>Lưu trữ (S3, EBS, EFS)</div>
                      <div className="font-semibold text-orange-700 dark:text-orange-300">
                        🔧 Lab 4: Cấu hình EC2, lưu trữ
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                    6–7
                  </td>
                  <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                    <div className="ml-2 space-y-1">
                      <div>Cơ sở dữ liệu (RDS, DynamoDB)</div>
                      <div>Giám sát & mở rộng (CloudWatch, Load Balancer)</div>
                      <div className="font-semibold text-orange-700 dark:text-orange-300">
                        🔧 Lab 5 & 6: Tạo DB layer & High Availability
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                    8–9
                  </td>
                  <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                    <div className="ml-2 space-y-1">
                      <div>Tự động hoá hạ tầng (CloudFormation)</div>
                      <div>Containers (ECS, EKS)</div>
                      <div>AI Services (Amazon Q, Bedrock)</div>
                      <div className="font-semibold text-orange-700 dark:text-orange-300">
                        🔧 Lab 7 & 8: IaC và triển khai container với AI Assistant (Amazon Q)
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                    10–11
                  </td>
                  <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                    <div className="ml-2 space-y-1">
                      <div>Serverless (Lambda, API Gateway)</div>
                      <div>Dịch vụ Edge (CloudFront, S3 Static Hosting)</div>
                      <div className="font-semibold text-orange-700 dark:text-orange-300">
                        🔧 Lab 9 & 10: Xây dựng kiến trúc serverless & CDN
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                    12
                  </td>
                  <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                    <div className="ml-2 space-y-1">
                      <div>Backup & Recovery (S3 Lifecycle, DR)</div>
                      <div>Dịch vụ AI/ML (Textract, Translate)</div>
                    </div>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                    13
                  </td>
                  <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                    <div className="ml-2 space-y-1">
                      <div className="font-semibold text-orange-700 dark:text-orange-300">
                        🏗 Capstone Lab: Xây dựng kiến trúc nhiều tầng trên AWS
                      </div>
                      <div>Q&A, chia sẻ kinh nghiệm thực chiến</div>
                    </div>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                    14–15
                  </td>
                  <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                    <div className="ml-2 space-y-1">
                      <div>Ôn tập toàn bộ nội dung</div>
                      <div>Thi thử với bộ đề chuẩn SAA-C03</div>
                    </div>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                    16
                  </td>
                  <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                    <div className="ml-2 space-y-1">
                      <div className="font-semibold text-orange-700 dark:text-orange-300">
                        🎯 Seminar hướng nghiệp: Tips viết CV, phỏng vấn, định hướng vị trí
                        Cloud/DevOps
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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

      {/* What You Get Section */}
      <section className="bg-slate-50 py-20 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Sau khóa học, bạn được gì?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Khóa học không chỉ giúp bạn đỗ chứng chỉ mà còn cung cấp nền tảng vững chắc cho Sự
              nghiệp Cloud
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-xl font-bold text-white">
                01
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Nắm vững kiến thức AWS nền tảng
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nắm vững hệ thống kiến thức nền tảng nhất mà bất kỳ Cloud Engineer nào cũng cần
                trang bị. Hệ thống kiến thức này là nền móng cho việc làm việc với AWS trong mọi dự
                án thực tế.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-xl font-bold text-white">
                02
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Thực hành & xây dựng dự án thực tế
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Xuyên suốt khóa học là hệ thống lab và dự án thực tế: Xây dựng kiến trúc multi-tier,
                triển khai serverless, container orchestration. Kết quả khóa học, học viên có
                portfolio mạnh mẽ.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-xl font-bold text-white">
                03
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Định hướng nghề nghiệp rõ ràng
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hiểu rõ bản chất làm Cloud/DevOps là làm gì - trong ngành Cloud gồm có những lĩnh
                vực nào, cơ hội nghề nghiệp của từng lĩnh vực và mối liên hệ giữa các mảng công việc
                đó với nhau.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-xl font-bold text-white">
                04
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Network cùng chuyên gia trong nghề
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tiếp cận với mạng lưới mentor là các chuyên gia AWS tại các công ty nước ngoài, và
                cộng đồng VNTechies với hàng ngàn thành viên - hứa hẹn khởi đầu vững chắc cho sự
                nghiệp Cloud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Học phí đầu tư cho tương lai
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Chỉ bằng 1-2 tháng lương Junior, nhưng giá trị mang lại suốt đời
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Standard Plan */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-2xl dark:bg-gray-800">
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Standard
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Học phí tiêu chuẩn</p>
              </div>

              <div className="mb-8 space-y-4">
                <div className="rounded-xl bg-gray-50 p-6 text-center dark:bg-gray-700">
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Người đi làm
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    8.000.000₫
                  </div>
                </div>
                <div className="rounded-xl bg-orange-50 p-4 text-center dark:bg-orange-900/30">
                  <div className="text-sm font-medium text-orange-600 dark:text-orange-400">
                    Sinh viên
                  </div>
                  <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                    7.500.000₫
                  </div>
                </div>
              </div>

              <a
                href={info.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl bg-slate-900 py-4 text-center font-semibold text-white transition hover:bg-slate-800"
              >
                Đăng ký ngay
              </a>
            </div>

            {/* Early Bird Plan - Featured */}
            <div className="group relative scale-105 rounded-2xl bg-orange-600 p-8 text-white shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-400 px-4 py-2 text-sm font-bold text-white">
                Ưu đãi hấp dẫn
              </div>

              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold">Early Bird</h3>
                <p className="opacity-90">Đăng ký sớm - Tiết kiệm 10-15%</p>
              </div>

              <div className="mb-8 space-y-4">
                <div className="rounded-xl bg-white/20 p-6 text-center backdrop-blur">
                  <div className="text-sm font-medium opacity-90">Người đi làm</div>
                  <div className="text-3xl font-bold">7.200.000₫</div>
                  <div className="text-sm line-through opacity-75">8.000.000₫</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur">
                  <div className="text-sm font-medium opacity-90">Sinh viên</div>
                  <div className="text-2xl font-bold">6.700.000₫</div>
                  <div className="text-sm line-through opacity-75">7.500.000₫</div>
                </div>
              </div>

              <a
                href={info.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl bg-white py-4 text-center font-bold text-orange-600 transition hover:bg-gray-50"
              >
                Đăng ký ngay
              </a>
            </div>

            {/* Group Plan */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-2xl dark:bg-gray-800">
              <div className="text-xs absolute -top-3 right-4 rounded-full bg-orange-500 px-3 py-1 font-bold text-white">
                PHỔ BIẾN
              </div>

              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">Group</h3>
                <p className="text-gray-600 dark:text-gray-400">2+ người cùng đăng ký</p>
              </div>

              <div className="mb-8 space-y-4">
                <div className="rounded-xl bg-orange-50 p-6 text-center dark:bg-orange-900/30">
                  <div className="text-sm font-medium text-orange-600 dark:text-orange-400">
                    Người đi làm
                  </div>
                  <div className="text-3xl font-bold text-orange-700 dark:text-orange-300">
                    6.800.000₫
                  </div>
                  <div className="text-sm text-gray-500 line-through">8.000.000₫</div>
                </div>
                <div className="rounded-xl bg-orange-50 p-4 text-center dark:bg-orange-900/20">
                  <div className="text-sm font-medium text-orange-600 dark:text-orange-400">
                    Sinh viên
                  </div>
                  <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                    6.300.000₫
                  </div>
                  <div className="text-sm text-gray-500 line-through">7.500.000₫</div>
                </div>
              </div>

              <a
                href={info.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl bg-orange-600 py-4 text-center font-semibold text-white transition hover:bg-orange-700"
              >
                Đăng ký ngay
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              💰 <strong>ROI dự kiến:</strong> Tăng lương 30-50% sau khi có chứng chỉ AWS
            </p>
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

      {/* Student Benefits Section */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Quyền lợi của học viên
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Lifetime Access */}
            <div className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 dark:from-orange-900/20 dark:to-orange-800/20">
              <div className="mb-4 inline-block rounded-full bg-orange-600 px-4 py-2 text-sm font-bold text-white">
                TRỌN ĐỜI
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Truy cập vào hệ thống thư viện nội bộ của VNTechies, tài liệu khóa học và video
                record
              </h3>
            </div>

            {/* Community Support */}
            <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 dark:from-slate-800/50 dark:to-slate-700/50">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Cộng đồng hỗ trợ học viên
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-orange-600" />
                  <span>
                    <strong>Career Center:</strong> Giới thiệu việc làm từ Mentor và cộng đồng
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-orange-600" />
                  <span>
                    <strong>VNTechies Community:</strong> Kết nối và xây dựng network chuyên nghiệp
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-orange-600" />
                  <span>
                    <strong>Cộng đồng Q&A:</strong> Hỏi đáp, tư vấn kiến thức và công việc 24/7
                  </span>
                </div>
              </div>
            </div>

            {/* Exclusive Events */}
            <div className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 dark:from-orange-900/20 dark:to-orange-800/20">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Sự kiện độc quyền
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-orange-600" />
                  <span>Miễn phí tham gia Master Class và Workshop</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-orange-600" />
                  <span>Alumni's Support và Office Hour với chuyên gia</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-orange-600" />
                  <span>Cập nhật trend và công nghệ mới nhất trong ngành</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Sẵn sàng bắt đầu hành trình AWS?</h2>
          <p className="mb-8 text-xl opacity-90">
            Đăng ký ngay để nhận ưu đãi Early Bird và bộ tài liệu luyện thi đầy đủ!
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
              ✓ 35% thực hành
            </div>
            <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
              ✓ 90% tỷ lệ pass
            </div>
            <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
              ✓ Mentor MNC
            </div>
            <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
              ✓ Cam kết đồng hành
            </div>
          </div>

          <a
            href={info.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-2xl bg-orange-600 px-8 py-4 text-xl font-bold text-white shadow-2xl transition hover:bg-orange-700"
          >
            Đăng ký ngay - Nhận ưu đãi
            <FaRocket className="ml-3 h-6 w-6" />
          </a>

          <p className="mt-6 text-sm opacity-75">
            Liên hệ ngay qua{' '}
            <Link
              href="https://m.me/vntechies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
              {' '}
              Messenger{' '}
            </Link>
            để được tư vấn miễn phí
          </p>
        </div>
      </section>
    </div>
  )
}

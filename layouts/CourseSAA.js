import React from 'react'
import Image from '../components/Image'
import { FaCheckCircle, FaStar, FaUsers, FaGraduationCap, FaAward, FaClock } from 'react-icons/fa'
import Link from 'next/link'
import { FaChalkboardTeacher, FaUserTie, FaHandshake } from 'react-icons/fa'
import { author, image } from '@/data/siteMetadata'

const testimonials = [
  {
    rating: 5,
    comment: 'Khoá học rất thực tế, mentor tận tâm, mình đã pass SAA-C03 ngay lần đầu!',
    author: 'Võ Hùng - Division Manager',
  },
  {
    rating: 5,
    comment: 'Nội dung chi tiết, nhiều lab thực hành, cực kỳ hữu ích cho người mới.',
    author: 'Lê Thắng - Tech Lead',
  },
  {
    rating: 4,
    comment: 'Học xong tự tin đi phỏng vấn AWS, cảm ơn VNTechies!',
    author: 'Phạm Minh Quang - Fresher',
  },
  {
    rating: 5,
    comment:
      'VNTechies đưa ra nhiều kiến thức bổ ích về DEVOPS, giúp mình càng hiểu rõ hơn hệ thống mình đang làm việc',
    author: 'Nguyễn Xuân Trường - Developer Lead',
  },
  {
    rating: 5,
    comment: '🥰 Thông tin rất cụ thể, dễ tiếp cận. Mình thực sự đã được giúp đỡ',
    author: 'Lưu Bình Công - Project Manager',
  },
  {
    rating: 5,
    comment: 'Khóa học và series hữu ích cho devops beginner 👍',
    author: 'Đặng Hoàng Linh - Senior BrSE',
  },
  {
    rating: 5,
    comment:
      'Blog rất chất lượng, series 90 ngày DevOps rất phù hợp với cá nhân mình. Cảm ơn đội ngũ của VNTechies rất nhiều',
    author: 'Đào Mạnh Nhất - Software Developer',
  },
  {
    rating: 5,
    comment:
      'Với 5 năm kinh nghiệm IT mình thấy VNTechies rất hữu ích cho các bạn mới làm quen devops . Khoá học dễ học dễ hiểu bổ ích . Recommend cho mọi người',
    author: 'Nguyễn Tiến Nghiệp - Frontend Developer',
  },
  {
    rating: 5,
    comment: 'Rất nhiều kiến thức chất lượng và hữu ích cho người muốn tìm hiểu về Tech',
    author: 'Trần Duy Mạnh - Data Engineer',
  },
]

const courseInfo = {
  title: 'Khoá học AWS Certified Solutions Architect – Associate (SAA-C03)',
  subtitle: 'Luyện thi & thực chiến AWS cùng chuyên gia',
  image: '/static/images/courses/awssaac03.png',
  startDate: '15/07/2025',
  duration: '8 tuần (16 buổi, 32h)',
  schedule: 'Tối Thứ 3 & Thứ 6 (20:00 - 22:00)',
  location: 'Online qua Zoom',
  price: '8.000.000 VNĐ',
  earlyBird: '7.200.000 VNĐ (giảm 10%)',
  registrationLink: 'https://m.me/vntechies',
}

// Statistics data
const stats = [
  { number: '20+', label: 'Học viên đã tham gia' },
  { number: '90%', label: 'Tỷ lệ pass chứng chỉ' },
  { number: '11', label: 'Buổi học thực hành' },
  { number: '4+', label: 'Mentor kinh nghiệm' },
]

export default function CourseSpecial({ children, frontMatter, mentorDetails }) {
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
      <section className="px-4 py-12 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl lg:text-5xl">
            {info.title}
          </h1>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
            {info.subtitle}
          </p>

          <div className="mb-8 flex justify-center">
            <Image
              src={info.image}
              alt={info.title}
              width={1200}
              height={630}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>

          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400 md:text-3xl">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <a
            href={info.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg inline-block rounded-lg bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            Đăng ký ngay
          </a>
        </div>
      </section>

      <section className="mb-12 rounded-xl p-6 shadow-sm">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Tại sao nên học khoá AWS SAA-C03 tại{' '}
          <span className="font-bold text-orange-500">VNTechies</span>?
        </h2>
        <div className="flex flex-col gap-8 md:flex-row md:items-stretch">
          <div className="dark: flex flex-1 flex-col items-center justify-center  rounded-lg p-4">
            <Image
              src="/static/images/andyquote.png"
              alt="Andy Jassy Quote"
              width={420}
              height={140}
              className="mb-4 rounded-xl shadow-lg"
            />
            <div className="mt-2 text-center text-base font-bold text-orange-700 dark:text-orange-300">
              Không có con đường tắt để thành công, chỉ có trải nghiệm thực tế mới giúp bạn vững
              vàng trên hành trình Cloud!
            </div>
          </div>
          {/* Right: 4 value props and highlight */}
          <div className="flex flex-1 flex-col gap-6 rounded-lg  p-4  md:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4 rounded-xl  bg-indigo-50 p-4 shadow-sm  dark:bg-indigo-900/30">
                <FaChalkboardTeacher className="mt-1 h-8 w-8 text-indigo-700 dark:text-indigo-300" />
                <div>
                  <div className="text-xl font-bold text-indigo-800 dark:text-indigo-200">
                    Học để làm
                  </div>
                  <div className="text-base text-gray-600 dark:text-gray-400">
                    35% thời lượng là thực hành, lab, usecase thực tế, mục tiêu khoá học không chỉ
                    học lý thuyết.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-4 dark:border-gray-600">
                <FaUserTie className="mt-1 h-8 w-8 text-indigo-600 dark:text-indigo-300" />
                <div>
                  <div className="text-xl font-bold text-indigo-800 dark:text-indigo-200">
                    Mentor thực chiến
                  </div>
                  <div className="text-base text-gray-600 dark:text-gray-300">
                    100% là chuyên gia AWS tại các công ty nước ngoài, giàu kinh nghiệm dự án thực
                    tế.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-4 dark:border-gray-600">
                <FaHandshake className="mt-1 h-8 w-8 text-indigo-600 dark:text-indigo-300" />
                <div>
                  <div className="text-xl font-bold text-indigo-800 dark:text-indigo-200">
                    Cam kết đồng hành
                  </div>
                  <div className="text-base text-gray-600 dark:text-gray-300">
                    Hỗ trợ học viên đến khi pass chứng chỉ, giải đáp hỗ trợ cả trong và sau khoá
                    học.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-4 dark:border-gray-600">
                <FaUsers className="mt-1 h-8 w-8 text-indigo-600 dark:text-indigo-300" />
                <div>
                  <div className="text-xl font-bold text-indigo-800 dark:text-indigo-200">
                    Network chất lượng
                  </div>
                  <div className="text-base text-gray-600 dark:text-gray-300">
                    Tham gia cộng đồng VNTechies, kết nối với hàng ngàn học viên, mentor, cơ hội
                    việc làm.
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-lg border border-l-4 border-yellow-400 border-gray-200 bg-yellow-50 p-5 shadow-sm dark:border-yellow-500 dark:border-gray-600 dark:bg-yellow-900/30">
              <div className="mb-2 flex items-center gap-3">
                <FaCheckCircle className="h-6 w-6 text-yellow-500" />
                <span className="text-lg font-bold text-yellow-700 dark:text-yellow-300">
                  Giá trị vượt trội
                </span>
              </div>
              <div className="text-base text-gray-700 dark:text-gray-200">
                Định hướng nghề nghiệp, tips viết CV, phỏng vấn cho các vị trí Cloud/DevOps thông
                qua seminar cuối khoá học.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Mục tiêu khoá học
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col items-start rounded-xl bg-indigo-50 p-6 shadow-sm dark:bg-indigo-900/30">
            <div className="mb-2 text-xl font-bold text-indigo-800 dark:text-indigo-200">
              Nắm vững kiến thức AWS SAA-C03 mới nhất
            </div>
            <div className="text-base text-gray-600 dark:text-gray-400">
              Hiểu rõ các dịch vụ cốt lõi, kiến trúc tổng quan và các chủ đề trọng tâm trong kỳ thi.
            </div>
          </div>
          <div className="flex flex-col items-start rounded-xl bg-indigo-50 p-6 shadow-sm dark:bg-indigo-900/30">
            <div className="mb-2 text-xl font-bold text-indigo-800 dark:text-indigo-200">
              Thực hành triển khai dịch vụ AWS
            </div>
            <div className="text-base text-gray-600 dark:text-gray-400">
              Làm lab thực tế, xây dựng giải pháp trên AWS, áp dụng kiến thức vào dự án thật.
            </div>
          </div>
          <div className="flex flex-col items-start rounded-xl bg-indigo-50 p-6 shadow-sm dark:bg-indigo-900/30">
            <div className="mb-2 text-xl font-bold text-indigo-800 dark:text-indigo-200">
              Kỹ năng giải đề & tips pass chứng chỉ
            </div>
            <div className="text-base text-gray-600 dark:text-gray-400">
              Luyện đề, phân tích đáp án, chia sẻ kinh nghiệm thi thực tế từ mentor.
            </div>
          </div>
          <div className="flex flex-col items-start rounded-xl bg-indigo-50 p-6 shadow-sm dark:bg-indigo-900/30">
            <div className="mb-2 text-xl font-bold text-indigo-800 dark:text-indigo-200">
              Định hướng nghề nghiệp Cloud/DevOps
            </div>
            <div className="text-base text-gray-600 dark:text-gray-400">
              Tư vấn lộ trình, hỗ trợ CV, phỏng vấn, kết nối cộng đồng và mentor sau khoá học.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
            Khóa học dành cho ai?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <FaGraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Sinh viên yêu thích AWS
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sinh viên muốn theo ngành Cloud/DevOps nhưng chưa biết bắt đầu từ đâu, hoặc đã tìm
                hiểu về AWS nhưng kiến thức rời rạc, chưa được hệ thống.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <FaUsers className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Người muốn chuyển ngành
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Các bạn muốn chuyển ngành Cloud/DevOps, nhưng cảm thấy kiến thức chưa đủ, muốn được
                cái nhìn tổng quan để lựa chọn vị trí phù hợp trong ngành.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <FaAward className="h-8 w-8 text-purple-600 dark:text-purple-400" />
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

      <section className="mt-16 mb-8 rounded-xl p-6 shadow-sm">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Nội dung khoá học
        </h2>
        <div className="overflow-x-auto">
          <table className="border-spacing-y-2 min-w-full border-separate rounded-lg border border-gray-300 text-sm dark:rounded-lg dark:border dark:border-gray-600 md:text-base">
            <thead>
              <tr className="bg-indigo-100 dark:bg-indigo-900/30">
                <th className="w-16 border border-gray-200 px-3 py-2 text-center font-bold text-indigo-700 dark:border dark:border-gray-600 dark:text-indigo-300">
                  Buổi
                </th>
                <th className="w-1/2 border border-gray-200 px-3 py-2 text-center font-bold text-indigo-700 dark:border dark:border-gray-600 dark:text-indigo-300">
                  Nội dung
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Buổi 1 */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  1
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>Kiến thức nền tảng kiến trúc AWS</div>
                    <div>Quản lý tài khoản và bảo mật (IAM, MFA)</div>
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      🔧 Lab 1: Làm quen Console và CLI
                    </div>
                  </div>
                </td>
              </tr>
              {/* Buổi 2–3 */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  2–3
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>Networking cơ bản và nâng cao (VPC, Subnet, Route Table)</div>
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      🔧 Lab 2 & 3: Thiết lập hạ tầng mạng riêng trên AWS
                    </div>
                  </div>
                </td>
              </tr>
              {/* Buổi 4–5 */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  4–5
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>Dịch vụ tính toán (EC2, Auto Scaling)</div>
                    <div>Lưu trữ (S3, EBS, EFS)</div>
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      🔧 Lab 4: Cấu hình EC2, lưu trữ
                    </div>
                  </div>
                </td>
              </tr>
              {/* Buổi 6–7 */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  6–7
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>Cơ sở dữ liệu (RDS, DynamoDB)</div>
                    <div>Giám sát & mở rộng (CloudWatch, Load Balancer)</div>
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      🔧 Lab 5 & 6: Tạo DB layer & High Availability
                    </div>
                  </div>
                </td>
              </tr>
              {/* Buổi 8–9 */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  8–9
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>Tự động hoá hạ tầng (CloudFormation)</div>
                    <div>Containers (ECS, EKS)</div>
                    <div>AI Services (Amazon Q, Bedrock)</div>
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      🔧 Lab 7 & 8: IaC và triển khai container với AI Assistant (Amazon Q)
                    </div>
                  </div>
                </td>
              </tr>
              {/* Buổi 10–11 */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  10–11
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>Serverless (Lambda, API Gateway)</div>
                    <div>Dịch vụ Edge (CloudFront, S3 Static Hosting)</div>
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      🔧 Lab 9 & 10: Xây dựng kiến trúc serverless & CDN
                    </div>
                  </div>
                </td>
              </tr>
              {/* Buổi 12 */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  12
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>Backup & Recovery (S3 Lifecycle, DR)</div>
                    <div>Dịch vụ AI/ML (Textract, Translate)</div>
                  </div>
                </td>
              </tr>
              {/* Buổi 13 */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  13
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      🏗 Capstone Lab: Xây dựng kiến trúc nhiều tầng trên AWS
                    </div>
                    <div>Q&A, chia sẻ kinh nghiệm thực chiến</div>
                  </div>
                </td>
              </tr>
              {/* Buổi 14–15 */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  14–15
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>Ôn tập toàn bộ nội dung</div>
                    <div>Thi thử với bộ đề chuẩn SAA-C03</div>
                  </div>
                </td>
              </tr>
              {/* Buổi 16 */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  16
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      🎯 Seminar hướng nghiệp: Tips viết CV, phỏng vấn, định hướng vị trí
                      Cloud/DevOps
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="px-4 py-16">
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

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
            Sau khóa học, bạn được gì?
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-600 dark:text-gray-300">
            Khóa học không chỉ giúp bạn pass chứng chỉ mà còn cung cấp nền tảng vững chắc cho sự
            nghiệp Cloud
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                <span className="text-xl font-bold">01</span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Nắm vững kiến thức AWS nền tảng
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nắm vững hệ thống kiến thức nền tảng nhất mà bất kỳ Cloud Engineer nào cũng cần
                  trang bị. Hệ thống kiến thức này là nền móng cho việc làm việc với AWS trong mọi
                  dự án thực tế.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                <span className="text-xl font-bold">02</span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Thực hành & xây dựng dự án thực tế
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Xuyên suốt khóa học là hệ thống lab và dự án thực tế: Xây dựng kiến trúc
                  multi-tier, triển khai serverless, container orchestration. Kết quả khóa học, học
                  viên có portfolio mạnh mẽ.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400">
                <span className="text-xl font-bold">03</span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Định hướng nghề nghiệp rõ ràng
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hiểu rõ bản chất làm Cloud/DevOps là làm gì - trong ngành Cloud gồm có những lĩnh
                  vực nào, cơ hội nghề nghiệp của từng lĩnh vực và mối liên hệ giữa các mảng công
                  việc đó với nhau.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400">
                <span className="text-xl font-bold">04</span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
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
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Học phí và ưu đãi
        </h2>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Standard Plan */}
          <div className="overflow-hidden rounded-lg border border-indigo-200 bg-white shadow-lg dark:border-indigo-700 dark:bg-gray-800">
            <div className="p-6 text-center">
              <h4 className="mb-2 text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                Standard
              </h4>
              <p className="mb-6 text-gray-600 dark:text-gray-400">Học phí tiêu chuẩn</p>

              <div className="mb-4 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 p-6 text-white">
                <div className="mb-1 text-sm font-semibold">Người đi làm</div>
                <div className="text-3xl font-bold">8.000.000</div>
              </div>

              <div className="mb-4 rounded-lg bg-indigo-100 p-4 text-indigo-800 dark:bg-indigo-800/30 dark:text-indigo-200">
                <div className="mb-1 text-sm font-semibold">Sinh viên</div>
                <div className="text-2xl font-bold">7.500.000</div>
              </div>

              <button className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 px-6 py-3 font-bold text-white transition duration-200 hover:from-indigo-600 hover:to-indigo-800">
                ĐĂNG KÝ NGAY
              </button>
            </div>
          </div>

          {/* Early Bird Plan */}
          <div className="overflow-hidden rounded-lg border border-emerald-200 bg-white shadow-lg dark:border-emerald-700 dark:bg-gray-800">
            <div className="p-6 text-center">
              <h4 className="mb-2 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                Early bird
              </h4>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Học phí áp dụng khi đăng ký sớm
              </p>

              <div className="mb-4 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 text-white">
                <div className="mb-1 text-sm font-semibold">Người đi làm</div>
                <div className="text-3xl font-bold">7.200.000</div>
              </div>

              <div className="mb-4 rounded-lg bg-emerald-100 p-4 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
                <div className="mb-1 text-sm font-semibold">Sinh viên</div>
                <div className="text-2xl font-bold">6.700.000</div>
              </div>

              <button className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 font-bold text-white transition duration-200 hover:from-emerald-600 hover:to-emerald-700">
                ĐĂNG KÝ NGAY
              </button>
            </div>
          </div>

          {/* Group Plan */}
          <div className="relative overflow-hidden rounded-lg border border-pink-200 bg-white shadow-xl dark:border-pink-700 dark:bg-gray-800">
            {/* Popular badge */}
            <div className="text-xs absolute right-0 top-0 bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 font-bold text-white">
              PHỔ BIẾN
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 text-2xl font-bold text-pink-600 dark:text-pink-400">Group</h4>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Ưu đãi giá áp dụng với nhóm 2 người+
              </p>

              <div className="mb-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-white shadow-lg">
                <div className="mb-1 text-sm font-semibold">Người đi làm</div>
                <div className="text-3xl font-bold">6.800.000</div>
              </div>

              <div className="mb-4 rounded-lg bg-gradient-to-r from-pink-100 to-purple-100 p-4 text-pink-800 dark:bg-gradient-to-r dark:from-pink-900/30 dark:to-purple-900/30 dark:text-pink-200">
                <div className="mb-1 text-sm font-semibold">Sinh viên</div>
                <div className="text-2xl font-bold">6.300.000</div>
              </div>

              <button className="w-full rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-bold text-white shadow-lg transition duration-200 hover:from-pink-600 hover:to-purple-700 hover:shadow-xl">
                ĐĂNG KÝ NGAY
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Cảm nhận học viên
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex h-full flex-col rounded-lg bg-white p-4 shadow dark:bg-gray-900"
            >
              <div className="mb-2 flex items-center gap-1">
                {[...Array(t.rating)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400" />
                ))}
              </div>
              <blockquote className="flex-1 italic">“{t.comment}”</blockquote>
              <div className="mt-2 text-right text-sm font-semibold">— {t.author}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration & Support Section - Enhanced */}
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
            Đăng ký & hỗ trợ
          </h2>

          <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 dark:from-blue-900/20 dark:to-indigo-900/20">
            <div className="text-center">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Đăng ký ngay để nhận ưu đãi học phí và bộ tài liệu luyện thi AWS SAA-C03!
              </h3>

              <div className="flex flex-col gap-4 md:flex-row md:justify-center">
                <a
                  href={info.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:from-blue-700 hover:to-indigo-700"
                >
                  Đăng ký khóa học
                </a>
              </div>
            </div>
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
    </div>
  )
}

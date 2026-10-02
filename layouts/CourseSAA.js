import PremiumCourseHero from '@/components/course/PremiumCourseHero'
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
import siteMetadata from '@/data/siteMetadata'
import CourseRegistrationForm from '../components/CourseRegistrationForm'
import OtherCoursesSection from '@/components/OtherCoursesSection'
import { MONTHLY_INTAKE, octoberOffer, campaignTuition } from '@/data/courseOffers'
import { OfferBanner, Price, applyOffer, formatVnd, useOffer } from '@/components/course/offer'
import {
  AudienceFit,
  Collapsible,
  CourseFAQ,
  QuickFacts,
  SalaryEvidence,
  StickyEnrollBar,
  TestimonialGrid,
} from '@/components/course/SalesSections'
import { pickTestimonials } from '@/data/testimonials'

const courseInfo = {
  title: 'Khoá học AWS Certified Solutions Architect – Associate (SAA-C03)',
  subtitle: 'Luyện thi & thực chiến AWS cùng chuyên gia',
  image: '/static/images/ogps/courses/aws-saa-ogp.png',
  startDate: 'Khai giảng hàng tháng',
  duration: '8 tuần (16 buổi, 32h)',
  schedule: 'Tối Thứ 3 & Thứ 5 (19:00 - 21:00)',
  location: 'Online qua Google',
  price: '8.000.000 VNĐ',
  earlyBird: '7.200.000 VNĐ (giảm 10%)',
  registrationLink: 'https://m.me/vntechies',
}

const stats = [
  { number: '200+', label: 'Học viên VNTechies' },
  { number: '95%', label: 'Tỷ lệ đỗ chứng chỉ' },
  { number: '12', label: 'Buổi học thực hành' },
  { number: '9+', label: 'Mentor kinh nghiệm' },
]

// Published tuition (VND): working professional / student
const tuition = campaignTuition

const audience = {
  student: [
    <>
      Học phí sinh viên riêng, thêm{' '}
      <Link href="/pricing#financial-aid" className="underline underline-offset-2">
        Financial Aid
      </Link>{' '}
      hỗ trợ tới 500.000₫
    </>,
    <>
      <Link href="/pricing#tra-gop" className="underline underline-offset-2">
        Trả góp 2–3 đợt
      </Link>
      , chỉ cần cọc từ 40% khi đăng ký
    </>,
    'Chưa dùng AWS bao giờ vẫn theo được: tài khoản AWS thực hành miễn phí suốt khoá, 12 buổi lab có mentor hướng dẫn',
    'Có chứng chỉ quốc tế và project lab để đưa vào CV trước khi đi thực tập, ra trường',
  ],
  working: [
    'Học online buổi tối 19:00–21:00, 2 buổi/tuần: không ảnh hưởng giờ làm',
    'Bận đột xuất? Xem lại video record, truy cập trọn đời',
    'Rủ đồng nghiệp đăng ký nhóm 2+ người để nhận giá Group',
    'Mentor là Senior/Lead/Manager tại công ty đa quốc gia, review tình huống thực tế từ dự án của bạn',
  ],
}

const salaryEvidence = [
  {
    value: '$72.417',
    label:
      'Thu nhập trung bình/năm của người có chứng chỉ AWS Solutions Architect – Associate tại khu vực Châu Á – Thái Bình Dương (1.002 phản hồi)',
    source: {
      name: 'Skillsoft, IT Skills and Salary Survey 2024',
      url: 'https://www.skillsoft.com/blog/top-paying-it-certifications',
    },
  },
  {
    value: '29,2 triệu ₫',
    label: 'Lương trung vị/tháng của Cloud Engineer tại Việt Nam (3 năm kinh nghiệm)',
    source: {
      name: 'ITviec, Vietnam IT Salary & Recruitment Market Report 2024–2025',
      url: 'https://itviec.com/report/vietnam-it-salary-and-recruitment-market-2024-2025',
    },
  },
  {
    value: '$150',
    label: 'Lệ phí thi SAA-C03. Học viên VNTechies được hỗ trợ giảm 50% (tiết kiệm $75)',
    source: {
      name: 'AWS Certification',
      url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
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
    q: 'Mình là sinh viên / chưa từng làm với AWS, có theo kịp không?',
    a: 'Có. Khoá học bắt đầu từ các dịch vụ nền tảng (IAM, EC2, VPC, S3...) và có 12 buổi lab với tài khoản AWS thực hành miễn phí. AWS khuyến nghị khoảng 1 năm kinh nghiệm trước khi thi; các buổi lab và luyện đề trong khoá được thiết kế để bù phần thực hành đó.',
  },
  {
    q: 'Đi làm cả ngày thì học thế nào? Lỡ buổi thì sao?',
    a: 'Lớp học online qua Google Meet, 19:00–21:00, 2 buổi/tuần trong 8 tuần. Mỗi buổi đều có video record, bạn được truy cập trọn đời để xem lại.',
  },
  {
    q: 'Ưu đãi giảm thêm 10% áp dụng thế nào?',
    a: 'Đăng ký trước hết ngày 13/10 để được giảm thêm 10% trên mức học phí bạn đủ điều kiện: tiêu chuẩn, Early Bird hoặc nhóm, cho cả sinh viên và người đi làm.',
  },
  {
    q: 'Có trả góp không?',
    a: (
      <>
        Có. Gói Comfort 2 đợt (cọc 50%, phí hỗ trợ 3%) hoặc gói Flexible 3 đợt (cọc 40%, phí hỗ trợ
        5%). Chi tiết tại{' '}
        <Link href="/pricing#tra-gop" className="underline underline-offset-2">
          chính sách trả góp
        </Link>
        .
      </>
    ),
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
  {
    q: 'Học xong có được hỗ trợ tìm việc không?',
    a: 'Cuối khoá có seminar hướng nghiệp (CV, phỏng vấn, định hướng vị trí Cloud/DevOps). Sau khoá bạn vẫn ở trong cộng đồng VNTechies và Career Center, nơi mentor và cộng đồng giới thiệu việc làm.',
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
    price: frontMatter?.price || courseInfo.price,
    earlyBirdPrice: frontMatter?.earlyBirdPrice || courseInfo.earlyBirdPrice,
    registrationLink: frontMatter?.registrationLink || courseInfo.registrationLink,
    hotline: frontMatter?.hotline || courseInfo.hotline,
    objectives: frontMatter?.objectives || courseInfo.objectives,
    forWho: frontMatter?.forWho || courseInfo.forWho,
    content: frontMatter?.content || courseInfo.content,
  }

  const mentors = mentorDetails
  const { active: offerActive, daysLeft } = useOffer(octoberOffer)
  const offerPrice = (amount) =>
    formatVnd(offerActive ? applyOffer(amount, octoberOffer.percent) : amount)

  return (
    <div className="course-page premium-course mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <PremiumCourseHero courseKey="aws/saa" />
      <CourseRegistrationForm courseTitle="AWS SAA-C03" theme="orange" />
      <div id="course-details" className="premium-course-details">
        {/* Course Info Section */}
        <section className="bg-white py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
                Thông tin khoá học
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-orange-50 p-6 text-center dark:bg-orange-900/20">
                <div className="mb-3 text-3xl font-bold text-orange-600">16</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Buổi học</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Mỗi buổi 2 tiếng</div>
              </div>
              <div className="rounded-xl bg-orange-50 p-6 text-center dark:bg-orange-900/20">
                <div className="mb-3 text-3xl font-bold text-orange-600">32h</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tổng thời lượng
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">8 tuần học</div>
              </div>
              <div className="rounded-xl bg-orange-50 p-6 text-center dark:bg-orange-900/20">
                <div className="mb-3 text-2xl font-bold text-orange-600">02 buổi/tuần</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Lịch học</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">19:00 - 21:00</div>
              </div>
              <div className="rounded-xl bg-orange-50 p-6 text-center dark:bg-orange-900/20">
                <div className="mb-3 text-2xl font-bold text-orange-600">Khai giảng hàng tháng</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Lớp mới mỗi tháng
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Online Google</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}

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
                  <p className="mb-6 text-lg opacity-90">
                    40% thời lượng là thực hành lab. Mục tiêu: Sau khóa học, bạn có kiến thức để tự
                    tin ứng tuyển và làm việc với AWS ngay lập tức.
                  </p>
                  <div className="mb-6 rounded-lg bg-white/10 p-4">
                    <h4 className="mb-3 text-lg font-semibold text-orange-400">
                      🎯 Giá trị vượt trội
                    </h4>
                    <p className="text-sm opacity-90">
                      Định hướng nghề nghiệp, tips viết CV, phỏng vấn cho các vị trí Cloud/DevOps
                      thông qua seminar cuối khoá học.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium">
                      ✓ 12 buổi thực hành lab
                    </div>
                    <div className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium">
                      ✓ Chia sẻ kinh nghiệm thực chiến từ mentor
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
                  Hỗ trợ học viên đến khi thi đỗ chứng chỉ. Giải đáp thắc mắc, review CV, tư vấn
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
                  Thực hành lab, xây dựng giải pháp trên AWS, và học hỏi kinh nghiệm triển khai dự
                  án thực tế từ mentor.
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 dark:from-orange-900/20 dark:to-orange-800/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600">
                  <FaCertificate className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Kỹ năng giải đề & tips thi đỗ chứng chỉ
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
                  Các bạn muốn chuyển ngành Cloud/DevOps, nhưng cảm thấy kiến thức chưa đủ, muốn
                  được cái nhìn tổng quan để lựa chọn vị trí phù hợp trong ngành.
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
                  Engineers đã làm việc trong ngành, muốn hệ thống hoá kiến thức AWS và tạo cơ hội
                  mới tiến trong sự nghiệp.
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
            <Collapsible label="Xem đủ 16 buổi học">
              <div className="overflow-x-auto">
                <table className="border-spacing-y-2 min-w-full border-separate rounded-lg border border-gray-300 text-sm dark:border-gray-600 md:text-base">
                  <thead>
                    <tr className="bg-orange-50 dark:bg-orange-900/30">
                      <th className="w-12 border border-gray-200 px-1 py-2 text-center text-xs font-bold text-orange-700 dark:border-gray-600 dark:text-orange-300 sm:w-16 sm:px-3 sm:text-sm md:text-base">
                        Buổi
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-center text-xs font-bold text-orange-700 dark:border-gray-600 dark:text-orange-300 sm:px-3 sm:text-sm md:text-base">
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
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Module: Giới thiệu kiến trúc điện toán đám mây
                          </div>
                          <div>Tổng quan và kiến trúc điện toán đám mây</div>
                          <div>AWS Well-Architected Framework</div>
                          <div>Nguyên tắc thiết kế kiến trúc</div>
                          <div>Hạ tầng toàn cầu AWS</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                        2
                      </td>
                      <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                        <div className="ml-2 space-y-1">
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Module: Bảo mật truy cập
                          </div>
                          <div>Nguyên lý bảo mật</div>
                          <div>Xác thực và phân quyền</div>
                          <div>Dùng IAM hiệu quả</div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: AWS Identity and Access Management (IAM)
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                        3
                      </td>
                      <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                        <div className="ml-2 space-y-1">
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Module: Lưu trữ với Amazon S3
                          </div>
                          <div>Giới thiệu về S3</div>
                          <div>Di chuyển và lưu trữ dữ liệu với S3</div>
                          <div>Thiết kế với S3</div>
                          <div>
                            Áp dụng các nguyên tắc của AWS Well-Architected Framework vào lưu trữ
                          </div>
                          <div>
                            Demo: Amazon S3 Transfer Acceleration, Managing Lifecycles, Versioning
                          </div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: Static website
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                        4
                      </td>
                      <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                        <div className="ml-2 space-y-1">
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Module: Amazon EC2 và Elastic File System
                          </div>
                          <div>Giới thiệu về EC2</div>
                          <div>Các thành phần và tính năng của EC2</div>
                          <div>Demo: Cấu hình EC2 Instance với User Data</div>
                          <div>Giới thiệu về EFS</div>
                          <div>Demo: EFS</div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: Tạo Dynamic Website
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                        5
                      </td>
                      <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                        <div className="ml-2 space-y-1">
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Module: Database
                          </div>
                          <div>Amazon RDS, DynamoDB</div>
                          <div>Demo: Amazon RDS, DynamoDB</div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: Khởi tạo Amazon RDS Database với các tính năng
                          </div>
                          <div>Dịch chuyển dữ liệu tới AWS databases</div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: Dịch chuyển dữ liệu tới Amazon RDS
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                        6
                      </td>
                      <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                        <div className="ml-2 space-y-1">
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Module: Networking
                          </div>
                          <div>Giới thiệu về Amazon VPC và các thành phần của VPC</div>
                          <div>Demo: Khởi tạo và cầu hình VPC</div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: Tạo môi trường mạng VPC và các thành phần của VPC
                          </div>
                          <div>Áp dụng AWS Well-Architected Framework vào thiết kế mạng</div>
                          <div>Mở rộng mạng VPC với VPC peering, Transit Gateway</div>
                          <div>Kết nối mạng từ xa với VPN Site-to-Site và Direct Connect</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                        7
                      </td>
                      <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                        <div className="ml-2 space-y-1">
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Module: Bảo mật quyền truy cập của người dùng, ứng dụng và dữ liệu
                          </div>
                          <div>Quản lý quyền và truy cập với môi trường multi-accounts</div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: Bảo mật ứng dụng với Amazon Cognito
                          </div>
                          <div>Mã hoá dữ liệu đầu cuối</div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: Mã hoá dữ liệu đầu cuối
                          </div>
                          <div>
                            Các dịch vụ bảo mật về quyền truy cập của người dùng, ứng dụng, và dữ
                            liệu
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                        8
                      </td>
                      <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                        <div className="ml-2 space-y-1">
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Module: Triển khai mở rộng và giám sát hạ tầng AWS
                          </div>
                          <div>Tổng quan về Autoscaling, Elastic Load Balancer</div>
                          <div>Demo: Elastic Load Balancer và Auto Scaling</div>
                          <div>Tổng quan về CloudWatch, Route 53</div>
                          <div>Demo: CloudWatch, Amazon Route 53</div>
                          <div>
                            Áp dụng các nguyên tắc của AWS Well-Architected Framework vào các hệ
                            thống có tính khả dụng cao
                          </div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: Tạo website có tính sẵn sàng cao với Elastic Load Balancer và Auto
                            Scaling
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                        9
                      </td>
                      <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                        <div className="ml-2 space-y-1">
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Module: Tự động hoá và dịch vụ AI/ML
                          </div>
                          <div>Infrastructure as code</div>
                          <div>Tuỳ chỉnh với CloudFormation</div>
                          <div>Demo: CloudFormation</div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: Tự động hoá triển khai cơ sở hạ tầng AWS với AWS CloudFormation
                          </div>
                          <div>Dịch vụ AI/ML: Amazon Bedrock, Amazon Q, Amazon Sagemaker</div>
                          <div>Demo: Amazon Bedrock</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                        10
                      </td>
                      <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                        <div className="ml-2 space-y-1">
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Module: Caching
                          </div>
                          <div>Tổng quan về caching</div>
                          <div>Caching sử dụng CloudFront, ElastiCache</div>
                          <div>Demo: CloudFront, ElastiCache</div>
                          <div>
                            Áp dụng các nguyên tắc AWS Well-Architected Framework vào caching
                          </div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: Streaming Dynamic Content sử dụng Amazon CloudFront
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                        11
                      </td>
                      <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                        <div className="ml-2 space-y-1">
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Module: Xây dựng kiến trúc phi tập trung
                          </div>
                          <div>Kiến trúc decoupled</div>
                          <div>Decoupling ứng dụng với Amazon SQS, Amazon SNS, và Amazon MQ</div>
                          <div>Demo: Amazon SNS, SQS</div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: Xây dựng ứng dụng decoupled với Amazon SQS
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
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Module: Xây dựng kiến trúc Serverless và Microservices
                          </div>
                          <div>Thiết kế ứng dụng serverless trên AWS</div>
                          <div>
                            Áp dụng các nguyên tắc AWS Well-Architected Framework vào xây dựng kiến
                            trúc serverless
                          </div>
                          <div>Demo: API Gateway, Lambda</div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: Triển khai ứng dụng serverless trên AWS
                          </div>
                          <div>Thiết kế ứng dụng microservice trên AWS</div>
                          <div>
                            Áp dụng các nguyên tắc AWS Well-Architected Framework vào xây dựng kiến
                            trúc serverless
                          </div>
                          <div>Demo: ECS</div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: Triển khai ứng dụng container trên AWS với ECS
                          </div>
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
                            Module: Xử lý dữ liệu
                          </div>
                          <div>Các đặc điểm của dữ liệu</div>
                          <div>Data pipelines với các dịch vụ AWS</div>
                          <div>Xử lý dữ liệu batch và real-time</div>
                          <div>Lưu trữ, phân tích và trực quan hoá dữ liệu với các dịch vụ AWS</div>
                          <div>Demo: Xử lý dữ liệu với dịch vụ AWS</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                        14
                      </td>
                      <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                        <div className="ml-2 space-y-1">
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Module: Sao lưu và khôi phục thảm hoạ
                          </div>
                          <div>AWS Backup, AWS DRS</div>
                          <div>Các chiến lược DR</div>
                          <div>
                            Áp dụng các nguyên tắc AWS Well-Architected Framework cho việc lập kế
                            hoạch DR
                          </div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Lab: Cấu hình sao lưu dữ liệu với AWS Backup
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                        15
                      </td>
                      <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                        <div className="ml-2 space-y-1">
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Module: Ôn tập
                          </div>
                          <div>Ôn tập khoá học</div>
                          <div>Thi thử với bộ đề SAA-C03</div>
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
                            Module: Tổng kết
                          </div>
                          <div className="font-semibold text-orange-700 dark:text-orange-300">
                            Seminar hướng nghiệp: Tips viết CV, phỏng vấn, định hướng vị trí
                            Cloud/DevOps
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Collapsible>
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
                <div className="mb-2 text-4xl font-bold text-orange-600">9+</div>
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
                            <div className="mb-2 text-center text-xs text-gray-500 dark:text-gray-400">
                              {m.occupation}
                            </div>
                          )}
                          <div className="text-center text-lg font-bold text-gray-900 dark:text-gray-100">
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
                  trang bị. Hệ thống kiến thức này là nền móng cho việc làm việc với AWS trong mọi
                  dự án thực tế.
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
                  Xuyên suốt khóa học là hệ thống lab và dự án thực tế: Xây dựng kiến trúc
                  multi-tier, triển khai serverless, container orchestration. Kết quả khóa học, học
                  viên có portfolio mạnh mẽ.
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
                  vực nào, cơ hội nghề nghiệp của từng lĩnh vực và mối liên hệ giữa các mảng công
                  việc đó với nhau.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-xl font-bold text-white">
                  04
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Mạng lưới kết nối cùng chuyên gia
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

        <AudienceFit student={audience.student} working={audience.working} />

        <TestimonialGrid items={pickTestimonials('aws')} />

        {/* Pricing Section */}
        <section id="hoc-phi" className="bg-white py-20 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
                Học phí đầu tư cho tương lai
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                So sánh mức cá nhân, sinh viên và nhóm để chọn phương án phù hợp.
              </p>

              <div className="mt-6 text-center">
                <p className="text-xl text-orange-600">
                  🎁 Giảm 50% chi phí đăng ký thi chứng chỉ AWS SAA-C03 (Tiết kiệm $75)
                  <br />
                  🎁 Tài khoản AWS thực hành miễn phí toàn khoá học
                </p>
              </div>

              <OfferBanner
                className="mx-auto mt-8 max-w-3xl"
                offer={octoberOffer}
                active={offerActive}
                daysLeft={daysLeft}
              />
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
                    <Price
                      amount={8000000}
                      offer={octoberOffer}
                      active={offerActive}
                      className="text-3xl font-bold text-gray-900 dark:text-gray-100"
                      compareClassName="text-sm opacity-75"
                    />
                  </div>
                  <div className="rounded-xl bg-orange-50 p-4 text-center dark:bg-orange-900/30">
                    <div className="text-sm font-medium text-orange-600 dark:text-orange-400">
                      Sinh viên
                    </div>
                    <Price
                      amount={7500000}
                      offer={octoberOffer}
                      active={offerActive}
                      className="text-2xl font-bold text-orange-700 dark:text-orange-300"
                      compareClassName="text-sm opacity-75"
                    />
                    <div className="mt-2 text-xs text-orange-600 dark:text-orange-400">
                      Hỗ trợ học phí lên tới 500.000đ
                    </div>
                    <Link
                      href="/pricing#financial-aid"
                      className="text-xs font-semibold text-orange-700 hover:underline dark:text-orange-300"
                    >
                      Financial Aid Program
                    </Link>
                  </div>
                </div>

                <a
                  href="#registration-form"
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
                    <Price
                      amount={7200000}
                      compareAt={8000000}
                      offer={octoberOffer}
                      active={offerActive}
                      className="text-3xl font-bold"
                      compareClassName="text-sm opacity-75"
                    />
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur">
                    <div className="text-sm font-medium opacity-90">Sinh viên</div>
                    <Price
                      amount={6700000}
                      compareAt={7500000}
                      offer={octoberOffer}
                      active={offerActive}
                      className="text-2xl font-bold"
                      compareClassName="text-sm opacity-75"
                    />
                    <div className="mt-2 text-xs opacity-90">Hỗ trợ học phí lên tới 500.000đ</div>
                    <Link
                      href="/pricing#financial-aid"
                      className="text-xs font-semibold opacity-90 hover:underline"
                    >
                      Financial Aid Program
                    </Link>
                  </div>
                </div>

                <a
                  href="#registration-form"
                  className="block w-full rounded-xl bg-white py-4 text-center font-bold text-orange-600 transition hover:bg-gray-50"
                >
                  Đăng ký ngay
                </a>
              </div>

              {/* Group Plan */}
              <div className="group relative rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-2xl dark:bg-gray-800">
                <div className="absolute -top-3 right-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                  PHỔ BIẾN
                </div>

                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Group
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">2+ người cùng đăng ký</p>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="rounded-xl bg-orange-50 p-6 text-center dark:bg-orange-900/30">
                    <div className="text-sm font-medium text-orange-600 dark:text-orange-400">
                      Người đi làm
                    </div>
                    <Price
                      amount={6800000}
                      compareAt={8000000}
                      offer={octoberOffer}
                      active={offerActive}
                      className="text-3xl font-bold text-orange-700 dark:text-orange-300"
                      compareClassName="text-sm text-gray-500"
                    />
                  </div>
                  <div className="rounded-xl bg-orange-50 p-4 text-center dark:bg-orange-900/20">
                    <div className="text-sm font-medium text-orange-600 dark:text-orange-400">
                      Sinh viên
                    </div>
                    <Price
                      amount={6300000}
                      compareAt={7500000}
                      offer={octoberOffer}
                      active={offerActive}
                      className="text-2xl font-bold text-orange-700 dark:text-orange-300"
                      compareClassName="text-sm text-gray-500"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <Link
                      href="/pricing#cuu-hoc-vien"
                      className="text-sm text-orange-600 hover:underline dark:text-orange-400"
                    >
                      Giá cho cựu học viên
                    </Link>
                  </div>
                </div>

                <a
                  href="#registration-form"
                  className="block w-full rounded-xl bg-orange-600 py-4 text-center font-semibold text-white transition hover:bg-orange-700"
                >
                  Đăng ký ngay
                </a>
              </div>
            </div>

            <p className="mt-12 text-center text-sm text-gray-600 dark:text-gray-300">
              <Link href="/pricing#tra-gop" className="font-semibold underline underline-offset-2">
                Trả góp 2–3 đợt, cọc từ 40%
              </Link>
              {' · '}
              <Link
                href="/pricing#financial-aid"
                className="font-semibold underline underline-offset-2"
              >
                Hỗ trợ học phí sinh viên tới 500.000₫
              </Link>
              {' · '}
              <Link
                href="/pricing#hoan-tien"
                className="font-semibold underline underline-offset-2"
              >
                Chính sách hoàn tiền
              </Link>
            </p>

            <SalaryEvidence
              title="Chứng chỉ SAA-C03 đáng giá thế nào? Số liệu thị trường"
              items={salaryEvidence}
              note="Số liệu khảo sát thị trường để tham khảo. Thu nhập thực tế phụ thuộc kinh nghiệm, vị trí và công ty; VNTechies không cam kết mức lương."
            />
          </div>
        </section>

        {/* Registration Form */}

        <CourseFAQ items={faq} />

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
                      <strong>VNTechies Community:</strong> Kết nối và xây dựng network chuyên
                      nghiệp
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
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              Sẵn sàng bắt đầu hành trình AWS?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              {offerActive
                ? `Đăng ký trước hết ngày ${octoberOffer.label} để được giảm thêm ${octoberOffer.percent}% học phí và nhận bộ tài liệu luyện thi đầy đủ.`
                : `${MONTHLY_INTAKE}. Đăng ký để giữ chỗ lớp gần nhất và nhận bộ tài liệu luyện thi đầy đủ.`}
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-4">
              <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                ✓ 40% thực hành
              </div>
              <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                ✓ Luyện đề cùng mentor
              </div>
              <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                ✓ Mentor MNC
              </div>
              <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                ✓ Cam kết đồng hành
              </div>
            </div>

            <a
              href="#registration-form"
              className="inline-flex items-center rounded-2xl bg-orange-600 px-8 py-4 text-xl font-bold text-white shadow-2xl transition hover:bg-orange-700"
            >
              Đăng ký ngay - Nhận ưu đãi
              <FaRocket className="ml-3 h-6 w-6" />
            </a>

            <p className="mt-6 text-sm opacity-75">
              Liên hệ ngay qua{' '}
              <a
                href={siteMetadata.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-orange-500 hover:underline"
              >
                Zalo {siteMetadata.zaloDisplay}
              </a>{' '}
              hoặc{' '}
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

        {/* Other Courses Section */}
        <OtherCoursesSection otherCourses={otherCourses} />
      </div>
      <StickyEnrollBar
        code="AWS SAA-C03"
        intake={MONTHLY_INTAKE}
        fromPrice={tuition.group[1]}
        offer={octoberOffer}
        active={offerActive}
      />
      <div className="h-16" aria-hidden="true" />
    </div>
  )
}

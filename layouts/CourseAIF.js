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
  FaDollarSign,
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
  title: 'AWS AI Practitioner - Professional AI Foundations',
  subtitle: 'Kiến thức nền tảng cho AI trên AWS - Giáo trình chuẩn toàn cầu',
  image: '/static/images/ogps/courses/aws-aif-ogp.png',
  startDate: 'Khai giảng hàng tháng',
  duration: '5 tuần (10 buổi, 20h)',
  schedule: '2 tối trong tuần (19:00-21:00)',
  location: 'Online qua Google',
  price: '6.000.000 VNĐ',
  earlyBird: '5.400.000 VNĐ (giảm 10%)',
  registrationLink: 'https://m.me/vntechies',
}

const stats = [
  { number: '200+', label: 'Học viên VNTechies' },
  { number: '100%', label: 'Tỷ lệ pass chứng chỉ' },
  { number: '8', label: 'Buổi học thực hành' },
  { number: '4+', label: 'Mentor kinh nghiệm' },
]

// Sales content (facts from this page and /pricing; salary figures cited)
const courseFacts = [
  { label: 'Lớp mới', value: MONTHLY_INTAKE },
  { label: 'Lịch học', value: '19:00–21:00 · 2 buổi/tuần' },
  { label: 'Thời lượng', value: '5 tuần · 10 buổi · 20h' },
  { label: 'Học phí', value: 'Đi làm 6.000.000₫ · SV 5.500.000₫' },
]

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
    'Chưa có kinh nghiệm AI/ML vẫn học được: khoá xây nền tảng từ đầu',
    'Có portfolio AI projects để đưa vào CV',
  ],
  working: [
    'Học online buổi tối 19:00–21:00, 2 buổi/tuần: không ảnh hưởng giờ làm',
    'Làm Marketing, Sales, PM, BA? Học cách ứng dụng AI vào quy trình, sản phẩm và dự án thực tế',
    'Bận đột xuất? Xem lại video record, truy cập trọn đời',
    'Rủ đồng nghiệp đăng ký nhóm 2+ người để nhận giá Group',
  ],
}

const salaryEvidence = [
  {
    value: '37,75 triệu ₫',
    label: 'Lương trung vị/tháng của AI Engineer tại Việt Nam (4 năm kinh nghiệm)',
    source: {
      name: 'ITviec, Vietnam IT Salary & Recruitment Market Report 2024–2025',
      url: 'https://itviec.com/report/vietnam-it-salary-and-recruitment-market-2024-2025',
    },
  },
  {
    value: '$100',
    label: 'Lệ phí thi AIF-C01. Học viên VNTechies được hỗ trợ giảm 50%',
    source: {
      name: 'AWS Certification (AIF-C01)',
      url: 'https://aws.amazon.com/certification/certified-ai-practitioner/',
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
    q: 'Không làm kỹ thuật có học được không?',
    a: 'Được. Khoá dành cho cả người mới bắt đầu với AI và người đi làm ở các vị trí Marketing, Sales, PM, Business Analyst muốn hiểu và ứng dụng AI. Kỹ sư, lập trình viên học để bổ sung nền tảng AI/ML và GenAI.',
  },
  {
    q: 'Lệ phí thi AIF-C01 là bao nhiêu?',
    a: 'Lệ phí thi do AWS quy định là 100 USD. Học viên VNTechies được hỗ trợ giảm 50% (còn 50 USD).',
  },
  {
    q: 'Có trả góp không?',
    a: (
      <>
        Có. Gói Comfort 2 đợt (cọc 50%, phí hỗ trợ 3%) hoặc gói Flexible 3 đợt (cọc 40%, phí hỗ trợ
        5%), áp dụng cho khoá từ 3.000.000₫. Chi tiết tại{' '}
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

  return (
    <div className="course-page premium-course mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <PremiumCourseHero courseKey="aws/aif" />
      <CourseRegistrationForm courseTitle="AWS AIF-C01" theme="purple" />
      <div id="course-details" className="premium-course-details">
        <CourseFactsStrip facts={courseFacts} />

        {/* Course Info Section */}
        <section className="bg-white py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
                Thông tin khoá học
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-purple-50 p-6 text-center dark:bg-purple-900/20">
                <div className="mb-3 text-3xl font-bold text-purple-600">10</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Buổi học</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Mỗi buổi 2 tiếng</div>
              </div>
              <div className="rounded-xl bg-purple-50 p-6 text-center dark:bg-purple-900/20">
                <div className="mb-3 text-3xl font-bold text-purple-600">20h</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tổng thời lượng
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">5 tuần học</div>
              </div>
              <div className="rounded-xl bg-purple-50 p-6 text-center dark:bg-purple-900/20">
                <div className="mb-3 text-2xl font-bold text-purple-600">02 buổi/tuần</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Lịch học</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">19:00 - 21:00</div>
              </div>
              <div className="rounded-xl bg-purple-50 p-6 text-center dark:bg-purple-900/20">
                <div className="mb-3 text-2xl font-bold text-purple-600">Khai giảng hàng tháng</div>
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
                Tại sao chọn <span className="text-purple-600">VNTechies</span>?
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
                    Hands-on với các công cụ, kiến thức AI thực tế.
                  </p>
                  <div className="mb-6 rounded-lg bg-white/10 p-4">
                    <h4 className="mb-3 text-lg font-semibold text-purple-400">
                      🎯 Giá trị vượt trội
                    </h4>
                    <p className="text-sm opacity-90">
                      Định hướng nghề nghiệp, tips viết CV, phỏng vấn cho các vị trí AI/ML thông qua
                      seminar cuối khoá học.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium">
                      ✓ 8 modules thực hành
                    </div>
                    <div className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium">
                      ✓ Kiến thức AI thực tế
                    </div>
                    <div className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium">
                      ✓ Portfolio AI projects
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
                    vững vàng trên hành trình AI!"
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Key Differentiators */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-gray-50 p-8 shadow-sm dark:bg-gray-800">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <FaUserTie className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Mentor thực chiến 100% MNC
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Toàn bộ mentor đều là chuyên gia AI/ML đang làm việc tại các công ty nước ngoài,
                  có kinh nghiệm dự án thực tế phong phú.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-8 shadow-sm dark:bg-gray-800">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <FaHandshake className="h-8 w-8 text-purple-600 dark:text-purple-400" />
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
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <FaUsers className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Cộng đồng & Network
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Tham gia cộng đồng VNTechies với hàng ngàn thành viên, cơ hội việc làm và kết nối
                  với các chuyên gia hàng đầu.
                </p>
              </div>

              <div className="rounded-xl border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-purple-50 p-8 shadow-lg dark:border-pink-800 dark:from-pink-900/20 dark:to-purple-900/20">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Tiết kiệm chi phí đáng kể
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    <span className="text-sm">
                      Giảm 50% phí thi: <strong>50 USD</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    <span className="text-sm">
                      Lab miễn phí: <strong>100 USD</strong>
                    </span>
                  </div>
                  <div className="mt-3 rounded-lg bg-gradient-to-r from-pink-100 to-purple-100 p-3 dark:from-pink-900/30 dark:to-purple-900/30">
                    <div className="text-center font-bold text-gray-900 dark:text-gray-100">
                      Tổng: 150 USD
                    </div>
                    <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                      ≈ 3.750.000 VNĐ
                    </div>
                  </div>
                </div>
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
                4 trụ cột chính giúp bạn thành công với AWS AIF-C01
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-8 dark:from-purple-900/20 dark:to-purple-800/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600">
                  <FaGraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Nắm vững kiến thức AI/ML/GenAI nền tảng
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Hiểu rõ các khái niệm AI, ML, GenAI, Foundation Models, biết cách áp dụng vào các
                  bài toán thực tế và lựa chọn AWS AI services phù hợp cho từng use case.
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 dark:from-slate-800/50 dark:to-slate-700/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-700">
                  <FaLaptopCode className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Thực hành với AWS AI/ML Services
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Hands-on experience với Amazon Bedrock, SageMaker, AI services như Rekognition,
                  Comprehend, Textract. Biết cách build GenAI applications và implement AI
                  solutions.
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-8 dark:from-purple-900/20 dark:to-purple-800/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600">
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
                  Định hướng nghề nghiệp AI/ML rõ ràng
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Hiểu rõ các vai trò trong ngành AI/ML: AI Engineer, ML Engineer, Data Scientist,
                  AI Product Manager, GenAI Developer và lộ trình phát triển cho từng hướng.
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
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <FaGraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Sinh viên mới ra trường, người mới bắt đầu với AI
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Phù hợp cho những ai chưa có kinh nghiệm về AI/ML, muốn xây dựng nền tảng vững
                  chắc và tiếp cận công nghệ mới nhất.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <FaRocket className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Người đi làm muốn ứng dụng AI vào công việc
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dành cho các bạn làm Marketing, Sales, PM, Business Analyst... muốn hiểu và ứng
                  dụng AI vào quy trình, sản phẩm, dự án thực tế.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <FaUserTie className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Kỹ sư, lập trình viên muốn nâng cấp kỹ năng AI/ML
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Phù hợp cho DevOps, Data Engineer, Software Engineer... muốn bổ sung kiến thức
                  AI/ML, GenAI để phát triển sự nghiệp trong lĩnh vực công nghệ mới.
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
                  <tr className="bg-purple-50 dark:bg-purple-900/30">
                    <th className="w-12 border border-gray-200 px-1 py-2 text-center text-xs font-bold text-purple-700 dark:border-gray-600 dark:text-purple-300 sm:w-16 sm:px-3 sm:text-sm md:text-base">
                      Module
                    </th>
                    <th className="border border-gray-200 px-2 py-2 text-center text-xs font-bold text-purple-700 dark:border-gray-600 dark:text-purple-300 sm:px-3 sm:text-sm md:text-base">
                      Nội dung
                    </th>
                    <th className="border border-gray-200 px-2 py-2 text-center text-xs font-bold text-purple-700 dark:border-gray-600 dark:text-purple-300 sm:px-3 sm:text-sm md:text-base">
                      Domain AIF-C01
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-top">
                    <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                      1-2
                    </td>
                    <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                      <div className="ml-2 space-y-1">
                        <div>
                          <strong>Giới thiệu AI & Dịch vụ AWS AI</strong>
                        </div>
                        <div>• Tổng quan về AI</div>
                        <div>• Khái niệm Machine Learning</div>
                        <div>• Machine Learning, Deep Learning và Generative AI</div>
                        <div>• Các dịch vụ AI của AWS</div>
                        <div className="font-semibold text-purple-700 dark:text-purple-300">
                          🔧 Demo: Sử dụng AWS AI Services
                        </div>
                      </div>
                    </td>
                    <td className="border border-gray-200 px-3 py-2 text-center dark:border-gray-600">
                      <div>
                        <strong>Domain 1</strong> (20%)
                      </div>
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                      3
                    </td>
                    <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                      <div className="ml-2 space-y-1">
                        <div>
                          <strong>Giới thiệu Generative AI</strong>
                        </div>
                        <div>• Foundation models (Mô hình nền tảng)</div>
                        <div>• Cách hoạt động của foundation models</div>
                        <div>• Dịch vụ Generative AI của AWS</div>
                        <div className="font-semibold text-purple-700 dark:text-purple-300">
                          🔧 Demo: Sử dụng Amazon Q Developer
                        </div>
                        <div>• PartyRock, playground của Amazon Bedrock</div>
                        <div className="font-semibold text-purple-700 dark:text-purple-300">
                          🔧 Demo: Giới thiệu PartyRock
                        </div>
                      </div>
                    </td>
                    <td className="border border-gray-200 px-3 py-2 text-center dark:border-gray-600">
                      <div>
                        <strong>Domain 2</strong> (24%)
                      </div>
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                      4
                    </td>
                    <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                      <div className="ml-2 space-y-1">
                        <div>
                          <strong>Prompt Engineering và Kỹ thuật tạo prompt</strong>
                        </div>
                        <div>• Giá trị của prompt engineering</div>
                        <div>• Cách cấu trúc prompt cho mô hình ngôn ngữ lớn</div>
                        <div>• Kỹ thuật tạo prompt</div>
                        <div>• Tính năng của Amazon Bedrock cho prompt engineering</div>
                        <div className="font-semibold text-purple-700 dark:text-purple-300">
                          🔧 Demo: Cấu trúc prompt hiệu quả
                        </div>
                      </div>
                    </td>
                    <td className="border border-gray-200 px-3 py-2 text-center dark:border-gray-600">
                      <div>
                        <strong>Domain 2</strong> (24%)
                      </div>
                      <div>
                        <strong>Domain 3</strong> (28%)
                      </div>
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                      5
                    </td>
                    <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                      <div className="ml-2 space-y-1">
                        <div>
                          <strong>Làm việc với Foundation Models</strong>
                        </div>
                        <div>• Tiêu chí lựa chọn và tuỳ chỉnh mô hình nền tảng</div>
                        <div>• Đánh giá và giám sát mô hình</div>
                        <div>• Retrieval-Augmented Generation (RAG)</div>
                        <div>• Kỹ thuật tuỳ chỉnh mô hình nền tảng</div>
                        <div className="font-semibold text-purple-700 dark:text-purple-300">
                          🔧 Demo: Làm việc với mô hình trên Amazon Bedrock
                        </div>
                      </div>
                    </td>
                    <td className="border border-gray-200 px-3 py-2 text-center dark:border-gray-600">
                      <div>
                        <strong>Domain 3</strong> (28%)
                      </div>
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                      6
                    </td>
                    <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                      <div className="ml-2 space-y-1">
                        <div>
                          <strong>Thực hành AI có trách nhiệm</strong>
                        </div>
                        <div>• Định nghĩa AI có trách nhiệm</div>
                        <div>• Các yếu tố cần cân nhắc khi triển khai Generative AI</div>
                        <div>• Triển khai các biện pháp bảo vệ</div>
                        <div>• AWS hỗ trợ AI có trách nhiệm như thế nào</div>
                        <div className="font-semibold text-purple-700 dark:text-purple-300">
                          🔧 Demo: Sử dụng Amazon Bedrock Guardrails
                        </div>
                      </div>
                    </td>
                    <td className="border border-gray-200 px-3 py-2 text-center dark:border-gray-600">
                      <div>
                        <strong>Domain 4</strong> (14%)
                      </div>
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                      7
                    </td>
                    <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                      <div className="ml-2 space-y-1">
                        <div>
                          <strong>Bảo mật, Quản trị và Tuân thủ</strong>
                        </div>
                        <div>• Định nghĩa bảo mật, quản trị và tuân thủ cho Generative AI</div>
                        <div>• Bảo mật hệ thống AI trên AWS</div>
                        <div>• Quản trị hệ thống AI trên AWS</div>
                        <div>• Tuân thủ hệ thống AI trên AWS</div>
                        <div className="font-semibold text-purple-700 dark:text-purple-300">
                          🔧 Demo: Sử dụng AWS Audit Manager Frameworks
                        </div>
                      </div>
                    </td>
                    <td className="border border-gray-200 px-3 py-2 text-center dark:border-gray-600">
                      <div>
                        <strong>Domain 5</strong> (14%)
                      </div>
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                      8
                    </td>
                    <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                      <div className="ml-2 space-y-1">
                        <div>
                          <strong>Triển khai ứng dụng Generative AI</strong>
                        </div>
                        <div>• Quy trình phát triển ứng dụng Generative AI</div>
                        <div>• Sử dụng AI agents trong Amazon Bedrock</div>
                        <div>• Lựa chọn dịch vụ AWS phù hợp</div>
                      </div>
                    </td>
                    <td className="border border-gray-200 px-3 py-2 text-center dark:border-gray-600">
                      <div>
                        <strong>Domain 3</strong> (28%)
                      </div>
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                      9
                    </td>
                    <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                      <div className="ml-2 space-y-1">
                        <div>
                          <strong>Ôn tập & Chuẩn bị thi chứng chỉ</strong>
                        </div>
                        <div>• Thông tin về kỳ thi AWS Certified AI Practitioner</div>
                        <div>• Tài liệu ôn tập & lộ trình chuẩn bị</div>
                        <div>• Luyện đề & chiến lược làm bài</div>
                      </div>
                    </td>
                    <td className="border border-gray-200 px-3 py-2 text-center dark:border-gray-600">
                      All domains
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border-gray-600">
                      10
                    </td>
                    <td className="border border-gray-200 px-3 py-2 dark:border-gray-600">
                      <div className="ml-2 space-y-1">
                        <div className="font-semibold text-purple-700 dark:text-purple-300">
                          🎯 Seminar hướng nghiệp: Tips viết CV, phỏng vấn, định hướng vị trí AI/ML
                        </div>
                      </div>
                    </td>
                    <td className="border border-gray-200 px-3 py-2 text-center dark:border-gray-600">
                      All domains
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
                100% là chuyên gia AI/ML tại các công ty nước ngoài (MNC), giàu kinh nghiệm dự án
                thực tế
              </p>
            </div>

            {/* Mentor Stats */}
            <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-purple-600">9+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Mentor tham gia giảng dạy
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-purple-600">100%</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Mentor giữ vị trí Senior/Lead/Manager
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-purple-600">9+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Năm kinh nghiệm AWS
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-purple-600">100%</div>
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
                      <a className="flex h-full flex-col items-center justify-between rounded-xl bg-gray-50 p-6 shadow transition hover:bg-purple-50 dark:bg-gray-800 dark:hover:bg-purple-900/20">
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
                            <div className="mb-1 text-center text-sm font-semibold text-purple-700 dark:text-purple-300">
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
                nghiệp AI/ML/GenAI
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white">
                  01
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Nắm vững kiến thức AI/ML/GenAI nền tảng
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hiểu rõ các khái niệm AI, ML, GenAI, Foundation Models, biết cách áp dụng vào các
                  bài toán thực tế và lựa chọn AWS AI services phù hợp cho từng use case.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white">
                  02
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Thực hành với AWS AI/ML Services
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hands-on experience với Amazon Bedrock, SageMaker, AI services như Rekognition,
                  Comprehend, Textract. Biết cách build GenAI applications và implement AI
                  solutions.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white">
                  03
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Định hướng nghề nghiệp AI/ML rõ ràng
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hiểu rõ các vai trò trong ngành AI/ML: AI Engineer, ML Engineer, Data Scientist,
                  AI Product Manager, GenAI Developer và lộ trình phát triển cho từng hướng.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white">
                  04
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Network cùng professionals
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Kết nối với network trong cộng đồng VNTechies và cơ hội career development trong
                  lĩnh vực AI/GenAI.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AudienceFit student={audience.student} working={audience.working} />

        {/* Pricing Section */}
        <section className="bg-white py-20 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
                Đầu tư cho tương lai AI của bạn
              </h2>
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
                      6.000.000₫
                    </div>
                  </div>
                  <div className="rounded-xl bg-purple-50 p-4 text-center dark:bg-purple-900/30">
                    <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      Sinh viên
                    </div>
                    <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                      5.500.000₫
                    </div>
                    <div className="mt-2 text-xs text-purple-600 dark:text-purple-400">
                      Hỗ trợ học phí lên tới 500.000đ
                    </div>
                    <Link
                      href="/pricing#financial-aid"
                      className="text-xs font-semibold text-purple-700 hover:underline dark:text-purple-300"
                    >
                      Financial Aid Program
                    </Link>
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
              <div className="group relative scale-105 rounded-2xl bg-purple-600 p-8 text-white shadow-2xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-400 px-4 py-2 text-sm font-bold text-white">
                  Ưu đãi hấp dẫn
                </div>

                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold">Early Bird</h3>
                  <p className="opacity-90">Đăng ký sớm - Tiết kiệm 10%</p>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="rounded-xl bg-white/20 p-6 text-center backdrop-blur">
                    <div className="text-sm font-medium opacity-90">Người đi làm</div>
                    <div className="text-3xl font-bold">5.400.000₫</div>
                    <div className="text-sm line-through opacity-75">6.000.000₫</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur">
                    <div className="text-sm font-medium opacity-90">Sinh viên</div>
                    <div className="text-2xl font-bold">4.900.000₫</div>
                    <div className="text-sm line-through opacity-75">5.500.000₫</div>
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
                  className="block w-full rounded-xl bg-white py-4 text-center font-bold text-purple-600 transition hover:bg-gray-50"
                >
                  Đăng ký ngay
                </a>
              </div>

              {/* Group Plan */}
              <div className="group relative rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-2xl dark:bg-gray-800">
                <div className="absolute -top-3 right-4 rounded-full bg-purple-500 px-3 py-1 text-xs font-bold text-white">
                  PHỔ BIẾN
                </div>

                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Group
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">2+ người cùng đăng ký</p>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="rounded-xl bg-purple-50 p-6 text-center dark:bg-purple-900/30">
                    <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      Người đi làm
                    </div>
                    <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                      5.000.000₫
                    </div>
                    <div className="text-sm text-gray-500 line-through">6.000.000₫</div>
                  </div>
                  <div className="rounded-xl bg-purple-50 p-4 text-center dark:bg-purple-900/20">
                    <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      Sinh viên
                    </div>
                    <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                      4.500.000₫
                    </div>
                    <div className="text-sm text-gray-500 line-through">5.500.000₫</div>
                  </div>
                  <div className="mt-3 text-center">
                    <Link
                      href="/pricing#cuu-hoc-vien"
                      className="text-sm text-purple-600 hover:underline dark:text-purple-400"
                    >
                      Giá cho cựu học viên
                    </Link>
                  </div>
                </div>

                <a
                  href="#registration-form"
                  className="block w-full rounded-xl bg-purple-600 py-4 text-center font-semibold text-white transition hover:bg-purple-700"
                >
                  Đăng ký ngay
                </a>
              </div>
            </div>

            <SalaryEvidence
              title="Kỹ năng AI đáng giá thế nào? Số liệu thị trường"
              items={salaryEvidence}
              note="Số liệu khảo sát thị trường để tham khảo. Thu nhập thực tế phụ thuộc kinh nghiệm, vị trí và công ty; VNTechies không cam kết mức lương."
            />
          </div>
        </section>
        <TestimonialGrid items={pickTestimonials('aws')} />

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
              <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-8 dark:from-purple-900/20 dark:to-purple-800/20">
                <div className="mb-4 inline-block rounded-full bg-purple-600 px-4 py-2 text-sm font-bold text-white">
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
                    <FaCheckCircle className="mt-1 h-4 w-4 text-purple-600" />
                    <span>
                      <strong>Career Center:</strong> Giới thiệu việc làm từ Mentor và cộng đồng
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-purple-600" />
                    <span>
                      <strong>VNTechies Community:</strong> Kết nối và xây dựng network chuyên
                      nghiệp
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-purple-600" />
                    <span>
                      <strong>Cộng đồng Q&A:</strong> Hỏi đáp, tư vấn kiến thức và công việc 24/7
                    </span>
                  </div>
                </div>
              </div>

              {/* Exclusive Events */}
              <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-8 dark:from-purple-900/20 dark:to-purple-800/20">
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Sự kiện độc quyền
                </h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-purple-600" />
                    <span>Miễn phí tham gia Master Class và Workshop</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-purple-600" />
                    <span>Alumni's Support và Office Hour với chuyên gia</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-4 w-4 text-purple-600" />
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
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Sẵn sàng bắt đầu hành trình AI?</h2>
            <p className="mb-8 text-xl opacity-90">
              Đăng ký ngay để nhận ưu đãi Early Bird và bộ tài liệu luyện thi đầy đủ!
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex flex-wrap justify-center gap-4">
                <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                  ✓ Hands-on AI/ML
                </div>
                <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                  ✓ 100% tỷ lệ pass
                </div>
                <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                  ✓ Mentor MNC
                </div>
                <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                  ✓ Cam kết đồng hành
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="rounded-full bg-pink-400/90 px-6 py-3 text-sm font-bold text-white shadow-lg">
                  💰 Giảm 50% phí thi (50 USD)
                </div>
                <div className="rounded-full bg-purple-400/90 px-6 py-3 text-sm font-bold text-white shadow-lg">
                  🎁 Lab miễn phí (100 USD)
                </div>
              </div>
            </div>

            <a
              href="#registration-form"
              className="inline-flex items-center rounded-2xl bg-purple-600 px-8 py-4 text-xl font-bold text-white shadow-2xl transition hover:bg-purple-700"
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
                className="text-purple-500 hover:underline"
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
        code="AWS AIF-C01"
        intake={MONTHLY_INTAKE}
        fromPrice={4500000}
        offer={null}
        active={false}
      />
      <div className="h-16" aria-hidden="true" />
    </div>
  )
}

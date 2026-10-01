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
  title: 'AWS Cloud Developing - Phát triển ứng dụng Cloud',
  subtitle: 'Học lập trình & phát triển ứng dụng thực tế trên AWS',
  image: '/static/images/ogps/courses/aws-dva-ogp.png',
  startDate: 'Khai giảng hàng tháng',
  duration: '8 tuần (16 buổi,30+ giờ học)',
  schedule: '2 tổi trong tuần (19:00 - 21:00)',
  location: 'Online qua Google Meet + Lab thực hành',
  price: '8.000.000 VNĐ',
  earlyBird: '7.200.000 VNĐ (giảm 10%)',
  registrationLink: 'https://m.me/vntechies',
}

const stats = [
  { number: '30h', label: 'Thời lượng học tập' },
  { number: '4+', label: 'Mentor kinh nghiệm' },
  { number: '13+', label: 'Lab hands-on, demo, activities' },
  { number: '100%', label: 'Ứng dụng thực tế' },
]

// Sales content (facts from this page and /pricing; salary figures cited)
const courseFacts = [
  { label: 'Lớp mới', value: MONTHLY_INTAKE },
  { label: 'Lịch học', value: '19:00–21:00 · 2 buổi/tuần' },
  { label: 'Thời lượng', value: '8 tuần · 15 buổi · 30h+' },
  { label: 'Học phí', value: 'Đi làm 8.000.000₫ · SV 7.500.000₫' },
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
    'Biết lập trình cơ bản là đủ: khoá đi từ SDLC, AWS SDK, CloudShell/Cloud9 đến serverless',
    'Lab phát triển và triển khai ứng dụng trên AWS để đưa vào CV',
  ],
  working: [
    'Học online buổi tối 19:00–21:00, 2 buổi/tuần: không ảnh hưởng giờ làm',
    'Bận đột xuất? Xem lại video record, truy cập trọn đời',
    'Rủ đồng nghiệp đăng ký nhóm 2+ người để nhận giá Group',
    'Mentor là Senior/Lead/Manager tại công ty đa quốc gia, review code và kiến trúc theo kinh nghiệm dự án',
  ],
}

const salaryEvidence = [
  {
    value: '35,6 triệu ₫',
    label: 'Lương trung vị/tháng của Back-end Developer tại Việt Nam (6 năm kinh nghiệm)',
    source: {
      name: 'ITviec, Vietnam IT Salary & Recruitment Market Report 2024–2025',
      url: 'https://itviec.com/report/vietnam-it-salary-and-recruitment-market-2024-2025',
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
    label: 'Lệ phí thi DVA-C02. Học viên VNTechies được hỗ trợ giảm 50%',
    source: {
      name: 'AWS Certification (DVA-C02)',
      url: 'https://aws.amazon.com/certification/certified-developer-associate/',
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
    q: 'Mình cần biết gì trước khi học?',
    a: 'Bạn cần biết lập trình cơ bản (một ngôn ngữ bất kỳ). Khoá bắt đầu từ vòng đời phát triển phần mềm và AWS SDK, sau đó đi dần tới S3, DynamoDB, Lambda, API Gateway và serverless.',
  },
  {
    q: 'Lệ phí thi DVA-C02 là bao nhiêu?',
    a: 'Lệ phí thi do AWS quy định là 150 USD. Học viên VNTechies được hỗ trợ giảm 50% (tiết kiệm 75 USD).',
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
      <PremiumCourseHero courseKey="aws/dva" />
      <CourseRegistrationForm courseTitle="AWS DVA-C02" theme="orange" />
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
              <div className="rounded-xl bg-orange-50 p-6 text-center dark:bg-orange-900/20">
                <div className="mb-3 text-3xl font-bold text-orange-600">15</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Buổi học</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Mỗi buổi 2 tiếng</div>
              </div>
              <div className="rounded-xl bg-orange-50 p-6 text-center dark:bg-orange-900/20">
                <div className="mb-3 text-3xl font-bold text-orange-600">30h+</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tổng thời lượng
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">8 tuần học</div>
              </div>
              <div className="rounded-xl bg-orange-50 p-6 text-center dark:bg-orange-900/20">
                <div className="mb-3 text-2xl font-bold text-orange-600">T2 & T4</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Lịch học</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">19:00 - 21:00</div>
              </div>
              <div className="rounded-xl bg-orange-50 p-6 text-center dark:bg-orange-900/20">
                <div className="mb-3 text-2xl font-bold text-orange-600">Khai giảng hàng tháng</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Lớp mới mỗi tháng
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Online</div>
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
                        <div>Tổng quan về kiến trúc điện toán đám mây và Hạ tầng AWS</div>
                        <div>
                          Giới thiệu về Amazon EC2, Elastic Load Balancing và Amazon EC2 Auto
                          Scaling
                        </div>
                        <div>Giới thiệu về Serverless với AWS Lambda</div>
                        <div>Từ monolithic đến microservices</div>
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
                          Module: Phát triển ứng dụng trên AWS
                        </div>
                        <div>Vòng đời phát triển hệ thống (SDLC)</div>
                        <div>Các bước bắt đầu phát triển trên AWS</div>
                        <div>Các nguyên tắc cơ bản khi làm việc với AWS SDKs</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Lab: Khám phá AWS CloudShell và AWS Cloud9 IDE
                        </div>
                        <div>Kiểm tra kiến thức</div>
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
                        <div>Làm việc với S3 bucket và S3 objects</div>
                        <div>Bảo vệ dữ liệu và quản lý quyền truy cập tài nguyên Amazon S3</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Lab: Làm việc với Amazon S3
                        </div>
                        <div>Kiểm tra kiến thức</div>
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
                          Module: Bảo mật truy cập tài nguyên
                        </div>
                        <div>Mô hình chia sẻ trách nhiệm</div>
                        <div>Giới thiệu AWS Identity and Access Management (IAM)</div>
                        <div>Xác thực với IAM</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Demo: Cấu hình truy cập tài nguyên AWS giữa các tài khoản
                        </div>
                        <div>Ủy quyền với IAM</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Demo: Tạo người dùng và nhóm IAM
                        </div>
                        <div>Kiểm tra kiến thức</div>
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
                          Module: Phát triển với NoSQL linh hoạt
                        </div>
                        <div>Giới thiệu các AWS databases</div>
                        <div>Các khái niệm chính về Amazon DynamoDB</div>
                        <div>Partitions và Data Distribution</div>
                        <div>Secondary Indexes</div>
                        <div>Read/Write Throughput</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Hoạt động: Tính toán RCU và WCU
                        </div>
                        <div>Streams and Global Tables</div>
                        <div>Sao lưu và khôi phục</div>
                        <div>Các thao tác cơ bản với bảng Amazon DynamoDB</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Lab: Làm việc với Amazon DynamoDB
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
                          Module: Phát triển REST API
                        </div>
                        <div>Giới thiệu Amazon API Gateway</div>
                        <div>Tạo REST API</div>
                        <div>Tích hợp với API Gateway</div>
                        <div>Triển khai API</div>
                        <div>Kiểm soát truy cập REST API</div>
                        <div>Giám sát REST API</div>
                        <div>Tối ưu hóa API Gateway</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Lab: Phát triển REST API với Amazon API Gateway
                        </div>
                        <div>Kiểm tra kiến thức</div>
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
                          Module: Phát triển các giải pháp Event-Driven Serverless
                        </div>
                        <div>Giới thiệu điện toán Serverless & AWS Lambda</div>
                        <div>Invoking Lambda Functions</div>
                        <div>Thiết lập quyền cho Lambda</div>
                        <div>Viết và cấu hình hàm Lambda</div>
                        <div>Triển khai hàm Lambda</div>
                        <div>Công cụ monitoring và Debugging cho developer</div>
                        <div>Demo: Sử dụng AWS X-Ray với Lambda</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Lab: Tạo hàm Lambda sử dụng AWS SDK for Python
                        </div>
                        <div>Kiểm tra kiến thức</div>
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
                          Module: Giới thiệu Container và các dịch vụ Container trên AWS
                        </div>
                        <div>Giới thiệu container và Docker Container</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Lab: Di chuyển ứng dụng web sang Docker Container
                        </div>
                        <div>Sử dụng Container cho microservices</div>
                        <div>Giới thiệu dịch vụ Container trên AWS</div>
                        <div>Triển khai ứng dụng với Elastic Beanstalk</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Lab: Chạy Container trên Managed services
                        </div>
                        <div>Kiểm tra kiến thức</div>
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
                          Module: Lưu trữ đệm (caching) thông tin để mở rộng quy mô
                        </div>
                        <div>Tổng quan về caching & Caching với Amazon ElastiCache</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Lab: Lưu trữ dữ liệu ứng dụng với ElastiCache
                        </div>
                        <div>
                          Caching với Amazon CloudFront
                          <div>Chiến lược caching</div>
                        </div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Lab: Triển khai CloudFront để caching và bảo mật ứng dụng
                        </div>
                        <div>Kiểm tra kiến thức</div>
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
                          Module: Phát triển với các dịch vụ Messaging
                        </div>
                        <div>Xử lý yêu cầu bất đồng bộ</div>
                        <div>Giới thiệu và làm việc với Amazon SQS, Amazon SNS</div>
                        <div>Cấu hình hàng đợi SQS</div>
                        <div>Phát triển với Amazon SNS</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Demo: Làm việc với các dịch vụ Amazon Messaging
                        </div>
                        <div>Giới thiệu Kinesis Data Streams</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Lab: Triển khai hệ thống nhắn tin với Amazon SNS và Amazon SQS
                        </div>
                        <div>Kiểm tra kiến thức</div>
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
                          Module: Xác định quy trình làm việc để điều phối chức năng
                        </div>
                        <div>Phối hợp tác vụ trong ứng dụng phân tán</div>
                        <div>Giới thiệu AWS Step Functions</div>
                        <div>Các loại trạng thái</div>
                        <div>Trường hợp sử dụng Step Functions</div>
                        <div>API Step Functions</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Demo: Tạo calculator đơn giản bằng Step Functions
                        </div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Lab: Điều phối các hàm Serverless với AWS Step Functions
                        </div>
                        <div>Kiểm tra kiến thức</div>
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
                          Module: Phát triển ứng dụng an toàn trên AWS
                        </div>
                        <div>Bảo mật kết nối mạng</div>
                        <div>Xác thực với AWS STS</div>
                        <div>Xác thực với Amazon Cognito</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Lab: Triển khai xác thực ứng dụng với Amazon Cognito
                        </div>
                        <div>Kiểm tra kiến thức</div>
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
                          Module: Tự động triển khai ứng dụng bằng CI/CD pipelines
                        </div>
                        <div>Giới thiệu DevOps và Sử dụng AWS Code Services cho CI/CD</div>
                        <div>Triển khai ứng dụng với AWS CloudFormation</div>
                        <div>Triển khai ứng dụng với AWS SAM</div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Lab: Tự động triển khai ứng dụng bằng CI/CD pipelines
                        </div>
                        <div>Kiểm tra kiến thức</div>
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
                          Module: Ôn tập
                        </div>
                        <div>Ôn tập khoá học</div>
                        <div>Thi thử với bộ đề DVA-C02</div>
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
                          Module: Tổng kết
                        </div>
                        <div className="font-semibold text-orange-700 dark:text-orange-300">
                          Seminar hướng nghiệp: Tips viết CV, phỏng vấn, định hướng vị trí liên quan
                          đến Cloud/DevOps
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

        <AudienceFit student={audience.student} working={audience.working} />

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

              <div className="mt-6 text-center">
                <p className="text-xl text-orange-600">
                  🎁 Giảm 50% lệ phí thi chứng chỉ AWS DVA-C02 (Tiết kiệm $75)
                  <br />
                  🎁 Thực hành miễn phí toàn khoá học
                </p>
              </div>
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
                  href="#registration-form"
                  className="block w-full rounded-xl bg-orange-600 py-4 text-center font-semibold text-white transition hover:bg-orange-700"
                >
                  Đăng ký ngay
                </a>
              </div>
            </div>

            <SalaryEvidence
              title="Phát triển ứng dụng trên AWS đáng giá thế nào? Số liệu thị trường"
              items={salaryEvidence}
              note="Số liệu khảo sát thị trường để tham khảo. Thu nhập thực tế phụ thuộc kinh nghiệm, vị trí và công ty; VNTechies không cam kết mức lương."
            />
          </div>
        </section>

        {/* Registration Form */}

        <CourseFAQ items={faq} />

        <TestimonialGrid items={pickTestimonials('aws')} />

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
              Đăng ký ngay để nhận ưu đãi Early Bird và bộ tài liệu luyện thi đầy đủ!
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-4">
              <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                ✓ 40% thực hành
              </div>
              <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                ✓ 90% tỷ lệ đỗ chứng chỉ
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
        code="AWS DVA-C02"
        intake={MONTHLY_INTAKE}
        fromPrice={6300000}
        offer={null}
        active={false}
      />
      <div className="h-16" aria-hidden="true" />
    </div>
  )
}

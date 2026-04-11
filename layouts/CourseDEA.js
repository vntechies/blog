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
  FaDatabase,
  FaCode,
} from 'react-icons/fa'
import Link from 'next/link'
import CourseRegistrationForm from '../components/CourseRegistrationForm'
import OtherCoursesSection from '@/components/OtherCoursesSection'

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
  title: 'Khoá học AWS Certified Data Engineer – Associate (DEA-C01)',
  subtitle:
    'Pipeline dữ liệu trên AWS: thu thập, lưu trữ, xử lý, phân tích, trực quan hóa — chuẩn bị thi DEA-C01',
  image: '/static/images/courses/awsdeac01Info.png',
  startDate: 'Liên hệ tư vấn lịch khai giảng',
  duration: 'Khoảng 40 giờ nội dung (theo outline chuẩn ~2.400 phút), tối thiểu 8 tuần triển khai',
  schedule: 'Live online + lab thực hành trên AWS (tần suất theo từng khóa)',
  location: 'Online qua Google Meet + môi trường lab AWS',
  price: '8.000.000 VNĐ',
  earlyBird: 'Liên hệ ưu đãi sớm',
  registrationLink: 'https://m.me/vntechies',
}

const stats = [
  { number: '12', label: 'Module trong chương trình' },
  { number: '40h', label: 'Thời lượng outline chuẩn' },
  { number: 'Lab+', label: 'Bài lab & demo thực hành' },
  { number: 'DEA', label: 'Định hướng DEA-C01' },
]

const highlights = [
  {
    icon: <FaDatabase className="text-2xl text-purple-500" />,
    title: '12 module lộ trình rõ ràng',
    description:
      'Từ tổ chức data-driven, thiết kế pipeline, bảo mật & scale đến ingestion, lưu trữ, big data, ML, phân tích và tự động hóa',
  },
  {
    icon: <FaAward className="text-2xl text-yellow-500" />,
    title: 'Chứng chỉ DEA-C01',
    description:
      'Ôn luyện theo các domain kỳ thi AWS Certified Data Engineer – Associate, mock test và Q&A',
  },
  {
    icon: <FaDollarSign className="text-2xl text-green-500" />,
    title: 'Ưu đãi lệ phí thi',
    description:
      'Hỗ trợ voucher giảm lệ phí thi chứng chỉ AWS (theo chính sách từng khóa — xác nhận khi đăng ký)',
  },
]

const learningOutcomes = [
  'Tóm tắt vai trò của data science trong tổ chức dữ liệu làm trọng tâm và giá trị của pipeline',
  'Nhận diện các yếu tố dữ liệu ảnh hưởng tới kiến trúc hạ tầng pipeline',
  'Minh họa pipeline bằng dịch vụ AWS cho use case tổng quát; bảo mật & governance từng bước',
  'Thiết kế quy trình thu thập dữ liệu cân nhắc scale, chi phí, fault tolerance và độ trễ',
  'Chọn lưu trữ phù hợp use case analytics; xử lý structured, semistructured và unstructured',
  'Giải thích MapReduce và vai trò Amazon EMR; phân biệt ML pipeline và các bước xử lý',
  'Phân tích dữ liệu bằng công cụ AWS phù hợp; trực quan hóa đúng đối tượng và loại dữ liệu',
  'Ôn tập và hướng tới kỳ thi AWS Certified Data Engineer – Associate (DEA-C01)',
]

const curriculum = [
  {
    week: 'Module 1',
    title: 'Welcome & course orientation',
    topics: [
      'Course prerequisites and objectives',
      'Course overview',
      'Knowledge check (theo outline)',
    ],
  },
  {
    week: 'Module 2',
    title: 'Data-Driven Organizations',
    topics: [
      'Data-driven decisions',
      'The data pipeline – infrastructure for data-driven decisions',
      'The role of the data engineer in data-driven organizations',
      'Modern data strategies',
      'Lab: Accessing and Analyzing Data by Using Amazon S3',
      'Knowledge check',
    ],
  },
  {
    week: 'Module 3',
    title: 'The Elements of Data',
    topics: [
      'The five Vs of data – volume, velocity, variety, veracity, and value',
      'Volume and velocity',
      'Variety – data types and data sources',
      'Veracity and value; activities to improve veracity and value',
      'Activity: Planning Your Pipeline',
      'Knowledge check',
    ],
  },
  {
    week: 'Module 4',
    title: 'Design Principles and Patterns for Data Pipelines',
    topics: [
      'AWS Well-Architected Framework and Lenses',
      'Activity: Using the Well-Architected Framework',
      'The evolution of data architectures; modern data architecture on AWS',
      'Pipeline: ingestion and storage; processing and consumption',
      'Streaming analytics pipeline',
      'Lab: Querying Data by Using Athena',
      'Knowledge check',
    ],
  },
  {
    week: 'Module 5',
    title: 'Securing and Scaling the Data Pipeline',
    topics: [
      'Cloud security review',
      'Security of analytics workloads',
      'ML security',
      'Scaling: overview; scalable infrastructure and components',
      'Knowledge check',
    ],
  },
  {
    week: 'Module 6',
    title: 'Ingesting and Preparing Data',
    topics: [
      'ETL and ELT comparison',
      'Data wrangling: discovery, structuring, cleaning, enriching, validating, publishing',
      'Knowledge check',
    ],
  },
  {
    week: 'Module 7',
    title: 'Ingesting by Batch or by Stream',
    topics: [
      'Comparing batch and stream ingestion',
      'Batch ingestion processing; purpose-built ingestion tools',
      'AWS Glue for batch ingestion processing; scaling batch',
      'Lab: Performing ETL on a Dataset by Using AWS Glue',
      'Kinesis for stream processing; scaling streams; ingesting IoT data by stream',
      'Knowledge check',
    ],
  },
  {
    week: 'Module 8',
    title: 'Storing and Organizing Data',
    topics: [
      'Storage in the modern data architecture',
      'Data lake storage; data warehouse storage; purpose-built databases',
      'Storage in support of the pipeline; securing storage',
      'Lab: Storing and Analyzing Data by Using Amazon Redshift',
      'Knowledge check',
    ],
  },
  {
    week: 'Module 9',
    title: 'Processing Big Data',
    topics: [
      'Big data processing concepts; Apache Hadoop; Apache Spark',
      'Amazon EMR; managing EMR clusters',
      'Lab: Processing Logs by Using Amazon EMR',
      'Apache Hudi',
      'Lab: Updating Dynamic Data in Place',
      'Knowledge check',
    ],
  },
  {
    week: 'Module 10',
    title: 'Processing Data for ML',
    topics: [
      'ML concepts; the ML lifecycle; framing the ML problem',
      'Collecting data; labeling with SageMaker Ground Truth',
      'Preprocessing; feature engineering; developing and deploying a model',
      'ML infrastructure on AWS; SageMaker demos; AI/ML services on AWS',
      'Knowledge check',
    ],
  },
  {
    week: 'Module 11',
    title: 'Analyzing and Visualizing Data',
    topics: [
      'Factors that influence tool selection; comparing AWS tools and services',
      'Demo: AWS IoT Analytics and QuickSight',
      'Selecting tools for a gaming analytics use case',
      'Lab: Kinesis Data Firehose, OpenSearch Service, and OpenSearch Dashboards',
      'Knowledge check',
    ],
  },
  {
    week: 'Module 12',
    title: 'Automating the Pipeline',
    topics: [
      'Automating infrastructure deployment; CI/CD',
      'Automating with Step Functions',
      'Lab: Building and Orchestrating ETL Pipelines by Using Athena and Step Functions',
      'Knowledge check',
    ],
  },
]

export default function CourseDEA({ frontMatter, mentorDetails, otherCourses = [] }) {
  const info = {
    title: frontMatter?.title || courseInfo.title,
    subtitle: frontMatter?.subtitle || courseInfo.subtitle,
    image: courseInfo.image,
    startDate: frontMatter?.startDate || courseInfo.startDate,
    duration: frontMatter?.duration || courseInfo.duration,
    schedule: frontMatter?.schedule || courseInfo.schedule,
    location: frontMatter?.location || courseInfo.location,
    price: frontMatter?.price || courseInfo.price,
    earlyBirdPrice: frontMatter?.earlyBirdPrice || courseInfo.earlyBird,
    registrationLink: frontMatter?.registrationLink || courseInfo.registrationLink,
  }
  const mentors = mentorDetails || []

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

      <section className="flex min-h-screen items-center justify-center p-4">
        <div
          className="flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-gray-700 shadow-2xl md:flex-row"
          style={{ backgroundColor: '#161b22' }}
        >
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
                Data Engineer
              </span>
            </h1>
            <p className="mb-8 text-xl font-bold text-gray-500">Associate (DEA-C01)</p>

            <div className="mb-8 space-y-4 text-gray-300">
              <div className="flex items-start">
                <FaCheckCircle
                  className="mr-3 mt-1 h-5 w-5 flex-shrink-0"
                  style={{ color: '#FF9900' }}
                />
                <span>
                  <b>Chương trình 12 module:</b> Bám sát outline chuẩn (~40 giờ), có lab và{' '}
                  knowledge check.
                </span>
              </div>
              <div className="flex items-start">
                <FaCheckCircle
                  className="mr-3 mt-1 h-5 w-5 flex-shrink-0"
                  style={{ color: '#FF9900' }}
                />
                <span>
                  <b>Thực chiến pipeline:</b> Data lake, Glue, Athena, Redshift, orchestration — làm
                  trên môi trường lab.
                </span>
              </div>
              <div className="flex items-start">
                <FaCheckCircle
                  className="mr-3 mt-1 h-5 w-5 flex-shrink-0"
                  style={{ color: '#FF9900' }}
                />
                <span>
                  <b>Lộ trình chứng chỉ:</b> Ôn tập hướng tới AWS Certified Data Engineer –
                  Associate (DEA-C01).
                </span>
              </div>
            </div>

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

            <a
              href="#registration-form"
              className="text-lg inline-flex items-center rounded-lg px-8 py-4 font-semibold transition-colors hover:opacity-90"
              style={{ backgroundColor: '#FF9900', color: '#000' }}
            >
              <FaRocket className="mr-2" />
              Đăng ký tư vấn — {info.earlyBirdPrice}
            </a>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Tư vấn:</span>{' '}
              <Link
                href="https://m.me/vntechies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline"
              >
                Messenger VNTechies
              </Link>
            </div>
          </div>

          <div className="bg-grid-pattern relative flex w-full items-center justify-center overflow-hidden bg-gray-50 p-6 dark:bg-gray-700 md:w-2/5">
            <div
              className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full opacity-20 blur-3xl dark:opacity-10"
              style={{ backgroundColor: '#FF9900' }}
            ></div>
            <div
              className="absolute -top-20 -left-24 h-72 w-72 rounded-full opacity-20 blur-3xl dark:opacity-10"
              style={{ backgroundColor: '#7c3aed' }}
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

      <section className="py-22 bg-slate-100 dark:bg-gray-900">
        <div className="rounded-2xl p-8 text-white dark:bg-slate-900">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white">
            Tại Sao Chọn DEA-C01 Với <span className="text-purple-600">VNTechies</span>?
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

      <section className="bg-gray-50 py-16 px-4 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
                Thông Tin Khóa Học
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaClock className="mt-1 text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Thời gian học</h3>
                    <p className="text-gray-600 dark:text-gray-300">{info.duration}</p>
                    <p className="text-gray-600 dark:text-gray-300">{info.schedule}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaGlobe className="mt-1 text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Hình thức học</h3>
                    <p className="text-gray-600 dark:text-gray-300">{info.location}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaDollarSign className="mt-1 text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Học phí</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span>{info.price}</span>
                    </p>
                    <div className="text-xs mt-2 text-green-600 dark:text-green-400">
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
                  <FaUsers className="mt-1 text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Khai giảng</h3>
                    <p className="text-gray-600 dark:text-gray-300">{info.startDate}</p>
                  </div>
                </div>
              </div>
            </div>

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

      <section className="bg-white py-16 px-4 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Chương Trình Học Chi Tiết
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-gray-600 dark:text-gray-300">
            Mười hai module theo outline khóa (tổ chức data-driven đến tự động hóa pipeline). Ngoài
            ra có capstone, module ôn chứng chỉ và đánh giá cuối khóa trong lộ trình đầy đủ.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {curriculum.map((module, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-50 p-6 shadow-lg transition hover:shadow-xl dark:bg-gray-700"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-purple-600 px-3 py-1 text-sm font-semibold text-white">
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

      <section className="bg-slate-50 py-20 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Học viên nói gì?
            </h2>
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
                  &quot;{t.comment}&quot;
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

      <section className="bg-gray-100 px-4 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
            Đội ngũ Mentor
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-600 dark:text-gray-300">
            100% là chuyên gia AWS tại các công ty nước ngoài (MNC), giàu kinh nghiệm dự án thực tế
          </p>

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

      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
            Quyền lợi của học viên
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <FaCode className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                LAB &amp; PIPELINE THỰC TẾ
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Thực hành Glue, Athena, S3, EMR, Redshift, Kinesis, Step Functions và các dịch vụ
                liên quan trên môi trường lab AWS
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <FaDollarSign className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                ƯU ĐÃI LỆ PHÍ THI
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hỗ trợ voucher giảm lệ phí thi chứng chỉ AWS sau khóa (theo chính sách từng đợt)
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
                    <strong>VNTechies Community:</strong> Kết nối và xây dựng network chuyên nghiệp
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-yellow-500" />
                  <span>
                    <strong>Cộng đồng Q&amp;A:</strong> Hỏi đáp, tư vấn kiến thức và công việc 24/7
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
                  <span>Alumni&apos;s Support và Office Hour với chuyên gia</span>
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

      <CourseRegistrationForm
        courseTitle="AWS Certified Data Engineer – Associate (DEA-C01)"
        theme="purple"
      />

      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">
            Bắt đầu hành trình Data Engineer trên AWS
          </h2>
          <p className="mb-8 text-xl text-purple-100">
            Đăng ký để nhận lịch khai giảng, học phí ưu đãi và lộ trình phù hợp với mục tiêu DEA-C01
            của bạn.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#registration-form"
              className="text-lg inline-flex items-center rounded-lg bg-white px-8 py-4 font-semibold text-purple-700 transition-colors hover:bg-gray-100"
            >
              <FaRocket className="mr-2" />
              Đăng ký ngay — {info.earlyBirdPrice}
            </a>
          </div>
          <p className="mt-4 text-sm text-purple-100">
            AWS Certified Data Engineer – Associate (DEA-C01) · Lab thực hành · 12 module + capstone
          </p>
        </div>
      </section>

      <OtherCoursesSection otherCourses={otherCourses} />
    </div>
  )
}

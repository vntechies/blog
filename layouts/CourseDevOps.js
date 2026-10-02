import PremiumCourseHero from '@/components/course/PremiumCourseHero'
import React, { useState } from 'react'
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
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import CourseRegistrationForm from '../components/CourseRegistrationForm'
import OtherCoursesSection from '@/components/OtherCoursesSection'
import { MONTHLY_INTAKE, octoberOffer, campaignTuition } from '@/data/courseOffers'
import { OfferBanner, Price, applyOffer, formatVnd, useOffer } from '@/components/course/offer'
import {
  AudienceFit,
  CourseFAQ,
  QuickFacts,
  SalaryEvidence,
  StickyEnrollBar,
  TestimonialGrid,
} from '@/components/course/SalesSections'
import { pickTestimonials } from '@/data/testimonials'

const courseInfo = {
  title: 'ĐỘC QUYỀN: Khoá học DevOps Engineer Bootcamp',
  subtitle: 'Từ Zero đến Hero với DevOps - Lộ trình đào tạo toàn diện',
  image: '/static/images/ogps/courses/devops-ogp.png',
  startDate: 'Khai giảng hàng tháng',
  duration: '8 tuần (16 buổi)',
  schedule: '19:00 - 21:00 - UTC+7',
  location: 'Online qua Google Meet',
  price: '8.000.000 VNĐ',
  earlyBird: '7.200.000 VNĐ (giảm 10%)',
  registrationLink: 'https://m.me/vntechies',
  modules: [
    {
      title: 'Module 1: Foundation & Overview',
      focus: 'DevOps principles, development environment',
      lessons: [
        {
          title: 'Lesson 1: DevOps Overview & Course Structure',
          topics: [
            'What is DevOps: Definition, history, and evolution',
            'DevOps culture: Collaboration, communication, shared responsibility',
            'Core principles: Automation, continuous improvement, fail-fast mentality',
            'DevOps lifecycle: Plan, Code, Build, Test, Release, Deploy, Operate, Monitor',
            'Tools ecosystem overview: Version control, CI/CD, containerization, monitoring',
            'Traditional vs DevOps SDLC, Agile methodologies, collaboration practices',
          ],
        },
      ],
    },
    {
      title: 'Module 2: Linux & Version Control',
      focus: 'Linux, Shell scripting, Git, GitHub',
      lessons: [
        {
          title: 'Lesson 2: Linux Fundamentals',
          topics: [
            'Linux distributions and choosing the right one (Ubuntu server)',
            'File system hierarchy and navigation',
            'User and group management',
            'File and directory permissions',
            'Process management',
            'Environment variables and PATH',
            'Package management (apt)',
            'System information commands',
            'Text manipulation: cat, grep, sed, awk, sort',
          ],
        },
        {
          title: 'Lesson 3: Advanced Linux & Shell Scripting',
          topics: [
            'Shell scripting basics: variables, loops, conditionals',
            'Functions and parameter handling',
            'Error handling and debugging',
            'Cron jobs and task scheduling',
            'System monitoring and log analysis',
            'Network commands and troubleshooting',
          ],
        },
        {
          title: 'Lesson 4: Git & GitHub Mastery',
          topics: [
            'Version control concepts and benefits',
            'Git architecture: working directory, staging, repository',
            'Branching strategies: GitFlow, GitHub Flow, GitLab Flow',
            'Merge vs rebase strategies',
            'Git hooks and automation',
            'Collaborative workflows and best practices',
          ],
        },
      ],
    },
    {
      title: 'Module 3: Containerization & Orchestration',
      focus: 'Docker, Kubernetes, Helm',
      lessons: [
        {
          title: 'Lesson 5: Docker Fundamentals',
          topics: [
            'Containerization vs virtualization',
            'Docker architecture: daemon, client, registry',
            'Images, containers, and layers',
            'Docker Hub and image repositories',
            'Container lifecycle management',
            'Security considerations for containers',
          ],
        },
        {
          title: 'Lesson 6: Docker Advanced & Multi-container Applications',
          topics: [
            'Dockerfile optimization and best practices',
            'Multi-stage builds and image size optimization',
            'Docker Compose for multi-container applications',
            'Container networking: bridge, host, overlay',
            'Volume management and data persistence',
            'Environment configuration and secrets management',
          ],
        },
        {
          title: 'Lesson 7: Kubernetes Fundamentals',
          topics: [
            'Why container orchestration is needed',
            'Kubernetes architecture: master and worker nodes',
            'Core components: API server, etcd, scheduler, kubelet, kube-proxy',
            'Kubernetes objects: Pods, Services, Deployments, ConfigMaps, Secrets',
            'Namespaces and resource management',
            'Kubernetes networking concepts',
          ],
        },
        {
          title: 'Lesson 8: Kubernetes Advanced & Production Deployment',
          topics: [
            'Advanced workload types: StatefulSets, DaemonSets, Jobs, CronJobs',
            'Ingress controllers and traffic management',
            'Horizontal Pod Autoscaler (HPA) and Vertical Pod Autoscaler (VPA)',
            'Resource quotas and limits',
            'Security best practices: RBAC, Pod Security Standards',
            'Helm package manager',
            'Kubernetes in cloud environments (EKS, GKE, AKS)',
          ],
        },
      ],
    },
    {
      title: 'Module 4: Cloud Computing with AWS',
      focus: 'AWS EC2, S3, VPC, IAM, Load Balancers',
      lessons: [
        {
          title: 'Lesson 9: AWS Fundamentals & Core Services',
          topics: [
            'Cloud computing models: IaaS, PaaS, SaaS',
            'AWS global infrastructure and regions',
            'EC2: instance types, AMIs, security groups',
            'S3: buckets, objects, storage classes, lifecycle policies',
            'VPC: subnets, route tables, internet gateways',
            'AWS pricing models and cost optimization',
          ],
        },
        {
          title: 'Lesson 10: AWS Infrastructure & Networking',
          topics: [
            'Advanced VPC concepts: NAT gateways, VPC peering',
            'Security groups vs NACLs',
            'Application and Network Load Balancers',
            'Auto Scaling Groups and launch templates',
            'IAM: users, groups, roles, policies',
            'AWS security best practices',
          ],
        },
      ],
    },
    {
      title: 'Module 5: CI/CD with Jenkins',
      focus: 'Jenkins, Pipeline as Code, Automation',
      lessons: [
        {
          title: 'Lesson 11: Jenkins Fundamentals & Pipeline Basics',
          topics: [
            'Continuous Integration vs Continuous Deployment',
            'Jenkins architecture: master, agents, executors',
            'Job types: freestyle, pipeline, multi-branch',
            'Plugin ecosystem and management',
            'Jenkins security and user management',
            'Integration with version control systems',
          ],
        },
        {
          title: 'Lesson 12: Advanced Jenkins & Integration',
          topics: [
            'Advanced pipeline patterns and best practices',
            'Multi-branch and organization pipelines',
            'Integration with Docker and Kubernetes',
            'AWS integration and deployment',
            'Testing automation and quality gates',
            'Pipeline as Code and shared libraries',
          ],
        },
      ],
    },
    {
      title: 'Module 6: Monitoring & Observability',
      focus: 'Prometheus, Grafana, Loki, Alerting',
      lessons: [
        {
          title: 'Lesson 13: Monitoring with Prometheus & Grafana',
          topics: [
            'Monitoring vs observability concepts',
            'Types of monitoring: infrastructure, application, business',
            'Prometheus architecture and data model',
            'PromQL query language basics',
            'Grafana dashboard creation and management',
            'Alerting strategies and best practices',
          ],
        },
        {
          title: 'Lesson 14: Logging with Loki & Advanced Observability',
          topics: [
            'Centralized logging concepts and benefits',
            'Loki architecture and comparison with Elasticsearch',
            'Log aggregation and parsing strategies',
            'Correlation between metrics, logs, and traces',
            'Observability best practices and patterns',
            'Cost optimization for observability',
          ],
        },
      ],
    },
    {
      title: 'Module 7: Capstone Project',
      focus: 'Integration of all technologies',
      lessons: [
        {
          title: 'Lesson 15: Project Planning & Architecture Design',
          topics: [
            'Capstone project requirements and expectations',
            'System architecture design principles',
            'Technology stack selection and justification',
            'Project planning and milestone definition',
            'DevOps best practices summary',
            'Risk assessment and mitigation strategies',
          ],
        },
        {
          title: 'Lesson 16: Project Implementation & Presentation',
          topics: [
            'Industry trends and emerging technologies',
            'Career paths in DevOps',
            'Certification roadmap and continuing education',
            'Building a professional portfolio',
            'Interview preparation and technical discussions',
            'Networking and community involvement',
          ],
        },
      ],
    },
  ],
}

const stats = [
  { number: '32', label: 'Buổi học' },
  { number: '90%', label: 'Thực hành' },
  { number: '24', label: 'Lab thực tế' },
  { number: '4+', label: 'Mentor kinh nghiệm' },
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
    'Đi từ nền tảng: Linux, shell scripting và Git trước khi lên Docker, Kubernetes, AWS',
    'Ra trường với một capstone project DevOps hoàn chỉnh để đưa vào CV và portfolio',
  ],
  working: [
    'Học online buổi tối 19:00–21:00, 2 buổi/tuần: không ảnh hưởng giờ làm',
    'Hơn 50% thời lượng là lab với công cụ doanh nghiệp đang dùng: Docker, Kubernetes, Jenkins, Prometheus, Grafana',
    'Rủ đồng nghiệp đăng ký nhóm 2+ người để nhận giá Group',
    'Hỗ trợ CV và phỏng vấn cuối khoá cho vị trí DevOps, từ mentor Senior/Lead/Manager tại công ty đa quốc gia',
  ],
}

const itviec = {
  name: 'ITviec, Vietnam IT Salary & Recruitment Market Report 2024–2025',
  url: 'https://itviec.com/report/vietnam-it-salary-and-recruitment-market-2024-2025',
}

const salaryEvidence = [
  {
    value: '43,6 triệu ₫',
    label: 'Lương trung vị/tháng của DevOps / DevSecOps Engineer tại Việt Nam (5 năm kinh nghiệm)',
    source: itviec,
  },
  {
    value: '29,2 triệu ₫',
    label: 'Lương trung vị/tháng của Cloud Engineer tại Việt Nam (3 năm kinh nghiệm)',
    source: itviec,
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
    q: 'Mình chưa biết gì về DevOps, cần chuẩn bị gì?',
    a: 'Không cần kinh nghiệm DevOps. Khoá đi từ Linux, shell scripting và Git (Module 2) trước khi vào Docker, Kubernetes, AWS và CI/CD. Biết dùng dòng lệnh cơ bản sẽ giúp bạn theo nhanh hơn.',
  },
  {
    q: 'Đi làm cả ngày thì học thế nào?',
    a: 'Lớp học online qua Google Meet, 19:00–21:00 (giờ Việt Nam), 2 buổi/tuần trong 8 tuần, tổng 16 buổi.',
  },
  {
    q: 'Học xong mình làm được gì?',
    a: 'Bạn tự dựng được một hệ thống DevOps end-to-end: đóng gói ứng dụng với Docker, triển khai lên Kubernetes và AWS, tự động hoá bằng Jenkins pipeline, giám sát bằng Prometheus, Grafana và Loki. Hai buổi cuối là capstone project để bạn trình bày như một dự án thật.',
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
]

export default function CourseDevOps({ frontMatter, mentorDetails, otherCourses = [] }) {
  // State to track which lessons are expanded
  const [expandedLessons, setExpandedLessons] = useState(new Set())

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

  // Function to toggle lesson expansion
  const toggleLesson = (moduleIndex, lessonIndex) => {
    const lessonKey = `${moduleIndex}-${lessonIndex}`
    const newExpandedLessons = new Set(expandedLessons)

    if (newExpandedLessons.has(lessonKey)) {
      newExpandedLessons.delete(lessonKey)
    } else {
      newExpandedLessons.add(lessonKey)
    }

    setExpandedLessons(newExpandedLessons)
  }

  return (
    <div className="course-page premium-course mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <PremiumCourseHero courseKey="devops" />
      <CourseRegistrationForm courseTitle="VDE-C01" theme="blue" />
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
              <div className="rounded-xl bg-blue-50 p-6 text-center dark:bg-blue-900/20">
                <div className="mb-3 text-3xl font-bold text-blue-600">16</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Buổi học</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Mỗi buổi 2 tiếng</div>
              </div>
              <div className="rounded-xl bg-blue-50 p-6 text-center dark:bg-blue-900/20">
                <div className="mb-3 text-3xl font-bold text-blue-600">32h</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tổng thời lượng
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">8 tuần học</div>
              </div>
              <div className="rounded-xl bg-blue-50 p-6 text-center dark:bg-blue-900/20">
                <div className="mb-3 text-2xl font-bold text-blue-600">02 buổi/tuần</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Lịch học</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">19:00 - 21:00</div>
              </div>
              <div className="rounded-xl bg-blue-50 p-6 text-center dark:bg-blue-900/20">
                <div className="mb-3 text-2xl font-bold text-blue-600">Khai giảng hàng tháng</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Học Online
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Google Meet</div>
              </div>
            </div>
          </div>
        </section>

        <AudienceFit student={audience.student} working={audience.working} />

        <TestimonialGrid
          items={pickTestimonials('devops')}
          title="Cảm nhận về nội dung DevOps của VNTechies"
        />

        {/* Pricing Section */}
        <section id="hoc-phi" className="bg-white py-20 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
                Học phí đầu tư cho tương lai
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Chỉ bằng 1-2 tháng lương Junior, nhưng giá trị mang lại suốt đời
              </p>

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
                  <div className="rounded-xl bg-blue-50 p-4 text-center dark:bg-blue-900/30">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      Sinh viên
                    </div>
                    <Price
                      amount={7500000}
                      offer={octoberOffer}
                      active={offerActive}
                      className="text-2xl font-bold text-blue-700 dark:text-blue-300"
                      compareClassName="text-sm opacity-75"
                    />
                    <div className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                      Hỗ trợ học phí lên tới 500.000đ
                    </div>
                    <Link
                      href="/pricing#financial-aid"
                      className="text-xs font-semibold text-blue-700 hover:underline dark:text-blue-300"
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
              <div className="group relative scale-105 rounded-2xl bg-blue-600 p-8 text-white shadow-2xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-400 px-4 py-2 text-sm font-bold text-white">
                  HẤP DẪN
                </div>

                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold">Early Bird</h3>
                  <p className="opacity-90">Đăng ký sớm - Tiết kiệm 10%</p>
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
                  className="block w-full rounded-xl bg-white py-4 text-center font-bold text-blue-600 transition hover:bg-gray-50"
                >
                  Đăng ký ngay
                </a>
              </div>

              {/* Group Plan */}
              <div className="group relative rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-2xl dark:bg-gray-800">
                <div className="absolute -top-3 right-4 rounded-full bg-blue-500 px-3 py-1 text-xs font-bold text-white">
                  PHỔ BIẾN
                </div>

                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Group
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">2+ người cùng đăng ký</p>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="rounded-xl bg-blue-50 p-6 text-center dark:bg-blue-900/30">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      Người đi làm
                    </div>
                    <Price
                      amount={6800000}
                      compareAt={8000000}
                      offer={octoberOffer}
                      active={offerActive}
                      className="text-3xl font-bold text-blue-700 dark:text-blue-300"
                      compareClassName="text-sm text-gray-500"
                    />
                  </div>
                  <div className="rounded-xl bg-blue-50 p-4 text-center dark:bg-blue-900/20">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      Sinh viên
                    </div>
                    <Price
                      amount={6300000}
                      compareAt={7500000}
                      offer={octoberOffer}
                      active={offerActive}
                      className="text-2xl font-bold text-blue-700 dark:text-blue-300"
                      compareClassName="text-sm text-gray-500"
                    />
                  </div>
                </div>

                <a
                  href="#registration-form"
                  className="block w-full rounded-xl bg-blue-600 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
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
              title="Nghề DevOps đáng giá thế nào? Số liệu thị trường Việt Nam"
              items={salaryEvidence}
              note="Số liệu khảo sát thị trường để tham khảo. Thu nhập thực tế phụ thuộc kinh nghiệm, vị trí và công ty; VNTechies không cam kết mức lương."
            />
          </div>
        </section>

        {/* Course Outline Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 dark:from-gray-900 dark:to-blue-900/20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
                Lộ trình đào tạo chi tiết
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                16 buổi học với nội dung được thiết kế kỹ lưỡng, tập trung vào thực hành
              </p>
            </div>

            <div className="space-y-12">
              {courseInfo.modules.map((module, moduleIndex) => (
                <div
                  key={moduleIndex}
                  className="rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="mb-6">
                    <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{module.focus}</p>
                  </div>

                  <div className="space-y-6">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const lessonKey = `${moduleIndex}-${lessonIndex}`
                      const isExpanded = expandedLessons.has(lessonKey)

                      return (
                        <div
                          key={lessonIndex}
                          className="rounded-xl bg-slate-50 p-6 dark:bg-gray-700/50"
                        >
                          <div
                            className="flex cursor-pointer items-center justify-between"
                            onClick={() => toggleLesson(moduleIndex, lessonIndex)}
                          >
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                              {lesson.title}
                            </h4>
                            <div className="ml-4 flex-shrink-0">
                              {isExpanded ? (
                                <FaChevronUp className="h-5 w-5 text-blue-500 transition-transform" />
                              ) : (
                                <FaChevronDown className="h-5 w-5 text-blue-500 transition-transform" />
                              )}
                            </div>
                          </div>

                          {isExpanded && (
                            <ul className="mt-4 space-y-2 transition-all duration-300 ease-in-out">
                              {lesson.topics.map((topic, topicIndex) => (
                                <li
                                  key={topicIndex}
                                  className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                                >
                                  <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                    })}
                  </div>
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
        {/* Registration Form */}

        <CourseFAQ items={faq} />

        {/* Other Courses Section */}
        <OtherCoursesSection otherCourses={otherCourses} />
      </div>
      <StickyEnrollBar
        code="DevOps VDE-C01"
        intake={MONTHLY_INTAKE}
        fromPrice={tuition.group[1]}
        offer={octoberOffer}
        active={offerActive}
      />
      <div className="h-16" aria-hidden="true" />
    </div>
  )
}

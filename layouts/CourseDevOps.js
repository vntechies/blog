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
import CourseRegistrationForm from '../components/CourseRegistrationForm'
import OtherCoursesSection from '@/components/OtherCoursesSection'

const testimonials = [
  {
    rating: 5,
    comment:
      'Khoá học rất thực tế, mentor tận tâm, mình đã có thể làm việc với các công cụ DevOps ngay sau khoá học!',
    author: 'Nguyễn Văn A - DevOps Engineer',
    image: '/static/images/customers/default.jpg',
  },
  {
    rating: 5,
    comment:
      'Nội dung chi tiết, nhiều lab thực hành, cực kỳ hữu ích cho người mới bắt đầu với DevOps.',
    author: 'Trần Thị B - System Engineer',
    image: '/static/images/customers/default.jpg',
  },
  {
    rating: 5,
    comment:
      'VNTechies đưa ra nhiều kiến thức bổ ích về DevOps, giúp mình hiểu rõ hơn về quy trình CI/CD và các công cụ.',
    author: 'Lê Văn C - Software Developer',
    image: '/static/images/customers/default.jpg',
  },
]

const courseInfo = {
  title: 'ĐỘC QUYỀN: Khoá học trở thành DevOps Engineer từ Zero',
  subtitle: 'Từ Zero đến Hero với DevOps - Lộ trình đào tạo toàn diện',
  image: '/static/images/courses/devopseng01-hero.png',
  startDate: '9/10/2025',
  duration: '16 tuần (32 buổi, 64h)',
  schedule: '19:00 - 21:00 - UTC+7',
  location: 'Online qua Google Meet',
  price: '7.199.000 VNĐ',
  earlyBird: '6.500.000 VNĐ',
  studentPrice: '6.000.000 VNĐ',
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

export default function CourseDevOps({ frontMatter, mentorDetails, otherCourses = [] }) {
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
          <div className="flex flex-col items-center">
            <div className="mb-16 max-w-4xl text-center">
              <h1 className="mb-8 text-center text-[3.5rem] font-black leading-none tracking-tight text-gray-900 dark:text-gray-100 md:text-[4rem] lg:text-[5rem] xl:text-[6rem]">
                <span className="bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent dark:from-gray-100 dark:to-slate-300">
                  DevOps Engineer
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-[2.5rem] text-transparent md:text-[3rem] lg:text-[4rem] xl:text-[5rem]">
                  Cơ Bản Tới Nâng Cao
                </span>
              </h1>
              <p className="text-2xl font-bold text-gray-500">(VDE-C01)</p>
            </div>

            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="relative w-full">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/20 to-slate-600/20 blur-xl"></div>
                <Image
                  src={info.image}
                  alt={info.title}
                  width={650}
                  height={450}
                  className="relative mx-auto rounded-3xl object-cover shadow-2xl"
                />
              </div>

              <div className="flex flex-col space-y-8">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-blue-50 px-6 py-3 text-blue-700 shadow-sm dark:from-blue-900/30 dark:to-blue-800/20 dark:text-blue-400">
                  <FaRocket className="mr-3 h-5 w-5" />
                  <span className="font-semibold">Học để làm - Không chỉ lý thuyết</span>
                </div>
                {/* Special Offer Highlight */}
                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-xl">
                  <div className="text-center">
                    <div className="mb-4">
                      <h3 className="text-lg mb-2 font-bold">🎁 Khoá học độc quyền</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white/10 p-3">
                        <div className="flex items-center gap-3">
                          <FaCertificate className="h-5 w-5 flex-shrink-0 text-yellow-300" />
                          <span className="text-sm font-medium">
                            Mở rộng cơ hội nghề nghiệp trong lĩnh vực DevOps
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-3 rounded-lg bg-white/10 p-3">
                        <FaLaptopCode className="h-5 w-5 flex-shrink-0 text-yellow-300" />
                        <span className="text-sm font-medium">
                          Xây dựng hệ thống DevOps từ cơ bản đến nâng cao
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl">
                  <div className="mb-6">
                    <h3 className="text-md text-center font-bold text-blue-400">
                      Khoá học DevOps được lựa chọn nhiều nhất
                    </h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span className="text-sm leading-relaxed">
                        Hơn 50% thời lượng thực hành lab
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span className="text-sm leading-relaxed">
                        Giảng viên đến từ các công ty đa quốc gia
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span className="text-sm leading-relaxed">
                        Nội dung bài lab thực tế với các công cụ DevOps hiện đại
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span className="text-sm leading-relaxed">
                        Hỗ trợ nghề nghiệp & CV, phỏng vấn cuối khoá học
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span className="text-sm leading-relaxed">
                        Tham gia cộng đồng DevOps 3000+ thành viên
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span className="text-sm leading-relaxed">
                        Giáo án và kho tài liệu độc quyền
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href="#registration-form"
                    className="text-lg inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-bold text-white shadow-xl transition hover:from-blue-700 hover:to-blue-600 hover:shadow-2xl"
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
                      className="text-blue-500 hover:underline"
                    >
                      Messenger VNTechies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="mb-3 text-3xl font-bold text-blue-600">32</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Buổi học</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Mỗi buổi 2 tiếng</div>
            </div>
            <div className="rounded-xl bg-blue-50 p-6 text-center dark:bg-blue-900/20">
              <div className="mb-3 text-3xl font-bold text-blue-600">64h</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Tổng thời lượng
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">16 tuần học</div>
            </div>
            <div className="rounded-xl bg-blue-50 p-6 text-center dark:bg-blue-900/20">
              <div className="mb-3 text-2xl font-bold text-blue-600">02 buổi/tuần</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Lịch học</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">19:00 - 21:00</div>
            </div>
            <div className="rounded-xl bg-blue-50 p-6 text-center dark:bg-blue-900/20">
              <div className="mb-3 text-2xl font-bold text-blue-600">19/08</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Khai giảng</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Online Google Meet</div>
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
                    7.199.000₫
                  </div>
                </div>
                <div className="rounded-xl bg-blue-50 p-4 text-center dark:bg-blue-900/30">
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Sinh viên
                  </div>
                  <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                    6.699.000₫
                  </div>
                  <div className="text-xs mt-2 text-blue-600 dark:text-blue-400">
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
                Ưu đãi hấp dẫn
              </div>

              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold">Early Bird</h3>
                <p className="opacity-90">Đăng ký sớm - Tiết kiệm 10%</p>
              </div>

              <div className="mb-8 space-y-4">
                <div className="rounded-xl bg-white/20 p-6 text-center backdrop-blur">
                  <div className="text-sm font-medium opacity-90">Người đi làm</div>
                  <div className="text-3xl font-bold">6.699.000₫</div>
                  <div className="text-sm line-through opacity-75">7.199.000₫</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur">
                  <div className="text-sm font-medium opacity-90">Sinh viên</div>
                  <div className="text-2xl font-bold">6.499.000₫</div>
                  <div className="text-sm line-through opacity-75">6.699.000₫</div>
                  <div className="text-xs mt-2 opacity-90">Hỗ trợ học phí lên tới 500.000đ</div>
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
              <div className="text-xs absolute -top-3 right-4 rounded-full bg-blue-500 px-3 py-1 font-bold text-white">
                PHỔ BIẾN
              </div>

              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">Group</h3>
                <p className="text-gray-600 dark:text-gray-400">2+ người cùng đăng ký</p>
              </div>

              <div className="mb-8 space-y-4">
                <div className="rounded-xl bg-blue-50 p-6 text-center dark:bg-blue-900/30">
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Người đi làm
                  </div>
                  <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                    6.199.000₫
                  </div>
                  <div className="text-sm text-gray-500 line-through">7.199.000₫</div>
                </div>
                <div className="rounded-xl bg-blue-50 p-4 text-center dark:bg-blue-900/20">
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Sinh viên
                  </div>
                  <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                    5.999.000₫
                  </div>
                  <div className="text-sm text-gray-500 line-through">6.699.000₫</div>
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
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div
                      key={lessonIndex}
                      className="rounded-xl bg-slate-50 p-6 dark:bg-gray-700/50"
                    >
                      <h4 className="text-lg mb-4 font-semibold text-gray-900 dark:text-gray-100">
                        {lesson.title}
                      </h4>
                      <ul className="space-y-2">
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
                    </div>
                  ))}
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
      {/* Registration Form */}
      <CourseRegistrationForm courseTitle="VDE-C01" theme="blue" />

      {/* Other Courses Section */}
      <OtherCoursesSection otherCourses={otherCourses} />
    </div>
  )
}

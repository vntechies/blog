import React, { useState, useEffect } from 'react'
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
  FaDatabase,
  FaStream,
} from 'react-icons/fa'
import Link from 'next/link'
import CourseRegistrationForm from '../components/CourseRegistrationForm'
import OtherCoursesSection from '@/components/OtherCoursesSection'

const testimonials = [
  {
    rating: 5,
    comment:
      'Khoá học rất thực tế, mentor tận tâm, mình đã có thể xây dựng data pipeline ngay sau khoá học!',
    author: 'Hoàng Diệu Linh - Data Engineer',
    image: '/static/images/customers/default.jpg',
  },
  {
    rating: 5,
    comment:
      'Nội dung chi tiết, nhiều lab thực hành với Spark, Kafka, Airflow, cực kỳ hữu ích cho người mới bắt đầu với Data Engineering.',
    author: 'Lưu Bình Công - Data Analyst',
    image: '/static/images/customers/default.jpg',
  },
  {
    rating: 5,
    comment:
      'VNTechies đưa ra nhiều kiến thức bổ ích về Data Engineering, giúp mình hiểu rõ hơn về data lakehouse và streaming pipeline.',
    author: 'Nguyễn Quốc Trường - Software Developer',
    image: '/static/images/customers/default.jpg',
  },
]

const courseInfo = {
  title: 'Data Engineer Bootcamp (VDT-C01) – 8 Tuần (16 Buổi)',
  subtitle: 'Từ Zero đến Hero với Data Engineering - Lộ trình đào tạo toàn diện',
  image: '/static/images/courses/dae-hero.png',
  startDate: '05/05/2026',
  duration: '8 tuần (16 buổi)',
  schedule: '19:00 - 21:30 - UTC+7',
  location: 'Online qua Google Meet',
  price: '10.000.000 VNĐ',
  earlyBird: '9.000.000 VNĐ (giảm 10%)',
  registrationLink: 'https://m.me/vntechies',
  modules: [
    {
      title: 'Phase 1: Engineering Foundations (Buổi 1–5)',
      lessons: [
        {
          title: 'Buổi 1: Linux, Shell & Dev Environment',
          topics: [
            'GNU/Linux core commands, Bash scripting',
            'Makefile, Cron, SSH, tmux',
            'Lab: Cài Ubuntu trên WSL2/EC2; viết CLI crawler thu thập dữ liệu text từ web',
            'Tech stack: Ubuntu, Bash, Makefile, AWS EC2',
          ],
        },
        {
          title: 'Buổi 2: Python cho Data Engineering',
          topics: [
            'Syntax, data structures, error handling, argparse',
            'File I/O, context managers; venv / uv; async vs sync',
            'Lab: Setup môi trường ảo; viết ETL script đơn giản xử lý CSV và JSON',
            'Tech stack: Python, uv virtualenv',
          ],
        },
        {
          title: 'Buổi 3: Database & SQL',
          topics: [
            'Relational vs NoSQL concepts',
            'DDL/DML/DQL/DCL/TCL; indexing, query plan, EXPLAIN',
            'Transactions & ACID',
            'Lab: Tạo schema PostgreSQL, tối ưu câu query, dùng SQLAlchemy ORM',
            'Tech stack: PostgreSQL, SQLAlchemy, DBeaver',
          ],
        },
        {
          title: 'Buổi 4: Web API & FastAPI',
          topics: [
            'REST vs GraphQL; auth (JWT, API key, OAuth2)',
            'Request validation, API healthcheck',
            'Performance testing (Locust)',
            'Lab: Xây dựng API serving dữ liệu với auth; chạy load test Locust',
            'Tech stack: FastAPI, Pydantic, Locust, AWS API Gateway',
          ],
        },
        {
          title: 'Buổi 5: Testing, Docker & Docker Compose',
          topics: [
            'TDD, pytest, unittest',
            'Docker architecture, images, volumes, network',
            'Docker Compose, private registry',
            'Lab: Containerize FastAPI app; viết test suite; deploy local stack với Compose',
            'Tech stack: Docker, Docker Compose, pytest, AWS ECR',
          ],
        },
      ],
    },
    {
      title: 'Phase 2: Data Engineering Core (Buổi 6–12)',
      lessons: [
        {
          title: 'Buổi 6: Ingestion Layer — Kafka & CDC',
          topics: [
            'Source systems (files, OLAP/OLTP, CDC, logs)',
            'Kafka internals (producer/consumer, partitions, offsets, KRaft)',
            'Debezium CDC',
            'Lab: End-to-end CDC pipeline: PostgreSQL → Debezium → Kafka topic',
            'Tech stack: Apache Kafka, Debezium, PostgreSQL, AWS MSK',
          ],
        },
        {
          title: 'Buổi 7: Storage Layer — Lakehouse Architecture',
          topics: [
            'Data Warehouse vs Data Lake vs Data Swamp',
            'Lakehouse pattern; multi-hop (Bronze/Silver/Gold); table formats',
            'Lab: Xây Lakehouse từ đầu: MinIO + Delta Lake + Hive Metastore + Trino',
            'Tech stack: Delta Lake, MinIO, Trino, Hive, AWS S3',
          ],
        },
        {
          title: 'Buổi 8: Batch Processing — Spark (Phần 1)',
          topics: [
            'Spark architecture & execution model',
            'RDD vs DataFrame; Catalyst Optimizer; Project Tungsten; serialization',
            'Lab: Viết Spark batch job xử lý dữ liệu Bronze → Silver (cleansing, dedup, schema enforcement)',
            'Tech stack: Apache Spark, PySpark, AWS EMR, Delta Lake',
          ],
        },
        {
          title: 'Buổi 9: Batch Processing — Spark (Phần 2)',
          topics: [
            'AQE, join strategies (broadcast, shuffle sort merge, bucket join)',
            'Data skew handling; Spark UI phân tích; dynamic allocation; compaction',
            'Lab: Tối ưu pipeline Silver → Gold: xử lý skew, tune memory, compact small files',
            'Tech stack: Apache Spark, PySpark, Spark UI, AWS EMR',
          ],
        },
        {
          title: 'Buổi 10: Stream Processing — Flink',
          topics: [
            'Streaming concepts & notions of time',
            'Flink DataStream API, Table API, Flink SQL',
            'Window strategies, watermarks, late data; state & fault tolerance; backpressure',
            'Lab: Real-time pipeline: Kafka → Flink stateful aggregation → sink vào Delta Lake',
            'Tech stack: Apache Flink, Flink SQL, Kafka, AWS Kinesis',
          ],
        },
        {
          title: 'Buổi 11: Consumption Layer — DWH, OLAP & Feature Store',
          topics: [
            'Dimensional modeling; SCD Type 1/2/3',
            'OLAP engines (ClickHouse, Apache Pinot); materialized views',
            'Feature Store concepts & ML integration',
            'Lab: Xây dimensional model, tạo materialized views; implement feature pipeline với Feast',
            'Tech stack: ClickHouse, Apache Pinot, Feast, dbt, AWS Redshift',
          ],
        },
        {
          title: 'Buổi 12: Orchestration, Lineage & Data Quality',
          topics: [
            'Airflow architecture, operators, XCom, backfill, idempotency',
            'Dynamic DAGs; task concurrency',
            'Data validation (Great Expectations, Soda); circuit breaker; data contracts',
            'Lineage với DataHub',
            'Lab: Deploy Airflow trên Docker; viết multi-step DAG với data quality checks và lineage tracking',
            'Tech stack: Apache Airflow, Great Expectations, DataHub, AWS MWAA',
          ],
        },
      ],
    },
    {
      title: 'Phase 3: Advanced & Production (Buổi 13–16)',
      lessons: [
        {
          title: 'Buổi 13: Analytics Engineering & dbt',
          topics: [
            'Analytics Engineering role',
            'dbt project structure, models, tests, docs',
            'Incremental models; snapshots (SCD); deployment; CI integration',
            'Lab: Build dbt project trên top của Gold layer; viết tests và tạo documentation site',
            'Tech stack: dbt, DuckDB, BigQuery, AWS Redshift, GitHub Actions',
          ],
        },
        {
          title: 'Buổi 14: Infrastructure as Code & DataOps',
          topics: [
            'Terraform cho data infra (S3, MSK, EMR, Redshift, MWAA)',
            'CI/CD với GitHub Actions; Docker image build pipeline',
            'Secrets management; monitoring & alerting (Prometheus, Grafana)',
            'Lab: Provision toàn bộ data stack trên AWS bằng Terraform; setup CI/CD pipeline tự động test và deploy',
            'Tech stack: Terraform, AWS, GitHub Actions, Prometheus, Grafana',
          ],
        },
        {
          title: 'Buổi 15: End-to-End Capstone Project (Phần 1)',
          topics: [
            'Thiết kế kiến trúc hệ thống dữ liệu end-to-end',
            'Requirements analysis; infra provisioning',
            'Ingestion setup (Kafka + CDC); Lakehouse setup (S3 + Delta Lake)',
            'Lab: Project thực tế (e-commerce / fintech dataset) — ingestion layer + storage layer hoàn chỉnh',
            'Tech stack: AWS, Kafka, Delta Lake, Terraform',
          ],
        },
        {
          title: 'Buổi 16: End-to-End Capstone Project (Phần 2) + Demo Day',
          topics: [
            'Transformation pipelines (Spark batch + Flink stream)',
            'Consumption layer (ClickHouse + dbt); dashboard; data quality; lineage',
            'Performance tuning; demo & peer review',
            'Lab: Hoàn thiện toàn bộ pipeline, present architecture, Q&A và career roadmap',
            'Tech stack: Spark, Flink, dbt, ClickHouse, DataHub, Power BI / Superset, Airflow',
          ],
        },
      ],
    },
  ],
}

const stats = [
  { number: '16', label: 'Buổi học' },
  { number: '3', label: 'Phase đào tạo' },
  { number: '20+', label: 'Công nghệ thực tế' },
  { number: '7+', label: 'Mentor kinh nghiệm' },
]

export default function CourseData({ frontMatter, mentorDetails, otherCourses = [] }) {
  // State to track which lessons are expanded
  const [expandedLessons, setExpandedLessons] = useState(new Set())
  const [showStickyButton, setShowStickyButton] = useState(false)

  // Sticky CTA button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 800)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const info = {
    title: frontMatter?.title || courseInfo.title,
    subtitle: frontMatter?.subtitle || courseInfo.subtitle,
    image: frontMatter?.images?.[0] || courseInfo.image,
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

  // Expand/Collapse all lessons
  const toggleAllLessons = () => {
    if (expandedLessons.size === 0) {
      const allLessons = new Set()
      courseInfo.modules.forEach((module, mIdx) => {
        module.lessons.forEach((_, lIdx) => {
          allLessons.add(`${mIdx}-${lIdx}`)
        })
      })
      setExpandedLessons(allLessons)
    } else {
      setExpandedLessons(new Set())
    }
  }

  // Smooth scroll handler
  const smoothScrollTo = (e, targetId) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Calculate total lessons
  const totalLessons = courseInfo.modules.reduce((acc, m) => acc + m.lessons.length, 0)

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-slate-50 px-4 py-16 dark:from-gray-900 dark:to-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center">
            <div className="mb-10 max-w-4xl text-center">
              <h1 className="md:text-6xl mb-4 text-center text-4xl font-black leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                <span className="bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent dark:from-gray-100 dark:to-slate-300">
                  Data Engineer{' '}
                </span>
                <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                  Bootcamp
                </span>
              </h1>
              <p className="text-lg font-bold text-gray-500 sm:text-xl">(VDT-C01)</p>
            </div>

            <div className="grid w-full items-start gap-10 lg:grid-cols-5">
              {/* Left: Data Engineering Visual - 2 cols */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-900 p-6 shadow-xl">
                  <div className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-purple-400">
                    Tech Stack Coverage
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        label: 'Foundations',
                        items: 'Linux · Python · SQL · FastAPI · Docker',
                        color: 'from-purple-500 to-purple-600',
                      },
                      {
                        label: 'Ingestion',
                        items: 'Kafka · Debezium · CDC',
                        color: 'from-blue-500 to-blue-600',
                      },
                      {
                        label: 'Storage',
                        items: 'MinIO · Delta Lake · Trino · Hive',
                        color: 'from-cyan-500 to-cyan-600',
                      },
                      {
                        label: 'Processing',
                        items: 'Spark · Flink · PySpark',
                        color: 'from-green-500 to-green-600',
                      },
                      {
                        label: 'Serving',
                        items: 'ClickHouse · Pinot · Feast · dbt',
                        color: 'from-yellow-500 to-orange-500',
                      },
                      {
                        label: 'Orchestration',
                        items: 'Airflow · DataHub · Great Expectations',
                        color: 'from-orange-500 to-red-500',
                      },
                      {
                        label: 'DevOps',
                        items: 'Terraform · GitHub Actions · Grafana',
                        color: 'from-red-500 to-pink-500',
                      },
                    ].map((layer, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div
                          className={`h-2 w-2 rounded-full bg-gradient-to-r ${layer.color}`}
                        ></div>
                        <div className="flex-1">
                          <div className="text-xs font-bold text-gray-300">{layer.label}</div>
                          <div className="text-xs text-gray-400">{layer.items}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-lg bg-white/5 p-3 text-center">
                    <div className="text-2xl font-black text-white">20+</div>
                    <div className="text-xs text-gray-400">công nghệ thực tế trong 16 buổi</div>
                  </div>
                </div>
              </div>

              {/* Right: Info cards - 3 cols */}
              <div className="flex flex-col space-y-5 lg:col-span-3">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-purple-50 px-5 py-2.5 text-purple-700 shadow-sm dark:from-purple-900/30 dark:to-purple-800/20 dark:text-purple-400">
                  <FaRocket className="mr-2 h-4 w-4" />
                  <span className="text-sm font-semibold">Học để làm - Không chỉ lý thuyết</span>
                </div>

                {/* Special Offer Highlight */}
                <div className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-5 text-white shadow-xl">
                  <h3 className="mb-3 text-center text-base font-bold">
                    🎁 3 Phase, 16 buổi từ Zero đến Production
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2">
                      <FaDatabase className="h-4 w-4 flex-shrink-0 text-yellow-300" />
                      <span className="text-sm">
                        Từ Linux, Python, SQL, FastAPI đến Spark, Flink, Kafka, dbt, Terraform
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2">
                      <FaStream className="h-4 w-4 flex-shrink-0 text-yellow-300" />
                      <span className="text-sm">
                        Capstone Project end-to-end với CDC, Lakehouse, Streaming & DataOps
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white shadow-xl">
                  <h3 className="mb-4 text-center text-sm font-bold text-purple-400">
                    Xây dựng hệ thống Data Engineering từ cơ bản đến nâng cao
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-500" />
                      <span className="text-xs leading-relaxed">
                        Phase 1: Nền tảng Engineering — Linux, Python, SQL, FastAPI, Docker
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-500" />
                      <span className="text-xs leading-relaxed">
                        Phase 2: Data Engineering Core — Kafka, Lakehouse, Spark, Flink, Airflow
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-500" />
                      <span className="text-xs leading-relaxed">
                        Phase 3: Advanced — dbt, Terraform, CI/CD, Capstone Project
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-500" />
                      <span className="text-xs leading-relaxed">
                        20+ công nghệ thực tế: Spark, Flink, Kafka, ClickHouse, dbt, Terraform
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-500" />
                      <span className="text-xs leading-relaxed">
                        Giảng viên Senior/Lead từ các công ty đa quốc gia
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-500" />
                      <span className="text-xs leading-relaxed">
                        Định hướng lộ trình phát triển nghề nghiệp cuối khoá
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#registration-form"
                    onClick={(e) => smoothScrollTo(e, '#registration-form')}
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 px-7 py-3.5 text-base font-bold text-white shadow-xl transition hover:scale-105 hover:from-purple-700 hover:to-indigo-600 hover:shadow-2xl"
                  >
                    Đăng ký ngay
                    <FaRocket className="ml-2 h-4 w-4" />
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
            <div className="rounded-xl bg-purple-50 p-6 text-center dark:bg-purple-900/20">
              <div className="mb-3 text-3xl font-bold text-purple-600">16</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Buổi học</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Mỗi buổi 2.5 tiếng</div>
            </div>
            <div className="rounded-xl bg-purple-50 p-6 text-center dark:bg-purple-900/20">
              <div className="mb-3 text-3xl font-bold text-purple-600">40h</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Tổng thời lượng
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">8 tuần học</div>
            </div>
            <div className="rounded-xl bg-purple-50 p-6 text-center dark:bg-purple-900/20">
              <div className="mb-3 text-2xl font-bold text-purple-600">02 buổi/tuần</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Lịch học</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">19:00 - 21:30</div>
            </div>
            <div className="rounded-xl bg-purple-50 p-6 text-center dark:bg-purple-900/20">
              <div className="mb-3 text-2xl font-bold text-purple-600">05/05/26</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Khai giảng</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Online Google Meet</div>
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
                <div className="mb-2 text-5xl font-bold text-purple-500">{stat.number}</div>
                <div className="text-base font-medium text-gray-300">{stat.label}</div>
              </div>
            ))}
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
                <div className="rounded-xl bg-purple-50 p-4 text-center dark:bg-purple-900/30">
                  <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    Sinh viên
                  </div>
                  <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                    7.500.000₫
                  </div>
                  <div className="text-xs mt-2 text-purple-600 dark:text-purple-400">
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
                href="#registration-form"
                onClick={(e) => smoothScrollTo(e, '#registration-form')}
                className="block w-full rounded-xl bg-slate-900 py-4 text-center font-semibold text-white transition hover:scale-105 hover:bg-slate-800"
              >
                Đăng ký ngay
              </a>
            </div>

            {/* Early Bird Plan - Featured */}
            <div className="group relative scale-105 rounded-2xl bg-purple-600 p-8 text-white shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-400 px-4 py-2 text-sm font-bold text-white">
                HẤP DẪN
              </div>

              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold">Early Bird</h3>
                <p className="opacity-90">Đăng ký sớm - Tiết kiệm 10%</p>
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
                onClick={(e) => smoothScrollTo(e, '#registration-form')}
                className="block w-full rounded-xl bg-white py-4 text-center font-bold text-purple-600 transition hover:scale-105 hover:bg-gray-50"
              >
                Đăng ký ngay
              </a>
            </div>

            {/* Group Plan */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-2xl dark:bg-gray-800">
              <div className="text-xs absolute -top-3 right-4 rounded-full bg-purple-500 px-3 py-1 font-bold text-white">
                PHỔ BIẾN
              </div>

              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">Group</h3>
                <p className="text-gray-600 dark:text-gray-400">2+ người cùng đăng ký</p>
              </div>

              <div className="mb-8 space-y-4">
                <div className="rounded-xl bg-purple-50 p-6 text-center dark:bg-purple-900/30">
                  <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    Người đi làm
                  </div>
                  <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                    6.800.000₫
                  </div>
                  <div className="text-sm text-gray-500 line-through">8.000.000₫</div>
                </div>
                <div className="rounded-xl bg-purple-50 p-4 text-center dark:bg-purple-900/20">
                  <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    Sinh viên
                  </div>
                  <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                    6.300.000₫
                  </div>
                  <div className="text-sm text-gray-500 line-through">7.500.000₫</div>
                </div>
              </div>

              <a
                href="#registration-form"
                onClick={(e) => smoothScrollTo(e, '#registration-form')}
                className="block w-full rounded-xl bg-purple-600 py-4 text-center font-semibold text-white transition hover:scale-105 hover:bg-purple-700"
              >
                Đăng ký ngay
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Course Outline Section */}
      <section className="bg-gradient-to-br from-slate-50 to-purple-50 py-20 dark:from-gray-900 dark:to-purple-900/20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Lộ trình đào tạo chi tiết
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              16 buổi học với nội dung được thiết kế kỹ lưỡng, tập trung vào thực hành
            </p>
            {expandedLessons.size > 0 && (
              <p className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                Đang xem {expandedLessons.size} / {totalLessons} bài học
              </p>
            )}
          </div>

          <div className="mb-8 flex justify-end">
            <button
              onClick={toggleAllLessons}
              className="rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-purple-700 hover:shadow-lg"
            >
              {expandedLessons.size === 0 ? '📖 Mở tất cả' : '📕 Thu gọn tất cả'}
            </button>
          </div>

          <div className="space-y-12">
            {courseInfo.modules.map((module, moduleIndex) => (
              <div
                key={moduleIndex}
                className="rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl dark:bg-gray-800"
              >
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold text-purple-600 dark:text-purple-400">
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
                        className={`rounded-xl p-6 transition-all duration-300 ${
                          isExpanded
                            ? 'bg-purple-50 shadow-md dark:bg-purple-900/30'
                            : 'bg-slate-50 hover:bg-slate-100 dark:bg-gray-700/50 dark:hover:bg-gray-700'
                        }`}
                      >
                        <button
                          className="flex w-full cursor-pointer items-center justify-between text-left"
                          onClick={() => toggleLesson(moduleIndex, lessonIndex)}
                          aria-expanded={isExpanded}
                          aria-label={`${isExpanded ? 'Thu gọn' : 'Mở rộng'} ${lesson.title}`}
                        >
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            {lesson.title}
                          </h4>
                          <div className="ml-4 flex-shrink-0">
                            {isExpanded ? (
                              <FaChevronUp className="h-5 w-5 text-purple-500 transition-transform" />
                            ) : (
                              <FaChevronDown className="h-5 w-5 text-purple-500 transition-transform" />
                            )}
                          </div>
                        </button>

                        {isExpanded && (
                          <ul className="mt-4 space-y-2 transition-all duration-300 ease-in-out">
                            {lesson.topics.map((topic, topicIndex) => (
                              <li
                                key={topicIndex}
                                className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                              >
                                <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-purple-500" />
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
            100% là chuyên gia Data Engineering tại các công ty nước ngoài (MNC), giàu kinh nghiệm
            dự án thực tế
          </p>

          {/* Instructor Stats */}
          <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">9+</div>
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
              <div className="mb-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Năm kinh nghiệm Data Engineering
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600 dark:text-orange-400">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Mentor có kinh nghiệm thực tế với Big Data
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {mentors.map((m, idx) => {
              const slug = m.slug || (m.name ? m.name.toLowerCase().replace(/\s+/g, '-') : '')
              return (
                <Link key={idx} href={`/authors/${slug}`} className="block" passHref legacyBehavior>
                  <a className="flex h-full flex-col items-center rounded-xl bg-gray-50 p-6 shadow transition hover:scale-105 hover:bg-purple-50 hover:shadow-xl dark:bg-gray-800 dark:hover:bg-purple-700">
                    <div className="mb-4 flex-shrink-0">
                      <Image
                        src={m.avatar || m.avatar_url || '/data/authors/default.jpg'}
                        alt={m.name}
                        width={120}
                        height={120}
                        className="rounded-full object-cover shadow-lg"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start text-center">
                      {m.currentPosition && (
                        <div className="mb-1 text-center text-sm font-semibold text-purple-700 dark:text-purple-300">
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
      <CourseRegistrationForm courseTitle="VDT-C01" theme="purple" />

      {/* Testimonials */}
      <section className="bg-slate-50 py-20 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Học viên nói gì?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              90% học viên có thể xây dựng data pipeline ngay sau khóa học
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white p-6 shadow-lg transition hover:scale-105 hover:shadow-xl dark:bg-gray-900"
              >
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(t.rating)].map((_, idx) => (
                    <FaStar key={idx} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-4 text-gray-700 dark:text-gray-300">
                  "{t.comment}"
                </blockquote>
                <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {t.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Courses Section */}
      <OtherCoursesSection otherCourses={otherCourses} />

      {/* Sticky CTA Button */}
      {showStickyButton && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <a
            href="#registration-form"
            onClick={(e) => smoothScrollTo(e, '#registration-form')}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 px-6 py-4 font-bold text-white shadow-2xl transition hover:scale-110 hover:shadow-purple-500/50"
          >
            <FaRocket className="h-5 w-5" />
            <span className="hidden sm:inline">Đăng ký ngay</span>
          </a>
        </div>
      )}
    </div>
  )
}

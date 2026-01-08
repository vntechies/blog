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
  title: 'Data Engineer Bootcamp – 6 Tuần (18 Buổi)',
  subtitle: 'Từ Zero đến Hero với Data Engineering - Lộ trình đào tạo toàn diện',
  image: '/static/images/courses/dae.png',
  startDate: '15/02/2025',
  duration: '6 tuần (18 buổi)',
  schedule: 'Tối Thứ 3 & Thứ 5 (19:00 - 21:00)',
  location: 'Online qua Google Meet',
  price: '8.000.000 VNĐ',
  earlyBird: '7.200.000 VNĐ (giảm 10%)',
  registrationLink: 'https://m.me/vntechies',
  modules: [
    {
      title: 'Week 1: Big Data Foundations + SQL Foundations',
      lessons: [
        {
          title: 'Buổi 1: Big Data Engineer Overview',
          topics: [
            'Vai trò Data Engineer trong hệ Big Data',
            'OLTP vs OLAP, ACID',
            'Kiến trúc DW, Data Lake, Lakehouse',
            'Lambda vs Kappa',
            'Lab: Docker Compose cài PostgreSQL',
            'Lab: Load sample dataset (retail / ecommerce)',
          ],
        },
        {
          title: 'Buổi 2: SQL từ Cơ Bản → Nâng Cao',
          topics: [
            'SQL joins, subquery, CTE',
            'Window functions',
            'Index, partitioning',
            'Lab: 25 bài SQL challenge',
            'Lab: Optimization query',
          ],
        },
      ],
    },
    {
      title: 'Week 2: Python, ETL, DW, UNIX',
      lessons: [
        {
          title: 'Buổi 3: Data Modeling',
          topics: [
            'Star Schema, Snowflake',
            'SCD (1,2,6)',
            'Data Vault 2.0 overview',
            'Lab: Model 1 data mart',
            'Lab: Thiết kế bảng dimension + fact + SCD2 bằng SQL',
          ],
        },
        {
          title: 'Buổi 4: Ôn SQL + Mini case study Data Mart',
          topics: [
            'Review SQL nâng cao (window, CTE, performance)',
            'Best practices viết SQL trong ETL',
            'Lab: Hoàn thiện Data Mart tuần 1 & Bài tập SQL business case thực tế',
          ],
        },
      ],
    },
    {
      title: 'Week 3: Python for Data Engineering + Shell',
      lessons: [
        {
          title: 'Buổi 5: Python for Data Engineering',
          topics: [
            'Pandas, typing, error handling',
            'Lab: Build mini ETL pipeline: CSV → clean → load PostgreSQL',
            'Lab: Unit test bằng pytest',
          ],
        },
        {
          title: 'Buổi 6: Unix/Linux & Shell Scripting',
          topics: [
            'File system',
            'Bash commands',
            'Cron jobs',
            'Lab: Viết shell script tự động ingest raw data',
            'Lab: Cronjob schedule ETL',
          ]
        },
      ],
    },
    {
      title: 'Week 4: ETL/ELT + Data Warehouse',
      lessons: [
        {
          title: 'Buổi 7:  ETL/ELT & Data Warehouse',
          topics: [
            'Kimball vs Inmon',
            'ETL vs ELT',
            'Slowly Changing Dimensions',
            'Lab: Docker Compose: PostgreSQL + Metabase',
            'Lab: Build dashboard đầu tiên',
          ],
        },
        {
          title: 'Buổi 8: Mini Project ETL + Dashboarding',
          topics: [
            'Review ETL best practices',
            'Data modeling for dashboard (materialized tables)',
            'Lab: ETL pipeline CSV → PostgreSQL → Data mart',
            'Lab: Dashboard Metabase nâng cao',
            'Recap',
          ],
        },
      ],
    },
    {
      title: 'Week 5:  Data Lakehouse Architecture + Spark Batch',
      lessons: [
        {
          title: 'Buổi 9: Data Lakehouse Architecture',
          topics: [
            'Object Storage',
            'Delta Lake vs Iceberg vs Hudi',
            'Trino vs Presto vs Hive',
            'Lab: Deploy MinIO + Trino + Hive Metastore',
            'Lab: Tạo 3 zones: bronze / silver / gold',
          ],
        },
        {
          title: 'Buổi 10: Spark Batch Processing',
          topics: [
            'Spark RDD → DataFrame API',
            'Catalyst optimizer',
            'Tung độ reading/writing Lakehouse tables',
            'Lab: Spark batch job: raw → clean → silver',
            'Lab: Benchmark Parquet vs CSV',
          ],
        },
      ],
    },
    {
      title: 'Week 6: Table Formats + Kafka Fundamentals',
      lessons: [
        {
          title: 'Buổi 11: Table Format & Optimization',
          topics: [
            'Partitioning',
            'Compaction, Z-order',
            'ACID transaction',
            'Lab: Delta/Iceberg table: partition + vacuum',
            'Lab: Optimize large dataset',
          ],
        },
        {
          title: 'Buổi 12: Kafka Fundamentals',
          topics: [
            'Broker, Topic, Consumer Group',
            'Offset, partitions',
            'Lab: Deploy Kafka + Zookeeper với Docker',
            'Lab: Producer & Consumer CLI + Python',
          ],
        },
      ],
    },
    {
      title: 'Week 7: Table Formats + Kafka Fundamentals',
      lessons: [
        {
          title: 'Buổi 13: CDC with Debezium',
          topics: [
            'Change Data Capture',
            'Debezium: binlog, WAL',
            'Lab: CDC PostgreSQL → Kafka',
            'Lab: Stream change events to bronze layer',
          ],
        },
        {
          title: 'Buổi 14: Streaming (Flink/Spark Structured Streaming)',
          topics: [
            'Stateless vs Stateful',
            'Time semantics, watermark',
            'Lab: Build real-time streaming pipeline Kafka → Flink → MinIO',
            'Lab: Realtime dashboard bằng Superset',
          ],
        },
      ],
    },
    {
      title: 'Week 8: Airflow + Data Quality + Governance',
      lessons: [
        {
          title: 'Buổi 15: Airflow Orchestration',
          topics: [
            'DAG, Operators, Sensors',
            'Airflow vs Cron',
            'Lab: Deploy Airflow with Docker',
            'Lab: Build DAG: ingest → clean → load → validate',
          ],
        },
        {
          title: 'Buổi 16: Data Quality (Great Expectations + Deequ)',
          topics: [
            'Data Quality (GE, Deequ) &  Demo GE',
            'Metadata & Data Governance (DataHub) & Demo DataHub '
          ],
        },
      ],
    },
    {
      title: 'Week 9: Feature Store + Cloud + Capstone',
      lessons: [
        {
          title: 'Buổi 17:  Feature Store Fundamentals + Cloud Integration',
          topics: [
            'Feature Store lý thuyết & Feast demo',
            'S3, Glue, Athena, EMR mapping',
            'Lab: Deploy Feast + Redis',
            'Lab: Move Bronze/Silver/Gold → S3 / Query Athena',
          ],
        },
        {
          title: 'Buổi 18: Capstone Project',
          topics: [
            'End-to-end architecture review',
            'Build final pipeline',
            'Presentation & Feedback'
          ],
        },
      ],
    },
  ],
}

const stats = [
  { number: '18', label: 'Buổi học' },
  { number: '60%', label: 'Thực hành' },
  { number: '15+', label: 'Lab thực tế' },
  { number: '6+', label: 'Mentor kinh nghiệm' },
]

export default function CourseData({ frontMatter, mentorDetails, otherCourses = [] }) {
  // State to track which lessons are expanded
  const [expandedLessons, setExpandedLessons] = useState(new Set())

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

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-slate-50 px-4 py-24 dark:from-gray-900 dark:to-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center">
            <div className="mb-16 max-w-4xl text-center">
              <h1 className="mb-8 text-center text-[3.5rem] font-black leading-none tracking-tight text-gray-900 dark:text-gray-100 md:text-[4rem] lg:text-[5rem] xl:text-[6rem]">
                <span className="bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent dark:from-gray-100 dark:to-slate-300">
                  Data Engineer
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-[2.5rem] text-transparent md:text-[3rem] lg:text-[4rem] xl:text-[5rem]">
                  Bootcamp 6 Tuần
                </span>
              </h1>
              <p className="text-2xl font-bold text-gray-500">(18 Buổi)</p>
            </div>

            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="relative w-full">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-500/20 to-indigo-600/20 blur-xl"></div>
                <Image
                  src={info.image}
                  alt={info.title}
                  width={650}
                  height={450}
                  className="relative mx-auto rounded-3xl object-cover shadow-2xl"
                />
              </div>

              <div className="flex flex-col space-y-8">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-purple-50 px-6 py-3 text-purple-700 shadow-sm dark:from-purple-900/30 dark:to-purple-800/20 dark:text-purple-400">
                  <FaRocket className="mr-3 h-5 w-5" />
                  <span className="font-semibold">Học để làm - Không chỉ lý thuyết</span>
                </div>
                {/* Special Offer Highlight */}
                <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white shadow-xl">
                  <div className="text-center">
                    <div className="mb-4">
                      <h3 className="text-lg mb-2 font-bold">
                        🎁 Khoá học độc quyền với hơn 50% THỜI LƯỢNG LAB
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white/10 p-3">
                        <div className="flex items-center gap-3">
                          <FaDatabase className="h-5 w-5 flex-shrink-0 text-yellow-300" />
                          <span className="text-sm font-medium">
                            Mở rộng cơ hội nghề nghiệp trong lĩnh vực Data Engineering
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-3 rounded-lg bg-white/10 p-3">
                        <FaStream className="h-5 w-5 flex-shrink-0 text-yellow-300" />
                        <span className="text-sm font-medium">LAB LAB LAB VÀ LAB!!!</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl">
                  <div className="mb-6">
                    <h3 className="text-md text-center font-bold text-purple-400">
                      Xây dựng hệ thống Data Engineering từ cơ bản đến nâng cao
                    </h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-purple-500" />
                      <span className="text-sm leading-relaxed">
                        Hơn 60% thời lượng thực hành lab
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-purple-500" />
                      <span className="text-sm leading-relaxed">
                        Giảng viên đến từ các công ty đa quốc gia
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-purple-500" />
                      <span className="text-sm leading-relaxed">
                        Nội dung bài lab thực tế với Spark, Kafka, Airflow, Trino
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-purple-500" />
                      <span className="text-sm leading-relaxed">
                        Hỗ trợ nghề nghiệp & CV, phỏng vấn cuối khoá học
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-purple-500" />
                      <span className="text-sm leading-relaxed">
                        Tham gia cộng đồng Data Engineering 3000+ thành viên
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-purple-500" />
                      <span className="text-sm leading-relaxed">
                        Giáo án và kho tài liệu độc quyền
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href="#registration-form"
                    className="text-lg inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 px-8 py-4 font-bold text-white shadow-xl transition hover:from-purple-700 hover:to-indigo-600 hover:shadow-2xl"
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
              <div className="mb-3 text-3xl font-bold text-purple-600">18</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Buổi học</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Mỗi buổi 2 tiếng</div>
            </div>
            <div className="rounded-xl bg-purple-50 p-6 text-center dark:bg-purple-900/20">
              <div className="mb-3 text-3xl font-bold text-purple-600">36h</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Tổng thời lượng
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">9 tuần học</div>
            </div>
            <div className="rounded-xl bg-purple-50 p-6 text-center dark:bg-purple-900/20">
              <div className="mb-3 text-2xl font-bold text-purple-600">02 buổi/tuần</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Lịch học</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">19:00 - 21:00</div>
            </div>
            <div className="rounded-xl bg-purple-50 p-6 text-center dark:bg-purple-900/20">
              <div className="mb-3 text-2xl font-bold text-purple-600">02/03/26</div>
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
                className="block w-full rounded-xl bg-slate-900 py-4 text-center font-semibold text-white transition hover:bg-slate-800"
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
                  <div className="text-sm line-through opacity-75">7.200.000₫</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur">
                  <div className="text-sm font-medium opacity-90">Sinh viên</div>
                  <div className="text-2xl font-bold">6.700.000₫</div>
                  <div className="text-sm line-through opacity-75">6.700.000₫</div>
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
                className="block w-full rounded-xl bg-white py-4 text-center font-bold text-purple-600 transition hover:bg-gray-50"
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
                  <div className="text-sm text-gray-500 line-through">6.800.000₫</div>
                </div>
                <div className="rounded-xl bg-purple-50 p-4 text-center dark:bg-purple-900/20">
                  <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    Sinh viên
                  </div>
                  <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                    6.300.000₫
                  </div>
                  <div className="text-sm text-gray-500 line-through">6.300.000₫</div>
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
        </div>
      </section>

      {/* Course Outline Section */}
      <section className="bg-gradient-to-br from-slate-50 to-purple-50 py-20 dark:from-gray-900 dark:to-purple-900/20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Lộ trình đào tạo chi tiết
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              18 buổi học với nội dung được thiết kế kỹ lưỡng, tập trung vào thực hành
            </p>
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
                              <FaChevronUp className="h-5 w-5 text-purple-500 transition-transform" />
                            ) : (
                              <FaChevronDown className="h-5 w-5 text-purple-500 transition-transform" />
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
              <div className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">4+</div>
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
              <div className="mb-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400">8+</div>
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
                  <a className="flex h-full flex-col items-center justify-between rounded-xl bg-gray-50 p-6 shadow transition hover:bg-purple-50 dark:bg-gray-800 dark:hover:bg-purple-700">
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
      <CourseRegistrationForm courseTitle="Data Engineer Bootcamp" theme="purple" />

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

      {/* Other Courses Section */}
      <OtherCoursesSection otherCourses={otherCourses} />
    </div>
  )
}

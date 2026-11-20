import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaUsers,
  FaGraduationCap,
  FaUserTie,
  FaDollarSign,
} from 'react-icons/fa'
import PremiumCourseHero from '@/components/course/PremiumCourseHero'
import CourseRegistrationForm from '@/components/CourseRegistrationForm'
import OtherCoursesSection from '@/components/OtherCoursesSection'
import { Price } from '@/components/course/offer'
import {
  AudienceFit,
  CourseFAQ,
  CourseFactsStrip,
  StickyEnrollBar,
  TestimonialGrid,
} from '@/components/course/SalesSections'
import { pickTestimonials } from '@/data/testimonials'
import { genaiBootcamp, genaiIntake, genaiKey, genaiTuition } from '@/data/genaiBootcamp'

// VGE-C01 landing page. One layout per course family; this one renders the
// genaiBootcamp config so facts, prices and syllabus stay in one place.
export default function CourseGenAI({ frontMatter, mentorDetails, otherCourses = [] }) {
  const [expandedLessons, setExpandedLessons] = useState(new Set())
  const info = genaiBootcamp
  const [working, student] = genaiTuition.standard
  const [earlyWorking, earlyStudent] = genaiTuition.earlyBird
  const [groupWorking, groupStudent] = genaiTuition.group

  const toggleLesson = (moduleIndex, lessonIndex) => {
    const lessonKey = `${moduleIndex}-${lessonIndex}`
    const next = new Set(expandedLessons)
    if (next.has(lessonKey)) next.delete(lessonKey)
    else next.add(lessonKey)
    setExpandedLessons(next)
  }

  const toggleAllLessons = () => {
    if (expandedLessons.size > 0) {
      setExpandedLessons(new Set())
      return
    }
    const allLessons = new Set()
    info.modules.forEach((module, mIdx) => {
      module.lessons.forEach((_, lIdx) => allLessons.add(`${mIdx}-${lIdx}`))
    })
    setExpandedLessons(allLessons)
  }

  const totalLessons = info.modules.reduce((acc, m) => acc + m.lessons.length, 0)

  const companyColumn = {
    title: 'Bạn là doanh nghiệp',
    subtitle: 'Cần chuẩn hoá kỹ năng GenAI cho team',
    items: info.audience.company,
    cta: { href: '/enterprises#tai-ho-so', label: 'Tải hồ sơ đào tạo doanh nghiệp →' },
  }

  return (
    <div className="course-page premium-course mx-auto w-full max-w-7xl">
      <PremiumCourseHero courseKey={genaiKey} />
      <CourseRegistrationForm courseTitle={info.code} theme="purple" />
      <div id="course-details" className="premium-course-details">
        <CourseFactsStrip facts={info.facts} />

        {/* Course Info Section */}
        <section className="bg-white py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
                Thông tin khoá học
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {info.overview.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-purple-50 p-6 text-center dark:bg-purple-900/20"
                >
                  <div className="mb-3 text-3xl font-bold text-purple-600">{item.value}</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Entry requirements & lab stack */}
        <section className="bg-gradient-to-br from-slate-50 to-purple-50 px-4 py-16 dark:from-gray-900 dark:to-purple-900/20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h2 className="mb-6 text-2xl font-bold text-purple-600 dark:text-purple-400">
                  Yêu cầu đầu vào
                </h2>
                <ul className="space-y-3">
                  {info.requirements.map((requirement) => (
                    <li
                      key={requirement}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                    >
                      <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-purple-500" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h2 className="mb-6 text-2xl font-bold text-purple-600 dark:text-purple-400">
                  Lab &amp; công nghệ
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {info.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-purple-50 px-3 py-1.5 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <AudienceFit
          student={info.audience.student}
          working={info.audience.working}
          extra={[companyColumn]}
        />

        {/* Market evidence */}
        <section className="bg-white py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
                {info.market.title}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {info.market.items.map((item) => (
                <figure
                  key={item.value}
                  className="rounded-2xl bg-purple-50 p-8 dark:bg-purple-900/20"
                >
                  <div className="mb-3 text-4xl font-bold text-purple-700 dark:text-purple-300">
                    {item.value}
                  </div>
                  <figcaption className="text-gray-700 dark:text-gray-300">{item.label}</figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
              {info.market.source}
            </p>
            <p className="mt-2 text-center text-xs text-gray-500 dark:text-gray-500">
              {info.market.note}
            </p>
          </div>
        </section>

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
                      amount={working}
                      className="text-3xl font-bold text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  <div className="rounded-xl bg-purple-50 p-4 text-center dark:bg-purple-900/30">
                    <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      Sinh viên
                    </div>
                    <Price
                      amount={student}
                      className="text-2xl font-bold text-purple-700 dark:text-purple-300"
                    />
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
                    <Price
                      amount={earlyWorking}
                      compareAt={working}
                      className="text-3xl font-bold"
                      compareClassName="text-sm opacity-75"
                    />
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur">
                    <div className="text-sm font-medium opacity-90">Sinh viên</div>
                    <Price
                      amount={earlyStudent}
                      compareAt={student}
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

                <a href="#registration-form" className="course-cta-inverse">
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
                    <Price
                      amount={groupWorking}
                      compareAt={working}
                      className="text-3xl font-bold text-purple-700 dark:text-purple-300"
                      compareClassName="text-sm text-gray-500"
                    />
                  </div>
                  <div className="rounded-xl bg-purple-50 p-4 text-center dark:bg-purple-900/20">
                    <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      Sinh viên
                    </div>
                    <Price
                      amount={groupStudent}
                      compareAt={student}
                      className="text-2xl font-bold text-purple-700 dark:text-purple-300"
                      compareClassName="text-sm text-gray-500"
                    />
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

            <p className="mt-12 text-center text-sm text-gray-600 dark:text-gray-300">
              Học phí chưa bao gồm VAT ·{' '}
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
                12 buổi học với nội dung được thiết kế kỹ lưỡng, tập trung vào thực hành
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
              {info.modules.map((module, moduleIndex) => (
                <div
                  key={module.title}
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
                          key={lesson.title}
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
                              {lesson.topics.map((topic) => (
                                <li
                                  key={topic}
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

        {/* Capstone output */}
        <section className="bg-white py-20 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
                Sản phẩm cuối khóa
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">{info.capstone.intro}</p>
            </div>
            <ul className="mx-auto max-w-2xl space-y-3">
              {info.capstone.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-purple-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Mentor Section */}
        <section className="bg-gray-100 px-4 py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
              Đội ngũ Mentor
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-600 dark:text-gray-300">
              100% là chuyên gia AI, Cloud và Data tại các công ty nước ngoài (MNC), giàu kinh
              nghiệm dự án thực tế
            </p>

            <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {mentorDetails.length || 9}+
                </div>
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
                <div className="mb-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  <FaUserTie className="mx-auto h-8 w-8" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Kinh nghiệm GenAI trên AWS
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-orange-600 dark:text-orange-400">
                  <FaUsers className="mx-auto h-8 w-8" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Review bài làm từng buổi
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {mentorDetails.map((m) => (
                <Link
                  key={m.slug}
                  href={`/authors/${m.slug}`}
                  className="flex h-full flex-col items-center rounded-xl bg-gray-50 p-6 shadow transition hover:scale-105 hover:bg-purple-50 hover:shadow-xl dark:bg-gray-800 dark:hover:bg-purple-700"
                >
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
                      <div className="mb-2 text-center text-xs text-gray-500 dark:text-gray-400">
                        {m.occupation}
                      </div>
                    )}
                    <div className="text-center text-lg font-bold">{m.name}</div>
                    <div className="text-center text-sm text-gray-600 dark:text-gray-300">
                      {m.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CourseFAQ items={info.faq} />

        <TestimonialGrid
          items={pickTestimonials('general', 2)}
          title="Học viên nói gì về VNTechies?"
        />

        {/* Related courses */}
        <section className="px-4 pb-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="page-eyebrow">Học tiếp</span>
                <h2 className="page-heading">Khoá học liên quan</h2>
              </div>
              <Link href="/courses/register" className="action-btn-secondary action-btn-sm">
                <FaGraduationCap className="mr-2" /> Đăng ký tư vấn
              </Link>
            </div>
            <ol className="grid gap-px border border-line bg-line sm:grid-cols-3">
              {info.relatedCourses.map((code) => {
                const related = otherCourses.find((course) => (course.title || '').includes(code))
                return (
                  <li key={code} className="bg-surface p-5">
                    <p className="panel-label">{code}</p>
                    <p className="mt-2 font-bold">
                      {related?.title?.replace(/^(ĐỘC QUYỀN|Khoá học):\s*/i, '') || code}
                    </p>
                    {related && (
                      <Link
                        href={`/courses/${related.slug}`}
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-strong hover:underline"
                      >
                        Xem khoá học <FaArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </li>
                )
              })}
            </ol>
            <p className="mt-4 flex items-center gap-2 text-sm text-fg-muted">
              <FaDollarSign className="h-4 w-4 text-brand-strong" aria-hidden="true" />
              Combo AI Engineer (AIF-C01 + VGE-C01) giảm 20%: 15.000.000₫ →{' '}
              <strong>12.000.000₫</strong>{' '}
              <Link href="/pricing#combo" className="underline underline-offset-2">
                xem chính sách combo
              </Link>
            </p>
          </div>
        </section>

        <OtherCoursesSection otherCourses={otherCourses} />
      </div>
      <StickyEnrollBar code={`GenAI ${info.code}`} intake={genaiIntake} fromPrice={groupStudent} />
      <div className="h-16" aria-hidden="true" />
    </div>
  )
}

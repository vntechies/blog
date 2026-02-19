import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import CourseRegistrationForm from '@/components/CourseRegistrationForm'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const COURSE_META = {
  'data-engineer-bootcamp': {
    name: 'Data Engineer Bootcamp',
    code: 'VDT-C01',
    badge: 'Data Bootcamp',
    theme: 'purple',
    order: 1,
  },
  devops: {
    name: 'DevOps Engineer',
    code: 'VDE-C01',
    badge: 'DevOps Bootcamp',
    theme: 'blue',
    order: 2,
  },
  'aws/saa': {
    name: 'AWS Solutions Architect Associate',
    code: 'SAA-C03',
    badge: 'AWS Associate',
    theme: 'orange',
    order: 3,
  },
  'aws/clf': {
    name: 'AWS Cloud Practitioner',
    code: 'CLF-C02',
    badge: 'AWS Foundational',
    theme: 'blue',
    order: 4,
  },
  'aws/dva': {
    name: 'AWS Developer Associate',
    code: 'DVA-C02',
    badge: 'AWS Associate',
    theme: 'orange',
    order: 5,
  },
  'aws/aif': {
    name: 'AWS AI Practitioner',
    code: 'AIF-C01',
    badge: 'AWS AI',
    theme: 'purple',
    order: 6,
  },
}

const THEME_STYLES = {
  orange: {
    badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/80 dark:text-orange-200',
    selected:
      'border-orange-300 bg-orange-50/90 ring-2 ring-orange-300 dark:border-orange-400/70 dark:bg-slate-900 dark:ring-orange-400/60',
  },
  blue: {
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/80 dark:text-blue-200',
    selected:
      'border-blue-300 bg-blue-50/90 ring-2 ring-blue-300 dark:border-blue-400/70 dark:bg-slate-900 dark:ring-blue-400/60',
  },
  purple: {
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/80 dark:text-purple-200',
    selected:
      'border-purple-300 bg-purple-50/90 ring-2 ring-purple-300 dark:border-purple-400/70 dark:bg-slate-900 dark:ring-purple-400/60',
  },
}

const extractCourseCode = (title = '') => {
  const matched = title.match(/\(([A-Z0-9-]+)\)/i)
  return matched?.[1]?.toUpperCase() || ''
}

const normalizeCourseName = (title = '') =>
  title
    .replace(/^ĐỘC QUYỀN:\s*/i, '')
    .replace(/^Khoá học\s*/i, '')
    .replace(/\([A-Z0-9-]+\)/gi, '')
    .trim()

const getThemeBySlug = (slug = '') => {
  if (slug.startsWith('aws/')) return 'orange'
  if (slug.includes('data')) return 'purple'
  if (slug.includes('devops')) return 'blue'
  return 'orange'
}

export async function getStaticProps() {
  const allCourses = await getAllFilesFrontMatter('courses')
  const mainCourses = allCourses.filter((course) => course.index === 0)

  const paidCourses = mainCourses
    .filter((course) => !course.isFree)
    .map((course) => {
      const meta = COURSE_META[course.slug] || {}
      const code = meta.code || extractCourseCode(course.title)

      return {
        slug: course.slug,
        url: `/courses/${course.slug}`,
        name: meta.name || normalizeCourseName(course.title),
        summary: course.summary || '',
        code,
        badge: meta.badge || (course.slug.startsWith('aws/') ? 'AWS Certification' : 'Bootcamp'),
        theme: meta.theme || getThemeBySlug(course.slug),
        order: meta.order ?? 99,
        price: course.price || 'Liên hệ tư vấn',
        image: course.images?.[0] || '/static/images/default-ogp.png',
      }
    })
    .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name, 'vi'))

  const freeCourses = mainCourses
    .filter((course) => course.isFree)
    .map((course) => ({
      slug: course.slug,
      url: `/courses/${course.slug}`,
      name: normalizeCourseName(course.title),
      summary: course.summary || 'Khóa học miễn phí để bạn tự học theo lộ trình.',
      image: course.images?.[0] || '/static/images/default-ogp.png',
    }))
    .sort((a, b) => a.name.localeCompare(b.name, 'vi'))

  return {
    props: {
      paidCourses,
      freeCourses,
    },
  }
}

export default function Register({ paidCourses = [], freeCourses = [] }) {
  const router = useRouter()
  const fallbackCourse = paidCourses[0]
  const [selectedSlug, setSelectedSlug] = useState(fallbackCourse?.slug || '')

  useEffect(() => {
    if (!router.isReady || paidCourses.length === 0) return

    const queryValue = Array.isArray(router.query.course)
      ? router.query.course[0]
      : router.query.course
    const normalizedQuery = queryValue?.toString().trim().toLowerCase()

    if (!normalizedQuery) {
      setSelectedSlug(fallbackCourse?.slug || '')
      return
    }

    const matchedCourse = paidCourses.find(
      (course) =>
        course.slug.toLowerCase() === normalizedQuery ||
        course.code?.toLowerCase() === normalizedQuery
    )

    if (matchedCourse) setSelectedSlug(matchedCourse.slug)
  }, [router.isReady, router.query.course, paidCourses, fallbackCourse])

  const selectedCourse = useMemo(
    () => paidCourses.find((course) => course.slug === selectedSlug) || fallbackCourse,
    [paidCourses, selectedSlug, fallbackCourse]
  )

  const selectedTheme = selectedCourse?.theme || 'orange'
  const selectedCourseLabel = selectedCourse?.code
    ? `${selectedCourse.name} (${selectedCourse.code})`
    : selectedCourse?.name || 'Khóa học VNTechies'
  const selectedCourseValue = selectedCourse?.code
    ? `${selectedCourse.code} - ${selectedCourse.name}`
    : selectedCourse?.name || 'Khóa học VNTechies'

  const handleRegistrationSuccess = () => {
    const successElement = document.querySelector('[data-success-message]')
    if (successElement) {
      successElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <>
      <PageSEO
        title={`Đăng ký khóa học - ${siteMetadata.title}`}
        description="Đăng ký tham gia các khóa học AWS, DevOps và Data Engineering tại VNTechies. Nhận tư vấn lộ trình phù hợp và ưu đãi dành cho học viên."
        url={`${siteMetadata.siteUrl}/courses/register`}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-[#091428] dark:via-[#101b30] dark:to-[#1a2540]">
        <section className="border-b border-slate-300/80 bg-white dark:border-slate-800 dark:bg-slate-800/80">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <span className="text-xs inline-flex rounded-full border border-orange-300/80 bg-orange-50 px-4 py-2 font-semibold uppercase tracking-wide text-orange-700 dark:border-orange-500/40 dark:bg-orange-500/10 dark:text-orange-200">
              VNTechies Career Launchpad
            </span>
            <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              Chọn khoá học và đăng ký tư vấn trong 2 phút
            </h1>
            <p className="sm:text-lg mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Đội ngũ mentor sẽ liên hệ để tư vấn lộ trình phù hợp với mục tiêu của bạn.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-300 bg-white p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/60">
                <div className="text-2xl font-black text-slate-900 dark:text-slate-100">200+</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Học viên đã tham gia</p>
              </div>
              <div className="rounded-2xl border border-slate-300 bg-white p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/60">
                <div className="text-2xl font-black text-slate-900 dark:text-slate-100">80%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Tỷ lệ hoàn thành khóa</p>
              </div>
              <div className="rounded-2xl border border-slate-300 bg-white p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/60">
                <div className="text-2xl font-black text-slate-900 dark:text-slate-100">9+</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Mentor đang hỗ trợ</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#course-selection"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Bắt đầu chọn khóa
              </a>
              <a
                href="#registration-form"
                className="inline-flex items-center justify-center rounded-xl border border-slate-400 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              >
                Đi tới form đăng ký
              </a>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:py-12">
          <section
            id="course-selection"
            className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800/60 sm:p-8"
          >
            <header className="max-w-3xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
                1. Chọn khóa học
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
                Chỉ cần nhấn vào thẻ khoá bạn muốn học.
              </p>
            </header>

            {paidCourses.length === 0 ? (
              <div className="mt-6 rounded-2xl border border-slate-300 bg-slate-100 p-6 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                Chưa có khóa premium nào để đăng ký.
              </div>
            ) : (
              <>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {paidCourses.map((course) => {
                    const isSelected = selectedSlug === course.slug
                    const currentThemeStyles = THEME_STYLES[course.theme] || THEME_STYLES.orange

                    return (
                      <div
                        key={course.slug}
                        className={`overflow-hidden rounded-2xl border transition ${
                          isSelected
                            ? currentThemeStyles.selected
                            : 'border-slate-300 bg-white hover:border-slate-400 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-slate-500'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setSelectedSlug(course.slug)}
                          className="w-full p-5 text-left"
                          aria-pressed={isSelected}
                        >
                          <div>
                            <h3 className="sm:text-lg text-base font-bold text-slate-900 dark:text-slate-100">
                              {course.name}
                            </h3>
                            <div className="mt-1 flex items-center gap-2">
                              {course.code && (
                                <span className="text-xs rounded-md bg-slate-50 px-2 py-1 font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                                  {course.code}
                                </span>
                              )}
                              <span
                                className={`text-xs rounded-full px-2.5 py-1 font-semibold ${currentThemeStyles.badge}`}
                              >
                                {course.badge}
                              </span>
                            </div>
                          </div>
                          <p className="mt-3 text-sm font-semibold text-slate-800 dark:text-slate-100">
                            {course.price}
                          </p>
                        </button>
                        <div className="flex items-center justify-between border-t border-slate-200 px-5 py-3 dark:border-slate-700">
                          <Link
                            href={course.url}
                            className="text-sm font-semibold text-orange-600 transition hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-200"
                          >
                            Chi tiết →
                          </Link>
                          <span className="text-xs text-slate-600 dark:text-slate-300">
                            Nhấn vào thẻ để chọn
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {selectedCourse && (
                  <div className="mt-6 rounded-2xl border border-slate-300 bg-white p-4 dark:border-slate-700 dark:bg-slate-800/60">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-28 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                        <Image
                          src={selectedCourse.image}
                          alt={selectedCourse.name}
                          fill
                          className="object-cover"
                          sizes="112px"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          Khóa đã chọn
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                            {selectedCourse.name}
                          </h3>
                          {selectedCourse.code && (
                            <span className="text-xs rounded-full bg-slate-200 px-2.5 py-1 font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                              {selectedCourse.code}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                          {selectedCourse.price}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </section>

          <CourseRegistrationForm
            courseTitle={selectedCourseValue}
            courseLabel={selectedCourseLabel}
            theme={selectedTheme}
            onSuccess={handleRegistrationSuccess}
          />

          {freeCourses.length > 0 && (
            <section className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800/60 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 sm:text-2xl">
                Khoá miễn phí
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {freeCourses.map((course) => (
                  <Link
                    key={course.slug}
                    href={course.url}
                    className="overflow-hidden rounded-2xl border border-slate-300 bg-white transition hover:border-orange-300 hover:bg-orange-50/50 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-orange-400/70 dark:hover:bg-orange-500/10"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>
                    <div className="px-4 py-3">
                      <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                        {course.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  )
}

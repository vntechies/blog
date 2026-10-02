import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { coursesSocialImage } from '@/data/courseSocialImages'
import EnrollmentCampaign from '@/components/course/EnrollmentCampaign'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { premiumCatalog, audiences } from '@/data/courseCatalog'
import { MONTHLY_INTAKE } from '@/data/courseOffers'
import { applyOffer, formatVnd, useOffer } from '@/components/course/offer'

export async function getStaticProps() {
  const courses = await getAllFilesFrontMatter('courses')
  let filteredCourse = courses.filter((course) => course.index === 0)
  // Premium courses follow the learning path (Foundational → Associate → Bootcamp)
  const pathOrder = (course) => {
    const i = premiumCatalog.findIndex((c) => c.slug === course.slug)
    return i === -1 ? premiumCatalog.length : i
  }
  filteredCourse.sort((a, b) =>
    a.isFree === b.isFree ? pathOrder(a) - pathOrder(b) : a.isFree ? 1 : -1
  )
  return { props: { courses: filteredCourse } }
}

export default function Courses({ courses }) {
  const [activeTab, setActiveTab] = useState('premium')
  const [audience, setAudience] = useState(null)
  // Both offer courses share one deadline, so one check covers the catalog
  const { active: offerActive } = useOffer(premiumCatalog.find((c) => c.offer)?.offer)
  const selected = audiences.find((a) => a.id === audience)

  const catalogFor = (course) => premiumCatalog.find((c) => c.slug === course.slug)
  const metaFor = (entry) => {
    if (!entry) return undefined
    const price =
      entry.fromPrice &&
      (entry.offer && offerActive
        ? applyOffer(entry.fromPrice, entry.offer.percent)
        : entry.fromPrice)
    return [
      { label: 'Học phí', value: price ? `Từ ${formatVnd(price)}` : 'Liên hệ tư vấn' },
      { label: 'Cấp độ', value: entry.level },
      { label: 'Thời lượng', value: entry.duration },
      { label: 'Khai giảng', value: 'Hàng tháng' },
    ]
  }

  const paidCourses = courses.filter((course) => !course.isFree)
  const freeCourses = courses.filter((course) => course.isFree)
  const tabs = [
    ['premium', paidCourses],
    ['free', freeCourses],
  ]

  useEffect(() => {
    if (window.location.hash === '#mien-phi') setActiveTab('free')
  }, [])

  return (
    <>
      <PageSEO
        title={`Khoá học - ${siteMetadata.headerTitle}`}
        description={siteMetadata.descriptions.courses}
        image={coursesSocialImage}
      />
      <div className="space-y-10">
        <header className="pt-2">
          <span className="page-eyebrow">Học tập có hướng dẫn</span>
          <h1 className="page-heading text-slate-900 dark:text-slate-100">Khóa học</h1>
          <p className="page-lead">
            Chọn lộ trình phù hợp với mục tiêu của bạn. Các khoá premium chuyên sâu và các khóa miễn
            để bắt đầu nhanh.
          </p>
        </header>

        <EnrollmentCampaign />
        <section className="surface-panel p-3 sm:p-4">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setActiveTab('premium')}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                activeTab === 'premium'
                  ? 'bg-orange-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              Premium ({paidCourses.length})
            </button>
            <button
              onClick={() => setActiveTab('free')}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                activeTab === 'free'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              Miễn phí ({freeCourses.length})
            </button>
          </div>
        </section>

        {activeTab === 'premium' && (
          <section aria-labelledby="course-picker" className="surface-panel p-5 sm:p-6">
            <h2 id="course-picker" className="text-lg font-extrabold">
              Mình nên học khoá nào?
            </h2>
            <p className="mt-1 text-sm text-fg-muted">
              Chọn tình huống gần nhất với bạn. {MONTHLY_INTAKE} cho mọi khoá premium.
            </p>
            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Bạn đang là">
              {audiences.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  aria-pressed={audience === a.id}
                  onClick={() => setAudience(audience === a.id ? null : a.id)}
                  className={
                    audience === a.id
                      ? 'action-btn-primary action-btn-sm'
                      : 'action-btn-secondary action-btn-sm'
                  }
                >
                  {a.label}
                </button>
              ))}
            </div>
            {selected && (
              <p className="mt-4 border-l-2 border-brand pl-3 text-sm text-fg">
                <span className="font-bold">Gợi ý: </span>
                {selected.path}
              </p>
            )}
          </section>
        )}

        {/* Both grids stay in the HTML so crawlers can reach every course */}
        {tabs.map(([tab, list]) => (
          <section
            key={tab}
            id={tab === 'free' ? 'mien-phi' : undefined}
            className={activeTab === tab ? '' : 'hidden'}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {list.length === 0 && (
                <div className="surface-panel col-span-full p-8 text-center text-sm text-slate-600 dark:text-slate-300">
                  Không có khóa học nào.
                </div>
              )}
              {list.map((course) => {
                const entry = catalogFor(course)
                // The picker dims courses that do not fit, but keeps them reachable
                const dimmed = selected && entry && !entry.fits.includes(selected.id)
                return (
                  <div
                    key={course.title}
                    className={`transition-opacity ${dimmed ? 'opacity-40 hover:opacity-100' : ''}`}
                  >
                    <Card
                      isFree={course.isFree}
                      meta={metaFor(entry)}
                      badge={
                        entry?.offer && offerActive ? (
                          <span className="chip border-brand text-brand-strong">
                            −{entry.offer.percent}% đến {entry.offer.label}
                          </span>
                        ) : null
                      }
                      title={course.title}
                      description={course.summary}
                      imgSrc={course.images[0]}
                      imageAspectRatio="40/21"
                      href={`/courses/${course.slug}`}
                    />
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

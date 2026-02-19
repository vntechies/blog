import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const courses = await getAllFilesFrontMatter('courses')
  let filteredCourse = courses.filter((course) => course.index === 0)
  // Sort courses: paid courses first, then free courses
  filteredCourse.sort((a, b) => {
    if (a.isFree === b.isFree) return 0
    return a.isFree ? 1 : -1
  })
  return { props: { courses: filteredCourse } }
}

export default function Courses({ courses }) {
  const [activeTab, setActiveTab] = useState('premium')

  const paidCourses = courses.filter((course) => !course.isFree)
  const freeCourses = courses.filter((course) => course.isFree)
  const displayCourses = activeTab === 'premium' ? paidCourses : freeCourses

  return (
    <>
      <PageSEO
        title={`Khoá học - ${siteMetadata.headerTitle}`}
        description={siteMetadata.descriptions.courses}
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

        <section>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {displayCourses.length === 0 && (
              <div className="surface-panel col-span-full p-8 text-center text-sm text-slate-600 dark:text-slate-300">
                Không có khóa học nào.
              </div>
            )}
            {displayCourses.map((course) => {
              return (
                <Card
                  isFree={course.isFree}
                  key={course.title}
                  title={course.title}
                  description={course.summary}
                  imgSrc={course.images[0]}
                  href={`/courses/${course.slug}`}
                />
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}

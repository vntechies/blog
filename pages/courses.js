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
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="md:text-6xl text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14">
            📚 Khoá học
          </h1>
        </div>
        <div className="container py-12">
          {/* Tabs */}
          <div className="mb-8 flex space-x-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
            <button
              onClick={() => setActiveTab('premium')}
              className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'premium'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
              }`}
            >
              💎 Premium ({paidCourses.length})
            </button>
            <button
              onClick={() => setActiveTab('free')}
              className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'free'
                  ? 'bg-green-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
              }`}
            >
              🆓 Miễn phí ({freeCourses.length})
            </button>
          </div>

          {/* Course Grid */}
          <div className="-m-4 flex flex-wrap">
            {displayCourses.length === 0 && 'Không có khoá học nào.'}
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
        </div>
      </div>
    </>
  )
}

import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const courses = await getAllFilesFrontMatter('courses')
  let filteredCourse = courses.filter((course) => course.index === 0)
  return { props: { courses: filteredCourse } }
}

export default function Courses({ courses }) {
  return (
    <>
      <PageSEO
        title={`Khoá học - ${siteMetadata.title}`}
        description={siteMetadata.descriptions.courses}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            📚 Khoá học
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{/* Các khoá học */}</p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {courses.length === 0 && 'Không có khoá học nào.'}
            {courses.map((course) => {
              return (
                <Card
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

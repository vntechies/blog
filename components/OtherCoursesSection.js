import React from 'react'
import Image from '@/components/Image'
import Link from 'next/link'

export default function OtherCoursesSection({ otherCourses = [] }) {
  if (!otherCourses || otherCourses.length === 0) {
    return null
  }

  return (
    <section className="bg-white py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
            🚀 Khám phá thêm các khóa học khác
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Mở rộng kiến thức với các khóa học chất lượng từ VNTechies
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherCourses.map((course) => (
            <Link key={course.slug} href={`/courses/${course.slug}`} className="group block">
              <div className="overflow-hidden rounded-xl bg-gray-50 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-700">
                {course.images && course.images[0] && (
                  <div className="relative aspect-[40/21] overflow-hidden">
                    <Image
                      src={course.images[0]}
                      alt={course.title}
                      width={1200}
                      height={630}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {course.isFree && (
                      <div className="absolute top-3 right-3 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                        MIỄN PHÍ
                      </div>
                    )}
                    {!course.isFree && (
                      <div className="absolute top-3 right-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                        💎 PREMIUM
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                    {course.title}
                  </h3>
                  {course.summary && (
                    <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
                      {course.summary}
                    </p>
                  )}
                  {/* {course.price && (
                    <div className="mt-3 text-sm font-semibold text-orange-600 dark:text-orange-400">
                      {course.price}
                    </div>
                  )} */}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            🎯 Xem tất cả khóa học
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

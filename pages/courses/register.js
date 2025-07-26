import { useState } from 'react'
import { PageSEO } from '../../components/SEO'
import CourseRegistrationForm from '../../components/CourseRegistrationForm'
import siteMetadata from '../../data/siteMetadata'
import Link from 'next/link'

export default function Register() {
  // Get course title from URL params if available, otherwise default
  const [selectedCourse, setSelectedCourse] = useState('AWS SAA-C03')
  const [selectedTheme, setSelectedTheme] = useState('orange')

  const courses = [
    {
      title: 'AWS CLF-C02',
      name: 'AWS Cloud Practitioner',
      theme: 'blue',
      url: '/courses/aws/clf/gioi-thieu',
    },
    {
      title: 'AWS SAA-C03',
      name: 'AWS Solutions Architect Associate',
      theme: 'orange',
      url: '/courses/aws/saa/gioi-thieu',
    },
    {
      title: 'AWS DVA-C02',
      name: 'AWS Developer Associate',
      theme: 'purple',
      url: '/courses/aws/dva/gioi-thieu',
    },
    {
      title: 'AWS AIF-C01',
      name: 'AWS AI Practitioner',
      theme: 'orange',
      url: '/courses/aws/aif/gioi-thieu',
    },
  ]

  const handleCourseChange = (courseTitle) => {
    const course = courses.find((c) => c.title === courseTitle)
    setSelectedCourse(courseTitle)
    setSelectedTheme(course?.theme || 'orange')
  }

  const handleRegistrationSuccess = () => {
    // Scroll to the success message
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
        description="Đăng ký tham gia các khóa học AWS, DevOps tại VNTechies. Nhận tư vấn chi tiết và ưu đãi đặc biệt cho học viên mới."
        url={`${siteMetadata.siteUrl}/courses/register`}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header Section */}
        <div className="bg-white shadow-sm dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Đăng Ký Khóa Học</h1>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                Bắt đầu hành trình sự nghiệp Cloud/DevOps của bạn cùng VNTechies
              </p>
            </div>
          </div>
        </div>

        {/* Course Selection */}
        <div className="mx-auto max-w-6xl px-4 py-24">
          <div className="shadow-6xl mb-16 rounded-2xl bg-white p-20 dark:bg-gray-900">
            <h2 className="mb-16 text-center text-5xl font-bold text-gray-900 dark:text-gray-100">
              Chọn khóa học bạn quan tâm:
            </h2>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {courses.map((course) => (
                <div key={course.title} className="relative">
                  <button
                    onClick={() => handleCourseChange(course.title)}
                    className={`relative h-44 w-full rounded-lg border-2 p-8 text-left transition-all hover:shadow-lg ${
                      selectedCourse === course.title
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-600 dark:bg-gray-700'
                    }`}
                  >
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {course.title}
                    </div>
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                      {course.name}
                    </div>
                  </button>
                  <Link
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-gray-200 hover:text-gray-800 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500 dark:hover:text-white"
                    title="Xem chi tiết khóa học"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <CourseRegistrationForm
          courseTitle={selectedCourse}
          theme={selectedTheme}
          onSuccess={handleRegistrationSuccess}
        />

        {/* Additional Info Section */}
        <div className="bg-white py-12 dark:bg-gray-800">
          <div className="mx-auto max-w-4xl px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg
                    className="h-8 w-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg mb-2 font-semibold text-gray-900 dark:text-white">
                  Cam kết chất lượng
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  99% học viên pass chứng chỉ trong lần thi đầu tiên
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <svg
                    className="h-8 w-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V10a2 2 0 012-2h2V6a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2h-2v-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg mb-2 font-semibold text-gray-900 dark:text-white">
                  Hỗ trợ 24/7
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Cộng đồng học viên và mentor hỗ trợ liên tục
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                  <svg
                    className="h-8 w-8 text-orange-600 dark:text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg mb-2 font-semibold text-gray-900 dark:text-white">
                  Thực hành nhiều
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  35%+ thời lượng là lab thực hành trên AWS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

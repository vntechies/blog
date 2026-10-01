import { useState, useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { trackCourseEvent } from '@/lib/course-analytics'
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaSpinner, FaTag } from 'react-icons/fa'

export default function CourseRegistrationForm({
  courseTitle = 'AWS SAA-C03',
  courseLabel,
  theme = 'orange',
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentType: 'working', // working or student
    motivation: '',
    isAlumni: false,
    groupRegistration: false,
    couponCode: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Get coupon code from URL parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const coupon = urlParams.get('coupon')
    if (coupon) {
      setFormData((prev) => ({ ...prev, couponCode: coupon }))
    }
    const syncAudience = (event) => {
      if (
        courseTitle.includes(event.detail?.code) &&
        ['student', 'working'].includes(event.detail?.studentType)
      ) {
        setFormData((prev) => ({ ...prev, studentType: event.detail.studentType }))
      }
    }
    window.addEventListener('course-audience-change', syncAudience)
    return () => window.removeEventListener('course-audience-change', syncAudience)
  }, [courseTitle])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const GOOGLE_SCRIPT_URL =
        'https://script.google.com/macros/s/AKfycbxBsyI5cmfpw-SQBjH6cyKL3O8lwuv7UAY2b-eZ02A9oEINYsrpjAZQgKEVupNnuKNg/exec'

      const dataToSend = {
        ...formData,
        timestamp: new Date().toISOString(),
        course: courseTitle,
        page: window.location.pathname,
        utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
        utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || '',
        utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
      }

      // 1. Send to AWS Serverless API Gateway (Odoo)
      const serverlessPromise = fetch(
        'https://daypauo6of.execute-api.ap-southeast-1.amazonaws.com/prod/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
        }
      )

      // 2. Send to Google Apps Script (Google Sheets) using iframe method
      const googlePromise = new Promise((resolve, reject) => {
        try {
          // Create hidden iframe for form submission
          const iframe = document.createElement('iframe')
          iframe.name = 'hidden-form'
          iframe.style.display = 'none'
          document.body.appendChild(iframe)

          const form = document.createElement('form')
          form.method = 'POST'
          form.action = GOOGLE_SCRIPT_URL
          form.target = 'hidden-form'
          form.style.display = 'none'

          Object.keys(dataToSend).forEach((key) => {
            const input = document.createElement('input')
            input.type = 'hidden'
            input.name = key
            input.value = dataToSend[key]
            form.appendChild(input)
          })

          document.body.appendChild(form)
          form.submit()

          // Cleanup after submission
          setTimeout(() => {
            document.body.removeChild(form)
            document.body.removeChild(iframe)
            resolve({ success: true, message: 'Google Sheets submission completed' })
          }, 1000)
        } catch (error) {
          reject(error)
        }
      })

      // Wait for both submissions
      const [serverlessResponse, googleResponse] = await Promise.allSettled([
        serverlessPromise,
        googlePromise,
      ])

      // Check results
      let successCount = 0
      const results = {}

      // Check serverless response
      if (serverlessResponse.status === 'fulfilled') {
        try {
          const serverlessResult = await serverlessResponse.value.json()
          if (serverlessResponse.value.ok) {
            results.serverless = { status: 'SUCCESS', data: serverlessResult }
            successCount++
          } else {
            results.serverless = { status: 'FAILED', error: serverlessResult.message }
          }
        } catch (error) {
          results.serverless = { status: 'FAILED', error: error.message }
        }
      } else {
        results.serverless = { status: 'FAILED', error: serverlessResponse.reason }
      }

      // Check Google Script response
      if (googleResponse.status === 'fulfilled') {
        results.google = { status: 'SUCCESS', data: googleResponse.value }
      } else {
        results.google = { status: 'FAILED', error: googleResponse.reason }
      }

      // An iframe submission cannot confirm receipt. Only the API response confirms a lead.
      if (successCount > 0) {
        // Track lead generation event in GA4
        const eventParams = {
          form_name: 'tu_van_khoa_hoc',
          course: courseTitle,
          student_type: formData.studentType,
          is_alumni: formData.isAlumni,
          group_registration: formData.groupRegistration,
          has_coupon: !!formData.couponCode,
        }

        trackCourseEvent('generate_lead', eventParams)

        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          studentType: 'working',
          motivation: '',
          isAlumni: false,
          groupRegistration: false,
          couponCode: '',
        })
        setIsSubmitting(false)

        // Call onSuccess callback if provided
        if (onSuccess) {
          onSuccess()
        }
      } else {
        throw new Error('Both submission systems failed')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  const themeColors = {
    orange: {
      bg: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/10 dark:to-orange-800/10',
      focus: 'focus:border-orange-500 focus:ring-orange-500/20',
      checkbox: 'text-orange-600 focus:ring-orange-500',
      hover: 'hover:bg-orange-50 dark:hover:bg-orange-900/20',
      button:
        'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600',
      link: 'text-orange-600',
      courseTag:
        'border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-500/40 dark:bg-orange-500/10 dark:text-orange-200',
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/10 dark:to-purple-800/10',
      focus: 'focus:border-purple-500 focus:ring-purple-500/20',
      checkbox: 'text-purple-600 focus:ring-purple-500',
      hover: 'hover:bg-purple-50 dark:hover:bg-purple-900/20',
      button:
        'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600',
      link: 'text-purple-600',
      courseTag:
        'border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-500/40 dark:bg-purple-500/10 dark:text-purple-200',
    },
    blue: {
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/10 dark:to-blue-800/10',
      focus: 'focus:border-blue-500 focus:ring-blue-500/20',
      checkbox: 'text-blue-600 focus:ring-blue-500',
      hover: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
      button: 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600',
      link: 'text-blue-600',
      courseTag:
        'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-200',
    },
  }

  const currentTheme = themeColors[theme] || themeColors.orange
  const selectedCourseLabel = courseLabel || courseTitle

  return (
    <section id="registration-form" className={`py-20 ${currentTheme.bg}`}>
      <div className="mx-auto max-w-4xl px-4">
        <div className="registration-heading mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
            Nhận lịch học & tư vấn lộ trình
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Để lại tên và số điện thoại/Zalo. VNTechies sẽ trao đổi mục tiêu, lịch lớp và học phí
            với bạn.
          </p>
          <div
            className={`mt-4 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${currentTheme.courseTag}`}
          >
            <span>Khóa đang chọn:</span>
            <span>{selectedCourseLabel}</span>
          </div>
          <ol className="mt-6 space-y-3 text-left text-sm text-fg-muted">
            <li>
              <strong className="text-brand-strong">01.</strong> Chia sẻ mục tiêu và kinh nghiệm
              hiện tại.
            </li>
            <li>
              <strong className="text-brand-strong">02.</strong> Nhận lịch lớp, lộ trình và mức học
              phí phù hợp.
            </li>
            <li>
              <strong className="text-brand-strong">03.</strong> Quyết định đăng ký sau khi đã rõ
              thông tin.
            </li>
          </ol>
        </div>

        <div className="registration-panel rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-900">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Three required fields; everything else is optional and folded away */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="reg-name"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Họ và tên *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id="reg-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className={`w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${currentTheme.focus}`}
                    placeholder="Nhập họ và tên"
                  />
                </div>
              </div>

              {/* Phone / Zalo */}
              <div>
                <label
                  htmlFor="reg-phone"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Số điện thoại / Zalo *
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id="reg-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    className={`w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${currentTheme.focus}`}
                    placeholder="0901234567"
                  />
                </div>
              </div>
            </div>

            {/* Student type */}
            <fieldset>
              <legend className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Bạn đang là *
              </legend>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'student', label: 'Sinh viên' },
                  { value: 'working', label: 'Người đi làm' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border p-3 text-sm font-semibold transition focus-within:ring-2 focus-within:ring-orange-500 ${
                      formData.studentType === option.value
                        ? 'border-orange-500 bg-orange-500/10 text-gray-900 dark:text-gray-100'
                        : `border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-300 ${currentTheme.hover}`
                    }`}
                  >
                    <input
                      type="radio"
                      name="studentType"
                      value={option.value}
                      checked={formData.studentType === option.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {option.value === 'student' && <FaGraduationCap aria-hidden="true" />}
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            {formData.couponCode && (
              <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <FaTag aria-hidden="true" />
                Mã giảm giá <strong>{formData.couponCode}</strong> đã được áp dụng
              </p>
            )}

            <details className="rounded-lg border border-gray-200 dark:border-gray-600">
              <summary className="cursor-pointer select-none p-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                Thêm thông tin (không bắt buộc): email, nhóm, mã giảm giá, mục tiêu
              </summary>
              <div className="space-y-4 border-t border-gray-200 p-4 dark:border-gray-600">
                {/* Email */}
                <div>
                  <label
                    htmlFor="reg-email"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      id="reg-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={`w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${currentTheme.focus}`}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <label
                  htmlFor="groupRegistration"
                  className="flex cursor-pointer items-center text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  <input
                    id="groupRegistration"
                    type="checkbox"
                    name="groupRegistration"
                    checked={formData.groupRegistration}
                    onChange={handleChange}
                    className={`mr-3 h-5 w-5 rounded border-gray-300 ${currentTheme.checkbox}`}
                  />
                  Đăng ký theo nhóm (2+ người)
                </label>

                <label
                  htmlFor="isAlumni"
                  className="flex cursor-pointer items-center text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  <input
                    id="isAlumni"
                    type="checkbox"
                    name="isAlumni"
                    checked={formData.isAlumni}
                    onChange={handleChange}
                    className={`mr-3 h-5 w-5 rounded border-gray-300 ${currentTheme.checkbox}`}
                  />
                  Cựu học viên của VNTechies
                </label>

                {/* Coupon Code */}
                <div>
                  <label
                    htmlFor="reg-coupon"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Mã giảm giá
                  </label>
                  <div className="relative">
                    <FaTag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      id="reg-coupon"
                      type="text"
                      name="couponCode"
                      value={formData.couponCode}
                      onChange={handleChange}
                      className={`w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${currentTheme.focus}`}
                      placeholder="Nhập mã giảm giá"
                    />
                  </div>
                </div>

                {/* Motivation */}
                <div>
                  <label
                    htmlFor="reg-motivation"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Mục tiêu sau khóa học
                  </label>
                  <textarea
                    id="reg-motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${currentTheme.focus}`}
                    placeholder="Ví dụ: Lấy chứng chỉ AWS, chuyển ngành Cloud, thăng tiến trong công việc..."
                  />
                </div>
              </div>
            </details>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="action-btn-primary w-full disabled:cursor-wait disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="mr-3 h-5 w-5 animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  'Nhận lịch học & tư vấn'
                )}
              </button>
              <p className="mt-3 text-xs text-fg-muted">
                Gửi yêu cầu tư vấn, chưa phải thanh toán hay xác nhận nhập học.
              </p>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div
                data-success-message
                role="status"
                className="rounded-lg bg-green-50 p-4 text-center text-green-800 dark:bg-green-900/20 dark:text-green-400"
              >
                ✅ Đăng ký thành công! Tư vấn viên sẽ gọi hoặc nhắn Zalo cho bạn trong 24h.
              </div>
            )}
            {submitStatus === 'error' && (
              <div
                role="alert"
                className="rounded-lg bg-red-50 p-4 text-center text-red-800 dark:bg-red-900/20 dark:text-red-400"
              >
                Chưa xác nhận được yêu cầu. Vui lòng thử lại hoặc{' '}
                <a
                  href={siteMetadata.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline"
                >
                  nhắn Zalo {siteMetadata.zaloDisplay}
                </a>{' '}
                để được tư vấn.
              </div>
            )}
          </form>

          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Hoặc liên hệ trực tiếp qua{' '}
            <a
              href={siteMetadata.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${currentTheme.link} font-semibold hover:underline`}
            >
              Zalo {siteMetadata.zaloDisplay}
            </a>{' '}
            hoặc{' '}
            <a
              href="https://m.me/vntechies"
              target="_blank"
              rel="noopener noreferrer"
              className={`${currentTheme.link} hover:underline`}
            >
              Messenger VNTechies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

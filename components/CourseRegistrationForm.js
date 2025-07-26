import { useState } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaSpinner } from 'react-icons/fa'

export default function CourseRegistrationForm({ courseTitle = 'AWS SAA-C03', theme = 'orange' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentType: 'working', // working or student
    experience: '',
    motivation: '',
    isAlumni: false,
    groupRegistration: false,
    groupSize: '',
    groupMembers: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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
      // Google Apps Script Web goApp URL - replace with your actual URL
      const GOOGLE_SCRIPT_URL =
        'https://script.google.com/macros/s/AKfycbxBsyI5cmfpw-SQBjH6cyKL3O8lwuv7UAY2b-eZ02A9oEINYsrpjAZQgKEVupNnuKNg/exec'

      const dataToSend = {
        ...formData,
        timestamp: new Date().toISOString(),
        course: courseTitle,
      }

      console.log('Sending data:', dataToSend)

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
      }, 1000)

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        studentType: 'working',
        experience: '',
        motivation: '',
        isAlumni: false,
        groupRegistration: false,
        groupSize: '',
        groupMembers: '',
      })
      setIsSubmitting(false)
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
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/10 dark:to-purple-800/10',
      focus: 'focus:border-purple-500 focus:ring-purple-500/20',
      checkbox: 'text-purple-600 focus:ring-purple-500',
      hover: 'hover:bg-purple-50 dark:hover:bg-purple-900/20',
      button:
        'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600',
      link: 'text-purple-600',
    },
    blue: {
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/10 dark:to-blue-800/10',
      focus: 'focus:border-blue-500 focus:ring-blue-500/20',
      checkbox: 'text-blue-600 focus:ring-blue-500',
      hover: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
      button: 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600',
      link: 'text-blue-600',
    },
  }

  const currentTheme = themeColors[theme]

  return (
    <section id="registration-form" className={`py-20 ${currentTheme.bg}`}>
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
            Đăng ký tham gia khóa học
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Điền thông tin để nhận tư vấn chi tiết và ưu đãi đặc biệt
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-900">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Họ và tên *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${currentTheme.focus}`}
                    placeholder="Nhập họ và tên"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email *
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${currentTheme.focus}`}
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Số điện thoại *
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${currentTheme.focus}`}
                    placeholder="0901234567"
                  />
                </div>
              </div>

              {/* Student Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Đối tượng *
                </label>
                <div className="relative">
                  <FaGraduationCap className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <select
                    name="studentType"
                    value={formData.studentType}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${currentTheme.focus}`}
                  >
                    <option value="working">Người đi làm</option>
                    <option value="student">Sinh viên</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Kinh nghiệm với AWS/Cloud
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className={`w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${currentTheme.focus}`}
              >
                <option value="">Chọn mức độ kinh nghiệm</option>
                <option value="beginner">Mới bắt đầu</option>
                <option value="basic">Có kiến thức cơ bản</option>
                <option value="intermediate">Đã có kinh nghiệm</option>
                <option value="advanced">Có kinh nghiệm nhiều năm</option>
              </select>
            </div>

            {/* Alumni Status */}
            <div
              className={`flex cursor-pointer items-center rounded-lg border border-gray-200 p-4 transition dark:border-gray-600 ${currentTheme.hover}`}
              onClick={() => setFormData({ ...formData, isAlumni: !formData.isAlumni })}
            >
              <input
                type="checkbox"
                name="isAlumni"
                checked={formData.isAlumni}
                onChange={handleChange}
                className={`mr-3 h-5 w-5 rounded border-gray-300 ${currentTheme.checkbox}`}
              />
              <label className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300">
                Cựu học viên của VNTechies
              </label>
            </div>

            {/* Group Registration */}
            <div className="space-y-4">
              <div
                className={`flex cursor-pointer items-center rounded-lg border border-gray-200 p-4 transition dark:border-gray-600 ${currentTheme.hover}`}
                onClick={() =>
                  setFormData({ ...formData, groupRegistration: !formData.groupRegistration })
                }
              >
                <input
                  type="checkbox"
                  name="groupRegistration"
                  checked={formData.groupRegistration}
                  onChange={handleChange}
                  className={`mr-3 h-5 w-5 rounded border-gray-300 ${currentTheme.checkbox}`}
                />
                <label className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300">
                  Đăng ký theo nhóm (2+ người) - Giảm giá đặc biệt!
                </label>
              </div>

              {formData.groupRegistration && (
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Số lượng thành viên
                    </label>
                    <input
                      type="number"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      min="2"
                      className={`w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${currentTheme.focus}`}
                      placeholder="2"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Thông tin thành viên khác
                    </label>
                    <textarea
                      name="groupMembers"
                      value={formData.groupMembers}
                      onChange={handleChange}
                      rows={2}
                      className={`w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${currentTheme.focus}`}
                      placeholder="Tên, email các thành viên khác..."
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Motivation */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Mục tiêu sau khóa học
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                rows={3}
                className={`w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${currentTheme.focus}`}
                placeholder="Ví dụ: Lấy chứng chỉ AWS, chuyển ngành Cloud, thăng tiến trong công việc..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`text-lg inline-flex items-center rounded-xl px-8 py-4 font-bold text-white shadow-xl transition disabled:opacity-50 ${currentTheme.button}`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="mr-3 h-5 w-5 animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  'Đăng ký ngay'
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="rounded-lg bg-green-50 p-4 text-center text-green-800 dark:bg-green-900/20 dark:text-green-400">
                ✅ Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn trong 24h.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="rounded-lg bg-red-50 p-4 text-center text-red-800 dark:bg-red-900/20 dark:text-red-400">
                ❌ Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ qua Messenger.
              </div>
            )}
          </form>

          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Hoặc liên hệ trực tiếp qua{' '}
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

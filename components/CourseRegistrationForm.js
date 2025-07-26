import { useState } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaSpinner } from 'react-icons/fa'

export default function CourseRegistrationForm({ courseTitle = 'AWS SAA-C03' }) {
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
      // Google Apps Script Web App URL - replace with your actual URL
      const GOOGLE_SCRIPT_URL =
        'https://script.google.com/macros/s/AKfycbzA47fOPxneUySYKI9tSyDNObKJiRLodROFGcCZ-oaV3fcJ-PEcuAaXEgQxIVWFMha0/exec'

      const dataToSend = {
        ...formData,
        timestamp: new Date().toISOString(),
        course: courseTitle,
      }

      console.log('Sending data:', dataToSend)

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(dataToSend).toString(),
      })

      console.log('Response received')
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
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="registration-form"
      className="bg-gradient-to-br from-orange-50 to-orange-100 py-20 dark:from-orange-900/10 dark:to-orange-800/10"
    >
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
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
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
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
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
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
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
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
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
                className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
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
              className="flex cursor-pointer items-center rounded-lg border border-gray-200 p-4 transition hover:bg-orange-50 dark:border-gray-600 dark:hover:bg-orange-900/20"
              onClick={() => setFormData({ ...formData, isAlumni: !formData.isAlumni })}
            >
              <input
                type="checkbox"
                name="isAlumni"
                checked={formData.isAlumni}
                onChange={handleChange}
                className="mr-3 h-5 w-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
              <label className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300">
                🎓 Tôi là cựu học viên VNTechies
              </label>
            </div>

            {/* Group Registration */}
            <div className="space-y-4">
              <div
                className="flex cursor-pointer items-center rounded-lg border border-gray-200 p-4 transition hover:bg-orange-50 dark:border-gray-600 dark:hover:bg-orange-900/20"
                onClick={() =>
                  setFormData({ ...formData, groupRegistration: !formData.groupRegistration })
                }
              >
                <input
                  type="checkbox"
                  name="groupRegistration"
                  checked={formData.groupRegistration}
                  onChange={handleChange}
                  className="mr-3 h-5 w-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300">
                  👥 Đăng ký theo nhóm (2+ người) - Giảm giá đặc biệt!
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
                      className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
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
                      className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
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
                className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                placeholder="Ví dụ: Lấy chứng chỉ AWS, chuyển ngành Cloud, thăng tiến trong công việc..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-lg inline-flex items-center rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 font-bold text-white shadow-xl transition disabled:opacity-50 hover:from-orange-700 hover:to-orange-600"
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
              className="text-orange-600 hover:underline"
            >
              Messenger VNTechies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

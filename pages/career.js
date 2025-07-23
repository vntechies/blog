import { useState, useEffect } from 'react'
import { FaClock, FaRocket } from 'react-icons/fa'
import Link from 'next/link'
import { PageSEO } from '../components/SEO'
import siteMetadata from '../data/siteMetadata'

export default function Career() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2025-08-15T00:00:00+07:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <PageSEO
        title={`Career Center - ${siteMetadata.title}`}
        description="VNTechies Career Center đang được phát triển - Coming Soon"
      />

      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-gray-100">
              VNTechies Career Center
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Đang xây dựng - Coming Soon</p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 dark:from-orange-900/20 dark:to-orange-800/20">
            <div className="mb-6 flex items-center justify-center gap-2">
              <FaClock className="h-6 w-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Ra mắt trong</h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
                <div className="text-3xl font-bold text-orange-600">{timeLeft.days}</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Ngày</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
                <div className="text-3xl font-bold text-orange-600">{timeLeft.hours}</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Giờ</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
                <div className="text-3xl font-bold text-orange-600">{timeLeft.minutes}</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Phút</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
                <div className="text-3xl font-bold text-orange-600">{timeLeft.seconds}</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Giây</div>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="mb-12 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Sắp có gì?</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-3 text-4xl">💼</div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">Job Board</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tìm việc Cloud/DevOps phù hợp
                </p>
              </div>
              <div className="text-center">
                <div className="mb-3 text-4xl">🎯</div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Smart Matching
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Gợi ý việc làm theo kỹ năng
                </p>
              </div>
              <div className="text-center">
                <div className="mb-3 text-4xl">🤝</div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">Community</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Kết nối với cộng đồng VNTechies
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 p-8 text-white">
            <h3 className="mb-4 text-2xl font-bold">Muốn được thông báo khi ra mắt?</h3>
            <p className="mb-6">Tham gia cộng đồng VNTechies để cập nhật thông tin mới nhất</p>
            <Link
              href="https://m.me/vntechies"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-orange-600 transition hover:bg-gray-100"
            >
              <FaRocket className="mr-2 h-4 w-4" />
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

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
  const launchDate = new Date('2026-10-15T00:00:00+07:00').getTime()
  // Countdown hidden once launch date has passed. Reverse this (with the
  // sitemap exclusion in scripts/generate-sitemap.js and the noindex below)
  // when the Career Center launches.
  const launched = new Date().getTime() >= launchDate

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = launchDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [launchDate])

  return (
    <>
      <PageSEO
        title={`Career Center - ${siteMetadata.siteName}`}
        description="VNTechies Career Center đang được phát triển - Coming Soon"
        noindex
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <div className="space-y-8">
          <div className="text-center">
            <span className="page-eyebrow">Coming Soon</span>
            <h1 className="page-heading text-slate-900 dark:text-slate-100">
              VNTechies Career Center
            </h1>
            <p className="page-lead mx-auto">
              Nền tảng kết nối việc làm Cloud, DevOps và Data dành cho cộng đồng kỹ sư Việt.
            </p>
          </div>

          {!launched && (
            <div className="surface-panel p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-center gap-2">
                <FaClock className="h-5 w-5 text-orange-500" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Ra mắt trong
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                <div className="surface-panel-muted p-4 text-center">
                  <div className="text-3xl font-black text-orange-600 dark:text-orange-300">
                    {timeLeft.days}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Ngày
                  </div>
                </div>
                <div className="surface-panel-muted p-4 text-center">
                  <div className="text-3xl font-black text-orange-600 dark:text-orange-300">
                    {timeLeft.hours}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Giờ
                  </div>
                </div>
                <div className="surface-panel-muted p-4 text-center">
                  <div className="text-3xl font-black text-orange-600 dark:text-orange-300">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Phút
                  </div>
                </div>
                <div className="surface-panel-muted p-4 text-center">
                  <div className="text-3xl font-black text-orange-600 dark:text-orange-300">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Giây
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="surface-panel p-6 sm:p-8">
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">
              Sắp có gì?
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="surface-panel-muted p-4 text-center">
                <div className="mb-2 text-3xl">💼</div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Job Board</h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Tìm việc Cloud/DevOps phù hợp.
                </p>
              </div>
              <div className="surface-panel-muted p-4 text-center">
                <div className="mb-2 text-3xl">🎯</div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Smart Matching</h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Gợi ý vai trò dựa trên kỹ năng.
                </p>
              </div>
              <div className="surface-panel-muted p-4 text-center">
                <div className="mb-2 text-3xl">🤝</div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Community</h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Kết nối với mạng lưới mentor và học viên.
                </p>
              </div>
            </div>
          </div>

          <div className="surface-panel bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white sm:p-8">
            <h3 className="text-2xl font-bold">Muốn được thông báo khi ra mắt?</h3>
            <p className="mt-2 text-sm sm:text-base">
              Tham gia cộng đồng VNTechies để cập nhật sớm.
            </p>
            <Link
              href="https://m.me/vntechies"
              className="mt-5 inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-orange-600 transition hover:bg-orange-50 sm:text-base"
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

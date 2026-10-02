import { useState } from 'react'
import Image from 'next/image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { premiumCatalog } from '@/data/courseCatalog'
import { courseLanding } from '@/data/courseLanding'
import { courseSocialImages } from '@/data/courseSocialImages'
import { MONTHLY_INTAKE, campaignTuition } from '@/data/courseOffers'
import { pickTestimonials } from '@/data/testimonials'
import { applyOffer, formatVnd, useOffer } from './offer'
import { trackCourseAction } from '@/lib/course-analytics'

export default function PremiumCourseHero({ courseKey }) {
  const course = courseLanding[courseKey]
  const catalog = premiumCatalog.find((entry) => entry.slug === `${courseKey}/gioi-thieu`)
  const { active } = useOffer(catalog.offer)
  const [audience, setAudience] = useState('working')
  const campaignCourse = Boolean(catalog.offer)
  // These are the published individual Early Bird tiers, not the group minimum.
  const individual = campaignTuition.earlyBird[audience === 'student' ? 1 : 0]
  const amount = campaignCourse ? individual : catalog.fromPrice
  const price = amount && (active ? applyOffer(amount, catalog.offer.percent) : amount)
  const quote = pickTestimonials(campaignCourse ? course.topic : 'general', 1)[0]
  const track = (action) => trackCourseAction(catalog.code, action)

  return (
    <div className="premium-intro">
      <nav
        aria-label="Điều hướng khóa học"
        className="flex flex-wrap items-center gap-2 py-5 text-xs text-fg-muted"
      >
        <Link href="/courses" className="hover:text-brand-strong">
          Khóa học
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-fg">{catalog.code}</span>
        <a href="#course-details" className="ml-auto underline underline-offset-4">
          Chương trình chi tiết ↓
        </a>
      </nav>

      {active && (
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border border-brand bg-brand/10 px-4 py-3 text-sm">
          <p>
            <strong className="text-brand-strong">
              Giảm thêm {catalog.offer.percent}% học phí
            </strong>{' '}
            · Đến hết {catalog.offer.label}/2026
          </p>
          <a
            href="#registration-form"
            onClick={() => track('offer')}
            className="font-bold underline underline-offset-4"
          >
            Nhận tư vấn ưu đãi ↗
          </a>
        </div>
      )}

      <section
        className="grid gap-8 pb-10 lg:grid-cols-[1.2fr,1fr] lg:gap-12"
        aria-labelledby="course-heading"
      >
        <div className="min-w-0 py-2">
          <p className="page-eyebrow">
            {catalog.code} · {catalog.level} · Online
          </p>
          <p className="mt-5 text-sm font-semibold text-brand-strong">{course.title}</p>
          <h1
            id="course-heading"
            className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-fg sm:text-4xl lg:text-5xl"
          >
            {course.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-muted">{course.summary}</p>
          <p className="mt-4 border-l-2 border-brand pl-4 text-sm leading-relaxed text-fg-muted">
            {course.fit}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#registration-form"
              onClick={() => track('hero_consultation')}
              className="action-btn-primary w-full sm:w-auto"
            >
              Nhận lịch học & tư vấn →
            </a>
            <a
              href={siteMetadata.zalo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('hero_zalo')}
              className="action-btn-secondary w-full sm:w-auto"
            >
              Hỏi trực tiếp qua Zalo ↗
            </a>
          </div>
          <p className="mt-3 text-xs text-fg-subtle">
            Trao đổi mục tiêu, lịch học và học phí trước khi quyết định đăng ký.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-5">
            <div>
              <dt className="text-xs text-fg-subtle">Thời lượng</dt>
              <dd className="mt-1 font-bold">{catalog.duration}</dd>
            </div>
            <div>
              <dt className="text-xs text-fg-subtle">Lịch khai giảng</dt>
              <dd className="mt-1 font-bold">{MONTHLY_INTAKE}</dd>
            </div>
          </dl>
        </div>

        <aside className="self-start border border-line bg-surface-muted">
          <Image
            src={courseSocialImages[courseKey]}
            alt={course.title}
            width={1200}
            height={630}
            priority
            className="h-auto w-full border-b border-line"
          />
          <div className="p-5 sm:p-6">
            <p className="panel-label">
              {campaignCourse ? 'Học phí cá nhân · Early Bird' : 'Học phí tham khảo'}
            </p>
            {campaignCourse && (
              <fieldset className="mt-4">
                <legend className="sr-only">Chọn mức học phí</legend>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    ['working', 'Người đi làm'],
                    ['student', 'Sinh viên'],
                  ].map(([value, label]) => (
                    <label
                      key={value}
                      className={`cursor-pointer border px-2 py-2.5 text-center text-sm focus-within:ring-2 focus-within:ring-brand ${
                        audience === value
                          ? 'border-brand bg-brand/10 text-brand-strong'
                          : 'border-line text-fg-muted'
                      }`}
                    >
                      <input
                        type="radio"
                        name="tuition-audience"
                        className="sr-only"
                        value={value}
                        checked={audience === value}
                        onChange={() => {
                          setAudience(value)
                          window.dispatchEvent(
                            new CustomEvent('course-audience-change', {
                              detail: { code: catalog.code, studentType: value },
                            })
                          )
                        }}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>
            )}
            <div className="mt-4 flex flex-wrap items-baseline gap-3">
              <p className="text-3xl font-extrabold tracking-tight text-fg">
                {price ? `${campaignCourse ? '' : 'Từ '}${formatVnd(price)}` : 'Nhận báo học phí'}
              </p>
              {active && (
                <span className="text-sm text-fg-subtle line-through">{formatVnd(amount)}</span>
              )}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-fg-muted">
              {campaignCourse
                ? `Mức cá nhân ${audience === 'student' ? 'sinh viên' : 'người đi làm'}. ${
                    active
                      ? `Đã giảm thêm ${catalog.offer.percent}% đến ${catalog.offer.label}.`
                      : 'Theo bảng Early Bird của khóa học.'
                  }`
                : 'Mức học phí phụ thuộc đối tượng và hình thức đăng ký. Xem bảng chi tiết bên dưới hoặc nhận tư vấn.'}
            </p>
            {campaignCourse && (
              <p className="mt-3 text-xs leading-relaxed text-fg-muted">
                Nhóm 2+ người có mức riêng. Mức thấp nhất dành cho nhóm sinh viên:{' '}
                {formatVnd(
                  active ? applyOffer(catalog.fromPrice, catalog.offer.percent) : catalog.fromPrice
                )}
                /người.
              </p>
            )}
            <a
              href="#registration-form"
              onClick={() => track('tuition_consultation')}
              className="action-btn-primary mt-5 w-full"
            >
              Nhận lịch lớp phù hợp →
            </a>
          </div>
        </aside>
      </section>

      <section className="border-y border-line py-8" aria-labelledby="course-outcomes">
        <p className="page-eyebrow">Học để áp dụng</p>
        <h2 id="course-outcomes" className="mt-3 text-2xl font-bold text-fg">
          Bạn sẽ thực hành những gì?
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {course.outcomes.map((outcome, index) => (
            <div key={outcome} className="border-l border-line pl-4">
              <span className="font-mono text-sm text-brand-strong">0{index + 1}</span>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{outcome}</p>
            </div>
          ))}
        </div>
        <ol className="mt-7 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {course.path.map((step, index) => (
            <li key={step} className="bg-surface px-4 py-4 text-sm">
              <span className="mr-2 text-brand-strong">{index + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {quote && (
        <figure className="grid gap-4 py-8 sm:grid-cols-[1fr,auto] sm:items-center">
          <blockquote className="max-w-2xl text-base leading-relaxed text-fg">
            “{quote.quote}”
          </blockquote>
          <figcaption className="flex items-center gap-3">
            <Image
              src={quote.image}
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-bold">{quote.name}</p>
              <p className="text-xs text-fg-muted">{quote.role} · Học viên VNTechies</p>
            </div>
          </figcaption>
        </figure>
      )}
    </div>
  )
}

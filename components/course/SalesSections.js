import { useEffect, useState } from 'react'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import { applyOffer, formatVnd } from './offer'
import { trackCourseAction } from '@/lib/course-analytics'

// Bottom bar that keeps the price and the CTA in reach on long course pages. Appears
// after the hero and steps aside while the registration form is on screen.
export function StickyEnrollBar({ code, intake, fromPrice, offer, active }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const form = document.getElementById('registration-form')
    let formInView = false
    const update = () => setVisible(window.scrollY > 700 && !formInView)
    const observer =
      form &&
      new IntersectionObserver(([entry]) => {
        formInView = entry.isIntersecting
        update()
      })
    if (observer) observer.observe(form)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      if (observer) observer.disconnect()
    }
  }, [])

  const price = fromPrice && (active ? applyOffer(fromPrice, offer.percent) : fromPrice)

  return (
    <div
      className={`surface-glass fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-40 border-t border-line transition-transform duration-200 md:bottom-0 ${
        visible ? 'translate-y-0' : 'pointer-events-none translate-y-[200%]'
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:gap-6">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-fg">
            {code} <span className="font-normal text-fg-subtle">· {intake}</span>
          </p>
          <p className="truncate text-xs text-fg-muted">
            {price ? (
              <>
                Từ <span className="font-bold text-brand-strong">{formatVnd(price)}</span>
              </>
            ) : (
              'Nhận lịch lớp & học phí qua tư vấn'
            )}
            {active && (
              <span>
                {' '}
                · giảm thêm {offer.percent}% đến {offer.label}
              </span>
            )}
          </p>
        </div>
        <a
          href={siteMetadata.zalo}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="action-btn-secondary action-btn-sm"
        >
          Zalo<span className="hidden sm:inline">&nbsp;tư vấn</span>
        </a>
        <a
          href="#registration-form"
          onClick={() => trackCourseAction(code, 'sticky_consultation')}
          tabIndex={visible ? 0 : -1}
          className="action-btn-primary action-btn-sm"
        >
          Nhận tư vấn
        </a>
      </div>
    </div>
  )
}

// Key facts a buyer looks for first, shown in the hero
export function QuickFacts({ facts, className = '' }) {
  return (
    <dl className={`grid grid-cols-2 border-l border-t border-line ${className}`.trim()}>
      {facts.map(({ label, value }) => (
        <div key={label} className="border-r border-b border-line p-3 text-left">
          <dt className="text-[0.6875rem] font-bold uppercase tracking-wider text-fg-subtle">
            {label}
          </dt>
          <dd className="mt-1 text-sm font-bold text-fg">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

const Check = () => (
  <span className="mt-0.5 shrink-0 font-bold text-success" aria-hidden="true">
    ✓
  </span>
)

// "Is this for me?" answered separately for students and working professionals
export function AudienceFit({ student, working }) {
  const columns = [
    {
      title: 'Bạn là sinh viên',
      subtitle: 'Muốn có kỹ năng & chứng chỉ trước khi ra trường',
      items: student,
    },
    {
      title: 'Bạn đã đi làm',
      subtitle: 'Muốn chuyển hướng hoặc lên level mà không nghỉ việc',
      items: working,
    },
  ]

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <span className="page-eyebrow">Khoá học có phù hợp với bạn?</span>
        <h2 className="page-heading">Học được, theo được, trả được</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {columns.map(({ title, subtitle, items }) => (
            <div key={title} className="surface-panel p-6 sm:p-8">
              <h3 className="text-xl font-extrabold">{title}</h3>
              <p className="mt-1 text-sm text-fg-subtle">{subtitle}</p>
              <ul className="mt-6 space-y-3">
                {items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-fg-prose sm:text-base">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Market figures with their sources, in place of unsourced ROI claims
export function SalaryEvidence({ title, items, note }) {
  return (
    <div className="surface-panel mt-12 p-6 text-left sm:p-8">
      <p className="panel-label">{title}</p>
      <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ value, label, source }) => (
          <figure key={label}>
            <div className="text-3xl font-extrabold text-brand-strong">{value}</div>
            <figcaption className="mt-2 text-sm text-fg-muted">
              {label}
              <cite className="mt-1 block text-xs not-italic text-fg-subtle">
                Nguồn:{' '}
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-line-strong underline-offset-2 hover:text-brand-strong"
                >
                  {source.name}
                </a>
              </cite>
            </figcaption>
          </figure>
        ))}
      </div>
      {note && <p className="mt-6 border-t border-line pt-4 text-xs text-fg-subtle">{note}</p>}
    </div>
  )
}

// Objection handling right next to the registration form
export function CourseFAQ({ items }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <span className="page-eyebrow">Câu hỏi thường gặp</span>
        <h2 className="page-heading">Trước khi đăng ký, bạn có thể đang thắc mắc</h2>
        <div className="mt-10 border-t border-line">
          {items.map(({ q, a }) => (
            <details key={q} className="border-b border-line">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 font-bold text-fg">
                <span>{q}</span>
                <span className="faq-marker shrink-0 text-brand-strong" aria-hidden="true" />
              </summary>
              <div className="pb-5 text-sm leading-relaxed text-fg-muted sm:text-base">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

// Long blocks (curriculum) start folded so the page reaches pricing sooner
export function Collapsible({
  children,
  label = 'Xem toàn bộ nội dung',
  height = '36rem',
  // Match the section background so the fade reads as the content running out
  fadeClassName = 'from-white dark:from-gray-900',
}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="relative overflow-hidden" style={open ? undefined : { maxHeight: height }}>
        {children}
        {!open && (
          <div
            className={`pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent ${fadeClassName}`}
            aria-hidden="true"
          />
        )}
      </div>
      <div className="mt-6 text-center">
        <button
          type="button"
          className="action-btn-secondary"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? 'Thu gọn' : label}
        </button>
      </div>
    </div>
  )
}

// Facts strip under heroes that have no room for them: intake, schedule, price, CTA
export function CourseFactsStrip({ facts }) {
  return (
    <section className="px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <QuickFacts facts={facts} className="sm:grid-cols-4" />
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#registration-form" className="action-btn-primary">
            Đăng ký giữ chỗ
          </a>
          <p className="text-sm text-fg-muted">
            Cần tư vấn nhanh? Nhắn{' '}
            <a
              href={siteMetadata.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-strong underline underline-offset-2"
            >
              Zalo {siteMetadata.zaloDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

// Learner quotes with optional proof: before → after role, certification badge
export function TestimonialGrid({ items, title = 'Học viên nói gì?', subtitle }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <span className="page-eyebrow">Học viên VNTechies</span>
        <h2 className="page-heading">{title}</h2>
        {subtitle && <p className="page-lead">{subtitle}</p>}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((t) => (
            <figure key={t.name + t.quote} className="surface-panel flex flex-col p-6">
              <blockquote className="flex-1 text-base text-fg-prose">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="font-bold text-fg">{t.name}</p>
                  <p className="text-sm text-fg-muted">
                    {t.before && t.after ? `${t.before} → ${t.after}` : t.role}
                  </p>
                </div>
                <div className="ml-auto flex shrink-0 flex-col items-end gap-1">
                  {t.audience === 'student' && <span className="chip">Sinh viên</span>}
                  {t.credly && (
                    <a
                      href={t.credly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip tone-info"
                    >
                      Xem chứng chỉ ↗
                    </a>
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

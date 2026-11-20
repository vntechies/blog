import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import b2bPortfolio, { pdfHref, downloadLabel } from '@/data/b2bPortfolio'
import siteMetadata from '@/data/siteMetadata'
import { trackCourseEvent } from '@/lib/course-analytics'
import { validateLeadForm, buildLeadPayload, submitLead } from '@/lib/b2b-lead'

const TEAM_SIZES = ['1–4', '5–10', '11–30', 'trên 30']
const INTERESTS = ['Cloud/AWS', 'DevOps', 'Data', 'AI']

const EMPTY_FORM = {
  name: '',
  company: '',
  email: '',
  phone: '',
  teamSize: '',
  interests: [],
  message: '',
  consent: false,
  website: '',
}

const labelClass = 'mb-2 block text-sm font-bold text-fg'
const hintClass = 'mt-1 text-xs text-fg-muted'
const errorClass = 'mt-1 text-xs font-semibold text-danger'
const fieldClass = 'input-field rounded-lg'

function fieldErrorId(field) {
  return `lead-${field}-error`
}

export default function B2BLeadForm() {
  const router = useRouter()
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | fallback
  const [sentTo, setSentTo] = useState('')

  const set = (field) => (event) => {
    const { type, value, checked } = event.target
    setForm((prev) => ({ ...prev, [field]: type === 'checkbox' ? checked : value }))
  }

  const toggleInterest = (item) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter((each) => each !== item)
        : [...prev.interests, item],
    }))
  }

  const onDownload = () => {
    trackCourseEvent('file_download', {
      file_name: b2bPortfolio.fileName,
      deck_version: b2bPortfolio.version,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const found = validateLeadForm(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('submitting')
    const email = form.email.trim()
    const payload = buildLeadPayload(
      form,
      {
        pathname: router.pathname,
        search: typeof window !== 'undefined' ? window.location.search : '',
      },
      b2bPortfolio.version
    )

    const result = await submitLead({ url: b2bPortfolio.leadScriptUrl, payload })

    if (result === 'ok') {
      trackCourseEvent('generate_lead', {
        form_name: 'b2b_portfolio',
        team_size: form.teamSize,
        interests: form.interests.join(','),
      })
      setSentTo(email)
      setStatus('success')
    } else {
      setSentTo(email)
      setStatus('fallback')
    }
  }

  if (status === 'success' || status === 'fallback') {
    const success = status === 'success'
    return (
      <div className="surface-panel surface-panel-lg rounded-2xl" role="status" aria-live="polite">
        <p className="page-eyebrow">{success ? 'Đã gửi' : 'Hồ sơ của bạn'}</p>
        <h3 className="panel-heading text-xl font-bold text-fg">
          {success
            ? `Đã gửi hồ sơ tới ${sentTo}`
            : 'Chưa gửi được thông tin, bạn vẫn có thể tải hồ sơ ngay'}
        </h3>
        <p className="mt-3 text-sm text-fg-muted">
          {success
            ? 'VNTechies đã gửi hồ sơ đào tạo doanh nghiệp tới email của bạn và sẽ liên hệ lại trong thời gian sớm nhất. Bạn cũng có thể tải ngay bên dưới.'
            : `Nhắn Zalo ${siteMetadata.zaloDisplay} để VNTechies liên hệ lại.`}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn-primary action-btn-lg"
            onClick={onDownload}
          >
            {downloadLabel}
          </a>
          <a
            href={siteMetadata.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn-secondary action-btn-lg"
          >
            Tư vấn qua Zalo
          </a>
        </div>
      </div>
    )
  }

  const submitting = status === 'submitting'

  return (
    <form
      onSubmit={handleSubmit}
      className="surface-panel surface-panel-lg relative rounded-2xl"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className={labelClass}>
            Họ tên *
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={set('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? fieldErrorId('name') : undefined}
            className={fieldClass}
          />
          {errors.name && (
            <p id={fieldErrorId('name')} className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lead-company" className={labelClass}>
            Công ty *
          </label>
          <input
            id="lead-company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            value={form.company}
            onChange={set('company')}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? fieldErrorId('company') : undefined}
            className={fieldClass}
          />
          {errors.company && (
            <p id={fieldErrorId('company')} className={errorClass}>
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lead-email" className={labelClass}>
            Email công việc *
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={set('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? fieldErrorId('email') : undefined}
            className={fieldClass}
          />
          {errors.email && (
            <p id={fieldErrorId('email')} className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lead-phone" className={labelClass}>
            Số điện thoại / Zalo
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={set('phone')}
            aria-describedby="lead-phone-hint"
            className={fieldClass}
          />
          <p id="lead-phone-hint" className={hintClass}>
            Để tư vấn nhanh qua Zalo
          </p>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="lead-teamSize" className={labelClass}>
            Quy mô đội cần đào tạo *
          </label>
          <select
            id="lead-teamSize"
            name="teamSize"
            required
            value={form.teamSize}
            onChange={set('teamSize')}
            aria-invalid={Boolean(errors.teamSize)}
            aria-describedby={errors.teamSize ? fieldErrorId('teamSize') : undefined}
            className={fieldClass}
          >
            <option value="">Chọn quy mô</option>
            {TEAM_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {errors.teamSize && (
            <p id={fieldErrorId('teamSize')} className={errorClass}>
              {errors.teamSize}
            </p>
          )}
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className={labelClass}>Mảng quan tâm</legend>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {INTERESTS.map((item) => (
            <label
              key={item}
              htmlFor={`lead-interest-${item}`}
              className="flex cursor-pointer items-center text-sm text-fg"
            >
              <input
                id={`lead-interest-${item}`}
                type="checkbox"
                name="interests"
                value={item}
                checked={form.interests.includes(item)}
                onChange={() => toggleInterest(item)}
                className="mr-2 h-4 w-4 rounded border-line-control text-brand-strong focus:ring-brand-strong"
              />
              {item}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="lead-message" className={labelClass}>
          Nhu cầu cụ thể
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={3}
          value={form.message}
          onChange={set('message')}
          placeholder="Ví dụ: cần đào tạo AWS cho 12 kỹ sư, cuối tháng 12 khai giảng"
          className={`${fieldClass} min-h-[6rem]`}
        />
      </div>

      {/* Honeypot: bots fill it, people never see it */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="lead-website">Website</label>
        <input
          id="lead-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={set('website')}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="lead-consent" className="flex cursor-pointer items-start text-sm text-fg">
          <input
            id="lead-consent"
            name="consent"
            type="checkbox"
            required
            checked={form.consent}
            onChange={set('consent')}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? fieldErrorId('consent') : undefined}
            className="mr-3 mt-0.5 h-4 w-4 shrink-0 rounded border-line-control text-brand-strong focus:ring-brand-strong"
          />
          <span>
            Tôi đồng ý để VNTechies lưu và dùng thông tin này để liên hệ tư vấn, theo{' '}
            <Link href="/docs/privacy" className="action-link">
              Chính sách bảo mật
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p id={fieldErrorId('consent')} className={errorClass}>
            {errors.consent}
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={submitting}
          className="action-btn-primary action-btn-lg disabled:cursor-wait disabled:opacity-70"
        >
          {submitting ? 'Đang gửi…' : 'Gửi và nhận hồ sơ'}
        </button>
        <p className="text-xs text-fg-muted">
          Hồ sơ {b2bPortfolio.pages} trang · {b2bPortfolio.sizeLabel} · phiên bản{' '}
          {b2bPortfolio.version}
        </p>
      </div>
    </form>
  )
}

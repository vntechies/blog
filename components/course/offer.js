import { useEffect, useState } from 'react'

const DAY = 24 * 60 * 60 * 1000

// Rounded to the nearest 1.000₫ so prices read like real price tags
export const applyOffer = (amount, percent) =>
  Math.round((amount * (100 - percent)) / 100000) * 1000

export const formatVnd = (amount) => `${String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}₫`

// Static HTML uses standard prices; the browser activates an unexpired offer.
// Recheck while the page is open so the campaign ends at the Vietnam-time deadline.
export function useOffer(offer) {
  const [state, setState] = useState({ active: false, daysLeft: null })

  useEffect(() => {
    if (!offer) {
      setState({ active: false, daysLeft: null })
      return
    }
    const update = () => {
      const left = Date.parse(offer.endsAt) - Date.now()
      setState({ active: left >= 0, daysLeft: Math.max(0, Math.ceil(left / DAY)) })
    }
    update()
    const interval = window.setInterval(update, 1000)
    return () => window.clearInterval(interval)
  }, [offer])

  return state
}

// A tuition figure. With an active offer it shows the discounted amount, strikes the
// published one and labels the deadline.
export function Price({ amount, compareAt, offer, active, className = '', compareClassName = '' }) {
  const final = active ? applyOffer(amount, offer.percent) : amount
  const struck = active ? compareAt || amount : compareAt

  return (
    <>
      <div className={`font-mono ${className}`}>{formatVnd(final)}</div>
      {struck && (
        <div className={`line-through ${compareClassName}`.trim()}>{formatVnd(struck)}</div>
      )}
      {active && (
        <div className="mt-1 inline-block bg-yellow-400 px-1.5 text-[0.6875rem] font-bold text-gray-950">
          −{offer.percent}% đến {offer.label}
        </div>
      )}
    </>
  )
}

// Deadline banner for the hero and the pricing section
export function OfferBanner({ offer, active, daysLeft, className = '' }) {
  if (!active) return null

  return (
    <div
      className={`flex flex-col gap-4 border-2 border-brand bg-brand/10 p-5 text-left sm:flex-row sm:items-center ${className}`.trim()}
    >
      <div className="w-fit shrink-0 bg-brand px-3 py-2 text-center text-brand-on">
        <div className="text-3xl font-extrabold leading-none">−{offer.percent}%</div>
        <div className="mt-1 text-[0.6875rem] font-bold uppercase tracking-wider">
          đến {offer.label}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-bold text-fg">
          Đăng ký trước hết ngày {offer.label}: giảm thêm {offer.percent}% học phí
        </p>
        <p className="mt-1 text-sm text-fg-muted">
          Áp dụng cho mọi mức học phí: tiêu chuẩn, Early Bird, nhóm, sinh viên và người đi làm.
          {daysLeft !== null && (
            <span className="font-bold text-brand-strong"> Còn {daysLeft} ngày.</span>
          )}
        </p>
      </div>
      <a href="#registration-form" className="action-btn-primary shrink-0">
        Giữ ưu đãi →
      </a>
    </div>
  )
}

import Image from './Image'
import Link from './Link'

// meta: optional [{ label, value }] facts (price, level, duration) shown above the CTA
const Card = ({
  title,
  description,
  imgSrc,
  imageAspectRatio = '16/10',
  href,
  showMore = true,
  isFree,
  meta,
  badge: extraBadge,
}) => {
  const badge =
    isFree === undefined ? null : isFree ? (
      <span className="chip tone-success w-fit tracking-wide">MIỄN PHÍ</span>
    ) : (
      <span className="chip w-fit tracking-wide">PREMIUM</span>
    )

  return (
    <div className="h-full">
      <Link alt={`Link tới ${title}`} href={href} className="group block h-full rounded-2xl">
        <article className="surface-panel surface-panel-interactive flex h-full flex-col overflow-hidden">
          {imgSrc && (
            <div
              className="overflow-hidden border-b border-line"
              style={{ aspectRatio: imageAspectRatio }}
            >
              <Image
                alt={title}
                src={imgSrc}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                width={544}
                height={306}
                loading="lazy"
              />
            </div>
          )}

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            {(badge || extraBadge) && (
              <div className="mb-3 flex flex-wrap gap-2">
                {badge}
                {extraBadge}
              </div>
            )}
            <h2 className="text-xl font-bold leading-snug text-fg transition-colors group-hover:text-brand-strong">
              {title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-fg-muted">{description}</p>
            {meta && (
              <dl className="mt-5 grid grid-cols-2 border-l border-t border-line text-left">
                {meta.map(({ label, value }) => (
                  <div key={label} className="border-r border-b border-line px-3 py-2">
                    <dt className="text-[0.6875rem] uppercase tracking-wider text-fg-subtle">
                      {label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-bold text-fg">{value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {showMore && (
              <span className="action-link mt-5">
                Xem chi tiết
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            )}
          </div>
        </article>
      </Link>
    </div>
  )
}

export default Card

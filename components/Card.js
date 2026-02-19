import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, showMore = true, isFree }) => {
  const badge =
    isFree === undefined ? null : isFree ? (
      <span className="text-xs inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-semibold tracking-wide text-emerald-700 dark:border-emerald-700/60 dark:bg-emerald-900/30 dark:text-emerald-300">
        MIỄN PHÍ
      </span>
    ) : (
      <span className="text-xs inline-flex w-fit items-center rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 font-semibold tracking-wide text-orange-700 dark:border-orange-700/60 dark:bg-orange-900/30 dark:text-orange-300">
        PREMIUM
      </span>
    )

  return (
    <div className="h-full">
      <Link alt={`Link tới ${title}`} href={href} className="group block h-full">
        <article className="surface-panel flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1">
          {imgSrc && (
            <div className="aspect-[16/10] overflow-hidden border-b border-slate-200 dark:border-slate-700">
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
            {badge && <div className="mb-3">{badge}</div>}
            <h2 className="text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-orange-600 dark:text-slate-100 dark:group-hover:text-orange-300">
              {title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {description}
            </p>
            {showMore && (
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-orange-600 dark:text-orange-300">
                Xem chi tiết
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

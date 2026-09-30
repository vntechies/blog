import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)
  const disabled =
    'inline-flex items-center px-3 py-2 text-sm font-medium text-fg-subtle opacity-70'

  return (
    <div className="pt-8 pb-12">
      <nav className="surface-panel-muted flex items-center justify-between gap-3 px-3 py-2 sm:px-4">
        {prevPage ? (
          <Link
            href={currentPage - 1 === 1 ? '/blog/' : `/blog/page/${currentPage - 1}`}
            className="nav-link"
          >
            ← Trang {currentPage - 1}
          </Link>
        ) : (
          <span className={disabled}>← Trước</span>
        )}
        <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold tabular-nums text-fg-muted">
          {currentPage} / {totalPages}
        </span>
        {nextPage ? (
          <Link href={`/blog/page/${currentPage + 1}`} className="nav-link">
            Trang {currentPage + 1} →
          </Link>
        ) : (
          <span className={disabled}>Sau →</span>
        )}
      </nav>
    </div>
  )
}

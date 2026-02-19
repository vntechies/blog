import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="pt-8 pb-12">
      <nav className="surface-panel-muted flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
        {prevPage ? (
          <Link
            href={currentPage - 1 === 1 ? '/blog/' : `/blog/page/${currentPage - 1}`}
            className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            ← Trang {currentPage - 1}
          </Link>
        ) : (
          <span className="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 dark:text-slate-500">
            ← Trước
          </span>
        )}
        <span className="text-xs rounded-full bg-slate-200 px-3 py-1 font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-200">
          {currentPage} / {totalPages}
        </span>
        {nextPage ? (
          <Link
            href={`/blog/page/${currentPage + 1}`}
            className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            Trang {currentPage + 1} →
          </Link>
        ) : (
          <span className="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 dark:text-slate-500">
            Sau →
          </span>
        )}
      </nav>
    </div>
  )
}

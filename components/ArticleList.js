import Link from '@/components/Link'
import ArticleThumbnail from './ArticleThumbnail'

const ArticleList = ({ slug, title, summary, tags, image }) => {
  const visibleTags = (tags || []).slice(0, 3)

  return (
    <div className="group h-full">
      <Link href={`/blog/${slug}`} className="block h-full">
        <article className="surface-panel relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1">
          <div className="relative overflow-hidden rounded-t-2xl pb-[58%]">
            <ArticleThumbnail slug={slug} title={title} image={image} />
            <div className="from-slate-950/30 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {visibleTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 font-medium text-orange-700 dark:border-orange-700/60 dark:bg-orange-900/30 dark:text-orange-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="mb-3 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-orange-600 dark:text-slate-100 dark:group-hover:text-orange-300">
              {title}
            </h2>

            <p className="line-clamp-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {summary}
            </p>

            <div className="mt-5 inline-flex items-center text-sm font-semibold text-orange-600 dark:text-orange-300">
              Đọc thêm
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </article>
      </Link>
    </div>
  )
}

export default ArticleList

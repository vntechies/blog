import Link from '@/components/Link'
import ArticleThumbnail from './ArticleThumbnail'

const ArticleList = ({ slug, title, summary, tags, image }) => {
  const visibleTags = (tags || []).slice(0, 3)

  return (
    <div className="group h-full">
      <Link href={`/blog/${slug}`} className="block h-full">
        <article className="surface-panel surface-panel-interactive relative flex h-full flex-col overflow-hidden">
          {/* Window chrome: each post is a file open in a terminal */}
          <div className="term-titlebar" aria-hidden="true">
            <span className="flex shrink-0 gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="term-title text-[0.6875rem]">~/blog/{slug}.mdx</span>
          </div>
          <div className="relative overflow-hidden border-b border-line pb-[52%]">
            <ArticleThumbnail slug={slug} title={title} image={image} />
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            {visibleTags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {visibleTags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h2 className="mb-3 text-lg font-bold leading-snug text-fg transition-colors group-hover:text-brand-strong">
              {title}
            </h2>

            <p className="line-clamp-3 text-sm leading-6 text-fg-muted">{summary}</p>

            <div className="action-link mt-auto pt-5">
              <span className="text-success">$</span> Đọc thêm
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
            </div>
          </div>
        </article>
      </Link>
    </div>
  )
}

export default ArticleList

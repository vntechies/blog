import Link from '@/components/Link'
import ArticleThumbnail from './ArticleThumbnail'

const ArticleList = ({ slug, title, summary, tags, image }) => {
  return (
    <div className="group h-full">
      <Link href={`/blog/${slug}`}>
        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800">
          <div className="relative overflow-hidden rounded-t-2xl pb-60">
            <ArticleThumbnail slug={slug} title={title} image={image} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs inline-block rounded-full bg-orange-100 px-3 py-1 font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
              {title}
            </h2>

            <p className="line-clamp-3 flex-1 leading-relaxed text-gray-600 dark:text-gray-300">
              {summary}
            </p>

            <div className="mt-4 flex items-center font-medium text-orange-500 group-hover:text-orange-600 dark:text-orange-400 dark:group-hover:text-orange-300">
              <span className="text-sm">Đọc thêm</span>
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
        </div>
      </Link>
    </div>
  )
}

export default ArticleList

import Link from '@/components/Link'
import ArticleThumbnail from './ArticleThumbnail'

const ArticleList = ({ slug, title, summary, tags, image }) => {
  return (
    <>
      <div className="group bg-day dark:bg-night w-full bg-opacity-50 dark:bg-opacity-50">
        <Link href={`/blog/${slug}`}>
          <button className="c-card block transform overflow-hidden rounded-lg bg-transparent transition duration-500">
            <div className="relative max-h-4 overflow-hidden rounded-lg pb-60">
              <span>
                <ArticleThumbnail slug={slug} title={title} image={image} />
              </span>
            </div>
            <div className="py-4">
              <span className="flex flex-wrap justify-start gap-2">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded border border-gray-700 py-1 px-2 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </span>
              <h2 className="mt-2 mb-2 text-left font-bold hover:underline md:text-xl">{title}</h2>
              <p className="text-left text-sm tracking-wider text-gray-600 dark:text-gray-300">
                {summary}
              </p>
            </div>
          </button>
        </Link>
      </div>
    </>
  )
}

export default ArticleList

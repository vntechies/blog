import Link from '@/components/Link'
import Tag from '@/components/Tag'
import ArticleThumbnail from './ArticleThumbnail'
import formatDate from '@/lib/utils/formatDate'

const Article = ({ slug, date, title, summary, tags, image }) => {
  return (
    <article>
      <div className="space-x-8 space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
        <div className="xl:row-span-2">
          <ArticleThumbnail slug={slug} title={title} image={image} />
        </div>
        <div className="space-y-5 xl:col-span-3">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                  {title}
                </Link>
              </h2>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
            <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
            <small>
              <time dateTime={date}>{formatDate(date)}</time>
            </small>
          </div>
          <div className="text-base font-medium leading-6">
            <Link
              href={`/blog/${slug}`}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Read "${title}"`}
            >
              Đọc thêm &rarr;
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Article

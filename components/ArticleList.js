import Image from 'next/image'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import ArticleThumbnail from './ArticleThumbnail'
import formatDate from '@/lib/utils/formatDate'

const ArticleList = ({ slug, date, title, summary, tags, image }) => {
  return (
    <article className="space-y-5 sm:space-x-0 sm:space-y-5 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-x-8 xl:space-y-2">
      <div className="xl:row-span-2">
        <ArticleThumbnail slug={slug} title={title} image={image} />
      </div>
      <div className="space-y-3 xl:col-span-3">
        <div>
          <h2 className="text-2xl font-bold leading-8 tracking-tight">
            <Link
              alt={`Đọc bài "${title}"`}
              href={`/blog/${slug}`}
              className="text-gray-900 dark:text-gray-100"
            >
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
    </article>
  )
}

export default ArticleList

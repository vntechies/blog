import Image from 'next/image'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import ArticleThumbnail from './ArticleThumbnail'
import formatDate from '@/lib/utils/formatDate'

const ArticleList = ({ slug, date, title, summary, tags, image }) => {
  return (
    <article className="space-x-8 space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
      <div className="xl:row-span-2">
        <ArticleThumbnail slug={slug} title={title} image={image} />
      </div>
      <div className="space-y-3 xl:col-span-3">
        <div>
          <h3 className="text-2xl font-bold leading-8 tracking-tight">
            <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
              {title}
            </Link>
          </h3>
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

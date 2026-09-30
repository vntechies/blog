import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Image from '@/components/Image'
import HorizontalCard from '@/components/HorizontalCard'
import SummaryButton from '@/components/SummaryButton'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { date, title, images } = frontMatter
  const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const cover = images?.[0] || '/static/images/default-ogp.png'

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <SummaryButton
        content={
          typeof children === 'string' ? children : children?.props?.children?.toString() || title
        }
      />

      <article className="surface-panel overflow-hidden px-4 py-8 sm:px-8 lg:px-10">
        <header className="mx-auto max-w-3xl text-center">
          <span className="page-eyebrow mx-auto">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </time>
          </span>
          <PageTitle>{title}</PageTitle>
        </header>

        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-line">
          <Image
            alt={title}
            className="h-auto w-full object-cover"
            src={cover}
            width={1200}
            height={760}
            loading="lazy"
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="prose max-w-none pb-8">{children}</div>
          <Comments frontMatter={frontMatter} />
        </div>

        {(prev || next) && (
          <footer className="mx-auto mt-8 max-w-3xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {prev && (
                <HorizontalCard
                  title={prev.title}
                  image={prev.images[0]}
                  href={`/blog/${prev.slug}`}
                />
              )}
              {next && (
                <HorizontalCard
                  title={next.title}
                  image={next.images[0]}
                  href={`/blog/${next.slug}`}
                />
              )}
            </div>
          </footer>
        )}

        <div className="mx-auto mt-8 max-w-3xl">
          <Link href="/blog" className="action-btn-secondary action-btn-sm">
            ← Quay trở lại blog
          </Link>
        </div>
      </article>
    </SectionContainer>
  )
}

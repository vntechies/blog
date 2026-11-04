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
  const { date, title, images, summary, lastmod } = frontMatter
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
        <nav aria-label="Breadcrumb" className="mx-auto mb-4 max-w-3xl">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-fg-muted">
            <li>
              <Link href="/" className="hover:text-brand-strong">
                Trang chủ
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-brand-strong">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="truncate text-fg">
              {title}
            </li>
          </ol>
        </nav>

        <header className="mx-auto max-w-3xl text-center">
          <span className="page-eyebrow mx-auto">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </time>
          </span>
          <PageTitle>{title}</PageTitle>
          <div className="mt-3 text-sm text-fg-muted">
            {authorDetails &&
              authorDetails.map((author, i) => (
                <span key={author.name}>
                  {i > 0 && <span className="mx-1">·</span>}
                  {!author.slug || author.slug === 'default' ? (
                    <Link
                      href="/about"
                      rel="author"
                      className="font-semibold text-fg hover:text-brand-strong"
                    >
                      VNTechies
                    </Link>
                  ) : (
                    <Link
                      href={`/authors/${author.slug}`}
                      rel="author"
                      className="font-semibold text-fg hover:text-brand-strong"
                    >
                      {author.name}
                    </Link>
                  )}
                </span>
              ))}
          </div>
          {lastmod && (
            <div className="mt-2 text-sm text-fg-muted">
              Cập nhật:{' '}
              <time dateTime={lastmod}>
                {new Date(lastmod).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
              </time>
            </div>
          )}
        </header>

        {summary && <p className="page-lead mx-auto mt-4 max-w-3xl text-center">{summary}</p>}

        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-line">
          <Image
            alt={title}
            className="h-auto w-full object-cover"
            src={cover}
            width={1200}
            height={760}
            priority
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

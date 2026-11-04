import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Share from '@/components/Share'
import HorizontalCard from '@/components/HorizontalCard'
import SummaryButton from '@/components/SummaryButton'
import TocSidebar from '@/components/TocSidebar'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, toc, next, prev, children }) {
  const { slug, date, title, tags, summary, lastmod } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <SummaryButton
        content={
          typeof children === 'string' ? children : children?.props?.children?.toString() || title
        }
      />

      {/* overflow-x-clip (not hidden) so the sidebar can stick */}
      <article className="surface-panel overflow-x-clip px-4 py-8 sm:px-8 lg:px-10">
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

        {/* Stacked below xl: sidebar and text share one centred ~72ch column */}
        <div className="mx-auto mt-10 grid max-w-3xl gap-8 xl:max-w-none xl:grid-cols-[230px,1fr]">
          <aside className="space-y-5">
            <div className="surface-panel-muted p-4 sm:p-5">
              <h2 className="panel-label mb-4">Tác giả</h2>
              <ul className="space-y-4">
                {authorDetails &&
                  authorDetails.map((author) => {
                    const avatar = author.avatar && (
                      <Image
                        src={author.avatar}
                        width={44}
                        height={44}
                        alt={author.name}
                        className="h-11 w-11 shrink-0 rounded-full object-cover"
                        quality={75}
                        loading="lazy"
                      />
                    )
                    // Scale the name down as it gets longer so it fits the sidebar.
                    const len = author.name?.length || 0
                    const nameSize = len <= 14 ? 'text-base' : len <= 22 ? 'text-sm' : 'text-xs'
                    const nameClass = `break-words font-semibold leading-tight ${nameSize}`
                    const name =
                      !author.slug || author.slug === 'default' ? (
                        <Link
                          href="/about"
                          rel="author"
                          className={`${nameClass} text-fg hover:text-brand-strong`}
                        >
                          VNTechies
                        </Link>
                      ) : author.slug ? (
                        <Link
                          href={`/authors/${author.slug}`}
                          rel="author"
                          className={`${nameClass} text-fg hover:text-brand-strong`}
                        >
                          {author.name}
                        </Link>
                      ) : (
                        <span className={`${nameClass} text-fg`}>{author.name}</span>
                      )
                    return (
                      <li className="flex items-center space-x-3" key={author.name}>
                        {avatar}
                        <div className="flex min-w-0 flex-col">
                          {name}
                          {author.facebook && (
                            <Link
                              href={author.facebook}
                              className="truncate text-xs text-brand-strong hover:text-brand-soft"
                            >
                              {author.facebook.replace('https://fb.me/', '@')}
                            </Link>
                          )}
                        </div>
                      </li>
                    )
                  })}
              </ul>
            </div>

            {tags && (
              <div className="surface-panel-muted p-4 sm:p-5">
                <h2 className="panel-label mb-4">Chủ đề</h2>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            )}

            {frontMatter.hasInlineToc && toc && toc.length > 0 && (
              <nav
                aria-label="Mục lục"
                className="surface-panel-muted hidden p-4 text-sm sm:p-5 xl:sticky xl:top-24 xl:block xl:max-h-[calc(100vh-8rem)] xl:self-start xl:overflow-y-auto"
              >
                <h2 className="panel-label mb-4">Mục lục</h2>
                <div className="toc-sidebar">
                  <TocSidebar toc={toc} />
                </div>
              </nav>
            )}
          </aside>

          <div className="min-w-0 xl:max-w-3xl">
            <div className="prose max-w-none pb-8 pt-2">{children}</div>
            <Share fileName={frontMatter.fileName} href={`/blog/${frontMatter.slug}`} />
            <div className="mt-8">
              <Comments frontMatter={frontMatter} />
            </div>

            {(next || prev) && (
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
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
            )}

            <div className="pt-8">
              <Link href="/blog" className="action-btn-secondary action-btn-sm">
                ← Quay trở lại blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}

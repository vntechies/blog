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

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, date, title, tags } = frontMatter

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

      <article className="surface-panel overflow-hidden px-4 py-8 sm:px-8 lg:px-10">
        <header className="mx-auto max-w-3xl text-center">
          <span className="page-eyebrow mx-auto">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </time>
          </span>
          <PageTitle>{title}</PageTitle>
        </header>

        <div className="mt-10 grid gap-8 xl:grid-cols-[230px,1fr]">
          <aside className="space-y-5 xl:sticky xl:top-28 xl:self-start">
            <div className="surface-panel-muted p-4 sm:p-5">
              <h2 className="text-xs mb-4 font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Tác giả
              </h2>
              <ul className="space-y-4">
                {authorDetails &&
                  authorDetails.map((author) => (
                    <li className="flex items-center space-x-3" key={author.name}>
                      {author.slug ? (
                        <Link
                          href={`/authors/${author.slug}`}
                          className="flex min-w-0 items-center space-x-3"
                        >
                          {author.avatar && (
                            <Image
                              src={author.avatar}
                              width={44}
                              height={44}
                              alt={author.name}
                              className="h-11 w-11 rounded-full object-cover"
                              quality={75}
                              loading="lazy"
                            />
                          )}
                          <dl className="min-w-0 text-sm font-medium">
                            <dd className="truncate text-slate-900 hover:text-orange-600 dark:text-slate-100 dark:hover:text-orange-300">
                              {author.name}
                            </dd>
                          </dl>
                        </Link>
                      ) : (
                        <>
                          {author.avatar && (
                            <Image
                              src={author.avatar}
                              width={44}
                              height={44}
                              alt={author.name}
                              className="h-11 w-11 rounded-full object-cover"
                              quality={75}
                              loading="lazy"
                            />
                          )}
                          <dl className="min-w-0 text-sm font-medium">
                            <dd className="truncate text-slate-900 dark:text-slate-100">
                              {author.name}
                            </dd>
                          </dl>
                        </>
                      )}
                      <dl className="min-w-0 text-sm font-medium">
                        <dd>
                          {author.facebook && (
                            <Link
                              href={author.facebook}
                              className="text-orange-600 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-200"
                            >
                              {author.facebook.replace('https://fb.me/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
              </ul>
            </div>

            {tags && (
              <div className="surface-panel-muted p-4 sm:p-5">
                <h2 className="text-xs mb-4 font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Chủ đề
                </h2>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            )}
          </aside>

          <div>
            <div className="prose max-w-none pb-8 pt-2 dark:prose-dark">{children}</div>
            <Share fileName={frontMatter.fileName} href={`/blog/${frontMatter.slug}`} />
            <div className="mt-8">
              <Comments frontMatter={frontMatter} />
            </div>

            {(next || prev) && (
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {prev && (
                  <HorizontalCard
                    title={prev.title}
                    image={prev.images?.[0]}
                    href={`/blog/${prev.slug}`}
                  />
                )}
                {next && (
                  <HorizontalCard
                    title={next.title}
                    image={next.images?.[0]}
                    href={`/blog/${next.slug}`}
                  />
                )}
              </div>
            )}

            <div className="pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-100 dark:border-orange-700/60 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50"
              >
                ← Quay trở lại blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}

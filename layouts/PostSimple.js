import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Image from '@/components/Image'
import HorizontalCard from '@/components/HorizontalCard'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { date, title, images } = frontMatter
  const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="mb-8 mt-4">
            <Image
              alt={title}
              className="rounded object-cover"
              src={images[0]}
              layout="responsive"
              width={640}
              height={400}
              loading="lazy"
            />
          </div>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="grid grid-cols-6 gap-4 divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose prose-neutral col-span-6 max-w-none pt-10 pb-8 dark:prose-dark md:col-span-4 md:col-start-2">
                {children}
              </div>
            </div>
            <Comments frontMatter={frontMatter} />
            <footer>
              <div className="flex grid flex-col gap-5 text-sm font-medium sm:flex-row sm:justify-between sm:text-base md:grid-cols-2">
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
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}

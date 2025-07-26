import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { CourseSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Image from '@/components/Image'
import Share from '@/components/Share'
import HorizontalCard from '@/components/HorizontalCard'
import formatDate from '@/lib/utils/formatDate'
import { useRouter } from 'next/router'

export default function CourseSimple({
  frontMatter,
  authorDetails,
  next,
  prev,
  posts = [],
  otherCourses = [],
  children,
}) {
  const router = useRouter()
  const { index, title, slug, summary, date, readingTime, images, fileName } = frontMatter

  return (
    <SectionContainer>
      {index === 0 && (
        <CourseSEO
          courseItems={posts}
          url={`${siteMetadata.siteUrl}/courses/${slug}`}
          {...frontMatter}
          showCanonical={false}
        />
      )}
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6 xl:pt-12">
            <div className="space-y-1 text-center">
              <div className="max-w-2lg container mx-auto">
                <h1 className="text-2xl font-bold leading-9 tracking-tight text-black dark:text-gray-50 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
                  {title}
                </h1>
              </div>
              {summary && (
                <div className="flex justify-center space-x-4">
                  <div>
                    <p className="text-medium leading-6 text-gray-500 dark:text-gray-400 ">
                      {summary}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex flex-row items-center justify-center gap-2 pt-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <dt className="sr-only">Đăng vào</dt>
                <dd className="">
                  <time dateTime={date} className="text-sm font-semibold">
                    {formatDate(date)}
                  </time>
                </dd>{' '}
                {readingTime && (
                  <>
                    • <span>{`${readingTime.text.replace('min read', 'phút')}`}</span>
                  </>
                )}
              </div>
            </div>
          </header>

          <div className="visible pr-4 pt-6 pb-6 md:invisible md:h-0 md:pt-0 md:pb-0 md:pr-0 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
            <h3 className="dark:text-secondary-400 text-xl font-bold text-primary-600">Nội dung</h3>
            <ul className="my-4">
              {posts.map((post) => (
                <li key={post.slug}>
                  <a
                    className={`my-2 block rounded-md py-4 px-2 text-sm text-gray-800 hover:bg-gray-200 dark:text-gray-300 hover:dark:bg-gray-800 ${
                      router.asPath === `/courses/${post.slug}`
                        ? 'bg-gray-200 font-bold text-primary-400 dark:bg-gray-800 dark:text-primary-400'
                        : ''
                    }`}
                    href={`/courses/${post.slug}`}
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 md:grid md:grid-cols-3 md:gap-x-4 md:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="invisible pt-0 pb-0 pr-4 md:visible md:pt-6 md:pb-10 md:pr-0 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <div className="sticky top-8 h-0 overflow-y-scroll md:h-[calc(100vh-5.75rem)]">
                <h3 className="dark:text-secondary-400 text-xl font-bold text-primary-600">
                  Nội dung khoá học
                </h3>
                <ul className="my-4">
                  {posts.map((post) => (
                    <li
                      key={post.slug}
                      ref={
                        router.asPath === `/courses/${post.slug}`
                          ? (el) => {
                              if (el) el.scrollIntoView({ behavior: 'smooth' })
                            }
                          : null
                      }
                    >
                      <a
                        className={`my-2 block rounded-md py-4 px-2 text-sm text-gray-800 hover:bg-gray-200 dark:text-gray-300 hover:dark:bg-gray-800 ${
                          router.asPath === `/courses/${post.slug}`
                            ? 'bg-gray-200 font-bold text-primary-400 dark:bg-gray-800 dark:text-primary-400'
                            : ''
                        }`}
                        href={`/courses/${post.slug}`}
                      >
                        {post.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="hidden border-t border-gray-200 pt-12 dark:border-gray-700 md:block">
                  <h3 className="dark:text-secondary-400 text-xl font-bold text-primary-600">
                    Khoá học khác
                  </h3>
                  <div className="flex flex-col gap-5 text-sm font-medium">
                    {otherCourses.map((course) => (
                      <HorizontalCard
                        key={course.title}
                        title={course.title}
                        href={`/courses/${course.slug}`}
                        image={course.images?.[0]}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200 px-2 dark:divide-gray-700 md:col-span-2 md:row-span-1 md:pb-0 lg:px-8">
              {images && images[0] && (
                <div className="prose max-w-none pt-10 text-base dark:prose-dark">
                  <div className="mb-8 mt-4">
                    <Image
                      alt={title}
                      className="rounded object-cover"
                      src={images[0]}
                      layout="responsive"
                      width={640}
                      height={400}
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
              <Share fileName={fileName} href={`/courses/${slug}`} />
              <div className="prose max-w-none pt-10 pb-8 text-base dark:prose-dark">
                {children}
              </div>
              <footer>
                <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                  {!prev && (
                    <div className="pt-4 xl:pt-8">
                      <button
                        rel="previous"
                        className="cursor-auto disabled:opacity-50"
                        disabled={!prev}
                      >
                        👈 Bài trước
                      </button>
                    </div>
                  )}
                  {prev && (
                    <div className="pt-4 xl:pt-8">
                      👈{' '}
                      <Link
                        href={`/courses/${prev.slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {prev.title}
                      </Link>
                    </div>
                  )}
                  {!next && (
                    <div className="pt-4 xl:pt-8">
                      <button
                        rel="previous"
                        className="cursor-auto disabled:opacity-50"
                        disabled={!next}
                      >
                        Bài sau 👉
                      </button>
                    </div>
                  )}
                  {next && (
                    <div className="pt-4 xl:pt-8">
                      <Link
                        href={`/courses/${next.slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {next.title}
                      </Link>{' '}
                      👉
                    </div>
                  )}
                </div>
              </footer>
              <Comments frontMatter={frontMatter} />
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}

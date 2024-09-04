import fs from 'fs'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import path from 'path'
import { useRouter } from 'next/router'
import Share from '@/components/Share'
import Image from '@/components/Image'
import formatDate from '@/lib/utils/formatDate'
import { CourseSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import HorizontalCard from '@/components/HorizontalCard'

const root = process.cwd()

const DEFAULT_LAYOUT = 'CourseSimple'

export async function getStaticPaths() {
  const posts = getFiles('courses')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const all = await getAllFilesFrontMatter('courses')
  const allPosts = all.reverse()
  const post = await getFileBySlug('courses', params.slug.join('/'))
  const course = params.slug[0]
  const sameCoursePosts = allPosts
    .filter((p) => p.draft !== true && p.slug.split('/')[0] === course)
    .sort((a, b) => a.index - b.index)
  const postIndex = post.frontMatter.index
  const prev =
    allPosts.filter((p) => p.slug.split('/')[0] === course && p.index === postIndex - 1)[0] || null
  const next =
    allPosts.filter((p) => p.slug.split('/')[0] === course && p.index === postIndex + 1)[0] || null

  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)
  const courses = await getAllFilesFrontMatter('courses')
  let otherCourses = courses.filter((c) => c.slug.split('/')[0] !== course && c.index === 0)

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts, `courses/${course}/feed.xml`)
    const rssPath = path.join(root, 'public', 'courses', course)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return {
    props: {
      post,
      authorDetails,
      posts: sameCoursePosts,
      otherCourses: otherCourses,
      prev: prev,
      next: next,
    },
  }
}

export default function Course({ post, authorDetails, posts, otherCourses, prev, next }) {
  const router = useRouter()
  const { mdxSource, toc, frontMatter } = post

  return (
    <>
      {frontMatter.index === 0 && (
        <CourseSEO
          courseItems={posts}
          url={`${siteMetadata.siteUrl}/courses/${frontMatter.slug}`}
          {...frontMatter}
          showCanonical={false}
        />
      )}

      <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header className="pt-6 xl:pb-6 xl:pt-12">
          <div className="space-y-1 text-center">
            <div className="max-w-2lg container mx-auto">
              <h1 className="text-2xl font-bold leading-9 tracking-tight text-black dark:text-gray-50 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
                {frontMatter.title}
              </h1>
            </div>
            <div className="flex justify-center space-x-4">
              <div>
                <p className="text-medium leading-6 text-gray-500 dark:text-gray-400 ">
                  {frontMatter.summary}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 pt-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <dt className="sr-only">Đăng vào</dt>
              <dd className="">
                <time dateTime={frontMatter.date} className="text-sm font-semibold">
                  {formatDate(frontMatter.date)}
                </time>
              </dd>{' '}
              • <span>{`${frontMatter.readingTime.text.replace('min read', 'phút')}`}</span>
            </div>
          </div>
        </header>

        <div className="visible pr-4 pt-6 pb-6 md:invisible md:h-0 md:pt-0 md:pb-0 md:pr-0 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
          <h3 className="dark:text-secondary-400 text-xl font-bold text-primary-600">Nội dung</h3>
          <ul className="my-4">
            {posts.map((post) => {
              return (
                <li key={post}>
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
              )
            })}
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
                {posts.map((post) => {
                  return (
                    <li
                      key={post}
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
                  )
                })}
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
                      image={course.images[0]}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="divide-y divide-gray-200 px-2 dark:divide-gray-700 md:col-span-2 md:row-span-1 md:pb-0 lg:px-8">
            <div className="prose max-w-none pt-10 text-base dark:prose-dark">
              <div className="mb-8 mt-4">
                <Image
                  alt={'title'}
                  className="rounded object-cover"
                  src={frontMatter.images[0]}
                  layout="responsive"
                  width={640}
                  height={400}
                  quality={75}
                  loading="lazy"
                />
              </div>
            </div>
            <Share fileName={frontMatter.fileName} href={`/courses/${frontMatter.slug}`} />
            <div className="prose max-w-none pt-10 pb-8 text-base dark:prose-dark">
              <MDXLayoutRenderer
                layout={frontMatter.layout || DEFAULT_LAYOUT}
                toc={toc}
                mdxSource={mdxSource}
                frontMatter={frontMatter}
                next={next}
                prev={prev}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

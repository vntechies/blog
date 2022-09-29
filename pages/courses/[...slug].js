import fs from 'fs'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import Image from 'next/image'
import path from 'path'
import { useRouter } from 'next/router'

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
  const sameCoursePosts = allPosts.filter(
    (p) => p.draft !== true && p.slug.split('/')[0] === course
  )

  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts, `courses/${course}/feed.xml`)
    const rssPath = path.join(root, 'public', 'courses', course)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return { props: { post, authorDetails, posts: sameCoursePosts } }
}

export default function Course({ post, authorDetails, posts, courses }) {
  const router = useRouter()
  const { mdxSource, toc, frontMatter } = post

  return (
    <>
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
                <p className="text-sm leading-6 text-gray-500 dark:text-gray-400 ">
                  {frontMatter.summary}
                </p>
              </div>
            </div>
          </div>
        </header>
        <div
          className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 md:grid md:grid-cols-3 md:gap-x-4 md:divide-y-0"
          style={{ gridTemplateRows: 'auto 1fr' }}
        >
          <div className="pt-6 pb-10 pr-4 md:pr-0 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
            <div className="sticky top-8">
              <h3 className="dark:text-secondary-400 text-xl font-bold text-primary-600">
                Nội dung
              </h3>
              <ul className="my-4">
                {posts.map((post) => {
                  return (
                    <li key={post}>
                      <a
                        className={`my-2 block rounded-md py-4 px-2 text-sm text-slate-800 hover:bg-slate-200 dark:text-slate-300 hover:dark:bg-slate-800 ${
                          router.asPath === `/courses/${post.slug}`
                            ? 'dark:text-secondary-400 bg-slate-200 font-bold text-primary-700 dark:bg-slate-800'
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
                />
              </div>
              <div className="prose max-w-none pt-10 pb-8 text-base dark:prose-dark">
                <MDXLayoutRenderer
                  layout={frontMatter.layout || DEFAULT_LAYOUT}
                  toc={toc}
                  mdxSource={mdxSource}
                  frontMatter={frontMatter}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

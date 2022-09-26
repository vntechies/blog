import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter, getFileBySlug } from '@/lib/mdx'
import { getAllSeries } from '@/lib/series'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import Image from 'next/image'
import path from 'path'
import { MDXLayoutRenderer } from '@/components/MDXComponents'

const root = process.cwd()

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const allSeries = await getAllSeries('blog')

  return {
    paths: Object.keys(allSeries).map((series) => ({
      params: {
        series,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const series = await getFileBySlug('series', params.series)

  const filteredPosts = allPosts.filter(
    (post) =>
      post.draft !== true &&
      post.series &&
      post.series.map((s) => kebabCase(s)).includes(params.series)
  )

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `series/${params.series}/feed.xml`)
    const rssPath = path.join(root, 'public', 'series', params.series)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return { props: { posts: filteredPosts, series: series } }
}

export default function Series({ posts, series }) {
  // Capitalize first letter and convert space to dash
  const title = series.title
  const { mdxSource, toc, frontMatter } = series

  return (
    <>
      <TagSEO
        title={`${title} - ${siteMetadata.author}`}
        description={`${title} series - ${siteMetadata.author}`}
      />
      <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header className="pt-6 xl:pb-6 xl:pt-12">
          <div className="space-y-1 text-center">
            <div className="max-w-2lg container mx-auto">
              <h1 className="font-thai text-2xl font-bold leading-9 tracking-tight text-black dark:text-gray-50 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
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
                        className="my-2 block rounded-md py-4 px-2 text-sm text-slate-800 hover:bg-slate-200 dark:text-slate-300 hover:dark:bg-slate-800"
                        href={post.slug}
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
                  alt={title}
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
      <ListLayout posts={posts} title={title} />
    </>
  )
}

import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter, getFileBySlug } from '@/lib/mdx'
import { getAllSeries } from '@/lib/series'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
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

  return { props: { posts: filteredPosts, series: series.frontMatter } }
}

export default function Series({ posts, series }) {
  // Capitalize first letter and convert space to dash
  const { title, images, summary } = series
  return (
    <>
      <TagSEO title={`${title} - ${siteMetadata.author}`} description={summary} images={images} />
      <ListLayout posts={posts} title={title} />
    </>
  )
}

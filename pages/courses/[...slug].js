import fs from 'fs'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import path from 'path'

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

  // Get mentor details if mentors field exists in frontMatter
  let mentorDetails = []
  if (post.frontMatter.mentors && Array.isArray(post.frontMatter.mentors)) {
    const mentorPromise = post.frontMatter.mentors.map(async (mentor) => {
      const mentorResult = await getFileBySlug('authors', [mentor])
      return mentorResult.frontMatter
    })
    mentorDetails = await Promise.all(mentorPromise)
  }

  const courses = await getAllFilesFrontMatter('courses')
  let otherCourses = courses.filter((c) => c.slug.split('/')[0] !== course && c.index === 0)

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts, `courses/${course}/feed.xml`)
    const rssPath = path.join(process.cwd(), 'public', 'courses', course)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return {
    props: {
      post,
      authorDetails,
      mentorDetails,
      posts: sameCoursePosts,
      otherCourses: otherCourses,
      prev: prev,
      next: next,
    },
  }
}

export default function Course({
  post,
  authorDetails,
  mentorDetails,
  posts,
  otherCourses,
  prev,
  next,
}) {
  const { mdxSource, toc, frontMatter } = post
  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      toc={toc}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
      authorDetails={authorDetails}
      mentorDetails={mentorDetails}
      posts={posts}
      otherCourses={otherCourses}
      prev={prev}
      next={next}
    />
  )
}

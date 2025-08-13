import fs from 'fs'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { CourseSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
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
  let otherCourses = courses
    .filter((c) => c.index === 0) // Only main course pages
    .filter((c) => c.slug !== post.slug) // Exclude current course
    .sort((a, b) => {
      // Sort by priority: paid courses first, then free courses
      if (a.isFree === b.isFree) return 0
      return a.isFree ? 1 : -1
    })
    .slice(0, 6) // Limit to 6 courses

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
  const { title, summary, date, lastmod, images, slug, index, price, startDate, duration } =
    frontMatter

  // Generate proper SEO data
  const courseUrl = `${siteMetadata.siteUrl}/courses/${slug}`
  const courseImages = images && images.length > 0 ? images : [siteMetadata.socialBanner]
  const courseDescription = summary || `${title} - Khóa học tại VNTechies`
  const courseTitle = `${title} | VNTechies`

  return (
    <>
      <CourseSEO
        title={courseTitle}
        summary={courseDescription}
        date={startDate || date}
        lastmod={lastmod}
        url={courseUrl}
        images={courseImages}
        courseItems={index === 0 ? posts : null}
        canonicalUrl={courseUrl}
        price={price}
        duration={duration}
      />
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
    </>
  )
}

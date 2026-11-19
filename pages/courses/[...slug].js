import fs from 'fs'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { BlogSEO, CourseSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { courseSocialImages, coursesSocialImage } from '@/data/courseSocialImages'
import { premiumCatalog } from '@/data/courseCatalog'
import path from 'path'

const DEFAULT_LAYOUT = 'CourseSimple'

// Courses whose price is not yet confirmed; they emit no offers in markup.
const PRICE_UNCONFIRMED = new Set(['data-engineer-bootcamp'])

// A course is its folder: 'aws/saa/gioi-thieu' -> 'aws/saa'
const courseOf = (slug) => slug.split('/').slice(0, -1).join('/')

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
  const course = params.slug.slice(0, -1).join('/')
  const sameCoursePosts = allPosts
    .filter((p) => p.draft !== true && courseOf(p.slug) === course)
    .sort((a, b) => a.index - b.index)
  const postIndex = post.frontMatter.index
  const prev =
    allPosts.filter((p) => courseOf(p.slug) === course && p.index === postIndex - 1)[0] || null
  const next =
    allPosts.filter((p) => courseOf(p.slug) === course && p.index === postIndex + 1)[0] || null

  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return { ...authorResults.frontMatter, slug: author }
  })
  const authorDetails = await Promise.all(authorPromise)

  // Get mentor details if mentors field exists in frontMatter
  let mentorDetails = []
  if (post.frontMatter.mentors && Array.isArray(post.frontMatter.mentors)) {
    const mentorPromise = post.frontMatter.mentors.map(async (mentor) => {
      const mentorResult = await getFileBySlug('authors', [mentor])
      return { ...mentorResult.frontMatter, slug: mentor }
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

  // Premium catalog entry for the course's `gioi-thieu` page (if any)
  const catalogSlug = `${course}/gioi-thieu`
  const catalogEntry = premiumCatalog.find((c) => c.slug === catalogSlug) || null

  // rss
  const feedPosts = [...sameCoursePosts].sort((a, b) => new Date(b.date) - new Date(a.date))
  if (feedPosts.length > 0) {
    const rss = generateRss(feedPosts, `courses/${course}/feed.xml`, 'courses')
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
      catalogEntry,
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
  catalogEntry,
}) {
  const { mdxSource, toc, frontMatter } = post
  const { title, summary, date, lastmod, images, slug, index, price, isFree } = frontMatter

  const course = courseOf(slug)

  const courseUrl = `${siteMetadata.siteUrl}/courses/${slug}`
  const socialImage = courseSocialImages[courseOf(slug)]
  const courseImages = socialImage
    ? [socialImage]
    : images && images.length > 0
    ? images
    : [coursesSocialImage]
  const courseDescription = summary || `${title} - Khóa học tại VNTechies`

  // Lessons titled 'Ngày N - Topic' lead with the topic in <title> (the H1 is unchanged)
  const day = title.match(/^Ngày (\d+)\s*[-:]\s*(.+)$/)
  const series = (posts.find((p) => p.index === 0)?.title || '').replace(/[^\p{L}\p{N}]+$/u, '')
  const courseTitle =
    day && series ? `${day[2].trim()} – ${series} (ngày ${day[1]})` : `${title} | VNTechies`

  const instructors = mentorDetails.map((m) => ({
    '@type': 'Person',
    name: m.name,
    ...(m.occupation ? { jobTitle: m.occupation } : {}),
    ...(m.url ? { url: m.url } : {}),
  }))

  const fromPrice = catalogEntry ? catalogEntry.fromPrice : null
  const code = catalogEntry ? catalogEntry.code : undefined
  const level = catalogEntry ? catalogEntry.level : undefined
  const noOffers = PRICE_UNCONFIRMED.has(courseOf(slug)) || fromPrice == null

  const lessonBreadcrumbs = [
    { name: 'Trang chủ', item: `${siteMetadata.siteUrl}/` },
    { name: 'Khoá học', item: `${siteMetadata.siteUrl}/courses` },
    { name: course, item: `${siteMetadata.siteUrl}/courses/${course}/gioi-thieu` },
    { name: title },
  ]

  return (
    <>
      {index === 0 ? (
        <CourseSEO
          title={courseTitle}
          name={title}
          summary={courseDescription}
          url={courseUrl}
          images={courseImages}
          canonicalUrl={courseUrl}
          isFree={isFree}
          price={price}
          courseCode={code}
          educationalLevel={level}
          fromPrice={fromPrice}
          instructors={instructors}
          noOffers={noOffers}
        />
      ) : (
        <BlogSEO
          {...frontMatter}
          title={courseTitle}
          headline={title}
          summary={courseDescription}
          url={courseUrl}
          images={courseImages}
          canonicalUrl={courseUrl}
          authorDetails={authorDetails}
          breadcrumbs={lessonBreadcrumbs}
        />
      )}
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

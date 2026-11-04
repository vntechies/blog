import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getFileBySlug, getFiles } from '@/lib/mdx'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticPaths() {
  const posts = getFiles('authors')
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
  const authorDetails = await getFileBySlug('authors', params.slug.join('/'))

  const allPosts = await getAllFilesFrontMatter('blog')
  let authorPosts = allPosts.filter((post) => post.authors?.includes(params.slug.join('/')))
  const totalPostsCount = authorPosts.length
  authorPosts = authorPosts.slice(0, 3) // Show latest 3 posts

  return {
    props: {
      authorDetails,
      authorPosts,
      totalPostsCount,
      slug: params.slug.join('/'),
    },
  }
}

export default function AuthorPage({ authorDetails, authorPosts, totalPostsCount, slug }) {
  const { mdxSource, frontMatter } = authorDetails
  const { name, occupation, company, bio, avatar, facebook, linkedin, github, website, url } =
    frontMatter

  const authorUrl = `${siteMetadata.siteUrl}/authors/${slug}`
  const sameAs = [facebook, linkedin, github, website, url].filter(Boolean)

  const profileData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name,
    ...(occupation ? { jobTitle: occupation } : {}),
    ...(avatar
      ? { image: avatar.startsWith('http') ? avatar : `${siteMetadata.siteUrl}${avatar}` }
      : {}),
    url: authorUrl,
    ...(sameAs.length ? { sameAs } : {}),
  }

  return (
    <>
      <PageSEO
        title={`${name} - ${occupation} | ${siteMetadata.siteName}`}
        description={
          bio ||
          `Tìm hiểu về ${name}, ${occupation}${company ? ` tại ${company}` : ''} trên VNTechies`
        }
        structuredData={profileData}
        noindex={slug === 'default'}
      />
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
        authorPosts={authorPosts}
        totalPostsCount={totalPostsCount}
      />
    </>
  )
}

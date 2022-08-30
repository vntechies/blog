import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getFileBySlug, getFiles } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'DocumentLayout'

export async function getStaticProps({ params }) {
  console.log(params)
  const documentDetails = await getFileBySlug('docs', params.slug.join('/'))
  return { props: { documentDetails } }
}

export async function getStaticPaths() {
  const posts = getFiles('docs')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export default function Document({ documentDetails }) {
  const { mdxSource, frontMatter } = documentDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}

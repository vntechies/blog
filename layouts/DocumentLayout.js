import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function DocumentLayout({ children, frontMatter }) {
  const { title, canonicalUrl, noindex } = frontMatter

  return (
    <>
      <PageSEO
        title={`${title} - ${siteMetadata.siteName}`}
        description={frontMatter.summary || `${title} - ${siteMetadata.siteName}`}
        canonicalUrl={canonicalUrl ? `${siteMetadata.siteUrl}${canonicalUrl}` : undefined}
        noindex={noindex || !!canonicalUrl}
      />
      <article className="surface-panel overflow-hidden px-4 py-8 sm:px-8 lg:px-10">
        <header className="mb-8">
          <span className="page-eyebrow">Tài liệu</span>
          <h1 className="page-heading">{title}</h1>
        </header>
        <div className="prose max-w-none pb-4">{children}</div>
      </article>
    </>
  )
}

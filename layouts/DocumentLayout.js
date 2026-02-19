import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function DocumentLayout({ children, frontMatter }) {
  const { title } = frontMatter

  return (
    <>
      <PageSEO
        title={`${title} - ${siteMetadata.title}`}
        description={`${title} - ${siteMetadata.title}`}
      />
      <article className="surface-panel overflow-hidden px-4 py-8 sm:px-8 lg:px-10">
        <header className="mb-8">
          <span className="page-eyebrow">Tài liệu</span>
          <h1 className="page-heading text-slate-900 dark:text-slate-100">{title}</h1>
        </header>
        <div className="prose max-w-none pb-4 dark:prose-dark">{children}</div>
      </article>
    </>
  )
}

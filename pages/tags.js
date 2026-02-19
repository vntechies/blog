import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO
        title={`Tags - ${siteMetadata.headerTitle}`}
        description="Toàn bộ các tags trong website này"
      />
      <div className="space-y-8">
        <header>
          <span className="page-eyebrow">Phân loại chủ đề</span>
          <h1 className="page-heading text-slate-900 dark:text-slate-100">Tags</h1>
          <p className="page-lead">Tất cả nhãn được gắn cho các bài viết trên VNTechies.</p>
        </header>

        <section className="surface-panel p-6 sm:p-8">
          <div className="flex flex-wrap gap-3">
            {Object.keys(tags).length === 0 && (
              <p className="text-sm text-slate-600 dark:text-slate-300">No tags found.</p>
            )}
            {sortedTags.map((t) => {
              return (
                <Link
                  key={t}
                  href={`/tags/${kebabCase(t)}`}
                  className="text-xs inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 font-semibold uppercase tracking-wide text-slate-700 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <span>{t.split(' ').join('-')}</span>
                  <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                    {tags[t]}
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}

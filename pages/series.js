import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const series = await getAllFilesFrontMatter('series')
  return { props: { series: series } }
}

export default function Series({ series }) {
  return (
    <>
      <PageSEO
        title={`Series - ${siteMetadata.headerTitle}`}
        description={`Series - ${siteMetadata.description}`}
      />
      <div className="space-y-10">
        <header>
          <span className="page-eyebrow">Nội dung theo chủ đề</span>
          <h1 className="page-heading text-slate-900 dark:text-slate-100">Series</h1>
          <p className="page-lead">
            Tổng hợp các bài viết được xếp theo lộ trình để học liền mạch.
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {series.length === 0 && (
              <div className="surface-panel col-span-full p-8 text-center text-sm text-slate-600 dark:text-slate-300">
                No series found.
              </div>
            )}
            {series.map((d) => {
              return (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.summary}
                  imgSrc={d.images[0]}
                  href={`/series/${d.slug}`}
                />
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}

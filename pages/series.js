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
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="md:text-6xl text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14">
            📦 Series
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Tổng hợp các bài viết theo chủ đề
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {series.length === 0 && 'No series found.'}
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
        </div>
      </div>
    </>
  )
}

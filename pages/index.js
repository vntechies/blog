import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

import FAQ from '@/components/home/FAQ'
import AWSCert from '@/components/home/AWSCert'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import ArticleList from '@/components/ArticleList'
import FreeCourses from '@/components/home/FreeCourses'

const MAX_DISPLAY = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <Features />
      {/* TODO */}
      {/* <Team /> */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="md:text-6xl text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14">
            🌟 Bài viết mới nhất
          </h2>
        </div>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {!posts.length && 'Không có bài viết nào.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              return (
                <ArticleList
                  key={frontMatter.title}
                  {...frontMatter}
                  image={frontMatter.images[0]}
                />
              )
            })}
          </div>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link alt="Tất cả bài viết" href="/blog" aria-label="all posts">
            <button className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
              🗄️ Tất cả bài viết &rarr;
            </button>
          </Link>
        </div>
      )}
      <FreeCourses />
      <AWSCert />
      <FAQ />
    </>
  )
}

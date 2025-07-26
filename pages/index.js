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
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
              <span className="mr-2">🌟</span>Cập nhật hàng tuần
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Bài viết{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                mới nhất
              </span>
            </h2>
            <p className="text-lg mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              Khám phá những kiến thức và kinh nghiệm mới nhất từ cộng đồng VNTechies
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
            {!posts.length && (
              <div className="col-span-full py-12 text-center">
                <p className="text-gray-500 dark:text-gray-400">Không có bài viết nào.</p>
              </div>
            )}
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

          {posts.length > MAX_DISPLAY && (
            <div className="mt-12 text-center">
              <Link alt="Tất cả bài viết" href="/blog" aria-label="all posts">
                <button className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:bg-orange-600 hover:shadow-xl">
                  🗄️ Tất cả bài viết
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
      <FreeCourses />
      <AWSCert />
      <FAQ />
    </>
  )
}

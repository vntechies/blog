import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

import NewsletterForm, { BlogNewsletterForm } from '@/components/NewsletterForm'
import Article from '@/components/Article'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
        <div className="pt-6">
          <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Xin chào 👋
          </h1>
          <h2 className="prose text-lg text-gray-600 dark:text-gray-400">
            {`Chào mừng tới VNTechies Dev Blog 🇻🇳 Tech blog dành cho người Việt yêu công nghệ 👨‍💻👩‍💻.`}
          </h2>
        </div>
        <div className="mx-2 my-12 flex w-96 items-center justify-center">
          <BlogNewsletterForm title="Nhận thông tin từ VNTechies 📮" />
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            🌟 Bài viết mới nhất
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'Không có bài viết nào.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            return (
              <li key={frontMatter.slug} className="py-12">
                <Article {...frontMatter} image={frontMatter.images[0]} />
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            🗄️ Tất cả bài viết &rarr;
          </Link>
        </div>
      )}
    </>
  )
}

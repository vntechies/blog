import { useState } from 'react'
import Pagination from '@/components/Pagination'
import ArticleList from '@/components/ArticleList'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const tags = frontMatter.tags || []
    const searchContent = frontMatter.title + frontMatter.summary + tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <section className="pb-4">
        <div className="mb-8">
          <span className="page-eyebrow">Kho tri thức</span>
          <h1 className="page-heading text-slate-900 dark:text-slate-100">{title}</h1>
          <p className="page-lead">Tìm kiếm bài viết theo tiêu đề, tóm tắt hoặc chủ đề.</p>
        </div>
        <div className="surface-panel-muted relative max-w-xl p-3">
          <div className="relative">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Tìm bài viết"
              className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-sm text-slate-800 placeholder:text-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-orange-500/30"
            />
            <svg
              className="absolute right-4 top-3.5 h-5 w-5 text-slate-400 dark:text-slate-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {!displayPosts.length && (
            <div className="surface-panel col-span-full p-8 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {searchValue ? 'Không tìm thấy bài viết phù hợp.' : 'Không có bài viết nào.'}
              </p>
            </div>
          )}
          {displayPosts.map((frontMatter) => {
            return (
              <ArticleList key={frontMatter.title} {...frontMatter} image={frontMatter.images[0]} />
            )
          })}
        </div>
      </section>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

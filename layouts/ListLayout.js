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
          <h1 className="page-heading">{title}</h1>
          <p className="page-lead">Tìm kiếm bài viết theo tiêu đề, tóm tắt hoặc chủ đề.</p>
        </div>
        <div className="surface-panel-muted relative max-w-xl p-3">
          <div className="relative">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Tìm bài viết"
              className="input-field pr-12"
            />
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-fg-subtle"
              aria-hidden="true"
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
              <p className="text-sm text-fg-muted">
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

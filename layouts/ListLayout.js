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
        <label className="relative flex max-w-2xl items-center border border-line-control bg-surface focus-within:border-brand-strong">
          <span className="pointer-events-none select-none whitespace-nowrap pl-4 text-sm text-success">
            $ grep -i
          </span>
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="tìm bài viết…"
            className="min-h-[2.75rem] w-full border-0 bg-transparent px-3 py-2 text-base text-fg placeholder:text-fg-subtle focus:ring-0 focus-visible:outline-none sm:text-sm"
          />
        </label>
        <p className="mt-3 text-xs text-fg-subtle">
          {searchValue
            ? `${filteredBlogPosts.length} bài viết khớp "${searchValue}"`
            : `${posts.length} bài viết`}
        </p>
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

import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Image from '@/components/Image'
import Share from '@/components/Share'
import HorizontalCard from '@/components/HorizontalCard'
import formatDate from '@/lib/utils/formatDate'
import { useRouter } from 'next/router'

export default function CourseSimple({
  frontMatter,
  next,
  prev,
  posts = [],
  otherCourses = [],
  children,
}) {
  const router = useRouter()
  const { title, slug, summary, date, readingTime, images, fileName } = frontMatter
  const courseIntro = posts.find((p) => p.index === 0)
  const courseSlug = slug.split('/').slice(0, -1).join('/')
  const disabledNav =
    'inline-flex min-h-[2.5rem] items-center justify-center rounded-xl border border-line px-3.5 text-sm font-semibold text-fg-subtle'

  const renderCourseLinks = () => (
    <ul className="mt-3 space-y-1">
      {posts.map((post) => {
        const isActive = router.asPath === `/courses/${post.slug}`
        return (
          <li
            key={post.slug}
            ref={
              isActive
                ? (el) => {
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }
                : null
            }
          >
            <a
              className="nav-link nav-link-stacked"
              aria-current={isActive ? 'page' : undefined}
              href={`/courses/${post.slug}`}
            >
              {post.title}
            </a>
          </li>
        )
      })}
    </ul>
  )

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      {/* overflow-x-clip (not hidden) so the lesson sidebar can stick */}
      <article className="surface-panel overflow-x-clip px-3 py-6 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mx-auto mb-2 max-w-3xl">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-fg-muted">
            <li>
              <Link href="/" className="hover:text-brand-strong">
                Trang chủ
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/courses" className="hover:text-brand-strong">
                Khóa học
              </Link>
            </li>
            {courseIntro && (
              <>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href={`/courses/${courseSlug}`} className="hover:text-brand-strong">
                    {courseIntro.title}
                  </Link>
                </li>
              </>
            )}
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="truncate text-fg">
              {title}
            </li>
          </ol>
        </nav>

        <header className="pb-4 text-center">
          <span className="page-eyebrow mx-auto">Bài học</span>
          <h1 className="page-heading">{title}</h1>
          {summary && <p className="page-lead mx-auto mt-3 max-w-3xl">{summary}</p>}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-fg-muted">
            <time dateTime={date}>{formatDate(date)}</time>
            {readingTime && <span>- {readingTime.text.replace('min read', 'phút đọc')}</span>}
          </div>
        </header>

        {/* Sidebar from lg; tablets keep a full-width reading column */}
        <div className="lg:hidden">
          <div className="surface-panel-muted mb-6 p-4">
            <h2 className="panel-label">Nội dung khóa học</h2>
            {renderCourseLinks()}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[290px,1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="surface-panel-muted max-h-[calc(100vh-8rem)] overflow-y-auto p-4">
                <h2 className="panel-label">Nội dung khóa học</h2>
                {renderCourseLinks()}
              </div>

              {otherCourses.length > 0 && (
                <div className="surface-panel-muted p-4">
                  <h2 className="panel-label">Khóa học khác</h2>
                  <div className="mt-3 flex flex-col gap-3">
                    {otherCourses.map((course) => (
                      <HorizontalCard
                        key={course.title}
                        title={course.title}
                        href={`/courses/${course.slug}`}
                        image={course.images?.[0]}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          <div className="min-w-0">
            {images?.[0] && (
              <div className="mb-6 overflow-hidden rounded-2xl border border-line">
                <Image
                  alt={title}
                  className="h-auto w-full object-cover"
                  src={images[0]}
                  width={1200}
                  height={760}
                  quality={75}
                  priority
                />
              </div>
            )}

            <Share fileName={fileName} href={`/courses/${slug}`} />
            <div className="prose mt-8 max-w-none">{children}</div>

            <footer className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
              {prev ? (
                <Link href={`/courses/${prev.slug}`} className="action-btn-secondary action-btn-sm">
                  ← {prev.title}
                </Link>
              ) : (
                <span className={disabledNav}>← Bài trước</span>
              )}

              {next ? (
                <Link href={`/courses/${next.slug}`} className="action-btn-secondary action-btn-sm">
                  {next.title} →
                </Link>
              ) : (
                <span className={disabledNav}>Bài sau →</span>
              )}
            </footer>

            <div className="mt-10">
              <Comments frontMatter={frontMatter} />
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}

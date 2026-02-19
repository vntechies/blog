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

  const renderCourseLinks = () => (
    <ul className="mt-3 space-y-1.5">
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
              className={`block rounded-lg px-3 py-2 text-sm leading-6 transition-colors ${
                isActive
                  ? 'bg-orange-100 font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-300'
                  : 'text-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
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
      <article className="surface-panel overflow-hidden px-3 py-6 sm:px-6 lg:px-8">
        <header className="pb-4 text-center">
          <span className="page-eyebrow mx-auto">Bài học</span>
          <h1 className="page-heading text-slate-900 dark:text-slate-100">{title}</h1>
          {summary && <p className="page-lead mx-auto mt-3 max-w-3xl">{summary}</p>}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <time dateTime={date}>{formatDate(date)}</time>
            {readingTime && <span>- {readingTime.text.replace('min read', 'phút đọc')}</span>}
          </div>
        </header>

        <div className="md:hidden">
          <div className="surface-panel-muted mb-6 p-4">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-200">
              Nội dung khóa học
            </h3>
            {renderCourseLinks()}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[290px,1fr]">
          <aside className="hidden md:block">
            <div className="sticky top-24 space-y-6">
              <div className="surface-panel-muted max-h-[calc(100vh-8rem)] overflow-y-auto p-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-200">
                  Nội dung khóa học
                </h3>
                {renderCourseLinks()}
              </div>

              {otherCourses.length > 0 && (
                <div className="surface-panel-muted p-4">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-200">
                    Khóa học khác
                  </h3>
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
              <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
                <Image
                  alt={title}
                  className="h-auto w-full object-cover"
                  src={images[0]}
                  width={1200}
                  height={760}
                  quality={75}
                  loading="lazy"
                />
              </div>
            )}

            <Share fileName={fileName} href={`/courses/${slug}`} />
            <div className="prose mt-8 max-w-none text-base dark:prose-dark">{children}</div>

            <footer className="mt-10 flex flex-col gap-3 text-sm font-semibold sm:flex-row sm:justify-between sm:text-base">
              {prev ? (
                <Link
                  href={`/courses/${prev.slug}`}
                  className="inline-flex items-center rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 text-orange-700 hover:bg-orange-100 dark:border-orange-700/60 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50"
                >
                  ← {prev.title}
                </Link>
              ) : (
                <span className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500">
                  ← Bài trước
                </span>
              )}

              {next ? (
                <Link
                  href={`/courses/${next.slug}`}
                  className="inline-flex items-center rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 text-orange-700 hover:bg-orange-100 dark:border-orange-700/60 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50"
                >
                  {next.title} →
                </Link>
              ) : (
                <span className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500">
                  Bài sau →
                </span>
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

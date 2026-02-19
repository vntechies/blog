import Image from '@/components/Image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const SOCIAL_FIELDS = [
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'github', label: 'GitHub' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'twitter', label: 'X/Twitter' },
  { key: 'website', label: 'Website' },
  { key: 'url', label: 'Profile' },
]

const toNumber = (value) => {
  const num = Number(value)
  return Number.isFinite(num) ? num : 0
}

const getYearsLabel = (startYear) => {
  const year = toNumber(startYear)
  if (!year) return null

  const years = new Date().getFullYear() - year
  if (years <= 0) return null

  return `${years}+ năm kinh nghiệm`
}

const getAuthorSocials = (author) => {
  const socials = SOCIAL_FIELDS.filter((item) => author[item.key]).map((item) => ({
    label: item.label,
    href: author[item.key],
  }))

  if (author.email) {
    socials.push({ label: 'Email', href: `mailto:${author.email}` })
  }

  return socials.slice(0, 4)
}

const sortByName = (a, b) => (a.name || '').localeCompare(b.name || '', 'vi')

export async function getStaticProps() {
  const authors = await getAllFilesFrontMatter('authors')
  const posts = await getAllFilesFrontMatter('blog')

  const postCountMap = posts.reduce((acc, post) => {
    const postAuthors = post.authors || ['default']
    postAuthors.forEach((authorSlug) => {
      acc[authorSlug] = (acc[authorSlug] || 0) + 1
    })
    return acc
  }, {})

  const normalizedAuthors = authors
    .filter((author) => author.slug)
    .map((author) => ({
      ...author,
      postCount: postCountMap[author.slug] || 0,
      yearsLabel: getYearsLabel(author.startYear),
      socials: getAuthorSocials(author),
    }))

  const mentors = normalizedAuthors
    .filter((author) => author.isMentor)
    .sort((a, b) => toNumber(b.studentCount) - toNumber(a.studentCount) || sortByName(a, b))

  const contributors = normalizedAuthors
    .filter((author) => !author.isMentor)
    .sort((a, b) => toNumber(b.postCount) - toNumber(a.postCount) || sortByName(a, b))

  const totalStudents = mentors.reduce((sum, mentor) => sum + toNumber(mentor.studentCount), 0)

  return {
    props: {
      mentors,
      contributors,
      stats: {
        mentorCount: mentors.length,
        authorCount: normalizedAuthors.length,
        totalStudents,
      },
    },
  }
}

function ProfileCard({ person, isMentor = false }) {
  const avatar = person.avatar || '/static/images/authors/anhcloud.jpeg'

  return (
    <article className="surface-panel flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <Image
          src={avatar}
          alt={person.name || 'Author avatar'}
          width={72}
          height={72}
          className="h-16 w-16 rounded-2xl object-cover sm:h-20 sm:w-20"
        />

        <div className="min-w-0">
          <h3 className="text-lg font-black leading-6 text-slate-900 dark:text-slate-100">
            {person.name}
          </h3>
          {person.occupation && (
            <p className="mt-1 text-sm font-semibold text-orange-600 dark:text-orange-300">
              {person.occupation}
            </p>
          )}
          {person.company && (
            <p className="text-xs mt-1 text-slate-500 dark:text-slate-400">{person.company}</p>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {isMentor && (
          <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[11px] font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
            Mentor
          </span>
        )}
        {person.yearsLabel && (
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            {person.yearsLabel}
          </span>
        )}
        {!!toNumber(person.studentCount) && (
          <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[11px] font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
            {toNumber(person.studentCount).toLocaleString('vi-VN')}+ học viên
          </span>
        )}
        {!!toNumber(person.postCount) && (
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            {toNumber(person.postCount)} bài viết
          </span>
        )}
      </div>

      {person.socials?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {person.socials.map((social) => (
            <a
              key={`${person.slug}-${social.label}`}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs rounded-lg border border-slate-200 bg-white px-2.5 py-1 font-semibold text-slate-600 hover:border-orange-300 hover:text-orange-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-orange-600 dark:hover:text-orange-300"
            >
              {social.label}
            </a>
          ))}
        </div>
      )}

      <Link
        href={`/authors/${person.slug}`}
        className="mt-5 inline-flex items-center text-sm font-bold text-orange-600 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-200"
      >
        Xem hồ sơ
        <span className="ml-1">→</span>
      </Link>
    </article>
  )
}

export default function About({ mentors, contributors, stats }) {
  return (
    <>
      <PageSEO
        title={`Giới thiệu đội ngũ - ${siteMetadata.title}`}
        description="Danh sách đầy đủ mentor và tác giả tại VNTechies. Kết nối cùng đội ngũ giàu kinh nghiệm Cloud, DevOps và Data."
      />

      <section className="pb-8 pt-8 sm:pb-10 sm:pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="page-eyebrow">Về VNTechies</span>
            <h1 className="text-4xl font-black leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              Đội ngũ mentor và tác giả
            </h1>
            <p className="page-lead mx-auto">
              Kết nối với đội ngũ chuyên gia Cloud, DevOps, Data, AI đang trực tiếp triển khai dự án
              chia sẻ kiến thức thực chiến cho cộng đồng.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-3">
            <div className="surface-panel-muted p-4 text-center">
              <p className="text-3xl font-black text-slate-900 dark:text-slate-100">
                {stats.mentorCount}
              </p>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 sm:text-sm">
                Mentor
              </p>
            </div>
            <div className="surface-panel-muted p-4 text-center">
              <p className="text-3xl font-black text-slate-900 dark:text-slate-100">
                {stats.authorCount}
              </p>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 sm:text-sm">
                Author Profile
              </p>
            </div>
            <div className="surface-panel-muted p-4 text-center">
              <p className="text-3xl font-black text-slate-900 dark:text-slate-100">
                {stats.totalStudents.toLocaleString('vi-VN')}+
              </p>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 sm:text-sm">
                Học viên đã hỗ trợ
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/courses/register" className="action-btn-primary">
              Nhận tư vấn học tập
            </Link>
            <Link href="/courses" className="action-btn-secondary">
              Xem các khóa học
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="page-eyebrow">Mentor</span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 sm:text-4xl">
                Mentor trực tiếp đồng hành
              </h2>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {mentors.map((mentor) => (
              <ProfileCard key={mentor.slug} person={mentor} isMentor />
            ))}
          </div>
        </div>
      </section>

      {contributors.length > 0 && (
        <section className="pb-12 pt-4 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="page-eyebrow">Author</span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 sm:text-4xl">
                Tác giả và cộng tác viên
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {contributors.map((contributor) => (
                <ProfileCard key={contributor.slug} person={contributor} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

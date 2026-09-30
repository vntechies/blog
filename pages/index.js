import Image from 'next/image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ArticleList from '@/components/ArticleList'
import FAQ from '@/components/home/FAQ'
import FreeCourses from '@/components/home/FreeCourses'

const MAX_DISPLAY = 6

const heroStats = [
  { label: 'Học viên đã tham gia', value: '200+', icon: '/static/images/icons/users-icon.svg' },
  { label: 'Tỷ lệ đỗ chứng chỉ', value: '95%', icon: '/static/images/icons/check-icon.svg' },
  { label: 'Mentor đang hỗ trợ', value: '9+', icon: '/static/images/icons/mentor-icon.svg' },
]

const heroCourseLinks = [
  {
    label: 'AWS SAA-C03',
    title: 'Khoá học AWS Solution Architect',
    subtitle: 'Luyện thi & thực chiến AWS cùng chuyên gia',
    href: '/courses/aws/saa/gioi-thieu',
    icon: '/static/images/icons/aws-icon.svg',
  },
  {
    label: 'DevOps VDE-C01',
    title: 'Khoá học DevOps Engineer',
    subtitle: 'DevOps từ cơ bản đến nâng cao',
    href: '/courses/devops/gioi-thieu',
    icon: '/static/images/icons/devops-icon.svg',
  },
  {
    label: 'Data VDT-C01',
    title: 'Data Engineer Bootcamp',
    subtitle: 'Thực chiến cho Data Engineer',
    href: '/courses/data-engineer-bootcamp/gioi-thieu',
    icon: '/static/images/icons/data-icon.svg',
  },
  {
    label: 'AWS DEA-C01',
    title: 'AWS Certified Data Engineer – Associate',
    subtitle: '12 module, lab thực hành & luyện thi DEA-C01',
    href: '/courses/aws/dea/gioi-thieu',
    icon: '/static/images/icons/aws-icon.svg',
  },
]

const uspPillars = [
  {
    title: 'Học để làm, không chỉ để thi chứng chỉ',
    description: 'Mỗi module đều có lab và output rõ ràng để bạn dùng được ngay vào công việc.',
    icon: '/static/images/icons/lab-icon.svg',
  },
  {
    title: '100% mentor đang làm tại các tập đoàn đa quốc gia',
    description:
      'Mentor là lead, manager, senior ở các công ty lớn và trực tiếp review bài làm của bạn.',
    icon: '/static/images/icons/company-icon.svg',
  },
  {
    title: 'Luôn có lab miễn phí, có nền tảng học tập và thực hành riêng',
    description: 'Bạn thực hành trên nền tảng riêng của VNTechies, không phát sinh thêm phí lab.',
    icon: '/static/images/icons/platform-icon.svg',
  },
  {
    title: 'Có hỗ trợ giảm giá thi chứng chỉ AWS',
    description: 'Đội ngũ hỗ trợ tối ưu chi phí thi và hướng dẫn ôn tập đúng trọng tâm.',
    icon: '/static/images/icons/discount-icon.svg',
  },
]

const painPoints = [
  'Học rất nhiều nhưng không biết thứ tự ưu tiên để tiến bộ nhanh.',
  'Thiếu môi trường thực hành nên khó áp dụng vào dự án thật.',
  'Không có người review nên mất thời gian với các lỗi lặp lại.',
  'Muốn nâng lương hoặc chuyển việc nhưng chưa có lộ trình rõ ràng.',
]

const programOutcomes = [
  {
    title: 'Lộ trình rõ ràng theo tuần',
    summary: 'Biết chính xác tuần này cần học gì và cần hoàn thành đầu ra nào.',
    icon: '/static/images/icons/roadmap-icon.svg',
  },
  {
    title: 'Năng lực thực chiến tốt hơn',
    summary: 'Làm được bài lab theo bối cảnh production thay vì chỉ học lý thuyết.',
    icon: '/static/images/icons/skills-icon.svg',
  },
  {
    title: 'Tự tin khi phỏng vấn hoặc thi',
    summary: 'Hiểu bản chất, biết cách trả lời tình huống và giải thích quyết định kỹ thuật.',
    icon: '/static/images/icons/interview-icon.svg',
  },
  {
    title: 'Cộng đồng và mentor đồng hành',
    summary: 'Có người hỗ trợ khi gặp blockers, giữ nhịp học ổn định và liên tục.',
    icon: '/static/images/icons/community-icon.svg',
  },
]

const learningTracks = [
  {
    title: 'AWS Solution Architect',
    summary: 'Luyện thi & thực chiến AWS cùng chuyên gia.',
    audience:
      'Phù hợp cho người muốn học AWS theo hướng vừa thi chứng chỉ vừa ứng dụng vào dự án thực tế.',
    badge: 'SAA-C03',
    href: '/courses/aws/saa/gioi-thieu',
    cta: 'Xem khóa AWS SAA-C03',
    image: '/static/images/courses/saa.png',
  },
  {
    title: 'DevOps Engineer',
    summary: 'DevOps từ cơ bản đến nâng cao.',
    audience:
      'Phù hợp cho người mới bắt đầu hoặc engineer muốn chuyển hướng sang DevOps một cách bài bản.',
    badge: 'VDE-C01',
    href: '/courses/devops/gioi-thieu',
    cta: 'Xem khóa DevOps',
    image: '/static/images/courses/vde.png',
  },
  {
    title: 'Data Engineer',
    summary: 'Khóa học Data Engineering từ cơ bản đến nâng cao với thực hành thực tế.',
    audience:
      'Phù hợp cho sinh viên có nền tảng lập trình, engineer muốn chuyển sang Data hoặc Data Analyst muốn nâng cấp lên Data Engineering.',
    badge: 'VDT-C01',
    href: '/courses/data-engineer-bootcamp/gioi-thieu',
    cta: 'Xem khoá Data Engineer',
    image: '/static/images/courses/vdt.png',
  },
  {
    title: 'AWS Certified Data Engineer – Associate',
    summary:
      'Mười hai module: pipeline dữ liệu trên AWS (S3, Glue, Athena, EMR, Redshift, Kinesis, Step Functions…) và chuẩn bị DEA-C01.',
    audience:
      'Phù hợp cho engineer/analyst đã có nền tảng cloud hoặc SQL, muốn làm data pipeline trên AWS và thi chứng chỉ DEA-C01.',
    badge: 'DEA-C01',
    href: '/courses/aws/dea/gioi-thieu',
    cta: 'Xem khóa DEA-C01',
    image: '/static/images/courses/awsdeac01.png',
  },
]

const testimonials = [
  {
    quote:
      'Khóa học có cấu trúc rõ, mentor phản hồi nhanh. Mình áp dụng được ngay vào dự án AWS của team.',
    name: 'Lê Văn Thắng',
    role: 'Tech Lead',
    avatar: '/static/images/customers/lethang.jpg',
    rating: 5,
  },
  {
    quote:
      'Điểm mạnh nhất là phần lab thực tế và review CV/career path. Mình tự tin hơn rất nhiều khi phỏng vấn.',
    name: 'Trần Duy Mạnh',
    role: 'Data Engineer',
    avatar: '/static/images/customers/tranduymanh.jpg',
    rating: 5,
  },
  {
    quote:
      'Không chỉ học để thi chứng chỉ, mình hiểu được cách thiết kế hệ thống thực tế và tối ưu chi phí cloud.',
    name: 'Võ Phi Hùng',
    role: 'Division Manager',
    avatar: '/static/images/customers/vophihung.jpg',
    rating: 5,
  },
]

const s = siteMetadata
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: s.siteName,
    url: s.siteUrl,
    logo: `${s.siteUrl}${s.siteLogo}`,
    email: s.email,
    sameAs: [s.facebook, s.youtube, s.tiktok, s.linkedin, s.github, s.twitter, s.instagram],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: s.siteName,
    alternateName: s.headerTitle,
    url: `${s.siteUrl}/`,
  },
]

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO
        title={`Khóa học AWS, DevOps, Data Engineer thực chiến | ${siteMetadata.siteName}`}
        structuredData={structuredData}
        description="VNTechies giúp bạn học để làm: mentor từ tập đoàn đa quốc gia, lab miễn phí, lộ trình Cloud/DevOps/Data thực chiến và hỗ trợ giảm giá thi chứng chỉ AWS."
      />

      {/* Hero */}
      <section className="relative isolate pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="page-glow" aria-hidden="true" />

        <div className="flex flex-col items-center text-center">
          <span className="page-eyebrow">
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
            Lộ trình học thực chiến cùng mentor chuyên gia
          </span>

          <h1 className="page-display mt-2">
            <span className="block">Từ Zero đến Hero với</span>
            <span className="page-highlight mt-1 block pb-1">Cloud, DevOps & Data</span>
          </h1>

          <p className="page-lead mx-auto max-w-2xl">
            Học theo lộ trình cá nhân hóa, thực chiến với lab thực tế và mentor đồng hành từ các tập
            đoàn công nghệ hàng đầu.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Link href="/courses/register" className="action-btn-primary action-btn-lg">
              Đăng ký tư vấn miễn phí →
            </Link>
            <Link href="/courses" className="action-btn-secondary action-btn-lg">
              Khám phá khóa học
            </Link>
          </div>

          <p className="mt-4 flex items-center gap-1.5 text-sm text-fg-muted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Tư vấn trong 15 phút, không ràng buộc, có đề xuất lộ trình phù hợp.</span>
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {heroCourseLinks.map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className="surface-panel surface-panel-interactive group flex flex-col p-5 sm:p-6"
            >
              <p className="chip tone-info w-fit">{course.label}</p>
              <p className="mt-3 text-lg font-bold leading-snug text-fg transition-colors group-hover:text-brand-strong">
                {course.title}
              </p>
              <p className="mt-2 text-sm text-fg-muted">{course.subtitle}</p>
              <span className="action-link mt-auto pt-4">
                Xem chi tiết
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-3 gap-3 sm:gap-4">
          {heroStats.map((metric) => (
            <div
              key={metric.label}
              className="surface-panel flex flex-col items-center p-4 text-center sm:p-6"
            >
              <div className="icon-tile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <p className="mt-4 text-2xl font-extrabold tabular-nums text-fg sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 text-xs font-medium text-fg-muted sm:text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why VNTechies */}
      <section className="page-section">
        <div className="grid gap-6 lg:grid-cols-[1fr,1.2fr] lg:gap-8">
          <div className="surface-panel surface-panel-lg">
            <span className="page-eyebrow">TẠI SAO CHỌN VNTECHIES?</span>
            <h2 className="page-heading">4 lý do để bạn học tốt hơn</h2>
            <p className="page-lead">
              VNTechies tập trung vào kết quả đầu ra thực tế, không chỉ là kiến thức lý thuyết và đã
              giúp hàng trăm học viên đạt được mục tiêu nghề nghiệp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/courses/register" className="action-btn-primary">
                <span>Nhận tư vấn ngay</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link href="/about" className="action-btn-secondary">
                <span>Về mentors</span>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {uspPillars.map((item, index) => (
              <article key={item.title} className="surface-panel p-5 sm:p-6">
                <div className="icon-tile text-xl font-bold tabular-nums">{index + 1}</div>
                <h3 className="mt-4 text-lg font-bold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-fg-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points and outcomes */}
      <section className="page-section">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="surface-panel surface-panel-lg">
            <span className="page-eyebrow tone-danger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>Nếu bạn đang gặp khó</span>
            </span>

            <h2 className="panel-heading">
              Đây là lý do khiến nhiều người học mãi nhưng vẫn chưa bứt phá
            </h2>

            <ul className="mt-8 space-y-3">
              {painPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-line bg-surface-muted p-4"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-danger/10 text-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <span className="text-base text-fg">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-panel surface-panel-lg">
            <span className="page-eyebrow tone-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Sau khi tham gia VNTechies</span>
            </span>

            <h2 className="panel-heading">
              Bạn có lộ trình, có mentor, có sản phẩm học tập cụ thể
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {programOutcomes.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col rounded-xl border border-line bg-surface-muted p-5"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <h3 className="mt-4 text-lg font-bold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm text-fg-muted">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning tracks */}
      <section className="page-section">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="page-eyebrow">Chọn lộ trình phù hợp</span>
            <h2 className="page-heading">3 chương trình mũi nhọn để tăng tốc sự nghiệp</h2>
            <p className="page-lead max-w-2xl">
              Mỗi lộ trình đều có đầu ra rõ ràng, mức độ thực hành cao và mentor theo sát để bạn
              không bị bỏ lại giữa chừng.
            </p>
          </div>

          <Link
            href="/courses/register"
            className="action-btn-primary action-btn-lg shrink-0 self-start lg:self-auto"
          >
            Tư vấn chọn lộ trình
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {learningTracks.map((track) => (
            <article key={track.title} className="surface-panel flex h-full flex-col p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="chip tone-info">{track.badge}</span>
                {/* Logos are drawn for light backgrounds, so the tile stays white in dark mode */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-line bg-white shadow-sm">
                  <Image
                    src={track.image}
                    width={38}
                    height={38}
                    alt={track.title}
                    className="h-9 w-9 object-contain"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold">{track.title}</h3>
              <p className="mt-3 text-base text-fg-muted">{track.summary}</p>

              <div className="mt-5 flex-1 rounded-xl border border-line bg-surface-muted p-4">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 text-fg-subtle"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="panel-label">Đối tượng phù hợp</span>
                </div>
                <p className="mt-2 text-sm text-fg-muted">{track.audience}</p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link href={track.href} className="action-link">
                  {track.cta}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <Link
                  href="/courses/register"
                  className="text-sm font-semibold text-fg-muted transition-colors hover:text-brand-strong"
                >
                  Đăng ký tư vấn
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="page-section">
        <div className="surface-panel surface-panel-lg">
          <div className="mb-10">
            <span className="page-eyebrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <span>Success Stories</span>
            </span>
            <h2 className="page-heading">Học viên nói gì sau khi học tại VNTechies</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="flex flex-col rounded-2xl border border-line bg-surface-muted p-6"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div
                    className="flex text-amber-600 dark:text-amber-400"
                    role="img"
                    aria-label={`${item.rating}/5`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-info/50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-base text-fg-prose">"{item.quote}"</p>

                <div className="mt-auto flex items-center gap-4 pt-6">
                  <Image
                    src={item.avatar}
                    width={48}
                    height={48}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-base font-bold text-fg">{item.name}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-fg-muted">{item.role}</p>
                      {item.company && (
                        <>
                          <span className="text-xs text-fg-subtle">•</span>
                          <p className="text-sm font-medium text-fg-muted">{item.company}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FreeCourses />

      {/* Free resources: latest posts */}
      <section className="page-section">
        <div className="mb-10 text-center sm:mb-12">
          <span className="page-eyebrow">Tài nguyên miễn phí</span>
          <h2 className="page-heading">Đọc trước để bắt đầu nhanh hơn</h2>
          <p className="page-lead mx-auto max-w-2xl">
            Những bài viết thực tế về Cloud, DevOps và Data giúp bạn hiểu hướng đi trước khi đăng
            ký.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {!posts.length && (
            <div className="surface-panel col-span-full p-8 text-center">
              <p className="text-fg-muted">Không có bài viết nào.</p>
            </div>
          )}

          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => (
            <ArticleList key={frontMatter.title} {...frontMatter} image={frontMatter.images?.[0]} />
          ))}
        </div>

        {posts.length > MAX_DISPLAY && (
          <div className="mt-10 text-center sm:mt-12">
            <Link href="/blog" className="action-btn-secondary">
              <span>Xem tất cả bài viết</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        )}
      </section>

      {/* Consultation CTA */}
      <section className="page-section">
        <div className="surface-brand px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-2/3">
            <h2 className="page-heading text-brand-on">
              Sẵn sàng chốt lộ trình và bắt đầu hành trình học nghiêm túc?
            </h2>
            <p className="mt-6 text-lg">
              Đăng ký để nhận tư vấn cá nhân hóa theo mục tiêu nghề nghiệp hiện tại. Bạn sẽ có kế
              hoạch học cụ thể, mốc thời gian rõ ràng và đề xuất lộ trình phù hợp nhất.
            </p>

            <ul className="mt-8 grid gap-4 font-medium sm:grid-cols-2">
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </span>
                <span>Tư vấn 1:1 theo nền tảng hiện tại</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span>Mentor từ các tập đoàn đa quốc gia</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </span>
                <span>Lab miễn phí, có nền tảng học tập riêng</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span>Hỗ trợ giảm giá lệ phí thi chứng chỉ AWS</span>
              </li>
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-4 lg:mt-0 lg:w-1/3">
            <Link href="/courses/register" className="action-btn-inverse action-btn-lg">
              <span>Đăng ký tư vấn ngay</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link href="https://m.me/vntechies" className="action-btn-on-brand action-btn-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Chat với tư vấn viên</span>
            </Link>

            <div className="mt-2 text-center text-sm">
              <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>Cam kết hoàn tiền nếu không hài lòng trong 7 ngày</span>
                <span aria-hidden="true">•</span>
                <Link
                  href="/pricing#hoan-tien"
                  className="font-semibold underline decoration-brand-on/40 underline-offset-2 hover:decoration-brand-on"
                >
                  Tham khảo chính sách giá
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  )
}

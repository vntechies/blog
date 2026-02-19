import Image from 'next/image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ArticleList from '@/components/ArticleList'
import FAQ from '@/components/home/FAQ'

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

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description="VNTechies giúp bạn học để làm: mentor từ tập đoàn đa quốc gia, lab miễn phí, lộ trình Cloud/DevOps/Data thực chiến và hỗ trợ giảm giá thi chứng chỉ AWS."
      />

      {/* Hero Section - Redesigned with Stronger Visual Impact */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
        {/* Background elements - visual flair */}
        <div className="absolute -top-40 left-0 z-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute -right-40 top-20 z-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl"></div>
        <div className="absolute -bottom-64 left-1/3 z-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex flex-col items-center">
            {/* Attention-grabbing eyebrow with visual emphasis */}
            <div className="animate-pulse-slow inline-flex items-center rounded-full border border-orange-300/40 bg-gradient-to-r from-orange-50 to-orange-100 px-5 py-2 dark:border-orange-500/30 dark:from-orange-900/30 dark:to-orange-800/30">
              <span className="mr-2 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-orange-500"></span>
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-sm font-semibold text-transparent dark:from-orange-400 dark:to-orange-300">
                Lộ trình học thực chiến cùng mentor chuyên gia
              </span>
            </div>

            {/* Main headline with gradient & animation */}
            <h1 className="sm:text-6xl md:text-7xl mt-6 text-center text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              <span className="block">Từ Zero đến Hero với</span>
              <span className="mt-1 block bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text pb-1 text-transparent dark:from-orange-400 dark:via-orange-300 dark:to-amber-300">
                Cloud, DevOps & Data
              </span>
            </h1>

            {/* Subheadline with improved clarity */}
            <p className="mt-6 max-w-2xl text-center text-xl leading-relaxed text-slate-600 dark:text-slate-300 sm:text-2xl">
              Học theo lộ trình cá nhân hóa, thực chiến với lab thực tế và mentor đồng hành từ các
              tập đoàn công nghệ hàng đầu.
            </p>

            {/* Primary & Secondary CTA with improved visual hierarchy */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/courses/register"
                className="text-lg relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-orange-500/25 dark:from-orange-500 dark:to-orange-400 sm:px-10"
              >
                <span className="relative z-10">Đăng ký tư vấn miễn phí →</span>
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500/80 to-orange-400/80 opacity-0 blur transition-opacity group-hover:opacity-100"></span>
              </Link>
              <Link
                href="/courses"
                className="text-lg rounded-xl border border-slate-300 bg-white px-8 py-4 font-bold text-slate-700 transition-all hover:border-orange-300 hover:bg-orange-50/50 hover:text-orange-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-orange-700 dark:hover:bg-orange-900/20 dark:hover:text-orange-400 sm:px-10"
              >
                Khám phá khóa học
              </Link>
            </div>

            {/* Trust indicators - time estimate & guarantee */}
            <p className="mt-4 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

            {/* Highlighted courses with improved visual design */}
            <div className="mt-12 grid w-full max-w-5xl gap-4 sm:grid-cols-3">
              {heroCourseLinks.map((course) => (
                <Link
                  key={course.title}
                  href={course.href}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-orange-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-orange-700"
                >
                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 opacity-70 transition-transform duration-500 group-hover:scale-150 dark:from-orange-900/30 dark:to-orange-800/20"></div>

                  <div className="relative">
                    <p className="text-xs inline-flex items-center rounded-full bg-orange-100 px-3 py-1 font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
                      {course.label}
                    </p>
                    <p className="mt-3 text-xl font-bold text-slate-900 group-hover:text-orange-600 dark:text-slate-100 dark:group-hover:text-orange-400">
                      {course.title}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      {course.subtitle}
                    </p>

                    <div className="mt-4 flex items-center text-orange-600 dark:text-orange-400">
                      <span className="text-sm font-medium">Xem chi tiết</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1.5 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Social proof stats with icons and improved design */}
            <div className="mt-12 grid w-full max-w-5xl gap-4 sm:grid-cols-3">
              {heroStats.map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <p className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-center text-sm font-medium text-slate-600 dark:text-slate-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section - Redesigned with more visual appeal */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:gap-16">
            {/* Left column - Intro and CTA */}
            <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-800 sm:p-10">
              <div className="absolute -top-6 left-8 inline-flex h-12 items-center rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-6 text-white shadow-lg dark:from-orange-500 dark:to-orange-400">
                <span className="text-sm font-bold">TẠI SAO CHỌN VNTECHIES?</span>
              </div>

              <div className="mt-8">
                <h2 className="text-3xl font-black leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                  4 lý do để bạn học tốt hơn
                </h2>
                <p className="text-lg mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                  VNTechies tập trung vào kết quả đầu ra thực tế, không chỉ là kiến thức lý thuyết
                  và đã giúp hàng trăm học viên đạt được mục tiêu nghề nghiệp.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/courses/register" className="action-btn-primary">
                    <span>Nhận tư vấn ngay</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
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
            </div>

            {/* Right column - 4 USPs in an attractive grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              {uspPillars.map((item, index) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-orange-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-orange-900/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points and Solutions - Redesigned with better contrast */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left column - Pain Points */}
            <div className="relative overflow-hidden rounded-3xl border border-red-100 bg-white p-8 shadow-xl dark:border-red-900/30 dark:bg-slate-800 sm:p-10">
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-red-50 dark:bg-red-900/20"></div>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-red-50 dark:bg-red-900/20"></div>

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 dark:border-red-800/50 dark:bg-red-900/30 dark:text-red-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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

                <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 dark:text-white sm:text-4xl">
                  Đây là lý do khiến nhiều người học mãi nhưng vẫn chưa bứt phá
                </h2>

                <ul className="mt-8 space-y-5">
                  {painPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50/50 p-4 text-slate-800 dark:border-red-900/30 dark:bg-red-900/10 dark:text-slate-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-1 h-5 w-5 flex-shrink-0 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column - Solutions */}
            <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-8 shadow-xl dark:border-emerald-900/30 dark:bg-slate-800 sm:p-10">
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-emerald-50 dark:bg-emerald-900/20"></div>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-50 dark:bg-emerald-900/20"></div>

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-600 dark:border-emerald-800/50 dark:bg-emerald-900/30 dark:text-emerald-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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

                <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 dark:text-white sm:text-4xl">
                  Bạn có lộ trình, có mentor, có sản phẩm học tập cụ thể
                </h2>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {programOutcomes.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col rounded-xl border border-emerald-100 bg-emerald-50/50 p-5 dark:border-emerald-900/30 dark:bg-emerald-900/10"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg mt-4 font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {item.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks - Redesigned with visual hierarchy */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="page-eyebrow">Chọn lộ trình phù hợp</span>
              <h2 className="page-heading text-slate-900 dark:text-white">
                3 chương trình mũi nhọn để tăng tốc sự nghiệp
              </h2>
              <p className="page-lead max-w-2xl">
                Mỗi lộ trình đều có đầu ra rõ ràng, mức độ thực hành cao và mentor theo sát để bạn
                không bị bỏ lại giữa chừng.
              </p>
            </div>

            <Link
              href="/courses/register"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-3 text-white shadow-lg transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-orange-500/20 sm:px-8 sm:py-4"
            >
              <span className="sm:text-lg relative z-10 flex items-center text-base font-bold">
                Tư vấn chọn lộ trình
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-600 to-orange-700 opacity-0 blur transition-opacity group-hover:opacity-100"></span>
            </Link>
          </div>

          {/* Learning tracks cards with improved design */}
          <div className="grid gap-8 lg:grid-cols-3">
            {learningTracks.map((track) => (
              <article
                key={track.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-xl transition-all hover:border-orange-300 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-orange-800"
              >
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 opacity-70 transition-all duration-500 group-hover:scale-150 dark:from-orange-900/30 dark:to-orange-800/20"></div>

                {/* Badge and icon */}
                <div className="relative mb-8 flex items-center justify-between">
                  <span className="text-xs inline-flex items-center rounded-full border border-orange-300 bg-orange-100 px-3 py-1 font-semibold text-orange-700 dark:border-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
                    {track.badge}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-700">
                    <Image
                      src={track.image}
                      width={38}
                      height={38}
                      alt={track.title}
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col">
                  <h3 className="min-h-[3.5rem] text-2xl font-bold text-slate-900 dark:text-white">
                    {track.title}
                  </h3>
                  <p className="line-clamp-2 mt-3 min-h-[3.25rem] text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {track.summary}
                  </p>

                  {/* Target audience */}
                  <div className="mt-5 flex min-h-[12rem] flex-col rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-700/50">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 flex-shrink-0 text-slate-500 dark:text-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span className="text-xs ml-2 font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Đối tượng phù hợp
                      </span>
                    </div>
                    <p className="line-clamp-5 mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {track.audience}
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="mt-auto flex flex-col gap-2 pt-8">
                    <Link
                      href={track.href}
                      className="inline-flex min-w-0 items-center text-sm font-semibold text-orange-600 transition-colors hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-200"
                    >
                      {track.cta}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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
                      className="inline-flex items-center self-end text-sm font-semibold text-slate-600 transition-colors hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-300"
                    >
                      Đăng ký tư vấn
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Redesigned with social proof */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-800 sm:p-10 lg:p-12">
            <div className="absolute -top-14 -left-14 h-64 w-64 rounded-full bg-orange-100 opacity-70 dark:bg-orange-900/20"></div>
            <div className="absolute -bottom-14 -right-14 h-64 w-64 rounded-full bg-blue-100 opacity-70 dark:bg-blue-900/20"></div>

            <div className="relative mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700 dark:border-orange-800/50 dark:bg-orange-900/30 dark:text-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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

              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                Học viên nói gì sau khi học tại VNTechies
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-lg dark:border-slate-700 dark:bg-slate-700/50"
                >
                  {/* Quote icon */}
                  <div className="absolute -top-4 -right-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-900/40 dark:text-orange-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Star rating */}
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote content */}
                  <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    "{item.quote}"
                  </p>

                  {/* Author info */}
                  <div className="mt-6 flex items-center gap-4">
                    <Image
                      src={item.avatar}
                      width={48}
                      height={48}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <p className="text-base font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.role}</p>
                        {item.company && (
                          <>
                            <span className="text-xs text-slate-400">•</span>
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                              {item.company}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section - Blog Posts */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="page-eyebrow">Tài nguyên miễn phí</span>
            <h2 className="mt-2 text-3xl font-black leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              Đọc trước để bắt đầu nhanh hơn
            </h2>
            <p className="text-lg mx-auto mt-4 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
              Những bài viết thực tế về Cloud, DevOps và Data giúp bạn hiểu hướng đi trước khi đăng
              ký.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {!posts.length && (
              <div className="col-span-full rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-800">
                <p className="text-slate-600 dark:text-slate-300">Không có bài viết nào.</p>
              </div>
            )}

            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => (
              <ArticleList
                key={frontMatter.title}
                {...frontMatter}
                image={frontMatter.images?.[0]}
              />
            ))}
          </div>

          {posts.length > MAX_DISPLAY && (
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition-colors hover:border-orange-300 hover:bg-orange-50/30 hover:text-orange-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-orange-800 dark:hover:bg-orange-900/10 dark:hover:text-orange-400"
              >
                <span>Xem tất cả bài viết</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
        </div>
      </section>

      {/* CTA Section - Enhanced for conversions */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-orange-400/30"></div>
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-orange-400/30"></div>

            <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                  Sẵn sàng chốt lộ trình và bắt đầu hành trình học nghiêm túc?
                </h2>
                <p className="text-lg mt-6 leading-relaxed text-orange-50">
                  Đăng ký để nhận tư vấn cá nhân hóa theo mục tiêu nghề nghiệp hiện tại. Bạn sẽ có
                  kế hoạch học cụ thể, mốc thời gian rõ ràng và đề xuất lộ trình phù hợp nhất.
                </p>

                {/* Benefits with icons */}
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  <li className="flex items-center gap-3 text-orange-50">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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
                  <li className="flex items-center gap-3 text-orange-50">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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
                  <li className="flex items-center gap-3 text-orange-50">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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
                  <li className="flex items-center gap-3 text-orange-50">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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

              {/* CTA buttons */}
              <div className="mt-10 flex flex-col gap-4 lg:mt-0 lg:w-1/3">
                <Link
                  href="/courses/register"
                  className="text-lg inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-orange-600 shadow-xl transition-transform hover:scale-105"
                >
                  <span>Đăng ký tư vấn ngay</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://m.me/vntechies"
                  className="text-lg inline-flex items-center justify-center rounded-xl border border-orange-200/60 bg-orange-500/30 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-orange-500/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Chat với tư vấn viên</span>
                </Link>

                <div className="mt-4 text-center text-sm text-orange-50">
                  <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>Cam kết hoàn tiền nếu không hài lòng trong 7 ngày</span>
                    <span className="text-orange-100/70">•</span>
                    <Link
                      href="/pricing#hoan-tien"
                      className="font-semibold underline decoration-orange-200/80 underline-offset-2 hover:text-white"
                    >
                      Tham khảo chính sách giá
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Kept as is, using existing component */}
      <FAQ />
    </>
  )
}

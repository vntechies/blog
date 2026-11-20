import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import B2BLeadForm from '@/components/B2BLeadForm'
import b2bPortfolio from '@/data/b2bPortfolio'
import siteMetadata from '@/data/siteMetadata'

const pageTitle = `Đào tạo doanh nghiệp: Cloud, DevOps, Data & AI | ${siteMetadata.siteName}`
const pageDescription =
  'Nâng cấp đội ngũ Cloud, DevOps, Data & AI cùng VNTechies: lộ trình thực chiến, lab thật, mentor từ các công ty đa quốc gia, lớp public hoặc lớp riêng từ 5 học viên.'

const programs = [
  {
    title: 'Secure Cloud & DevOps',
    summary:
      'Nền tảng AWS vững vàng, tự động hoá hạ tầng và vận hành hệ thống theo chuẩn production.',
    codes: [
      { code: 'SAA-C03', href: '/courses/aws/saa/gioi-thieu' },
      { code: 'DVA-C02', href: '/courses/aws/dva/gioi-thieu' },
      { code: 'VDE-C01', href: '/courses/devops/gioi-thieu' },
    ],
  },
  {
    title: 'Data to AI Engineering',
    summary:
      'Từ pipeline dữ liệu tới ứng dụng AI: xây dựng hệ thống dữ liệu và RAG chạy trên cloud.',
    codes: [
      { code: 'DEA-C01', href: '/courses/aws/dea/gioi-thieu' },
      { code: 'VDT-C01', href: '/courses/data-engineer-bootcamp/gioi-thieu' },
      { code: 'VGE-C01', href: '/courses/genai-engineer-bootcamp/gioi-thieu' },
    ],
  },
  {
    title: 'AI cho khối kinh doanh',
    summary:
      'Hiểu và ứng dụng AI trong công việc hằng ngày, nền tảng đủ chắc để bắt đầu từ con số 0.',
    codes: [{ code: 'AIF-C01', href: '/courses/aws/aif/gioi-thieu' }],
  },
]

const formats = [
  {
    title: 'Lớp public',
    body: 'Đội ngũ tham gia cùng học viên trên toàn quốc, đúng lịch khai giảng có sẵn. Chi phí thấp nhất để chuẩn hoá kiến thức nền.',
  },
  {
    title: 'Lớp riêng từ 5 học viên',
    body: 'Chương trình, lịch và nội dung lab riêng cho công ty. Học viên được đánh giá đầu vào trước khi bắt đầu.',
  },
  {
    title: 'Chương trình may đo',
    body: 'Ghép nhiều khoá thành một lộ trình theo vị trí công việc và mục tiêu của từng nhóm.',
  },
  {
    title: 'Combo tiết kiệm 20–40%',
    body: 'Đăng ký theo nhóm hoặc nhiều khoá cùng lúc để tối ưu ngân sách đào tạo.',
  },
]

const deliverables = [
  'Báo cáo tiến độ từng học viên',
  'Bài kiểm tra đầu vào và buổi demo',
  'Giảm 50% lệ phí thi AWS',
  'Lab miễn phí',
  'Video bài giảng sẵn có trong 24 tháng',
]

const proofPoints = [
  { value: '3.290+', label: 'học viên đã được hỗ trợ' },
  { value: '200+', label: 'học viên khoá premium' },
  { value: '12', label: 'mentor' },
  { value: '8 + 5', label: 'khoá premium + khoá miễn phí' },
]

export default function Enterprises() {
  return (
    <>
      <PageSEO title={pageTitle} description={pageDescription} image={b2bPortfolio.coverImage} />

      {/* Hero */}
      <section className="page-section">
        <span className="page-eyebrow">Đào tạo doanh nghiệp</span>
        <h1 className="page-heading">Nâng cấp đội ngũ Cloud, DevOps, Data &amp; AI</h1>
        <p className="page-lead">
          Lộ trình thực chiến, lab thật, mentor từ các công ty đa quốc gia.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="#tai-ho-so" className="action-btn-primary action-btn-lg">
            Tải hồ sơ đào tạo
          </Link>
          <Link href={siteMetadata.zalo} className="action-btn-secondary action-btn-lg">
            Tư vấn 15 phút qua Zalo
          </Link>
        </div>
      </section>

      {/* Programs */}
      <section className="page-section">
        <span className="page-eyebrow">Ba chương trình</span>
        <h2 className="page-heading">Chọn theo nhu cầu thực tế của đội</h2>
        <p className="page-lead">
          Mỗi chương trình gồm các khoá có chứng chỉ và bài lab thực chiến, ghép lại thành lộ trình
          cho từng vị trí.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <article key={program.title} className="surface-panel flex h-full flex-col p-6 sm:p-8">
              <h3 className="text-xl font-extrabold text-fg">{program.title}</h3>
              <p className="mt-3 flex-1 text-sm text-fg-muted sm:text-base">{program.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {program.codes.map(({ code, href }) => (
                  <Link key={code} href={href} className="chip">
                    {code}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Formats */}
      <section className="page-section">
        <span className="page-eyebrow">Bốn cách hợp tác</span>
        <h2 className="page-heading">Đào tạo linh hoạt theo ngân sách và thời gian</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {formats.map((format) => (
            <div key={format.title} className="surface-panel p-6 sm:p-8">
              <h3 className="text-lg font-extrabold text-fg">{format.title}</h3>
              <p className="mt-2 text-sm text-fg-muted sm:text-base">{format.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables + proof */}
      <section className="page-section">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="page-eyebrow">Doanh nghiệp nhận được</span>
            <h2 className="page-heading">Đồng hành cả quá trình, không chỉ bán khoá học</h2>
            <ul className="mt-8 space-y-3">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-fg-prose sm:text-base">
                  <span className="mt-0.5 shrink-0 font-bold text-success" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-panel surface-panel-lg">
            <span className="page-eyebrow">Con số</span>
            <dl className="mt-2 grid grid-cols-2 gap-6">
              {proofPoints.map((point) => (
                <div key={point.label}>
                  <dt className="sr-only">{point.label}</dt>
                  <dd className="text-3xl font-extrabold text-brand-strong sm:text-4xl">
                    {point.value}
                  </dd>
                  <dd className="mt-1 text-sm text-fg-muted">{point.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 border-t border-line pt-4 text-sm text-fg-muted">
              Đội ngũ mentor có 2 AWS Authorized Instructor, 1 AWS Academy Educator; mỗi mentor đều
              giữ chứng chỉ AWS Professional.
            </p>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="tai-ho-so" className="page-section scroll-mt-20">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-14">
          <div className="lg:sticky lg:top-24">
            <span className="page-eyebrow">Hồ sơ đào tạo</span>
            <h2 className="page-heading">Nhận hồ sơ đào tạo doanh nghiệp {b2bPortfolio.version}</h2>
            <p className="page-lead">
              {b2bPortfolio.pages} trang: chương trình, hình thức lớp, học phí và lộ trình triển
              khai cho đội ngũ.
            </p>
            <div
              role="img"
              aria-label="Bìa hồ sơ đào tạo doanh nghiệp VNTechies"
              className="mt-6 aspect-[1200/675] w-full rounded-xl border border-line bg-surface-muted bg-cover bg-center"
              style={{ backgroundImage: `url(${b2bPortfolio.coverImage})` }}
            />
          </div>
          <B2BLeadForm />
        </div>
      </section>
    </>
  )
}

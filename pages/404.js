import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Lạc lối - ${siteMetadata.headerTitle}`} />
      <div className="mx-auto max-w-4xl py-12 sm:py-20">
        <div className="surface-panel grid items-center gap-8 p-8 sm:p-12 md:grid-cols-[180px,1fr]">
          <div className="text-center md:border-r md:border-slate-200 md:pr-8 md:text-left dark:md:border-slate-700">
            <h1 className="text-7xl font-black tracking-tight text-slate-900 dark:text-slate-100">
              404
            </h1>
          </div>
          <div>
            <span className="page-eyebrow mb-3">Trang không tồn tại</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
              Xin lỗi, không tìm thấy trang bạn vừa yêu cầu.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
              Bạn có thể quay lại trang chủ để tiếp tục đọc các bài viết mới nhất.
            </p>
            <div className="mt-6">
              <Link alt="Trang chủ" href="/" className="action-btn-primary">
                Về trang chủ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Lạc lối - ${siteMetadata.headerTitle}`} />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:leading-14">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            Xin lỗi, không tìm thấy trang bạn vừa yêu cầu 😅
          </p>
          <p className="mb-8">Đừng lo, VNTechies còn nhiều bài viết khác 🤩</p>
          <p className="text-lg leading-7">
            Quay về{' '}
            <Link
              alt="Trang chủ"
              className="hover-underline-animation inline-flex flex-row items-center gap-2 font-bold"
              href="/"
            >
              trang chủ
              <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
              </svg>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

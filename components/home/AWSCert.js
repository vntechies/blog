import Link from '@/components/Link'
import Card from '@/components/Card'

const AWSCert = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-amber-100 opacity-20 dark:bg-amber-900"></div>
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-yellow-100 opacity-20 dark:bg-yellow-900"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
            <span className="mr-2">🏆</span>Kinh nghiệm thực tế
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Hướng dẫn học{' '}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
              chứng chỉ AWS
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Kinh nghiệm thực tế và chiến lược ôn thi hiệu quả cho tất cả các kỳ thi chứng chỉ AWS
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Card
            title="Kinh nghiệm thi chứng chỉ AWS Certified Solutions Architect - Associate SAA-C03"
            description="Quá trình ôn tập cho kỳ thi AWSSA-A (Amazon AWS Certified Solutions Architect - Associate) - phiên bản SAA-C03"
            imgSrc="/static/images/ogps/saac03.png"
            href="/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-associate-saa-c03"
            showMore={false}
          />
          <Card
            title="Kinh nghiệm thi chứng chỉ AWS Certified Developer - Associate"
            description="Làm thế nào để lấy chứng chỉ AWSDV-A (Amazon AWS Certified Developer - Associate) trong 2 tuần?"
            imgSrc="/static/images/ogps/aws-da.png"
            href="/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-developer-associate"
            showMore={false}
          />
          <Card
            title="Kinh nghiệm thi chứng chỉ AWS Certified SysOps - Associate"
            description="Hoàn thành AWS Certified SysOps - Associate, kỳ thi khó nhất trong Associate level của AWS"
            imgSrc="/static/images/ogps/aws-sysops.png"
            href="/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-sysops-associate"
            showMore={false}
          />
          <Card
            title="Kinh nghiệm thi chứng chỉ AWS Certified Solutions Architect - Professional SAP-C01"
            description="Chia sẻ kinh nghiệm thi chứng chỉ Solutions Architect level Professional cho các kiến trúc sư giải pháp trên AWS"
            imgSrc="/static/images/ogps/sapc01.png"
            href="/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-professional-sap-c01"
            showMore={false}
          />
          <Card
            title="Kinh nghiệm thi chứng chỉ AWS certified AI Practitioner"
            description="Hướng dẫn ôn thi chứng chỉ AWS certified AI Practitioner - AIF-C01"
            imgSrc="/static/images/ogps/aws-ai-practitioner.png"
            href="/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-ai-practitioner"
            showMore={false}
          />
          <Card
            title="Kinh nghiệm thi chứng chỉ AWS Certified Machine Learning Engineer Associate"
            description="Hướng dẫn ôn thi chứng chỉ AWS Certified Machine Learning Engineer Associate"
            imgSrc="/static/images/ogps/aws-mle-a.png"
            href="/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-machine-learning-engineer-associate"
            showMore={false}
          />
        </div>

        <div className="mt-16 text-center">
          <Link href="/series/chung-chi-aws" aria-label="Tất cả hướng dẫn cho các kỳ thi năm 2025">
            <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
              <span className="mr-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white">
                NEW
              </span>
              Tất cả hướng dẫn cho các kỳ thi năm 2025
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AWSCert

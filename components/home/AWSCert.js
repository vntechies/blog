import Link from '@/components/Link'
import Card from '@/components/Card'

const AWSCert = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-12">
        <h2 className="lg:text-6xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl">
          Hướng dẫn học chứng chỉ AWS
        </h2>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <Card
              title="Kinh nghiệm thi chứng chỉ AWS Certified Solutions Architect – Associate SAA-C03"
              description="Quá trình ôn tập cho kỳ thi AWSSA-A (Amazon AWS Certified Solutions Architect - Associate) - phiên bản SAA-C03 năm 2022"
              imgSrc="/static/images/ogps/saac03.png"
              href="/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-associate-saa-c03"
              showMore={false}
            />
            <Card
              title="Kinh nghiệm thi chứng chỉ AWS Certified Developer – Associate"
              description="Làm thế nào để lấy chứng chỉ AWSDV-A (Amazon AWS Certified Developer - Associate) trong 2 tuần?"
              imgSrc="/static/images/ogps/aws-da.png"
              href="/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-developer-associate"
              showMore={false}
            />
            <Card
              title="Kinh nghiệm thi chứng chỉ AWS Certified SysOps – Associate"
              description="Hoàn thành AWS Certified SysOps – Associate, kỳ thi khó nhất trong Associate level của AWS"
              imgSrc="/static/images/ogps/aws-sysops.png"
              href="/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-sysops-associate"
              showMore={false}
            />
            <Card
              title="Kinh nghiệm thi chứng chỉ AWS Certified Solutions Architect – Professional SAP-C01"
              description="Chia sẻ kinh nghiệm thi chứng chỉ Solutions Architect level Professional cho các kiến trúc sư giải pháp trên AWS"
              imgSrc="/static/images/ogps/sapc01.png"
              href="/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-professional-sap-c01"
              showMore={false}
            />
          </div>
        </div>
        <Link
          href="/series/chung-chi-aws"
          className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 py-1 px-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          role="alert"
          aria-label="Tất cả hướng dẫn cho các kỳ thi năm 2022"
        >
          <span className="text-xs mr-3 rounded-full bg-primary-700 px-4 py-1.5 text-white">
            NEW
          </span>{' '}
          <span className="text-sm font-medium">Tất cả hướng dẫn cho các kỳ thi năm 2023</span>
          <svg
            className="ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default AWSCert

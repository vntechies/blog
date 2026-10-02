import Link from '@/components/Link'
import { octoberOffer } from '@/data/courseOffers'
import { trackCourseAction } from '@/lib/course-analytics'

export default function EnrollmentCampaign({ active }) {
  if (!active) return null

  return (
    <section
      className="my-8 border border-brand bg-brand/5 p-5 sm:p-8"
      aria-label="Ưu đãi SAA và DevOps đến 13 tháng 10"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="page-eyebrow">Ưu đãi đến hết 13/10/2026</p>
          <h2 className="mt-3 text-2xl font-bold text-fg sm:text-3xl">
            Bước tiếp theo của bạn: Cloud hay DevOps?
          </h2>
        </div>
        <span className="border border-brand px-4 py-2 text-lg font-bold text-brand-strong">
          Giảm thêm {octoberOffer.percent}%
        </span>
      </div>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-fg-muted">
        Chọn theo mục tiêu nghề nghiệp. Ưu đãi áp dụng trên các mức học phí đang công bố của hai
        khóa; tư vấn viên giúp bạn xác nhận lịch lớp và mức học phí phù hợp.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          {
            code: 'SAA-C03',
            title: 'AWS Solutions Architect',
            description: 'Cho người muốn thiết kế hệ thống AWS và chuẩn bị chứng chỉ SAA-C03.',
            href: '/courses/aws/saa/gioi-thieu',
          },
          {
            code: 'VDE-C01',
            title: 'DevOps Engineer Bootcamp',
            description: 'Cho người muốn thực hành container, CI/CD và tự động hóa hạ tầng.',
            href: '/courses/devops/gioi-thieu',
          },
        ].map((course) => (
          <div key={course.code} className="flex flex-col border border-line bg-surface p-5">
            <p className="text-xs text-brand-strong">{course.code} · 8 tuần · Online</p>
            <h3 className="mt-2 text-xl font-bold">{course.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
              {course.description}
            </p>
            <Link
              href={course.href}
              onClick={() => trackCourseAction(course.code, 'campaign_course')}
              className="action-btn-primary mt-5"
            >
              Xem lộ trình & học phí →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const packages = [
  {
    icon: '🚀',
    title: 'AWS Foundation',
    description: 'AWS Cloud Practitioner + AWS AI Practitioner',
    originalPrice: '11,000,000₫',
    price: '8,800,000₫',
    discount: '20%',
  },
  {
    icon: '⚡',
    title: 'AWS Solution Architect',
    description: 'AWS Cloud Practitioner + AWS Solutions Architect Associate',
    originalPrice: '13,000,000₫',
    price: '10,400,000₫',
    discount: '20%',
  },
  {
    icon: '💻',
    title: 'AWS Developer',
    description: 'AWS CLF + AWS SAA + AWS DVA',
    originalPrice: '21,000,000₫',
    price: '14,700,000₫',
    discount: '30%',
    popular: true,
  },
  {
    icon: '🎯',
    title: 'Combo AWS',
    description: 'AWS CLF + AWS AIF + AWS SAA + AWS DVA',
    originalPrice: '27,000,000₫',
    price: '16,200,000₫',
    discount: '40%',
    premium: true,
  },
]

export default function Pricing() {
  return (
    <>
      <PageSEO
        title={`Chính sách giá - ${siteMetadata.title}`}
        description="Chính sách giá và ưu đãi khóa học tại VNTechies"
      />

      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Chính sách giá VNTechies
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            VNTechies cam kết cung cấp các khóa học chất lượng cao với mức giá hợp lý và các chính
            sách linh hoạt để hỗ trợ học viên trong việc tiếp cận kiến thức.
          </p>
        </div>

        {/* Combo Policy */}
        <section id="combo" className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Chính sách combo
            </h2>
            <div className="mx-auto flex max-w-lg items-center justify-center gap-6 rounded-xl bg-orange-50 p-6 dark:bg-orange-900/20">
              <div className="text-center">
                <div className="text-xl font-bold text-orange-600">2 khóa</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Giảm 20%</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-orange-600">3 khóa</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Giảm 30%</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-orange-600">4+ khóa</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Giảm 40%</div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-xl border p-6 transition-all hover:shadow-lg ${
                  pkg.popular
                    ? 'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20'
                    : pkg.premium
                    ? 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20'
                    : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
                }`}
              >
                {pkg.popular && (
                  <div className="text-xs absolute -top-3 left-4 rounded-full bg-orange-500 px-3 py-1 font-medium text-white">
                    PHỔ BIẾN
                  </div>
                )}
                {pkg.premium && (
                  <div className="text-xs absolute -top-3 left-4 rounded-full bg-yellow-500 px-3 py-1 font-medium text-white">
                    TỐT NHẤT
                  </div>
                )}

                <div className="mb-6 text-center">
                  <div className="mb-3 text-2xl">{pkg.icon}</div>
                  <h3 className="text-lg mb-2 font-semibold text-gray-900 dark:text-white">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{pkg.description}</p>
                </div>

                <div className="text-center">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                    <span className="text-xs rounded-md bg-red-100 px-2 py-1 font-medium text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      -{pkg.discount}
                    </span>
                  </div>
                  <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
                    {pkg.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-blue-50 p-6 dark:bg-blue-900/20">
                <h3 className="text-lg mb-4 font-semibold text-blue-900 dark:text-blue-100">
                  Lợi ích combo
                </h3>
                <ul className="space-y-3 text-blue-800 dark:text-blue-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    <span>
                      <strong>Tiết kiệm chi phí:</strong> Lên đến 40% so với mua lẻ
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    <span>
                      <strong>Học tập liên tục:</strong> Kiến thức liên kết, bổ trợ lẫn nhau
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    <span>
                      <strong>Hỗ trợ ưu tiên:</strong> Nhận hỗ trợ kỹ thuật ưu tiên
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    <span>
                      <strong>Tài liệu bổ sung:</strong> Nhận thêm tài liệu và template
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-amber-50 p-6 dark:bg-amber-900/20">
                <h3 className="text-lg mb-4 font-semibold text-amber-900 dark:text-amber-100">
                  Điều kiện áp dụng
                </h3>
                <ul className="space-y-3 text-amber-800 dark:text-amber-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500"></span>
                    <span>
                      <strong>Chỉ áp dụng cho các khóa học premium</strong> (không bao gồm khóa học
                      miễn phí)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500"></span>
                    <span>
                      Áp dụng theo giá đối tượng đăng ký và không áp dụng đồng thời với các chương
                      trình khuyến mãi khác
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500"></span>
                    <span>Thanh toán một lần để nhận ưu đãi combo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500"></span>
                    <span>Thời hạn truy cập: 24 tháng cho tất cả khóa học trong combo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500"></span>
                    <span>Tối thiểu giá trị combo: 3,000,000 VNĐ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Installment Policy */}
        <section id="tra-gop" className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Chính sách trả góp
            </h2>
            <div className="mx-auto max-w-2xl rounded-xl bg-green-50 p-6 dark:bg-green-900/20">
              <h3 className="text-lg mb-3 font-semibold text-green-900 dark:text-green-100">
                Khuyến khích thanh toán một lần
              </h3>
              <p className="text-green-800 dark:text-green-200">
                Nhận ngay toàn bộ ưu đãi combo, không phí phụ trội, truy cập ngay lập tức
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="text-lg mb-4 font-semibold text-gray-900 dark:text-white">
                Gói hỗ trợ trả góp
              </h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 dark:bg-gray-700">
                  <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    Gói Comfort (2 đợt)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      • <strong>Cọc 50%</strong> khi đăng ký
                    </li>
                    <li>
                      • <strong>50% còn lại</strong> cuối khóa học
                    </li>
                    <li>
                      • <strong>Gói hỗ trợ: 3%</strong> bao gồm:
                    </li>
                    <li class="text-xs ml-4">✓ Nhắc nhở thanh toán qua SMS/Email</li>
                    <li class="text-xs ml-4">✓ Gia hạn thanh toán 1 lần</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4 dark:bg-gray-700">
                  <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    Gói Flexible (3 đợt)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      • <strong>Cọc 40%</strong> khi đăng ký
                    </li>
                    <li>
                      • <strong>30%</strong> tại 1/3 khóa học
                    </li>
                    <li>
                      • <strong>30%</strong> tại 2/3 khóa học
                    </li>
                    <li>
                      • <strong>Gói hỗ trợ: 5%</strong> bao gồm tất cả ưu đãi trên
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>🎁 Ưu đãi đặc biệt:</strong> Hoàn lại toàn bộ phí hỗ trợ khi đăng ký khóa
                  học tiếp theo!
                </p>
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <p>
                  <strong>Điều kiện:</strong> Khóa học từ 3,000,000 VNĐ trở lên, ký hợp đồng cam kết
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-blue-50 p-6 dark:bg-blue-900/20">
              <h3 className="text-lg mb-4 font-semibold text-blue-900 dark:text-blue-100">
                Lợi ích khi cọc tiền
              </h3>
              <ul className="space-y-3 text-blue-800 dark:text-blue-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                  <span>Nhận ưu đãi Early Bird và Group tại thời điểm đăng ký</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                  <span>Đảm bảo chỗ học và quyền truy cập khóa học</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                  <span>Nhận tài liệu học tập và hướng dẫn chi tiết trước khi khai giảng</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-white p-6 dark:bg-gray-800">
            <h3 className="text-lg mb-6 font-semibold text-gray-900 dark:text-white">
              Quy trình đăng ký
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-medium text-white">
                  1
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Liên hệ tư vấn viên để đăng ký trả góp
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Qua email{' '}
                    <Link
                      href="mailto:info@vntechies.dev"
                      className="text-orange-600 hover:underline"
                    >
                      info@vntechies.dev
                    </Link>{' '}
                    hoặc{' '}
                    <Link
                      href="https://fb.me/vntechies"
                      className="text-orange-600 hover:underline"
                    >
                      messenger
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-medium text-white">
                  2
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Cung cấp thông tin cá nhân và chọn hình thức trả góp
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-medium text-white">
                  3
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Ký hợp đồng trả góp</strong> và thanh toán cọc (50% hoặc 40%) + gói hỗ trợ
                  (3-5%)
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-medium text-white">
                  4
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Nhận xác nhận đăng ký và lịch thanh toán các đợt tiếp theo
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-medium text-white">
                  5
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Thanh toán đúng hạn theo hợp đồng để duy trì quyền học
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-red-50 p-6 dark:bg-red-900/20">
            <h3 className="text-lg mb-4 font-semibold text-red-900 dark:text-red-100">
              Lưu ý quan trọng
            </h3>
            <ul className="space-y-2 text-red-800 dark:text-red-200">
              <li>
                <strong>Quá hạn thanh toán:</strong> Tạm dừng quyền truy cập khóa học
              </li>
              <li>
                <strong>Hủy hợp đồng:</strong> Mất tiền cọc, gói hỗ trợ và tiền thanh toán, không
                hoàn lại
              </li>
              <li>
                <strong>Chuyển nhượng:</strong> Không được chuyển hợp đồng cho người khác
              </li>
              <li>
                <strong>Gói hỗ trợ:</strong> 3% (Comfort) hoặc 5% (Flexible), hoàn lại khi đăng ký
                khóa tiếp theo
              </li>
            </ul>
          </div>
        </section>

        {/* Referral Program */}
        <section id="gioi-thieu" className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Chương trình giới thiệu bạn bè
            </h2>
          </div>
          <div className="rounded-xl bg-purple-50 p-8 dark:bg-purple-900/20">
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg mb-4 font-semibold text-purple-900 dark:text-purple-100">
                  Ưu đãi
                </h3>
                <ul className="space-y-3 text-purple-800 dark:text-purple-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500"></span>
                    <span>
                      <strong>Người được giới thiệu:</strong> Giảm 10% so với giá Standard
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500"></span>
                    <span>
                      <strong>Người giới thiệu:</strong> Nhận 5% giá trị thanh toán dưới dạng tiền
                      mặt hoặc credit
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg mb-4 font-semibold text-purple-900 dark:text-purple-100">
                  Điều kiện tham gia
                </h3>
                <ul className="space-y-3 text-purple-800 dark:text-purple-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500"></span>
                    <span>Người được giới thiệu phải là học viên mới</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500"></span>
                    <span>Phải hoàn thành thanh toán trong vòng 30 ngày</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500"></span>
                    <span>Credit có thể sử dụng cho các khóa học tiếp theo tại VNTechies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
              <h3 className="text-lg mb-6 font-semibold text-gray-900 dark:text-white">
                Cách thức tham gia
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-medium text-white">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Chia sẻ mã giới thiệu cá nhân
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Liên hệ qua email{' '}
                      <Link
                        href="mailto:info@vntechies.dev"
                        className="text-purple-600 hover:underline"
                      >
                        info@vntechies.dev
                      </Link>{' '}
                      hoặc{' '}
                      <Link
                        href="https://fb.me/vntechies"
                        className="text-purple-600 hover:underline"
                      >
                        messenger
                      </Link>{' '}
                      để tạo mã
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-medium text-white">
                    2
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Bạn bè đăng ký với mã được VNTechies cung cấp
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-medium text-white">
                    3
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Nhận thưởng sau khi bạn bè hoàn thành thanh toán toàn bộ khoá học (áp dụng cả
                    với trả góp)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alumni Policy */}
        <section id="cuu-hoc-vien" className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Chính sách cựu học viên
            </h2>
          </div>
          <div className="rounded-xl bg-green-50 p-8 dark:bg-green-900/20">
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg mb-4 font-semibold text-green-900 dark:text-green-100">
                  Ưu đãi đặc biệt
                </h3>
                <ul className="space-y-3 text-green-800 dark:text-green-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></span>
                    <span>
                      <strong>Giảm 15%</strong> cho khóa học tiếp theo theo giá Standard
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></span>
                    <span>
                      <strong>Giảm 25%</strong> khi đăng ký combo từ 2 khóa trở lên
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></span>
                    <span>
                      <strong>Miễn phí</strong> các workshop và webinar đặc biệt
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg mb-4 font-semibold text-green-900 dark:text-green-100">
                  Điều kiện áp dụng
                </h3>
                <ul className="space-y-3 text-green-800 dark:text-green-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></span>
                    <span>Đã hoàn thành ít nhất 1 khóa học tại VNTechies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></span>
                    <span>Không áp dụng với các khuyến mãi khác</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></span>
                    <span>Đăng ký trong vòng 12 tháng kể từ khóa học cuối</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
              <h3 className="text-lg mb-4 font-semibold text-gray-900 dark:text-white">
                Quyền lợi bổ sung
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></span>
                  <span className="text-gray-700 dark:text-gray-300">Ưu tiên hỗ trợ kỹ thuật</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Tham gia cộng đồng cựu học viên
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Cơ hội thực tập và việc làm qua Career Center của VNTechies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Policy */}
        <section id="hoan-tien" className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Chính sách hoàn tiền
            </h2>
          </div>
          <div className="rounded-xl bg-red-50 p-8 dark:bg-red-900/20">
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg mb-4 font-semibold text-red-900 dark:text-red-100">
                  Điều kiện hoàn tiền
                </h3>
                <ul className="space-y-3 text-red-800 dark:text-red-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"></span>
                    <span>
                      <strong>Hoàn 30%</strong> trong vòng <strong>3 ngày đầu</strong> nếu chưa truy
                      cập bất kỳ nội dung nào và tỷ lệ hoàn thành dưới 5%
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"></span>
                    <span>
                      <strong>Hoàn 20%</strong> trong vòng <strong>7 ngày</strong> nếu tỷ lệ hoàn
                      thành dưới 10%
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"></span>
                    <span>
                      <strong>Không hoàn tiền</strong> sau 7 ngày hoặc khi tỷ lệ hoàn thành trên 10%
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg mb-4 font-semibold text-red-900 dark:text-red-100">
                  Trường hợp không được hoàn tiền
                </h3>
                <ul className="space-y-3 text-red-800 dark:text-red-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"></span>
                    <span>Đã khởi tạo khoá học (tài khoản lab)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"></span>
                    <span>Đã tham gia các buổi học</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"></span>
                    <span>Đã sử dụng mã giảm giá hoặc ưu đãi đặc biệt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"></span>
                    <span>Khóa học trả góp (chỉ áp dụng chính sách hủy hợp đồng)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"></span>
                    <span>Khóa học Financial Aid</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
              <h3 className="text-lg mb-6 font-semibold text-gray-900 dark:text-white">
                Quy trình hoàn tiền
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-medium text-white">
                    1
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Gửi yêu cầu hoàn tiền qua email{' '}
                    <Link href="mailto:info@vntechies.dev" className="text-red-600 hover:underline">
                      info@vntechies.dev
                    </Link>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-medium text-white">
                    2
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Cung cấp <strong>lý do chính đáng</strong> và thông tin cần thiết
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-medium text-white">
                    3
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    VNTechies có quyền từ chối nếu không đáp ứng điều kiện
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-medium text-white">
                    4
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Xử lý trong vòng 7-10 ngày làm việc sau khi được chấp thuận
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-medium text-white">
                    5
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Phí xử lý 5%</strong> sẽ được trừ vào số tiền hoàn lại
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Aid */}
        <section id="financial-aid" className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Chính sách hỗ trợ học phí (Financial Aid Program)
            </h2>
          </div>
          <div className="rounded-xl bg-blue-50 p-8 dark:bg-blue-900/20">
            <div className="mb-8 space-y-4">
              <p className="leading-relaxed text-blue-800 dark:text-blue-200">
                Financial Aid Program là chương trình hỗ trợ học phí của VNTechies, nhằm hỗ trợ các
                bạn trẻ trên hành trình chinh phục các mục tiêu sự nghiệp. Khi được chấp thuận
                Financial Aid, bạn sẽ được áp dụng mức học phí sinh viên cho các khóa học của
                VNTechies.
              </p>
              <p className="leading-relaxed text-blue-800 dark:text-blue-200">
                Để đăng ký chương trình Financial Aid, hãy giới thiệu cho VNTechies biết thêm thông
                tin về bản thân bạn và các mục tiêu, dự định nghề nghiệp sắp tới. VNTechies mong
                muốn khóa học của mình có thể đồng hành cùng những bạn trẻ nghiêm túc và cam kết với
                mục tiêu của mình.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg mb-4 font-semibold text-blue-900 dark:text-blue-100">
                Đối tượng áp dụng
              </h3>
              <div className="space-y-3 text-blue-800 dark:text-blue-200">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                  <span>
                    Sinh viên đang theo học tại các trường đại học, cao đẳng, hoặc các bạn trẻ đang
                    trong quá trình tìm kiếm việc làm
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                  <span>Người đi làm từ 18 tuổi - 23 tuổi</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                  <span>
                    Những người có hoàn cảnh khó khăn, cần hỗ trợ tài chính để theo đuổi mục tiêu
                    học tập và nghề nghiệp
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
              <h3 className="text-lg mb-4 font-semibold text-gray-900 dark:text-white">
                Cách thức đăng ký
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Liên hệ qua email{' '}
                <Link href="mailto:info@vntechies.dev" className="text-blue-600 hover:underline">
                  info@vntechies.dev
                </Link>{' '}
                với các thông tin sau:
              </p>
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Họ và tên</li>
                  <li>• Email</li>
                  <li>• Số điện thoại</li>
                  <li>• Năm sinh</li>
                  <li>• Trình độ học vấn</li>
                  <li>• Tình trạng việc làm hiện tại</li>
                  <li>• Thu nhập hiện tại (nếu có)</li>
                  <li>• Khóa học bạn muốn nhận Financial Aid</li>
                  <li>• Khóa học giúp ích gì cho mục tiêu công việc của bạn (100-250 từ)</li>
                  <li>
                    • Vì sao bạn chọn VNTechies để theo đuổi mục tiêu sự nghiệp của mình (100-250
                    từ)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <div className="rounded-xl bg-orange-50 p-8 dark:bg-orange-900/20">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Cần tư vấn?</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Liên hệ ngay để được tư vấn chi tiết về gói học phù hợp nhất
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="mailto:info@vntechies.dev"
                className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
              >
                Email
              </Link>
              <Link
                href="https://fb.me/vntechies"
                className="rounded-lg bg-purple-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-purple-700"
              >
                Facebook
              </Link>
              <Link
                href="https://discord.gg/k2uDgd7NZ4"
                className="rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-indigo-700"
              >
                Discord
              </Link>
            </div>
            <p className="text-xs mt-6 text-gray-500 dark:text-gray-400">
              VNTechies có quyền thay đổi chính sách bất cứ lúc nào • Cập nhật: 21/08/2025
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

import React from 'react'
import Image from '../components/Image'
import { FaCheckCircle, FaStar, FaUsers, FaGraduationCap, FaAward, FaClock } from 'react-icons/fa'
import Link from 'next/link'

const testimonials = [
  {
    rating: 5,
    comment: 'Khoá học rất thực tế, mentor tận tâm, mình đã pass SAA-C03 ngay lần đầu!',
    author: 'Võ Hùng - Division Manager',
  },
  {
    rating: 5,
    comment: 'Nội dung chi tiết, nhiều lab thực hành, cực kỳ hữu ích cho người mới.',
    author: 'Lê Thắng - Tech Lead',
  },
  {
    rating: 4,
    comment: 'Học xong tự tin đi phỏng vấn AWS, cảm ơn VNTechies!',
    author: 'Phạm Minh Quang - Fresher',
  },
  {
    rating: 5,
    comment:
      'VNTechies đưa ra nhiều kiến thức bổ ích về DEVOPS, giúp mình càng hiểu rõ hơn hệ thống mình đang làm việc',
    author: 'Nguyễn Xuân Trường - Developer Lead',
  },
  {
    rating: 5,
    comment: '🥰 Thông tin rất cụ thể, dễ tiếp cận. Mình thực sự đã được giúp đỡ',
    author: 'Lưu Bình Công - Project Manager',
  },
  {
    rating: 5,
    comment: 'Khóa học và series hữu ích cho devops beginner 👍',
    author: 'Đặng Hoàng Linh - Senior BrSE',
  },
  {
    rating: 5,
    comment:
      'Blog rất chất lượng, series 90 ngày DevOps rất phù hợp với cá nhân mình. Cảm ơn đội ngũ của VNTechies rất nhiều',
    author: 'Đào Mạnh Nhất - Software Developer',
  },
  {
    rating: 5,
    comment:
      'Với 5 năm kinh nghiệm IT mình thấy VNTechies rất hữu ích cho các bạn mới làm quen devops . Khoá học dễ học dễ hiểu bổ ích . Recommend cho mọi người',
    author: 'Nguyễn Tiến Nghiệp - Frontend Developer',
  },
  {
    rating: 5,
    comment: 'Rất nhiều kiến thức chất lượng và hữu ích cho người muốn tìm hiểu về Tech',
    author: 'Trần Duy Mạnh - Data Engineer',
  },
]

const courseInfo = {
  title: '🤖 AWS AI Practitioner - Professional AI Foundations',
  subtitle: 'Kiến thức nền tảng cho AI trên AWS - Giáo trình chuẩn toàn cầu',
  image: '/static/images/courses/awsaifc01.png',
  startDate: '15/08/2025',
  duration: '4 tuần (8 modules, 24h)',
  schedule: 'Thứ 3, 5, 7 (19:00 - 22:00)',
  location: '💻 Online qua Zoom',
  registrationLink: 'https://m.me/vntechies',
  hotline: '0983.666.126',
  objectives: [
    '🎯 Master AI, ML, Deep Learning và Generative AI concepts',
    '🛠️ Expert-level prompt engineering và foundation models',
    '🤖 Build production-ready GenAI applications với Amazon Bedrock & SageMaker',
    '⚖️ Implement enterprise-grade responsible AI và security practices',
    '📊 Evaluate và monitor foundation models với industry standards',
    '🎓 Achieve AWS AI Practitioner AIF-C01 certification với confidence',
    '💼 Apply GenAI strategies to real-world business scenarios',
  ],
  forWho: [
    '🎓 Fresh graduates muốn bước chân vào AI',
    '💻 Developers/IT muốn học AI/ML',
    '📊 Data analysts quan tâm đến AI',
    '🚀 Product managers làm việc với AI products',
    '💼 Business professionals muốn hiểu AI',
    '🔄 Career switchers chuyển sang AI',
    '☁️ AWS practitioners muốn expand sang AI',
  ],
}

// Statistics data
const stats = [
  { number: '10+', label: 'Học viên đã tham gia' },
  { number: '100%', label: 'Tỷ lệ pass chứng chỉ' },
  { number: '5', label: 'Domain chủ đề' },
  { number: '4+', label: 'Mentor kinh nghiệm' },
]

export default function CourseSpecial({ frontMatter, mentorDetails }) {
  const info = {
    title: frontMatter?.title || courseInfo.title,
    subtitle: frontMatter?.subtitle || courseInfo.subtitle,
    image: courseInfo.image,
    startDate: frontMatter?.startDate || courseInfo.startDate,
    duration: frontMatter?.duration || courseInfo.duration,
    schedule: frontMatter?.schedule || courseInfo.schedule,
    location: frontMatter?.location || courseInfo.location,
    price: frontMatter?.price || courseInfo.price,
    earlyBirdPrice: frontMatter?.earlyBirdPrice || courseInfo.earlyBirdPrice,
    registrationLink: frontMatter?.registrationLink || courseInfo.registrationLink,
    hotline: frontMatter?.hotline || courseInfo.hotline,
    objectives: frontMatter?.objectives || courseInfo.objectives,
    forWho: frontMatter?.forWho || courseInfo.forWho,
    content: frontMatter?.content || courseInfo.content,
  }

  const mentors = mentorDetails

  return (
    <div className="mx-auto w-full max-w-7xl">
      <section className="px-4 py-12 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl lg:text-5xl">
            {info.title}
          </h1>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
            {info.subtitle}
          </p>

          <div className="mb-8 flex justify-center">
            <Image
              src={info.image}
              alt={info.title}
              width={1200}
              height={630}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>

          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400 md:text-3xl">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <a
            href={info.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg inline-block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:from-purple-700 hover:to-pink-700 hover:shadow-xl"
          >
            Đăng ký ngay 🚀
          </a>
        </div>
      </section>

      <section className="mb-12 rounded-xl p-6 shadow-sm">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Vì sao nên chọn <span className="font-bold text-orange-500">VNTechies</span> để bắt đầu
          hành trình AI?
        </h2>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Cards: stack vertically on mobile, grid on desktop */}
          <div className="flex flex-1 flex-col items-start gap-4 rounded-xl bg-indigo-50 p-6 shadow-sm dark:bg-indigo-900/30">
            <div className="text-3xl">🎯</div>
            <div>
              <div className="text-xl font-bold text-indigo-800 dark:text-indigo-200">
                Giáo trình chuẩn quốc tế
              </div>
              <div className="text-base text-gray-600 dark:text-gray-400">
                Học theo giáo trình theo tiêu chuẩn của AWS, cập nhật mới nhất, sát thực tế với
                nhiều bài tập thực hành.
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-4 rounded-xl bg-indigo-50 p-6 shadow-sm dark:bg-indigo-900/30">
            <div className="text-3xl">🚀</div>
            <div>
              <div className="text-xl font-bold text-indigo-800 dark:text-indigo-200">
                Mentor thực chiến
              </div>
              <div className="text-base text-gray-600 dark:text-gray-400">
                100% là chuyên gia AWS tại các công ty nước ngoài, giàu kinh nghiệm dự án thực tế.
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-4 rounded-xl bg-indigo-50 p-6 shadow-sm dark:bg-indigo-900/30">
            <div className="text-3xl">🤝</div>
            <div>
              <div className="text-xl font-bold text-indigo-800 dark:text-indigo-200">
                Cam kết đồng hành
              </div>
              <div className="text-base text-gray-600 dark:text-gray-400">
                Hỗ trợ học viên đến khi pass chứng chỉ, giải đáp hỗ trợ cả trong và sau khoá học.
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-4 rounded-xl bg-indigo-50 p-6 shadow-sm dark:bg-indigo-900/30">
            <div className="text-3xl">🌟</div>
            <div>
              <div className="text-xl font-bold text-indigo-800 dark:text-indigo-200">
                Network chất lượng
              </div>
              <div className="text-base text-gray-600 dark:text-gray-400">
                Tham gia cộng đồng VNTechies, kết nối với hàng ngàn học viên, mentor, cơ hội việc
                làm.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col lg:col-span-4">
          <div className="flex flex-col items-start gap-4 rounded-xl border-l-4 border-yellow-400 border-gray-200 bg-yellow-50 p-5 shadow-sm dark:border-yellow-500 dark:border-gray-600 dark:bg-yellow-900/30">
            <div className="mb-2 flex items-center gap-3">
              <FaCheckCircle className="h-6 w-6 text-yellow-500" />
              <span className="text-lg font-bold text-yellow-700 dark:text-yellow-300">
                Giá trị vượt trội
              </span>
            </div>
            <div className="text-base text-gray-700 dark:text-gray-200">
              Định hướng nghề nghiệp, tips viết CV, phỏng vấn cho các vị trí Cloud/DevOps thông qua
              seminar cuối khoá học.
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Học xong, bạn sẽ làm được gì? 🎯
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col items-start rounded-xl bg-indigo-50 p-6 shadow-sm dark:bg-indigo-900/30">
            <div className="mb-2 text-xl font-bold text-indigo-800 dark:text-indigo-200">
              AI/GenAI không còn khó tiếp cận nữa 🧠
            </div>
            <div className="text-base text-gray-600 dark:text-gray-400">
              Hiểu cách AI hoạt động "behind the scenes". Phân biệt được ML vs GenAI, Foundation
              Models, LLMs. Có thể trao đổi với team AI.
            </div>
          </div>
          <div className="flex flex-col items-start rounded-xl bg-indigo-50 p-6 shadow-sm dark:bg-indigo-900/30">
            <div className="mb-2 text-xl font-bold text-indigo-800 dark:text-indigo-200">
              Xây dựng được các ứng dụng AI 🛠️
            </div>
            <div className="text-base text-gray-600 dark:text-gray-400">
              Hands-on với Bedrock, SageMaker, AI services (Rekognition, Comprehend). Tự tạo
              chatbot, AI image recognition app. Portfolio projects để chứng minh năng lực thực tế!
            </div>
          </div>
          <div className="flex flex-col items-start rounded-xl bg-indigo-50 p-6 shadow-sm dark:bg-indigo-900/30">
            <div className="mb-2 text-xl font-bold text-indigo-800 dark:text-indigo-200">
              Hiểu về AI Ethics & Responsible AI ⚖️
            </div>
            <div className="text-base text-gray-600 dark:text-gray-400">
              Hiểu bias trong AI, fairness, explainable AI. Hot topics trong interviews AI! Biết
              cách xây dựng hệ thống AI an toàn và có trách nhiệm.
            </div>
          </div>
          <div className="flex flex-col items-start rounded-xl bg-indigo-50 p-6 shadow-sm dark:bg-indigo-900/30">
            <div className="mb-2 text-xl font-bold text-indigo-800 dark:text-indigo-200">
              Thi đỗ chứng chỉ AIF-C01 và bắt đầu hành trình AI 🎓
            </div>
            <div className="text-base text-gray-600 dark:text-gray-400">
              Chứng chỉ AWS AIF-C01 + hướng dẫn bổ sung CV + portfolio projects. Sẵn sàng cho các
              công việc liên quan tới AI hoặc bắt đầu tìm hiểu về AI.
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
            "AI" nên tham gia khoá học này? 🤔
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <FaGraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Sinh viên mới ra trường, người mới bắt đầu với AI
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Phù hợp cho những ai chưa có kinh nghiệm về AI/ML, muốn xây dựng nền tảng vững chắc
                và tiếp cận công nghệ mới nhất.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <FaUsers className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Người đi làm muốn ứng dụng AI vào công việc
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dành cho các bạn làm Marketing, Sales, PM, Business Analyst... muốn hiểu và ứng dụng
                AI vào quy trình, sản phẩm, dự án thực tế.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <FaAward className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Kỹ sư, lập trình viên muốn nâng cấp kỹ năng AI/ML
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Phù hợp cho DevOps, Data Engineer, Software Engineer... muốn bổ sung kiến thức
                AI/ML, GenAI để phát triển sự nghiệp trong lĩnh vực công nghệ mới.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 mb-8 rounded-xl p-6 shadow-sm">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Nội dung khoá học & Các chủ đề
        </h2>
        <div className="overflow-x-auto">
          <table className="border-spacing-y-2 min-w-full border-separate rounded-lg border border-gray-300 text-sm dark:rounded-lg dark:border dark:border-gray-600 md:text-base">
            <thead>
              <tr className="bg-indigo-100 dark:bg-indigo-900/30">
                <th className="w-16 border border-gray-200 px-3 py-2 text-center font-bold text-indigo-700 dark:border dark:border-gray-600 dark:text-indigo-300">
                  Module
                </th>
                <th className="w-1/2 border border-gray-200 px-3 py-2 text-center font-bold text-indigo-700 dark:border dark:border-gray-600 dark:text-indigo-300">
                  Nội dung
                </th>
                <th className="w-1/4 border border-gray-200 px-3 py-2 text-center font-bold text-indigo-700 dark:border dark:border-gray-600 dark:text-indigo-300">
                  Domain AIF-C01
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Module 1-2: Giới thiệu AI & Dịch vụ AWS AI */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  1-2
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>
                      <strong>Giới thiệu AI & Dịch vụ AWS AI</strong>
                    </div>
                    <div>• Tổng quan về AI</div>
                    <div>• Khái niệm Machine Learning</div>
                    <div>• Machine Learning, Deep Learning và Generative AI</div>
                    <div>• Các dịch vụ AI của AWS</div>
                    <div>• Kiểm tra kiến thức</div>
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      • Demo: Sử dụng AWS AI Services
                    </div>
                  </div>
                </td>
                <td className="border border-gray-200 px-3 py-2 text-left text-center dark:border dark:border-gray-600">
                  <div>
                    <strong>Domain 1</strong> (20%)
                  </div>
                </td>
              </tr>
              {/* Module 3: Giới thiệu Generative AI */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  3
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>
                      <strong>Giới thiệu Generative AI</strong>
                    </div>
                    <div>• Foundation models (Mô hình nền tảng)</div>
                    <div>• Cách hoạt động của foundation models</div>
                    <div>• Dịch vụ Generative AI của AWS</div>
                    <div>• Demo: Sử dụng Amazon Q Developer</div>
                    <div>• Ứng dụng thực tế của Generative AI</div>
                    <div>• PartyRock, playground của Amazon Bedrock</div>
                    <div>• Kiểm tra kiến thức</div>
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      • Demo: Giới thiệu PartyRock
                    </div>
                  </div>
                </td>
                <td className="border border-gray-200 px-3 py-2 text-left text-center dark:border dark:border-gray-600">
                  <div>
                    <strong>Domain 2</strong> (24%)
                  </div>
                </td>
              </tr>
              {/* Module 4: Prompt Engineering */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  4
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>
                      <strong>Prompt Engineering và Kỹ thuật tạo prompt</strong>
                    </div>
                    <div>• Giá trị của prompt engineering</div>
                    <div>• Cách cấu trúc prompt cho mô hình ngôn ngữ lớn</div>
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      • Demo: Cấu trúc prompt hiệu quả
                    </div>
                    <div>• Kỹ thuật tạo prompt</div>
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      • Demo: Áp dụng kỹ thuật tạo prompt
                    </div>
                    <div>• Rủi ro khi tạo prompt không phù hợp</div>
                    <div>• Tính năng của Amazon Bedrock cho prompt engineering</div>
                    <div>• Kiểm tra kiến thức</div>
                  </div>
                </td>
                <td className="border border-gray-200 px-3 py-2 text-left text-center dark:border dark:border-gray-600">
                  <div>
                    <strong>Domain 2</strong> (24%)
                  </div>
                  <div>
                    <strong>Domain 3</strong> (28%)
                  </div>
                </td>
              </tr>
              {/* Module 5: Làm việc với Foundation Models */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  5
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>
                      <strong>Làm việc với Foundation Models</strong>
                    </div>
                    <div>• Tiêu chí lựa chọn và tuỳ chỉnh mô hình nền tảng</div>
                    <div>• Chọn mô hình phù hợp</div>
                    <div>• Đánh giá và giám sát mô hình</div>
                    <div>• Cấu hình tham số suy luận</div>
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      • Demo: Tuỳ chỉnh tham số suy luận
                    </div>
                    <div>• Retrieval-Augmented Generation (RAG)</div>
                    <div>• Kỹ thuật tuỳ chỉnh mô hình nền tảng</div>
                    <div>• Làm việc với foundation models trên AWS</div>
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      • Demo: Làm việc với mô hình trên Amazon Bedrock
                    </div>
                    <div>• Kiểm tra kiến thức</div>
                  </div>
                </td>
                <td className="border border-gray-200 px-3 py-2 text-left text-center dark:border dark:border-gray-600">
                  <div>
                    <strong>Domain 3</strong> (28%)
                  </div>
                </td>
              </tr>
              {/* Module 6: AI có trách nhiệm */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  6
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>
                      <strong>Thực hành AI có trách nhiệm</strong>
                    </div>
                    <div>• Định nghĩa AI có trách nhiệm</div>
                    <div>• Các yếu tố cần cân nhắc khi triển khai Generative AI</div>
                    <div>• Triển khai các biện pháp bảo vệ</div>
                    <div>• AWS hỗ trợ AI có trách nhiệm như thế nào</div>
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      • Demo: Sử dụng Amazon Bedrock Guardrails
                    </div>
                    <div>• Kiểm tra kiến thức</div>
                  </div>
                </td>
                <td className="border border-gray-200 px-3 py-2 text-left text-center dark:border dark:border-gray-600">
                  <div>
                    <strong>Domain 4</strong> (14%)
                  </div>
                </td>
              </tr>
              {/* Module 7: Bảo mật, Quản trị, Tuân thủ */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  7
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>
                      <strong>Bảo mật, Quản trị và Tuân thủ</strong>
                    </div>
                    <div>• Định nghĩa bảo mật, quản trị và tuân thủ cho Generative AI</div>
                    <div>• Bảo mật hệ thống AI trên AWS</div>
                    <div>• Quản trị hệ thống AI trên AWS</div>
                    <div>• Tuân thủ hệ thống AI trên AWS</div>
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      • Demo: Sử dụng AWS Audit Manager Frameworks
                    </div>
                    <div>• Kiểm tra kiến thức</div>
                  </div>
                </td>
                <td className="border border-gray-200 px-3 py-2 text-left text-center dark:border dark:border-gray-600">
                  <div>
                    <strong>Domain 5</strong> (14%)
                  </div>
                </td>
              </tr>
              {/* Module 8: Triển khai ứng dụng GenAI */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  8
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>
                      <strong>Triển khai ứng dụng Generative AI</strong>
                    </div>
                    <div>• Quy trình phát triển ứng dụng Generative AI</div>
                    <div>• Sử dụng AI agents trong Amazon Bedrock</div>
                    <div>• Lựa chọn dịch vụ AWS phù hợp</div>
                    <div>• Kiểm tra kiến thức</div>
                  </div>
                </td>
                <td className="border border-gray-200 px-3 py-2 text-left text-center dark:border dark:border-gray-600">
                  <div>
                    <strong>Domain 3</strong> (28%)
                  </div>
                </td>
              </tr>
              {/* Module 9: Ôn tập & Chuẩn bị thi */}
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  9
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div>
                      <strong>Ôn tập & Chuẩn bị thi chứng chỉ</strong>
                    </div>
                    <div>• Thông tin về kỳ thi AWS Certified AI Practitioner</div>
                    <div>• Tài liệu ôn tập & lộ trình chuẩn bị</div>
                    <div>• Luyện đề & chiến lược làm bài</div>
                  </div>
                </td>
                <td className="border border-gray-200 px-3 py-2 text-center dark:border dark:border-gray-600">
                  All domains
                </td>
              </tr>
              <tr className="align-top">
                <td className="border border-gray-200 px-3 py-2 text-center font-bold dark:border dark:border-gray-600">
                  10
                </td>
                <td className="border border-gray-200 px-3 py-2 dark:border dark:border-gray-600">
                  <div className="ml-2 space-y-1">
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                      🎯 Seminar hướng nghiệp: Tips viết CV, phỏng vấn, định hướng vị trí
                      Cloud/DevOps
                    </div>
                  </div>
                </td>
                <td className="border border-gray-200 px-3 py-2 text-center dark:border dark:border-gray-600">
                  All domains
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
            Đội ngũ Mentor
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-600 dark:text-gray-300">
            100% là chuyên gia AWS tại các công ty nước ngoài (MNC), giàu kinh nghiệm dự án thực tế
          </p>

          {/* Instructor Stats */}
          <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">4+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Mentor tham gia giảng dạy
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Mentor giữ vị trí Senior/Lead/Manager
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">9+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Năm kinh nghiệm AWS</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600 dark:text-orange-400">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Mentor có AWS Certification Professional level
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {mentors.map((m, idx) => {
              const slug = m.slug || (m.name ? m.name.toLowerCase().replace(/\s+/g, '-') : '')
              return (
                <Link key={idx} href={`/authors/${slug}`} className="block" passHref legacyBehavior>
                  <a className="flex h-full flex-col items-center justify-between rounded-xl bg-gray-50 p-6 shadow transition hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-indigo-700">
                    <div className="flex flex-col items-center" style={{ minHeight: 260 }}>
                      <Image
                        src={m.avatar || m.avatar_url || '/data/authors/default.jpg'}
                        alt={m.name}
                        width={240}
                        height={240}
                        className="mb-3 rounded-full object-cover shadow-lg"
                      />
                    </div>
                    <div className="flex w-full flex-1 flex-col items-center justify-center">
                      {m.currentPosition && (
                        <div className="mb-1 text-center text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                          {m.currentPosition}
                        </div>
                      )}
                      {m.occupation && (
                        <div className="text-xs mb-2 text-center text-gray-500 dark:text-gray-400">
                          {m.occupation}
                        </div>
                      )}
                      <div className="text-lg text-center font-bold">{m.name}</div>
                      <div className="text-center text-sm text-gray-600 dark:text-gray-300">
                        {m.title}
                      </div>
                      {m.bio && <div className="mt-1 text-center text-sm">{m.bio}</div>}
                      {m.socials && (
                        <div className="mt-2 flex justify-center gap-2">
                          {m.socials.map((s, i) => (
                            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
                              <Image
                                src={s.icon}
                                alt={s.name}
                                width={24}
                                height={24}
                                className="inline h-6 w-6"
                              />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
            Sau khóa học, bạn được gì?
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-600 dark:text-gray-300">
            Khóa học không chỉ giúp bạn đỗ chứng chỉ mà còn cung cấp nền tảng vững chắc cho Sự
            nghiệp AI/ML/GenAI
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                <span className="text-xl font-bold">01</span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Nắm vững kiến thức AI/ML/GenAI nền tảng
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hiểu rõ các khái niệm AI, ML, GenAI, Foundation Models, biết cách áp dụng vào các
                  bài toán thực tế và lựa chọn AWS AI services phù hợp cho từng use case.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                <span className="text-xl font-bold">02</span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Thực hành với AWS AI/ML Services
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hands-on experience với Amazon Bedrock, SageMaker, AI services như Rekognition,
                  Comprehend, Textract. Biết cách build GenAI applications và implement AI
                  solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400">
                <span className="text-xl font-bold">03</span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Định hướng nghề nghiệp AI/ML rõ ràng
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hiểu rõ các vai trò trong ngành AI/ML: AI Engineer, ML Engineer, Data Scientist,
                  AI Product Manager, GenAI Developer và lộ trình phát triển cho từng hướng.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400">
                <span className="text-xl font-bold">04</span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Network cùng professionals
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Kết nối với network trong cộng đồng VNTechies và cơ hội career development trong
                  lĩnh vực AI/GenAI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Đầu tư cho tương lai AI của bạn 💰
        </h2>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Standard Plan */}
          <div className="overflow-hidden rounded-lg border border-indigo-200 bg-white shadow-lg dark:border-indigo-700 dark:bg-gray-800">
            <div className="p-6 text-center">
              <h4 className="mb-2 text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                Standard
              </h4>
              <p className="mb-6 text-gray-600 dark:text-gray-400">Học phí tiêu chuẩn</p>

              <div className="mb-4 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 p-6 text-white">
                <div className="mb-1 text-sm font-semibold">Người đi làm</div>
                <div className="text-3xl font-bold">6.000.000</div>
              </div>

              <div className="mb-4 rounded-lg bg-indigo-100 p-4 text-indigo-800 dark:bg-indigo-800/30 dark:text-indigo-200">
                <div className="mb-1 text-sm font-semibold">Sinh viên</div>
                <div className="text-2xl font-bold">5.500.000</div>
              </div>

              <button className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 px-6 py-3 font-bold text-white transition duration-200 hover:from-indigo-600 hover:to-indigo-800">
                ĐĂNG KÝ NGAY
              </button>
            </div>
          </div>

          {/* Early Bird Plan */}
          <div className="overflow-hidden rounded-lg border border-emerald-200 bg-white shadow-lg dark:border-emerald-700 dark:bg-gray-800">
            <div className="p-6 text-center">
              <h4 className="mb-2 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                Early Bird
              </h4>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Học phí áp dụng khi đăng ký sớm ⏰
              </p>

              <div className="mb-4 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 text-white">
                <div className="mb-1 text-sm font-semibold">Người đi làm</div>
                <div className="text-3xl font-bold">5.400.000</div>
              </div>

              <div className="mb-4 rounded-lg bg-emerald-100 p-4 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
                <div className="mb-1 text-sm font-semibold">Sinh viên</div>
                <div className="text-2xl font-bold">4.900.000</div>
              </div>

              <button className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 font-bold text-white transition duration-200 hover:from-emerald-600 hover:to-emerald-700">
                ĐĂNG KÝ NGAY
              </button>
            </div>
          </div>

          {/* Group Plan */}
          <div className="relative overflow-hidden rounded-lg border border-pink-200 bg-white shadow-xl dark:border-pink-700 dark:bg-gray-800">
            {/* Popular badge */}
            <div className="text-xs absolute right-0 top-0 bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 font-bold text-white">
              PHỔ BIẾN
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 text-2xl font-bold text-pink-600 dark:text-pink-400">Group</h4>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Ưu đãi giá áp dụng với nhóm 2 người+ 👥
              </p>

              <div className="mb-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-white shadow-lg">
                <div className="mb-1 text-sm font-semibold">Người đi làm</div>
                <div className="text-3xl font-bold">5.000.000</div>
              </div>

              <div className="mb-4 rounded-lg bg-gradient-to-r from-pink-100 to-purple-100 p-4 text-pink-800 dark:bg-gradient-to-r dark:from-pink-900/30 dark:to-purple-900/30 dark:text-pink-200">
                <div className="mb-1 text-sm font-semibold">Sinh viên</div>
                <div className="text-2xl font-bold">4.500.000</div>
              </div>

              <button className="w-full rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-bold text-white shadow-lg transition duration-200 hover:from-pink-600 hover:to-purple-700 hover:shadow-xl">
                ĐĂNG KÝ NGAY
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Cảm nhận học viên
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex h-full flex-col rounded-lg bg-white p-4 shadow dark:bg-gray-900"
            >
              <div className="mb-2 flex items-center gap-1">
                {[...Array(t.rating)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400" />
                ))}
              </div>
              <blockquote className="flex-1 italic">“{t.comment}”</blockquote>
              <div className="mt-2 text-right text-sm font-semibold">— {t.author}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration & Support Section - Enhanced */}
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
            Bạn đã sẵn sàng tham gia cuộc cách mạng AI chưa? 🚀
          </h2>

          <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 dark:from-blue-900/20 dark:to-indigo-900/20">
            <div className="text-center">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Đăng ký ngay để nhận ưu đãi học phí và bộ tài liệu luyện thi AWS AIF-C01!
              </h3>

              <div className="flex flex-col gap-4 md:flex-row md:justify-center">
                <a
                  href={info.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:from-purple-700 hover:to-pink-700 hover:shadow-xl"
                >
                  ĐĂNG KÝ NGAY! 🤖
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Benefits Section */}
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
            Quyền lợi của học viên 🎁
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <FaClock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                LIFETIME ACCESS ♾️
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Truy cập vĩnh viễn vào AI knowledge base của VNTechies: video recordings, notes,
                updates. One-time payment, lifetime learning!
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <FaUsers className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Cộng đồng hỗ trợ học viên 🤝
              </h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start space-x-2">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span>
                    <strong>Career Center:</strong> Giới thiệu việc làm từ Mentor và cộng đồng
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span>
                    <strong>VNTechies Community:</strong> Kết nối và xây dựng network chuyên nghiệp
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span>
                    <strong>Cộng đồng Q&A:</strong> Hỏi đáp, tư vấn kiến thức và công việc 24/7
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <FaAward className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Sự kiện độc quyền 🎉
              </h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start space-x-2">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-purple-500" />
                  <span>Miễn phí tham gia Master Class và Workshop</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-purple-500" />
                  <span>Alumni's Support và Office Hour với chuyên gia</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-purple-500" />
                  <span>Cập nhật trend và công nghệ mới nhất trong ngành</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

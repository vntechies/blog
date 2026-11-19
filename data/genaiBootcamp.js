// VGE-C01 GenAI Engineer Bootcamp: the sales copy the bootcamp layout renders. The
// landing page and the build-operations page share one config so prices and facts
// stay in sync with data/courseCatalog.js and data/courseOffers.js.

export const genaiKey = 'genai-engineer-bootcamp'

// "Khai giảng theo đợt": the course has no fixed monthly intake.
export const genaiIntake = 'Khai giảng theo đợt'

// VGE-C01 tuition in VND: [working professional, student]
export const genaiTuition = {
  standard: [9000000, 8500000],
  earlyBird: [8100000, 7650000],
  group: [7650000, 7150000],
}

export const genaiBootcamp = {
  code: 'VGE-C01',
  title: 'GenAI Engineer Bootcamp',
  facts: [
    { label: 'Lớp mới', value: genaiIntake },
    { label: 'Lịch học', value: '19:00–21:30 · 2 buổi/tuần' },
    { label: 'Thời lượng', value: '6 tuần · 12 buổi · 30 giờ' },
    { label: 'Hình thức', value: 'Online · Google Meet' },
  ],
  overview: [
    { value: '12', label: 'Buổi học', note: 'Mỗi buổi 2,5 tiếng' },
    { value: '30h', label: 'Tổng thời lượng', note: '6 tuần học' },
    { value: '02 buổi/tuần', label: 'Lịch học', note: '19:00 - 21:30' },
    { value: genaiIntake, label: 'Lớp mới', note: 'Online Google Meet' },
  ],
  requirements: [
    'Viết được Python cơ bản: hàm, thư viện, đọc và ghi JSON, gọi HTTP API.',
    'Đã dùng AWS Console. Nếu chưa, nên học AIF-C01 hoặc CLF-C02 trước.',
    'Không cần kiến thức machine learning chuyên sâu.',
  ],
  stack: [
    'Amazon Bedrock',
    'Bedrock Knowledge Bases',
    'Bedrock Guardrails',
    'AWS Lambda',
    'Amazon API Gateway',
    'Amazon CloudWatch',
    'AWS Budgets',
    'Python',
  ],
  audience: {
    // Links to /pricing are added by the layout (next/link), not here.
    student: [
      'Học phí sinh viên riêng, thêm Financial Aid hỗ trợ tới 500.000₫',
      'Trả góp 2–3 đợt, cọc từ 40%',
      'Có dự án demo để đưa vào CV',
    ],
    working: [
      'Học online buổi tối 19:00–21:30, 2 buổi/tuần.',
      'Developer, data engineer cần xây chatbot/trợ lý nội bộ cho team.',
      'Rủ đồng nghiệp đăng ký nhóm 2+ người để nhận giá Group.',
      'Mentor là Senior/Lead/Manager tại công ty đa quốc gia.',
    ],
    company: [
      'Mở lớp riêng từ 5 học viên. Lớp riêng có thể dùng tài liệu đã được doanh nghiệp duyệt; lớp public dùng dữ liệu giả lập.',
      'Có báo cáo tiến độ từng học viên và buổi demo cuối khóa.',
    ],
  },
  market: {
    title: 'GenAI đang đi vào doanh nghiệp Việt Nam',
    items: [
      {
        value: '+417%',
        label:
          'Lượt đăng ký học GenAI của người học Việt Nam trên Coursera, tăng nhanh nhất châu Á – Thái Bình Dương.',
      },
      {
        value: '96% / 51%',
        label:
          'Gần 96% doanh nghiệp Việt Nam đón nhận AI; 51% vẫn dễ tổn thương trước rủi ro an ninh mạng gắn với công nghệ mới.',
      },
    ],
    // Website course pages have no single URL for a printed report, so the source
    // line is plain text rather than a link.
    source:
      'Nguồn: Coursera, Global Skills Report 2025 (trích WEF Future of Jobs 2025, Cisco AI Readiness Index 2024)',
    note: 'Số liệu tham khảo. VNTechies không cam kết việc làm hay mức lương.',
  },
  modules: [
    {
      title: 'Phase 1: Use case & nền tảng',
      focus: 'Buổi 1–2 · Use case & Bedrock',
      lessons: [
        {
          title:
            'Buổi 1: GenAI trong doanh nghiệp: chọn use case, workflow đơn giản hay RAG, chỉ số thành công',
          topics: [
            'Chọn bài toán phù hợp: khi nào dùng workflow cố định, khi nào cần RAG',
            'Chỉ số thành công: độ chính xác, độ liên quan, thời gian tiết kiệm',
            'Lab: chọn use case cho trợ lý tri thức nội bộ, viết tiêu chí nghiệm thu',
          ],
        },
        {
          title:
            'Buổi 2: Amazon Bedrock & LLM API: chọn model, prompt, structured output, chi phí theo token',
          topics: [
            'Chọn model theo yêu cầu chất lượng, độ trễ và chi phí',
            'Prompt, system prompt và structured output',
            'Chi phí theo token: ước tính cho một lượt hỏi đáp',
            'Tech stack: Amazon Bedrock, Python',
          ],
        },
      ],
    },
    {
      title: 'Phase 2: Dữ liệu & truy xuất',
      focus: 'Buổi 3–5 · Dữ liệu & RAG',
      lessons: [
        {
          title: 'Buổi 3: Chuẩn bị tài liệu: làm sạch, chunking, metadata, embeddings',
          topics: [
            'Làm sạch và tách tài liệu thành chunk theo ngữ cảnh',
            'Metadata cho truy xuất và trích dẫn nguồn',
            'Embeddings: chọn và tạo embedding cho kho tài liệu',
          ],
        },
        {
          title: 'Buổi 4: Vector store & Bedrock Knowledge Bases: truy xuất, trích dẫn nguồn',
          topics: [
            'Vector store và luồng truy xuất của Bedrock Knowledge Bases',
            'Ghép ngữ cảnh vào prompt để câu trả lời có trích dẫn nguồn',
            'Tech stack: Amazon Bedrock Knowledge Bases',
          ],
        },
        {
          title:
            'Buổi 5: Quyền truy cập & cập nhật: lọc theo người dùng, đồng bộ tài liệu mới, tool use cơ bản',
          topics: [
            'Lọc kết quả theo nhóm người dùng',
            'Đồng bộ tài liệu mới vào kho tri thức',
            'Tool use cơ bản để gọi dữ liệu có kiểm soát',
          ],
        },
      ],
    },
    {
      title: 'Phase 3: Đánh giá & an toàn',
      focus: 'Buổi 6–8 · Đánh giá & an toàn',
      lessons: [
        {
          title:
            'Buổi 6: Bộ câu hỏi kiểm thử: độ chính xác, độ liên quan, trích dẫn; chấm tự động có kiểm soát',
          topics: [
            'Xây bộ câu hỏi kiểm thử có đáp án tham chiếu',
            'Đo độ chính xác, độ liên quan và trích dẫn nguồn',
            'Chấm tự động có kiểm soát của con người',
          ],
        },
        {
          title:
            'Buổi 7: Dữ liệu nhạy cảm & prompt injection: Bedrock Guardrails, che dữ liệu cá nhân',
          topics: [
            'Nhận diện dữ liệu nhạy cảm và rủi ro prompt injection',
            'Cấu hình Bedrock Guardrails và che dữ liệu cá nhân',
            'Tech stack: Amazon Bedrock Guardrails',
          ],
        },
        {
          title: 'Buổi 8: Con người trong vòng lặp: khi nào từ chối, khi nào chuyển người duyệt',
          topics: [
            'Tiêu chí từ chối trả lời và cách thông báo cho người dùng',
            'Luồng chuyển người duyệt cho câu hỏi rủi ro',
            'Lab: thiết kế luồng người duyệt cho trợ lý nội bộ',
          ],
        },
      ],
    },
    {
      title: 'Phase 4: Vận hành & capstone',
      focus: 'Buổi 9–12 · Vận hành & demo',
      lessons: [
        {
          title: 'Buổi 9: Triển khai serverless: API Gateway, Lambda, logging',
          topics: [
            'Triển khai API serverless gọi mô hình trên Bedrock',
            'Logging để truy vết lượt hỏi đáp',
            'Tech stack: AWS Lambda, Amazon API Gateway',
          ],
        },
        {
          title: 'Buổi 10: Giám sát chất lượng, độ trễ, chi phí: CloudWatch, AWS Budgets',
          topics: [
            'Theo dõi độ trễ và chi phí bằng CloudWatch',
            'Cảnh báo ngân sách với AWS Budgets',
            'Tech stack: Amazon CloudWatch, AWS Budgets',
          ],
        },
        {
          title: 'Buổi 11: Capstone: hoàn thiện trợ lý tri thức nội bộ',
          topics: [
            'Hoàn thiện RAG, phân quyền, guardrails và dashboard chi phí',
            'Mentor review kiến trúc và kết quả đánh giá',
          ],
        },
        {
          title: 'Buổi 12: Demo Day: trình bày prototype, kết quả đánh giá và giới hạn',
          topics: [
            'Trình bày prototype trước lớp và mentor',
            'Nêu kết quả đánh giá, chi phí vận hành và giới hạn còn lại',
          ],
        },
      ],
    },
  ],
  capstone: {
    intro:
      'Trợ lý tri thức nội bộ chạy trên AWS, trên dữ liệu giả lập (hoặc tài liệu doanh nghiệp đã duyệt với lớp riêng).',
    items: [
      'bộ câu hỏi kiểm thử và kết quả đánh giá;',
      'phân quyền theo nhóm người dùng;',
      'guardrails cho dữ liệu nhạy cảm;',
      'dashboard chi phí và cảnh báo ngân sách;',
      'trang mô tả giới hạn và rủi ro.',
    ],
  },
  faq: [
    {
      q: 'Mình cần biết gì trước khi học?',
      a: 'Python cơ bản và đã dùng AWS Console. Nếu chưa quen AWS, nên học AIF-C01 hoặc CLF-C02 trước; combo AIF-C01 + VGE-C01 giảm 20%.',
    },
    {
      q: 'Khóa có luyện thi chứng chỉ AWS không?',
      a: 'Không. Đây là khóa thực hành xây ứng dụng; học viên nhận chứng nhận hoàn thành của VNTechies.',
    },
    {
      q: 'Lịch học thế nào?',
      a: '19:00–21:30, 2 buổi/tuần, online qua Google Meet, có video record để xem lại.',
    },
    {
      q: 'Doanh nghiệp dùng dữ liệu nội bộ được không?',
      a: 'Với lớp riêng: dùng tài liệu doanh nghiệp đã duyệt, không đưa dữ liệu cá nhân vào lab. Lớp public dùng dữ liệu giả lập.',
    },
    {
      q: 'Có trả góp không?',
      a: 'Có, 2–3 đợt, cọc từ 40%.',
    },
  ],
  relatedCourses: ['AIF-C01', 'DVA-C02', 'VDT-C01'],
}

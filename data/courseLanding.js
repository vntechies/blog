// Editorial summaries of the published course curricula.
export const courseLanding = {
  'aws/saa': {
    title: 'AWS Solutions Architect',
    headline: 'Thiết kế AWS. Chuẩn bị SAA-C03.',
    summary: 'Đi từ dịch vụ cốt lõi đến lựa chọn kiến trúc, thực hành và luyện đề cùng mentor.',
    fit: 'Dành cho developer, kỹ sư IT và người muốn chuyển hướng sang Cloud.',
    outcomes: [
      'Lựa chọn compute, storage và database theo yêu cầu hệ thống.',
      'Thiết kế kiến trúc có tính sẵn sàng, bảo mật và tối ưu chi phí.',
      'Luyện cách phân tích tình huống trong đề thi SAA-C03.',
    ],
    path: ['Nền tảng AWS', 'Thiết kế & thực hành', 'Phân tích kiến trúc', 'Ôn tập SAA-C03'],
    topic: 'aws',
  },
  devops: {
    title: 'DevOps Engineer Bootcamp',
    headline: 'Từ viết code đến triển khai một hệ thống.',
    summary:
      'Xây nền tảng Linux, container và CI/CD; thực hành tự động hóa hạ tầng và vận hành ứng dụng.',
    fit: 'Dành cho developer, IT engineer và người muốn xây nền tảng để chuyển sang DevOps.',
    outcomes: [
      'Làm việc với Linux, Git, Docker và Kubernetes.',
      'Xây quy trình CI/CD và quản lý hạ tầng bằng code.',
      'Kết nối các công cụ thành luồng triển khai và giám sát ứng dụng.',
    ],
    path: ['Linux & Git', 'Docker & Kubernetes', 'CI/CD & IaC', 'Giám sát & vận hành'],
    topic: 'devops',
  },
  'aws/clf': {
    title: 'AWS Cloud Practitioner',
    headline: 'Bắt đầu với Cloud bằng một lộ trình rõ ràng.',
    summary:
      'Hiểu các khái niệm, dịch vụ và mô hình chi phí AWS trước khi đi sâu vào kỹ thuật hoặc chuẩn bị CLF-C02.',
    fit: 'Dành cho người mới với AWS, sinh viên và người làm việc cùng các đội Cloud.',
    outcomes: [
      'Hiểu các dịch vụ AWS cốt lõi và tình huống sử dụng.',
      'Nắm mô hình trách nhiệm chia sẻ và bảo mật Cloud.',
      'Làm quen cấu trúc đề thi và cách ôn tập CLF-C02.',
    ],
    path: ['Cloud căn bản', 'Dịch vụ AWS', 'Bảo mật & chi phí', 'Ôn tập CLF-C02'],
    topic: 'aws',
  },
  'aws/aif': {
    title: 'AWS AI Practitioner',
    headline: 'Hiểu AI để chọn đúng cách ứng dụng.',
    summary:
      'Xây nền tảng AI, machine learning và generative AI trên AWS, kết hợp lộ trình chuẩn bị AIF-C01.',
    fit: 'Dành cho người muốn hiểu AI trên AWS từ nền tảng đến tình huống ứng dụng.',
    outcomes: [
      'Phân biệt AI, machine learning và generative AI.',
      'Hiểu cách lựa chọn dịch vụ AI trên AWS.',
      'Nhận diện yêu cầu về bảo mật và sử dụng AI có trách nhiệm.',
    ],
    path: ['AI & ML căn bản', 'Generative AI', 'Ứng dụng trên AWS', 'Ôn tập AIF-C01'],
    topic: 'general',
  },
  'aws/dva': {
    title: 'AWS Developer Associate',
    headline: 'Đưa kỹ năng phát triển ứng dụng lên AWS.',
    summary:
      'Học cách xây dựng, triển khai và xử lý sự cố ứng dụng Cloud, đồng thời chuẩn bị cho DVA-C02.',
    fit: 'Dành cho developer có nền tảng lập trình muốn phát triển ứng dụng trên AWS.',
    outcomes: [
      'Xây ứng dụng với các dịch vụ AWS và serverless.',
      'Áp dụng bảo mật và quy trình triển khai ứng dụng.',
      'Thực hành giám sát, xử lý sự cố và ôn thi DVA-C02.',
    ],
    path: ['AWS cho developer', 'Serverless & API', 'Triển khai & debug', 'Ôn tập DVA-C02'],
    topic: 'aws',
  },
  'aws/dea': {
    title: 'AWS Data Engineer Associate',
    headline: 'Xây data pipeline trên AWS, từ nguồn đến phân tích.',
    summary:
      'Lộ trình 12 module với data lake, Glue, Athena, EMR, Redshift và xử lý luồng dữ liệu, hướng tới DEA-C01.',
    fit: 'Dành cho engineer và analyst có nền tảng SQL hoặc Cloud muốn đi sâu vào data engineering.',
    outcomes: [
      'Thiết kế luồng thu thập, lưu trữ và xử lý dữ liệu.',
      'Lựa chọn dịch vụ AWS theo nhu cầu dữ liệu.',
      'Kết hợp thực hành, capstone và chuẩn bị DEA-C01.',
    ],
    path: ['Nền tảng dữ liệu', 'Data lake & ETL', 'Streaming & analytics', 'Capstone & DEA-C01'],
    topic: 'data',
  },
  'data-engineer-bootcamp': {
    title: 'Data Engineer Bootcamp',
    headline: 'Xây nền tảng kỹ thuật cho nghề Data Engineer.',
    summary: 'Học qua lộ trình từ nền tảng engineering đến xử lý dữ liệu và xây pipeline thực tế.',
    fit: 'Dành cho người có nền tảng lập trình, developer và analyst muốn chuyển sang Data Engineering.',
    outcomes: [
      'Củng cố nền tảng lập trình, SQL và hệ thống dữ liệu.',
      'Thực hành xây dựng, xử lý và vận hành data pipeline.',
      'Kết nối các phần của hệ thống qua bài tập và dự án.',
    ],
    path: ['Engineering foundations', 'Lưu trữ & xử lý', 'Data pipeline', 'Thực hành dự án'],
    topic: 'data',
  },
}

import siteMetadata from './siteMetadata'

export const headerNavLinks = [
  { href: '/courses', title: 'Khoá học' },
  { href: '/aws-certification-paths', title: 'AWS Paths' },
  { href: '/blog', title: 'Blog' },
  { href: '/series', title: 'Series' },
  { href: '/career', title: 'Career Center' },
]

export const footerNavLinks = [
  { href: '/pricing', title: 'Chính sách giá' },
  { href: '/docs/privacy', title: 'Chính sách bảo mật' },
  { href: '/docs/tos', title: 'Điều khoản sử dụng' },
  { href: siteMetadata.messenger, title: 'Liên hệ' },
  { href: '/about', title: 'About' },
  { href: '/feed.xml', title: 'RSS Feed' },
]

export const featuredLinks = [
  {
    title: 'Khoá học',
    summary: 'Tập trung vào DevOps, CI/CD, tự động hoá, CDK, AI và vận hành trên Cloud',
    url: '/courses',
  },
  {
    title: 'AWS Certification Paths',
    summary: 'Lộ trình chứng chỉ AWS từ Foundational đến Professional và Specialty',
    url: '/aws-certification-paths',
  },
  {
    title: 'Chứng chỉ',
    summary: 'Tham khảo các hướng dẫn học và thi các chứng chỉ liên quan tới Cloud & DevOps',
    url: '/tags/certificate',
  },
  {
    title: 'Web Development',
    summary: 'Hướng dẫn, cập nhật những thông tin mới về phát triển web và các ứng dụng web',
    url: '/tags/web',
  },
]

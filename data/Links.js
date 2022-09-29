import siteMetadata from './siteMetadata'

export const headerNavLinks = [
  { href: '/blog', title: 'Blog' },
  { href: '/courses', title: 'Khoá học' },
  { href: '/series', title: 'Series' },
  { href: '/tags', title: 'Tags' },
  { href: '/about', title: 'About' },
]

export const footerNavLinks = [
  { href: '/docs/privacy', title: 'Chính sách bảo mật' },
  { href: '/docs/tos', title: 'Điều khoản sử dụng' },
  { href: siteMetadata.messenger, title: 'Liên hệ' },
  { href: '/feed.xml', title: 'RSS Feed' },
]

export const featuredLinks = [
  {
    title: 'Web Development',
    summary: 'Hướng dẫn, cập nhật những thông tin mới về phát triển web và các ứng dụng web',
    url: '/tags/web',
  },
  {
    title: 'Cloud & DevOps',
    summary: 'Tập trung vào CDK, CI/CD, tự động hoá và vận hành trên Cloud',
    url: '/tags/devops',
  },
  {
    title: 'Chứng chỉ',
    summary: 'Tham khảo các hướng dẫn học và thi các chứng chỉ liên quan tới Cloud & DevOps',
    url: '/tags/certificate',
  },
]

import siteMetadata from './siteMetadata'

export const headerNavLinks = [
  { href: '/courses', title: 'Khoá học' },
  { href: '/blog', title: 'Blog' },
  { href: '/series', title: 'Series' },
  { href: '/tags', title: 'Tags' },
  { href: 'https://github.com/vntechies/toolbox', title: 'Toolbox' },
]

export const footerNavLinks = [
  { href: '/docs/privacy', title: 'Chính sách bảo mật' },
  { href: '/docs/tos', title: 'Điều khoản sử dụng' },
  { href: siteMetadata.messenger, title: 'Liên hệ' },
  { href: '/about', title: 'About' },
  { href: '/feed.xml', title: 'RSS Feed' },
]

export const featuredLinks = [
  {
    title: 'Khoá học',
    summary: 'Tập trung vào DevOps, CI/CD, tự động hoá, CDK và vận hành trên Cloud',
    url: '/courses',
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

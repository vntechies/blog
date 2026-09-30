import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import Image from 'next/image'
import { headerNavLinks } from '@/data/Links'
import { useRouter } from 'next/router'
import ThemeSwitch from './ThemeSwitch'

export default function Header() {
  const router = useRouter()
  const route = `/${router.pathname.split('/')[1]}`

  return (
    // Sticky from md up only; on mobile the fixed BottomNav is the navigation
    <header className="z-40 py-3 md:sticky md:top-0 md:py-4">
      <div className="surface-panel surface-glass flex h-16 items-center justify-between gap-4 px-4 sm:px-5 lg:px-6">
        <Link
          alt="Trang chủ"
          href="/"
          aria-label={siteMetadata.headerTitle}
          className="inline-flex items-center rounded-lg"
        >
          <Image
            src="/static/images/logo.webp"
            width={200}
            height={40}
            alt="VNTechies logo"
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden items-center gap-1 md:flex">
            {headerNavLinks.map(({ title, href }) => (
              <Link
                alt={title}
                key={title}
                href={href}
                aria-current={route === href ? 'page' : undefined}
                className={title === 'Khoá học' ? 'nav-link nav-link-featured' : 'nav-link'}
              >
                {title}
              </Link>
            ))}
          </nav>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}

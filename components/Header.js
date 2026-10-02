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
    <header className="surface-glass z-40 -mx-4 border-b border-line px-4 sm:-mx-6 sm:px-6 md:sticky md:top-0 lg:-mx-10 lg:px-10">
      <div className="flex h-14 items-center justify-between gap-4 sm:h-16">
        <Link
          alt="Trang chủ"
          href="/"
          aria-label={siteMetadata.headerTitle}
          className="group inline-flex min-w-0 items-center gap-3"
        >
          <Image
            src="/static/images/logo.webp"
            width={200}
            height={40}
            alt="VNTechies logo"
            className="h-6 w-auto sm:h-7"
            priority
          />
          <span className="hidden truncate text-xs text-fg-subtle lg:inline">
            <span className="text-success">~</span>/cloud<span className="text-fg-subtle">·</span>
            devops<span className="text-fg-subtle">·</span>data
            <span className="text-fg-subtle">·</span>ai
            <span className="term-cursor ml-1" aria-hidden="true" />
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden items-center gap-0.5 md:flex">
            {headerNavLinks.map(({ title, href }) => (
              <Link
                alt={title}
                key={title}
                href={href}
                aria-current={route === href ? 'page' : undefined}
                className={title === 'Khoá học' ? 'nav-link nav-link-featured mr-2' : 'nav-link'}
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

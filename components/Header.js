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
    <header className="sticky top-0 z-40 py-4 sm:py-5">
      <div className="surface-panel flex items-center justify-between gap-4 px-4 py-3 sm:px-5 lg:px-6">
        <Link
          alt="Trang chủ"
          href="/"
          aria-label={siteMetadata.headerTitle}
          className="inline-flex items-center"
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
        <div className="flex items-center gap-2 text-base leading-5 sm:gap-3">
          <nav className="hidden items-center gap-1 md:flex">
            {headerNavLinks.map(({ title, href }) => {
              const isActive = route === href
              const isFeatured = title === 'Khoá học'

              return (
                <Link
                  alt={title}
                  key={title}
                  href={href}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive && isFeatured
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : isFeatured
                      ? 'bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/50 dark:text-orange-200 dark:hover:bg-orange-900/80'
                      : isActive
                      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                      : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100'
                  }`}
                >
                  {title}
                </Link>
              )
            })}
          </nav>
          <ThemeSwitch />
        </div>
      </div>
      <div className="h-3 bg-gradient-to-b from-orange-100/70 to-transparent dark:from-orange-500/10" />
    </header>
  )
}

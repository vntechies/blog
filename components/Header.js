import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import Image from './Image'
import { headerNavLinks } from '@/data/Links'
import { useRouter } from 'next/router'
import ThemeSwitch from './ThemeSwitch'

export default function Header() {
  const router = useRouter()
  const route = `/${router.pathname.split('/')[1]}`

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link alt="Trang chủ" href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src={'/static/images/logo.webp'}
                width="200"
                height="40"
                alt="avatar"
                className="w-200 h-10"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map(({ title, href, isNew }) => (
            <div key={title} className="relative inline-block">
              <Link
                alt={title}
                href={href}
                className={`relative rounded px-5 py-1 transition-all duration-150 sm:px-3 sm:py-2
                  ${
                    route === href && title === 'Khoá học'
                      ? 'bg-orange-500 font-bold text-white shadow-lg dark:bg-orange-600 dark:text-white'
                      : title === 'Khoá học'
                      ? 'bg-orange-400/80 font-bold text-white shadow-lg hover:bg-orange-500 dark:bg-orange-700/80 dark:text-white'
                      : route === href
                      ? 'bg-gray-200 font-bold text-orange-500 dark:bg-gray-700 dark:text-orange-500'
                      : 'font-medium text-zinc-600 hover:bg-gray-200 dark:text-zinc-400 dark:hover:bg-gray-700'
                  }`}
              >
                {title}
              </Link>
            </div>
          ))}
        </div>
        <ThemeSwitch />
      </div>
    </header>
  )
}

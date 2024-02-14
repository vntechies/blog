import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import Image from './Image'
import { headerNavLinks } from '@/data/Links'
import { useRouter } from 'next/router'
import ThemeSwitch from './ThemeSwitch'
import LoginButton from './LoginButton'

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
                className="h-10 w-10 rounded-full"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map(({ title, href }) => (
            <Link
              alt={title}
              key={title}
              href={href}
              className={`rounded py-1 px-5 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3 ${
                route === href
                  ? 'bg-gray-200 font-bold text-orange-500 dark:bg-gray-700 dark:text-orange-500 '
                  : 'font-medium text-zinc-600 dark:text-zinc-400'
              }}`}
            >
              {title}
            </Link>
          ))}
        </div>
        <LoginButton />
        <ThemeSwitch />
      </div>
    </header>
  )
}

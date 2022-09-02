import Link from 'next/link'
import { useRouter } from 'next/router'

const BottomNav = () => {
  const router = useRouter()

  return (
    <div className="sm:hidden">
      <nav className="pb-safe fixed bottom-0 w-full border-t bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex h-16 max-w-md items-center justify-around px-6">
          {links.map(({ href, label, icon }) => (
            <Link key={label} href={href}>
              <a
                className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
                  router.pathname === href
                    ? 'text-orange-500 dark:text-orange-400'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
                }`}
              >
                {icon}
                <span
                  className={`text-xs ${
                    router.pathname === href
                      ? 'text-orange-500 dark:text-orange-400'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
                  }`}
                >
                  {label}
                </span>
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default BottomNav

const links = [
  {
    label: 'Home',
    href: '/',
    icon: (
      <svg
        viewBox="0 0 15 15"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
      >
        <path
          d="M7.825.12a.5.5 0 00-.65 0L0 6.27v7.23A1.5 1.5 0 001.5 15h4a.5.5 0 00.5-.5v-3a1.5 1.5 0 013 0v3a.5.5 0 00.5.5h4a1.5 1.5 0 001.5-1.5V6.27L7.825.12z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    label: 'Blog',
    href: '/blog',
    icon: (
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zm3 2.497L9 4v1l-5-.003v-1zm7 2.998H4v1h7v-1zm0 3.006l-7-.008v1L11 11v-1z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    label: 'Series',
    href: '/series',
    icon: (
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
      >
        <path
          d="M2 0h11v.5a5.482 5.482 0 01-1.874 4.134l1.968 3.93L8 14.672V8.994H7v5.678L1.907 8.564l1.967-3.93A5.482 5.482 0 012 .5V0z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    label: 'About',
    href: '/about',
    icon: (
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
      >
        <path
          d="M5.5 0a3.499 3.499 0 100 6.996A3.499 3.499 0 105.5 0zm-2 8.994a3.5 3.5 0 00-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 00-3.5-3.5h-4zm9 1.006H12v5h3v-2.5a2.5 2.5 0 00-2.5-2.5z"
          fill="currentColor"
        ></path>
        <path d="M11.5 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill="currentColor"></path>
      </svg>
    ),
  },
]

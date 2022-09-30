import { useSession, signIn, signOut } from 'next-auth/react'
import Link from '@/components/Link'
export default function LoginButton() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {/* <button onClick={() => signOut()}> */}
        <Link href="/user">
          <div
            title={session.user.name}
            className="ml-1 mr-1 h-10 w-10 rounded bg-zinc-200 bg-cover bg-center p-1 shadow-inner dark:bg-zinc-800 sm:ml-4"
            style={{
              backgroundImage: `url(${session.user.image})`,
            }}
          />
        </Link>
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn()} className="ml-1 mr-1 h-10 w-10 rounded p-1 sm:ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </button>
    </>
  )
}

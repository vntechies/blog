import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
export default function LoginButton() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>
          <Image
            src={session.user.image}
            alt="avatar"
            width="25px"
            height="25px"
            className="h-48 w-48 rounded-full"
          />
        </button>
      </>
    )
  }
  return (
    <>
      <button
        onClick={() => signIn()}
        className="rounded py-1 px-2 font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
      >
        Log in
      </button>
    </>
  )
}

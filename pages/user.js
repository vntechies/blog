import Image from '@/components/Image'
import { signIn, signOut, useSession } from 'next-auth/react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function User() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <PageSEO
          title={`Thông tin người dùng - ${siteMetadata.headerTitle}`}
          description={`Thông tin người dùng - ${siteMetadata.title}`}
        />
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="md:text-6xl text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14">
            Thông tin người dùng
          </h1>
        </div>
        <div className="items-start space-y-2 divide-y divide-gray-200 dark:divide-gray-700 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <div
              title={session.user.name}
              className="h-50 w-50 "
              style={{
                backgroundImage: `url(${session.user.image})`,
              }}
            />
            <Image
              src={session.user.image}
              alt="avatar"
              width="192"
              height="192"
              className="h-48 w-48 rounded"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {session.user.name}
            </h3>
            <p className="pb-8 italic leading-8 tracking-tight">{session.user.email}</p>
            <button
              onClick={() => signOut()}
              className="w-72 rounded-md bg-primary-700 py-2 px-4 font-medium text-white hover:bg-primary-700 dark:hover:bg-primary-400"
            >
              Chia tay 😭
            </button>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <h1 id="about-me">About You</h1>
          </div>
        </div>
      </>
    )
  }
  return (
    <p align="center">
      <button
        onClick={() => signIn()}
        className="w-72 rounded-md bg-primary-700 py-2 px-4 font-medium text-white hover:bg-primary-700 dark:hover:bg-primary-400"
      >
        Đăng nhập 🤟🏽
      </button>
    </p>
  )
}

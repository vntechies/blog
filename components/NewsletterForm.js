import { useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const NewsletterForm = ({ title = 'Nhận tin từ VNTechies 📮' }) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('Địa chỉ e-mail không hợp lệ hoặc bạn đã đăng ký nhận tin!')
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('Đăng ký thành công! 🎉 Bạn sẽ nhận được những cập nhật mới nhất từ VNTechies.')
  }

  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
      <form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
            id="email-input"
            name="email"
            placeholder={subscribed ? 'Bạn đã đăng ký!  🎉' : 'Email của bạn'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
          <button
            className={`w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 ${
              subscribed ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400'
            } focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? 'Cảm ơn 🥰!' : 'Đăng ký'}
          </button>
        </div>
      </form>
      {error && (
        <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
      )}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)

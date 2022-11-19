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
      console.log(error)
      setError(true)
      setMessage('Địa chỉ e-mail không hợp lệ hoặc bạn đã đăng ký nhận tin!')
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('Đăng ký thành công! 🎉 Bạn sẽ nhận được những thông tin mới nhất từ VNTechies.')
  }

  return (
    <div>
      <div className="text-lg w-72 pb-1 font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </div>
      <form className="flex flex-col" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
            id="email-input"
            name="email"
            placeholder={subscribed ? 'Bạn đã đăng ký!  🎉' : 'Nhập ngay email 💌'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="mt-2 rounded-md shadow-sm">
          <button
            className={`w-72 rounded-md bg-primary-700 py-2 px-4 font-medium text-white ${
              subscribed ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400'
            } focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? 'Cảm ơn 🥰!' : 'Nhận bản tin'}
          </button>
        </div>
      </form>
      {error && <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400">{message}</div>}
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

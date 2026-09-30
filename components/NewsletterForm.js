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
    setMessage('Đăng ký thành công! 🎉 Bạn sẽ nhận được những thông tin mới nhất từ VNTechies.')
  }

  return (
    <div>
      <div className="w-72 pb-2 text-lg font-semibold text-fg">{title}</div>
      <form className="flex flex-col gap-2" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="input-field w-72"
            id="email-input"
            name="email"
            placeholder={subscribed ? 'Bạn đã đăng ký!  🎉' : 'Nhập ngay email 💌'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <button
          className={`action-btn-primary w-72 ${subscribed ? 'cursor-default' : ''}`}
          type="submit"
          disabled={subscribed}
        >
          {subscribed ? 'Cảm ơn 🥰!' : 'Nhận bản tin'}
        </button>
      </form>
      {error && <div className="w-72 pt-2 text-sm text-danger">{message}</div>}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="surface-panel-muted p-6 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)

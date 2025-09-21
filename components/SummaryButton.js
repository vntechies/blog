import { useState } from 'react'

const SummaryButton = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [summary, setSummary] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSummarize = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://blog-summary-ai.sycu-lee.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      })

      if (!response.ok) {
        throw new Error('Không thể tạo tóm tắt')
      }

      const data = await response.json()
      setSummary(data.summary)
      setIsOpen(true)
    } catch (err) {
      setError('Không thể tạo tóm tắt. Vui lòng thử lại sau.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="sticky top-[4.5rem] z-50 float-right -mr-16 hidden xl:block">
        <button
          onClick={handleSummarize}
          disabled={isLoading}
          className="flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-300"
          aria-label="Tóm tắt bài viết bằng AI"
        >
          {isLoading ? (
            <svg
              className="h-5 w-5 animate-spin md:h-6 md:w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <>
              <svg
                className="h-5 w-5 md:h-6 md:w-6"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <linearGradient
                  id="a"
                  x1="-.556"
                  x2="-.628"
                  y1="128.705"
                  y2="128.977"
                  gradientTransform="matrix(155.9359 0 0 -364.3 119.128 47001.098)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#eb6f07" />
                  <stop offset="1" stopColor="#fab743" />
                </linearGradient>
                <path
                  fill="url(#a)"
                  d="M33.882 9.694 48.491 36.05 35.075 60.199a7.75 7.75 0 0 0 0 7.543l13.416 24.209-14.609 26.356a15.501 15.501 0 0 1-6.559-6.172L4.068 71.737a15.563 15.563 0 0 1 0-15.503l23.255-40.398a15.501 15.501 0 0 1 6.559-6.142z"
                />
                <linearGradient
                  id="b"
                  x1="-.594"
                  x2="-.715"
                  y1="129.358"
                  y2="129.519"
                  gradientTransform="matrix(149.7049 0 0 -194.8 131.59 25305.098)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#d96504" />
                  <stop offset="1" stopColor="#d96504" stopOpacity="0" />
                </linearGradient>
                <path
                  fill="url(#b)"
                  d="M35.075 60.229a7.75 7.75 0 0 0 0 7.513l13.416 24.209-14.609 26.356a15.501 15.501 0 0 1-6.559-6.172L4.068 71.737c-1.848-3.19 8.497-7.006 31.007-11.478v-.03z"
                  opacity=".7"
                />
                <linearGradient
                  id="f"
                  x1="-.561"
                  x2="-.634"
                  y1="128.688"
                  y2="128.96"
                  gradientTransform="matrix(201.2571 0 0 -375 180.743 48376)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ffa95f" />
                  <stop offset="1" stopColor="#ffebc8" />
                </linearGradient>
                <path
                  fill="url(#f)"
                  d="M40.739 119.886c-2.385 0-4.77-.566-6.857-1.58l28.681-51.727a5.353 5.353 0 0 0 0-5.188L33.882 9.694a15.492 15.492 0 0 1 6.857-1.61h23.255l28.92 52.145a7.75 7.75 0 0 1 0 7.513l-28.92 52.145H40.739z"
                />
              </svg>
              <span className="text-sm font-medium md:text-base">Tóm tắt bằng AI</span>
            </>
          )}
        </button>
      </div>

      {/* Mobile button */}
      <div className="sticky top-[4.5rem] z-50 flex justify-end px-4 py-2 xl:hidden">
        <button
          onClick={handleSummarize}
          disabled={isLoading}
          className="flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-300"
          aria-label="Tóm tắt bài viết bằng AI"
        >
          {isLoading ? (
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <>
              <svg className="h-5 w-5" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                <linearGradient
                  id="a-mobile"
                  x1="-.556"
                  x2="-.628"
                  y1="128.705"
                  y2="128.977"
                  gradientTransform="matrix(155.9359 0 0 -364.3 119.128 47001.098)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#eb6f07" />
                  <stop offset="1" stopColor="#fab743" />
                </linearGradient>
                <path
                  fill="url(#a-mobile)"
                  d="M33.882 9.694 48.491 36.05 35.075 60.199a7.75 7.75 0 0 0 0 7.543l13.416 24.209-14.609 26.356a15.501 15.501 0 0 1-6.559-6.172L4.068 71.737a15.563 15.563 0 0 1 0-15.503l23.255-40.398a15.501 15.501 0 0 1 6.559-6.142z"
                />
                <linearGradient
                  id="b-mobile"
                  x1="-.594"
                  x2="-.715"
                  y1="129.358"
                  y2="129.519"
                  gradientTransform="matrix(149.7049 0 0 -194.8 131.59 25305.098)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#d96504" />
                  <stop offset="1" stopColor="#d96504" stopOpacity="0" />
                </linearGradient>
                <path
                  fill="url(#b-mobile)"
                  d="M35.075 60.229a7.75 7.75 0 0 0 0 7.513l13.416 24.209-14.609 26.356a15.501 15.501 0 0 1-6.559-6.172L4.068 71.737c-1.848-3.19 8.497-7.006 31.007-11.478v-.03z"
                  opacity=".7"
                />
                <linearGradient
                  id="f-mobile"
                  x1="-.561"
                  x2="-.634"
                  y1="128.688"
                  y2="128.96"
                  gradientTransform="matrix(201.2571 0 0 -375 180.743 48376)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ffa95f" />
                  <stop offset="1" stopColor="#ffebc8" />
                </linearGradient>
                <path
                  fill="url(#f-mobile)"
                  d="M40.739 119.886c-2.385 0-4.77-.566-6.857-1.58l28.681-51.727a5.353 5.353 0 0 0 0-5.188L33.882 9.694a15.492 15.492 0 0 1 6.857-1.61h23.255l28.92 52.145a7.75 7.75 0 0 1 0 7.513l-28.92 52.145H40.739z"
                />
              </svg>
              <span className="text-sm font-medium">Tóm tắt bằng AI</span>
            </>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-gray-900 dark:bg-opacity-75"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all dark:bg-gray-800">
            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                type="button"
                className="rounded-md text-gray-400 focus:outline-none hover:text-gray-500 dark:hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Đóng</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="sm:flex sm:items-start">
              <div className="mt-3 w-full sm:mt-0">
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <linearGradient
                      id="a-modal"
                      x1="-.556"
                      x2="-.628"
                      y1="128.705"
                      y2="128.977"
                      gradientTransform="matrix(155.9359 0 0 -364.3 119.128 47001.098)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#eb6f07" />
                      <stop offset="1" stopColor="#fab743" />
                    </linearGradient>
                    <path
                      fill="url(#a-modal)"
                      d="M33.882 9.694 48.491 36.05 35.075 60.199a7.75 7.75 0 0 0 0 7.543l13.416 24.209-14.609 26.356a15.501 15.501 0 0 1-6.559-6.172L4.068 71.737a15.563 15.563 0 0 1 0-15.503l23.255-40.398a15.501 15.501 0 0 1 6.559-6.142z"
                    />
                    <linearGradient
                      id="b-modal"
                      x1="-.594"
                      x2="-.715"
                      y1="129.358"
                      y2="129.519"
                      gradientTransform="matrix(149.7049 0 0 -194.8 131.59 25305.098)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#d96504" />
                      <stop offset="1" stopColor="#d96504" stopOpacity="0" />
                    </linearGradient>
                    <path
                      fill="url(#b-modal)"
                      d="M35.075 60.229a7.75 7.75 0 0 0 0 7.513l13.416 24.209-14.609 26.356a15.501 15.501 0 0 1-6.559-6.172L4.068 71.737c-1.848-3.19 8.497-7.006 31.007-11.478v-.03z"
                      opacity=".7"
                    />
                    <linearGradient
                      id="f-modal"
                      x1="-.561"
                      x2="-.634"
                      y1="128.688"
                      y2="128.96"
                      gradientTransform="matrix(201.2571 0 0 -375 180.743 48376)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#ffa95f" />
                      <stop offset="1" stopColor="#ffebc8" />
                    </linearGradient>
                    <path
                      fill="url(#f-modal)"
                      d="M40.739 119.886c-2.385 0-4.77-.566-6.857-1.58l28.681-51.727a5.353 5.353 0 0 0 0-5.188L33.882 9.694a15.492 15.492 0 0 1 6.857-1.61h23.255l28.92 52.145a7.75 7.75 0 0 1 0 7.513l-28.92 52.145H40.739z"
                    />
                  </svg>
                  <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                    Tóm tắt bài viết
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-300">{summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="fixed top-24 right-4 z-50 rounded-md bg-red-50 p-4 dark:bg-red-900 md:right-6">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800 dark:text-red-200">{error}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SummaryButton

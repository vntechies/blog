'use client'

import { useRouter } from 'next/router'

export function Ads() {
  const router = useRouter()

  return (
    <div className="bg-accent/85 fixed top-0 right-0 left-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-sm md:inset-0">
      <div className="relative max-h-full w-full max-w-2xl p-5">
        <div className="w-full rounded-lg border bg-gray-900 p-2 shadow-sm">
          <div className="px-6 py-4">
            <h4 className="text-3xl font-semibold leading-none tracking-tight text-white">
              Phát hiện Adblock
            </h4>
          </div>

          <div className="px-6">
            <p className="text-lg text-white">
              Có vẻ như bạn đang sử dụng một tiện ích chặn quảng cáo trong trình duyệt của mình.
              VNTechies được duy trì nhờ vào doanh thu quảng cáo để cung cấp nội dung miễn phí cho
              anh chị em. Mong anh chị em vui lòng hỗ trợ team bằng cách tắt trình chặn quảng cáo ❤️
            </p>
          </div>

          <button
            className="ring-offset-background focus-visible:ring-ring m-4 inline-flex h-10 items-center justify-center rounded-md bg-primary-500 p-6 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary-700"
            onClick={() => router.reload()}
          >
            Refresh trang
          </button>
        </div>
      </div>
    </div>
  )
}

import { useEffect } from 'react'

export const SWInstall = () => {
  useEffect(() => {
    window.addEventListener('load', () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/sw.js')
          .then(() => {
            console.log('Service worker registered!')
          })
          .catch((error) => {
            console.warn('Error registering service worker:')
            console.warn(error)
          })
      }
    })
  }, [])

  return null
}

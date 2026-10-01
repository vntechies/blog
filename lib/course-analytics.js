// Queue the gtag command format even before the lazy GA4 script has loaded.
export function trackCourseEvent(name, params) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params)
    return
  }
  window.dataLayer = window.dataLayer || []
  function queue() {
    window.dataLayer.push(arguments)
  }
  queue('event', name, params)
}

export function trackCourseAction(course, action) {
  if (typeof window === 'undefined') return
  trackCourseEvent('course_cta_click', {
    course,
    action,
    page_path: window.location.pathname,
  })
}

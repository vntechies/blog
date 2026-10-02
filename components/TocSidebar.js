import { useEffect, useRef, useState } from 'react'

/**
 * @typedef TocHeading
 * @prop {string} value
 * @prop {number} depth
 * @prop {string} url   // e.g. "#my-heading"
 */

/**
 * Sidebar table of contents with scrollspy: the heading matching the section
 * currently in view is highlighted and the TOC "moves along" with the post,
 * header by header.
 *
 * @param {{ toc: TocHeading[], indentDepth?: number, fromHeading?: number, toHeading?: number }} props
 */
const TocSidebar = ({ toc, indentDepth = 3, fromHeading = 1, toHeading = 6 }) => {
  const filteredToc = toc.filter(
    (heading) => heading.depth >= fromHeading && heading.depth <= toHeading
  )

  const [activeId, setActiveId] = useState('')
  // Track visibility of every observed heading so the "active" one is the
  // topmost heading currently in view (section-by-section as you scroll).
  const visibility = useRef(new Map())
  const activeLinkRef = useRef(null)

  useEffect(() => {
    const ids = filteredToc.map((h) => h.url.replace(/^#/, '')).filter(Boolean)
    const elements = ids.map((id) => document.getElementById(id)).filter((el) => el !== null)

    if (elements.length === 0) return

    const map = visibility.current
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          map.set(entry.target.id, entry.isIntersecting)
        }
        // Pick the first heading (in document order) that is currently visible.
        const firstVisible = ids.find((id) => map.get(id))
        if (firstVisible) {
          setActiveId(firstVisible)
        }
      },
      // Trigger as a heading crosses the upper portion of the viewport.
      { rootMargin: '0px 0px -70% 0px', threshold: [0, 1] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toc])

  // Keep the active TOC entry scrolled into view inside the (possibly scrollable) panel.
  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({ block: 'nearest' })
    }
  }, [activeId])

  return (
    <ul>
      {filteredToc.map((heading) => {
        const id = heading.url.replace(/^#/, '')
        const isActive = id === activeId
        return (
          <li key={heading.value} className={heading.depth >= indentDepth ? 'ml-6' : undefined}>
            <a
              ref={isActive ? activeLinkRef : undefined}
              href={heading.url}
              aria-current={isActive ? 'location' : undefined}
              className={
                isActive
                  ? 'font-semibold text-brand-strong'
                  : 'text-fg-muted hover:text-brand-strong'
              }
            >
              {heading.value}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default TocSidebar

import React, { useRef, useEffect, useCallback } from 'react'
import { useTheme } from 'next-themes'

import siteMetadata from '@/data/siteMetadata'

const Utterances = () => {
  const { theme, resolvedTheme } = useTheme()
  const commentsTheme =
    theme === 'dark' || resolvedTheme === 'dark'
      ? siteMetadata.comment.utterancesConfig.darkTheme
      : siteMetadata.comment.utterancesConfig.theme

  const COMMENTS_ID = 'comments-container'
  const ref = useRef(null)

  const LoadComments = useCallback(() => {
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', siteMetadata.comment.utterancesConfig.repo)
    script.setAttribute('issue-term', siteMetadata.comment.utterancesConfig.issueTerm)
    script.setAttribute('label', siteMetadata.comment.utterancesConfig.label)
    script.setAttribute('theme', commentsTheme)
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    script.onload = (ev) => {
      console.log(ev)
      const comments = document.getElementById(COMMENTS_ID)
      if (comments && comments.children[1]) {
        comments.children[1].style.display = 'none'
      }
    }

    // Ensure the element is attached to the DOM before appending the script
    if (ref.current) {
      ref.current.appendChild(script)
    } else {
      console.error('Failed to append script: ref.current is null')
    }

    const comments = document.getElementById(COMMENTS_ID)
    if (comments) {
      if (comments.innerHTML.length > 1) {
        comments.innerHTML = ''
      }
      comments.appendChild(script)
    }

    return () => {
      const comments = document.getElementById(COMMENTS_ID)
      if (comments) comments.innerHTML = ''
    }
  }, [commentsTheme])

  // Reload on theme change
  useEffect(() => {
    LoadComments()
  }, [LoadComments])

  // Added `relative` to fix a weird bug with `utterances-frame` position
  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      <div ref={ref} className="utterances-frame relative" id={COMMENTS_ID} />
    </div>
  )
}

export default Utterances

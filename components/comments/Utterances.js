import React, { useRef, useEffect } from 'react'
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

  useEffect(() => {
    const loadComments = () => {
      const script = document.createElement('script')
      script.src = 'https://utteranc.es/client.js'
      script.setAttribute('repo', siteMetadata.comment.utterancesConfig.repo)
      script.setAttribute('issue-term', siteMetadata.comment.utterancesConfig.issueTerm)
      script.setAttribute('label', siteMetadata.comment.utterancesConfig.label)
      script.setAttribute('theme', commentsTheme)
      script.setAttribute('crossorigin', 'anonymous')
      script.async = true

      const comments = ref.current
      if (comments) comments.appendChild(script)

      return () => {
        const comments = ref.current
        if (comments) comments.innerHTML = ''
      }
    }

    loadComments()
  }, [commentsTheme])

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      <div ref={ref} className="utterances-frame relative" id={COMMENTS_ID} />
    </div>
  )
}

export default Utterances

import React, { useState, useEffect, useCallback } from 'react'
import { useTheme } from 'next-themes'
import Giscus from '@giscus/react'

import siteMetadata from '@/data/siteMetadata'

const GiscusComment = () => {
  const { theme, resolvedTheme } = useTheme()
  const commentsTheme =
    siteMetadata.comment.giscusConfig.themeURL === ''
      ? theme === 'dark' || resolvedTheme === 'dark'
        ? siteMetadata.comment.giscusConfig.darkTheme
        : siteMetadata.comment.giscusConfig.theme
      : siteMetadata.comment.giscusConfig.themeURL

  const COMMENTS_ID = 'comments-container'

  const { repo, repositoryId, category, categoryId, mapping, reactions, metadata, inputPosition } =
    siteMetadata?.comment?.giscusConfig

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      <Giscus
        repo={repo}
        repoId={repositoryId}
        category={category}
        categoryId={categoryId}
        mapping={mapping}
        reactionsEnabled={reactions}
        emitMetadata={metadata}
        inputPosition={inputPosition}
        theme={commentsTheme}
        loading="eager"
        id={COMMENTS_ID}
        className="giscus"
      />
    </div>
  )
}

export default GiscusComment

import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'

const Share = ({ title, href }) => {
  return (
    <div className="text-md pt-6 pb-6 text-gray-700 dark:text-gray-300">
      <div className="flex space-x-2 md:space-x-4">
        <Link
          aria-label="Tweet via Twitter"
          type="button"
          target="popup"
          href={`https://twitter.com/intent/tweet?url=https://dev.vntechies.com/${href}&text=${title}&via=vntechies`}
          className="flex items-center rounded-md bg-gray-200 px-2 py-2 text-sm text-blue-400 transition-all hover:bg-gray-300 hover:text-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-300 md:px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-6 fill-current text-blue-400 hover:text-blue-500 dark:text-gray-200 dark:hover:text-gray-300 md:w-6"
          >
            <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"></path>
          </svg>
          Tweet
        </Link>
        <Link
          aria-label="Share on Facebook"
          type="button"
          href={`https://www.facebook.com/dialog/feed?app_id=${siteMetadata.comment.facebookConfig.appId}&display=popup&link=https%3A//dev.vntechies.com/${href}&redirect_uri=https://developers.facebook.com/tools/explorer`}
          className="flex items-center rounded-md bg-gray-200 py-2 px-2 text-sm text-blue-400 transition-all hover:bg-gray-300 hover:text-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-300 md:px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-6 fill-current text-blue-400 hover:text-blue-500 dark:text-gray-200 dark:hover:text-gray-300 md:w-6"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
          </svg>
          Share
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-md bg-gray-200 py-2 px-2 text-sm text-violet-400 transition-all hover:bg-gray-300 hover:text-violet-500 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-300 md:px-4"
          href={siteMetadata.discord}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-6 fill-current text-violet-400 hover:text-violet-500 dark:text-gray-200 dark:hover:text-gray-300 md:w-6"
          >
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"></path>
          </svg>
          Discord
        </a>
      </div>
    </div>
  )
}

export default Share

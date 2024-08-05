import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'

const Share = ({ fileName, href }) => {
  const githubUrl = () =>
    `${siteMetadata.siteRepo}/blob/master/data/${href.split('/')[1]}/${fileName}`

  return (
    <div className="text-md pt-6 pb-6 text-gray-700 dark:text-gray-300">
      <div className="flex space-x-2 md:space-x-4">
        <Link
          alt="Chia sẻ lên Facebook"
          aria-label="Chia sẻ lên Facebook"
          type="button"
          href={`https://www.facebook.com/dialog/feed?app_id=${siteMetadata.comment.facebookConfig.appId}&display=popup&link=${siteMetadata.siteUrl}${href}`}
        >
          <button className="flex items-center rounded-md bg-gray-200 py-2 px-2 text-sm text-blue-400 transition-all hover:bg-gray-300 hover:text-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-300 md:px-4">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-6 fill-current text-blue-400 hover:text-blue-500 dark:text-gray-200 dark:hover:text-gray-300 md:w-6"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
            </svg>
            Share
          </button>
        </Link>
        <Link
          alt="Đến Discord server"
          aria-label="Đến Discord server"
          target="_blank"
          rel="noopener noreferrer"
          href={siteMetadata.discord}
        >
          <button className="flex items-center rounded-md bg-gray-200 py-2 px-2 text-sm text-violet-400 transition-all hover:bg-gray-300 hover:text-violet-500 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-300 md:px-4">
            <svg
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
              className="h-4 w-6 fill-current text-violet-400 hover:text-violet-500 dark:text-gray-200 dark:hover:text-gray-300 md:w-6"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"></path>
            </svg>
            Discord
          </button>
        </Link>
        <Link
          alt="Xem trên Github"
          aria-label="Xem trên Github"
          target="_blank"
          rel="noopener noreferrer"
          href={githubUrl()}
        >
          <button className="flex items-center rounded-md bg-gray-200 py-2 px-2 text-sm text-gray-400 transition-all hover:bg-gray-300 hover:text-gray-500 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-300 md:px-4">
            <svg
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
              className="h-4 w-6 fill-current text-gray-400 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-300 md:w-6"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
            Github
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Share

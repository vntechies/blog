import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="text-xs mr-2 mb-2 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 font-semibold uppercase tracking-wide text-orange-700 hover:bg-orange-100 dark:border-orange-700/60 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag

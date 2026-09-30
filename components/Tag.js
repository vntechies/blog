import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`} className="chip mr-2 mb-2 uppercase tracking-wide">
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag

import Link from '@/components/Link'
import Image from 'next/image'

const ArticleThumbnail = ({ slug, title, image }) => {
  return (
    <Image
      alt={title}
      className="absolute inset-0 h-full w-full transform object-cover opacity-90 transition duration-700 group-hover:opacity-100 dark:opacity-80"
      src={image}
      layout="fill"
      decoding="async"
      sizes="50vw"
    />
  )
}

export default ArticleThumbnail

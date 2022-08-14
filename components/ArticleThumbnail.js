import Link from '@/components/Link'
import Image from 'next/image'

const ArticleThumbnail = ({ slug, title, image }) => {
  return (
    <Link href={`/blog/${slug}`} title={title} className="w-full xl:w-auto">
      <Image
        alt={title}
        className="rounded object-cover"
        src={image}
        layout="responsive"
        width={640}
        height={400}
      />
    </Link>
  )
}

export default ArticleThumbnail

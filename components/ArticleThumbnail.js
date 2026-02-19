import Image from 'next/image'

const ArticleThumbnail = ({ title, image }) => {
  const thumbnail = image || '/static/images/default-ogp.png'

  return (
    <Image
      alt={title}
      className="absolute inset-0 h-full w-full transform object-cover opacity-90 transition duration-700 group-hover:opacity-100 dark:opacity-80"
      src={thumbnail}
      layout="fill"
      decoding="async"
      sizes="50vw"
      loading="lazy"
    />
  )
}

export default ArticleThumbnail

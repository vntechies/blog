import Link from '@/components/Link'
import Image from '@/components/Image'

const HorizontalCard = ({ title, href, image }) => {
  const cover = image || '/static/images/default-ogp.png'

  return (
    <Link alt={`Toi ${title}`} key={title} href={href} className="group block">
      <article className="surface-panel-muted grid grid-cols-[88px,1fr] items-stretch overflow-hidden text-sm transition-all duration-300 hover:-translate-y-1">
        <span className="relative h-full w-full">
          <Image
            alt={title}
            className="h-full w-full object-cover"
            src={cover}
            layout="fill"
            quality={75}
            loading="lazy"
          />
        </span>
        <p className="line-clamp-2 self-center p-3 text-left text-sm font-semibold text-slate-700 group-hover:text-orange-600 dark:text-slate-200 dark:group-hover:text-orange-300 sm:p-4">
          {title}
        </p>
      </article>
    </Link>
  )
}

export default HorizontalCard

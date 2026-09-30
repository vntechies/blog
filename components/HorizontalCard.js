import Link from '@/components/Link'
import Image from '@/components/Image'

const HorizontalCard = ({ title, href, image }) => {
  const cover = image || '/static/images/default-ogp.png'

  return (
    <Link alt={`Toi ${title}`} key={title} href={href} className="group block rounded-2xl">
      <article className="surface-panel-muted surface-panel-interactive grid min-h-[4.5rem] grid-cols-[88px,1fr] items-stretch overflow-hidden text-sm">
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
        <div className="self-center p-3 sm:p-4">
          <p className="line-clamp-2 text-left text-sm font-semibold text-fg transition-colors group-hover:text-brand-strong">
            {title}
          </p>
        </div>
      </article>
    </Link>
  )
}

export default HorizontalCard

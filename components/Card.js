import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, showMore = true, isFree }) => (
  <div className="w-full p-4 md:w-1/2">
    <Link alt={`Link tới ${title}`} href={href} className="block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-lg bg-gray-100 transition duration-500 hover:scale-105 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
        {imgSrc && (
          <Image
            alt={title}
            src={imgSrc}
            className="h-64 w-full object-cover object-center"
            width={544}
            height={306}
            loading="lazy"
          />
        )}
        <div className="flex-grow p-6">
          <h2 className="mb-3 text-xl font-bold leading-8 tracking-tight sm:text-2xl">
            {isFree && (
              <span className="mb-2 inline-block rounded bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                MIỄN PHÍ
              </span>
            )}
            <div>{title}</div>
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </Link>
  </div>
)

export default Card

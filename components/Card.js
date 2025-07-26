import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, showMore = true, isFree }) => (
  <div className="w-full p-4 md:w-1/2">
    <Link alt={`Link tới ${title}`} href={href} className="block h-full">
      <div className="hover:scale-105flex flex h-full h-full flex-col flex-col overflow-hidden overflow-hidden rounded-lg rounded-lg bg-gray-100 transition duration-500 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
        {imgSrc && (
          <div>
            <Image
              alt={title}
              src={imgSrc}
              className="h-64 w-full object-cover object-center"
              width={544}
              height={306}
              loading="lazy"
            />
          </div>
        )}
        <div className="flex-grow p-6">
          <h2 className="mb-3 text-xl font-bold leading-8 tracking-tight sm:text-2xl">
            {isFree !== undefined &&
              (isFree ? (
                <span className="mb-2 inline-block rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                  MIỄN PHÍ
                </span>
              ) : (
                <span className="mb-2 inline-block rounded px-2.5 py-0.5 text-sm font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                  💎 PREMIUM
                </span>
              ))}
            <div>{title}</div>
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </Link>
  </div>
)

export default Card

import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, showMore = true, isFree }) => (
  <Link
    alt={`Link tới ${title}`}
    href={href}
    className="md transform overflow-hidden rounded-lg bg-transparent p-4 transition duration-500 hover:scale-105 md:w-1/2"
    style={{ maxWidth: '544px' }}
  >
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md bg-gray-100 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700`}
    >
      {imgSrc && (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={306}
        />
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link alt={`Link tới ${title}`} href={href} aria-label={`Link tới ${title}`}>
              {isFree && isFree === true && (
                <span className="mr-2 rounded bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                  MIỄN PHÍ
                </span>
              )}
              <br />
              {title}
            </Link>
          ) : (
            { title }
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  </Link>
)

export default Card

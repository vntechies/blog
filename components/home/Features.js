import { featuredLinks } from '@/data/Links'
import Link from '@/components/Link'

const Features = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6">
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          {featuredLinks.map((link) => (
            <div key={link.title}>
              <h3 className="mb-2 text-xl font-bold dark:text-white">{link.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{link.summary}</p>
              <div className="pt-3 text-base font-medium leading-6">
                <Link
                  href={link.url}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Đọc thêm "${link.title}"`}
                >
                  Đọc thêm &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

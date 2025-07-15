import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from 'next/link'

export default function AuthorLayout({ children, frontMatter, authorPosts = [], totalPostsCount }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    facebook,
    github,
    website,
    expertise = [],
    experience,
    location,
    startYear,
    studentCount,
    successRate,
    testimonials = [],
    isMentor,
  } = frontMatter

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section - Visit Card Header */}
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-[#181c2a]">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 px-8 py-12 text-white dark:from-[#232946] dark:to-[#181c2a]">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              {/* Avatar */}
              <div className="relative">
                <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-40 md:w-40">
                  <Image
                    src={avatar}
                    alt={name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-green-500">
                  <span className="text-xs font-bold text-white">✓</span>
                </div>
              </div>

              {/* Basic Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="mb-2 text-3xl font-bold md:text-4xl">{name}</h1>
                <p className="mb-2 text-xl text-gray-100">{occupation}</p>
                {company && <p className="text-lg mb-4 text-gray-200">@ {company}</p>}

                {/* Social Icons */}
                <div className="mb-4 flex justify-center gap-3 md:justify-start">
                  {website && (
                    <span className="rounded-full bg-gray-200 p-1 dark:bg-transparent">
                      <SocialIcon kind="website" href={website} size={6} />
                    </span>
                  )}
                  {facebook && (
                    <span className="rounded-full bg-gray-200 p-1 dark:bg-transparent">
                      <SocialIcon kind="facebook" href={facebook} size={6} />
                    </span>
                  )}
                  {linkedin && (
                    <span className="rounded-full bg-gray-200 p-1 dark:bg-transparent">
                      <SocialIcon kind="linkedin" href={linkedin} size={6} />
                    </span>
                  )}
                  {twitter && (
                    <span className="rounded-full bg-gray-200 p-1 dark:bg-transparent">
                      <SocialIcon kind="twitter" href={twitter} size={6} />
                    </span>
                  )}
                  {github && (
                    <span className="rounded-full bg-gray-200 p-1 dark:bg-transparent">
                      <SocialIcon kind="github" href={github} size={6} />
                    </span>
                  )}
                  {email && (
                    <span className="rounded-full bg-gray-200 p-1 dark:bg-transparent">
                      <SocialIcon kind="mail" href={`mailto:${email}`} size={6} />
                    </span>
                  )}
                </div>

                {location && (
                  <p className="flex items-center justify-center gap-1 text-gray-200 md:justify-start">
                    <span>📍</span> {location}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="border-b bg-gray-50 px-8 py-6 dark:border-[#232946] dark:bg-[#232946]">
            <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {startYear ? `${new Date().getFullYear() - startYear}` : experience || '1'}y
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Kinh nghiệm</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {totalPostsCount || authorPosts.length}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Bài viết</div>
              </div>
              {isMentor && (
                <>
                  <div>
                    <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {studentCount || '0'}+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Học viên</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {successRate || '0'}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Tỷ lệ thành công</div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Content Body */}
          <div className="px-8 py-8">
            <div className={`grid gap-8 ${isMentor ? 'md:grid-cols-3' : ''}`}>
              {/* Main Content */}
              <div className={`${isMentor ? 'md:col-span-2' : ''}`}>
                {/* Bio Section */}
                <div className="mb-8">
                  <div className="prose prose-lg max-w-none dark:prose-dark">{children}</div>
                </div>

                {/* Expertise Tags */}
                {expertise.length > 0 && (
                  <div className="mb-8">
                    <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Chuyên môn
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recent Articles */}
                {authorPosts.length > 0 && (
                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Bài viết gần đây
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="border-spacing-2 min-w-full border-separate">
                        <tbody>
                          {authorPosts.map((post) => (
                            <tr
                              key={post.slug}
                              className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                            >
                              <td className="px-4 py-3">
                                <Link href={`/blog/${post.slug}`}>
                                  <div className="h-16 w-24 overflow-hidden rounded-lg">
                                    <Image
                                      src={post.images?.[0] || '/static/images/default-blog.jpg'}
                                      alt={post.title}
                                      width={96}
                                      height={64}
                                      className="h-full w-full object-cover transition-transform hover:scale-105"
                                      loading="lazy"
                                    />
                                  </div>
                                </Link>
                              </td>
                              <td className="px-4 py-3">
                                <Link
                                  href={`/blog/${post.slug}`}
                                  className="text-gray-800 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                                >
                                  <p className="text-sm font-medium leading-relaxed md:text-base">
                                    {post.title}
                                  </p>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              {isMentor && (
                <div className="space-y-6">
                  {/* CTA Card */}
                  <div className="rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 p-6 text-white dark:from-[#232946] dark:to-[#181c2a]">
                    <h3 className="text-lg mb-2 font-bold">Sẵn sàng học hỏi?</h3>
                    <p className="mb-4 text-sm text-gray-100">
                      Đặt lịch mentorship 1-on-1 và thúc đẩy sự nghiệp của bạn.
                    </p>
                    <button className="w-full rounded-lg bg-white px-4 py-2 font-semibold text-gray-800 transition-colors hover:bg-gray-50">
                      Đặt lịch học
                    </button>
                  </div>

                  {/* Testimonials */}
                  {testimonials && testimonials.length > 0 && (
                    <div className="space-y-4">
                      {testimonials.map((testimonial, index) => {
                        const parts = testimonial.split(' | ')
                        const rating = parseInt(parts[0], 10)
                        const quote = parts[1] || ''
                        const author = parts[2] || 'Học viên'
                        return (
                          <div key={index} className="rounded-lg bg-gray-50 p-6 dark:bg-[#232946]">
                            <div className="mb-2 text-yellow-400">
                              {'★'.repeat(rating)}
                              {'☆'.repeat(5 - rating)}
                            </div>
                            <p className="mb-3 text-sm italic text-gray-600 dark:text-gray-300">
                              "{quote}"
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">- {author}</p>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

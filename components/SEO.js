import Head from 'next/head'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import { ORG_ID, breadcrumbList } from '@/lib/schema'

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  canonicalUrl,
  showCanonical = true,
  noindex = false,
}) => {
  const router = useRouter()
  // Strip query string and hash so canonical/og:url stay stable across
  // ?utm_*, ?fbclid, etc. (router.asPath keeps them after hydration).
  const cleanPath = router.asPath.split(/[?#]/)[0]
  const pageUrl = `${siteMetadata.siteUrl}${cleanPath}`
  const twitterHandle = `@${siteMetadata.twitter.split('/').filter(Boolean).pop()}`
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
      <meta name="description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="vi_VN" />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {ogImage.constructor.name === 'Array' ? (
        ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
      {showCanonical && <link rel="canonical" href={canonicalUrl ? canonicalUrl : pageUrl} />}
    </Head>
  )
}

export const PageSEO = ({
  title,
  description,
  image,
  showCanonical,
  canonicalUrl,
  noindex,
  structuredData,
}) => {
  const defaultImage = siteMetadata.siteUrl + siteMetadata.socialBanner
  const customImage = image
    ? image.startsWith('http')
      ? image
      : siteMetadata.siteUrl + image
    : defaultImage
  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType="website"
        ogImage={customImage}
        twImage={customImage}
        showCanonical={showCanonical}
        canonicalUrl={canonicalUrl}
        noindex={noindex}
      />
      {structuredData && (
        <Head>
          {(Array.isArray(structuredData) ? structuredData : [structuredData]).map((data, i) => (
            <script
              key={i}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />
          ))}
        </Head>
      )}
    </>
  )
}

export const TagSEO = ({ title, description, images = [], noindex = false, structuredData }) => {
  const router = useRouter()
  const cleanPath = router.asPath.split(/[?#]/)[0]
  let imagesArr =
    images.length === 0
      ? [siteMetadata.socialBanner]
      : typeof images === 'string'
      ? [images]
      : images

  const featuredImages = imagesArr.map((img) => {
    return {
      '@type': 'ImageObject',
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  const ogImageUrl = featuredImages[0].url
  const twImageUrl = featuredImages[0].url

  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType="website"
        ogImage={ogImageUrl}
        twImage={twImageUrl}
        noindex={noindex}
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${description} - RSS feed`}
          href={`${siteMetadata.siteUrl}${cleanPath}/feed.xml`}
        />
      </Head>
      {structuredData && (
        <Head>
          {(Array.isArray(structuredData) ? structuredData : [structuredData]).map((data, i) => (
            <script
              key={i}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />
          ))}
        </Head>
      )}
    </>
  )
}

export const BlogSEO = ({
  authorDetails,
  title,
  headline = title,
  summary,
  date,
  lastmod,
  url,
  images = [],
  canonicalUrl,
  breadcrumbs,
}) => {
  const publishedAt = new Date(date).toISOString()
  const modifiedAt = new Date(lastmod || date).toISOString()
  let imagesArr =
    images.length === 0
      ? [siteMetadata.socialBanner]
      : typeof images === 'string'
      ? [images]
      : images

  const featuredImages = imagesArr.map((img) => {
    return {
      '@type': 'ImageObject',
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  const organization = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: siteMetadata.siteName,
    url: siteMetadata.siteUrl,
  }
  // The 'default' author is the site itself, not a person
  const authorList = (authorDetails || []).map((a) =>
    !a.slug || a.slug === 'default'
      ? organization
      : {
          '@type': 'Person',
          name: a.name,
          url: `${siteMetadata.siteUrl}/authors/${a.slug}`,
          ...(a.occupation ? { jobTitle: a.occupation } : {}),
          ...(a.facebook ? { facebook: a.facebook } : {}),
          sameAs: [a.linkedin, a.github, a.twitter, a.website].filter(Boolean),
        }
  )

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline,
    image: featuredImages,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: authorList.length ? authorList : organization,
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: siteMetadata.siteName,
      url: siteMetadata.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    inLanguage: siteMetadata.language,
    description: summary,
  }

  const twImageUrl = featuredImages[0].url

  const breadcrumb = breadcrumbs || [
    { name: 'Trang chủ', item: `${siteMetadata.siteUrl}/` },
    { name: 'Blog', item: `${siteMetadata.siteUrl}/blog` },
    { name: title },
  ]

  return (
    <>
      <CommonSEO
        title={title}
        description={summary}
        ogType="article"
        ogImage={featuredImages}
        twImage={twImageUrl}
        canonicalUrl={canonicalUrl}
      />
      <Head>
        {date && <meta property="article:published_time" content={publishedAt} />}
        {lastmod && <meta property="article:modified_time" content={modifiedAt} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbList(breadcrumb), null, 2),
          }}
        />
      </Head>
    </>
  )
}

export const CourseSEO = ({
  title,
  name,
  summary,
  url,
  canonicalUrl,
  images = [],
  showCanonical,
  isFree,
  price,
  courseCode,
  educationalLevel,
  fromPrice,
  instructors = [],
  breadcrumbs,
  noOffers = false,
}) => {
  const imagesArr = typeof images === 'string' ? [images] : images
  const featuredImages = (imagesArr.length ? imagesArr : [siteMetadata.socialBanner]).map((img) =>
    img.includes('http') ? img : siteMetadata.siteUrl + img
  )
  const priceNumber = Number(String(price || '').replace(/[^0-9]/g, '')) // "8.000.000 VNĐ" -> 8000000

  const offer =
    !isFree && !noOffers && fromPrice && priceNumber > 0
      ? {
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: fromPrice,
            highPrice: priceNumber,
            priceCurrency: 'VND',
            url,
          },
        }
      : {}

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description: summary,
    url,
    inLanguage: siteMetadata.language,
    image: featuredImages[0],
    provider: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: siteMetadata.siteName,
      url: siteMetadata.siteUrl,
      logo: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
    },
    ...(isFree ? { isAccessibleForFree: true } : { isAccessibleForFree: false }),
    ...offer,
    ...(courseCode ? { courseCode } : {}),
    ...(educationalLevel ? { educationalLevel } : {}),
    ...(instructors.length > 0 && {
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        instructor: instructors,
      },
    }),
  }

  const breadcrumb = breadcrumbs || [
    { name: 'Trang chủ', item: `${siteMetadata.siteUrl}/` },
    { name: 'Khoá học', item: `${siteMetadata.siteUrl}/courses` },
    { name },
  ]

  return (
    <>
      <CommonSEO
        title={title}
        description={summary}
        ogType="website"
        ogImage={featuredImages[0]}
        twImage={featuredImages[0]}
        canonicalUrl={canonicalUrl}
        showCanonical={showCanonical}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbList(breadcrumb), null, 2),
          }}
        />
      </Head>
    </>
  )
}

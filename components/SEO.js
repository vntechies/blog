import Head from 'next/head'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  canonicalUrl,
  showCanonical = true,
}) => {
  const router = useRouter()
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {ogImage.constructor.name === 'Array' ? (
        ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
      {showCanonical && (
        <link
          rel="canonical"
          href={canonicalUrl ? canonicalUrl : `${siteMetadata.siteUrl}${router.asPath}`}
        />
      )}
    </Head>
  )
}

export const PageSEO = ({ title, description, showCanonical }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
      showCanonical={showCanonical}
    />
  )
}

export const TagSEO = ({ title, description, images = [] }) => {
  const router = useRouter()
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
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${description} - RSS feed`}
          href={`${siteMetadata.siteUrl}${router.asPath}/feed.xml`}
        />
      </Head>
    </>
  )
}

export const BlogSEO = ({
  authorDetails,
  title,
  summary,
  date,
  lastmod,
  url,
  images = [],
  canonicalUrl,
}) => {
  const router = useRouter()
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

  let authorList
  if (authorDetails) {
    authorList = authorDetails.map((author) => {
      return {
        '@type': 'Person',
        name: author.name,
        url: author.url,
      }
    })
  } else {
    authorList = {
      '@type': 'Person',
      name: siteMetadata.author,
    }
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    image: featuredImages,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: authorList,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.author,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    description: summary,
  }

  const twImageUrl = featuredImages[0].url

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
      </Head>
    </>
  )
}

export const CourseSEO = ({
  title,
  courseItems,
  summary,
  url,
  lastmod,
  date,
  canonicalUrl,
  images = [],
  showCanonical,
  price,
  duration,
}) => {
  const router = useRouter()
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

  const provider = {
    '@type': 'Organization',
    name: `${siteMetadata.author}`,
    sameAs: `${siteMetadata.siteUrl}`,
  }

  var structuredData = {}
  if (courseItems) {
    const items = []
    courseItems.map((c) => {
      const item = {
        '@type': 'ListItem',
        position: `${c.index}`,
        item: {
          '@type': 'Course',
          url: `${siteMetadata.siteUrl}${router.asPath}`,
          name: c.title,
          description: c.summary,
          provider: provider,
        },
      }

      items.push(item)
    })
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      itemListElement: items,
    }
  } else {
    // Parse price from Vietnamese format (e.g., "8.000.000 VNĐ" -> "8000000")
    const parsedPrice = price ? price.replace(/[^0-9]/g, '') || '0' : '0'
    const currency = price && price.includes('VNĐ') ? 'VND' : 'USD'

    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      name: title,
      description: summary,
      provider: {
        '@type': 'Organization',
        name: 'VNTechies',
        url: 'https://vntechies.dev',
        logo: {
          '@type': 'ImageObject',
          url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
        },
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        startDate: date
          ? new Date(date).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0],
        location: 'Vietnam',
        instructor: {
          '@type': 'Organization',
          name: 'VNTechies',
        },
      },
      offers: {
        '@type': 'Offer',
        url: url,
        price: parsedPrice,
        priceCurrency: currency,
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString().split('T')[0],
      },
      ...(duration && { timeRequired: duration }),
      ...(featuredImages.length > 0 && { image: featuredImages[0].url }),
    }
  }
  const twImageUrl = featuredImages[0].url
  const ogImageUrl = featuredImages[0].url

  return (
    <>
      <CommonSEO
        title={title}
        description={summary}
        ogType="course"
        ogImage={ogImageUrl}
        twImage={twImageUrl}
        canonicalUrl={canonicalUrl}
        showCanonical={showCanonical}
      />
      <Head>
        {date && <meta property="course:published_time" content={publishedAt} />}
        {lastmod && <meta property="course:modified_time" content={modifiedAt} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
    </>
  )
}

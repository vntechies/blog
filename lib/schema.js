import siteMetadata from '@/data/siteMetadata'

export const ORG_ID = `${siteMetadata.siteUrl}/#organization`
export const WEBSITE_ID = `${siteMetadata.siteUrl}/#website`

export function breadcrumbList(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.item ? { item: item.item } : {}),
    })),
  }
}

export const organization = (extra = {}) => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: siteMetadata.siteName,
  url: siteMetadata.siteUrl,
  ...extra,
})

export const website = (extra = {}) => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: siteMetadata.siteName,
  url: `${siteMetadata.siteUrl}/`,
  ...extra,
})

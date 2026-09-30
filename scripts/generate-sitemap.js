const fs = require('fs')
const globby = require('globby')
const matter = require('gray-matter')
const prettier = require('prettier')
const siteMetadata = require('../data/siteMetadata')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.js',
    'pages/*.tsx',
    'data/blog/**/*.mdx',
    'data/blog/**/*.md',
    'data/courses/**/*.md',
    'data/courses/**/*.mdx',
    'data/docs/**/*.md',
    'data/docs/**/*.mdx',
    'data/series/**/*.md',
    'data/series/**/*.mdx',
    'data/authors/*.md',
    'data/authors/*.mdx',
    'public/tags/**/*.xml',
    '!pages/_*.js',
    '!pages/_*.tsx',
    '!pages/api',
    '!data/authors/default.md',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                let lastmod
                // Exclude drafts from the sitemap
                if (page.search('.md') >= 1 && fs.existsSync(page)) {
                  const source = fs.readFileSync(page, 'utf8')
                  const fm = matter(source)
                  if (fm.data.draft) {
                    return
                  }
                  if (fm.data.canonicalUrl) {
                    return
                  }
                  const modDate = fm.data.lastmod || fm.data.date
                  if (modDate) {
                    lastmod = new Date(modDate).toISOString().slice(0, 10)
                  }
                }
                // Skip thin tag feeds (fewer than 3 posts) so near-empty tag
                // pages stay out of the sitemap (matches noindex in tags/[tag].js).
                if (page.startsWith('public/tags/')) {
                  const items = (fs.readFileSync(page, 'utf8').match(/<item>/g) || []).length
                  if (items < 3) {
                    return
                  }
                }
                const path = page
                  .replace('pages/', '/')
                  .replace('data/blog', '/blog')
                  .replace('data/series', '/series')
                  .replace('data/courses', '/courses')
                  .replace('data/docs', '/docs')
                  .replace('data/authors', '/authors')
                  .replace('public/', '/')
                  .replace('.js', '')
                  .replace('.tsx', '')
                  .replace('.mdx', '')
                  .replace('.md', '')
                  .replace('/feed.xml', '')
                const route = path === '/index' ? '' : path

                if (page.search('pages/404.') > -1 || page.search(`pages/blog/[...slug].`) > -1) {
                  return
                }
                return `
                        <url>
                            <loc>${siteMetadata.siteUrl}${route}</loc>
                            ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  console.log('Site map generated!!!')

  // eslint-disable-next-line no-sync
  fs.writeFileSync('out/sitemap.xml', formatted)
})()

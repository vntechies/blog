import { bundleMDX } from 'mdx-bundler'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import getAllFilesRecursively from './utils/files'
// Remark packages
import remarkGfm from 'remark-gfm'
import remarkFootnotes from 'remark-footnotes'
import remarkMath from 'remark-math'
import remarkExtractFrontmatter from './remark-extract-frontmatter'
import remarkCodeTitles from './remark-code-title'
import remarkTocHeadings from './remark-toc-headings'
import remarkImgToJsx from './remark-img-to-jsx'
import remarkToc from 'remark-toc'
// Rehype packages
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'
import remarkEmbedder from '@remark-embedder/core'
import oembedTransformer from '@remark-embedder/transformer-oembed'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import bash from 'highlight.js/lib/languages/bash'
import shell from 'highlight.js/lib/languages/shell' // Import the shell language

const root = process.cwd()

export function getFiles(type) {
  const prefixPaths = path.join(root, 'data', type)
  const files = getAllFilesRecursively(prefixPaths)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'))
}

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}

export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

const GiphyTransformer = {
  name: 'Giphy',
  // shouldTransform can also be async
  shouldTransform(url) {
    const { host } = new URL(url)

    return ['giphy.com', 'www.giphy.com'].includes(host)
  },
  // getHTML can also be async
  getHTML(url) {
    const iframeUrl = url.replace('/gifs/', '/embed/')

    return `<div style="width:100%;height:0;padding-bottom:54%;position:relative;"><iframe src="${iframeUrl}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="${url}">via GIPHY</a></p>`
  },
}

const YoutubeTransformer = {
  name: 'Youtube',
  // shouldTransform can also be async
  shouldTransform(url) {
    const { host } = new URL(url)

    return ['youtube.com', 'www.youtube.com'].includes(host)
  },
  // getHTML can also be async
  getHTML(url) {
    const iframeUrl = url.replace('/watch?v=', '/embed/')

    return `<div style="width:100%;height:0;padding-bottom:54%;position:relative;"><iframe width="100%" height="100%" style="position:absolute" src="${iframeUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; encrypted-media" allowfullscreen></iframe></div>`
  },
}

export async function getFileBySlug(type, slug) {
  const mdxPath = path.join(root, 'data', type, `${slug}.mdx`)
  const mdPath = path.join(root, 'data', type, `${slug}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8')

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'esbuild.exe')
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'bin', 'esbuild')
  }

  let toc = []

  const { code, frontmatter } = await bundleMDX({
    source,
    // mdx imports can be automatically sourced from the components directory
    cwd: path.join(root, 'components'),
    mdxOptions(options, frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkExtractFrontmatter,
        [remarkTocHeadings, { exportRef: toc }],
        remarkGfm,
        remarkCodeTitles,
        [remarkFootnotes, { inlineNotes: true }],
        remarkMath,
        [remarkImgToJsx, { centerImage: true }],
        [
          remarkEmbedder,
          { transformers: [GiphyTransformer, YoutubeTransformer, oembedTransformer] },
        ],
        remarkToc,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeKatex,
        [rehypeCitation, { path: path.join(root, 'data') }],
        [rehypePrismPlus, { ignoreMissing: true }],
        rehypePresetMinify,
        [
          rehypeHighlight,
          {
            languages: {
              env: bash,
            },
            aliases: {
              env: 'bash',
            },
          },
        ],
        rehypeStringify,
      ]
      return options
    },
    esbuildOptions: (options) => {
      options.target = 'es2020'
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      }
      // Disable minification
      options.minify = false
      return options
    },
  })

  return {
    mdxSource: code,
    toc,
    frontMatter: {
      readingTime: readingTime(code),
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...frontmatter,
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      authors: frontmatter.authors || ['default'],
    },
  }
}

export async function getAllFilesFrontMatter(folder) {
  const prefixPaths = path.join(root, 'data', folder)

  const files = getAllFilesRecursively(prefixPaths)

  const allFrontMatter = []

  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return
    }
    const source = fs.readFileSync(file, 'utf8')
    const { data: frontmatter } = matter(source)
    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: formatSlug(fileName),
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      })
    }
  })

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}

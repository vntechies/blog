import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles } from './mdx'
import kebabCase from './utils/kebabCase'

const root = process.cwd()

export async function getAllSeries(type) {
  const files = await getFiles(type)

  let seriesCount = {}
  // Iterate through each post, putting all found series into `series`
  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, 'data', type, file), 'utf8')
    const { data } = matter(source)
    if (data.series && data.draft !== true) {
      data.series.forEach((series) => {
        const formattedTag = kebabCase(series)
        if (formattedTag in seriesCount) {
          seriesCount[formattedTag] += 1
        } else {
          seriesCount[formattedTag] = 1
        }
      })
    }
  })

  return seriesCount
}

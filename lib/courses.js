import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles, getFilesByName } from './mdx'
import kebabCase from './utils/kebabCase'

const root = process.cwd()

export async function getAllCourses(type) {
  const files = await getFilesByName(type, 'index.mdx')
  console.log(type)

  let courseCount = {}
  // Iterate through each post, putting all found series into `series`
  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, 'data', type, file), 'utf8')
    const { data } = matter(source)
    if (data.series && data.draft !== true) {
      data.series.forEach((series) => {
        const formattedTag = kebabCase(series)
        if (formattedTag in courseCount) {
          courseCount[formattedTag] += 1
        } else {
          courseCount[formattedTag] = 1
        }
      })
    }
  })

  return courseCount
}

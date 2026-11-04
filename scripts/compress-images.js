// Usage: node scripts/compress-images.js <maxWidth> <files...>
// Re-encodes PNG/JPEG in place (same name and format). Skips files that shrink less than 10%.
const fs = require('fs')
const sharp = require('sharp')

const [maxWidth, ...files] = process.argv.slice(2)

;(async () => {
  for (const file of files) {
    const input = fs.readFileSync(file)
    const { format } = await sharp(input).metadata()
    let img = sharp(input).resize({ width: Number(maxWidth), withoutEnlargement: true })
    if (format === 'png') img = img.png({ palette: true, quality: 85, compressionLevel: 9 })
    else if (format === 'jpeg') img = img.jpeg({ quality: 80, mozjpeg: true })
    else continue
    const output = await img.toBuffer()
    const write = output.length < input.length * 0.9
    if (write) fs.writeFileSync(file, output)
    console.log(
      `${write ? 'wrote' : 'kept '} ${file}: ${Math.round(input.length / 1024)} KB -> ${Math.round(
        output.length / 1024
      )} KB`
    )
  }
})()

import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => (
  <p align="center">
    <NextImage {...rest} />
  </p>
)

export default Image

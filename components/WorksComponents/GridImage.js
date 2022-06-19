import NextImage from "next/image"

const GridImage = ({ ...props }) => (
  <NextImage priority="true" placeholder="blur" layout="fill" objectFit="cover" {...props} />
)

export default GridImage

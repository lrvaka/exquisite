import NextImage from "next/image"

const GridImage = ({ ...props }) => (
  <NextImage placeholder="blur" layout="fill" objectFit="cover" {...props} />
)

export default GridImage

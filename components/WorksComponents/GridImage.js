import NextImage from "next/image"

const GridImage = ({ ...props }) => (
  <NextImage quality={25} placeholder="blur" layout="fill" objectFit="cover" {...props} />
)

export default GridImage

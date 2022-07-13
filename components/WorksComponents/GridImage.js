import NextImage from "next/image"

const GridImage = ({ alt, ...props }) => (
  <NextImage
    alt={alt}
    sizes="25vw"
    priority="true"
    placeholder="blur"
    layout="fill"
    objectFit="cover"
    {...props}
  />
)

export default GridImage

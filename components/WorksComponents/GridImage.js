import NextImage from "next/image";

const GridImage = ({ alt, ...props }) => (
  <NextImage
    alt={alt}
    sizes="50vw"
    priority="true"
    placeholder="blur"
    layout="fill"
    objectFit="cover"
    {...props}
  />
);

export default GridImage;

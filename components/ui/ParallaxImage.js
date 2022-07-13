import NextImage from "next/image"
import { Box } from "@chakra-ui/react"

const ParallaxImage = ({ src, alt, ...props }) => {
  return (
    <Box data-speed="auto" pos="absolute" w="100%" h="160%" {...props}>
      <NextImage
        alt={alt}
        priority="true"
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        src={src}
      />
    </Box>
  )
}

export default ParallaxImage

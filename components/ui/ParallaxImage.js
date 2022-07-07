import NextImage from "next/image"
import { Box } from "@chakra-ui/react"

const ParallaxImage = ({ src, ...props }) => {
  return (
    <Box data-speed="auto" pos="absolute" w="100%" h="160%" {...props}>
      <NextImage
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

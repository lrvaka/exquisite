import { Box } from "@chakra-ui/react"
import GridImage from "./GridImage"

const ParallaxGridItem = ({ src, ...props }) => (
  <Box pos="relative" overflow="hidden" {...props}>
    <Box data-speed="auto" pos="relative" w="100%" h="160%">
      <GridImage src={src} />
    </Box>
  </Box>
)

export default ParallaxGridItem

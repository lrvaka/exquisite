import GridImage from "./GridImage"
import { Box } from "@chakra-ui/react"

const GridItem = ({ src, ...props }) => (
  <Box pos="relative" overflow="hidden" {...props}>
    <GridImage src={src} />
  </Box>
)

export default GridItem

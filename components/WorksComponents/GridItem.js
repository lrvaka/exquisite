import GridImage from "./GridImage"
import { forwardRef } from "react"
import { Box } from "@chakra-ui/react"

// eslint-disable-next-line react/display-name
const GridItem = forwardRef(({ src, ...props }, ref) => (
  <Box pos="relative" overflow="hidden" {...props} ref={ref}>
    <GridImage src={src} />
  </Box>
))

export default GridItem

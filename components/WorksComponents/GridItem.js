import GridImage from "./GridImage"
import { forwardRef } from "react"
import { Box } from "@chakra-ui/react"

// eslint-disable-next-line react/display-name
const GridItem = forwardRef(({ src, alt, ...props }, ref) => (
  <Box pos="relative" overflow="hidden" {...props} ref={ref}>
    <GridImage alt={alt} src={src} />
  </Box>
))

export default GridItem

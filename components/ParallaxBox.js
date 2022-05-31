import { Box } from "@chakra-ui/react"
import { forwardRef } from "react"

const ParallaxBox = forwardRef(({ children, ...props }, ref) => {
  return (
    <Box ref={ref} {...props}>
      {children}
    </Box>
  )
})

export default ParallaxBox

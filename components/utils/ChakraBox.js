import { chakra, shouldForwardProp } from "@chakra-ui/react"
import { motion } from "framer-motion"

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition"
  },
})

export default ChakraBox

import { useState, useRef, useLayoutEffect, useEffect } from "react"
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion"
import { Flex, Box, Heading } from "@chakra-ui/react"

const MessageSectionAnimationMobile = () => (
  <Box className="message" py="20" overflowX="hidden">
    <Flex
      textAlign="center"
      justifyContent="center"
      py="20"
      borderTop="1px #cdcda6 solid"
      borderBottom="1px #cdcda6 solid"
      pos="relative"
      id="container"
    >
      <Box my="5rem" mx={["1rem", "1rem", "4rem", "11vw"]}>
        <Heading
          color="brand.200"
          fontWeight="black"
          fontSize={["2rem", "4rem", "5rem"]}
        >
          No matter the project, our approach is the same: achieve synchronicity
          with clients and deliver exceptional value
        </Heading>
      </Box>
    </Flex>
  </Box>
)

export default MessageSectionAnimationMobile

import { useState, useRef, useLayoutEffect, useEffect } from "react"
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion"
import ChakraBox from "./ChakraBox"
import { Flex, Box, Heading } from "@chakra-ui/react"
import gsap from "gsap"

const MessageSectionAnimation = ({ children, ...props }) => {
  const messageRef = useRef()
  const containerRef = useRef()
  useLayoutEffect(() => {
    let to = gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          end: "center center",
          scrub: 1,
        },
      })
      .fromTo(messageRef.current, { scale: 1.5 }, { scale: 1 })
    return () => {
      to.kill()
    }
  }, [])

  return (
    <Box className="message" py="20" overflowX="hidden">
      <Flex
        textAlign="center"
        justifyContent="center"
        py="20"
        borderTop="1px #cdcda6 solid"
        borderBottom="1px #cdcda6 solid"
        pos="relative"
        id="container"
        ref={containerRef}
      >
        <Box my="5rem" mx={["1rem", "1rem", "4rem"]}>
          <Heading
            ref={messageRef}
            color="brand.200"
            fontWeight="black"
            fontSize={["2rem", "4rem", "5rem"]}
          >
            No matter the project, our approach is the same: achieve
            synchronicity with clients and deliver exceptional value
          </Heading>
        </Box>
      </Flex>
    </Box>
  )
}

export default MessageSectionAnimation

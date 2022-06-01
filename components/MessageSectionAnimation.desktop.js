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

const MessageSectionAnimationDesktop = ({ children, ...props }) => {
  const messageRef = useRef()
  const containerRef = useRef()
  useLayoutEffect(() => {
    let to = gsap.to(messageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom-=300",
        pin: messageRef.current,
        markers: true,
        scrub: 1,
      },
    })

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
        minH={["none", "none", "none", "300vh"]}
        ref={containerRef}
      >
        <Box my="5rem" mx={["1rem", "1rem", "4rem", "11vw"]}>
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

export default MessageSectionAnimationDesktop

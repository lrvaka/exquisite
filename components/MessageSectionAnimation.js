import { useState, useRef, useEffect } from "react"
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion"
import ChakraBox from "./ChakraBox"
import { Flex, Box, Heading } from "@chakra-ui/react"

const MessageSectionAnimation = ({ children, ...props }) => {
  const [elementTop, setElementTop] = useState(0)
  const [elementBottom, setElementBottom] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef(null)

  const { scrollY } = useViewportScroll()

  // start animating our element when we've scrolled it into view
  const initial = elementTop - clientHeight

  // end our animation when we've scrolled the offset specified
  const final = elementTop

  const yRange = useTransform(scrollY, [initial, final], [2, 1])

  const y = useSpring(yRange, { stiffness: 400, damping: 90 })

  useEffect(() => {
    if (typeof window === "undefined") {
      return null
    }
    const element = ref.current
    // save our layout measurements in a function in order to trigger
    // it both on mount and on resize
    const onResize = () => {
      // use getBoundingClientRect instead of offsetTop in order to
      // get the offset relative to the viewport
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      )

      setClientHeight(window.innerHeight)
      console.log(elementTop)
      console.log(elementBottom)
    }

    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [ref])

  return (
    <ChakraBox py="20" ref={ref} {...props} overflowX="hidden">
      <Flex
        textAlign="center"
        justifyContent="center"
        py="20"
        borderTop="1px #cdcda6 solid"
        borderBottom="1px #cdcda6 solid"
        pos="relative"
      >
        <ChakraBox my="5rem" mx={["1rem", "1rem", "4rem"]} style={{ scale: y }}>
          <Heading
            color="brand.200"
            fontWeight="black"
            fontSize={["2rem", "4rem", "5rem"]}
          >
            Residential, retail or a commercial project, our approach is the
            same: achieve synchronicity with clients and deliver exceptional
            value
          </Heading>
        </ChakraBox>
      </Flex>
    </ChakraBox>
  )
}

export default MessageSectionAnimation

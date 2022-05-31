import { ChakraProvider, Box, keyframes } from "@chakra-ui/react"
import { theme } from "../lib/theme"
import Fonts from "../lib/fonts"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import ScrollSmoother from "gsap/dist/ScrollSmoother"

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual"
}

function MyApp({ Component, pageProps, data }) {
  const SmoothScrollRef = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
    })
  }, [SmoothScrollRef])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box id="smooth-wrapper" ref={SmoothScrollRef}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp

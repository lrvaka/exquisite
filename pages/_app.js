import { ChakraProvider, Box } from "@chakra-ui/react"
import { theme } from "../lib/theme"
import Fonts from "../lib/fonts"
import { useEffect, createContext, useState } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import ScrollSmoother from "gsap/dist/ScrollSmoother"
import ScrollerContext from "../store/gsap-context"

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual"
}

function MyApp({ Component, pageProps }) {
  const [smoother, setSmoother] = useState(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

    setSmoother(
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
      })
    )
    console.log(smoother)
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <ScrollerContext.Provider value={{ smoother }}>
        <Box id="smooth-wrapper">
          <Component {...pageProps} />
        </Box>
      </ScrollerContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp

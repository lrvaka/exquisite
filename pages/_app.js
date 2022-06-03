import { ChakraProvider, Box } from "@chakra-ui/react"
import { theme } from "../lib/theme"
import Fonts from "../lib/fonts"
import { useEffect, createContext, useState, Suspense, useRef } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import ScrollSmoother from "gsap/dist/ScrollSmoother"
import ScrollerContext from "../store/gsap-context"
import Navbar from "../components/Navbar"

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual"
}

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

function MyApp({ Component, pageProps }) {
  const [smoother, setSmoother] = useState(null)

  useEffect(() => {
    setSmoother(
      ScrollSmoother.create({
        wrapper: "smooth-wrapper",
        smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
      })
    )
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />

      <ScrollerContext.Provider value={{ smoother }}>
        <Navbar />
        <Component id="smooth-wrapper" {...pageProps} />
      </ScrollerContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp

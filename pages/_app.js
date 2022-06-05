import { ChakraProvider, Box } from "@chakra-ui/react"
import { theme } from "../lib/theme"
import Fonts from "../lib/fonts"
import {
  useEffect,
  createContext,
  useState,
  Suspense,
  useCallback,
  useRef,
  useContext,
} from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import ScrollSmoother from "gsap/dist/ScrollSmoother"
import GsapContext from "../store/gsap-context"
import Navbar from "../components/ui/Navbar"
import Footer from "../components/ui/Footer"
import { useRouter } from "next/router"
import Layout from "../components/layouts/layout"
import useIsomorphicLayoutEffect from "../components/hooks/useIsomorphicLayoutEffect"
import PageTransitions from "../components/PageTransitions"

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual"
}

function MyApp({ Component, pageProps }) {
  const [routingPageOffset, setRoutingPageOffset] = useState(0)
  const [smoother, setSmoother] = useState(null)
  const router = useRouter()

  useIsomorphicLayoutEffect(() => {
    if (smoother) {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

    let scroller = ScrollSmoother.create({
      smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
    })

    setSmoother(scroller)
  }, [router.asPath])

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 500)
  }, [router.asPath])

  useEffect(() => {
    const pageChange = () => setRoutingPageOffset(window.scrollY)
    router.events.on("routeChangeStart", pageChange)
  }, [router.events])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <GsapContext.Provider
        value={{
          smoother,
          setSmoother,
        }}
      >
        <Box pos="relative" id="smooth-wrapper">
          <Navbar />
          <PageTransitions
            route={router.asPath}
            routingPageOffset={routingPageOffset}
          >
            <Component {...pageProps} />
          </PageTransitions>
        </Box>
      </GsapContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp

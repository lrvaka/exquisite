import { ChakraProvider, Box } from "@chakra-ui/react"
import { theme } from "../lib/theme"
import { useState, useRef } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import ScrollSmoother from "gsap/dist/ScrollSmoother"
import GsapContext from "../store/gsap-context"
import Navbar from "../components/ui/Navbar"
import { useRouter } from "next/router"
import PageTransitions from "../components/ui/PageTransitions"
import useIsomorphicLayoutEffect from "../components/hooks/useIsomorphicLayoutEffect"
import SplitText from "gsap/dist/SplitText"
import CustomEase from "gsap/dist/CustomEase"
import ResponsiveComponent from "../components/utils/ResponsiveComponent"
import PageTransitionsMobile from "../components/ui/PageTransitions.mobile"
import PageTransitionsOther from "../components/ui/PageTransitions.other"

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual"
}

function MyApp({ Component, pageProps }) {
  const [routingPageOffset, setRoutingPageOffset] = useState(0)
  const [smoother, setSmoother] = useState(null)
  const [navColor, setNavColor] = useState("white")
  const contentRef = useRef()
  const wrapperRef = useRef()
  const router = useRouter()

  useIsomorphicLayoutEffect(() => {
    if (smoother) {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }

    gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText)

    let scroller = ScrollSmoother.create({
      ignoreMobileResize: true,
      wrapper: wrapperRef.current,
      content: contentRef.current,
      effects: true,
      smooth: 0, // how long (in seconds) it takes to "catch up" to the native scroll position
    })

    setSmoother(scroller)

    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 500)
    return () => {}
  }, [router.asPath])

  useIsomorphicLayoutEffect(() => {
    const pageChange = () => {
      setRoutingPageOffset(window.scrollY)
    }

    router.events.on("routeChangeStart", pageChange)
  }, [router.events])

  useIsomorphicLayoutEffect(() => {
    //register custom easing functions
    gsap.registerPlugin(CustomEase)
    CustomEase.create("a1", "0.6, 0.01, -0.05, 0.95")
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <GsapContext.Provider
        value={{
          smoother,
          setSmoother,
          navColor,
          setNavColor,
          contentRef,
          routingPageOffset,
        }}
      >
        <Box ref={wrapperRef}>
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

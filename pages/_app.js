import { ChakraProvider, Box, keyframes } from "@chakra-ui/react"
import { theme } from "../lib/theme"
import Fonts from "../lib/fonts"
import { useEffect } from "react"
import "../styles/global.css"

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual"
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return null
    }
    let scroll
    const fetchData = async () => {
      import("locomotive-scroll").then((LocomotiveScroll) => {
        scroll = new LocomotiveScroll.default({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
          smoothMobile: false,
        })
      })
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error)
  })

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

import { ChakraProvider, Box, keyframes } from "@chakra-ui/react"
import { theme } from "../lib/theme"
import Fonts from "../lib/fonts"

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual"
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

import { ChakraProvider, Box } from "@chakra-ui/react"
import { theme } from "../lib/theme"
import Fonts from "../lib/fonts"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

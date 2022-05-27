// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: "#dbe2bb",
    200: "#cdcda6",
    300: "#979a6f",
    400: "#3a6061",
    500: "#213a30",
  },
}

const fonts = {
  heading: `'quincy-cf'`,
  body: `'questa-sans'`,
}

const styles = {
  global: (props) => ({
    body: {
      bg: "brand.400",
      lineHeight: "100%",
    },
  }),
}

export const theme = extendTheme({ colors, styles, fonts })

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

const components = {
  Input: {
    variants: {
      home: {
        field: {
          background: "transparent",
          borderColor: "#213a30",
          borderBottom: "1px solid",
          borderRadius: 0,
          paddingX: 0,
          _focus: {
            borderBottom: "1px solid #979a6f",
          },
          _error: {
            borderBottom: "1px solid red",
          },
        },
      },
      work: {
        field: {
          background: "transparent",
          borderBottom: "1px solid #dbe2bb",
          borderRadius: 0,
          paddingX: 0,
          _focus: {
            borderBottom: "1px solid #979a6f",
          },
          _error: {
            borderBottom: "1px solid red",
          },
        },
      },
    },
    defaultProps: {
      variant: "home",
    },
  },
  Textarea: {
    variants: {
      flushed: {
        background: "transparent",
        borderColor: "#213a30",
        borderBottom: "1px solid",
        borderRadius: 0,
        paddingX: 0,
        _focus: {
          borderBottom: "1px solid #979a6f",
        },
        _error: {
          borderBottom: "1px solid red",
        },
      },
      work: {
        background: "transparent",
        borderBottom: "1px solid #dbe2bb",
        borderRadius: 0,
        paddingX: 0,
        _focus: {
          borderBottom: "1px solid #979a6f",
        },
        _error: {
          borderBottom: "1px solid red",
        },
      },
    },
    defaultProps: {
      variant: "flushed",
    },
  },
  Button: {
    variants: {
      ghost: {
        size: "md",
        colorScheme: "green",
        backgroundColor: "transparent",
        _active: {
          backgroundColor: "transparent",
        },
        _focus: {
          backgroundColor: "transparent",
        },
        _hover: {
          backgroundColor: "transparent",
        },
      },
    },
    defaultProps: {
      variant: "ghost",
    },
  },
}

const fonts = {
  heading: `'quincy-cf'`,
  body: `'questa-sans'`,
}

const styles = {
  global: (props) => ({
    body: {
      backgroundColor: "brand.400",
      lineHeight: "100%",
    },
  }),
}

export const theme = extendTheme({ colors, styles, fonts, components })

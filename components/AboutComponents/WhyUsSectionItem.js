import { Flex, Text } from "@chakra-ui/react"
import { forwardRef } from "react"

const WhyUsSectionItem = forwardRef((props, ref) => {
  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      lineHeight="normal"
      pos="absolute"
      ref={ref}
      bgColor={props.bgColor}
      px="4"
    >
      <Text
        fontSize={{ base: "4xl", xl: "5xl", "2xl": "7xl" }}
        fontWeight="500"
        textAlign="center"
        color={props.color}
      >
        {props.children}
      </Text>
    </Flex>
  )
})

WhyUsSectionItem.displayName = "WhyUsSectionItem"

export default WhyUsSectionItem

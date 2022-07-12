import { Flex, Text } from "@chakra-ui/react"
import { forwardRef } from "react"

const WhyUsSectionItem = (props) => {
  return (
    <Flex
      pos="absolute"
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      lineHeight="normal"
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
}

export default WhyUsSectionItem

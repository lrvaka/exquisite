import { Flex, Text } from "@chakra-ui/react"

const Footer = ({ ...props }) => (
  <Flex
    py="2rem"
    borderTop="1px solid #cdcda6"
    color="brand.500"
    justifyContent="center"
    fontSize={{base: "xs", md: "md"}}
    {...props}
  >
    <Text>© 2022 Exquisite Wood Floors NY. |</Text>
    <Text>&nbsp;Website by Blockhead Digital</Text>
  </Flex>
)

export default Footer

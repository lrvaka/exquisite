import { Flex } from "@chakra-ui/react"

const Footer = ({ ...props }) => (
  <Flex
    py="2rem"
    borderTop="1px solid #cdcda6"
    color="brand.500"
    justifyContent="center"
    {...props}
  >
    © 2022 Exquisite Wood Floors NY.
  </Flex>
)

export default Footer

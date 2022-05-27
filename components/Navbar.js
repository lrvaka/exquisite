import { Box, Flex, Link } from "@chakra-ui/react"
import NextImage from "next/image"

const Navbar = () => (
  <Box w="100%" as="nav" pos="fixed" zIndex="2">
    <Flex justifyContent="space-between" p="4">
      <Box w="60px">
        <NextImage src="/images/white-logo.png" width={78} height={87} />
      </Box>
      <Flex alignSelf="center" color="white">
        <Link fontFamily="quincy-cf" fontWeight="700" px="4">
          Works
        </Link>
        <Link fontFamily="quincy-cf" fontWeight="700" px="4">
          Contact
        </Link>
      </Flex>
    </Flex>
  </Box>
)

export default Navbar

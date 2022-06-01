import { Box, Flex, Link, Container } from "@chakra-ui/react"
import NextImage from "next/image"
import ScrollerContext from "../store/gsap-context"
import { useContext } from "react"

const Navbar = () => {
  const { smoother } = useContext(ScrollerContext)

  return (
    <Box w="100%" as="nav" pos="fixed" zIndex="2">
      <Container maxW="container.xl" p="0">
        <Flex justifyContent="space-between" p="4">
          <Box w="60px">
            <NextImage src="/images/white-logo.png" width={78} height={87} />
          </Box>
          <Flex alignSelf="center" color="white">
            <Link
              onClick={() => {
                smoother.scrollTo("#works", true, "center center")
              }}
              fontFamily="quincy-cf"
              fontWeight="700"
              px="4"
            >
              Works
            </Link>
            <Link
              onClick={() => {
                smoother.scrollTo("#contact", true, "center center")
              }}
              fontFamily="quincy-cf"
              fontWeight="700"
              px="4"
            >
              Contact
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar

import { Box, Flex, Link, Container } from "@chakra-ui/react"
import NextImage from "next/image"
import NextLink from "next/link"
import GsapContext from "../../store/gsap-context"
import { useContext } from "react"

const Navbar = () => {
  const { smoother } = useContext(GsapContext)

  return (
    <Box w="100%" as="nav" pos="fixed" zIndex="1">
      <Container pos="relative" maxW="container.xl" p="0">
        <Flex justifyContent="space-between" p="4">
          <NextLink href="/" passHref>
            <Link>
              <Box w="60px">
                <NextImage
                  src="/images/white-logo.png"
                  width={78}
                  height={87}
                />
              </Box>
            </Link>
          </NextLink>
          <Flex alignSelf="center" color="white">
            <NextLink href="/works" passHref>
              <Link fontFamily="quincy-cf" fontWeight="700" px="4">
                Works
              </Link>
            </NextLink>
            <Link
              onClick={() => {
                smoother.scrollTo("/#contact", true, "center center")
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

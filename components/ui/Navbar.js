import { Box, Flex, Link, Container } from "@chakra-ui/react"
import NextImage from "next/image"
import NextLink from "next/link"
import GsapContext from "../../store/gsap-context"
import { useContext } from "react"
import { Icon } from "@chakra-ui/react"
import { HiPhone } from "react-icons/hi"
import { useRouter } from "next/router"
import ResponsiveComponent from "../utils/ResponsiveComponent"
import NavbarItems from "./Navbar/NavbarItems"

const Navbar = () => {
  const { smoother } = useContext(GsapContext)
  const router = useRouter()
  //bgColor="rgba(58, 96, 97, 0.25)"
  return (
    <Box w="100%" as="nav" pos="fixed" zIndex="1">
      <Container pos="relative" maxW="2300px" p="0">
        <Flex justifyContent="space-between" p="4">
          <NextLink href="/" passHref>
            <Link>
              <NextImage
                src="/images/dark-logo.png"
                width={91.40625}
                height={101.953125}
              />
            </Link>
          </NextLink>
          <Flex
            alignSelf="center"
            alignItems="center"
            flexDirection={["row-reverse", "row"]}
          >
            <NavbarItems />
            <Link
              onClick={() => {
                if (router.asPath === "/") {
                  smoother.scrollTo("#contact", true, "center center")
                } else {
                  router.push("/")
                  setTimeout(() => {
                    smoother.scrollTo("#contact", true, "center center")
                  }, 2000)
                }
              }}
              fontFamily="quincy-cf"
              fontWeight="700"
              p={["3", "4"]}
              fontSize={["md", "large"]}
              color="brand.200"
              bgColor="brand.400"
              display="flex"
              maxW="max-content"
              alignItems="center"
              border="1px solid #213a30"
            >
              Contact
              <Icon as={HiPhone} ml="2" />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar

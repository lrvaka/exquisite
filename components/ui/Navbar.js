import { Box, Flex, Link, Container } from "@chakra-ui/react"
import NextImage from "next/image"
import NextLink from "next/link"
import GsapContext from "../../store/gsap-context"
import { useContext, useState, useEffect } from "react"
import { useRouter } from "next/router"

const Navbar = () => {
  const [color, setColor] = useState("white")
  const [logo, setLogo] = useState("/images/white-logo.png")
  const { smoother } = useContext(GsapContext)
  const router = useRouter()

  useEffect(() => {
    if (router.asPath === "/works") {
      console.log(router.asPath)
      setTimeout(() => {
        setColor("#213a30")
        setLogo("/images/dark-logo.png")
      }, 1000)
      return
    }
    setTimeout(() => {
      setColor("white")
      setLogo("/images/white-logo.png")
    }, 1000)
    console.log(router.asPath)
  }, [router.asPath])

  return (
    <Box w="100%" as="nav" pos="fixed" zIndex="1">
      <Container pos="relative" maxW="container.xl" p="0">
        <Flex justifyContent="space-between" p="4">
          <NextLink href="/" passHref>
            <Link>
              <Box w="60px">
                <NextImage src={logo} width={78} height={87} />
              </Box>
            </Link>
          </NextLink>
          <Flex alignSelf="center">
            <NextLink href="/works" passHref>
              <Link
                fontFamily="quincy-cf"
                fontWeight="700"
                px="4"
                color={color}
              >
                Works
              </Link>
            </NextLink>
            <Link
              onClick={() => {
                smoother.scrollTo("#contact", true, "center center")
              }}
              fontFamily="quincy-cf"
              fontWeight="700"
              px="4"
              color={color}
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

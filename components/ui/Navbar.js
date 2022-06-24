import { Box, Flex, Link, Container } from "@chakra-ui/react"
import NextImage from "next/image"
import NextLink from "next/link"
import GsapContext from "../../store/gsap-context"
import { useContext, useState, useEffect } from "react"
import { useRouter } from "next/router"
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect"

const Navbar = () => {
  const [color, setColor] = useState("white")
  const [navLink, setNavLink] = useState(
    <NextLink href="/works" passHref>
      <Link fontFamily="quincy-cf" fontWeight="700" px="4" color="white">
        Works
      </Link>
    </NextLink>
  )
  const [logo, setLogo] = useState("/images/white-logo.png")
  const { smoother } = useContext(GsapContext)
  const router = useRouter()

  const WorkLink = (
    <NextLink href="/works" passHref>
      <Link fontFamily="quincy-cf" fontWeight="700" px="4" color="white">
        Works
      </Link>
    </NextLink>
  )

  const HomeLink = (
    <NextLink href="/" passHref>
      <Link fontFamily="quincy-cf" fontWeight="700" px="4" color="black">
        Home
      </Link>
    </NextLink>
  )

  useIsomorphicLayoutEffect(() => {
    if (router.asPath === "/works") {
      setTimeout(() => {
        setColor("black")
        setLogo("/images/dark-logo.png")
        setNavLink(HomeLink)
      }, 1000)
      return
    }
    setTimeout(() => {
      setColor("white")
      setLogo("/images/white-logo.png")
      setNavLink(WorkLink)
    }, 1000)
  }, [router.asPath])

  return (
    <Box w="100%" as="nav" pos="fixed" zIndex="1">
      <Container pos="relative" maxW="container.xl" p="0">
        <Flex justifyContent="space-between" p="4">
          <NextLink href="/" passHref>
            <Link>
              <NextImage src={logo} width={78} height={87} />
            </Link>
          </NextLink>
          <Flex alignSelf="center">
            {navLink}
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

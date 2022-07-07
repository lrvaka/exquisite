import NavItem from "./NavItems"
import Link from "next/link"
import { Button, LinkBox } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useContext } from "react"
import GsapContext from "../../../store/gsap-context"

const NavbarItemsDesktop = () => {
  const router = useRouter()
  const { smoother } = useContext(GsapContext)

  return (
    <>
      <NavItem href="/" title="Home" />
      <NavItem href="/about" title="About" />
      <Button
        display="flex"
        _hover={{ textDecoration: "underline" }}
        _focus={{ boxShadow: "none" }}
        alignItems="center"
        fontFamily="quincy-cf"
        fontWeight="700"
        color="black"
        lineHeight="100%"
        fontSize={["md", "large"]}
        onClick={() => {
          if (router.asPath === "/") {
            smoother.scrollTo("#services", true, "center center")
          } else {
            router.push("/")
            setTimeout(() => {
              smoother.scrollTo("#services", true, "center center")
            }, 2000)
          }
        }}
      >
        Services
      </Button>
      <NavItem href="/works" title="Works" mr="4" />
    </>
  )
}

export default NavbarItemsDesktop

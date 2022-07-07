import NextLink from "next/link"
import { Link } from "@chakra-ui/react"

const NavItem = ({ href, title, ...props }) => (
  <NextLink href={href} passHref {...props}>
    <Link
      _focus={{ boxShadow: "none" }}
      display="flex"
      alignItems="center"
      fontFamily="quincy-cf"
      fontWeight="700"
      px="4"
      color="black"
      fontSize={["md", "large"]}
    >
      {title}
    </Link>
  </NextLink>
)

export default NavItem

import NextLink from "next/link"
import { Link } from "@chakra-ui/react"

const NavItem = ({ href, title, ...props }) => (
  <NextLink href={href} passHref>
    <Link
      display="flex"
      alignItems="center"
      fontFamily="quincy-cf"
      fontWeight="700"
      px="4"
      color="black"
      fontSize="clamp(1rem, 0.8421052631578947rem + 0.5263157894736842vw, 1.5rem)"
      {...props}
    >
      {title}
    </Link>
  </NextLink>
)

export default NavItem
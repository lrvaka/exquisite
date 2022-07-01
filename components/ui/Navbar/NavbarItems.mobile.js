import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { AiOutlineMenu } from "react-icons/ai"

const NavbarItemsMobile = () => (
  <Menu>
    <MenuButton
      as={IconButton}
      icon={<AiOutlineMenu />}
      color="brand.200"
      bgColor="brand.500"
      borderRadius="none"
      ml="4"
      border="1px solid #3a6061"
      _active={{ bgColor: "#2a4a3d" }}
      _selected={{ bgColor: "#2a4a3d" }}
      _focus={{ bgColor: "#2a4a3d" }}
      _hover={{ bgColor: "#2a4a3d" }}
    />
    <MenuList
      bgColor="brand.500"
      color="brand.100"
      fontSize="xl"
      borderRadius="none"
    >
      <NextLink href="/" passHref>
        <MenuItem _focus={{ bgColor: "brand.500" }} py="4">
          Home
        </MenuItem>
      </NextLink>
      <NextLink href="/works" passHref>
        <MenuItem _focus={{ bgColor: "brand.500" }} py="4">
          Portfolio
        </MenuItem>
      </NextLink>
      <MenuItem _focus={{ bgColor: "brand.500" }} py="4">
        Services
      </MenuItem>
      <MenuItem _focus={{ bgColor: "brand.500" }} py="4">
        About
      </MenuItem>
    </MenuList>
  </Menu>
)

export default NavbarItemsMobile

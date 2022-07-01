import ResponsiveComponent from "../../utils/ResponsiveComponent"
import NavbarItemsDesktop from "./NavbarItems.desktop"
import NavbarItemsMobile from "./NavbarItems.mobile"

const NavbarItems = () => (
  <ResponsiveComponent
    mobileSize="700"
    mobileComponents={<NavbarItemsMobile />}
    desktopComponents={<NavbarItemsDesktop />}
  />
)

export default NavbarItems

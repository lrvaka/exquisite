import NavItem from "./NavbarItem";
import { ServicesItem } from "./NavbarItem";

const NavbarItemsDesktop = () => {
  return (
    <>
      <NavItem href="/" title="Home" />
      <NavItem href="/about" title="About" />
      <ServicesItem />
      <NavItem href="/portfolio" title="Portfolio" />
    </>
  );
};

export default NavbarItemsDesktop;

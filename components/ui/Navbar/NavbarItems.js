import ResponsiveComponent from "../../utils/ResponsiveComponent";
import NavbarItemsDesktop from "./NavbarItems.desktop";
import NavbarItemsMobile from "./NavbarItems.mobile";

const NavbarItems = () => (
  <>
    <div className="flex md:hidden">
      <NavbarItemsMobile />
    </div>
    <div className="hidden md:flex self-center items-center flex-row-reverse md:flex-row gap-2 md:gap-8">
      <NavbarItemsDesktop />
    </div>
  </>
);

export default NavbarItems;

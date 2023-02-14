import NextImage from "next/image";
import NextLink from "next/link";
import GsapContext from "../../../store/gsap-context";
import { useContext } from "react";
import NavbarItems from "./NavbarItems";
import { useRouter } from "next/router";
import Headroom from "react-headroom";
import NavbarItemsMobile from "./NavbarItems.mobile";
import NavbarItemsDesktop from "./NavbarItems.desktop";

const Navbar = () => {
  const router = useRouter();

  const Nav = () => (
    <Headroom
      style={{
        webkitTransition: "all 1s ease-in-out",
        mozTransition: "all 1s ease-in-out",
        oTransition: "all 1s ease-in-out",
        transition: "all 1s ease-in-out",
      }}
    >
      <div className="mx-auto relative max-w-[2300px]  md:bg-[#dbe2bb]/50">
        <div className="flex justify-between p-4">
          <NextLink href="/" passHref>
            <a
              aria-label="home button"
              className="max-w-[90px] 2xl:max-w-[125px]"
            >
              <NextImage
                alt="ewf logo"
                src="/images/dark-logo.png"
                width={312}
                height={348}
              />
            </a>
          </NextLink>
          {router.asPath === "/thank-you" ? null : (
            <nav className="flex self-center items-center flex-row-reverse md:flex-row gap-2 md:gap-8">
              <NavbarItems />
              <NextLink href="/contact" passHref>
                <a className="flex p-2 text-theme-10 border-[1px] border-theme-500 border-solid font-heading bg-theme-400 items-center max-w-max text-lg 2xl:text-2xl font-bold">
                  Get In Touch
                </a>
              </NextLink>
            </nav>
          )}
        </div>
      </div>
    </Headroom>
  );

  return (
    <header className="w-full fixed z-20">
      <Nav />
    </header>
  );
};

export default Navbar;

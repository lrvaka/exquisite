import NextImage from "next/image";
import NextLink from "next/link";
import GsapContext from "../../../store/gsap-context";
import { useContext } from "react";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  const { smoother } = useContext(GsapContext);

  return (
    <header className="w-full fixed z-[1] md:bg-[#dbe2bb]/50">
      <div className="mx-auto relative max-w-[2300px]">
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
          <nav className="flex self-center items-center flex-row-reverse md:flex-row gap-2 md:gap-8">
            <NavbarItems />
            <button
              className="flex p-2 text-theme-10 border-[1px] border-theme-500 border-solid font-heading bg-theme-400 items-center max-w-max text-lg 2xl:text-2xl font-bold"
              onClick={() =>
                smoother.scrollTo("#contact", true, "center center")
              }
            >
              Contact
              <svg
                className="ml-2"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

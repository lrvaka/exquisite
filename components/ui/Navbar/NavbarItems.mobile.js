import { Menu } from "@headlessui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { forwardRef, useContext } from "react";
import GsapContext from "../../../store/gsap-context";

// eslint-disable-next-line react/display-name
const Link = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <NextLink href={href}>
      <a className="text-theme-10" ref={ref} {...rest}>
        {children}
      </a>
    </NextLink>
  );
});

const NavbarItemsMobile = () => {
  const { smoother } = useContext(GsapContext);
  const router = useRouter();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button aria-label="navigation button" className="bg-theme-500 text-theme-10 p-4 border-[1px] border-theme-400 border-solid">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
        </svg>
      </Menu.Button>
      <Menu.Items className="absolute bottom-0 right-0 translate-y-[105%] p-4 bg-theme-500 focus:outline-none flex flex-col gap-5 w-32  border-[1px] border-theme-100 border-solid">
        <Menu.Item>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/portfolio">Portfolio</Link>
        </Menu.Item>
        <Menu.Item>
          <button
            className="text-left text-theme-10"
            onClick={() => {
              if (router.asPath === "/") {
                smoother.scrollTo("#services", true, "center center");
              } else {
                router.push("/");
                setTimeout(() => {
                  smoother.scrollTo("#services", true, "center center");
                }, 2000);
              }
            }}
          >
            Services
          </button>
        </Menu.Item>
        <Menu.Item>
          <Link href="/about">About</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/contact">Contact</Link>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default NavbarItemsMobile;

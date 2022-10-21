import NextLink from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import GsapContext from "../../../store/gsap-context";

const NavItem = ({ href, title, ...props }) => (
  <NextLink href={href} passHref {...props}>
    <a className="flex hover:underline  items-center font-heading text-theme-black text-xl font-bold  2xl:text-2xl focus:shadow-none ">
      {title}
    </a>
  </NextLink>
);

const ServicesItem = () => {
  const router = useRouter();
  const { smoother } = useContext(GsapContext);

  return (
    <button
      className="flex hover:underline focus:shadow-none items-center font-heading font-bold text-black text-xl 2xl:text-2xl"
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
  );
};

export default NavItem;

export { ServicesItem };

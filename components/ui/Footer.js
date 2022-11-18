import { FaFacebookSquare, FaTiktok } from "react-icons/fa";

import { useContext } from "react";

import GsapContext from "../../store/gsap-context";
import { useRouter } from "next/router";

import NextImage from "next/image";
import NextLink from "next/link";
import NWFAImage from "../../public/images/NWFA-light.png";
import whiteLogo from "../../public/images/white-logo.png";

import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiPhone } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";

const ContactInfoText = ({ children }) => (
  <h3 className="text-xl text-left leading-none">{children}</h3>
);

const Footer = ({
  bgColor = "bg-theme-100",
  borderColor = "border-t-theme-200",
  textColor = "text-theme-10",
  infoSectionColor = "text-theme-10",
  iconColor = "text-theme-100",
}) => {
  const { smoother } = useContext(GsapContext);
  const router = useRouter();

  return (
    <footer
      className={
        "z-10 relative flex py-8 flex-col text-xs md:text-md border-t-[1px] border-t-solid gap-4 " +
        bgColor +
        " " +
        borderColor +
        " " +
        textColor
      }
    >
      <div className="mx-auto flex flex-col md:flex-row gap-20 p-10 md:p-20">
        <div className=" max-w-xs flex flex-col gap-2">
          <div className=" w-24">
            <NextImage src={whiteLogo} />
          </div>
          <p className="text-lg">
            Leading wood flooring company in the NYC metro area. We cover all
            types of wood flooring projects & services!
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-5 text-theme-100">Quick Links</h3>
          <ul className="text-lg flex gap-5 flex-col">
            <NextLink href="/">Home</NextLink>
            <NextLink href="/about">About</NextLink>
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
              Services{" "}
            </button>
            <NextLink href="/portfolio">Portfolio</NextLink>
            <NextLink href="/contact">Contact</NextLink>
            <NextLink href="/privacy">Privacy Policy</NextLink>
          </ul>
        </div>
        <div
          className={"flex lg:max-w-[300px] flex-col gap-5 " + infoSectionColor}
        >
          <h3 className="text-xl font-bold text-theme-100">Contact</h3>
          <a
            href="mailto:info@ewfny.com"
            className="flex justify-left gap-2 items-center"
          >
            <AiOutlineMail className={"h-4 w-4 " + iconColor} />
            <ContactInfoText>info@ewfny.com</ContactInfoText>
          </a>
          <a
            href="tel:9142377898"
            className="flex justify-left gap-2 items-center"
          >
            <HiPhone className={"h-4 w-4 " + iconColor} />
            <ContactInfoText>+1 (914) 237 7898</ContactInfoText>
          </a>
          <a
            className="flex justify-left gap-2 items-center"
            href="https://goo.gl/maps/cPdqN6SX3SnL1qtg6"
            target="_blank"
            rel="noreferrer"
          >
            <IoLocationOutline className={"self-center w-8 h-8 " + iconColor} />
            <ContactInfoText>
              941 Mclean Avenue, Suite 472, Yonkers, NY 10704
            </ContactInfoText>
          </a>
          <div className="flex justify-left gap-2 items-center">
            <BiTimeFive className={"h-4 w-4 " + iconColor} />
            <ContactInfoText>7:00AM - 5:00PM</ContactInfoText>
          </div>
          <div className="flex justify-center gap-10 ">
            <a
              className="self-center w-max"
              aria-label="our linkedin page"
              href="https://www.linkedin.com/company/exquisite-wood-floors/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className={"w-5 h-5 " + iconColor} />
            </a>
            <a
              className="self-center w-max"
              aria-label="our instagram page"
              href="https://www.instagram.com/exquisitewoodfloors/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className={"w-5 h-5 " + iconColor} />
            </a>
            <a
              className="self-center w-max"
              aria-label="our facebook page"
              href="https://www.facebook.com/exquisitewoodfloors"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare className={"w-5 h-5 " + iconColor} />
            </a>
            <a
              className="self-center w-max"
              aria-label="our tik-tok page"
              href="https://www.tiktok.com/@exquisitewoodfloors"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok className={"w-5 h-5 " + iconColor} />
            </a>
          </div>
        </div>
        <a
          href="https://nwfa.org/"
          target="_blank"
          rel="noreferrer"
          className="w-32"
        >
          <NextImage src={NWFAImage} />
        </a>
      </div>
      <div className="text-center">
        <span>© 2022 Exquisite Wood Floors NY. |</span>
        <a href="https://blockhead.digital/" target="_blank" rel="noreferrer">
          &nbsp;Website by Blockhead Digital
        </a>
      </div>
    </footer>
  );
};

export default Footer;

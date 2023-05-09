import Footer from "../components/ui/Footer";
import MainWrapper from "../components/ui/Main";

import { FaFacebookSquare, FaTiktok } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiPhone } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import ContactSection from "../components/ui/ContactSection";

const meta = {
  title: "Contact - Exquisite Wood Floors",
  description: "Get A Quote Today!",
  url: "https://www.exquisitewoodfloors.com/contact",
  twitter: "https://twitter.com/ewfny",
  imageUrl: "https://www.exquisitewoodfloors.com/images/twitter.jpeg",
  imageAlt: "Exquisite Wood Floors",
};

const ContactInfoText = ({ children }) => (
  <h3 className=" font-medium text-2xl text-left leading-none">{children}</h3>
);

const ContactInfoSection = ({ infoSectionColor, iconColor }) => {
  return (
    <div
      className={
        "flex lg:max-w-[300px] self-center flex-col text-center gap-4 " +
        infoSectionColor
      }
    >
      <a
        href="mailto:info@ewfny.com"
        className="flex justify-left gap-2 items-center"
      >
        <AiOutlineMail className={"h-4 w-4 " + iconColor} />
        <ContactInfoText>info@ewfny.com</ContactInfoText>
      </a>
      <a href="tel:9142377898" className="flex justify-left gap-2 items-center">
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
      <div className="flex justify-center gap-5 ">
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
  );
};

const Contact = () => {
  return (
    <>
      <MainWrapper heading={meta}>
        <div className="pt-40 2xl:pt-48 ">
          <ContactSection />
          <Footer bgColor="bg-theme-500" />
        </div>
      </MainWrapper>
    </>
  );
};
export default Contact;

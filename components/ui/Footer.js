import { FaFacebookSquare, FaTiktok } from "react-icons/fa";

import { BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = ({
  bgColor = "bg-theme-100",
  borderColor = "border-t-theme-200",
  textColor = "text-black",
}) => (
  <div
    className={
      "z-10 relative flex py-8 flex-col text-xs md:text-md border-t-[1px] border-t-solid gap-4 " +
      bgColor +
      " " +
      borderColor +
      " " +
      textColor
    }
  >
    <div className="flex justify-center gap-2 ">
      <a
        className="self-center w-max"
        aria-label="our linkedin page"
        href="https://www.linkedin.com/company/exquisite-wood-floors/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className={"w-5 h-5 "} />
      </a>
      <a
        className="self-center w-max"
        aria-label="our instagram page"
        href="https://www.instagram.com/exquisitewoodfloors/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram className={"w-5 h-5 "} />
      </a>
      <a
        className="self-center w-max"
        aria-label="our facebook page"
        href="https://www.facebook.com/exquisitewoodfloors"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare className={"w-5 h-5 "} />
      </a>
      <a
        className="self-center w-max"
        aria-label="our tik-tok page"
        href="https://www.tiktok.com/@exquisitewoodfloors"
        target="_blank"
        rel="noreferrer"
      >
        <FaTiktok className={"w-5 h-5 "} />
      </a>
    </div>
    <div className="text-center">
      <span>© 2022 Exquisite Wood Floors NY. |</span>
      <a href="https://blockhead.digital/" target="_blank" rel="noreferrer">
        &nbsp;Website by Blockhead Digital
      </a>
    </div>
  </div>
);

export default Footer;

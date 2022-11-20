import SVGArrow from "./SVGArrow";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiPhone } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { useForm, ValidationError } from "@formspree/react";
import Script from "next/script";

import { FaFacebookSquare, FaTiktok } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { useRouter } from "next/router";

const ContactInfoText = ({ children }) => (
  <h3 className="font-bold text-2xl text-left font-heading leading-none">
    {children}
  </h3>
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

const ContactForm = ({ formLabelColor, inputBorderColor, inputTextColor }) => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
  const router = useRouter();

  if (state.succeeded) {
    router.push("thank-you");
  }

  return (
    <form
      className="flex flex-col relative pb-14 z-[2] gap-12"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label className={"font-medium mb-2 " + formLabelColor} htmlFor="name">
          Name <span className="text-[red]">*</span>
        </label>
        <input
          required
          className={
            "py-2 bg-theme-100 bg-opacity-0 text-md border-b rounded-none " +
            inputBorderColor +
            " " +
            inputTextColor
          }
          id="name"
          name="name"
          type="text"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="flex flex-col">
        <label
          className={"font-medium mb-2 rounded-none " + formLabelColor}
          htmlFor="email"
        >
          Email <span className="text-[red]">*</span>
        </label>
        <input
          required
          className={
            "py-2 bg-theme-100 bg-opacity-0 text-md border-b rounded-none " +
            inputBorderColor +
            " " +
            inputTextColor
          }
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col">
        <label className={"font-medium mb-2 " + formLabelColor} htmlFor="phone">
          Phone <span className="text-[red]">*</span>
        </label>
        <input
          required
          className={
            "py-2 bg-theme-100 bg-opacity-0 text-md border-b rounded-none " +
            inputBorderColor +
            " " +
            inputTextColor
          }
          id="phone"
          name="phone"
          type="tel"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>
      <div className="flex flex-col">
        <label
          className={"font-medium mb-2 " + formLabelColor}
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className={
            "py-2 bg-theme-100 bg-opacity-0 text-md border-b resize-none w-full rounded-none " +
            inputBorderColor +
            " " +
            inputTextColor
          }
          id="message"
          name="message"
          type="text"
          maxLength="1500"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        className="flex text-left font-bold text-theme-100 gap-4 max-w-max "
        type="submit"
        disabled={state.submitting}
      >
        <div>Send now</div>
        <div className="self-center">
          <SVGArrow fill="#dbe2bb" />
        </div>
      </button>
    </form>
  );
};

const ContactSection = ({
  bgColor = "bg-theme-100",
  infoSectionColor = "text-theme-500",
  headingColor = "text-theme-500",
  formLabelColor = "text-black",
  inputBorderColor = "border-b-theme-black",
  inputTextColor = "text-black",
  iconColor,
  ...props
}) => (
  <div
    className={
      "relative z-10 flex max-w-5xl mx-auto justify-center flex-col-reverse gap-20 lg:flex-row px-4 py-40  lg:gap-24 " +
      bgColor
    }
    id="contact"
    {...props}
  >
    <div>
      <h2
        className={
          "text-3xl lg:text-4xl font-bold leading-none font-heading pb-10 " +
          headingColor
        }
        pb="10"
      >
        Let&apos;s build together
      </h2>
      <ContactForm
        formLabelColor={formLabelColor}
        inputBorderColor={inputBorderColor}
        inputTextColor={inputTextColor}
      />
    </div>
    <ContactInfoSection
      infoSectionColor={infoSectionColor}
      iconColor={iconColor}
    />
  </div>
);

export default ContactSection;

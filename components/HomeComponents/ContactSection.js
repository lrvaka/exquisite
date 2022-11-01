import SVGArrow from "../ui/SVGArrow";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiPhone } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { useForm, ValidationError } from "@formspree/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { FaFacebookSquare, FaTiktok } from "react-icons/fa";
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
      <div className="flex justify-left gap-2 items-center">
        <AiOutlineMail className={"h-4 w-4 " + iconColor} />
        <ContactInfoText>info@ewfny.com</ContactInfoText>
      </div>
      <div className="flex justify-left gap-2 items-center">
        <HiPhone className={"h-4 w-4 " + iconColor} />
        <ContactInfoText>+1 (914) 237 7898</ContactInfoText>
      </div>
      <a
        className="flex justify-left gap-2 items-center"
        href="https://www.google.com/maps/place/941+McLean+Ave+%23472,+Yonkers,+NY+10704/@40.9034428,-73.8675617,19z/data=!3m1!4b1!4m5!3m4!1s0x89c2f2e70ca2a027:0x2a5bc5f5c5d874f9!8m2!3d40.9034428!4d-73.8670145"
      >
        <IoLocationOutline className={"self-center w-8 h-8 " + iconColor} />
        <ContactInfoText>
          941 Mclean Avenue, Suite 472, Yonkers, NY 10707
        </ContactInfoText>
      </a>
      <div className="flex justify-center gap-2 ">
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

  // if (state.succeeded) {
  //   setTimeout(() => {
  //     ScrollTrigger.refresh();
  //   }, 100);
  //   return (
  //     <div className="mx-auto max-w-sm flex justify-center items-center text-center mb-12 sm:mb-0 sm:pb-36 sm:pt-10">
  //       <p className="text-xl">
  //         Thank you for taking the first steps towards a more Exquisite living
  //         experience. We will be in touch with you shortly.
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <form
      className="flex flex-col relative pb-14 z-[2] gap-12"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label className={"font-medium mb-2 " + formLabelColor} htmlFor="name">
          Name
        </label>
        <input
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
          Phone
        </label>
        <input
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
          Enquiry <span className="text-[red]">*</span>
        </label>
        <textarea
          required
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
        className="flex text-left font-bold text-theme-300 gap-4 max-w-max "
        type="submit"
        disabled={state.submitting}
      >
        <div>Send now</div>
        <div className="self-center">
          <SVGArrow fill="#979a6f" />
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
      "relative z-10 flex max-w-5xl mx-auto justify-center flex-col lg:flex-row px-4 pt-20 pb-10 lg:gap-24 " +
      bgColor
    }
    id="contact"
    {...props}
  >
    <div>
      <h2
        className={
          "text-3xl lg:text-4xl font-bold leading-none pb-10 font-heading " +
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

import SVGArrow from "./SVGArrow";
import NextLink from "next/link";

const ContactMessage = ({
  textColor = "text-theme-black",
  headingColor = "text-theme-500",
  bgColor = "bg-theme-100",
  fillColor = "fill-theme-500",
}) => {
  return (
    <div
      className={
        "relative z-10 flex max-w-5xl mx-auto justify-center flex-col px-4 xl:px-40 py-40 " +
        bgColor +
        " "
      }
    >
      <h2
        className={
          "text-5xl md:text-8xl font-bold leading-none font-heading text-left pb-5 " +
          headingColor
        }
      >
        Ready to work with us?
      </h2>
      <p className={"text-xl lg:text-2xl max-w-prose " + textColor}>
        Let us help you make your next project Exquisite!{" "}
        <br className=" hidden lg:flex" /> Tell us about your project and
        we&apos;ll be in touch.
      </p>
      <NextLink href="/contact" passHref>
        <a className="flex text-left font-bold w-max gap-4 mt-10">
          <div className={"text-md lg:text-xl " + headingColor}>
            Let&apos;s work together
          </div>
          <div className="self-center">
            <SVGArrow className={fillColor} />
          </div>
        </a>
      </NextLink>
    </div>
  );
};

export default ContactMessage;

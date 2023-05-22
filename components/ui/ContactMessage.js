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
        bgColor
      }
    >
      <h2
        className={
          "text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-none font-heading text-left pb-5 " +
          headingColor
        }
      >
        Ready to Collaborate?
      </h2>
      <p className={"text-base md:text-lg lg:text-xl max-w-prose " + textColor}>
        Let us help you bring your next project to life with our Exquisite
        touch! <br className="hidden lg:flex" /> Share your project details, and
        we&apos;ll get in touch with you.
      </p>
      <NextLink href="/contact" passHref>
        <a className="flex text-left font-bold w-max gap-4 mt-10">
          <div
            className={
              "text-base md:text-lg lg:text-xl xl:text-2xl " + headingColor
            }
          >
            Let&apos;s Get Started
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

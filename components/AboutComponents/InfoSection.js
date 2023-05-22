import NextImage from "next/image";
import { useContext } from "react";
import SVGArrow from "../ui/SVGArrow";
import GsapContext from "../../store/gsap-context";
import ParallaxImage from "../ui/ParallaxImage";
import image from "../../public/images/planks.jpeg";
import NextLink from "next/link";

const InfoSection = () => {
  const { smoother } = useContext(GsapContext);

  return (
    <div className="flex my-24 mx-auto relative gap-12 sm:gap-0 flex-col md:flex-row min-h-[500px]">
      <div className="flex flex-col justify-center flex-0 md:flex-1 bg-theme-500">
        <div className="max-w-[800px] self-center px-4 md:px-12 py-20 relative">
          <div className="absolute top-0 right-0 h-[300px] lg:h-[400px] 2xl:h-[500px] w-[300px] lg:w-[400px] 2xl:w-[500px] opacity-20">
            <NextImage
              src="/images/stamp.png"
              alt="ewf stamp"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <h1 className="mb-10 text-3xl md:text-5xl lg:text-6xl xl:text-8xl text-theme-100 font-heading font-bold">
            About Us
          </h1>

          <p className="mb-12 text-base md:text-lg lg:text-xl text-theme-10 max-w-prose">
            Exquisite Wood Floors is a family-owned and operated flooring
            company with over 25 years of experience. Our passion for wood
            flooring is evident in every project we undertake. Whether it's
            refinishing, repair, or installation, we approach each job with
            meticulous care and attention to detail. We take pride in our
            professionalism and craftsmanship, making us the perfect choice for
            all your flooring needs. Schedule a consultation with us today!
          </p>
          <NextLink href="/contact">
            <a className="flex text-left font-bold text-theme-200 w-max gap-4">
              <span className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Contact Us
              </span>
              <div className="self-center">
                <SVGArrow fill="#cdcda6" />
              </div>
            </a>
          </NextLink>
        </div>
      </div>
      <div className="flex min-h-full overflow-y-hidden relative justify-center items-center flex-1 2xl:flex-[1.5]">
        <ParallaxImage src={image} alt="beautiful wood planks" />
      </div>
    </div>
  );
};

export default InfoSection;

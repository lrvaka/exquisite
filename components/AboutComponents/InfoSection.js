import NextImage from "next/image";
import { useContext } from "react";
import SVGArrow from "../ui/SVGArrow";
import GsapContext from "../../store/gsap-context";
import ParallaxImage from "../ui/ParallaxImage";
import image from "../../public/images/planks.jpeg";

const InfoSection = () => {
  const { smoother } = useContext(GsapContext);

  return (
    <div className="flex my-24 mx-auto relative gap-12 sm:gap-0 flex-col md:flex-row min-h-[1000px] md:min-h-[500px]">
      <div className="flex flex-col justify-center flex-0 md:flex-1 bg-theme-500">
        <div className="max-w-[800px] self-center px-4 md:px-12 py-20 relative">
          <div className="absolute top-0 right-0 h-[300px] lg:h-[400px] 2xl:h-[500px] w-[300px] lg:w-[400px] 2xl:w-[500px] opacity-20">
            <NextImage
              sizes="25vw"
              alt="ewf stamp"
              src="/images/stamp.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2
            className="mb-10 text-theme-100 text-3xl md:text-5xl lg:text-8xl font-heading font-bold"
            borderBottom="1px #979a6f solid"
          >
            About Us
          </h2>

          <p className="mb-12 text-md md:text-xl text-theme-10 max-w-prose">
            Exquisite Wood Floors is a family-owned and operated flooring
            company with over 25 years of experience. We love what we do, and it
            shows in our work. From refinishing to repair to installation, we
            take great care in each project and always focus on the details. Our
            professionalism and attention to detail sets us apart and makes us
            the perfect choice for your flooring needs. Contact us today to
            schedule a consultation!
          </p>
          <button
            className="flex text-left font-bold text-theme-200 w-max gap-4"
            onClick={() => {
              smoother.scrollTo("#contact", true, "center center");
            }}
          >
            <div className="text-md lg:text-xl">Contact us</div>
            <div className="self-center">
              <SVGArrow fill="#cdcda6" />
            </div>
          </button>
        </div>
      </div>
      <div
        className="flex min-h-full overflow-y-hidden relative justify-center items-center flex-1 2xl:flex-[1.5]"
        minH="100%"
        flex={{ base: 1, "2xl": 1.5 }}
        overflowY="hidden"
        pos="relative"
        justifyContent="center"
        alignItems="center"
      >
        <ParallaxImage alt="beautiful wood planks" src={image} />
      </div>
    </div>
  );
};

export default InfoSection;

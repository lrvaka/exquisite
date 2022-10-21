import NextLink from "next/link";
import ParallaxImage from "../ui/ParallaxImage";
import { BsArrowRight } from "react-icons/bs";
import image from "../../public/images/view-works.jpeg";

const PortfolioSection = () => (
  <div className="flex overflow-y-hidden relative min-h-[500px] mt-[-700px] mb-24 min-w-full">
    <ParallaxImage alt="beautiful wood flooring in home backdrop" src={image} />
    <div className="flex flex-col absolute top-[calc(75%-142px)] left-[10%]">
      <h2
        className="text-theme-100 text-5xl md:text-5xl lg:text-8xl font-black font-heading"
        borderBottom="1px #979a6f solid"
      >
        Portfolio
      </h2>
      <NextLink href="/portfolio" passHref>
        <a className="text-md lg:text-lg flex items-center max-w-max py-2 px-4 bg-theme-500 text-theme-100">
          View Projects
          <BsArrowRight className="ml-2" />
        </a>
      </NextLink>
    </div>
  </div>
);

export default PortfolioSection;

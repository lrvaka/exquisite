import ParallaxImage from "../ui/ParallaxImage";
import image from "../../public/images/about.jpeg";

const HeaderSection = () => (
  <div className="pt-32 md:pt-44">
    <div className="flex overflow-y-hidden relative mx-auto justify-center items-center min-h-[200px] lg:min-h-[400px]">
      <ParallaxImage src={image} alt="man doing wood flooring msg backdrop" />
      <h1 className="p-6 text-theme-100 text-4xl lg:text-8xl relative text-center font-heading font-extrabold">
        Flooring services
        <br /> with a peace of mind
      </h1>
    </div>
  </div>
);

export default HeaderSection;

import TestimonialSlider from "./TestimonialSlider";
import ParallaxImage from "../ui/ParallaxImage";
import image from "../../public/images/wood.jpeg";

const TestimonialSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mb-24">
      <div className="overflow-y-hidden relative min-h-full flex-[1.5] 2xl:flex-[1.25]">
        <ParallaxImage alt="authentic wood stomp" src={image} />
      </div>
      <div className="px-4 md:px-12 py-20 flex-col justify-center items-center bg-theme-400 md:flex-[1.5]">
        <div className="relative max-w-[800px]">
          <h2 className="mb-10 text-theme-100 text-3xl md:text-5xl lg:text-8xl font-heading font-bold">
            Testimonials
          </h2>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

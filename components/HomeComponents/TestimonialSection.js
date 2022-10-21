import ParallaxImage from "../ui/ParallaxImage";
import image from "../../public/images/test-section.png";

const TestimonialSection = () => {
  return (
    <div className="my-24 min-h-[300px] md:min-h-[500px] overflow-y-hidden relative">
      <ParallaxImage alt="backdrop for testimonial" src={image} />
      <div className="absolute max-w-[800px] flex flex-col justify-center w-full h-full px-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <blockquote className="text-theme-10 text-large md:text-3xl max-w-prose">
          &quot;The service provided by the people at EWF is unmatched, they
          were highly customer-oriented, and ensured that I had the best
          experience every step of the way. I love my new floors!&quot;
        </blockquote>
        <p className="text-theme-100 italic text-right">
          - M. Holmes, Manhattan NY
        </p>
      </div>
    </div>
  );
};

export default TestimonialSection;

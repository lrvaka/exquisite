import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import WhyUsSectionItem from "./WhyUsSectionItem";

const WhyUsSection = () => {
  const containerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(containerRef.current.children, {
      zIndex: (i, target, targets) => targets.length - i,
    });

    gsap.to(containerRef.current.children, {
      yPercent: -100,
      ease: "none",
      stagger: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
      },
    });
    return () => {};
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="w-screen h-screen relative top-0 left-0 overflow-hidden"
      >
        <div className="flex items-center justify-center absolute bg-theme-500 w-full h-full">
          <h2 className="text-theme-100 text-6xl xl:text-7xl 2xl:text-9xl font-black text-center font-heading">
            Why Work With Us?
          </h2>
        </div>
        <WhyUsSectionItem color="text-theme-200" bgColor="bg-theme-400">
          We are experts in all things flooring
        </WhyUsSectionItem>

        <WhyUsSectionItem color="text-theme-100" bgColor="bg-theme-300">
          We use only the highest quality materials and products
        </WhyUsSectionItem>

        <WhyUsSectionItem color="text-theme-500" bgColor="bg-theme-200">
          We have a wide variety of flooring options to choose from
        </WhyUsSectionItem>

        <WhyUsSectionItem color="text-black" bgColor="bg-theme-200">
          We offer competitive rates and excellent customer service
        </WhyUsSectionItem>
      </div>
    </div>
  );
};

export default WhyUsSection;

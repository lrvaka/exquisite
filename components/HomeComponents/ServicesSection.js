import SectionHeading from "../ui/SectionHeading";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import NextLink from "next/link";

const ServicesItem = ({ heading, children }) => {
  return (
    <div className="flex flex-grow text-center flex-col bg-theme-400 gap-4 p-10">
      <div className="flex flex-grow max-w-[500px] mx-auto flex-col">
        <h2 className="pb-2 text-theme-200 text-2xl md:text-3xl 2xl:text-5xl font-heading font-bold leading-none">
          {heading}
        </h2>
        <p className="self-center justify-self-center text-theme-10 text-md md:text-lg">
          {children}
        </p>
      </div>
      <NextLink href="/contact" passHref>
        <a className="flex text-left font-semibold items-center justify-center text-theme-200 gap-2">
          <div className="text-md md:text-lg 2xl:text-xl font-semibold">
            {`Get ${heading} Now`}
          </div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </NextLink>
    </div>
  );
};

const ServicesSection = () => {
  const containerRef = useRef();
  const subHeadRef = useRef();
  useEffect(() => {
    gsap.set(containerRef.current.children, { autoAlpha: 0, y: 50 });
    gsap.set(subHeadRef.current, { autoAlpha: 0 });

    let ani = gsap.to(containerRef.current.children, {
      y: 0,
      autoAlpha: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });

    let subAni = gsap.to(subHeadRef.current, {
      autoAlpha: 1,
      ease: "power4.out",
      delay: 0.5,
      duration: 1.5,
      scrollTrigger: {
        trigger: subHeadRef.current,
      },
    });
    return () => {
      ani.kill();
      subAni.kill();
    };
  }, []);
  return (
    <div id="services">
      <div className="flex flex-col justify-center mx-auto items-center max-w-[600px] text-center pb-10 self-center gap-1 px-4">
        <SectionHeading className="text-theme-500">
          Facing Wood Flooring Challenges? <br />
          We Have the Perfect Solutions
        </SectionHeading>

        <p className="text-md sm:text-lg max-w-md" ref={subHeadRef}>
          At Exquisite Wood Floors, we offer comprehensive wood flooring
          services to address all your needs.
        </p>
      </div>

      <div
        className="flex justify-between self-center min-w-full flex-col xl:flex-row gap-4 px-0 sm:px-6 md:px-12"
        ref={containerRef}
      >
        <ServicesItem heading="Installation">
          Our team provides professional installation services for all types of
          wood flooring. Whether you have a specific style or budget in mind, we
          will help you find the perfect flooring solution for your project.
        </ServicesItem>

        <ServicesItem heading="Refinishing">
          Over time, wood floors may show signs of wear and tear. Our
          refinishing services are designed to restore the beauty of your wood
          floors, leaving them looking brand new. Our work is guaranteed to
          impress.
        </ServicesItem>

        <ServicesItem heading="Repair">
          Accidents happen, and when your wood floor gets damaged, we're here to
          help. Our experts specialize in wood floor repairs, ensuring that your
          floor is restored to its original beauty.
        </ServicesItem>

        <ServicesItem heading="Maintenance">
          We understand the importance of maintaining the pristine condition of
          your wood floors. Our team offers comprehensive maintenance and upkeep
          services to ensure that your floors remain in peak condition
          throughout the year.
        </ServicesItem>
      </div>
    </div>
  );
};

export default ServicesSection;

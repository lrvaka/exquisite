import SVGArrow from "../ui/SVGArrow";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import useArrayRef from "../hooks/useArrayRef";
import SectionHeading from "../ui/SectionHeading";
import aboutImage2 from "../../public/images/works/ferrari/3.jpeg";
import aboutImage3 from "../../public/images/about-3.jpg";
import aboutImage4 from "../../public/images/works/peloton/6.jpg";
import ParallaxImage from "../ui/ParallaxImage";
import NextImage from "next/image";
import aboutUsImage from "../../public/images/about-us.png";
import NextLink from "next/link";

const AboutUsSection = () => {
  const [imageRefs, setImageRefs] = useArrayRef();

  const containerRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    let animation;

    gsap.set(imageRefs.current, {
      autoAlpha: 0.1,
      scale: 0.75,
      clipPath: "inset(100% 0 0 0)",
    });

    imageRefs.current.forEach((image) => {
      animation = gsap.to(image, {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        scrollTrigger: {
          trigger: image, // this will use the first box as the trigger
          scrub: true,
          end: "bottom bottom",
          onLeave: (self) => self.kill(false, true),
        },
      });
    });

    gsap.set(leftRef.current, {
      x: -50,
      opacity: 0.1,
      scale: 0.75,
      clipPath: "inset(100% 0 0 0)",
    });

    let leftP = gsap.to(leftRef.current, {
      x: 0,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      ease: "power4.out",
      scrollTrigger: leftRef.current,
      duration: 1,
    });

    gsap.set(rightRef.current, {
      x: 50,
      opacity: 0.1,
      scale: 0.75,
      clipPath: "inset(100% 0 0 0)",
    });

    let rightP = gsap.to(rightRef.current, {
      x: 0,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power4.out",
      scale: 1,
      scrollTrigger: rightRef.current,
      duration: 1, // this will use the first box as the trigger
    });

    return () => {
      rightP.kill();
      leftP.kill();
      animation.kill();
    };
  }, [imageRefs]);

  return (
    <>
      <div
        className="relative z-10 flex max-w-[1800px] mx-auto my-24 flex-col md:flex-row "
        flexDir={{ base: "column", md: "row" }}
      >
        <div className="relative w-full h-[100vw] md:h-auto ">
          <NextImage
            sizes="50vw"
            alt="beautiful wood floor graphic design"
            priority="true"
            placeholder="blur"
            layout="fill"
            objectFit="contain"
            src={aboutUsImage}
          />
        </div>
        <div className="max-h-full px-4 sm:px-8 md:px-16 py-20 bg-theme-500 overflow-x-hidden self-center">
          <SectionHeading className="pb-10 text-theme-100">
            Your one stop shop for all your wood flooring needs
          </SectionHeading>

          <div className="pb-10 flex flex-col gap-8">
            <p
              ref={leftRef}
              className="text-md sm:text-lg text-theme-10 font-normal max-w-prose"
            >
              Exquisite Wood Floors is a leading wood flooring company in the
              New York Metropolitan area that specializes in a wide range of
              wood flooring projects from retail and commercial to residential
              and hospitality, and much more.
            </p>
            <p
              ref={rightRef}
              className="text-md sm:text-lg text-theme-10 font-normal max-w-prose"
            >
              We are able to provide our clients with quality services and
              products that meet their specific needs. Our team is dedicated to
              providing professional service and support, so you can be assured
              your project will be handled with the utmost care.
            </p>
          </div>
          <NextLink href="/about" passHref>
            <a className="flex text-left font-bold text-theme-200 w-max gap-4">
              <div className="text-md md:text-xl font-semibold">About us</div>
              <div className="self-center">
                <SVGArrow fill="#cdcda6" />
              </div>
            </a>
          </NextLink>
        </div>
      </div>
      <div
        className="grid min-h-[500px] md:min-h-[1000px] 2xl:min-h-[1250px] grid-rows-[repeat(10,1fr)] grid-cols-[repeat(25, 1fr)] flex-grow"
        ref={containerRef}
      >
        <div
          ref={setImageRefs}
          className="relative row-[5/11] col-[20/26] overflow-hidden"
        >
          <ParallaxImage alt="beautiful wood floor home" src={aboutImage4} />
        </div>
        <div
          ref={setImageRefs}
          className="relative row-[2/9] col-[8/19] overflow-hidden"
        >
          <ParallaxImage alt="beautiful wood floor home" src={aboutImage3} />
        </div>
        <div
          ref={setImageRefs}
          className="relative row-[1/6] col-[1/7] overflow-hidden"
        >
          <ParallaxImage alt="beautiful wood floor home" src={aboutImage2} />
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;

import NextImage from "next/image";
import { motion } from "framer-motion";
import { useRef, useContext } from "react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import heroImage1 from "../../public/images/hero-1.webp";
import heroImage3 from "../../public/images/hero-3.jpg";
import GsapContext from "../../store/gsap-context";
import NextLink from "next/link";

const variants = {
  initial: {
    clipPath: "inset(0 100% 0 0)",
    opacity: 0,
  },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      delay: 3,
      duration: 2,
      ease: [0.36, 0.77, 0, 0.99],
    },
  },
};

const HeroSection = () => {
  const { smoother } = useContext(GsapContext);
  const containerRef = useRef();
  const headingRef = useRef();
  const subRef = useRef();

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const split = new SplitText(headingRef.current, {
      type: "chars",
    });

    const splitSub = new SplitText(subRef.current, {
      type: "chars, words, lines",
    });

    const images = containerRef.current.children;

    gsap.set(images, {
      scale: 0.75,
      autoAlpha: 0.1,
      clipPath: "inset(100% 0 0 0)",
    });

    // Target ALL descendants with the class of .box
    let animation = gsap.to(images, {
      scale: 1,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      delay: 0.75,
      duration: 2.5,
      stagger: 1,
      ease: "power4.out",
    });

    gsap.set(headingRef.current, { autoAlpha: 1 });
    gsap.set(subRef.current, { autoAlpha: 1 });
    gsap.set(split.chars, { y: -20, opacity: 0, scale: 1.25, skewX: 10 });
    gsap.set(splitSub.chars, { y: 30, opacity: 0, scale: 1.25, skewX: 20 });

    let splitCharsAni = gsap.to(split.chars, {
      y: 0,
      opacity: 1,
      scale: 1,
      skewX: 0,
      duration: 1,
      delay: 0.3,
      stagger: 0.05,
      ease: "a1",
    });

    let splitSubCharsAni = gsap.to(splitSub.chars, {
      y: 0,
      opacity: 1,
      scale: 1,
      skewX: 0,
      duration: 1,
      delay: 1.25,
      stagger: 0.05,
      ease: "a1",
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="relative">
      <div className="top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 absolute text-center w-full">
        <h1
          className="relative invisible text-theme-500 text-5xl sm:text-7xl md:text-8xl lg:text-9xl z-[1] font-heading font-black"
          ref={headingRef}
        >
          Exquisite <br />
          Wood Floors
        </h1>
        <h2
          className="relative invisible overflow-hidden text-theme-500 text-lg sm:text-2xl md:text-3xl lg:text-4xl z-[1]"
          ref={subRef}
        >
          NYC&apos;s Premier Wood Flooring Experts
        </h2>
        <NextLink href="/contact" passHref>
          <a className="flex justify-center items-center mt-2 sm:mt-2 md:mt-4 lg:mt-6">
            <motion.div
              className="flex relative text-md items-center max-w-max py-2 px-4 bg-theme-500 text-theme-100 sm:text-md lg:text-lg hover:underline"
              variants={variants}
              initial="initial"
              animate="animate"
            >
              Schedule your Free Consultation Today!{" "}
              <svg
                className="ml-2"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                ></path>
              </svg>
            </motion.div>
          </a>
        </NextLink>
      </div>

      <div
        className="pt-[139px] 2xl:pt-[179px] min-h-[95vh] grid relative max-w-[1920px] mx-auto my-0 grid-rows-[repeat(15, 1fr)] xl:grid-row-[25, 1fr] grid-cols-[repeat(15, 1fr)] xl:grid-cols-[25, 1fr]"
        ref={containerRef}
      >
        <div
          className="invisible relative row-[11/15] xl:row-[17/25] col-[5/16] sm:col-[10/16] xl:col-[18/26]"
          data-speed="1.2"
        >
          <NextImage
            alt="beautiful wood floor home"
            sizes="25vw"
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            src={heroImage1}
          />
        </div>
        <div
          className="invisible relative row-[2/5] xl:row-[2/9] col-[2/9]  sm:col-[1/5] xl:col-[2/8]"
          data-speed="1.1"
        >
          <NextImage
            alt="beautiful wood floor home"
            sizes="25vw"
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            src={heroImage3}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

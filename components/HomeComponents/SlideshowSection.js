import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRef, useEffect } from "react";
import slides from "../../lib/slides";
import NextImage from "next/image";
import SectionHeading from "../ui/SectionHeading";
import NextLink from "next/link";
import gsap from "gsap";
import SVGArrow from "../ui/SVGArrow";

const animation = { duration: 20000, easing: (t) => t };

const SlideShowSection = (props) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    mode: "free",
    initial: 0,
    created(s) {
      s.moveToIdx(10, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 10, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 10, true, animation);
    },
    slides: {
      perView: 2.5,
      spacing: 15,
    },
  });

  const textRef = useRef();

  useEffect(() => {
    if (!textRef.current) {
      return;
    }

    gsap.set(textRef.current, {
      autoAlpha: 0.1,
      x: -100,
      scale: 0.75,
      clipPath: "inset(100% 0 0 0)",
    });

    let textAni = gsap.to(textRef.current, {
      x: 0,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      ease: "power4.out",
      scrollTrigger: textRef.current, // this will use the first box as the trigger
      duration: 1,
    });

    return () => {
      textAni.kill();
    };
  }, []);

  return (
    <div className="bg-theme-500" id="works">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row-reverse relative">
          <NextLink href="/portfolio" passHref>
            <a
              ref={sliderRef}
              className="keen-slider overflow-hidden relative min-h-full"
            >
              {slides.map((e, i) => (
                <div
                  key={e.url}
                  className="keen-slider__slide relative h-[15rem] lg:h-[470px]"
                >
                  <NextImage
                    sizes="25vw"
                    alt={`carousel image ${i}`}
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                    src={e.src}
                  />
                </div>
              ))}
            </a>
          </NextLink>

          <div className="px-4 sm:px-8 md:px-16 py-20 md:py-40">
            <SectionHeading className="pb-10 text-theme-100">
              Team of seasoned
              <br />
              flooring experts
            </SectionHeading>

            <div className="flex flex-col lg:pr-20 invisible" ref={textRef}>
              <p className="text-md sm:text-lg text-theme-10 font-normal pb-10 max-w-prose">
                Every member of the Exquisite Wood Floors team is a wooden floor
                expert with extensive knowledge of their sector and years of
                flooring experience, delivering projects across all markets to
                the highest of standards, ensuring unique, durable floors of
                quality.
              </p>
              <NextLink href="/portfolio" passHref>
                <a className="flex text-left font-bold text-theme-200 w-max gap-4">
                  <div className="lg:text-xl">View portfolio</div>
                  <div className="self-center">
                    <SVGArrow fill="#cdcda6" />
                  </div>
                </a>
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShowSection;

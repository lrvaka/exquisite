import Marquee from "react-fast-marquee";
import ContactSection from "../components/ui/ContactSection";
import { ContactForm } from "../components/ui/ContactSection";
import NextImage from "next/image";
import logo from "../public/images/white-logo.png";
import image from "../public/images/about.jpeg";
import ParallaxImage from "../components/ui/ParallaxImage";
import AnimatedNumber from "animated-number-react";
import WorksModal from "../components/ui/Modal";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slides from "../lib/slides";
import workSlides from "../lib/work-slides";

const animation = { duration: 100000, easing: (t) => t };

const LandingPage = () => {
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
  return (
    <div className="bg-theme-500 ">
      <div>
        {/* <ParallaxImage src={image} alt="man doing wood flooring msg backdrop" /> */}
        {/* <h1 className="p-6 max-w-4xl text-theme-100 text-4xl lg:text-7xl relative text-center font-heading font-extrabold">
          Your home for all your wood flooring services!
        </h1> */}
        <WorksModal slides={workSlides.all}>
          <div
            ref={sliderRef}
            className="keen-slider overflow-hidden relative min-h-full"
          >
            {slides.map((e, i) => (
              <div
                key={e.url}
                className="keen-slider__slide relative h-[15rem] lg:h-[300px]"
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
          </div>
        </WorksModal>
      </div>
      <div className="py-10 px-4 lg:px-10 mx-auto flex flex-col-reverse gap-16 lg:flex-row lg:gap-32 justify-between lg:max-w-7xl">
        <div className=" max-w-xl h-full self-center flex flex-col flex-grow">
          <div className="max-w-[100px]  self-center">
            <NextImage alt="ewf logo" src={logo} />
          </div>
          <h2 className="font-heading font-bold leading-none text-lg md:text-5xl text-theme-200 text-center">
            NYC&apos;s Leading Wood Flooring Company
          </h2>
          <h2 className="font-heading mt-8 mb-2 leading-none text-lg md:text-3xl text-theme-200 text-center">
            Any Project, Any Service
          </h2>
          <div className="mb-10">
            {/* <Marquee gradient={false}>
              <div className=" overflow-hidden text-theme-100 opacity-25 text-xl flex justify-around min-w-full">
                <p>Installation</p>
                <p>Refinishing</p>
                <p>Maintenance</p>
                <p>Repair</p>
              </div>
            </Marquee> */}
            <div className=" max-w-prose mx-auto text-center ">
              <p className="text-theme-10 text-xl my-5 ">
                No matter the service and no matter the project, Exquisite Wood
                Floors will ensure you the best wood flooring experience for
                your next project!
              </p>
            </div>
            {/* <Marquee gradient={false}>
              <div className=" overflow-hidden text-theme-100 opacity-25 text-xl flex gap-6">
                <p>Residential</p>
                <p>Multi-Family</p>
                <p>Commercial</p>
                <p>Hospitality</p>
                <p className="mr-6">Institutional</p>
              </div>
            </Marquee> */}
          </div>
          <div className="flex justify-around text-3xl text-theme-200 text-center">
            <div>
              <div>
                <AnimatedNumber
                  value={25}
                  formatValue={(value) => value.toFixed(0)}
                  duration={3000}
                />
                +
              </div>
              <p className="text-xl">Years of Experience</p>
            </div>

            <div>
              <div>
                <AnimatedNumber
                  value={1300}
                  formatValue={(value) => value.toFixed(0)}
                  duration={3000}
                />
                +
              </div>
              <p className="text-xl">Projects</p>
            </div>

            <div>
              <div>
                <AnimatedNumber
                  value={900}
                  formatValue={(value) => value.toFixed(0)}
                  duration={3000}
                />
                +
              </div>
              <p className="text-xl">Satisfied Customers</p>
            </div>
          </div>
        </div>
        <div className="bg-theme-100 py-10 px-4">
          <h2 className=" mb-10 font-heading font-bold leading-none text-2xl md:text-5xl text-theme-500 text-center">
            Claim Your FREE Consultation Today!
          </h2>
          <ContactForm
            formLabelColor="text-theme-black"
            inputBorderColor="border-b-theme-500"
            inputTextColor="text-black"
            infoSectionColor="text-theme-500"
            submitColor="#213a30"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

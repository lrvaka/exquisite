import Marquee from "react-fast-marquee";
import NextImage from "next/image";
import logo from "../public/images/dark-logo.png";
import AnimatedNumber from "animated-number-react";
import WorksModal from "../components/ui/Modal";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slides from "../lib/slides";
import workSlides from "../lib/work-slides";
import MainWrapper from "../components/ui/Main";
import OpeningTransition from "../components/ui/OpeningTransition";
import Form from "../components/ui/Form/Form";
import NWFAImage from "../public/images/NWFA-light.png";

const animation = { duration: 100000, easing: (t) => t };

const meta = {
  title: "Exquisite Wood Floors: Hardwood Flooring You Can Trust",
  description:
    "We make any living space exquisite with our reliable and appealing hardwood flooring",
  url: "https://www.exquisitewoodfloors.com/landing-page",
  twitter: "https://twitter.com/ewfny",
  imageUrl: "https://www.exquisitewoodfloors.com/images/twitter.jpeg",
  imageAlt: "Exquisite Wood Floors",
};

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
    <>
      <OpeningTransition />
      <MainWrapper heading={meta}>
        <div className="bg-theme-500 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-20 lg:px-10 items-center justify-center max-w-[1700px] mx-auto">
          <div className="bg-theme-100 mb-20 lg:mb-0 py-5 px-4 min-h-[756px]  lg:col-start-2 flex flex-col">
            <div className="max-w-[100px]  self-center mb-2">
              <NextImage alt="ewf logo" src={logo} />
            </div>
            <p className="text-center lg:text-xl max-w-sm mx-auto mb-10">
              Tell us what you&apos;re looking for & we&apos;ll get back to you
              with your FREE consultation within 24 hours!
            </p>

            <Form from="landing-page" />
          </div>
          <div className="h-full self-center flex flex-col lg:col-start-1 lg:row-start-1 justify-center">
            <div className="px-10 ">
              <h2 className="mb-4 font-heading font-black leading-none text-xl lg:text-4xl text-theme-200 text-center">
                NYC&apos;s Leading Wood Flooring Company
              </h2>
              <h2 className="mb-2 font-heading font-semibold lg:mt-8 lg:mb-2 leading-none text-lg lg:text-3xl text-theme-200 text-center">
                Any Project, Any Service
              </h2>
              <p className="mb-10 text-center text-theme-10 text-md lg:text-xl">
                No matter the service and no matter the project, Exquisite Wood
                Floors will ensure you the best wood flooring experience for
                your next project!
              </p>
              <div className="flex justify-around text-2xl lg:text-3xl text-theme-200 text-center mb-10">
                <div>
                  <div className="font-bold text-theme-100">
                    <AnimatedNumber
                      value={25}
                      formatValue={(value) => value.toFixed(0)}
                      duration={3000}
                    />
                    +
                  </div>
                  <p className="text-sm lg:text-lg leading-none lg:leading-none">
                    Years of <br /> Experience
                  </p>
                </div>

                <div>
                  <div className="font-bold text-theme-100">
                    <AnimatedNumber
                      value={500}
                      formatValue={(value) => value.toFixed(0)}
                      duration={3000}
                    />
                    +
                  </div>
                  <p className="text-sm lg:text-lg leading-none lg:leading-none">
                    Projects
                  </p>
                </div>

                <div>
                  <div className="font-bold text-theme-100">
                    <AnimatedNumber
                      value={300}
                      formatValue={(value) => value.toFixed(0)}
                      duration={3000}
                    />
                    +
                  </div>
                  <p className="text-sm lg:text-lg leading-none lg:leading-none">
                    Satisfied <br /> Customers
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://nwfa.org/"
              target="_blank"
              rel="noreferrer"
              className="w-20 lg:w-32 mb-10 -mt-5 self-center"
            >
              <NextImage src={NWFAImage} />
            </a>
            <WorksModal slides={workSlides.all}>
              <div className="flex justify-center relative">
                <div
                  ref={sliderRef}
                  className="keen-slider overflow-hidden relative max-w-sm sm:max-w-md lg:max-w-none"
                >
                  <svg
                    className="absolute right-0 top-0 -translate-y-2/4 z-10 animate-wiggle "
                    width="71"
                    height="75"
                    viewBox="0 0 71 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.1743 44.2893L17.0264 21.282C16.5514 20.2052 16.5237 18.9838 16.9493 17.8866C17.3749 16.7893 18.2189 15.9061 19.2957 15.4311C20.3725 14.9562 21.5939 14.9284 22.6911 15.354C23.7884 15.7796 24.6717 16.6236 25.1466 17.7004L34.1006 38.0009M33.5037 36.6476L31.1159 31.2341C30.641 30.1573 30.6132 28.9359 31.0388 27.8387C31.4644 26.7414 32.3084 25.8582 33.3852 25.3832C34.462 24.9083 35.6834 24.8805 36.7807 25.3061C37.8779 25.7317 38.7612 26.5757 39.2361 27.6525L42.2208 34.4193M40.43 30.3592C39.9551 29.2824 39.9273 28.0611 40.3529 26.9638C40.7785 25.8665 41.6225 24.9833 42.6993 24.5083C43.7761 24.0334 44.9975 24.0057 46.0948 24.4312C47.192 24.8568 48.0753 25.7008 48.5502 26.7776L50.341 30.8377"
                      stroke="white"
                    />
                    <path
                      d="M49.7441 29.4845C49.2691 28.4077 49.2414 27.1863 49.667 26.089C50.0926 24.9918 50.9366 24.1085 52.0134 23.6336C53.0902 23.1586 54.3116 23.1309 55.4088 23.5565C56.5061 23.982 57.3894 24.8261 57.8643 25.9029L63.2367 38.0832C65.1365 42.3904 65.2475 47.2759 63.5451 51.6649C61.8428 56.054 58.4667 59.587 54.1595 61.4868L48.746 63.8745L49.309 63.6262C46.6196 64.813 43.6776 65.3132 40.7471 65.082C37.8166 64.8508 34.9894 63.8955 32.5194 62.3017L31.6307 61.7237C30.2144 60.7996 24.9714 56.9397 15.8979 50.1425C14.973 49.4497 14.3548 48.4233 14.175 47.2817C13.9951 46.1401 14.2677 44.9733 14.9347 44.0296C15.6451 43.0239 16.6711 42.2844 17.8497 41.9286C19.0284 41.5727 20.2922 41.6209 21.4404 42.0655L27.1743 44.2894M7.1154 20.8036L3.21479 19.2908M9.18413 32.8244L6.47739 34.0183M31.476 10.0588L32.9889 6.15822M37.7644 16.9852L40.4711 15.7913"
                      stroke="white"
                    />
                  </svg>
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
              </div>
            </WorksModal>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default LandingPage;

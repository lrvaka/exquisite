import useIsomorphicLayoutEffect from "../components/hooks/useIsomorphicLayoutEffect";
import { IoOpen } from "react-icons/io5";
import WorksModal from "../components/ui/Modal";
import "keen-slider/keen-slider.min.css";
import NextImage from "next/image";
import ContactMessage from "../components/ui/ContactMessage";
import MainWrapper from "../components/ui/Main";
import Footer from "../components/ui/Footer";
import gsap from "gsap";
import useArrayRef from "../components/hooks/useArrayRef";
import GridItem from "../components/WorksComponents/GridItem";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gridImage1 from "../public/images/works/carolina/8.jpg";
import gridImage2 from "../public/images/works/carolina/3.jpg";
import gridImage3 from "../public/images/works/carolina/1.jpg";
import gridImage4 from "../public/images/works/carolina/4.jpg";
import gridImage5 from "../public/images/works/orchard/3.jpg";
import gridImage6 from "../public/images/works/orchard/2.jpg";
import gridImage7 from "../public/images/works/orchard/7.jpg";
import gridImage8 from "../public/images/works/orchard/6.jpg";
import gridImage9 from "../public/images/works/orchard/9.jpg";
import gridImage10 from "../public/images/works/hearst/1.jpg";
import gridImage11 from "../public/images/works/hearst/2.jpg";
import gridImage12 from "../public/images/works/hearst/3.jpg";
import gridImage13 from "../public/images/works/hearst/4.jpg";
import gridImage14 from "../public/images/works/hearst/5.jpg";
import gridImage15 from "../public/images/works/gucci/1.jpg";
import gridImage16 from "../public/images/works/gucci/2.jpg";
import gridImage17 from "../public/images/works/gucci/3.jpg";
import gridImage18 from "../public/images/works/gucci/4.jpg";
import gridImage20 from "../public/images/works/gucci/6.jpg";
import gridImage21 from "../public/images/works/gucci/7.jpg";
import peloton1 from "../public/images/works/peloton/1.jpeg";
import peloton2 from "../public/images/works/peloton/2.jpeg";
import peloton7 from "../public/images/works/peloton/7.jpg";
import peloton10 from "../public/images/works/peloton/10.jpg";
import Marquee from "react-fast-marquee";
import workSlides from "../lib/work-slides";

const meta = {
  title: "Portfolio - Exquisite Wood Floors",
  description: "Display of selected works we've completed over the years.",
  url: "https://www.exquisitewoodfloors.com/portfolio",
  twitter: "https://twitter.com/ewfny",
  imageUrl: "https://www.exquisitewoodfloors.com/images/twitter.jpeg",
  imageAlt: "Exquisite Wood Floors",
};

const MarqueeText = ({ children, ...props }) => (
  <span
    aria-hidden="true"
    className="font-black font-heading text-theme-400 text-[4rem] sm:text-[5rem] md:text-[6rem] xl:text-[7rem] 2xl:text-[12rem] opacity-25 mr-32 sm:mr-60 overflow-y-hidden"
  >
    {children}
  </span>
);

const MarqueeSection = ({ text, ...props }) => (
  <Marquee gradient={false}>
    <div className="flex" {...props}>
      <MarqueeText>{text}</MarqueeText>
      <MarqueeText>{text}</MarqueeText>
      <MarqueeText>{text}</MarqueeText>
      <MarqueeText>{text}</MarqueeText>
    </div>
  </Marquee>
);

const WorksHeading = () => (
  <div className="mx-auto relative max-w-screen-xl px-4">
    <h1 className="pb-10 text-theme-500 text-3xl md:text-5xl lg:text-8xl font-extrabold font-heading">
      Featured Works
    </h1>
    <div className="pb-20">
      <div className="flex flex-col max-w-full md:max-w-[50%]">
        <p className="text-md md:text-xl text-theme-black font-normal">
          Below is a display of selected works from over the years. From
          commercial to residential, installation to restoration, we&apos;ve had
          the pleasure of working on various projects from a wide array of
          clientele.
        </p>
      </div>
    </div>
    <div className="absolute top-0 right-0 h-[600px] w-[600px]">
      <NextImage
        alt="ewf emblem"
        src="/images/stamp.png"
        layout="fill"
        objectFit="cover"
      />
    </div>
  </div>
);

const Works = () => {
  const [gridItems, setGridItems] = useArrayRef();
  useIsomorphicLayoutEffect(() => {
    if (!gridItems.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    gridItems.current.forEach((e, i) => {
      gsap.fromTo(
        e,
        {
          opacity: 0.1,
          scale: 0.75,
          clipPath: "inset(100% 0 0 0)",
        },
        {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 2,
          scrollTrigger: e,
        }
      );
    }, []);
  });

  return (
    <MainWrapper styling="pt-[20vh]" heading={meta}>
      <WorksHeading />

      <WorksModal slides={workSlides.carolina}>
        <div className="grid grid-cols-[repeat(10,1fr)] grid-rows-[repeat(10,1fr)] max-w-screen-xl relative mx-auto min-h-[500px] sm:min-h-[800px] my-40">
          <h2 className="font-heading absolute z-[2] mix-blend-difference text-6xl sm:text-9xl text-theme-10 font-black left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            Carolina <br />
            Herrera
          </h2>
          <GridItem
            ref={setGridItems}
            alt={`beautiful carolina herrera job flooring 1`}
            data-speed="1.1"
            className="row-[1/10] col-[1/6]"
            src={gridImage1}
          />

          <GridItem
            ref={setGridItems}
            alt={`beautiful carolina herrera job flooring 2`}
            data-speed="1.2"
            className="row-[1/11] col-[6/11]"
            src={gridImage3}
          />

          <GridItem
            ref={setGridItems}
            alt={`beautiful carolina herrera job flooring 3`}
            data-speed="1.3"
            className="row-[5/10] col-[3/8]"
            src={gridImage4}
          />

          <GridItem
            ref={setGridItems}
            alt={`beautiful carolina herrera job flooring 4`}
            className="row-[6/10] col-[1/5]"
            src={gridImage2}
          />
        </div>
      </WorksModal>

      <MarqueeSection text="Quality" />

      <WorksModal slides={workSlides.peloton}>
        <div className="grid grid-cols-[repeat(10,1fr)] grid-rows-[repeat(10,1fr)] max-w-screen-xl relative mx-auto min-h-[500px] sm:min-h-[800px] my-40">
          <h2 className="font-heading absolute z-[2] mix-blend-difference text-6xl sm:text-9xl text-theme-10 font-black left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            Peloton HQ
          </h2>
          <GridItem
            alt={`beautiful peloton flooring 1`}
            ref={setGridItems}
            data-speed="1.1"
            className="row-[1/10] col-[1/5]"
            src={peloton1}
          />

          <GridItem
            alt={`beautiful peloton flooring 2`}
            ref={setGridItems}
            data-speed="1.3"
            className="row-[5/10] col-[5/11]"
            src={peloton2}
          />

          <GridItem
            alt={`beautiful peloton flooring 3`}
            ref={setGridItems}
            data-speed="1.3"
            className="row-[1/6] col-[5/11]"
            src={peloton7}
          />

          <GridItem
            alt={`beautiful peloton flooring 4`}
            ref={setGridItems}
            data-speed="1.3"
            className="row-[1/4] col-[1/4]"
            src={peloton10}
          />
        </div>
      </WorksModal>

      <MarqueeSection text="Reliable" />

      <WorksModal slides={workSlides.orchard}>
        <div className="grid grid-cols-[repeat(10,1fr)] grid-rows-[repeat(10,1fr)] max-w-screen-xl relative mx-auto min-h-[500px] sm:min-h-[800px] my-40">
          <h2 className="font-heading absolute z-[2] mix-blend-difference text-6xl sm:text-9xl text-theme-10 font-black left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            196 <br />
            Orchard
          </h2>
          <GridItem
            alt={`beautiful 196 Orchard job flooring 1`}
            ref={setGridItems}
            data-speed="1.2"
            className="row-[1/6] col-[1/5]"
            src={gridImage8}
          />

          <GridItem
            alt={`beautiful 196 Orchard job flooring 2`}
            ref={setGridItems}
            data-speed="1.1"
            className="row-[3/11] col-[4/8]"
            src={gridImage6}
          />

          <GridItem
            alt={`beautiful 196 Orchard job flooring 3`}
            ref={setGridItems}
            className="row-[1/5] col-[8/11]"
            src={gridImage9}
          />
          <GridItem
            alt={`beautiful 196 Orchard job flooring 4`}
            ref={setGridItems}
            className="row-[6/11] col-[8/11]"
            src={gridImage5}
          />

          <GridItem
            alt={`beautiful 196 Orchard job flooring 5`}
            ref={setGridItems}
            data-speed="1.3"
            className="row-[6/10] col-[1/5]"
            src={gridImage7}
          />
        </div>
      </WorksModal>

      <MarqueeSection text="Craftsmanship" />

      <WorksModal slides={workSlides.hearst}>
        <div className="grid grid-cols-[repeat(10,1fr)] grid-rows-[repeat(10,1fr)] max-w-screen-xl relative mx-auto min-h-[500px] sm:min-h-[800px] my-40">
          <h2 className="font-heading absolute z-[2] mix-blend-difference text-6xl sm:text-9xl text-theme-10 font-black left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            Gabriela <br /> Hearst
          </h2>
          <GridItem
            ref={setGridItems}
            alt={`beautiful Gabriela Hearst job flooring 1`}
            data-speed="1.1"
            className="row-[1/10] col-[1/6]"
            src={gridImage10}
          />

          <GridItem
            ref={setGridItems}
            alt={`beautiful Gabriela Hearst job flooring 2`}
            className="row-[1/11] col-[6/11]"
            src={gridImage11}
          />

          <GridItem
            alt={`beautiful Gabriela Hearst job flooring 3`}
            data-speed="1.3"
            className="row-[1/4] col-[8/11]"
            src={gridImage12}
          />

          <GridItem
            ref={setGridItems}
            alt={`beautiful Gabriela Hearst job flooring 4`}
            className="row-[8/11] col-[2/4]"
            src={gridImage13}
          />
          <GridItem
            ref={setGridItems}
            alt={`beautiful Gabriela Hearst job flooring 5`}
            data-speed="1.2"
            className="row-[1/4] col-[3/7]"
            src={gridImage14}
          />
        </div>
      </WorksModal>

      <MarqueeSection text="Pristine" />

      <WorksModal slides={workSlides.gucci}>
        <div className="grid grid-cols-[repeat(10,1fr)] grid-rows-[repeat(10,1fr)] max-w-screen-xl relative mx-auto min-h-[500px] sm:min-h-[800px] my-40">
          <h2 className="font-heading absolute z-[2] mix-blend-difference text-6xl sm:text-9xl text-theme-10 font-black left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            Gucci
          </h2>

          <GridItem
            ref={setGridItems}
            alt={`beautiful gucci job flooring 1`}
            data-speed="1.3"
            className="row-[1/7] col-[6/11]"
            src={gridImage17}
          />

          <GridItem
            ref={setGridItems}
            alt={`beautiful gucci job flooring 2`}
            data-speed="0.9"
            className="row-[4/11] col-[2/7]"
            src={gridImage18}
          />

          <GridItem
            ref={setGridItems}
            alt={`beautiful gucci job flooring 3`}
            className="row-[5/11] col-[8/11]"
            src={gridImage20}
          />
          <GridItem
            ref={setGridItems}
            alt={`beautiful gucci job flooring 4`}
            className="row-[7/10] col-[1/3]"
            src={gridImage21}
          />
          <GridItem
            ref={setGridItems}
            alt={`beautiful gucci job flooring 5`}
            data-speed="1.2"
            className="row-[9/11] col-[5/8]"
            src={gridImage16}
          />
          <GridItem
            ref={setGridItems}
            alt={`beautiful gucci job flooring 6`}
            data-speed="1.1"
            className="row-[2/5] col-[1/5]"
            src={gridImage15}
          />
        </div>
      </WorksModal>

      <MarqueeSection text="Exquisite" mb="16" />

      <div className="flex justify-center items-center relative max-w-screen-xl mx-auto mb-20 min-h-[150px]">
        <WorksModal slides={workSlides.all}>
          <button className="relative text-lg md:text-xl flex items-center max-w-max py-2 px-4 bg-theme-500 text-theme-100 border-solid border-theme-400 border-[1px]">
            More Works
            <IoOpen className="ml-2" />
          </button>
        </WorksModal>
      </div>

      <ContactMessage bgColor="bg-theme-500" headingColor="text-theme-100" textColor="text-theme-10" fillColor="fill-theme-100"/>


      <Footer bgColor="bg-theme-500" textColor="text-theme-100" />
    </MainWrapper>
  );
};

export default Works;

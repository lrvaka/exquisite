import SectionHeading from "../ui/SectionHeading";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import GsapContext from "../../store/gsap-context";
import { useContext } from "react";

const ServicesItem = ({ heading, children }) => {
  const { smoother } = useContext(GsapContext);
  return (
    <div className="flex flex-grow text-center flex-col bg-theme-400 gap-4 p-10">
      <div className="flex flex-grow max-w-[500px] mx-auto flex-col">
        <h3 className="pb-2 text-theme-200 text-2xl md:text-3xl 2xl:text-5xl font-heading font-bold">
          {heading}
        </h3>
        <p className="self-center justify-self-center text-theme-10 text-md md:text-lg">
          {children}
        </p>
      </div>
      <button
        className="flex text-left font-semibold items-center justify-center text-theme-200 gap-2"
        onClick={() => {
          smoother.scrollTo("#contact", true, "center center");
        }}
      >
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
      </button>
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
          Got A Wood Flooring Problem? <br />
          We Have All The Solutions
        </SectionHeading>

        <p className="text-md sm:text-lg max-w-md" ref={subHeadRef}>
          We cover everything that has to do with wood flooring, here are some
          of the services we offer.
        </p>
      </div>

      <div
        className="flex justify-between self-center min-w-full flex-col xl:flex-row gap-4 px-0 sm:px-6 md:px-12 "
        ref={containerRef}
      >
        <ServicesItem heading="Installation">
          We offer professional installation services for all types of wood
          flooring. No matter what your style or budget is, we can help you find
          the perfect flooring solution for your project.
        </ServicesItem>

        <ServicesItem heading="Refinishing">
          After some wear and tear, a refinishing on your wood floors is needed.
          We specialize in making your wood floors look brand new, and our work
          is guaranteed to impress.
        </ServicesItem>

        <ServicesItem heading="Repair">
          There&apos;s nothing like seeing a beautiful, well-maintained wood
          floor. But what happens when something goes wrong and your wood floor
          is damaged? That&apos;s where we come in.
        </ServicesItem>

        <ServicesItem heading="Maintenance">
          Sometimes we need our floors to look brand new at all times. We offer
          constant upkeep and maintenance to your wood floors, making sure they
          stay at peak quality year round.
        </ServicesItem>
      </div>
    </div>
  );
};

export default ServicesSection;

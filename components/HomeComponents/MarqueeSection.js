import Marquee from "react-fast-marquee";

const MarqueeSection = () => (
  <Marquee gradient={false}>
    <h3
      aria-hidden="true"
      className="text-theme-300 font-heading font-black text-[5rem] md:text-[10rem] mr-[3rem] opacity-25 overflow-y-hidden"
    >
      EXQUISITE WOOD FLOORS
    </h3>
  </Marquee>
);

export default MarqueeSection;

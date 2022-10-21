import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";

const SectionHeading = ({ children, className, ...props }) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const split = new SplitText(ref.current, {
      type: "chars, words",
    });

    split.chars.forEach((char, i) => {
      gsap.from(char, {
        y: 10,
        opacity: 0,
        scale: 1.25,
        skewX: 10,
        duration: 1,
        delay: i * 0.01,
        ease: "a1",
        scrollTrigger: ref.current,
      });
    });
  }, []);

  return (
    <h2 className={"text-2xl md:text-4xl font-bold font-heading " + className}>
      {children}
    </h2>
  );
};

export default SectionHeading;

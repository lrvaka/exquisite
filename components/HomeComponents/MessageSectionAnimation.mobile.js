import { useRef, useEffect } from "react";
import gsap from "gsap";
import planks from "../../lib/planks";
import NextImage from "next/image";
import useArrayRef from "../hooks/useArrayRef";

const MessageSectionAnimationMobile = ({ children, ...props }) => {
  const containerRef = useRef();
  const [leftPlankRefs, setLeftPlankRefs] = useArrayRef();
  const [rightPlankRefs, setRightPlankRefs] = useArrayRef();
  let plankType;

  useEffect(() => {
    let leftAni;
    let rightAni;

    gsap.set(leftPlankRefs.current, {
      autoAlpha: 1,
      x: window.innerWidth * -1,
    });
    gsap.set(rightPlankRefs.current, { autoAlpha: 1, x: window.innerWidth });

    leftPlankRefs.current.forEach((plank, i) => {
      leftAni = gsap.to(plank, {
        x: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: plank,
          scrub: true,
          end: "bottom center",
          onLeave: (self) => self.kill(false, true),
        },
      });
    });

    rightPlankRefs.current.forEach((plank, i) => {
      rightAni = gsap.to(plank, {
        x: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: plank,
          scrub: true,
          end: "bottom center",
          onLeave: (self) => self.kill(false, true),
        },
      });
    });

    return () => {
      leftAni.kill();
      rightAni.kill();
    };
  }, [leftPlankRefs, rightPlankRefs]);

  return (
    <div
      className="flex relative justify-center flex-col w-screen items-center"
      ref={containerRef}
    >
      {planks.mobile.map((e, i) => (
        <div className="flex backdrop:relative flex-row z-[1]" key={i}>
          {e.map((element, index) => {
            if (element.ref === "setRightPlankRefs") {
              plankType = setRightPlankRefs;
            }
            if (element.ref === "setLeftPlankRefs") {
              plankType = setLeftPlankRefs;
            }
            return (
              <div
                className="flex invisible relative"
                key={index}
                ref={plankType}
              >
                <NextImage
                  alt={`The EWF mantra plank ${i}-${index}`}
                  placeholder="blur"
                  src={element.src}
                  priority
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MessageSectionAnimationMobile;

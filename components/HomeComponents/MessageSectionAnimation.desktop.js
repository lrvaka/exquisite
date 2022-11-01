import { useRef, useEffect } from "react";
import gsap from "gsap";
import planks from "../../lib/planks";
import NextImage from "next/image";
import useArrayRef from "../hooks/useArrayRef";

const MessageSectionAnimationDesktop = ({ children, ...props }) => {
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

    leftAni = gsap.to(leftPlankRefs.current, {
      x: 0,
      ease: "expo.out",
      duration: 2,
      stagger: { from: "random", amount: 0.5 },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center-=25% bottom",
      },
    });

    rightAni = gsap.to(rightPlankRefs.current, {
      x: 0,
      ease: "expo.out",
      duration: 2,
      stagger: { from: "random", amount: 0.5 },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center-=25% bottom",
      },
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
      {planks.desktop.map((e, i) => (
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

export default MessageSectionAnimationDesktop;

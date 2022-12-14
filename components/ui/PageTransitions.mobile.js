import { useRef, useEffect } from "react";
import gsap from "gsap";
import transitionPlanks from "../../lib/transition-planks";
import useArrayRef from "../hooks/useArrayRef";

const PageTransitionsMobile = ({ addAnimation, reverse }) => {
  const tl = useRef();
  const tl1 = useRef();
  const transitionRef = useRef();
  const [leftPlankRefs, setLeftPlankRefs] = useArrayRef();
  const [rightPlankRefs, setRightPlankRefs] = useArrayRef();

  let plankType;

  useEffect(() => {
    if (!transitionRef.current) {
      return;
    }

    if (reverse) {
      tl.current = gsap
        .fromTo(
          leftPlankRefs.current,
          { x: window.innerWidth * -1, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            ease: "power4.out",
            stagger: {
              ease: "sine",
              amount: 1,
              from: "random",
            },
          }
        )
        .reverse();

      tl1.current = gsap
        .fromTo(
          rightPlankRefs.current,
          { x: window.innerWidth, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            ease: "power4.out",
            stagger: {
              ease: "sine",
              amount: 1,
              from: "random",
            },
          }
        )
        .reverse();
    } else {
      tl.current = gsap.fromTo(
        leftPlankRefs.current,
        { x: window.innerWidth * -1, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          ease: "power4.out",
          stagger: {
            ease: "sine",
            amount: 0.5,
            from: "random",
          },
        }
      );

      tl1.current = gsap.fromTo(
        rightPlankRefs.current,
        { x: window.innerWidth, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          ease: "power4.out",
          stagger: {
            ease: "sine",
            amount: 0.5,
            from: "random",
          },
        }
      );
    }

    addAnimation(tl.current, tl1.current);

    return () => {
      tl.current.kill();
      tl1.current.kill();
    };
  }, []);

  return (
    <>
      <div
        className="flex flex-col justify-center pointer-events-none z-20 w-full h-screen top-0 left-0 fixed flex-1 flex-direction: column"
        ref={transitionRef}
      >
        {transitionPlanks.mobile.map((e, i) => (
          <div
            className="flex items-stretch relative flex-row justify-center z-[1] flex-1"
            key={i}
          >
            {e.map((element, index) => {
              if (element.ref === "setRightPlankRefs") {
                plankType = setRightPlankRefs;
              }
              if (element.ref === "setLeftPlankRefs") {
                plankType = setLeftPlankRefs;
              }

              return (
                <div
                  className="flex relative h-auto items-stretch bg-[#705d56] border-[1px] border-solid border-[#a1938e]"
                  key={index}
                  ref={plankType}
                >
                  <div
                    style={{
                      minHeight: `${element.h}px`,
                      minWidth: `${element.w}px`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default PageTransitionsMobile;

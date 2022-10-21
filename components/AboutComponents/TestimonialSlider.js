import React, { useState } from "react";
import testimonials from "../../lib/testimonials";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider relative max-w-[90vw]">
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </>
        )}
        {testimonials.map((e, i) => (
          <div className="keen-slider__slide justify-center flex-col " key={i}>
            <div className="max-w-[850px] flex-col justify-center px-8 mx-auto ">
              <blockquote className="text-theme-10 text-sm md:text-xl max-w-prose">
                {e.test}
              </blockquote>
              <p className="text-sm md:text-xl text-theme-100 italic text-right">
                {e.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

function Arrow(props) {
  return (
    <>
      {props.left && (
        <div className="w-[20px] absolute top-1/2 -translate-y-1/2 cursor-pointer z-[2]">
          <svg
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path
              fill="white"
              d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
            />
          </svg>
        </div>
      )}
      {!props.left && (
        <div className="w-[20px] absolute top-1/2 -translate-y-1/2 left-[calc(100%-20px)] cursor-pointer z-[2]">
          <svg
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </div>
      )}
    </>
  );
}

export default TestimonialSlider;

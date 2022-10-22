import { Dialog } from "@headlessui/react";
import { useKeenSlider } from "keen-slider/react";
import NextImage from "next/image";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";

function PortfolioModal({ slides, children }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      <Dialog
        className="p-1 pb-3 md:p-5 w-[98vw] h-[98vh] md:h-[90vh] md:w-[90vw] 2xl:h-[80vh] 2xl:w-[80vw] z-10 fixed bg-theme-10 rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        as="div"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Panel className="h-full w-full flex justify-center flex-col items-center relative">
          <div
            ref={sliderRef}
            className="keen-slider min-w-full max-w-[1100px] min-h-[90%]"
          >
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
            {slides.map((e, i) => (
              <div
                className="flex keen-slider__slide justify-center"
                key={`${e} + ${i}`}
              >
                <NextImage
                  priority="true"
                  placeholder="blur"
                  src={e}
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            ))}
          </div>
          <button
            className="border-solid border-theme-black border-[1px] rounded-md p-2 mt-2 mr-2"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </Dialog.Panel>
      </Dialog>

      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        {children}
      </div>
    </>
  );
}

function Arrow(props) {
  return (
    <>
      {props.left && (
        <div className="w-[20px] 2xl:w-[30px] absolute top-1/2 -translate-y-1/2 cursor-pointer z-10">
          <svg
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-theme-500 stroke-theme-100 stroke-3"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </div>
      )}
      {!props.left && (
        <div className="w-[20px] 2xl:w-[30px] absolute top-1/2 -translate-y-1/2 cursor-pointer z-10 left-[calc(100%-20px)] 2xl:left-[calc(100%-30px)]">
          <svg
            className="fill-theme-500 stroke-theme-100 stroke-3"
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </div>
      )}
    </>
  );
}

export default PortfolioModal;

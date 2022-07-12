import React, { useState } from "react"
import testimonials from "../../lib/testimonials"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Box, Flex, Text } from "@chakra-ui/react"

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <Flex ref={sliderRef} className="keen-slider" pos="relative" maxW="90vw">
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
          <Flex
            justifyContent="center"
            flexDir="column"
            key={i}
            className="keen-slider__slide"
          >
            <Flex
              maxW="850px"
              flexDir="column"
              justifyContent="center"
              px="8"
              m="0 auto"
            >
              <Text
                as="blockquote"
                color="white"
                fontSize={{ base: "sm", md: "xl" }}
                _css={{ hangingPunctuation: "first last" }}
              >
                {e.test}
              </Text>
              <Text
                fontSize={{ base: "sm", md: "xl" }}
                color="brand.100"
                fontStyle="italic"
                textAlign="right"
              >
                {e.author}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  )
}

function Arrow(props) {
  return (
    <>
      {props.left && (
        <Box
          w="20px"
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          cursor="pointer"
          zIndex="2"
        >
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
        </Box>
      )}
      {!props.left && (
        <Box
          w="20px"
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          cursor="pointer"
          left="calc(100% - 20px)"
          zIndex="2"
        >
          <svg
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </Box>
      )}
    </>
  )
}

export default TestimonialSlider

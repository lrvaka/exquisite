import { Flex, Box, Heading, chakra } from "@chakra-ui/react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useRef, useEffect, useState } from "react"
import { motion, isValidMotionProp } from "framer-motion"
import { SectionHeading, SectionParagraph } from "./SectionText"
import slides from "./slides"
import NextImage from "next/image"

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
})

const animation = { duration: 22000, easing: (t) => t }

const SlideShowSection = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    created(s) {
      s.moveToIdx(11, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 11, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 11, true, animation)
    },
    slides: {
      perView: 2.5,
      spacing: 15,
    },
  })
  return (
    <Box bgColor="brand.500" pos="relative">
      <Box ref={sliderRef} className="keen-slider">
        {slides.map((slide) => (
          <Box className="keen-slider__slide" key={slide} h="15rem">
            <NextImage layout="fill" objectFit="cover" src={slide} />
          </Box>
        ))}
      </Box>

      <Box px="4" py="20">
        <SectionHeading pb="10">
          Fitting floors for residential, commercial, development, hospitality &
          domestic projects
        </SectionHeading>
        <Flex flexDir="column" maxW="80vw">
          <SectionParagraph pb="9">
            We are proud of the work we do, and our clients are more than
            delighted. We owe our success to our deep knowledge base of wood
            selection, the skills of our enthusiastic team, and the specialized
            technologies and techniques we have at our disposal.
          </SectionParagraph>
          <SectionParagraph>
            For more information, please do not hesitate to contact us.
          </SectionParagraph>
        </Flex>
      </Box>
    </Box>
  )
}

export default SlideShowSection

import { Flex, Box, Heading, chakra } from "@chakra-ui/react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useRef, useEffect, useState } from "react"
import { motion, isValidMotionProp } from "framer-motion"
import { SectionHeading, SectionParagraph } from "./SectionText"
import slides from "./slides"
import NextImage from "next/image"
import { AnimatedHeading } from "./SectionText"
import ChakraBox from "./ChakraBox"

const variants = {
  initial: {
    y: 25,
    scale: 0.99,
    opacity: 0,
    clipPath: "inset(100% 0 0 0)",
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      clipPath: { type: "spring", damping: 50 },
      duration: 1,
    },
  },
}

const animation = { duration: 22000, easing: (t) => t }

const SlideShowSection = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
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
      <ChakraBox
        variants={variants}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate"
        overflow="hidden"
        pos="relative"
        ref={sliderRef}
        className="keen-slider"
      >
        {slides.map((slide) => (
          <Box className="keen-slider__slide" key={slide} h="15rem">
            <NextImage layout="fill" objectFit="cover" src={slide} />
          </Box>
        ))}
      </ChakraBox>

      <Box px="4" py="20">
        <Box as="h2" pb="10">
          <AnimatedHeading custom={0} title="Fitting&nbsp;floors&nbsp;for" />
          <AnimatedHeading custom={0} title="residential,&nbsp;commercial," />
          <AnimatedHeading custom={0} title="development,&nbsp;hospitality" />
          <AnimatedHeading custom={0} title="&&nbsp;domestic&nbsp;projects" />
        </Box>
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

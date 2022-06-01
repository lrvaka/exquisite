import { Flex, Box, Heading, chakra, Container } from "@chakra-ui/react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useRef, useEffect, useState, useContext } from "react"
import { motion, isValidMotionProp } from "framer-motion"
import { SectionHeading, SectionParagraph } from "./SectionText"
import slides from "./slides"
import NextImage from "next/image"
import { AnimatedHeading } from "./SectionText"
import ChakraBox from "./ChakraBox"
import ImageModal from "./SlideModal"
import ScrollerContext from "../store/gsap-context"

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

const animation = { duration: 20000, easing: (t) => t }

const SlideShowSection = (props) => {
  const { smoother } = useContext(ScrollerContext)

  useEffect(() => {
    if (smoother) {
      console.log(smoother)
      // smoother.onUpdate((self) => console.log("velocity:", self.getVelocity()))
    }
  }, [smoother])

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    mode: "free",
    created(s) {
      s.moveToIdx(10, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 10, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 10, true, animation)
    },
    slides: {
      perView: 2.5,
      spacing: 15,
    },
  })
  return (
    <Box bgColor="brand.500">
      <Container maxW="container.xl" p="0">
        <Flex
          flexDir={["column", "column", "column", "row-reverse"]}
          pos="relative"
        >
          <ChakraBox
            variants={variants}
            viewport={{ once: true }}
            display={["block", "block", "block", "none"]}
            initial="initial"
            whileInView="animate"
            overflow="hidden"
            pos="relative"
            ref={sliderRef}
            className="keen-slider"
          >
            {slides.map((e) => (
              <Box className="keen-slider__slide" key={e.url} h="15rem">
                <ImageModal title={e.url}>
                  <NextImage layout="fill" objectFit="cover" src={e.url} />\
                </ImageModal>
              </Box>
            ))}
          </ChakraBox>

          <Box px="4" py="20">
            <Box as="h2" pb="10">
              <AnimatedHeading custom={0} title="Team&nbsp;of&nbsp;seasoned" />
              <AnimatedHeading custom={0} title="flooring&nbsp;expertise" />
            </Box>
            <Flex
              pr={["none", "none", "none", "50px"]}
              flexDir="column"
              maxW={["80vw", "80vw", "80vw"]}
            >
              {/* <SectionParagraph pb="9">
                We are proud of the work we do, and our clients are more than
                delighted. We owe our success to our deep knowledge base of wood
                selection, the skills of our enthusiastic team, and the
                specialized technologies and techniques we have at our disposal.
              </SectionParagraph> */}
              <SectionParagraph pb="9">
                Every member of the Exquisite Wood Floors team is a wooden floor
                expert with extensive knowledge of their sector and years of
                flooring experience, delivering projects across all markets to
                the highest of standards, ensuring unique, durable floors of
                quality.
              </SectionParagraph>
              <SectionParagraph>
                Contact us below to begin building with us.
              </SectionParagraph>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default SlideShowSection

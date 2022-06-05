import { useContext } from "react"
import GsapContext from "../store/gsap-context"
import useIsomorphicLayoutEffect from "../components/hooks/useIsomorphicLayoutEffect"
import { Box, Container, Heading, Flex, Text, Grid } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import ChakraBox from "../components/utils/ChakraBox"
import workSlides from "../components/work-slides"
import NextImage from "next/image"
import ContactSection from "../components/ContactSection"

const header = {
  animate: (i) => ({
    transition: {
      delayChildren: i * 2,
      staggerChildren: 0.05,
    },
  }),
}

const letterAni = {
  initial: {
    y: -20,
    opacity: 0,
    scale: 1.25,
    skewX: 10,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    skewX: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

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

const animation = { duration: 70000, easing: (t) => t }

const AnimatedLetters = ({ title, custom = 0, ...props }) => (
  <Box
    as={motion.span}
    display="flex"
    custom={custom}
    variants={header}
    initial="initial"
    animate="animate"
    pb="10"
    {...props}
  >
    {[...title].map((letter, i) => (
      <Heading
        key={i}
        as={motion.span}
        color="brand.600"
        fontSize={["2rem", "3rem", "4rem", "5rem", "6rem"]}
        fontWeight="900"
        lineHeight="100%"
        variants={letterAni}
      >
        {letter}
      </Heading>
    ))}
  </Box>
)

const Works = () => {
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
      perView: 3,
      spacing: 15,
    },
  })
  const [sliderRef1] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    mode: "free",
    created(s) {
      s.moveToIdx(-10, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs - 10, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs - 10, true, animation)
    },
    slides: {
      perView: 3,
      spacing: 15,
    },
  })
  const [sliderRef2] = useKeenSlider({
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
      perView: 3,
      spacing: 15,
    },
  })
  const [sliderRef3] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    mode: "free",
    created(s) {
      s.moveToIdx(-10, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs - 10, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs - 10, true, animation)
    },
    slides: {
      perView: 3,
      spacing: 15,
    },
  })
  const [sliderRef4] = useKeenSlider({
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
      perView: 3,
      spacing: 15,
    },
  })
  const [sliderRef5] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    mode: "free",
    created(s) {
      s.moveToIdx(-10, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs - 10, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs - 10, true, animation)
    },
    slides: {
      perView: 3,
      spacing: 15,
    },
  })
  const [sliderRef6] = useKeenSlider({
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
      perView: 3,
      spacing: 15,
    },
  })

  return (
    <Box as="main" pt="20vh" bg="brand.200">
      <Container maxW="container.xl" px="4">
        <AnimatedLetters custom={1} title="Featured&nbsp;Works" />
        <Grid templateColumns={["none", "none", "repeat(2, 1fr)"]}>
          <Text
            fontSize={["1rem", "1rem", "1rem", "1.25rem"]}
            color="black"
            fontWeight="400"
            lineHeight="normal"
          >
            Here is a few of our selected works from over the years, from
            commercial to residential.
          </Text>
        </Grid>
      </Container>
      <Flex pt="24" flexDir="column" gap="24">
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
          {workSlides.carolina.map((e) => (
            <Box className="keen-slider__slide" key={e} h="15rem">
              <NextImage
                placeholder="blur"
                blurDataURL
                layout="fill"
                objectFit="cover"
                src={e}
              />
            </Box>
          ))}
        </ChakraBox>
        <ChakraBox
          variants={variants}
          viewport={{ once: true }}
          display={["block", "block", "block", "none"]}
          initial="initial"
          whileInView="animate"
          overflow="hidden"
          pos="relative"
          ref={sliderRef1}
          className="keen-slider"
        >
          {workSlides.grafbro.map((e) => (
            <Box className="keen-slider__slide" key={e} h="15rem">
              <NextImage
                placeholder="blur"
                blurDataURL
                layout="fill"
                objectFit="cover"
                src={e}
              />
            </Box>
          ))}
        </ChakraBox>
        <ChakraBox
          variants={variants}
          viewport={{ once: true }}
          display={["block", "block", "block", "none"]}
          initial="initial"
          whileInView="animate"
          overflow="hidden"
          pos="relative"
          ref={sliderRef2}
          className="keen-slider"
        >
          {workSlides.gucci.map((e) => (
            <Box className="keen-slider__slide" key={e} h="15rem">
              <NextImage
                placeholder="blur"
                blurDataURL
                layout="fill"
                objectFit="cover"
                src={e}
              />
            </Box>
          ))}
        </ChakraBox>
        <ChakraBox
          variants={variants}
          viewport={{ once: true }}
          display={["block", "block", "block", "none"]}
          initial="initial"
          whileInView="animate"
          overflow="hidden"
          pos="relative"
          ref={sliderRef3}
          className="keen-slider"
        >
          {workSlides.hearst.map((e) => (
            <Box className="keen-slider__slide" key={e} h="15rem">
              <NextImage
                placeholder="blur"
                blurDataURL
                layout="fill"
                objectFit="cover"
                src={e}
              />
            </Box>
          ))}
        </ChakraBox>
        <ChakraBox
          variants={variants}
          viewport={{ once: true }}
          display={["block", "block", "block", "none"]}
          initial="initial"
          whileInView="animate"
          overflow="hidden"
          pos="relative"
          ref={sliderRef4}
          className="keen-slider"
        >
          {workSlides.michili.map((e) => (
            <Box className="keen-slider__slide" key={e} h="15rem">
              <NextImage
                placeholder="blur"
                blurDataURL
                layout="fill"
                objectFit="cover"
                src={e}
              />
            </Box>
          ))}
        </ChakraBox>
        <ChakraBox
          variants={variants}
          viewport={{ once: true }}
          display={["block", "block", "block", "none"]}
          initial="initial"
          whileInView="animate"
          overflow="hidden"
          pos="relative"
          ref={sliderRef5}
          className="keen-slider"
        >
          {workSlides.orchard.map((e) => (
            <Box className="keen-slider__slide" key={e} h="15rem">
              <NextImage
                placeholder="blur"
                blurDataURL
                layout="fill"
                objectFit="cover"
                src={e}
              />
            </Box>
          ))}
        </ChakraBox>
        <ChakraBox
          variants={variants}
          viewport={{ once: true }}
          display={["block", "block", "block", "none"]}
          initial="initial"
          whileInView="animate"
          overflow="hidden"
          pos="relative"
          ref={sliderRef6}
          className="keen-slider"
        >
          {workSlides.sezane.map((e) => (
            <Box className="keen-slider__slide" key={e} h="15rem">
              <NextImage
                placeholder="blur"
                blurDataURL
                layout="fill"
                objectFit="cover"
                src={e}
              />
            </Box>
          ))}
        </ChakraBox>
      </Flex>
      <ContactSection />
    </Box>
  )
}

export default Works

import { Box, Heading, Grid, Flex } from "@chakra-ui/react"
import NextImage from "next/image"
import { motion } from "framer-motion"
import ChakraBox from "./ChakraBox"
import Parallax from "./Parallax"
import ParallaxBox from "./ParallaxBox"
import { useRef, useEffect } from "react"
import gsap from "gsap"

const images = {
  initial: { y: 25, scale: 0.75, opacity: 0, clipPath: "inset(100% 0 0 0)" },
  animate: (i) => ({
    y: 0,
    scale: 1,
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      clipPath: { type: "spring", damping: 50 },
      delay: i * 0.5,
      duration: 1,
    },
  }),
}

const header = {
  animate: (i) => ({
    transition: {
      delayChildren: i * 0.25,
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

const AnimatedLetters = ({ title, custom = 0, ...props }) => (
  <Box
    as={motion.span}
    display="flex"
    custom={custom}
    variants={header}
    initial="initial"
    animate="animate"
    {...props}
  >
    {[...title].map((letter, i) => (
      <Heading
        key={i}
        as={motion.span}
        color="brand.100"
        fontSize={["3.5rem", "5rem", "6rem"]}
        fontWeight="900"
        lineHeight="100%"
        variants={letterAni}
      >
        {letter}
      </Heading>
    ))}
  </Box>
)

const HeroTitle = () => (
  <Box
    as="h1"
    top="50%"
    left="50%"
    width="90vw"
    transform="translate(-50%,-50%)"
    textAlign="center"
    pos="absolute"
    zIndex="1"
  >
    <Flex as="span" gap="1rem" justifyContent="center">
      <AnimatedLetters custom={0} title="We" letterSpacing="-2.5px" />
      <AnimatedLetters custom={1} title="make" />
    </Flex>
    <Flex as="span" gap="1rem" justifyContent="center">
      <AnimatedLetters custom={2} title="living" />
      <AnimatedLetters custom={3} title="spaces" />
    </Flex>
    <Flex as="span" gap="1rem" justifyContent="center">
      <AnimatedLetters custom={5} title="Exquisite" />
    </Flex>
  </Box>
)

const HeroSection = () => {
  const el = useRef()
  const q = gsap.utils.selector(el)

  useEffect(() => {
    // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
    gsap.fromTo(
      q("#parallax-box"),
      { clipPath: "inset(100% 0% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 2,
        stagger: 2,
      }
    )
  }, [])

  return (
    <Box pos="relative">
      <HeroTitle />

      <Grid
        ref={el}
        minH="97.5vh"
        templateRows="repeat(15, 1fr)"
        templateColumns="repeat(15, 1fr)"
      >
        <ParallaxBox
          id="parallax-box"
          w="100%"
          h="100%"
          pos="relative"
          gridRow={["4 / 6", "4 / 7"]}
          gridColumn={["2 / 9", "2 / 6"]}
        >
          <NextImage src="/images/hero-2.jpg" layout="fill" objectFit="cover" />
        </ParallaxBox>
        <ParallaxBox
          id="parallax-box"
          w="100%"
          h="100%"
          pos="relative"
          gridRow={["11 / 15", "10 / 15"]}
          gridColumn={["5 / 16", "11 / 16"]}
        >
          <NextImage
            src="/images/hero-1.webp"
            layout="fill"
            objectFit="cover"
          />
        </ParallaxBox>

        {/* <Parallax
        w="100%"
        h="100%"
        pos="relative"
        gridRow={["11 / 15", "10 / 15"]}
        gridColumn={["5 / 16", "11 / 16"]}
        variants={images}
        custom={3}
        initial="initial"
        animate="animate"
        offset={100}
      >
        <NextImage src="/images/hero-1.webp" layout="fill" objectFit="cover" />
      </Parallax>
      <Parallax
        w="100%"
        h="100%"
        pos="relative"
        gridRow={["4 / 6", "4 / 7"]}
        gridColumn={["2 / 9", "2 / 6"]}
        variants={images}
        custom={1}
        initial="initial"
        animate="animate"
        offset={75}
      >
        <NextImage src="/images/hero-2.jpg" layout="fill" objectFit="cover" />
      </Parallax> */}
      </Grid>
    </Box>
  )
}

export default HeroSection

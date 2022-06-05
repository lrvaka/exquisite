import { Box, Heading, Grid, Flex } from "@chakra-ui/react"
import NextImage from "next/image"
import { motion } from "framer-motion"
import Parallax from "./Parallax"
import { useRef, useEffect } from "react"
import ChakraBox from "./utils/ChakraBox"
import gsap from "gsap"
import useIsomorphicLayoutEffect from "./hooks/useIsomorphicLayoutEffect"

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
  const containerRef = useRef()

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) {
      return
    }

    const images = containerRef.current.children

    gsap.set(images, { autoAlpha: 0.01 })

    // Target ALL descendants with the class of .box
    let animation = gsap.fromTo(
      images,
      {
        scale: 0.75,
        opacity: 0.1,
        clipPath: "inset(100% 0 0 0)",
      },
      {
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        delay: 0.75,
        duration: 2.5,
        stagger: 1.25,
        ease: "power4.out",
      }
    )

    return () => {
      animation.kill()
    }
  }, [])

  return (
    <Box pos="relative">
      <HeroTitle />

      <Grid
        minH="97.5vh"
        maxW="1920px"
        m="0 auto"
        templateRows={[
          "repeat(15, 1fr)",
          "repeat(15, 1fr)",
          "repeat(15, 1fr)",
          "repeat(25, 1fr)",
        ]}
        templateColumns={[
          "repeat(15, 1fr)",
          "repeat(15, 1fr)",
          "repeat(15, 1fr)",
          "repeat(25, 1fr)",
        ]}
        pos="relative"
        ref={containerRef}
      >
        <Box
          visibility="hidden"
          pos="relative"
          gridRow={["11 / 15", "11 / 15", "11 / 15", "17 / 25"]}
          gridColumn={["5 / 16", "5 / 16", "5 / 16", "18 / 26"]}
          data-speed="1.2"
        >
          <NextImage
            priority
            src="/images/hero-1.webp"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box
          visibility="hidden"
          pos="relative"
          gridRow={["4 / 6", "4 / 6", "4 / 6", "6 / 12"]}
          gridColumn={["2 / 9", "2 / 9", "2 / 9", "2 / 8"]}
          data-speed="1.1"
        >
          <NextImage
            priority
            src="/images/hero-2.jpg"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Grid>
    </Box>
  )
}

export default HeroSection

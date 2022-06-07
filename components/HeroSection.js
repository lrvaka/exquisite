import { Box, Heading, Grid, Flex } from "@chakra-ui/react"
import NextImage from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import gsap from "gsap"
import SplitText from "gsap/dist/SplitText"
import useIsomorphicLayoutEffect from "./hooks/useIsomorphicLayoutEffect"

const HeroSection = () => {
  const containerRef = useRef()
  const headingRef = useRef()

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) {
      return
    }

    const split = new SplitText(headingRef.current, {
      type: "chars, words",
    })

    const images = containerRef.current.children

    gsap.set(images, { autoAlpha: 0.01 })
    gsap.set(headingRef.current, { autoAlpha: 1 })

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
        stagger: 1,
        ease: "power4.out",
      }
    )

    let splitCharsAni = gsap.fromTo(
      split.chars,
      {
        y: -20,
        opacity: 0,
        scale: 1.25,
        skewX: 10,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        skewX: 0,
        duration: 1,
        stagger: 0.05,
        ease: "a1",
      }
    )

    return () => {
      animation.kill()
    }
  }, [])

  return (
    <Box pos="relative">
      <Heading
        as="h1"
        visibility="hidden"
        color="brand.100"
        fontSize={["3.5rem", "5rem", "6rem"]}
        fontWeight="900"
        lineHeight="100%"
        top="50%"
        left="50%"
        width="90vw"
        transform="translate(-50%,-50%)"
        textAlign="center"
        pos="absolute"
        zIndex="1"
        ref={headingRef}
      >
        We make <br />
        living spaces <br />
        Exquisite
      </Heading>

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

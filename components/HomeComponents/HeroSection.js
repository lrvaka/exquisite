import { Box, Heading, Grid, Flex } from "@chakra-ui/react"
import NextImage from "next/image"
import { motion } from "framer-motion"
import { useRef, useContext } from "react"
import GsapContext from "../../store/gsap-context"
import useArrayRef from "../hooks/useArrayRef"
import gsap from "gsap"
import SplitText from "gsap/dist/SplitText"
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect"
import heroImage1 from "../../public/images/hero-1.webp"
import heroImage2 from "../../public/images/hero-2.jpg"

const HeroSection = () => {
  const containerRef = useRef()
  const headingRef = useRef()

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) {
      return
    }

    const split = new SplitText(headingRef.current, {
      type: "chars",
    })

    const images = containerRef.current.children

    gsap.set(images, {
      scale: 0.75,
      autoAlpha: 0.1,
      clipPath: "inset(100% 0 0 0)",
    })

    // Target ALL descendants with the class of .box
    let animation = gsap.to(images, {
      scale: 1,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      delay: 0.75,
      duration: 2.5,
      stagger: 1,
      ease: "power4.out",
    })

    gsap.set(headingRef.current, { autoAlpha: 1 })
    gsap.set(split.chars, { y: -20, opacity: 0, scale: 1.25, skewX: 10 })

    let splitCharsAni = gsap.to(split.chars, {
      y: 0,
      opacity: 1,
      scale: 1,
      skewX: 0,
      duration: 1,
      delay: 0.3,
      stagger: 0.05,
      ease: "a1",
    })

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
        fontSize={["3rem", "5rem", "6rem"]}
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
            quality={25}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            src={heroImage1}
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
            quality={25}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            src={heroImage2}
          />
        </Box>
      </Grid>
    </Box>
  )
}

export default HeroSection

import { Box, Heading, Grid, Flex, Link, Text, Icon } from "@chakra-ui/react"
import NextImage from "next/image"
import { motion } from "framer-motion"
import { useRef, useContext } from "react"
import SVGArrow from "./SVGArrow"
import gsap from "gsap"
import SplitText from "gsap/dist/SplitText"
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect"
import heroImage1 from "../../public/images/hero-1.webp"
import heroImage2 from "../../public/images/hero-2.jpg"
import { BsArrowRight } from "react-icons/bs"
import { GiWoodBeam } from "react-icons/gi"
import GsapContext from "../../store/gsap-context"

const variants = {
  initial: {
    clipPath: "inset(0 100% 0 0)",
    opacity: 0,
  },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      delay: 3,
      duration: 2,
      ease: [0.36, 0.77, 0, 0.99],
    },
  },
}

const HeroSection = () => {
  const { smoother } = useContext(GsapContext)
  const containerRef = useRef()
  const headingRef = useRef()
  const subRef = useRef()

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) {
      return
    }

    const split = new SplitText(headingRef.current, {
      type: "chars",
    })

    const splitSub = new SplitText(subRef.current, {
      type: "chars, words, lines",
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
    gsap.set(subRef.current, { autoAlpha: 1 })
    gsap.set(split.chars, { y: -20, opacity: 0, scale: 1.25, skewX: 10 })
    gsap.set(splitSub.chars, { y: 30, opacity: 0, scale: 1.25, skewX: 20 })

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

    let splitSubCharsAni = gsap.to(splitSub.chars, {
      y: 0,
      opacity: 1,
      scale: 1,
      skewX: 0,
      duration: 1,
      delay: 1.25,
      stagger: 0.05,
      ease: "a1",
    })

    return () => {
      animation.kill()
    }
  }, [])

  return (
    <Box pos="relative">
      <Box
        top="50%"
        left="50%"
        zIndex="1"
        transform="translate(-50%,-50%)"
        pos="absolute"
        textAlign="center"
        width="90vw"
      >
        <Heading
          pos="relative"
          lineHeight="100%"
          as="h1"
          visibility="hidden"
          color="brand.500"
          fontSize={{ base: "5xl", sm: "7xl", md: "8xl", lg: "9xl" }}
          fontWeight="900"
          zIndex="1"
          ref={headingRef}
        >
          Exquisite <br />
          Wood Floors
        </Heading>
        <Text
          pos="relative"
          as="h1"
          visibility="hidden"
          overflow="hidden"
          color="brand.500"
          fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl" }}
          zIndex="1"
          ref={subRef}
        >
          We make living spaces Exquisite
        </Text>

        <Flex
          justifyContent="center"
          alignItems="center"
          mt={{ base: 2, sm: 2, md: 4, lg: 6 }}
        >
          <Link
            as={motion.button}
            onClick={() => smoother.scrollTo("#contact", true, "center center")}
            pos="relative"
            variants={variants}
            initial="initial"
            animate="animate"
            fontSize={{ base: "md", sm: "md", md: "md", lg: "lg" }}
            display="flex"
            alignItems="center"
            maxW="max-content"
            py="2"
            px="4"
            bgColor="brand.500"
            color="brand.100"
            border="1px solid #213a30"
          >
            Schedule your free consultation now!
            <Icon as={BsArrowRight} ml="2" />
          </Link>
        </Flex>
      </Box>

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
            alt="beautiful wood floor home"
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
            alt="beautiful wood floor home"
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

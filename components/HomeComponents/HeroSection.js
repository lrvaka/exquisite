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
      ease: "easeOut",
    },
  },
}

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
      <Box
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        pos="absolute"
        textAlign="center"
        width="90vw"
      >
        <Heading
          pos="relative"
          mb="2"
          lineHeight="100%"
          as="h1"
          visibility="hidden"
          color="brand.500"
          fontSize="9xl"
          fontWeight="900"
          zIndex="1"
          ref={headingRef}
        >
          Exquisite <br />
          Wood Floors
        </Heading>
        <Text
          pos="relative"
          lineHeight="100%"
          as="h1"
          color="brand.500"
          fontSize="4xl"
          zIndex="1"
        >
          We make living spaces Exquisite
        </Text>
        <Flex
          justifyContent="center"
          alignItems="center"
          pt={["4", "6", "6", "8"]}
        >
          <Link
            as={motion.div}
            variants={variants}
            initial="initial"
            animate="animate"
            fontSize="lg"
            display="flex"
            alignItems="center"
            maxW="max-content"
            py="2"
            px="4"
            color="brand.400"
            border="1px solid #213a30"
          >
            Schedule your consultation now!
            <motion.div
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Icon as={BsArrowRight} ml="2" mt="2" />
            </motion.div>
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
          pos="absolute"
          bottom="7.5%"
          left={["1%", "-5%", "0%", "0%"]}
          textAlign="center"
          transform="rotate(90deg)"
        >
          <SVGArrow fill="#213a30" />
        </Box>
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

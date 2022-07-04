import { Box, Flex, Grid, Container, Text } from "@chakra-ui/react"
import SVGArrow from "../ui/SVGArrow"
import { useContext, useEffect, useRef } from "react"
import GsapContext from "../../store/gsap-context"
import gsap from "gsap"
import useArrayRef from "../hooks/useArrayRef"
import SectionHeading from "../ui/SectionHeading"
import aboutImage from "../../public/images/about.jpg"
import aboutImage1 from "../../public/images/about-1.png"
import aboutImage2 from "../../public/images/about-2.jpg"
import ParallaxImage from "../ui/ParallaxImage"

const AboutUsSectionDesktop = () => {
  const [imageRefs, setImageRefs] = useArrayRef()
  const { smoother } = useContext(GsapContext)
  const containerRef = useRef()
  const leftRef = useRef()
  const rightRef = useRef()

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    let animation

    gsap.set(imageRefs.current, {
      autoAlpha: 0.1,
      scale: 0.75,
      clipPath: "inset(100% 0 0 0)",
    })

    // Target ALL descendants with the class of .box
    imageRefs.current.forEach((image) => {
      animation = gsap.to(image, {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        scrollTrigger: {
          trigger: image, // this will use the first box as the trigger
          scrub: true,
          end: "bottom bottom",
          onLeave: (self) => self.kill(false, true),
        },
      })
    })

    gsap.set(leftRef.current, {
      x: -50,
      opacity: 0.1,
      scale: 0.75,
      clipPath: "inset(100% 0 0 0)",
    })

    let leftP = gsap.to(leftRef.current, {
      x: 0,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      ease: "power4.out",
      scrollTrigger: leftRef.current,
      duration: 1,
    })

    gsap.set(rightRef.current, {
      x: 50,
      opacity: 0.1,
      scale: 0.75,
      clipPath: "inset(100% 0 0 0)",
    })

    let rightP = gsap.to(rightRef.current, {
      x: 0,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power4.out",
      scale: 1,
      scrollTrigger: rightRef.current,
      duration: 1, // this will use the first box as the trigger
    })

    return () => {
      rightP.kill()
      leftP.kill()
      animation.kill()
    }
  }, [imageRefs])

  return (
    <>
      <Flex pt="24" px="12" maxW="2800px" m="0 auto">
        <Grid
          minH="1000px"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(25, 1fr)"
          flex={1}
          ref={containerRef}
        >
          <Box
            ref={setImageRefs}
            pos="relative"
            gridRow="1 / 5"
            gridColumn="1 / 25"
            overflow="hidden"
          >
            <ParallaxImage src={aboutImage2} />
          </Box>
        </Grid>
        <Box
          justifySelf="center"
          alignSelf="center"
          maxW="700px"
          bgColor="brand.500"
          px={["4", "8", "12"]}
          py="20"
          overflowX="hidden"
        >
          <SectionHeading pb="10">
            Your one stop shop for all your flooring needs
          </SectionHeading>

          <Flex
            w="100%"
            pb="8"
            gap={["0", "0", "0", "24"]}
            flexDir={["column", "column", "column", "row"]}
          >
            <Text
              ref={leftRef}
              pb="9"
              fontSize="clamp(1rem, 0.8333333333333333rem + 0.5555555555555556vw, 1.5rem)"
              color="white"
              fontWeight="400"
              lineHeight="normal"
            >
              Exquisite Wood Floors is a leading wood flooring company in the
              New York Metropolitan area that specializes in a wide range of
              flooring projects from retail and commercial to residential and
              hospitality, and much more. We are able to provide our clients
              with quality services and products that meet their specific needs.
              Our team is dedicated to providing professional service and
              support, so you can be assured your project will be handled with
              the utmost care.
            </Text>
          </Flex>
          <Flex
            as="button"
            textAlign="left"
            fontWeight="700"
            color="brand.200"
            w="max-content"
            onClick={() => {
              smoother.scrollTo("#contact", true, "center center")
            }}
            gap="4"
          >
            <Box fontSize={["1rem", "1rem", "1rem", "1.25rem"]}>Learn more</Box>
            <Box alignSelf="center">
              <SVGArrow fill="#cdcda6" />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Grid
        pt="24"
        minH="1000px"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(25, 1fr)"
        flex={1}
        ref={containerRef}
      >
        <Box
          ref={setImageRefs}
          pos="relative"
          gridRow="3 / 5"
          gridColumn="20 / 26"
          overflow="hidden"
        >
          <ParallaxImage src={aboutImage1} />
        </Box>
        <Box
          ref={setImageRefs}
          pos="relative"
          gridRow="1 / 5"
          gridColumn="8 / 19"
          overflow="hidden"
        >
          <ParallaxImage src={aboutImage2} />
        </Box>
        <Box
          ref={setImageRefs}
          pos="relative"
          gridRow="1 / 3"
          gridColumn="1 / 7"
          overflow="hidden"
        >
          <ParallaxImage src={aboutImage} />
        </Box>
      </Grid>
    </>
  )
}

export default AboutUsSectionDesktop

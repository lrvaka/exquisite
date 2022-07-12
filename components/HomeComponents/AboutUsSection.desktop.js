import { Box, Flex, Grid, Container, Text, Link } from "@chakra-ui/react"
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
import NextImage from "next/image"
import aboutUsImage from "../../public/images/about-us.png"
import NextLink from "next/link"

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
      <Flex
        maxW="1800px"
        m="0 auto"
        mb="24"
        mt="24"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          pos="relative"
          w="100%"
          minH={{ base: "400px", "2xl": "600px" }}
          flex={1.5}
        >
          <NextImage
            priority="true"
            placeholder="blur"
            layout="fill"
            objectFit="contain"
            src={aboutUsImage}
          />
        </Box>
        <Box
          flex={{ base: 1, sm: 1 }}
          px={["4", "8", "12"]}
          py="20"
          bgColor="brand.500"
          overflowX="hidden"
        >
          <SectionHeading pb="10" color="brand.200">
            Your one stop shop for <br />
            all your flooring needs
          </SectionHeading>

          <Flex pb="12" flexDir="column" gap="8">
            <Text
              ref={leftRef}
              fontSize={{ base: "md", sm: "lg" }}
              color="white"
              fontWeight="400"
              lineHeight="normal"
            >
              Exquisite Wood Floors is a leading wood flooring company in the
              New York Metropolitan area that specializes in a wide range of
              flooring projects from retail and commercial to residential and
              hospitality, and much more.
            </Text>
            <Text
              ref={rightRef}
              fontSize={{ base: "md", sm: "lg" }}
              color="white"
              fontWeight="400"
              lineHeight="normal"
            >
              We are able to provide our clients with quality services and
              products that meet their specific needs. Our team is dedicated to
              providing professional service and support, so you can be assured
              your project will be handled with the utmost care.
            </Text>
          </Flex>
          <NextLink href="/about" passHref>
            <Link
              display="flex"
              textAlign="left"
              fontWeight="700"
              color="brand.200"
              w="max-content"
              gap="4"
            >
              <Box fontSize={["1rem", "1rem", "1rem", "1.25rem"]}>
                Learn more
              </Box>
              <Box alignSelf="center">
                <SVGArrow fill="#cdcda6" />
              </Box>
            </Link>
          </NextLink>
        </Box>
      </Flex>
      <Grid
        minH={{ base: "500px", md: "1000px", "2xl": "1250px" }}
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(25, 1fr)"
        flex={1}
        ref={containerRef}
      >
        <Box
          ref={setImageRefs}
          pos="relative"
          gridRow="5 / 11"
          gridColumn="20 / 26"
          overflow="hidden"
        >
          <ParallaxImage src={aboutImage1} />
        </Box>
        <Box
          ref={setImageRefs}
          pos="relative"
          gridRow="2 / 9"
          gridColumn="8 / 19"
          overflow="hidden"
        >
          <ParallaxImage src={aboutImage2} />
        </Box>
        <Box
          ref={setImageRefs}
          pos="relative"
          gridRow="1 / 6"
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

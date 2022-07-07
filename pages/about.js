import { useContext, useRef, useEffect, useState } from "react"
import GsapContext from "../store/gsap-context"
import useIsomorphicLayoutEffect from "../components/hooks/useIsomorphicLayoutEffect"
import { Box, Container, Heading, Flex, Text, Grid } from "@chakra-ui/react"
import "keen-slider/keen-slider.min.css"
import ContactSection from "../components/HomeComponents/ContactSection"
import MainWrapper from "../components/ui/Main"
import Footer from "../components/ui/Footer"
import ParallaxImage from "../components/ui/ParallaxImage"
import image from "../public/images/about.png"
import image1 from "../public/images/planks.jpeg"
import useArrayRef from "../components/hooks/useArrayRef"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap"
import image2 from "../public/images/wood.png"
import TestimonialSlider from "../components/ui/TestimonialSlider"

const meta = {
  title: "Works - Exquisite Wood Floors",
  description: "Display of selected works we've completed over the years.",
  url: "https://www.exquisitewoodfloors.com/works",
  twitter: "https://twitter.com/ewfny",
  imageUrl: "https://www.exquisitewoodfloors.com/images/twitter.png",
  imageAlt: "Exquisite Wood Floors",
}

const InfoSection = () => {
  return (
    <Flex
      m="0 auto"
      pos="relative"
      maxW="1800px"
      px="12"
      mt="24"
      pb="20"
      minH="90vh"
    >
      <Grid columnGap={14} templateColumns="0.75fr 1fr">
        <Flex flexDir="column" justifyContent="center">
          <Heading
            pb="10"
            color="brand.500"
            fontSize={["2rem", "3rem", "4rem", "5rem", "6rem"]}
            fontWeight="900"
            lineHeight="100%"
          >
            About Us
          </Heading>

          <Text
            fontSize={["1rem", "1rem", "1rem", "1.25rem"]}
            color="black"
            fontWeight="400"
            lineHeight="normal"
          >
            Exquisite Wood Floors is a family-owned and operated flooring
            company with over 25 years of experience. We love what we do, and it
            shows in our work. From refinishing to repair to installation, we
            take great care in each project and always focus on the details. Our
            professionalism and attention to detail sets us apart and makes us
            the perfect choice for your flooring needs. Contact us today to
            schedule a consultation!
          </Text>
        </Flex>
        <Flex
          minH="100%"
          overflowY="hidden"
          pos="relative"
          justifyContent="center"
          alignItems="center"
          gridColumn="2"
        >
          <ParallaxImage src={image1} />
        </Flex>
      </Grid>
    </Flex>
  )
}

const WhyUsSection = () => {
  const [sectionRefs, setSectionRefs] = useArrayRef()
  const containerRef = useRef()

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(sectionRefs.current, {
      zIndex: (i, target, targets) => targets.length - i,
    })

    gsap.to(sectionRefs.current, {
      yPercent: -100,
      ease: "none",
      stagger: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
      },
    })
  }, [])

  return (
    <Box pos="relative">
      <Box
        ref={containerRef}
        w="100vw"
        h="100vh"
        pos="relative"
        top="0"
        left="0"
        overflow="hidden"
      >
        <Flex
          fontSize="2xl"
          textAlign="center"
          color="black"
          fontWeight="400"
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          lineHeight="normal"
          pos="absolute"
          ref={setSectionRefs}
          bgColor="orange"
        >
          <Heading
            color="brand.500"
            fontSize={["2rem", "3rem", "4rem", "5rem", "6rem"]}
            fontWeight="900"
            lineHeight="100%"
            textAlign="center"
          >
            Why Work With Us?
          </Heading>
        </Flex>
        <Flex
          fontSize="2xl"
          textAlign="center"
          color="black"
          fontWeight="400"
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          lineHeight="normal"
          pos="absolute"
          ref={setSectionRefs}
          bgColor="green.100"
        >
          We are experts in all things flooring
        </Flex>
        <Flex
          fontSize="2xl"
          textAlign="center"
          color="black"
          fontWeight="400"
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          lineHeight="normal"
          pos="absolute"
          ref={setSectionRefs}
          bgColor="blue.50"
        >
          We use only the highest quality materials and products
        </Flex>
        <Flex
          fontSize="2xl"
          textAlign="center"
          color="black"
          fontWeight="400"
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          lineHeight="normal"
          pos="absolute"
          ref={setSectionRefs}
          bgColor="red"
        >
          We have a wide variety of flooring options to choose from
        </Flex>
        <Flex
          fontSize="2xl"
          textAlign="center"
          color="black"
          fontWeight="400"
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          lineHeight="normal"
          pos="absolute"
          ref={setSectionRefs}
          bgColor="red.400"
        >
          We offer competitive rates and excellent customer service
        </Flex>
      </Box>
    </Box>
  )
}

const About = () => {
  return (
    <MainWrapper heading={meta} pos="relative">
      <Flex
        minH="400px"
        overflowY="hidden"
        pos="relative"
        maxW="1800px"
        m="0 auto"
        mt="20vh"
        justifyContent="center"
        alignItems="center"
      >
        <ParallaxImage src={image} />
        <Heading
          color="brand.200"
          fontSize="7xl"
          textAlign="center"
          fontWeight="black"
          pos="relative"
        >
          Flooring services
          <br /> with a piece of mind
        </Heading>
      </Flex>

      <InfoSection />
      <WhyUsSection />
      <Grid minH="500px" overflowY="hidden" pos="relative" mt="-700px" mb="20">
        <ParallaxImage src={image2} />
        <TestimonialSlider />
      </Grid>
      <ContactSection
        bgColor="brand.500"
        contactFormVariant="work"
        contactInfoTextColor="brand.200"
        headingColor="brand.200"
        formLabelColor="white"
        logoColor="white"
      />

      <Footer
        bgColor="brand.500"
        borderTop="1px solid #3a6061"
        color="brand.100"
      />
    </MainWrapper>
  )
}

export default About

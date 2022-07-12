import { useContext, useRef, useEffect, useState } from "react"
import NextLink from "next/link"
import GsapContext from "../store/gsap-context"
import useIsomorphicLayoutEffect from "../components/hooks/useIsomorphicLayoutEffect"
import SVGArrow from "../components/ui/SVGArrow"
import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Grid,
  Link,
  Icon,
} from "@chakra-ui/react"
import "keen-slider/keen-slider.min.css"
import { useRouter } from "next/router"
import ContactSection from "../components/HomeComponents/ContactSection"
import MainWrapper from "../components/ui/Main"
import Footer from "../components/ui/Footer"
import ParallaxImage from "../components/ui/ParallaxImage"
import image from "../public/images/about.png"
import image1 from "../public/images/planks.jpeg"
import useArrayRef from "../components/hooks/useArrayRef"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap"
import image3 from "../public/images/view-works.jpeg"
import TestimonialSlider from "../components/AboutComponents/TestimonialSlider"
import NextImage from "next/image"
import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs"
import WhyUsSection from "../components/AboutComponents/WhyUsSection"
import TestimonialSection from "../components/AboutComponents/TestimonialSection"

const meta = {
  title: "Works - Exquisite Wood Floors",
  description: "Display of selected works we've completed over the years.",
  url: "https://www.exquisitewoodfloors.com/works",
  twitter: "https://twitter.com/ewfny",
  imageUrl: "https://www.exquisitewoodfloors.com/images/twitter.png",
  imageAlt: "Exquisite Wood Floors",
}

const InfoSection = () => {
  const { smoother } = useContext(GsapContext)

  return (
    <Flex
      m="0 auto"
      pos="relative"
      mt="24"
      mb="24"
      gap={12}
      minH={{ base: "1000px", md: "500px" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        flex={{ base: "0", md: "1" }}
        bgColor="brand.500"
      >
        <Box
          maxW="800px"
          alignSelf="center"
          px="4"
          py={{ base: 20, md: 0 }}
          pos="relative"
        >
          <Box
            pos="absolute"
            top="0"
            right="0"
            h={{ base: "300px", lg: "400px", "2xl": "500px" }}
            w={{ base: "300px", lg: "400px", "2xl": "500px" }}
          >
            <NextImage
              src="/images/stamp.png"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Heading
            mb="10"
            color="brand.100"
            fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}
            fontWeight="900"
            lineHeight="100%"
            borderBottom="1px #979a6f solid"
          >
            About Us
          </Heading>

          <Text
            fontSize={{ base: "md", md: "xl" }}
            color="white"
            fontWeight="400"
            lineHeight="normal"
            mb="12"
          >
            Exquisite Wood Floors is a family-owned and operated flooring
            company with over 25 years of experience. We love what we do, and it
            shows in our work. From refinishing to repair to installation, we
            take great care in each project and always focus on the details. Our
            professionalism and attention to detail sets us apart and makes us
            the perfect choice for your flooring needs. Contact us today to
            schedule a consultation!
          </Text>
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
            <Box fontSize={["1rem", "1rem", "1rem", "1.25rem"]}>Contact us</Box>
            <Box alignSelf="center">
              <SVGArrow fill="#cdcda6" />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex
        minH="100%"
        flex={{ base: 1, "2xl": 1.5 }}
        overflowY="hidden"
        pos="relative"
        justifyContent="center"
        alignItems="center"
      >
        <ParallaxImage src={image1} />
      </Flex>
    </Flex>
  )
}

const About = () => {
  const router = useRouter()
  return (
    <MainWrapper heading={meta} pos="relative">
      <Box pt={{ base: "130px", md: "180px" }}>
        <Flex
          minH={{ base: "200px", lg: "400px" }}
          overflowY="hidden"
          pos="relative"
          m="0 auto"
          justifyContent="center"
          alignItems="center"
        >
          <ParallaxImage src={image} />
          <Heading
            color="brand.200"
            fontSize={{ base: "2xl", lg: "6xl" }}
            textAlign="center"
            fontWeight="black"
            pos="relative"
          >
            Flooring services
            <br /> with a piece of mind
          </Heading>
        </Flex>
      </Box>
      <InfoSection />
      <WhyUsSection />
      <Flex
        overflowY="hidden"
        pos="relative"
        minH="500px"
        mt="-700px"
        mb="24"
        minW="100%"
      >
        <ParallaxImage src={image3} />
        <Flex
          flexDir="column"
          pos="absolute"
          top="calc(75% - 142px)"
          left="10%"
        >
          <Heading
            color="brand.100"
            fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}
            fontWeight="900"
            lineHeight="100%"
            borderBottom="1px #979a6f solid"
          >
            Portfolio
          </Heading>
          <NextLink href="/portfolio" passHref>
            <Link
              fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
              display="flex"
              alignItems="center"
              maxW="max-content"
              py="2"
              px="4"
              bgColor="brand.500"
              color="brand.100"
              border="1px solid #213a30"
            >
              View Projects
              <Icon as={BsArrowRight} ml="2" />
            </Link>
          </NextLink>
        </Flex>
      </Flex>

      <TestimonialSection />

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

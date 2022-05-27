import Head from "next/head"
import {
  Box,
  Heading,
  Text,
  Flex,
  Grid,
  keyframes,
  Button,
} from "@chakra-ui/react"

import NextImage from "next/image"

import Navbar from "../components/Navbar"
import SVGArrow from "../components/SVGArrow"
import Marquee from "react-fast-marquee"
import SlideShowSection from "../components/SlideshowSection"
import { SectionHeading, SectionParagraph } from "../components/SectionText"
import ContactSection from "../components/ContactSection"

const grainAnimation = keyframes`
  0%, 100% { transform:translate(0, 0); }
  10% { transform:translate(-5%, -10%); }
  20% { transform:translate(-15%, 5%); }
  30% { transform:translate(7%, -25%); }
  40% { transform:translate(-5%, 25%); }
  50% { transform:translate(-15%, 10%); }
  60% { transform:translate(15%, 0%); }
  70% { transform:translate(0%, 15%); }
  80% { transform:translate(3%, 35%); }
  90% { transform:translate(-10%, 10%); }
`

const animation = `${grainAnimation} 8s steps(10) infinite`

const HeroTitle = () => (
  <Box
    top="50%"
    left="50%"
    width="90vw"
    transform="translate(-50%,-50%)"
    textAlign="center"
    pos="absolute"
  >
    <Heading
      display="inline-block"
      as="h1"
      color="brand.100"
      fontSize="3.5rem"
      fontWeight="900"
      lineHeight="100%"
    >
      We make living spaces Exquisite
    </Heading>
  </Box>
)

const HeroSection = () => (
  <Box pos="relative">
    <HeroTitle />

    <Grid
      minH="97.5vh"
      templateRows="repeat(15, 1fr)"
      templateColumns="repeat(15, 1fr)"
    >
      <Box
        w="100%"
        h="100%"
        pos="relative"
        gridRow="11 / 15"
        gridColumn="5 / 16"
      >
        <NextImage src="/images/hero-1.webp" layout="fill" objectFit="cover" />
      </Box>
      <Box w="100%" h="100%" pos="relative" gridRow=" 3 / 5" gridColumn="2 / 9">
        <NextImage src="/images/hero-2.jpg" layout="fill" objectFit="cover" />
      </Box>
    </Grid>
  </Box>
)

const MarqueeSection = () => (
  <Marquee gradient={false}>
    <Heading
      fontWeight="black"
      color="brand.300"
      fontSize="5rem"
      mr="3rem"
      opacity="0.25"
    >
      EXQUISITE WOOD FLOORS
    </Heading>
  </Marquee>
)

const AboutUsSection = () => (
  <>
    <Box px="4" py="20">
      <SectionHeading pb="10">
        Accomplished <br /> flooring expertise
      </SectionHeading>
      <Flex flexDir="column" maxW="80vw">
        <SectionParagraph pb="9">
          Whether you're an architect, designer, developer or flooring
          contractor, Exquisite Wood Floors offers you a solution designed to
          perfectly match the style, requirements and budget of your project.
        </SectionParagraph>
        <SectionParagraph pb="8">
          Every member of the Exquisite Wood Floors team is a wooden floor
          expert with extensive knowledge of their sector and years of flooring
          experience, delivering projects across all markets to the highest of
          standards, ensuring unique, durable floors of quality.
        </SectionParagraph>
        <Flex
          as="button"
          textAlign="left"
          fontWeight="700"
          color="brand.200"
          gap="4"
          w="max-content"
        >
          <Box>Connect with us</Box>
          <Box alignSelf="center">
            <SVGArrow />
          </Box>
        </Flex>
      </Flex>
    </Box>
    <Grid
      minH="300px"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(25, 1fr)"
    >
      <Box
        w="100%"
        h="100%"
        pos="relative"
        gridRow="4 / 5"
        gridColumn="20 / 26"
      >
        <NextImage src="/images/about-1.png" layout="fill" objectFit="cover" />
      </Box>
      <Box w="100%" h="100%" pos="relative" gridRow="1 / 5" gridColumn="8 / 19">
        <NextImage src="/images/about-2.png" layout="fill" objectFit="cover" />
      </Box>
      <Box w="100%" h="100%" pos="relative" gridRow="1 / 2" gridColumn="1 / 7">
        <NextImage src="/images/about.png" layout="fill" objectFit="cover" />
      </Box>
    </Grid>
  </>
)

const MessageSection = () => (
  <Flex textAlign="center" py="20">
    <Box
      borderTop="1px #cdcda6 solid"
      borderBottom="1px #cdcda6 solid"
      py="5rem"
      px="3"
    >
      <Heading color="brand.200" fontWeight="black" fontSize="2rem">
        Residential, retail or a commercial project, our approach is the same:
        achieve synchronicity with clients and deliver exceptional value
      </Heading>
    </Box>
  </Flex>
)

export default function Home() {
  return (
    <Box
      overflowX="hidden"
      _before={{
        animation: animation,
        backgroundImage: "url(/images/noise.png)",
        content: "''",
        height: "300%",
        left: "-50%",
        opacity: "0.5",
        position: "fixed",
        top: "-110%",
        width: "300%",
      }}
      pos="relative"
    >
      <Head>
        <title>Exquisite Wood Floors</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutUsSection />
      <MessageSection />
      <SlideShowSection />
      <ContactSection />
    </Box>
  )
}

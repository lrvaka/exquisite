import Head from "next/head"
import dynamic from "next/dynamic"
import {
  Box,
  Heading,
  Text,
  Flex,
  Grid,
  keyframes,
  Button,
} from "@chakra-ui/react"
import GsapContext from "../store/gsap-context"
import useIsomorphicLayoutEffect from "../components/hooks/useIsomorphicLayoutEffect"
import { useContext } from "react"
import NextImage from "next/image"
import Marquee from "react-fast-marquee"
import SlideShowSection from "../components/SlideshowSection"
import { SectionHeading, SectionParagraph } from "../components/ui/SectionText"
import ContactSection from "../components/ContactSection"
import HeroSection from "../components/HeroSection"
import AboutUsSection from "../components/AboutUsSection"
import Footer from "../components/ui/Footer"
import React from "react"
import MainWrapper from "../components/ui/Main"

const MessageSection = dynamic(() =>
  import("../components/MessageSectionAnimation")
)

const MarqueeSection = () => (
  <Marquee gradient={false}>
    <Heading
      fontWeight="black"
      color="brand.300"
      fontSize={["5rem", "10rem"]}
      mr="3rem"
      opacity="0.25"
      overflowY="hidden"
    >
      EXQUISITE WOOD FLOORS
    </Heading>
  </Marquee>
)

const Meta = {
  title: "Exquisite Wood Floors: Hardwood Flooring You Can Trust",
  description:
    "We make any living space exquisite with our reliable and beautiful hardwood flooring",
}

const Home = (props) => {
  return (
    <MainWrapper>
      <Head>
        <title>Exquisite Wood Floors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <MarqueeSection />
      <AboutUsSection />
      <MessageSection />
      <SlideShowSection />
      <ContactSection />
      <Footer bgColor="brand.100" />
    </MainWrapper>
  )
}

export default Home

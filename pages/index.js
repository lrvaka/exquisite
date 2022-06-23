import Head from "next/head"
import dynamic from "next/dynamic"
import { Heading } from "@chakra-ui/react"
import Marquee from "react-fast-marquee"
import SlideShowSection from "../components/HomeComponents/SlideshowSection"
import ContactSection from "../components/HomeComponents/ContactSection"
import HeroSection from "../components/HomeComponents/HeroSection"
import AboutUsSection from "../components/HomeComponents/AboutUsSection"
import Footer from "../components/ui/Footer"
import React from "react"
import MainWrapper from "../components/ui/Main"

const MessageSection = dynamic(() =>
  import("../components/HomeComponents/MessageSectionAnimation")
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

const meta = {
  title: "Exquisite Wood Floors: Hardwood Flooring You Can Trust",
  description:
    "We make any living space exquisite with our reliable and appealing hardwood flooring",
  url: "https://www.exquisitewoodfloors.com",
  twitter: "https://twitter.com/exquisitewoodfloors",
  imageUrl: "https://www.exquisitewoodfloors.com/images/twitter.png",
  imageAlt: "Exquisite Wood Floors",
}

const Home = (props) => {
  return (
    <MainWrapper heading={meta}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <MarqueeSection />
      <AboutUsSection />
      <MessageSection />
      <SlideShowSection />
      <ContactSection logoColor="brand.500" />
      <Footer bgColor="brand.100" />
    </MainWrapper>
  )
}

export default Home

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
import Parallax from "../components/Parallax"
import HeroSection from "../components/HeroSection"
import AboutUsSection from "../components/AboutUsSection"

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

const MarqueeSection = () => (
  <Marquee gradient={false}>
    <Heading
      fontWeight="black"
      color="brand.300"
      fontSize="5rem"
      mr="3rem"
      opacity="0.25"
      overflowY="hidden"
    >
      EXQUISITE WOOD FLOORS
    </Heading>
  </Marquee>
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

export default function Home(props) {
  return (
    <Box
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
        zIndex: "-10",
        overflowY: "hidden",
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
      <SlideShowSection posts={props.posts} />
      <ContactSection />
    </Box>
  )
}

export async function getStaticProps() {
  // fetch data from an API
  const res = await fetch(
    "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=***REMOVED***"
  )

  const posts = await res.json()

  return {
    props: { posts: posts },
    revalidate: 1,
  }
}

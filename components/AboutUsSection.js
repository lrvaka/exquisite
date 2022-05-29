import NextImage from "next/image"
import { SectionParagraph } from "../components/SectionText"
import { Box, Flex, Grid } from "@chakra-ui/react"
import SVGArrow from "./SVGArrow"
import Parallax from "./Parallax"
import ChakraBox from "./ChakraBox"
import { AnimatedHeading } from "../components/SectionText"

const images = {
  initial: { y: 25, scale: 0.75, opacity: 0, clipPath: "inset(100% 0 0 0)" },
  animate: (i) => ({
    y: 0,
    scale: 1,
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      clipPath: { type: "spring", damping: 50 },
      delay: i * 0.5,
      duration: 1,
    },
  }),
}

const AboutUsSection = () => (
  <>
    <Box px="4" py="20">
      <Box as="h2" pb="10">
        <AnimatedHeading custom={0} title="Accomplished" />
        <AnimatedHeading custom={0} title="flooring &nbsp; expertise" />
      </Box>
      <Flex flexDir="column" maxW="80vw">
        <SectionParagraph pb="9">
          Whether you&apos;re an architect, designer, developer or flooring
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
          w="max-content"
        >
          <Flex as="a" href="#contact" gap="4">
            <Box>Connect with us</Box>
            <Box alignSelf="center">
              <SVGArrow fill="#cdcda6" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
    <Grid
      minH="300px"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(25, 1fr)"
    >
      <ChakraBox
        variants={images}
        custom={0}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        w="100%"
        h="100%"
        pos="relative"
        gridRow="4 / 5"
        gridColumn="20 / 26"
        overflow="hidden"
        boxShadow="inset 0px 0px 42px -18px #000000"
      >
        <Parallax
          pos="absolute"
          zIndex="-1"
          w="100%"
          h="100%"
          offset={25}
          growth={2}
        >
          <NextImage src="/images/about-1.png" layout="fill" />
        </Parallax>
      </ChakraBox>
      <ChakraBox
        variants={images}
        custom={1}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        w="100%"
        h="100%"
        pos="relative"
        gridRow="1 / 5"
        gridColumn="8 / 19"
        overflow="hidden"
        boxShadow="inset 0px 0px 42px -18px #000000"
      >
        <Parallax
          pos="absolute"
          zIndex="-1"
          w="100%"
          h="100%"
          offset={25}
          growth={2}
        >
          <NextImage
            src="/images/about-2.png"
            layout="fill"
            objectFit="cover"
            objectPosition="5% 50%"
          />
        </Parallax>
      </ChakraBox>
      <ChakraBox
        variants={images}
        custom={2}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        w="100%"
        h="100%"
        pos="relative"
        gridRow="1 / 2"
        gridColumn="1 / 7"
        overflow="hidden"
        boxShadow="inset 0px 0px 42px -18px #000000"
      >
        <Parallax
          pos="absolute"
          w="100%"
          h="100%"
          zIndex="-1"
          offset={25}
          growth={2}
        >
          <NextImage src="/images/about.png" layout="fill" objectFit="cover" />
        </Parallax>
      </ChakraBox>
    </Grid>
  </>
)

export default AboutUsSection

import NextImage from "next/image"
import { SectionParagraph } from "./ui/SectionText"
import { Box, Flex, Grid, Container } from "@chakra-ui/react"
import SVGArrow from "./ui/SVGArrow"
import Parallax from "./Parallax"
import ChakraBox from "./utils/ChakraBox"
import { useContext, useEffect, useLayoutEffect } from "react"
import GsapContext from "../store/gsap-context"
import { AnimatedHeading } from "./ui/SectionText"
import useIsomorphicLayoutEffect from "./hooks/useIsomorphicLayoutEffect"

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

const AboutUsSection = () => {
  const { smoother } = useContext(GsapContext)
  return (
    <>
      <Container
        maxW="container.xl"
        px="4"
        py="20"
        pb={["20", "20", "20", "40"]}
      >
        <Box as="h2" pb="10">
          <AnimatedHeading
            custom={0}
            title="Fitting &nbsp; floors &nbsp; for"
          />
          <AnimatedHeading
            custom={0}
            title="a &nbsp;multitude&nbsp; of &nbsp; projects"
          />
        </Box>
        <Flex
          w="100%"
          pb="8"
          gap={["0", "0", "0", "24"]}
          flexDir={["column", "column", "column", "row"]}
          maxW={["80vw", "80vw", "80vw", "none"]}
        >
          <SectionParagraph pb="9" w={["100%", "100%", "100%", "50%"]}>
            Whether you&apos;re an architect, designer, developer or flooring
            contractor, Exquisite Wood Floors offers you a solution designed to
            perfectly match the style, requirements and budget of your project.
            We are proud of the work we do, and our clients are more than
            delighted.
          </SectionParagraph>
          <SectionParagraph w={["100%", "100%", "100%", "50%"]}>
            We owe our success to our deep knowledge base of wood selection, the
            skills of our enthusiastic team, and the specialized technologies
            and techniques we have at our disposal.
          </SectionParagraph>
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
          <Box fontSize={["1rem", "1rem", "1rem", "1.25rem"]}>
            Connect with us
          </Box>
          <Box alignSelf="center">
            <SVGArrow fill="#cdcda6" />
          </Box>
        </Flex>
      </Container>
      <Grid
        minH={["300px", "400px", "500px", "700px"]}
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(25, 1fr)"
        maxW="1300px"
        m="0 auto"
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
          gridRow={["4 / 5", "4 / 5", "4 / 5", "3 / 5"]}
          gridColumn="20 / 26"
          overflow="hidden"
          boxShadow="inset 0px 0px 42px -18px #000000"
        >
          <Box data-speed="auto" pos="absolute" zIndex="-1" w="100%" h="160%">
            <NextImage src="/images/about-1.png" layout="fill" />
          </Box>
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
          <Box data-speed="auto" pos="absolute" zIndex="-1" w="100%" h="160%">
            <NextImage
              src="/images/about-2.jpg"
              layout="fill"
              objectFit="cover"
            />
          </Box>
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
          gridRow={["1 / 2", "1 / 2", "1 / 2", "1 / 3"]}
          gridColumn="1 / 7"
          overflow="hidden"
          boxShadow="inset 0px 0px 42px -18px #000000"
        >
          <Box data-speed="auto" pos="absolute" w="100%" h="160%" zIndex="-1">
            <NextImage
              src="/images/about.jpg"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </ChakraBox>
      </Grid>
    </>
  )
}

export default AboutUsSection

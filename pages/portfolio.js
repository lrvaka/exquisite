import { useContext, useRef, useEffect } from "react"
import GsapContext from "../store/gsap-context"
import useIsomorphicLayoutEffect from "../components/hooks/useIsomorphicLayoutEffect"
import { Box, Container, Heading, Flex, Text, Grid } from "@chakra-ui/react"
import WorksModal from "../components/ui/Modal"
import "keen-slider/keen-slider.min.css"
import NextImage from "next/image"
import ContactSection from "../components/HomeComponents/ContactSection"
import MainWrapper from "../components/ui/Main"
import Footer from "../components/ui/Footer"
import clients from "../lib/clients"
import gsap from "gsap"
import GridItem from "../components/WorksComponents/GridItem"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gridImage1 from "../public/images/works/carolina/8.jpg"
import gridImage2 from "../public/images/works/carolina/3.jpg"
import gridImage3 from "../public/images/works/carolina/1.jpg"
import gridImage4 from "../public/images/works/carolina/4.jpg"
import gridImage5 from "../public/images/works/orchard/3.jpg"
import gridImage6 from "../public/images/works/orchard/2.jpg"
import gridImage7 from "../public/images/works/orchard/7.jpg"
import gridImage8 from "../public/images/works/orchard/6.jpg"
import gridImage9 from "../public/images/works/orchard/9.jpg"
import gridImage10 from "../public/images/works/hearst/1.jpg"
import gridImage11 from "../public/images/works/hearst/2.jpg"
import gridImage12 from "../public/images/works/hearst/3.jpg"
import gridImage13 from "../public/images/works/hearst/4.jpg"
import gridImage14 from "../public/images/works/hearst/5.jpg"
import gridImage15 from "../public/images/works/gucci/1.jpg"
import gridImage16 from "../public/images/works/gucci/2.jpg"
import gridImage17 from "../public/images/works/gucci/3.jpg"
import gridImage18 from "../public/images/works/gucci/4.jpg"
import gridImage20 from "../public/images/works/gucci/6.jpg"
import gridImage21 from "../public/images/works/gucci/7.jpg"
import useArrayRef from "../components/hooks/useArrayRef"
import Marquee from "react-fast-marquee"
import workSlides from "../lib/work-slides"

const MarqueeText = ({ children, ...props }) => (
  <Heading
    fontWeight="black"
    color="brand.400"
    fontSize={["4rem", "5rem", "6rem", "7rem"]}
    opacity="0.25"
    mr={["32", "60"]}
    overflowY="hidden"
    {...props}
  >
    {children}
  </Heading>
)

const MarqueeSection = ({ text, ...props }) => (
  <Marquee gradient={false}>
    <Flex {...props}>
      <MarqueeText>{text}</MarqueeText>
      <MarqueeText>{text}</MarqueeText>
      <MarqueeText>{text}</MarqueeText>
      <MarqueeText>{text}</MarqueeText>
    </Flex>
  </Marquee>
)

const WorksHeading = () => (
  <Container pos="relative" maxW="container.xl" px="4" minH="70vh">
    <Heading
      pb="10"
      color="brand.500"
      fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}
      fontWeight="900"
      lineHeight="100%"
    >
      Featured Works
    </Heading>
    <Flex pb="20">
      <Flex flexDir="column" maxW={{ base: "100%", md: "50%" }}>
        <Text
          fontSize={{ base: "md", md: "xl" }}
          color="black"
          fontWeight="400"
          lineHeight="normal"
          pb="9"
        >
          Below is a display of selected works from over the years. From
          commercial to residential, installation to restoration, we&apos;ve had
          the pleasure of working on various projects from a wide array of
          clientele.
        </Text>
      </Flex>
    </Flex>
    <Flex pos="relative" justifyContent="space-between">
      {clients.map((e, i) => (
        <Box w={["50px", "100px"]} h={["25px", "50px"]} key={i} pos="relative">
          <NextImage src={e} priority />
        </Box>
      ))}
    </Flex>
    <Box pos="absolute" top="0" right="0" h="600px" w="600px">
      <NextImage src="/images/stamp.png" layout="fill" objectFit="cover" />
    </Box>
  </Container>
)

const meta = {
  title: "Portfolio - Exquisite Wood Floors",
  description: "Display of selected works we've completed over the years.",
  url: "https://www.exquisitewoodfloors.com/portfolio",
  twitter: "https://twitter.com/ewfny",
  imageUrl: "https://www.exquisitewoodfloors.com/images/twitter.png",
  imageAlt: "Exquisite Wood Floors",
}

const Works = () => {
  const el = useRef()
  const [gridItems, setGridItems] = useArrayRef()

  useIsomorphicLayoutEffect(() => {
    if (!gridItems.current) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    gridItems.current.forEach((e, i) => {
      gsap.fromTo(
        e,
        {
          opacity: 0.1,
          scale: 0.75,
          clipPath: "inset(100% 0 0 0)",
        },
        {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 2,
          scrollTrigger: e,
        }
      )
    }, [])
  })

  return (
    <MainWrapper pt="20vh" heading={meta}>
      <WorksHeading />

      <WorksModal slides={workSlides.carolina}>
        <Grid
          maxW="container.xl"
          pos="relative"
          m="0 auto"
          minH={["500px", "800px"]}
          templateColumns="repeat(10, 1fr)"
          templateRows="repeat(10,1fr)"
          mb="40"
          ref={el}
        >
          <Heading
            zIndex="2"
            mixBlendMode="difference"
            pos="absolute"
            transform="translate(-50%,-50%)"
            top="50%"
            left="50%"
            color="white"
            fontWeight="black"
            fontSize={["6xl", "9xl"]}
            lineHeight="100%"
          >
            Carolina <br />
            Herrera
          </Heading>
          <GridItem
            ref={setGridItems}
            data-speed="1.1"
            gridRow="1 / 10"
            gridColumn="1 / 6"
            src={gridImage1}
          />

          <GridItem
            ref={setGridItems}
            data-speed="1.2"
            gridRow="1 / 11"
            gridColumn="6 / 11"
            src={gridImage3}
          />

          <GridItem
            ref={setGridItems}
            data-speed="1.3"
            gridRow="5 / 10"
            gridColumn="3 / 8"
            src={gridImage4}
          />

          <GridItem
            ref={setGridItems}
            gridRow="6 / 10"
            gridColumn="1 / 5"
            src={gridImage2}
          />
        </Grid>
      </WorksModal>

      <MarqueeSection text="Quality" />

      <WorksModal slides={workSlides.orchard}>
        <Grid
          pos="relative"
          maxW="container.xl"
          m="0 auto"
          minH={["500px", "800px"]}
          templateColumns="repeat(10, 1fr)"
          templateRows="repeat(10,1fr)"
          my="40"
        >
          <Heading
            zIndex="2"
            mixBlendMode="difference"
            pos="absolute"
            transform="translate(-50%,-50%)"
            top="50%"
            left="50%"
            color="white"
            fontWeight="black"
            lineHeight="100%"
            fontSize={["6xl", "9xl"]}
          >
            196 <br />
            Orchard
          </Heading>
          <GridItem
            ref={setGridItems}
            data-speed="1.2"
            gridRow="1 / 6"
            gridColumn="1 / 5"
            src={gridImage8}
          />

          <GridItem
            ref={setGridItems}
            data-speed="1.1"
            gridRow="3 / 11"
            gridColumn="4 / 8"
            src={gridImage6}
          />

          <GridItem
            ref={setGridItems}
            gridRow="1 / 5"
            gridColumn="8 / 11"
            src={gridImage9}
          />
          <GridItem
            ref={setGridItems}
            gridRow="6 / 11"
            gridColumn="8 / 11"
            src={gridImage5}
          />

          <GridItem
            ref={setGridItems}
            data-speed="1.3"
            gridRow="6 / 10"
            gridColumn="1 / 5"
            src={gridImage7}
          />
        </Grid>
      </WorksModal>

      <MarqueeSection text="Craftsmanship" />

      <WorksModal slides={workSlides.hearst}>
        <Grid
          pos="relative"
          maxW="container.xl"
          m="0 auto"
          minH={["500px", "800px"]}
          templateColumns="repeat(10, 1fr)"
          templateRows="repeat(10,1fr)"
          my="40"
          ref={el}
        >
          <Heading
            zIndex="2"
            mixBlendMode="difference"
            pos="absolute"
            transform="translate(-50%,-50%)"
            top="50%"
            left="50%"
            color="white"
            fontWeight="black"
            lineHeight="100%"
            fontSize={["6xl", "9xl"]}
          >
            Gabriela <br /> Hearst
          </Heading>
          <GridItem
            ref={setGridItems}
            data-speed="1.1"
            gridRow="1 / 10"
            gridColumn="1 / 6"
            src={gridImage10}
          />

          <GridItem
            ref={setGridItems}
            gridRow="1 / 11"
            gridColumn="6 / 11"
            src={gridImage11}
          />

          <GridItem
            ref={setGridItems}
            data-speed="1.3"
            gridRow="1 / 4"
            gridColumn="8 / 11"
            src={gridImage12}
          />

          <GridItem
            ref={setGridItems}
            gridRow="8 / 11"
            gridColumn="2 / 4"
            src={gridImage13}
          />
          <GridItem
            ref={setGridItems}
            data-speed="1.2"
            gridRow="1 / 4"
            gridColumn="3 / 7"
            src={gridImage14}
          />
        </Grid>
      </WorksModal>

      <MarqueeSection text="Pristine" />

      <WorksModal slides={workSlides.gucci}>
        <Grid
          pos="relative"
          maxW="container.xl"
          m="0 auto"
          minH={["500px", "800px"]}
          templateColumns="repeat(10, 1fr)"
          templateRows="repeat(10,1fr)"
          my="40"
          ref={el}
        >
          <Heading
            zIndex="2"
            mixBlendMode="difference"
            pos="absolute"
            transform="translate(-50%,-50%)"
            top="50%"
            left="50%"
            color="white"
            fontWeight="black"
            lineHeight="100%"
            fontSize={["6xl", "9xl"]}
          >
            Gucci
          </Heading>

          <GridItem
            ref={setGridItems}
            data-speed="1.3"
            gridRow="1 / 7"
            gridColumn="6 / 11"
            src={gridImage17}
          />

          <GridItem
            ref={setGridItems}
            data-speed="0.9"
            gridRow="4 / 11"
            gridColumn="2 / 7"
            src={gridImage18}
          />

          <GridItem
            ref={setGridItems}
            gridRow="5 / 11"
            gridColumn="8 / 11"
            src={gridImage20}
          />
          <GridItem
            ref={setGridItems}
            gridRow="7 / 10"
            gridColumn="1 / 3"
            src={gridImage21}
          />
          <GridItem
            ref={setGridItems}
            data-speed="1.2"
            gridRow="9 / 11"
            gridColumn="5 / 8"
            src={gridImage16}
          />
          <GridItem
            ref={setGridItems}
            data-speed="1.1"
            gridRow="2 / 5"
            gridColumn="1 / 5"
            src={gridImage15}
          />
        </Grid>
      </WorksModal>

      <MarqueeSection text="Exquisite" mb="16" />

      <Flex
        justifyContent="center"
        alignItems="center"
        pos="relative"
        maxW="container.xl"
        m="0 auto"
        mb="20"
        minH="150px"
        ref={el}
      >
        <WorksModal slides={workSlides.all}>
          <Heading
            zIndex="2"
            textAlign="center"
            gridRow=" 1 / 5"
            gridColumn="4 / 8"
            color="brand.400"
            fontWeight="100"
            lineHeight="100%"
            fontSize={["4xl", "5xl"]}
          >
            More Works
          </Heading>
        </WorksModal>
      </Flex>

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

export default Works

import { useContext, useRef, useEffect } from "react"
import GsapContext from "../store/gsap-context"
import useIsomorphicLayoutEffect from "../components/hooks/useIsomorphicLayoutEffect"
import {
  Box,
  Container,
  Heading,
  Link,
  Flex,
  Text,
  Grid,
} from "@chakra-ui/react"
import WorksModal from "../components/ui/Modal"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import workSlides from "../lib/work-slides"
import NextImage from "next/image"
import ContactSection from "../components/HomeComponents/ContactSection"
import Navbar from "../components/ui/Navbar"
import MainWrapper from "../components/ui/Main"
import Footer from "../components/ui/Footer"
import clients from "../lib/clients"
import gsap from "gsap"
import ChakraBox from "../components/utils/ChakraBox"
import GridItem from "../components/WorksComponents/GridItem"
import GridImage from "../components/WorksComponents/GridImage"
import ParallaxGridItem from "../components/WorksComponents/ParallaxGridItem"
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
import ScrollTrigger from "gsap/dist/ScrollTrigger"

const MarqueeText = ({ children, ...props }) => (
  <Heading
    fontWeight="black"
    color="brand.400"
    fontSize={["4rem", "5rem", "6rem", "7rem"]}
    opacity="0.25"
    mr="24"
    overflowY="hidden"
    {...props}
  >
    {children}
  </Heading>
)

const MarqueeSection = ({ ...props }) => (
  <Marquee gradient={false}>
    <Flex {...props}>
      <MarqueeText>Reliable</MarqueeText>
      <MarqueeText>Quality</MarqueeText>
      <MarqueeText>Craftsmanship</MarqueeText>
      <MarqueeText>Pristine</MarqueeText>
    </Flex>
  </Marquee>
)

const WorksHeading = () => (
  <Container pos="relative" maxW="container.xl" px="4" minH="70vh">
    <Heading
      pb="10"
      color="brand.500"
      fontSize={["2rem", "3rem", "4rem", "5rem", "6rem"]}
      fontWeight="900"
      lineHeight="100%"
    >
      Featured Works
    </Heading>
    <Grid
      pb="20"
      templateColumns={["none", "none", "repeat(2, 1fr)"]}
      maxW={["80vw", "80vw", "80vw", "none"]}
    >
      <Flex flexDir="column">
        <Text
          fontSize={["1rem", "1rem", "1rem", "1.25rem"]}
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
    </Grid>
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

const Works = () => {
  const el = useRef()
  const q = gsap.utils.selector(el)
  const [gridItems, setGridItems] = useArrayRef()
  const ifAnimate = useRef(false)

  useIsomorphicLayoutEffect(() => {
    if (!gridItems.current) {
      return
    }


    gsap.registerPlugin(ScrollTrigger);



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
    <MainWrapper pt="20vh" bg="brand.200">
      <WorksHeading />
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

      <MarqueeSection />

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

      <MarqueeSection />

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

      <MarqueeSection />

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

      <Flex
        justifyContent="center"
        alignItems="center"
        pos="relative"
        maxW="container.xl"
        m="0 auto"
        mb="40"
        minH="150px"
        ref={el}
      >
        <WorksModal>
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
            View More
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

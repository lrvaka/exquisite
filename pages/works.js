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
import GridItem from "../components/WorksComponents/GridItem"
import GridImage from "../components/WorksComponents/GridImage"
import ParallaxGridItem from "../components/WorksComponents/ParallaxGridItem"

import gridImage1 from "../public/images/works/carolina/8.jpg"
import gridImage2 from "../public/images/works/carolina/3.jpg"
import gridImage3 from "../public/images/works/carolina/1.jpg"
import gridImage4 from "../public/images/works/carolina/4.jpg"
import gridImage5 from "../public/images/works/grid/3.jpg"
import gridImage6 from "../public/images/works/grid/2.jpg"
import gridImage7 from "../public/images/works/grid/7.jpg"
import gridImage8 from "../public/images/works/grid/6.jpg"
import gridImage9 from "../public/images/works/grid/4.jpg"
import gridImage10 from "../public/images/works/grid/1.jpg"
import useArrayRef from "../components/hooks/useArrayRef"

const animation = { duration: 50000, easing: (t) => t }

const WorksHeading = () => (
  <Container pos="relative" maxW="container.xl" px="4" minH="100vh">
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
          Here is a few of our selected works from over the years. From
          commercial to residential, installation to restoration, we&apos;ve had
          the pleasure of working on various projects from a wide array of
          clientele.
        </Text>
      </Flex>
    </Grid>
    <Flex pos="relative" justifyContent="space-between">
      {clients.map((e, i) => (
        <Box w={["50px", "100px"]} h={["25px", "50px"]} key={i} pos="relative">
          <NextImage src={e} />
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

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    mode: "free",
    created(s) {
      s.moveToIdx(10, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 10, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 10, true, animation)
    },
    slides: {
      perView: 3,
      spacing: 15,
    },
  })
  const [sliderRef1] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    mode: "free",
    created(s) {
      s.moveToIdx(-10, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs - 10, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs - 10, true, animation)
    },
    slides: {
      perView: 3,
      spacing: 15,
    },
  })

  useIsomorphicLayoutEffect(() => {
    if (!gridItems.current) {
      return
    }

    gsap.set(gridItems.current, { autoAlpha: 0.1})

    gridItems.current.forEach((e, i) => {
      gsap.fromTo(
        e,
        {
          opacity: 0.1,
        },
        {
          opacity: 1,
          duration: 2,
          delay: i * 0.5,
          scrollTrigger: {
            trigger: e,
          },
        }
      )
    }, [])
  })

  return (
    <MainWrapper pt="20vh" bg="brand.200">
      <WorksHeading />
      <Grid
        maxW="container.lg"
        m="0 auto"
        minH={["500px", "800px"]}
        templateColumns="repeat(10, 1fr)"
        templateRows="repeat(10,1fr)"
        mb="32"
        ref={el}
      >
        <GridItem
          visibility="hidden"
          ref={setGridItems}
          gridRow="1 / 10"
          gridColumn="1 / 6"
          src={gridImage1}
        />

        <GridItem
          visibility="hidden"
          ref={setGridItems}
          gridRow="1 / 11"
          gridColumn="6 / 11"
          src={gridImage3}
        />

        <GridItem
          visibility="hidden"
          ref={setGridItems}
          gridRow="5 / 10"
          gridColumn="3 / 8"
          src={gridImage4}
        />

        <GridItem
          visibility="hidden"
          ref={setGridItems}
          gridRow="6 / 10"
          gridColumn="1 / 5"
          src={gridImage2}
        />
      </Grid>
      <Grid
        maxW="container.lg"
        m="0 auto"
        minH={["500px", "800px"]}
        templateColumns="repeat(10, 1fr)"
        templateRows="repeat(10,1fr)"
        mb="32"
      >
        <GridItem
          data-speed="1.2"
          gridRow="1 / 10"
          gridColumn="1 / 6"
          src={gridImage1}
        />

        <GridItem
          data-speed="1.1"
          gridRow="1 / 11"
          gridColumn="6 / 11"
          src={gridImage3}
        />

        <GridItem gridRow="5 / 10" gridColumn="3 / 8" src={gridImage4} />

        <GridItem
          data-speed="1.3"
          gridRow="6 / 10"
          gridColumn="1 / 5"
          src={gridImage2}
        />
      </Grid>
      {/* <Box
        py="24"
        overflow="hidden"
        pos="relative"
        ref={sliderRef}
        className="keen-slider"
      >
        {workSlides.carolina.map((e, i) => (
          <Box className="keen-slider__slide" key={i} h="15rem">
            <GridImage src={e} />
          </Box>
        ))}
      </Box>
      <Grid
        maxW="container.xl"
        m="0 auto"
        minH={["500px", "800px"]}
        templateColumns="repeat(10, 1fr)"
        templateRows="repeat(10,1fr)"
      >
        <ParallaxGridItem gridRow="6 / 11" gridColumn="1/ 3" src={gridImage5} />

        <GridItem gridRow="1 / 6" gridColumn="1 / 5" src={gridImage6} />

        <ParallaxGridItem gridRow="1 / 6" gridColumn="5 / 8" src={gridImage7} />

        <GridItem gridRow="1 / 7" gridColumn="8/ 11" src={gridImage8} />

        <GridItem gridRow="6 / 11" gridColumn="3 / 8" src={gridImage9} />

        <ParallaxGridItem
          gridRow="7 / 11"
          gridColumn="8/ 11"
          src={gridImage10}
        />
      </Grid>
      <Box
        overflow="hidden"
        pos="relative"
        ref={sliderRef1}
        py="24"
        className="keen-slider"
      >
        {workSlides.grafbro.map((e, i) => (
          <Box className="keen-slider__slide" key={i} h="15rem">
            <GridImage src={e} />
          </Box>
        ))}
      </Box> */}
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

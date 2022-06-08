import { useContext } from "react"
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

const GridImage = ({ ...props }) => (
  <NextImage
    placeholder="blur"
    blurDataURL={`data:image/webp;base64,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`}
    layout="fill"
    objectFit="cover"
    {...props}
  />
)

const GridItem = ({ src, ...props }) => (
  <Box pos="relative" overflow="hidden" {...props}>
    <NextImage
      placeholder="blur"
      blurDataURL={`data:image/webp;base64,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`}
      layout="fill"
      objectFit="cover"
      src={src}
    />
  </Box>
)

const ParallaxGridItem = ({ src, ...props }) => (
  <Box pos="relative" overflow="hidden" w="100%" h="100%" {...props}>
    <Box data-speed="auto" pos="relative" w="100%" h="160%">
      <GridImage src={src} />
    </Box>
  </Box>
)

const animation = { duration: 50000, easing: (t) => t }

const Works = () => {
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

  return (
    <MainWrapper pt="20vh" bg="brand.200">
      <Container pos="relative" maxW="container.xl" px="4" pb={["16", "24"]}>
        <Heading
          pb="10"
          color="brand.600"
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
              commercial to residential, installation to restoration, we&apos;ve
              had the pleasure of working on various projects from a wide array
              of clientele.
            </Text>
          </Flex>
        </Grid>
        <Flex pos="relative" justifyContent="space-between">
          {clients.map((e) => (
            <Box
              w={["50px", "100px"]}
              h={["25px", "50px"]}
              key={e}
              pos="relative"
            >
              <NextImage height="500" width="500" src={e} />
            </Box>
          ))}
        </Flex>
        <Box pos="absolute" top="0" right="0" h="600px" w="600px">
          <NextImage src="/images/stamp.png" layout="fill" objectFit="cover" />
        </Box>
      </Container>
      <Grid
        maxW="container.xl"
        m="0 auto"
        minH={["500px", "800px"]}
        templateColumns="repeat(10, 1fr)"
        templateRows="repeat(10,1fr)"
      >
        <ParallaxGridItem
          gridRow="1 / 11"
          gridColumn="1 / 5"
          src="/images/works/grid/8.webp"
        />

        <GridItem
          gridRow="1 / 5"
          gridColumn="5 / 8"
          src="/images/works/michili/2.jpg"
        />

        <ParallaxGridItem
          gridRow="1 / 5"
          gridColumn="8/ 11"
          src="/images/works/michili/5.jpg"
        />

        <GridItem
          gridRow="5 / 11"
          gridColumn="5 / 11"
          src="/images/works/sezane/1.jpg"
        />
      </Grid>
      <Box
        py="24"
        overflow="hidden"
        pos="relative"
        ref={sliderRef}
        className="keen-slider"
      >
        {workSlides.carolina.map((e) => (
          <Box className="keen-slider__slide" key={e} h="15rem">
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
        <ParallaxGridItem
          gridRow="6 / 11"
          gridColumn="1/ 3"
          src="/images/works/grid/3.jpg"
        />

        <GridItem
          gridRow="1 / 6"
          gridColumn="1 / 5"
          src="/images/works/grid/2.jpg"
        />

        <ParallaxGridItem
          gridRow="1 / 6"
          gridColumn="5 / 8"
          src="/images/works/grid/7.jpg"
        />

        <GridItem
          gridRow="1 / 7"
          gridColumn="8/ 11"
          src="/images/works/grid/6.jpg"
        />

        <GridItem
          gridRow="6 / 11"
          gridColumn="3 / 8"
          src="/images/works/grid/4.jpg"
        />

        <ParallaxGridItem
          gridRow="7 / 11"
          gridColumn="8/ 11"
          src="/images/works/grid/1.jpg"
        />
      </Grid>
      <Box
        overflow="hidden"
        pos="relative"
        ref={sliderRef1}
        py="24"
        className="keen-slider"
      >
        {workSlides.grafbro.map((e) => (
          <Box className="keen-slider__slide" key={e} h="15rem">
            <GridImage src={e} />
          </Box>
        ))}
      </Box>
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

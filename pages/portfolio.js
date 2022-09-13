import { useRef } from "react";
import useIsomorphicLayoutEffect from "../components/hooks/useIsomorphicLayoutEffect";
import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Grid,
  Icon,
  Link,
} from "@chakra-ui/react";
import { IoOpen } from "react-icons/io5";
import WorksModal from "../components/ui/Modal";
import "keen-slider/keen-slider.min.css";
import NextImage from "next/image";
import ContactSection from "../components/HomeComponents/ContactSection";
import MainWrapper from "../components/ui/Main";
import Footer from "../components/ui/Footer";
import gsap from "gsap";
import GridItem from "../components/WorksComponents/GridItem";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gridImage1 from "../public/images/works/carolina/8.jpg";
import gridImage2 from "../public/images/works/carolina/3.jpg";
import gridImage3 from "../public/images/works/carolina/1.jpg";
import gridImage4 from "../public/images/works/carolina/4.jpg";
import gridImage5 from "../public/images/works/orchard/3.jpg";
import gridImage6 from "../public/images/works/orchard/2.jpg";
import gridImage7 from "../public/images/works/orchard/7.jpg";
import gridImage8 from "../public/images/works/orchard/6.jpg";
import gridImage9 from "../public/images/works/orchard/9.jpg";
import gridImage10 from "../public/images/works/hearst/1.jpg";
import gridImage11 from "../public/images/works/hearst/2.jpg";
import gridImage12 from "../public/images/works/hearst/3.jpg";
import gridImage13 from "../public/images/works/hearst/4.jpg";
import gridImage14 from "../public/images/works/hearst/5.jpg";
import gridImage15 from "../public/images/works/gucci/1.jpg";
import gridImage16 from "../public/images/works/gucci/2.jpg";
import gridImage17 from "../public/images/works/gucci/3.jpg";
import gridImage18 from "../public/images/works/gucci/4.jpg";
import gridImage20 from "../public/images/works/gucci/6.jpg";
import gridImage21 from "../public/images/works/gucci/7.jpg";
import peloton1 from "../public/images/works/peloton/1.jpeg";
import peloton2 from "../public/images/works/peloton/2.jpeg";
import peloton7 from "../public/images/works/peloton/7.jpg";
import peloton10 from "../public/images/works/peloton/10.jpg";
import Marquee from "react-fast-marquee";
import workSlides from "../lib/work-slides";

const meta = {
  title: "Portfolio - Exquisite Wood Floors",
  description: "Display of selected works we've completed over the years.",
  url: "https://www.exquisitewoodfloors.com/portfolio",
  twitter: "https://twitter.com/ewfny",
  imageUrl: "https://www.exquisitewoodfloors.com/images/twitter.png",
  imageAlt: "Exquisite Wood Floors",
};

const MarqueeText = ({ children, ...props }) => (
  <Heading
    fontWeight="black"
    color="brand.400"
    fontSize={{
      base: "4rem",
      sm: "5rem",
      md: "6rem",
      xl: "7rem",
      "2xl": "12rem",
    }}
    opacity="0.25"
    mr={["32", "60"]}
    overflowY="hidden"
    {...props}
  >
    {children}
  </Heading>
);

const MarqueeSection = ({ text, ...props }) => (
  <Marquee gradient={false}>
    <Flex {...props}>
      <MarqueeText>{text}</MarqueeText>
      <MarqueeText>{text}</MarqueeText>
      <MarqueeText>{text}</MarqueeText>
      <MarqueeText>{text}</MarqueeText>
    </Flex>
  </Marquee>
);

const WorksHeading = () => (
  <Container pos="relative" maxW="container.xl" px="4">
    <Heading
      as="h1"
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
    <Box pos="absolute" top="0" right="0" h="600px" w="600px">
      <NextImage
        alt="ewf emblem"
        src="/images/stamp.png"
        layout="fill"
        objectFit="cover"
      />
    </Box>
  </Container>
);

const Works = () => {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

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
            fontSize={["6xl", "9xl"]}
            lineHeight="100%"
          >
            Carolina <br />
            Herrera
          </Heading>
          <GridItem
            alt={`beautiful carolina herrera job flooring 1`}
            data-speed="1.1"
            gridRow="1 / 10"
            gridColumn="1 / 6"
            src={gridImage1}
          />

          <GridItem
            alt={`beautiful carolina herrera job flooring 2`}
            data-speed="1.2"
            gridRow="1 / 11"
            gridColumn="6 / 11"
            src={gridImage3}
          />

          <GridItem
            alt={`beautiful carolina herrera job flooring 3`}
            data-speed="1.3"
            gridRow="5 / 10"
            gridColumn="3 / 8"
            src={gridImage4}
          />

          <GridItem
            alt={`beautiful carolina herrera job flooring 4`}
            gridRow="6 / 10"
            gridColumn="1 / 5"
            src={gridImage2}
          />
        </Grid>
      </WorksModal>

      <MarqueeSection text="Quality" />

      <WorksModal slides={workSlides.peloton}>
        <Grid
          maxW="container.xl"
          pos="relative"
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
            fontSize={["6xl", "9xl"]}
            lineHeight="100%"
            textAlign="center"
          >
            Peloton HQ
          </Heading>
          <GridItem
            alt={`beautiful peloton flooring 1`}
            data-speed="1.1"
            gridRow="1 / 10"
            gridColumn="1 / 5"
            src={peloton1}
          />

          <GridItem
            alt={`beautiful peloton flooring 2`}
            data-speed="1.3"
            gridRow="5 / 10"
            gridColumn="5 / 11"
            src={peloton2}
          />

          <GridItem
            alt={`beautiful peloton flooring 3`}
            data-speed="1.3"
            gridRow="1 / 6"
            gridColumn="5 / 11"
            src={peloton7}
          />

          <GridItem
            alt={`beautiful peloton flooring 4`}
            data-speed="1.3"
            gridRow="1 / 4"
            gridColumn="1 / 4"
            src={peloton10}
          />
        </Grid>
      </WorksModal>

      <MarqueeSection text="Reliable" />

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
            alt={`beautiful 196 Orchard job flooring 1`}
            data-speed="1.2"
            gridRow="1 / 6"
            gridColumn="1 / 5"
            src={gridImage8}
          />

          <GridItem
            alt={`beautiful 196 Orchard job flooring 2`}
            data-speed="1.1"
            gridRow="3 / 11"
            gridColumn="4 / 8"
            src={gridImage6}
          />

          <GridItem
            alt={`beautiful 196 Orchard job flooring 3`}
            gridRow="1 / 5"
            gridColumn="8 / 11"
            src={gridImage9}
          />
          <GridItem
            alt={`beautiful 196 Orchard job flooring 4`}
            gridRow="6 / 11"
            gridColumn="8 / 11"
            src={gridImage5}
          />

          <GridItem
            alt={`beautiful 196 Orchard job flooring 5`}
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
            alt={`beautiful Gabriela Hearst job flooring 1`}
            data-speed="1.1"
            gridRow="1 / 10"
            gridColumn="1 / 6"
            src={gridImage10}
          />

          <GridItem
            alt={`beautiful Gabriela Hearst job flooring 2`}
            gridRow="1 / 11"
            gridColumn="6 / 11"
            src={gridImage11}
          />

          <GridItem
            alt={`beautiful Gabriela Hearst job flooring 3`}
            data-speed="1.3"
            gridRow="1 / 4"
            gridColumn="8 / 11"
            src={gridImage12}
          />

          <GridItem
            alt={`beautiful Gabriela Hearst job flooring 4`}
            gridRow="8 / 11"
            gridColumn="2 / 4"
            src={gridImage13}
          />
          <GridItem
            alt={`beautiful Gabriela Hearst job flooring 5`}
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
            alt={`beautiful gucci job flooring 1`}
            data-speed="1.3"
            gridRow="1 / 7"
            gridColumn="6 / 11"
            src={gridImage17}
          />

          <GridItem
            alt={`beautiful gucci job flooring 2`}
            data-speed="0.9"
            gridRow="4 / 11"
            gridColumn="2 / 7"
            src={gridImage18}
          />

          <GridItem
            alt={`beautiful gucci job flooring 3`}
            gridRow="5 / 11"
            gridColumn="8 / 11"
            src={gridImage20}
          />
          <GridItem
            alt={`beautiful gucci job flooring 4`}
            gridRow="7 / 10"
            gridColumn="1 / 3"
            src={gridImage21}
          />
          <GridItem
            alt={`beautiful gucci job flooring 5`}
            data-speed="1.2"
            gridRow="9 / 11"
            gridColumn="5 / 8"
            src={gridImage16}
          />
          <GridItem
            alt={`beautiful gucci job flooring 6`}
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
      >
        <WorksModal slides={workSlides.all}>
          <Link
            as="button"
            pos="relative"
            fontSize={{ base: "lg", sm: "lg", md: "xl", lg: "xl" }}
            display="flex"
            alignItems="center"
            maxW="max-content"
            py="2"
            px="4"
            bgColor="brand.500"
            color="brand.100"
            border="1px solid #213a30"
          >
            More Works
            <Icon as={IoOpen} ml="2" />
          </Link>
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
  );
};

export default Works;

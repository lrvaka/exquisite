import NextImage from "next/image"
import { Box, Flex, Grid, Container, Text } from "@chakra-ui/react"
import SVGArrow from "../ui/SVGArrow"
import { useContext, useEffect, useRef } from "react"
import GsapContext from "../../store/gsap-context"
import gsap from "gsap"
import useArrayRef from "../hooks/useArrayRef"
import SectionHeading from "../ui/SectionHeading"
import aboutImage from "../../public/images/about.jpg"
import aboutImage1 from "../../public/images/about-1.png"
import aboutImage2 from "../../public/images/about-2.jpg"

const AboutUsSection = () => {
  const [imageRefs, setImageRefs] = useArrayRef()
  const { smoother } = useContext(GsapContext)
  const containerRef = useRef()
  const leftRef = useRef()
  const rightRef = useRef()

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    let animation

    gsap.set(imageRefs.current, {
      autoAlpha: 0.1,
      scale: 0.75,
      clipPath: "inset(100% 0 0 0)",
    })

    // Target ALL descendants with the class of .box
    imageRefs.current.forEach((image) => {
      console.log("image animated")
      animation = gsap.to(image, {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        scrollTrigger: {
          trigger: image, // this will use the first box as the trigger
          scrub: true,
          end: "bottom bottom",
          onLeave: (self) => self.kill(false, true),
        },
      })
    })

    gsap.set(leftRef.current, {
      x: -50,
      opacity: 0.1,
      scale: 0.75,
      clipPath: "inset(100% 0 0 0)",
    })

    let leftP = gsap.to(leftRef.current, {
      x: 0,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      ease: "power4.out",
      scrollTrigger: leftRef.current,
      duration: 1,
    })

    gsap.set(rightRef.current, {
      x: 50,
      opacity: 0.1,
      scale: 0.75,
      clipPath: "inset(100% 0 0 0)",
    })

    let rightP = gsap.to(rightRef.current, {
      x: 0,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power4.out",
      scale: 1,
      scrollTrigger: rightRef.current,
      duration: 1, // this will use the first box as the trigger
    })

    return () => {
      rightP.kill()
      leftP.kill()
      animation.kill()
    }
  }, [])

  return (
    <>
      <Container
        maxW="container.xl"
        px="4"
        py="20"
        pb={["20", "20", "20", "40"]}
        overflowX="hidden"
      >
        <SectionHeading pb="10">
          Fitting floors for <br /> a multitude of projects
        </SectionHeading>

        <Flex
          w="100%"
          pb="8"
          gap={["0", "0", "0", "24"]}
          flexDir={["column", "column", "column", "row"]}
          maxW={["80vw", "80vw", "80vw", "none"]}
        >
          <Text
            ref={leftRef}
            pb="9"
            fontSize={["1rem", "1rem", "1rem", "1.25rem"]}
            color="white"
            fontWeight="400"
            lineHeight="normal"
            w={["100%", "100%", "100%", "50%"]}
          >
            Whether you&apos;re an architect, designer, developer or flooring
            contractor, Exquisite Wood Floors offers you a solution designed to
            perfectly match the style, requirements and budget of your project.
            We are proud of the work we do, and our clients are more than
            delighted.
          </Text>
          <Text
            fontSize={["1rem", "1rem", "1rem", "1.25rem"]}
            color="white"
            fontWeight="400"
            lineHeight="normal"
            ref={rightRef}
            w={["100%", "100%", "100%", "50%"]}
          >
            We owe our success to our deep knowledge base of wood selection, the
            skills of our enthusiastic team, and the specialized technologies
            and techniques we have at our disposal.
          </Text>
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
        ref={containerRef}
      >
        <Box
          ref={setImageRefs}
          pos="relative"
          gridRow={["4 / 5", "4 / 5", "4 / 5", "3 / 5"]}
          gridColumn="20 / 26"
          overflow="hidden"
          visibility="hidden"
        >
          <Box data-speed="auto" pos="relative" w="100%" h="160%">
            <NextImage
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              src={aboutImage1}
            />
          </Box>
        </Box>
        <Box
          ref={setImageRefs}
          pos="relative"
          gridRow="1 / 5"
          gridColumn="8 / 19"
          overflow="hidden"
          visibility="hidden"
        >
          <Box data-speed="auto" pos="relative" w="100%" h="160%">
            <NextImage
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              src={aboutImage2}
            />
          </Box>
        </Box>
        <Box
          ref={setImageRefs}
          pos="relative"
          gridRow={["1 / 2", "1 / 2", "1 / 2", "1 / 3"]}
          gridColumn="1 / 7"
          overflow="hidden"
          visibility="hidden"
        >
          <Box data-speed="auto" pos="relative" w="100%" h="160%">
            <NextImage
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              src={aboutImage}
            />
          </Box>
        </Box>
      </Grid>
    </>
  )
}

export default AboutUsSection

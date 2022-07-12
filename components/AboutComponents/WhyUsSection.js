import useArrayRef from "../hooks/useArrayRef"
import { useLayoutEffect, useRef, forwardRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { Box, Flex, Text, Heading } from "@chakra-ui/react"
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect"
import WhyUsSectionItem from "./WhyUsSectionItem"

const WhyUsSection = () => {
  const containerRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.set(containerRef.current.children, {
      zIndex: (i, target, targets) => targets.length - i,
    })

    gsap.to(containerRef.current.children, {
      yPercent: -100,
      ease: "none",
      stagger: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
      },
    })
    return () => {}
  }, [])

  return (
    <Box pos="relative">
      <Box
        ref={containerRef}
        w="100vw"
        h="100vh"
        pos="relative"
        top="0"
        left="0"
        overflow="hidden"
      >
        <Flex
          fontSize="2xl"
          textAlign="center"
          color="black"
          fontWeight="400"
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          lineHeight="normal"
          pos="absolute"
          bgColor="brand.500"
        >
          <Heading
            color="brand.100"
            fontSize={{ base: "6xl", xl: "7xl", "2xl": "9xl" }}
            fontWeight="900"
            lineHeight="100%"
            textAlign="center"
          >
            Why Work With Us?
          </Heading>
        </Flex>
        <WhyUsSectionItem color="brand.200" bgColor="brand.400">
          We are experts in all things flooring
        </WhyUsSectionItem>

        <WhyUsSectionItem color="brand.100" bgColor="brand.300">
          We use only the highest quality materials and products
        </WhyUsSectionItem>

        <WhyUsSectionItem color="brand.500" bgColor="brand.200">
          We have a wide variety of flooring options to choose from
        </WhyUsSectionItem>

        <WhyUsSectionItem color="black" bgColor="brand.100">
          We offer competitive rates and excellent customer service
        </WhyUsSectionItem>
      </Box>
    </Box>
  )
}

export default WhyUsSection

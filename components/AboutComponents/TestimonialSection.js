import { Flex, Box, Heading } from "@chakra-ui/react"
import TestimonialSlider from "./TestimonialSlider"
import ParallaxImage from "../ui/ParallaxImage"
import image from "../../public/images/wood.jpeg"

const TestimonialSection = () => {
  return (
    <Flex gap={12} flexDir={{ base: "column-reverse", md: "row" }} mb="24">
      <Flex
        overflowY="hidden"
        pos="relative"
        minH="100%"
        flex={{ base: 1.5, "2xl": 1.25 }}
      >
        <ParallaxImage src={image} />
      </Flex>
      <Flex
        px="4"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        bgColor="brand.500"
        flex={{ base: 0, md: 1.5 }}
        py={{ base: 20 }}
      >
        <Box pos="relative" maxW="800px">
          <Heading
            mb="10"
            color="brand.100"
            fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}
            fontWeight="900"
            lineHeight="100%"
            borderBottom="1px #979a6f solid"
          >
            Testimonials
          </Heading>
          <TestimonialSlider />
        </Box>
      </Flex>
    </Flex>
  )
}

export default TestimonialSection

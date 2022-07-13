import { Box, Flex, Grid, Text } from "@chakra-ui/react"
import ParallaxImage from "../ui/ParallaxImage"
import image from "../../public/images/test-section.png"

const TestimonialSection = () => {
  return (
    <Grid
      my="24"
      minH={{ base: "300px", md: "500px" }}
      overflowY="hidden"
      pos="relative"
    >
      <ParallaxImage alt="backdrop for testimonial" src={image} />
      <Flex
        flexDir="column"
        justifyContent="center"
        w="100%"
        h="100%"
        px="8"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        pos="absolute"
        maxW="800px"
      >
        <Text
          as="blockquote"
          color="white"
          fontSize={{ base: "lg", md: "3xl" }}
          _css={{ hangingPunctuation: "first last" }}
        >
          &quot;The service provided by the people at EWF is unmatched, they
          were highly customer-oriented, and ensured that I had the best
          experience every step of the way. I love my new floors!&quot;
        </Text>
        <Text color="brand.100" fontStyle="italic" textAlign="right">
          - M. Holmes, Manhattan NY
        </Text>
      </Flex>
    </Grid>
  )
}

export default TestimonialSection

import { Box, Flex, Grid, Text } from "@chakra-ui/react"
import ParallaxImage from "../ui/ParallaxImage"
import image from "../../public/images/test-section.png"

const TestimonialSection = () => {
  return (
    <Grid mt="24" minH="500px" overflowY="hidden" pos="relative">
      <ParallaxImage src={image} />
      <Flex
        flexDir="column"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        pos="absolute"
      >
        <Text
          as="blockquote"
          color="brand.100"
          fontSize="3xl"
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

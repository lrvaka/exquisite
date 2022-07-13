import { Box, Flex, Heading } from "@chakra-ui/react"
import ParallaxImage from "../ui/ParallaxImage"
import image from "../../public/images/about.jpeg"

const HeaderSection = () => (
  <Box pt={{ base: "130px", md: "180px" }}>
    <Flex
      minH={{ base: "200px", lg: "400px" }}
      overflowY="hidden"
      pos="relative"
      m="0 auto"
      justifyContent="center"
      alignItems="center"
    >
      <ParallaxImage src={image} alt="man doing wood flooring msg backdrop" />
      <Heading
        p="6"
        color="brand.100"
        fontSize={{ base: "4xl", lg: "8xl" }}
        textAlign="center"
        fontWeight="black"
        pos="relative"
      >
        Flooring services
        <br /> with a peace of mind
      </Heading>
    </Flex>
  </Box>
)

export default HeaderSection

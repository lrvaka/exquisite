import { Box, Flex, Heading } from "@chakra-ui/react"
import ParallaxImage from "../ui/ParallaxImage"
import image from '../../public/images/about.png'

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
      <ParallaxImage src={image} />
      <Heading
        color="brand.200"
        fontSize={{ base: "2xl", lg: "6xl" }}
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

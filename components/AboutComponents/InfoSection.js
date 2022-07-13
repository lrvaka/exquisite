import { Flex, Box, Heading, Text } from "@chakra-ui/react"
import NextImage from "next/image"
import { useContext } from "react"
import SVGArrow from "../ui/SVGArrow"
import GsapContext from "../../store/gsap-context"
import ParallaxImage from "../ui/ParallaxImage"
import image from "../../public/images/planks.jpeg"

const InfoSection = () => {
  const { smoother } = useContext(GsapContext)

  return (
    <Flex
      m="0 auto"
      pos="relative"
      mt="24"
      mb="24"
      gap={{ base: 12, sm: 0 }}
      minH={{ base: "1000px", md: "500px" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        flex={{ base: "0", md: "1" }}
        bgColor="brand.500"
      >
        <Box
          maxW="800px"
          alignSelf="center"
          px="4"
          py={{ base: 20, md: 0 }}
          pos="relative"
        >
          <Box
            pos="absolute"
            top="0"
            right="0"
            h={{ base: "300px", lg: "400px", "2xl": "500px" }}
            w={{ base: "300px", lg: "400px", "2xl": "500px" }}
          >
            <NextImage
              src="/images/stamp.png"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Heading
            mb="10"
            color="brand.100"
            fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}
            fontWeight="900"
            lineHeight="100%"
            borderBottom="1px #979a6f solid"
          >
            About Us
          </Heading>

          <Text
            fontSize={{ base: "md", md: "xl" }}
            color="white"
            fontWeight="400"
            lineHeight="normal"
            mb="12"
          >
            Exquisite Wood Floors is a family-owned and operated flooring
            company with over 25 years of experience. We love what we do, and it
            shows in our work. From refinishing to repair to installation, we
            take great care in each project and always focus on the details. Our
            professionalism and attention to detail sets us apart and makes us
            the perfect choice for your flooring needs. Contact us today to
            schedule a consultation!
          </Text>
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
            <Box fontSize={["1rem", "1rem", "1rem", "1.25rem"]}>Contact us</Box>
            <Box alignSelf="center">
              <SVGArrow fill="#cdcda6" />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex
        minH="100%"
        flex={{ base: 1, "2xl": 1.5 }}
        overflowY="hidden"
        pos="relative"
        justifyContent="center"
        alignItems="center"
      >
        <ParallaxImage src={image} />
      </Flex>
    </Flex>
  )
}

export default InfoSection

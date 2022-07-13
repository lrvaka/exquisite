import { Flex, Heading, Link, Icon } from "@chakra-ui/react"
import NextLink from "next/link"
import ParallaxImage from "../ui/ParallaxImage"
import { BsArrowRight } from "react-icons/bs"
import image from "../../public/images/view-works.jpeg"

const PortfolioSection = () => (
  <Flex
    overflowY="hidden"
    pos="relative"
    minH="500px"
    mt="-700px"
    mb="24"
    minW="100%"
  >
    <ParallaxImage alt="beautiful wood flooring in home backdrop" src={image} />
    <Flex flexDir="column" pos="absolute" top="calc(75% - 142px)" left="10%">
      <Heading
        color="brand.100"
        fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}
        fontWeight="900"
        lineHeight="100%"
        borderBottom="1px #979a6f solid"
      >
        Portfolio
      </Heading>
      <NextLink href="/portfolio" passHref>
        <Link
          fontSize={{ base: "md", sm: "md", md: "md", lg: "lg" }}
          display="flex"
          alignItems="center"
          maxW="max-content"
          py="2"
          px="4"
          bgColor="brand.500"
          color="brand.100"
          border="1px solid #213a30"
        >
          View Projects
          <Icon as={BsArrowRight} ml="2" />
        </Link>
      </NextLink>
    </Flex>
  </Flex>
)

export default PortfolioSection

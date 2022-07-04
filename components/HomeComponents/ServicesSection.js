import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react"
import SectionHeading from "../ui/SectionHeading"
import GsapContext from "../../store/gsap-context"
import { useContext } from "react"
import { HiArrowNarrowRight } from "react-icons/hi"

const ServicesItem = ({ heading, children }) => {
  const { smoother } = useContext(GsapContext)
  return (
    <Flex
      textAlign="center"
      flexDir="column"
      maxW={{ md: "300px", "2xl": "350px" }}
      bgColor="brand.400"
      gap={4}
      p="10"
    >
      <Box flexGrow={1}>
        <Heading
          pb={4}
          color="brand.200"
          fontSize={{ sm: "3xl", md: "4xl", "2xl": "5xl" }}
        >
          {heading}
        </Heading>
        <Text color="white" fontSize={{ sm: "md", md: "lg", "2xl": "2xl" }}>
          {children}
        </Text>
      </Box>
      <Flex
        as="button"
        textAlign="left"
        fontWeight="700"
        alignItems="center"
        justifyContent="center"
        color="brand.200"
        onClick={() => {
          smoother.scrollTo("#contact", true, "center center")
        }}
        gap="2"
      >
        <Box fontSize={{ sm: "md", md: "md", "2xl": "2xl" }}>
          {`Get ${heading} Now`}
        </Box>
        <Icon as={HiArrowNarrowRight} />
      </Flex>
    </Flex>
  )
}

const ServicesSection = () => {
  return (
    <>
      <Flex pt="24" flexDir="column">
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          maxW="600px"
          textAlign="center"
          pb="20"
          alignSelf="center"
        >
          <SectionHeading color="brand.500">
            Got A Flooring Problem? We Have All The Solutions
          </SectionHeading>
          <Text fontSize="2xl">
            We cover everything that has to do with flooring, here are some of
            the services we offer.
          </Text>
        </Flex>

        <Flex
          justifyContent="space-between"
          gap="24"
          alignSelf="center"
          flexDir={["column", "column", "row"]}
        >
          <ServicesItem heading="Installation">
            We offer professional installation services for all types of wood
            flooring, from classic hardwoods to more exotic options. No matter
            what your style or budget is, we can help you find the perfect
            flooring solution for your project.
          </ServicesItem>

          <ServicesItem heading="Refinishing">
            We specialize in making all types of floors look brand new, and our
            work is guaranteed to impress. Whether you have hardwood, laminate,
            or any other type of flooring, we can make it look like new again.
          </ServicesItem>

          <ServicesItem heading="Repair">
            There&apos;s nothing like coming home to a beautiful,
            well-maintained wood floor. It gives your space an instant feeling
            of luxury and refinement. But what happens when something goes wrong
            and your wood floor is damaged? That&apos;s where we come in.
          </ServicesItem>
        </Flex>
      </Flex>
    </>
  )
}

export default ServicesSection

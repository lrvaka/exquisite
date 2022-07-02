import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import SectionHeading from "../ui/SectionHeading"

const ServicesSection = () => {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <SectionHeading>Services</SectionHeading>
      <Flex flexDir="column">
        <Heading>01 - Installation</Heading>
        <Text>01 - Installation</Text>
      </Flex>
    </Flex>
  )
}

export default ServicesSection

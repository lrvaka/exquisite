import { Heading, Text } from "@chakra-ui/react"

export const SectionHeading = ({ children, ...props }) => (
  <Heading
    fontSize="2rem"
    as="h2"
    fontWeight="700"
    color="brand.100"
    lineHeight="none"
    {...props}
  >
    {children}
  </Heading>
)

export const SectionParagraph = ({ children, ...props }) => (
  <Text
    fontSize="1rem"
    color="white"
    fontWeight="400"
    lineHeight="normal"
    {...props}
  >
    {children}
  </Text>
)

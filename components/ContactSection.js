import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react"
import SVGArrow from "./SVGArrow"
import { SectionHeading } from "./SectionText"
import NextImage from "next/image"

const ContactSection = () => (
  <>
    <Box pos="absolute" bottom="0" transform="translate(20%, -5%)" zIndex="1">
      <NextImage src="/images/stamp.png" width="797" height="797" />
    </Box>

    <Box px="4" py="20" bgColor="brand.100" pos="relative">
      <SectionHeading color="brand.500" pb="10">
        Let's build together
      </SectionHeading>
      <Stack spacing={12} pos="relative" zIndex="2">
        <FormControl isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            type="text"
            variant="flushed"
            borderColor="brand.500"
            errorBorderColor="red"
            focusBorderColor="brand.300"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            variant="flushed"
            borderColor="brand.500"
            errorBorderColor="red"
            focusBorderColor="brand.300"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            id="phone"
            type="tel"
            variant="flushed"
            borderColor="brand.500"
            errorBorderColor="red"
            focusBorderColor="brand.300"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="enquiry">Enquiry</FormLabel>
          <Textarea
            id="enquiry"
            resize="none"
            type="text"
            variant="flushed"
            borderColor="brand.500"
            errorBorderColor="red"
            focusBorderColor="brand.300"
          />
        </FormControl>
        <Flex
          as="button"
          textAlign="left"
          fontWeight="700"
          color="brand.300"
          gap="4"
          w="max-content"
        >
          <Box>Send now</Box>
          <Box alignSelf="center">
            <SVGArrow style={{ filter: "invert(100%)" }} />
          </Box>
        </Flex>
      </Stack>
    </Box>
  </>
)

export default ContactSection

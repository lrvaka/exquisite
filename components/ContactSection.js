import {
  Box,
  Flex,
  FormControl,
  Container,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react"
import Parallax from "./Parallax"
import SVGArrow from "./SVGArrow"
import { SectionHeading } from "./SectionText"
import NextImage from "next/image"
import { IconButton } from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs"

const ContactSection = () => (
  <Box bgColor="brand.100" id="contact">
    <Box
      display={["none"]}
      pos="absolute"
      bottom="0"
      transform="translate(20%, -150%)"
      zIndex="1"
    >
      <NextImage src="/images/stamp.png" width="797" height="797" />
    </Box>

    <Container
      display="flex"
      maxW="container.xl"
      justifyContent="center"
      w="100%"
      flexDir={["column", "column", "column", "row"]}
      px="4"
      pt="20"
      pb="10"
      pos="relative"
      gap={[0,0,0,24]}
    >
      <Box>
        <SectionHeading color="brand.500" pb="10">
          Let&apos;s build together
        </SectionHeading>
        <Stack spacing={12} pos="relative" zIndex="2" pb="14">
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
              maxLength="1500"
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
              <SVGArrow fill="#979a6f" />
            </Box>
          </Flex>
        </Stack>
      </Box>
      <Flex maxW={["none", "none", "none", "20vw" ]} alignSelf="center" flexDir="column" textAlign="center" gap="4">
        <SectionHeading color="brand.500" fontSize="1.5rem">
          info@ewfny.com
        </SectionHeading>
        <SectionHeading color="brand.500" fontSize="1.5rem">
          +1 (914) 237 7898
        </SectionHeading>
        <SectionHeading color="brand.500" fontSize="1.5rem">
          941 Mclean Avenue, Suite 472, Yonkers, NY 10707
        </SectionHeading>
        <IconButton
          icon={<BsInstagram />}
          alignSelf="center"
          size="md"
          colorScheme="green"
          width="max-content"
          variant="ghost"
          _focus={{ backgroundColor: "transparent" }}
          _active={{ backgroundColor: "transparent" }}
          _hover={{ backgroundColor: "transparent" }}
        />
      </Flex>
    </Container>
  </Box>
)

export default ContactSection

import {
  Box,
  Flex,
  FormControl,
  Container,
  FormLabel,
  Input,
  Stack,
  Link,
  Textarea,
  Heading,
  Icon,
  Text,
  Popover,
  PopoverTrigger,
  useClipboard,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react"
import SVGArrow from "../ui/SVGArrow"
import { IconButton } from "@chakra-ui/react"
import { AiOutlineMail } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"
import { HiPhone } from "react-icons/hi"
import { IoLocationOutline } from "react-icons/io5"
import { useForm, ValidationError } from "@formspree/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useState } from "react"

const ContactInfoText = ({ children, contactInfoTextColor = "brand.500" }) => (
  <Heading
    as="h3"
    fontWeight="700"
    lineHeight="none"
    color={contactInfoTextColor}
    fontSize="1.5rem"
    textAlign="left"
  >
    {children}
  </Heading>
)

const ContactInfoSection = ({ contactInfoTextColor, logoColor }) => {
  const { hasCopied, onCopy } = useClipboard("+1 (914)-237-7898")
  return (
    <Flex
      maxW={["none", "none", "none", "20vw"]}
      alignSelf="center"
      flexDir="column"
      textAlign="center"
      gap="4"
    >
      <Flex justifyContent="left" gap="2" alignItems="center">
        <Icon as={AiOutlineMail} h={4} w={4} color={logoColor} />
        <ContactInfoText contactInfoTextColor={contactInfoTextColor}>
          info@ewfny.com
        </ContactInfoText>
      </Flex>
      <Flex justifyContent="left" gap="2" alignItems="center">
        <Icon as={HiPhone} h={4} w={4} color={logoColor} />
        <ContactInfoText contactInfoTextColor={contactInfoTextColor}>
          +1 (914) 237 7898
        </ContactInfoText>
      </Flex>
      <Link href="https://www.google.com/maps/place/941+McLean+Ave+%23472,+Yonkers,+NY+10704/@40.9034428,-73.8675617,19z/data=!3m1!4b1!4m5!3m4!1s0x89c2f2e70ca2a027:0x2a5bc5f5c5d874f9!8m2!3d40.9034428!4d-73.8670145">
        <Flex justifyContent="left" gap="2" alignItems="center">
          <Icon
            alignSelf="center"
            as={IoLocationOutline}
            h={4}
            w={4}
            color={logoColor}
          />
          <ContactInfoText contactInfoTextColor={contactInfoTextColor}>
            941 Mclean Avenue, Suite 472, Yonkers, NY 10707
          </ContactInfoText>
        </Flex>
      </Link>
      <Link
        href="https://www.instagram.com/exquisitewoodfloors/"
        target="_blank"
      >
        <IconButton color={logoColor} icon={<BsInstagram />} />
      </Link>
    </Flex>
  )
}

const ContactForm = ({ contactFormVariant, formLabelColor }) => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM)

  if (state.succeeded) {
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
    return (
      <Container
        maxW="sm"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        mb={["12", "0"]}
        pb={["0", "36"]}
        pt={["0", "10"]}
        color={formLabelColor}
      >
        <Text fontSize="xl" lineHeight="100%">
          Thank you for taking the first steps towards a more Exquisite living
          experience. We will be in touch with you shortly.
        </Text>
      </Container>
    )
  }

  return (
    <Stack
      as="form"
      onSubmit={handleSubmit}
      spacing={12}
      pos="relative"
      zIndex="2"
      pb="14"
    >
      <FormControl isRequired>
        <FormLabel color={formLabelColor} htmlFor="name">
          Name
        </FormLabel>
        <Input
          color={formLabelColor}
          variant={contactFormVariant}
          id="name"
          name="name"
          type="text"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel color={formLabelColor} htmlFor="email">
          Email
        </FormLabel>
        <Input
          color={formLabelColor}
          variant={contactFormVariant}
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </FormControl>
      <FormControl>
        <FormLabel color={formLabelColor} htmlFor="phone">
          Phone
        </FormLabel>
        <Input
          color={formLabelColor}
          variant={contactFormVariant}
          id="phone"
          name="phone"
          type="tel"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel color={formLabelColor} htmlFor="enquiry">
          Enquiry
        </FormLabel>
        <Textarea
          variant={contactFormVariant}
          color={formLabelColor}
          id="message"
          name="message"
          resize="none"
          type="text"
          maxLength="1500"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </FormControl>
      <Flex
        as="button"
        type="submit"
        textAlign="left"
        fontWeight="700"
        color="brand.300"
        gap="4"
        w="max-content"
        disabled={state.submitting}
      >
        <Box>Send now</Box>
        <Box alignSelf="center">
          <SVGArrow fill="#979a6f" />
        </Box>
      </Flex>
    </Stack>
  )
}

const ContactSection = ({
  headingColor = "brand.500",
  contactFormVariant,
  contactInfoTextColor,
  bgColor = "brand.100",
  formLabelColor = "black",
  logoColor,
  ...props
}) => (
  <Container
    id="contact"
    bgColor={bgColor}
    display="flex"
    maxW="container.xl"
    justifyContent="center"
    flexDir={["column", "column", "column", "row"]}
    px="4"
    pt="20"
    pb="10"
    gap={[0, 0, 0, 24]}
    {...props}
  >
    <Box>
      <Heading
        fontSize={["2rem", "2rem", "2rem", "2.5rem"]}
        as="h2"
        fontWeight="700"
        lineHeight="none"
        color={headingColor}
        pb="10"
      >
        Let&apos;s build together
      </Heading>
      <ContactForm
        formLabelColor={formLabelColor}
        contactFormVariant={contactFormVariant}
      />
    </Box>
    <ContactInfoSection
      logoColor={logoColor}
      contactInfoTextColor={contactInfoTextColor}
    />
  </Container>
)

export default ContactSection

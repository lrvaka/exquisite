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
  Text,
} from "@chakra-ui/react"
import SVGArrow from "../ui/SVGArrow"
import { IconButton } from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs"
import { useForm, ValidationError } from "@formspree/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

const ContactInfoText = ({ children, contactInfoTextColor = "brand.500" }) => (
  <Heading
    as="h3"
    fontWeight="700"
    lineHeight="none"
    color={contactInfoTextColor}
    fontSize="1.5rem"
  >
    {children}
  </Heading>
)

const ContactInfoSection = ({ contactInfoTextColor, logoColor }) => (
  <Flex
    maxW={["none", "none", "none", "20vw"]}
    alignSelf="center"
    flexDir="column"
    textAlign="center"
    gap="4"
  >
    <ContactInfoText contactInfoTextColor={contactInfoTextColor}>
      info@ewfny.com
    </ContactInfoText>
    <ContactInfoText contactInfoTextColor={contactInfoTextColor}>
      +1 (914) 237 7898
    </ContactInfoText>
    <ContactInfoText contactInfoTextColor={contactInfoTextColor}>
      941 Mclean Avenue, Suite 472, Yonkers, NY 10707
    </ContactInfoText>
    <Link href="https://www.instagram.com/exquisitewoodfloors/" target="_blank">
      <IconButton color={logoColor} icon={<BsInstagram />} />
    </Link>
  </Flex>
)

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

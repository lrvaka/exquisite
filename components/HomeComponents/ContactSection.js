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
} from "@chakra-ui/react"
import SVGArrow from "../ui/SVGArrow"
import { IconButton } from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs"

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

const ContactForm = ({ contactFormVariant, formLabelColor }) => (
  <Stack spacing={12} pos="relative" zIndex="2" pb="14">
    <FormControl isRequired>
      <FormLabel color={formLabelColor} htmlFor="name">
        Name
      </FormLabel>
      <Input
        color={formLabelColor}
        variant={contactFormVariant}
        id="name"
        type="text"
      />
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
      />
    </FormControl>
    <FormControl>
      <FormLabel color={formLabelColor} htmlFor="phone">
        Phone
      </FormLabel>
      <Input
        color={formLabelColor}
        variant={contactFormVariant}
        id="phone"
        type="tel"
      />
    </FormControl>
    <FormControl isRequired>
      <FormLabel color={formLabelColor} htmlFor="enquiry">
        Enquiry
      </FormLabel>
      <Textarea
        variant={contactFormVariant}
        color={formLabelColor}
        id="enquiry"
        resize="none"
        type="text"
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
)

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

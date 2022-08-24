import { Box, Flex, Link, Container } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import GsapContext from "../../store/gsap-context";
import { useContext } from "react";
import { Icon } from "@chakra-ui/react";
import { HiPhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { useRouter } from "next/router";
import NavbarItems from "./Navbar/NavbarItems";

const Navbar = () => {
  const { smoother } = useContext(GsapContext);
  const router = useRouter();

  return (
    <Box
      w="100%"
      as="nav"
      pos="fixed"
      zIndex="1"
      bgColor={{
        base: "rgba(219, 226, 187, 0)",
        md: "rgba(219, 226, 187, 0.5)",
      }}
    >
      <Container pos="relative" maxW="2300px" p="0">
        <Flex justifyContent="space-between" p="4">
          <NextLink href="/" passHref>
            <Link
              aria-label="home button"
              maxW={{ base: "90px", md: "90px", "2xl": "125px" }}
            >
              <NextImage
                alt="ewf logo"
                src="/images/dark-logo.png"
                width={312}
                height={348}
              />
            </Link>
          </NextLink>
          <Flex
            alignSelf="center"
            alignItems="center"
            flexDirection={["row-reverse", "row"]}
          >
            <NavbarItems />
            <Link
              as="button"
              onClick={() =>
                smoother.scrollTo("#contact", true, "center center")
              }
              fontFamily="quincy-cf"
              fontWeight="700"
              p="2"
              fontSize={{ base: "lg", "2xl": "2xl" }}
              color="white"
              bgColor="brand.400"
              display="flex"
              maxW="max-content"
              alignItems="center"
            >
              Contact
              <Icon as={AiOutlineMail} ml="2" />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;

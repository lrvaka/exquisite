import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import SectionHeading from "../ui/SectionHeading";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import GsapContext from "../../store/gsap-context";
import { useContext } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const ServicesItem = ({ heading, children }) => {
  const { smoother } = useContext(GsapContext);
  return (
    <Flex
      flex={1}
      textAlign="center"
      flexDir="column"
      bgColor="brand.400"
      gap={4}
      p="10"
    >
      <Box flex="1" maxW="500px" m="0 auto" display="flex" flexDir="column">
        <Heading
          pb={4}
          color="brand.200"
          fontSize={{ base: "2xl", md: "3xl", "2xl": "5xl" }}
        >
          {heading}
        </Heading>
        <Text
          alignSelf="center"
          justifySelf="center"
          color="white"
          fontSize={{ base: "md", md: "lg" }}
        >
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
          smoother.scrollTo("#contact", true, "center center");
        }}
        gap="2"
      >
        <Box fontSize={{ base: "md", md: "lg", "2xl": "2xl" }}>
          {`Get ${heading} Now`}
        </Box>
        <Icon as={HiArrowNarrowRight} />
      </Flex>
    </Flex>
  );
};

const ServicesSection = () => {
  const containerRef = useRef();
  const subHeadRef = useRef();
  useEffect(() => {
    gsap.set(containerRef.current.children, { autoAlpha: 0, y: 50 });
    gsap.set(subHeadRef.current, { autoAlpha: 0 });

    let ani = gsap.to(containerRef.current.children, {
      y: 0,
      autoAlpha: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });

    let subAni = gsap.to(subHeadRef.current, {
      autoAlpha: 1,
      ease: "power4.out",
      delay: 0.5,
      duration: 1.5,
      scrollTrigger: {
        trigger: subHeadRef.current,
      },
    });
    return () => {
      ani.kill();
      subAni.kill();
    };
  }, []);
  return (
    <>
      <Flex flexDir="column" id="services">
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          maxW="600px"
          textAlign="center"
          pb="10"
          alignSelf="center"
          gap="1"
          px="4"
        >
          <SectionHeading color="brand.500">
            Got A Wood Flooring Problem? <br />
            We Have All The Solutions
          </SectionHeading>

          <Text ref={subHeadRef} fontSize={{ base: "md", sm: "lg" }}>
            We cover everything that has to do with wood flooring, here are some
            of the services we offer.
          </Text>
        </Flex>

        <Flex
          justifyContent="space-between"
          gap="4"
          alignSelf="center"
          flexDir={["column", "column", "column", "row"]}
          minW="100%"
          px={[0, 6, 12]}
          ref={containerRef}
        >
          <ServicesItem heading="Installation">
            We offer professional installation services for all types of wood
            flooring. No matter what your style or budget is, we can help you
            find the perfect flooring solution for your project.
          </ServicesItem>

          <ServicesItem heading="Refinishing">
            After some wear and tear, a refinishing on your wood floors is
            needed. We specialize in making your wood floors look brand new, and
            our work is guaranteed to impress.
          </ServicesItem>

          <ServicesItem heading="Repair">
            There&apos;s nothing like seeing a beautiful, well-maintained wood
            floor. But what happens when something goes wrong and your wood
            floor is damaged? That&apos;s where we come in.
          </ServicesItem>

          <ServicesItem heading="Maintenance">
            Sometimes we need our floors to look brand new at all times. We
            offer constant upkeep and maintenance to your wood floors, making
            sure they stay at peak quality year round.
          </ServicesItem>
        </Flex>
      </Flex>
    </>
  );
};

export default ServicesSection;

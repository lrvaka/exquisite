import NextImage from "next/image"
import { SectionParagraph } from "./ui/SectionText"
import { Box, Flex, Grid, Container } from "@chakra-ui/react"
import SVGArrow from "./ui/SVGArrow"
import Parallax from "./Parallax"
import ChakraBox from "./utils/ChakraBox"
import { useContext, useEffect, useRef } from "react"
import GsapContext from "../store/gsap-context"
import { AnimatedHeading } from "./ui/SectionText"
import useIsomorphicLayoutEffect from "./hooks/useIsomorphicLayoutEffect"
import gsap from "gsap"
import useArrayRef from "./hooks/useArrayRef"

const AboutUsSection = () => {
  const [imageRefs, setImageRefs] = useArrayRef()
  const { smoother } = useContext(GsapContext)
  const containerRef = useRef()
  const leftRef = useRef()
  const rightRef = useRef()

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) {
      return
    }

    let animation
    gsap.set(imageRefs.current, { autoAlpha: 1 })
    gsap.set(leftRef.current, { autoAlpha: 1 })
    gsap.set(rightRef.current, { autoAlpha: 1 })

    // Target ALL descendants with the class of .box
    imageRefs.current.forEach((image) => {
      animation = gsap.fromTo(
        image,
        {
          // this will animate ALL boxes
          opacity: 0.1,
          scale: 0.75,
          clipPath: "inset(100% 0 0 0)",
        },
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          scrollTrigger: {
            trigger: image, // this will use the first box as the trigger
            scrub: true,
            end: "bottom 75%",
            onLeave: (self) => self.kill(false, true),
          },
        }
      )
    })

    let leftP = gsap.fromTo(
      leftRef.current,
      {
        // this will animate ALL boxes
        opacity: 0.1,
        scale: 0.75,
        clipPath: "inset(100% 0 0 0)",
      },
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        scrollTrigger: {
          trigger: leftRef.current, // this will use the first box as the trigger
          scrub: true,
          end: "bottom 75%",
          onLeave: (self) => self.kill(false, true),
        },
      }
    )
    let rightP = gsap.fromTo(
      rightRef.current,
      {
        // this will animate ALL boxes
        opacity: 0.1,
        scale: 0.75,
        clipPath: "inset(100% 0 0 0)",
      },
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        scrollTrigger: {
          trigger: rightRef.current, // this will use the first box as the trigger
          scrub: true,
          end: "bottom 75%",
          onLeave: (self) => self.kill(false, true),
        },
      }
    )

    console.log(leftRef.current)
    console.log(rightRef.current)

    return () => {}
  }, [])

  return (
    <>
      <Container
        maxW="container.xl"
        px="4"
        py="20"
        pb={["20", "20", "20", "40"]}
        overflowX="hidden"
      >
        <Box as="h2" pb="10">
          <AnimatedHeading
            custom={0}
            title="Fitting &nbsp; floors &nbsp; for"
          />
          <AnimatedHeading
            custom={0}
            title="a &nbsp;multitude&nbsp; of &nbsp; projects"
          />
        </Box>
        <Flex
          w="100%"
          pb="8"
          gap={["0", "0", "0", "24"]}
          flexDir={["column", "column", "column", "row"]}
          maxW={["80vw", "80vw", "80vw", "none"]}
        >
          <SectionParagraph
            ref={leftRef}
            pb="9"
            w={["100%", "100%", "100%", "50%"]}
          >
            Whether you&apos;re an architect, designer, developer or flooring
            contractor, Exquisite Wood Floors offers you a solution designed to
            perfectly match the style, requirements and budget of your project.
            We are proud of the work we do, and our clients are more than
            delighted.
          </SectionParagraph>
          <SectionParagraph ref={rightRef} w={["100%", "100%", "100%", "50%"]}>
            We owe our success to our deep knowledge base of wood selection, the
            skills of our enthusiastic team, and the specialized technologies
            and techniques we have at our disposal.
          </SectionParagraph>
        </Flex>
        <Flex
          as="button"
          textAlign="left"
          fontWeight="700"
          color="brand.200"
          w="max-content"
          onClick={() => {
            smoother.scrollTo("#contact", true, "center center")
          }}
          gap="4"
        >
          <Box fontSize={["1rem", "1rem", "1rem", "1.25rem"]}>
            Connect with us
          </Box>
          <Box alignSelf="center">
            <SVGArrow fill="#cdcda6" />
          </Box>
        </Flex>
      </Container>
      <Grid
        minH={["300px", "400px", "500px", "700px"]}
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(25, 1fr)"
        maxW="1300px"
        m="0 auto"
        ref={containerRef}
      >
        <Box
          ref={setImageRefs}
          pos="relative"
          gridRow={["4 / 5", "4 / 5", "4 / 5", "3 / 5"]}
          gridColumn="20 / 26"
          overflow="hidden"
          visibility="hidden"
        >
          <Box data-speed="auto" pos="absolute" zIndex="-1" w="100%" h="160%">
            <NextImage
              src="/images/about-1.png"
              layout="fill"
              placeholder="blur"
              blurDataURL={`data:image/webp;base64,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`}
            />
          </Box>
        </Box>
        <Box
          ref={setImageRefs}
          pos="relative"
          gridRow="1 / 5"
          gridColumn="8 / 19"
          overflow="hidden"
          visibility="hidden"
        >
          <Box data-speed="auto" pos="absolute" zIndex="-1" w="100%" h="160%">
            <NextImage
              src="/images/about-2.jpg"
              layout="fill"
              placeholder="blur"
              blurDataURL={`data:image/webp;base64,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`}
              objectFit="cover"
            />
          </Box>
        </Box>
        <Box
          ref={setImageRefs}
          pos="relative"
          gridRow={["1 / 2", "1 / 2", "1 / 2", "1 / 3"]}
          gridColumn="1 / 7"
          overflow="hidden"
          visibility="hidden"
        >
          <Box data-speed="auto" pos="absolute" w="100%" h="160%" zIndex="-1">
            <NextImage
              src="/images/about.jpg"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={`data:image/webp;base64,UklGRjYGAABXRUJQVlA4WAoAAAAgAAAA2AEACQEASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCD4AwAAkDQAnQEq2QEKAT8RhLlXOLemI6Nz2ysQIglpbuAL/Y79UMXhQLA+KJ3Dk8v7oDExAiBlvvDYtfJS26ZgIgZb/iwOy27woC6+KHt3Ithuv8tHLYlNzuqHuXB6/yr7LNmgqXK1jQVLeKF5TodKg3YcRfUZ2litYlBMmgqWQIg7AT2VjRGqA3hIqA/dCb7lH3xmWK1hKioufmKzDIiC99skQ+sSQqoEQcoEPqwko2LgNc4FQNj6jKPrGgroMvxVRlnPTLE52dnSSrc492iZe9zUBovcaxwYEPImWEyaHEY2NcLLByLNw2nEGOm8ei1nLJRwhOhL4C8dfxwtiA8otbfq+WOivNXsiWsaHmBB4EalQhr8XhLmnTw5k+W+VhWOoJ+YgwVAtht6xJb5PQETTqsYolz+VK12XM2eJ5ZCp33UTs5YxYtNv/j4ADYm/VwKckbODWoVgGUfShWmSqqi6wvjLN2/ajwfzGcSfDW3hKIZKW+r9GcK0FckUfbUBIdf00MFhKELDYtfJxhah5fK319dfFD17to8F9aZKw3zbGWEMlPFxMK5zbo2bWmSsIgAAP7ruDLHYzZ4Wqiep6S25lJksLJM6o8GyywsETSVEFIeqv7hp3NM+wfILGP9XRpdu13uYmcVhaA3BE0w8MdWRlXGNxcK4RaQM4EWFeNLuN7joFUB5UwAA67O43rSLPuTyWzAVxUW2PccEKkhgy9LUVPJQXcpARwJPWPbz9cvAWkf+AXrCNvSJ7nz+QC/OVXFohAKPMMUK/OmagMuzExB7AOs4IwH6MKQ3/9pNw5ObCewCKXC+lzywg82gTqOUef02gNY37OaPwLV4JikURWhPDs6erJIxi27aFO6KasjJhieoSDgaRcq+BkEjyBQ50OzRIFqVlfj0f4Y771CRPiApn2gXhbNwtM6l99mUQfKbUJGrBsSSBDLBQhUTKDcOo1rTQiUM2/RBd+sGYVc/SMn0oCWlS/hkM1pBpsUXE9QCAzePP0L8e1GOcpwYlF7C4HXxHV6bwfPuH4OmrtX9HfkxtmAYzJewAyUo2KRxDm12vYN6EPjlBbe56YujWQqJL6cg6J0uXpwgq1Jb+djvAgxP6AApBW6zJxU2O/crLqSlmT+5KCMQcb+9fjv1jFYpYAoZR6qoX5s0ZWA8ZZcobLRatCBefvmzSHm/WAlMQaB988JbbyTe5q6MCV7WogB0GQ0vb9CmYSBYto7O+s+2QSRJthPm2cMA49fQImjIogJG0AAkOm6bwdPQBEcs4K7D21Z3BbMezHYQ+y9yJvJ0PI25AIFp8GAxw2UrhQQiTyyASvD9HvnzTelEAALS1nQQA8YecIguihysaAAAAA=`}
            />
          </Box>
        </Box>
      </Grid>
    </>
  )
}

export default AboutUsSection

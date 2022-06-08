import { Flex, Box, Heading, Text, Container, Link } from "@chakra-ui/react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useRef, useEffect } from "react"
import slides from "../../lib/slides"
import NextImage from "next/image"
import SectionHeading from "../ui/SectionHeading"
import NextLink from "next/link"
import gsap from "gsap"

const animation = { duration: 20000, easing: (t) => t }

const SlideShowSection = (props) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    mode: "free",
    created(s) {
      s.moveToIdx(10, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 10, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 10, true, animation)
    },
    slides: {
      perView: 2.5,
      spacing: 15,
    },
  })

  const textRef = useRef()

  useEffect(() => {
    if (!textRef.current) {
      return
    }

    gsap.set(textRef.current, {
      autoAlpha: 0.1,
      x: -100,
      scale: 0.75,
      clipPath: "inset(100% 0 0 0)",
    })

    let textAni = gsap.to(textRef.current, {
      x: 0,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      ease: "power4.out",
      scrollTrigger: textRef.current, // this will use the first box as the trigger
      duration: 1,
    })

    return () => {
      textAni.kill()
    }
  }, [])

  return (
    <Box bgColor="brand.500" id="works">
      <Container maxW="container.xl" p="0">
        <Flex
          flexDir={["column", "column", "column", "row-reverse"]}
          pos="relative"
        >
          <Box
            overflow="hidden"
            pos="relative"
            minH="100%"
            ref={sliderRef}
            className="keen-slider"
          >
            {slides.map((e) => (
              <NextLink key={e.url} href="/works" passHref>
                <Link>
                  <Box
                    className="keen-slider__slide"
                    pos="relative"
                    h={["15rem", "15rem", "15rem", "469.6"]}
                  >
                    <NextImage
                      placeholder="blur"
                      layout="fill"
                      objectFit="cover"
                      src={e.src}
                    />
                  </Box>
                </Link>
              </NextLink>
            ))}
          </Box>

          <Box px="4" py="20">
            <SectionHeading pb="10">
              Team of seasoned
              <br />
              flooring experts
            </SectionHeading>

            <Flex
              pr={["none", "none", "none", "50px"]}
              flexDir="column"
              maxW={["80vw", "80vw", "80vw"]}
              visibility="none"
              ref={textRef}
            >
              <Text
                fontSize={["1rem", "1rem", "1rem", "1.25rem"]}
                color="white"
                fontWeight="400"
                lineHeight="normal"
                pb="9"
              >
                Every member of the Exquisite Wood Floors team is a wooden floor
                expert with extensive knowledge of their sector and years of
                flooring experience, delivering projects across all markets to
                the highest of standards, ensuring unique, durable floors of
                quality.
              </Text>
              <Text
                fontSize={["1rem", "1rem", "1rem", "1.25rem"]}
                color="white"
                fontWeight="400"
                lineHeight="normal"
              >
                Contact us below to begin building with us.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default SlideShowSection

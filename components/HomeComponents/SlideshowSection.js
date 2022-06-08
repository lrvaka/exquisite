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
                      blurDataURL={`data:image/webp;base64,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`}
                      objectFit="cover"
                      src={e.url}
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

import { useState, useRef, useLayoutEffect, useEffect } from "react"
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion"
import ChakraBox from "./ChakraBox"
import { Flex, Box, Heading, Grid } from "@chakra-ui/react"
import gsap from "gsap"
import Planks from "./planks"
import NextImage from "next/image"

const MessageSectionAnimationDesktop = ({ children, ...props }) => {
  const containerRef = useRef()

  useLayoutEffect(() => {
    let left = gsap.utils.toArray(".left").forEach((plank) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: plank,
            scrub: true,
            end: () => `+=${containerRef.current.offsetHeight / 2}`,
          },
        })
        .from(plank, {
          x: window.innerWidth * -1,
          ease: "power3.in",
        })
        .to(plank, {
          x: 0,
        })
    })

    let right = gsap.utils.toArray(".right").forEach((plank) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: plank,
            scrub: true,
            end: () => `+=${containerRef.current.offsetHeight / 2}`,
          },
        })
        .from(plank, {
          x: window.innerWidth,
          ease: "power3.in",
        })
        .to(plank, {
          x: 0,
        })
    })

    return () => {}
  }, [])

  return (
    <Box
      pos="relative"
      className="message"
      py="20"
      overflowX="hidden"
      ref={containerRef}
    >
      <Flex
        pos="relative"
        justifyContent="center"
        zIndex="2"
        flexDir="column"
        maxH="100vh"
        w="100vw"
        alignItems="center"
      >
        <Flex flexDir="row" zIndex="1">
          <NextImage
            className="left"
            src={Planks[0].src}
            width={Planks[0].w}
            height={Planks[0].h}
          />

          <NextImage
            className="right"
            src={Planks[1].src}
            width={Planks[1].w}
            height={Planks[1].h}
          />
        </Flex>
        <Flex flexDir="row" zIndex="1">
          <NextImage
            className="left"
            src={Planks[2].src}
            width={Planks[2].w}
            height={Planks[2].h}
          />
          <NextImage
            className="right"
            src={Planks[3].src}
            width={Planks[3].w}
            height={Planks[3].h}
          />
        </Flex>
        <Flex flexDir="row" zIndex="1">
          <NextImage
            className="left"
            src={Planks[4].src}
            width={Planks[4].w}
            height={Planks[4].h}
          />
          <NextImage
            className="right"
            src={Planks[5].src}
            width={Planks[5].w}
            height={Planks[5].h}
          />
        </Flex>
        <Flex flexDir="row" zIndex="1">
          <NextImage
            className="left"
            src={Planks[6].src}
            width={Planks[6].w}
            height={Planks[6].h}
          />
          <NextImage
            className="right"
            src={Planks[7].src}
            width={Planks[7].w}
            height={Planks[7].h}
          />
        </Flex>
        <Flex flexDir="row" zIndex="1">
          <NextImage
            className="left"
            src={Planks[8].src}
            width={Planks[8].w}
            height={Planks[8].h}
          />
          <NextImage
            className="right"
            src={Planks[9].src}
            width={Planks[9].w}
            height={Planks[9].h}
          />
        </Flex>
        <Flex flexDir="row" zIndex="1">
          <NextImage
            className="left"
            src={Planks[10].src}
            width={Planks[10].w}
            height={Planks[10].h}
          />
          <NextImage
            className="right"
            src={Planks[11].src}
            width={Planks[11].w}
            height={Planks[11].h}
          />
        </Flex>
        <Flex flexDir="row" zIndex="1">
          <NextImage
            className="left"
            src={Planks[12].src}
            width={Planks[12].w}
            height={Planks[12].h}
          />
          <NextImage
            className="right"
            src={Planks[13].src}
            width={Planks[13].w}
            height={Planks[13].h}
          />
        </Flex>
        <Flex flexDir="row" zIndex="1">
          <NextImage
            className="left"
            src={Planks[14].src}
            width={Planks[14].w}
            height={Planks[14].h}
          />
          <NextImage
            className="right"
            src={Planks[15].src}
            width={Planks[15].w}
            height={Planks[15].h}
          />
        </Flex>
        <Flex flexDir="row" zIndex="1">
          <NextImage
            className="left"
            src={Planks[16].src}
            width={Planks[16].w}
            height={Planks[16].h}
          />
          <NextImage
            className="right"
            src={Planks[17].src}
            width={Planks[17].w}
            height={Planks[17].h}
          />
        </Flex>
        <Flex flexDir="row" zIndex="1">
          <NextImage
            className="left"
            src={Planks[18].src}
            width={Planks[18].w}
            height={Planks[18].h}
          />
          <NextImage
            className="right"
            src={Planks[19].src}
            width={Planks[19].w}
            height={Planks[19].h}
          />
        </Flex>
        <Flex flexDir="row" zIndex="1">
          <NextImage
            className="left"
            src={Planks[20].src}
            width={Planks[20].w}
            height={Planks[20].h}
          />
          <NextImage
            className="right"
            src={Planks[21].src}
            width={Planks[21].w}
            height={Planks[21].h}
          />
        </Flex>
        <Flex flexDir="row" zIndex="1">
          <NextImage
            className="left"
            src={Planks[22].src}
            width={Planks[22].w}
            height={Planks[22].h}
          />
          <NextImage
            className="right"
            src={Planks[23].src}
            width={Planks[23].w}
            height={Planks[23].h}
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default MessageSectionAnimationDesktop

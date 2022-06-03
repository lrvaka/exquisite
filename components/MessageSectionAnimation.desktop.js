import { useState, useRef, useLayoutEffect, useEffect } from "react"
import useIsomorphicLayoutEffect from "./hooks/useIsomorphicLayoutEffect"
import ChakraBox from "./ChakraBox"
import { Flex, Box, Heading, Grid } from "@chakra-ui/react"
import gsap from "gsap"
import planks from "./planks"
import NextImage from "next/image"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

const MessageSectionAnimationDesktop = ({ children, ...props }) => {
  const containerRef = useRef()

  useIsomorphicLayoutEffect(() => {
    let left = gsap.utils.toArray(".left")

    let right = gsap.utils.toArray(".right")

    let hide = (elem) => gsap.set(elem, { autoAlpha: 0 })

    right.forEach((plank, i) => {
      let tl = gsap.fromTo(
        plank,
        {
          x: window.innerWidth,
          ease: "power4.out",
        },
        {
          x: 0,
          delay: 0.5 * 0.5 * i,
          duration: 3,
        }
      )
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 90%",
        animation: tl,
      })
    })

    left.forEach((plank, i) => {
      let tl = gsap.fromTo(
        plank,
        {
          x: window.innerWidth * -1,
          ease: "power4.out",
        },
        {
          x: 0,
          delay: 0.5 * 0.5 * i,
          duration: 3,
        }
      )
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 90%",
        animation: tl,
      })
    })

    return () => {}
  }, [])

  return (
    <Box pos="relative" className="message" py="20" overflowX="hidden">
      <Flex
        pos="relative"
        justifyContent="center"
        flexDir="column"
        maxH="100vh"
        w="100vw"
        alignItems="center"
        ref={containerRef}
      >
        {planks.map((e, i) => (
          <Flex flexDir="row" zIndex="1" key={i}>
            {e.map((element, index) => (
              <NextImage
                key={index}
                className={element.class}
                src={element.src}
                width={element.w}
                height={element.h}
                priority="true"
              />
            ))}
          </Flex>
        ))}
      </Flex>
    </Box>
  )
}

export default MessageSectionAnimationDesktop

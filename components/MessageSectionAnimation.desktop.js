import { useState, useRef, useLayoutEffect, useEffect } from "react"
import useIsomorphicLayoutEffect from "./hooks/useIsomorphicLayoutEffect"
import ChakraBox from "./utils/ChakraBox"
import { Flex, Box, Heading, Grid, useMediaQuery } from "@chakra-ui/react"
import gsap from "gsap"
import planks from "./planks"
import NextImage from "next/image"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import ResponsiveComponent from "./utils/ResponsiveComponent"

const MessageSectionAnimationDesktop = ({ children, ...props }) => {
  const containerRef = useRef()

  useIsomorphicLayoutEffect(() => {
    let left = gsap.utils.toArray(".left")

    let right = gsap.utils.toArray(".right")

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
        start: "top bottom",
        animation: tl,
        toggleActions: "play pause resume reset",
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
        start: "top bottom",
        animation: tl,
        toggleActions: "play pause resume reset",
      })
    })

    return () => {}
  }, [containerRef])

  return (
    <Flex
      pos="relative"
      justifyContent="center"
      flexDir="column"
      w="100vw"
      alignItems="center"
      ref={containerRef}
    >
      {planks.desktop.map((e, i) => (
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
  )
}

export default MessageSectionAnimationDesktop

import { useState, useRef, useLayoutEffect, useEffect } from "react"
import useIsomorphicLayoutEffect from "./hooks/useIsomorphicLayoutEffect"
import ChakraBox from "./utils/ChakraBox"
import { Flex, Box, Heading, Grid, useMediaQuery } from "@chakra-ui/react"
import gsap from "gsap"
import planks from "./planks"
import NextImage from "next/image"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import ResponsiveComponent from "./utils/ResponsiveComponent"

const MessageSectionAnimationMobile = ({ children, ...props }) => {
  const mobileRef = useRef()

  useIsomorphicLayoutEffect(() => {
    let leftMobile = gsap.utils.toArray(".mobile-left")

    let rightMobile = gsap.utils.toArray(".mobile-right")

    rightMobile.forEach((plank, i) => {
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
        trigger: mobileRef.current,
        start: "top bottom",
        animation: tl,
        toggleActions: "play pause resume reset",
      })
    })

    leftMobile.forEach((plank, i) => {
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
        trigger: mobileRef.current,
        start: "top bottom",
        animation: tl,
        toggleActions: "play pause resume reset",
      })
    })

    return () => {
    }
  }, [mobileRef])

  return (
    <Flex
      pos="relative"
      justifyContent="center"
      flexDir="column"
      w="100vw"
      alignItems="center"
      ref={mobileRef}
    >
      {planks.mobile.map((e, i) => (
        <Flex position="relative" flexDir="row" zIndex="1" key={i}>
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

export default MessageSectionAnimationMobile

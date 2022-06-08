import { useState, useRef, useEffect } from "react"
import { Flex, Box, Heading, Grid, useMediaQuery } from "@chakra-ui/react"
import gsap from "gsap"
import planks from "../../lib/planks"
import NextImage from "next/image"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import useArrayRef from "../hooks/useArrayRef"

const MessageSectionAnimationDesktop = ({ children, ...props }) => {
  const containerRef = useRef()
  const [leftPlankRefs, setLeftPlankRefs] = useArrayRef()
  const [rightPlankRefs, setRightPlankRefs] = useArrayRef()
  let plankType

  useEffect(() => {
    let leftAni
    let rightAni

    gsap.set(leftPlankRefs.current, {
      autoAlpha: 1,
      x: window.innerWidth * -1,
    })
    gsap.set(rightPlankRefs.current, { autoAlpha: 1, x: window.innerWidth })

    leftPlankRefs.current.forEach((plank, i) => {
      leftAni = gsap.to(plank, {
        x: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: plank,
          scrub: true,
          end: "bottom center",
          onLeave: (self) => self.kill(false, true),
        },
      })
    })

    rightPlankRefs.current.forEach((plank, i) => {
      rightAni = gsap.to(plank, {
        x: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: plank,
          scrub: true,
          end: "bottom center",
          onLeave: (self) => self.kill(false, true),
        },
      })
    })

    return () => {
      leftAni.kill()
      rightAni.kill()
    }
  }, [])

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
        <Flex pos="relative" flexDir="row" zIndex="1" key={i}>
          {e.map((element, index) => {
            if (element.ref === "setRightPlankRefs") {
              plankType = setRightPlankRefs
            }
            if (element.ref === "setLeftPlankRefs") {
              plankType = setLeftPlankRefs
            }
            return (
              <Flex
                visibility="hidden"
                pos="relative"
                key={index}
                ref={plankType}
              >
                <NextImage
                  src={element.src}
                  width={element.w}
                  height={element.h}
                  priority={true}
                />
              </Flex>
            )
          })}
        </Flex>
      ))}
    </Flex>
  )
}

export default MessageSectionAnimationDesktop

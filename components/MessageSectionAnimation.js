import { useState, useRef, useLayoutEffect, useEffect } from "react"
import useIsomorphicLayoutEffect from "./hooks/useIsomorphicLayoutEffect"
import ChakraBox from "./ChakraBox"
import { Flex, Box, Heading, Grid, useMediaQuery } from "@chakra-ui/react"
import gsap from "gsap"
import planks from "./planks"
import NextImage from "next/image"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import MessageSectionAnimationMobile from "./MessageSectionAnimation.mobile"
import MessageSectionAnimationDesktop from "./MessageSectionAnimation.desktop"
import ResponsiveComponent from "./ResponsiveComponent"

const MessageSectionAnimation = ({ children, ...props }) => {
  return (
    <Box pos="relative" className="message" py="20" overflowX="hidden">
      <ResponsiveComponent
        mobileSize="480"
        mobileComponents={<MessageSectionAnimationMobile />}
        desktopComponents={<MessageSectionAnimationDesktop />}
      />
    </Box>
  )
}

export default MessageSectionAnimation

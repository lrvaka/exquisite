import { useState, useRef, useLayoutEffect, useEffect } from "react"
import useIsomorphicLayoutEffect from "./hooks/useIsomorphicLayoutEffect"
import ChakraBox from "./utils/ChakraBox"
import { Flex, Box, Heading, Grid, useMediaQuery } from "@chakra-ui/react"
import gsap from "gsap"
import planks from "./planks"
import NextImage from "next/image"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import MessageSectionAnimationMobile from "./MessageSectionAnimation.mobile"
import MessageSectionAnimationDesktop from "./MessageSectionAnimation.desktop"
import ResponsiveComponent from "./utils/ResponsiveComponent"

const MessageSectionAnimation = ({ children, ...props }) => {
  return (
    <Box pos="relative" py="20" overflowX="hidden">
      <ResponsiveComponent
        mobileSize="480"
        mobileComponents={<MessageSectionAnimationMobile />}
        desktopComponents={<MessageSectionAnimationDesktop />}
      />
    </Box>
  )
}

export default MessageSectionAnimation

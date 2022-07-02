import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"
import GsapContext from "../../store/gsap-context"
import { Flex } from "@chakra-ui/react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useState, useRef, useEffect, useContext } from "react"
import gsap from "gsap"
import transitionPlanks from "../../lib/transition-planks"
import useArrayRef from "../hooks/useArrayRef"
import ResponsiveComponent from "../utils/ResponsiveComponent"
import PageTransitionsDesktop from "./PageTransitions.desktop"
import PageTransitionsMobile from "./PageTransitions.mobile"
import PageTransitionsOther from "./PageTransitions.other"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useRouter } from "next/router"

const PageTransitions = ({ children, route }) => {
  const router = useRouter()

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [router.asPath])

  return (
    <>
      <ResponsiveComponent
        mobileSize="436"
        otherSize="1920"
        desktopComponents={
          <PageTransitionsDesktop route={route}>
            {children}
          </PageTransitionsDesktop>
        }
        mobileComponents={
          <PageTransitionsMobile route={route}>
            {children}
          </PageTransitionsMobile>
        }
        otherComponents={
          <PageTransitionsOther route={route}>{children}</PageTransitionsOther>
        }
      />
    </>
  )
}

export default PageTransitions

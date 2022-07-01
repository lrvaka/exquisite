import styled from "@emotion/styled"
import GsapContext from "../../store/gsap-context"
import { Flex } from "@chakra-ui/react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useRef, useEffect, useContext, useState, useCallback } from "react"
import gsap from "gsap"
import transitionPlanks from "../../lib/transition-planks"
import useArrayRef from "../hooks/useArrayRef"
import ResponsiveComponent from "../utils/ResponsiveComponent"
import PageTransitionsOther from "./PageTransitions.other"
import PageTransitionsDesktop from "./PageTransitions.desktop"

const MainComponent = styled.div`
  position: "relative";

  &.page-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 4;
    opacity: 0;
  }

  &.page-exit-active {
    main {
      transform: translateY(-${(props) => props.routingPageOffset}px);
    }
  }
`

const Grid = styled.div`
  flex-direction: column;
  justify-content: center;
  display: flex;
  pointer-events: none;
  z-index: 5;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  visibility: hidden;
  flex: 1;
`

const PageTransitions = ({ children, route, routingPageOffset }) => {
  const { contentRef } = useContext(GsapContext)
  const tl = useRef()
  const tl1 = useRef()

  const addAnimation = useCallback(
    (animation) => {
      tl.current.add(animation)
    },
    [tl]
  )

  const addAnimation1 = useCallback(
    (animation) => {
      tl1.current.add(animation)
    },
    [tl1]
  )

  const playTransition = () => {
    tl.current.play(0)
    tl1.current.play(0)
  }
  const stopTransition = () => {}

  useEffect(() => {
    tl.current = gsap.timeline({
      repeat: 1,
      repeatDelay: 0.5,
      yoyo: true,
      paused: true,
    })
    tl1.current = gsap.timeline({
      repeat: 1,
      repeatDelay: 0.5,
      yoyo: true,
      paused: true,
    })
    return () => {}
  }, [])

  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition
          key={route}
          timeout={1000}
          classNames="page"
          onEnter={playTransition}
          onExited={stopTransition}
        >
          <MainComponent ref={contentRef} routingPageOffset={routingPageOffset}>
            {children}
          </MainComponent>
        </CSSTransition>
      </TransitionGroup>

      <ResponsiveComponent
        desktopComponents={
          <PageTransitionsDesktop
            addAnimation={addAnimation}
            addAnimation1={addAnimation1}
          />
        }
        otherSize="1920"
        otherComponents={<PageTransitionsOther timeline={tl} />}
      />
    </>
  )
}

export default PageTransitions

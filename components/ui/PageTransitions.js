import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"
import GsapContext from "../../store/gsap-context"
import { Flex } from "@chakra-ui/react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useState, useRef, useEffect, useContext } from "react"
import gsap from "gsap"
import transitionPlanks from '../../lib/transition-planks'
import Navbar from "./Navbar"
import { useRouter } from "next/router"
import NextImage from "next/image"
import useArrayRef from "../hooks/useArrayRef"
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect"

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
  const transitionRef = useRef()
  const [leftPlankRefs, setLeftPlankRefs] = useArrayRef()
  const [rightPlankRefs, setRightPlankRefs] = useArrayRef()

  let plankType

  const playTransition = () => {
    tl.current.play(0)
    tl1.current.play(0)
  }
  const stopTransition = () => {}

  useEffect(() => {
    if (!transitionRef.current) {
      return
    }

    gsap.set(leftPlankRefs.current, { autoAlpha: 1 })
    gsap.set(rightPlankRefs.current, { autoAlpha: 1 })

    gsap.set(transitionRef.current, { autoAlpha: 1 })

    tl.current = gsap
      .timeline({
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        paused: true,
      })
      .fromTo(
        leftPlankRefs.current,
        { x: window.innerWidth * -1 },
        {
          opacity: 1,
          x: 0,
          ease: "power4.out",
          stagger: {
            ease: "sine",
            amount: 0.5,
            from: "random",
          },
        }
      )

    tl1.current = gsap
      .timeline({
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        paused: true,
      })
      .fromTo(
        rightPlankRefs.current,
        { x: window.innerWidth },
        {
          opacity: 1,
          x: 0,
          ease: "power4.out",
          stagger: {
            ease: "sine",
            amount: 0.5,
            from: "random",
          },
        }
      )

    return () => {
      tl.current.kill()
      tl1.current.kill()
    }
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
      <Grid ref={transitionRef}>
        {transitionPlanks.desktop.map((e, i) => (
          <Flex
            alignItems="stretch"
            pos="relative"
            flexDir="row"
            justifyContent="center"
            zIndex="1"
            key={i}
            flex="1"
          >
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
                  height="auto"
                  key={index}
                  ref={plankType}
                  alignItems="stretch"
                >
                  <NextImage
                    src={element.src}
                    width={element.w}
                    height={element.h}
                    priority="true"
                  />
                </Flex>
              )
            })}
          </Flex>
        ))}
      </Grid>
    </>
  )
}

export default PageTransitions

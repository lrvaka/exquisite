import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"
import GsapContext from "../../store/gsap-context"
import { Flex } from "@chakra-ui/react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useState, useRef, useEffect, useContext } from "react"
import gsap from "gsap"
import transitionPlanks from "../../lib/transition-planks"
import useArrayRef from "../hooks/useArrayRef"

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

const PageTransitionsOther = ({ children, route }) => {
  const { routingPageOffset } = useContext(GsapContext)
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

  useEffect(() => {
    if (!transitionRef.current) {
      return
    }

    gsap.set(transitionRef.current, { autoAlpha: 1 })

    tl.current = gsap
      .timeline({
        repeat: 1,
        repeatDelay: 0.5,
        yoyo: true,
        paused: true,
      })
      .fromTo(
        leftPlankRefs.current,
        { x: window.innerWidth * -1, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
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
        repeatDelay: 0.5,
        yoyo: true,
        paused: true,
      })
      .fromTo(
        rightPlankRefs.current,
        { x: window.innerWidth, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
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
        >
          <MainComponent ref={contentRef} routingPageOffset={routingPageOffset}>
            {children}
          </MainComponent>
        </CSSTransition>
      </TransitionGroup>
      <Grid ref={transitionRef}>
        {transitionPlanks.other.map((e, i) => (
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
                  pos="relative"
                  height="auto"
                  key={index}
                  ref={plankType}
                  alignItems="stretch"
                  bgColor="#705d56"
                  border="1px solid #a1938e"
                  visibility="hidden"
                >
                  <Flex minW={element.w} minH={element.h} />
                </Flex>
              )
            })}
          </Flex>
        ))}
      </Grid>
    </>
  )
}

export default PageTransitionsOther

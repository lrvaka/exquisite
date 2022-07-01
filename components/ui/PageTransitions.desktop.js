import styled from "@emotion/styled"
import { Flex } from "@chakra-ui/react"
import transitionPlanks from "../../lib/transition-planks"
import { useEffect, useRef } from "react"
import useArrayRef from "../hooks/useArrayRef"
import gsap from "gsap"

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

const PageTransitionsDesktop = ({ addAnimation, addAnimation1 }) => {
  const transitionRef = useRef()
  const [leftPlankRefs, setLeftPlankRefs] = useArrayRef()
  const [rightPlankRefs, setRightPlankRefs] = useArrayRef()
  let plankType

  useEffect(() => {
    if (!transitionRef.current) {
      return
    }

    gsap.set(transitionRef.current, { autoAlpha: 1 })

    const animation = gsap.fromTo(
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

    const animation1 = gsap.fromTo(
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

    addAnimation(animation)
    addAnimation1(animation1)

    return () => {}
  }, [addAnimation, addAnimation1, rightPlankRefs, leftPlankRefs])

  return (
    <>
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

export default PageTransitionsDesktop

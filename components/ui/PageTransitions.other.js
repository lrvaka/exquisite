import styled from "@emotion/styled"
import { Flex } from "@chakra-ui/react"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import transitionPlanks from "../../lib/transition-planks"
import useArrayRef from "../hooks/useArrayRef"

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
  flex: 1;
`

const PageTransitionsOther = ({ addAnimation }) => {
  const tl = useRef()
  const tl1 = useRef()
  const transitionRef = useRef()
  const [leftPlankRefs, setLeftPlankRefs] = useArrayRef()
  const [rightPlankRefs, setRightPlankRefs] = useArrayRef()

  let plankType

  useEffect(() => {
    if (!transitionRef.current) {
      return
    }

    tl.current = gsap.fromTo(
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

    tl1.current = gsap.fromTo(
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

    addAnimation(tl.current, tl1.current)

    return () => {
      tl.current.kill()
      tl1.current.kill()
    }
  }, [])

  return (
    <>
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

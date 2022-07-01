import styled from "@emotion/styled"
import { Flex } from "@chakra-ui/react"
import transitionPlanks from "../../lib/transition-planks"

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

const PageTransitionsMobile = ({
  setLeftPlankRefs,
  setRightPlankRefs,
  transitionRef,
}) => {
  let plankType

  return (
    <>
      <Grid ref={transitionRef}>
        {transitionPlanks.mobile.map((e, i) => (
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

export default PageTransitionsMobile

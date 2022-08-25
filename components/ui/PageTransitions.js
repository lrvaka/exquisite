import styled from "@emotion/styled"
import GsapContext from "../../store/gsap-context"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useRef, useCallback, useContext } from "react"
import gsap from "gsap"
import ResponsiveComponent from "../utils/ResponsiveComponent"
import PageTransitionsDesktop from "./PageTransitions.desktop"
import PageTransitionsMobile from "./PageTransitions.mobile"
import PageTransitionsOther from "./PageTransitions.other"

const MainComponent = styled.main`
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

const PageTransitions = ({ children, route, routingPageOffset }) => {
  const { contentRef } = useContext(GsapContext)
  const tl = useRef(
    gsap.timeline({
      repeat: 1,
      repeatDelay: 0.5,
      yoyo: true,
      paused: true,
    })
  )
  const tl1 = useRef(
    gsap.timeline({
      repeat: 1,
      repeatDelay: 0.5,
      yoyo: true,
      paused: true,
    })
  )

  const playTransition = () => {
    tl.current.play(0)
    tl1.current.play(0)
  }

  const addAnimation = useCallback(
    (animation, animation1) => {
      tl.current.clear()
      tl1.current.clear()
      tl.current.add(animation)
      tl1.current.add(animation1)
    },
    [tl, tl1]
  )

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
      <ResponsiveComponent
        mobileSize="436"
        otherSize="1920"
        desktopComponents={
          <PageTransitionsDesktop addAnimation={addAnimation} />
        }
        mobileComponents={<PageTransitionsMobile addAnimation={addAnimation} />}
        otherComponents={<PageTransitionsOther addAnimation={addAnimation} />}
      />
    </>
  )
}

export default PageTransitions

import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useState, useRef, useEffect } from "react"
import gsap from "gsap"

const MainComponent = styled.div`
  transform-style: preserve-3d;

  &.page-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 4;
    opacity: 0;
    backface-visibility: hidden;
  }

  &.page-exit-active {
    main {
      transform: translateY(-${(props) => props.routingPageOffset}px);
    }

    backface-visibility: hidden;
  }
`

const SecondaryComponent = styled.div`
  position: relative;
`

const Grid = styled.div`
  pointer-events: none;

  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  div {
    background: red;
    visibility: hidden;
  }
`

const PageTransitions = ({ children, route, routingPageOffset }) => {
  const [transitioning, setTransitioning] = useState()
  const tl = useRef()
  const transitionRef = useRef()

  const playTransition = () => {
    setTransitioning(true)
  }
  const stopTransition = () => setTransitioning("")

  useEffect(() => {
    if (!transitionRef.current) {
      return
    }

    if (transitioning) {
      const squares = transitionRef.current.children

      gsap.set(squares, { autoAlpha: 1 })
      tl.current = gsap
        .timeline({
          repeat: 1,
          repeatDelay: 0.2,
          yoyo: true,
          pause: false,
        })
        .fromTo(
          squares,
          { scale: 0, borderRadius: "100%" },
          {
            scale: 1,
            borderRadius: 0,
            stagger: {
              grid: "auto",
              from: "edges",
              ease: "sine",
              amount: 0.7,
            },
          }
        )
    }
  }, [transitioning])

  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition
          key={route}
          timeout={1000}
          classNames="page"
          id="smooth-content"
          onEnter={playTransition}
          onExited={stopTransition}
        >
          <MainComponent routingPageOffset={routingPageOffset}>
            {children}
          </MainComponent>
        </CSSTransition>
      </TransitionGroup>
      <Grid ref={transitionRef}>
        {[...Array(100)].map((_, i) => (
          <div key={i} />
        ))}
      </Grid>
    </>
  )
}

export default PageTransitions

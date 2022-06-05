import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"
import GsapContext from "../store/gsap-context"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useState, useRef, useEffect, useContext } from "react"
import gsap from "gsap"
import Navbar from "./ui/Navbar"
import { useRouter } from "next/router"

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
  pointer-events: none;
  z-index: 5;
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
  const { setNavColor } = useContext(GsapContext)
  const [transitioning, setTransitioning] = useState()
  const tl = useRef()
  const transitionRef = useRef()
  const router = useRouter()

  const playTransition = () => {
    tl.current.play(0)
    setTransitioning(true)
  }
  const stopTransition = () => {
    setTransitioning(false)
  }

  useEffect(() => {
    if (!transitionRef.current) {
      return
    }

    const squares = transitionRef.current.children

    gsap.set(squares, { autoAlpha: 1 })

    tl.current = gsap
      .timeline({
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        paused: true,
      })
      .from(squares, { scale: 0, borderRadius: "100%" })
      .to(squares, {
        scale: 1,
        borderRadius: 0,
        stagger: {
          grid: "auto",
          from: "edges",
          ease: "sine",
          amount: 0.5,
        },
      })

    return () => {
      tl.current.kill()
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
          <MainComponent
            id="smooth-content"
            routingPageOffset={routingPageOffset}
          >
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

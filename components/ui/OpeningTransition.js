import styled from "@emotion/styled";
import GsapContext from "../../store/gsap-context";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useRef, useCallback, useContext, useEffect } from "react";
import gsap from "gsap";
import ResponsiveComponent from "../utils/ResponsiveComponent";
import PageTransitionsDesktop from "./PageTransitions.desktop";
import PageTransitionsMobile from "./PageTransitions.mobile";
import PageTransitionsOther from "./PageTransitions.other";

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
`;

const OpeningTransition = ({ children, route, routingPageOffset }) => {
  const tl = useRef(gsap.timeline({}));
  const tl1 = useRef(gsap.timeline({}));

  const addAnimation = useCallback(
    (animation, animation1) => {
      tl.current.clear();
      tl1.current.clear();
      tl.current.add(animation);
      tl1.current.add(animation1);
      tl.current.play();
      tl1.current.play();
    },
    [tl, tl1]
  );

  return (
    <>
      <ResponsiveComponent
        mobileSize="436"
        otherSize="1920"
        desktopComponents={
          <PageTransitionsDesktop reverse addAnimation={addAnimation} />
        }
        mobileComponents={
          <PageTransitionsMobile reverse addAnimation={addAnimation} />
        }
        otherComponents={
          <PageTransitionsOther reverse addAnimation={addAnimation} />
        }
      />
    </>
  );
};

export default OpeningTransition;

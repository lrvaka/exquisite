import ResponsiveComponent from "../utils/ResponsiveComponent"
import PageTransitionsOther from "./PageTransitions.other"
import PageTransitionsDesktop from "./PageTransitions.desktop"
import PageTransitionsMobile from "./PageTransitions.mobile"
import { useContext } from "react"
import GsapContext from "../../store/gsap-context"

const PageTransitions = ({ children, route, routingPageOffset }) => {
  return (
    <>
      <ResponsiveComponent
        mobileSize="428"
        mobileComponents={
          <PageTransitionsMobile
            route={route}
            routingPageOffset={routingPageOffset}
          >
            {children}
          </PageTransitionsMobile>
        }
        otherSize="1920"
        otherComponents={
          <PageTransitionsOther
            route={route}
            routingPageOffset={routingPageOffset}
          >
            {children}
          </PageTransitionsOther>
        }
        desktopComponents={
          <PageTransitionsDesktop
            route={route}
            routingPageOffset={routingPageOffset}
          >
            {children}
          </PageTransitionsDesktop>
        }
      />
    </>
  )
}

export default PageTransitions

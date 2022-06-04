import { useEffect, useContext, useRef } from "react"
import GsapContext from "../../store/gsap-context"
import ScrollSmoother from "gsap/dist/ScrollSmoother"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

const Layout = ({ children, forwardedRef }) => {
  const { setSmoother } = useContext(GsapContext)
  const containerRef = useRef(null)

  useEffect(() => {
    setSmoother(
      ScrollSmoother.create({
        wrapper: containerRef.current,
        smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
      })
    )
    console.log("setSmoother Refresh")
  }, [containerRef])

  return <div ref={containerRef}>{children}</div>
}

export default Layout

import { Heading } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import SplitText from "gsap/dist/SplitText"
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect"

const SectionHeading = ({ children, ...props }) => {
  const ref = useRef()

  useEffect(() => {
    if (!ref.current) {
      return
    }
    console.log(ref.current)

    const split = new SplitText(ref.current, {
      type: "chars, words",
    })

    // gsap.set(split.chars, {
    //   autoAlpha: 0.1,
    //   y: 10,
    //   scale: 1.25,
    //   skewX: 10,
    // })

    let splitCharsAni = gsap.fromTo(
      split.chars,
      { autoAlpha: 0.1, y: 10, scale: 1.25, skewX: 10 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        skewX: 0,
        duration: 1,
        stagger: 0.01,
        ease: "a1",
        scrollTrigger: ref.current,
      }
    )
  }, [])

  return (
    <Heading
      fontSize={["2rem", "2rem", "2rem", "2.5rem"]}
      as="h2"
      fontWeight="700"
      color="brand.100"
      lineHeight="none"
      ref={ref}
      {...props}
    >
      {children}
    </Heading>
  )
}

export default SectionHeading

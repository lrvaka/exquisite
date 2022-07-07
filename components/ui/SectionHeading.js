import { Heading } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import SplitText from "gsap/dist/SplitText"

const SectionHeading = ({ children, ...props }) => {
  const ref = useRef()

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const split = new SplitText(ref.current, {
      type: "chars, words",
    })

    split.chars.forEach((char, i) => {
      gsap.from(char, {
        y: 10,
        opacity: 0,
        scale: 1.25,
        skewX: 10,
        duration: 1,
        delay: i * 0.01,
        ease: "a1",
        scrollTrigger: ref.current,
      })
    })
  }, [])

  return (
    <Heading
      fontSize={{base: "2xl", md: "4xl"}}
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

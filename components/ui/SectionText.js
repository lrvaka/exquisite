import { Heading, Text, Box } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { forwardRef } from "react"

const header = {
  animate: (i) => ({
    transition: {
      delayChildren: i * 0.2,
      staggerChildren: 0.02,
    },
  }),
}

const letterAni = {
  initial: {
    y: 10,
    opacity: 0,
    scale: 1.25,
    skewX: 10,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    skewX: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

export const SectionHeading = ({ children, ...props }) => (
  <Heading
    fontSize={["2rem", "2rem", "2rem", "2.5rem"]}
    as="h2"
    fontWeight="700"
    color="brand.100"
    lineHeight="none"
    {...props}
  >
    {children}
  </Heading>
)

const Paragraph = (props, ref) => {
  return (
    <Text
      fontSize={["1rem", "1rem", "1rem", "1.25rem"]}
      color="white"
      fontWeight="400"
      lineHeight="normal"
      ref={ref}
      {...props}
    >
      {props.children}
    </Text>
  )
}

export const SectionParagraph = forwardRef(Paragraph)

export const AnimatedHeading = ({ title, custom = 0, ...props }) => (
  <Box
    as={motion.span}
    display="flex"
    custom={custom}
    variants={header}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    {...props}
  >
    {title.split("").map((letter, i) => (
      <SectionHeading
        key={i}
        as={motion.span}
        variants={letterAni}
        viewport={{ once: true }}
      >
        {letter}
      </SectionHeading>
    ))}
  </Box>
)

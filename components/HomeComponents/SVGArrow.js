import { motion } from "framer-motion"

const variants = {
  initial: {
    clipPath: "inset(0 100% 0 0)",
    opacity: 0,
  },
  animate: {
    clipPath: "inset(0 0 0 0)",
    opacity: 1,
    transition: {
      delay: 3,
      duration: 2,
      ease: "easeOut",
      repeat: 7,
      repeatType: "reverse",
    },
  },
}

const SVGArrow = (props) => (
  <motion.svg
    width={101}
    height={8}
    xmlns="http://www.w3.org/2000/svg"
    initial="initial"
    animate="animate"
    {...props}
  >
    <motion.path
      variants={variants}
      stroke={props.fill}
      strokeWidth="0.5"
      d="M100.354 4.354a.5.5 0 0 0 0-.708L97.172.464a.5.5 0 1 0-.707.708L99.293 4l-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h100v-1H0v1Z"
    />
  </motion.svg>
)

export default SVGArrow

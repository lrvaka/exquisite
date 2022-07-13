import Marquee from "react-fast-marquee"
import { Heading } from "@chakra-ui/react"

const MarqueeSection = () => (
  <Marquee gradient={false}>
    <Heading
      fontWeight="black"
      color="brand.300"
      fontSize={["5rem", "10rem"]}
      mr="3rem"
      opacity="0.25"
      overflowY="hidden"
    >
      EXQUISITE WOOD FLOORS
    </Heading>
  </Marquee>
)

export default MarqueeSection

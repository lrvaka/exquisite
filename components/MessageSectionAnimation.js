import { Box, useMediaQuery } from "@chakra-ui/react"
import Mobile from "./MessageSectionAnimation.mobile"
import Desktop from "./MessageSectionAnimation.desktop"

const MessageSectionAnimation = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")
  return <>{isLargerThan1280 ? <Desktop /> : <Mobile />}</>
}

export default MessageSectionAnimation

import { Box } from "@chakra-ui/react"
import MessageSectionAnimationMobile from "./MessageSectionAnimation.mobile"
import MessageSectionAnimationDesktop from "./MessageSectionAnimation.desktop"
import ResponsiveComponent from "../utils/ResponsiveComponent"

const MessageSectionAnimation = ({ children, ...props }) => {
  return (
    <Box pos="relative" my="24" overflowX="hidden">
      <ResponsiveComponent
        mobileSize="480"
        mobileComponents={<MessageSectionAnimationMobile />}
        desktopComponents={<MessageSectionAnimationDesktop />}
      />
    </Box>
  )
}

export default MessageSectionAnimation

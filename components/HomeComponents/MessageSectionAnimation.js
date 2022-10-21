import MessageSectionAnimationMobile from "./MessageSectionAnimation.mobile";
import MessageSectionAnimationDesktop from "./MessageSectionAnimation.desktop";
import ResponsiveComponent from "../utils/ResponsiveComponent";

const MessageSectionAnimation = ({ children, ...props }) => {
  return (
    <div className="relative my-24 overflow-x-hidden">
      <ResponsiveComponent
        mobileSize="480"
        mobileComponents={<MessageSectionAnimationMobile />}
        desktopComponents={<MessageSectionAnimationDesktop />}
      />
    </div>
  );
};

export default MessageSectionAnimation;

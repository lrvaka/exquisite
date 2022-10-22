import { useState } from "react";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import { useMediaQuery } from "@chakra-ui/media-query";

const ResponsiveComponent = ({
  mobileSize,
  otherSize,
  mobileComponents,
  desktopComponents,
  otherComponents,
}) => {
  const [loaded, setLoaded] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (!loaded) setLoaded(true);
  }, [loaded]);

  const [isMobile] = useMediaQuery(`(max-width: ${mobileSize}px)`);
  const [isOther] = useMediaQuery(`(min-width: ${otherSize}px)`);

  if (loaded) {
    if (isMobile) {
      return mobileComponents;
    } else if (isOther) {
      return otherComponents;
    }
    return desktopComponents;
  }

  return null;
};

export default ResponsiveComponent;

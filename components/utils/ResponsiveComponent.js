import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const matchQueryList = window.matchMedia(query);

      function handleChange(e) {
        setMatches(e.matches);
      }

      matchQueryList.addEventListener("change", handleChange);

      return () => {
        matchQueryList.removeEventListener("change", handleChange);
      };
    }
  }, [query]);

  return matches;
}

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

  const isMobile = useMediaQuery(`(max-width: ${mobileSize}px)`);
  const isOther = useMediaQuery(`(min-width: ${otherSize}px)`);

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

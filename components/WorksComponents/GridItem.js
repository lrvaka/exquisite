import GridImage from "./GridImage";
import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

import gsap from "gsap";

// eslint-disable-next-line react/display-name
const GridItem = ({ src, alt, ...props }) => {
  const ref = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0.1,
        scale: 0.75,
        clipPath: "inset(100% 0 0 0)",
      },
      {
        opacity: 1,
        scale: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 2,
        scrollTrigger: ref.current,
      }
    );
  }, []);

  return (
    <Box pos="relative" overflow="hidden" {...props} ref={ref}>
      <GridImage alt={alt} src={src} />
    </Box>
  );
};

export default GridItem;

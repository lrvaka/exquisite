import { Box, keyframes } from "@chakra-ui/react";
import Head from "./Head";

const grainAnimation = keyframes`
  0%, 100% { transform:translate(0, 0); }
  10% { transform:translate(-5%, -10%); }
  20% { transform:translate(-15%, 5%); }
  30% { transform:translate(7%, -25%); }
  40% { transform:translate(-5%, 25%); }
  50% { transform:translate(-15%, 10%); }
  60% { transform:translate(15%, 0%); }
  70% { transform:translate(0%, 15%); }
  80% { transform:translate(3%, 35%); }
  90% { transform:translate(-10%, 10%); }
`;

const animation = `${grainAnimation} 8s steps(10) infinite`;

const MainWrapper = ({ children, heading, ...props }) => {
  return (
    <>
      <Head heading={heading} />
      <Box
        _before={{
          animation: animation,
          backgroundImage: "url(/images/noise.webp)",
          content: "''",
          height: "300%",
          left: "-50%",
          opacity: "0.5",
          position: "fixed",
          top: "-110%",
          width: "300%",
          zIndex: "-10",
          overflow: "hidden",
        }}
        zIndex="0"
        pos="relative"
        {...props}
      >
        {children}
      </Box>
    </>
  );
};

export default MainWrapper;

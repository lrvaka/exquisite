// import { useState, useRef, useLayoutEffect, useEffect } from "react"
// import {
//   motion,
//   useViewportScroll,
//   useTransform,
//   useSpring,
// } from "framer-motion"
// import ChakraBox from "./ChakraBox"
// import { Flex, Box, Heading, Grid } from "@chakra-ui/react"
// import gsap from "gsap"
// import planks from "./planks"
// import NextImage from "next/image"

// const MessageSectionAnimationMobile = ({ children, ...props }) => {
//   const containerRef = useRef()

//   useLayoutEffect(() => {
//     let left = gsap.utils.toArray(".left").forEach((plank) => {
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: plank,
//             scrub: true,
//             end: () => `bottom center+=10`,
//           },
//         })
//         .from(plank, {
//           x: window.innerWidth * -1,
//           ease: "power3.in",
//         })
//         .to(plank, {
//           x: 0,
//         })
//     })

//     let right = gsap.utils.toArray(".right").forEach((plank) => {
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: plank,
//             scrub: true,
//             end: () => `bottom center+=10`,
//           },
//         })
//         .from(plank, {
//           x: window.innerWidth,
//           ease: "power3.in",
//         })
//         .to(plank, {
//           x: 0,
//         })
//     })

//     return () => {}
//   }, [])

//   return (
//     <Box
//       pos="relative"
//       className="message"
//       py="20"
//       overflowX="hidden"
//       ref={containerRef}
//     >
//       <Flex
//         pos="relative"
//         justifyContent="center"
//         zIndex="2"
//         flexDir="column"
//         maxH="100vh"
//         w="100vw"
//         alignItems="center"
//       >
//         {planks.map((e) => (
//           <Flex flexDir="row" zIndex="1">
//             {e.map((element) => (
//               <NextImage
//                 className={element.class}
//                 src={element.src}
//                 width={element.w}
//                 height={element.h}
//               />
//             ))}
//           </Flex>
//         ))}
//       </Flex>
//     </Box>
//   )
// }

// export default MessageSectionAnimationMobile

import {
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Modal,
  useDisclosure,
  Heading,
  ModalFooter,
  Box,
  Flex,
} from "@chakra-ui/react"
import { useKeenSlider } from "keen-slider/react"
import NextImage from "next/image"
import { useState } from "react"
import "keen-slider/keen-slider.min.css"
import GridImage from "../WorksComponents/GridImage"

function PortfolioModal({ slides, children }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal
        colorScheme="green"
        size="full"
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody display="flex" pt="14" justifyContent="center">
            <Flex
              ref={sliderRef}
              className="keen-slider"
              minW="350px"
              maxW="50vw"
            >
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                />

                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                />
              </>

              {slides.map((e) => (
                <Flex
                  className="keen-slider__slide"
                  key={e}
                  justifyContent="center"
                >
                  <NextImage
                    priority="true"
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                    src={e}
                  />
                </Flex>
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box cursor="pointer" onClick={onOpen}>
        {children}
      </Box>
    </>
  )
}

function Arrow(props) {
  return (
    <>
      {props.left && (
        <Box
          w={{ base: "20px", "2xl": "30px" }}
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          cursor="pointer"
          zIndex="2"
        >
          <svg
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path
              fill="white"
              d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
            />
          </svg>
        </Box>
      )}
      {!props.left && (
        <Box
          w={{ base: "20px", "2xl": "30px" }}
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          cursor="pointer"
          left={{ base: "calc(100% - 20px)", "2xl": "calc(100% - 30px)" }}
          zIndex="2"
        >
          <svg
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </Box>
      )}
    </>
  )
}

export default PortfolioModal

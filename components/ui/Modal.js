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
import "keen-slider/keen-slider.min.css"
import GridImage from "../WorksComponents/GridImage"
import workSlides from "../../lib/work-slides"

const animation = { duration: 20000, easing: (t) => t }

function WorksModal({ children }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    created(s) {
      s.moveToIdx(10, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 10, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 10, true, animation)
    },
    mode: "free",
    slides: {
      perView: 1.75,
      spacing: 15,
    },
  })
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal
        colorScheme="green"
        size="5xl"
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody display="flex" pt="14">
            <Box ref={sliderRef} className="keen-slider">
              {workSlides.carolina.map((e) => (
                <Box className="keen-slider__slide" key={e} h="20rem">
                  <GridImage src={e} />
                </Box>
              ))}
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Button onClick={onOpen}>{children}</Button>
    </>
  )
}

export default WorksModal

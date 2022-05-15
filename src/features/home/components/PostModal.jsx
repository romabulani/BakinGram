import {
  Modal,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  useDisclosure,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NewPost } from "./NewPost";

function PostModal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button
        variant="solidPrimary"
        margin={{ md: "0.5rem", lg: "1rem" }}
        justifySelf="center"
        w={{ md: "4rem", lg: "85%" }}
        p={{ md: "6px", lg: "auto" }}
        onClick={onOpen}
        display={{ base: "none", md: "block" }}
      >
        Post
      </Button>
      <Button
        variant="iconButton"
        display={{ base: "block", md: "none" }}
        height="1.5rem"
        bottom="10px"
        onClick={onOpen}
        color={useColorModeValue("gray.800", "whiteAlpha.800")}
      >
        <FontAwesomeIcon icon="plus-circle" size="lg" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md" m="2">
        <ModalOverlay />
        <ModalContent w={{ base: "90vw", md: "30rem" }}>
          <ModalHeader>New Post</ModalHeader>
          <ModalCloseButton
            bg="transparent"
            color={useColorModeValue("gray.700", "white.900")}
            _focus={{
              boxShadow: "none",
              border: "none",
            }}
          />
          <ModalBody maxW="100%">
            <NewPost width="100%" boxShadow="none" onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { PostModal };

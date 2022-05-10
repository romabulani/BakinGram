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
        margin="1rem"
        w="85%"
        onClick={onOpen}
        display={{ base: "none", md: "block" }}
      >
        Post
      </Button>
      <Button
        variant="iconButton"
        display={{ base: "block", md: "none" }}
        height="1.5rem"
        bottom="7px"
        onClick={onOpen}
        color={useColorModeValue("gray.800", "whiteAlpha.800")}
      >
        <FontAwesomeIcon icon="plus-circle" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md" m="2">
        <ModalOverlay />
        <ModalContent w={{ base: "90vw", md: "30rem" }}>
          <ModalHeader>New Post</ModalHeader>
          <ModalCloseButton
            bg="transparent"
            color={useColorModeValue("gray.700", "white.900")}
            _focus={{
              boxShadow: "transparent",
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

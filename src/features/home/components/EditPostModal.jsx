import {
  Modal,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  useDisclosure,
  useColorModeValue,
  MenuItem,
} from "@chakra-ui/react";
import { NewPost } from "./NewPost";

function EditPostModal({ post }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <MenuItem
        _hover={{ bg: "gray.300" }}
        bg="inherit"
        fontSize="md"
        onClick={onOpen}
      >
        Edit
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md" m="2">
        <ModalOverlay />
        <ModalContent w={{ base: "90vw", md: "30rem" }}>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalCloseButton
            bg="transparent"
            color={useColorModeValue("gray.700", "white.900")}
            _focus={{
              boxShadow: "transparent",
            }}
          />
          <ModalBody maxW="100%">
            <NewPost
              width="100%"
              boxShadow="none"
              onClose={onClose}
              editPostContent={post}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { EditPostModal };

import {
  Modal,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalContent,
  useDisclosure,
  Button,
  useColorModeValue,
  Flex,
  HStack,
  Textarea,
  Avatar,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontAwesomeIconStyle } from "styles";

function PostModal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button variant="solidPrimary" margin="1rem" w="85%" onClick={onOpen}>
        Post
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md" m="2">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Post</ModalHeader>
          <ModalCloseButton
            bg="transparent"
            color={useColorModeValue("gray.700", "white.900")}
            _focus={{
              boxShadow: "transparent",
            }}
          />
          <ModalBody>
            <Flex>
              <Avatar
                src="https://randomuser.me/api/portraits/women/27.jpg"
                size="md"
                name="Adarsh Balika"
                marginRight="3"
                mt="2"
              />
              <Textarea
                placeholder="Whats happening?"
                height="8rem"
                outline="none"
                border="none"
                focusBorderColor="transparent"
              ></Textarea>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <HStack left="8" pos="absolute">
              <FontAwesomeIcon
                icon="image"
                style={fontAwesomeIconStyle}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon="smile"
                style={fontAwesomeIconStyle}
              ></FontAwesomeIcon>
            </HStack>
            <Button mr={3} onClick={onClose} variant="solidPrimary">
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { PostModal };

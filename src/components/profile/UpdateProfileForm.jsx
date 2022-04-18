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
  Avatar,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { inputLeftWrapperStyle, inputWrapperStyle } from "styles";
function UpdateProfileForm() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button variant="outline" h="2rem" onClick={onOpen}>
        Edit Profile
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm" m="2">
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton
            bg="transparent"
            color={useColorModeValue("gray.700", "white.900")}
            _focus={{
              boxShadow: "transparent",
            }}
          />
          <ModalBody justifyContent="space-between">
            <form>
              <FormControl {...inputWrapperStyle}>
                <FormLabel {...inputLeftWrapperStyle}>Avatar</FormLabel>
                <Avatar
                  src="https://randomuser.me/api/portraits/women/27.jpg"
                  alt="profile-image"
                  size="md"
                  marginRight="2"
                  name="Adarsh Balika"
                />
              </FormControl>
              <FormControl {...inputWrapperStyle}>
                <FormLabel {...inputLeftWrapperStyle}>Name</FormLabel>
                <Input variant="unstyled" value="Adarsh Balika" isReadOnly />
              </FormControl>
              <FormControl {...inputWrapperStyle}>
                <FormLabel {...inputLeftWrapperStyle}>Username</FormLabel>
                <Input variant="unstyled" value="adarshbalika" isReadOnly />
              </FormControl>
              <FormControl {...inputWrapperStyle}>
                <FormLabel {...inputLeftWrapperStyle}>Bio</FormLabel>
                <Input
                  _focus={{
                    borderColor: useColorModeValue("purple.900", "purple.300"),
                  }}
                  value="Be yourself!"
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose} variant="solidPrimary">
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { UpdateProfileForm };

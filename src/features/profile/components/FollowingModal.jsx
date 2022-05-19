import { UserCard } from "features";

import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useColorModeValue,
  ModalBody,
  Text,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
function FollowingModal({ followingList }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button variant="link" onClick={onOpen}>
        {followingList.length} following
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm" m="2">
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>Following</ModalHeader>
          <ModalCloseButton
            bg="transparent"
            color={useColorModeValue("gray.700", "white.900")}
            _focus={{
              boxShadow: "none",
              border: "none",
            }}
          />
          <ModalBody justifyContent="space-between" pb="2rem">
            {followingList.length > 0 ? (
              followingList.map((user) => (
                <UserCard user={user} onClose={onClose} key={user._id} />
              ))
            ) : (
              <Text textAlign="center">No Following Yet</Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { FollowingModal };

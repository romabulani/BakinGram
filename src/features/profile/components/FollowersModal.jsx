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
function FollowersModal({ followersList }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button variant="link" onClick={onOpen}>
        {followersList.length} followers
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm" m="2">
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>Followers</ModalHeader>
          <ModalCloseButton
            bg="transparent"
            color={useColorModeValue("gray.700", "white.900")}
            _focus={{
              boxShadow: "none",
              border: "none",
            }}
          />
          <ModalBody justifyContent="space-between" pb="2rem">
            {followersList.length > 0 ? (
              followersList.map((user) => (
                <UserCard user={user} onClose={onClose} key={user._id} />
              ))
            ) : (
              <Text textAlign="center">No Followers Yet</Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { FollowersModal };

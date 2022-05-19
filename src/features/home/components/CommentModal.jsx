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
  Box,
  IconButton,
  Flex,
  HStack,
  Avatar,
  Textarea,
  Divider,
  ModalFooter,
  MenuItem,
} from "@chakra-ui/react";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postCardStyle } from "styles";
import { addComment, editComment } from "../postsSlice";

function CommentModal({ postId, comment, editCommentContent }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [content, setContent] = useState(
    editCommentContent ? comment.text : ""
  );
  const dispatch = useDispatch();
  const { authUser, authToken } = useSelector((state) => state.authentication);
  const onCommentClick = () => {
    if (!content) toast.error("Please add content to comment");
    else {
      if (editCommentContent) {
        dispatch(
          editComment({
            postId,
            commentId: comment._id,
            commentData: content,
            authToken,
          })
        );
        toast.success("Comment updated!");
      } else {
        dispatch(
          addComment({
            postId,
            commentData: content,
            authToken,
          })
        );
        toast.success("Comment added!");
      }
      onClose();
    }
  };
  return (
    <>
      {!editCommentContent && (
        <IconButton
          variant="iconButton"
          onClick={onOpen}
          icon={<FontAwesomeIcon icon={faComment} />}
        />
      )}
      {editCommentContent && (
        <MenuItem
          _hover={{ bg: "gray.300" }}
          bg="inherit"
          fontSize="md"
          onClick={onOpen}
        >
          Edit
        </MenuItem>
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="md"
        m="2"
        motionPreset="slideInRight"
      >
        <ModalOverlay />
        <ModalContent w={{ base: "90vw", md: "30rem" }}>
          <ModalHeader pb="0">Post Reply</ModalHeader>
          <ModalCloseButton
            bg="transparent"
            color={useColorModeValue("gray.700", "white.900")}
            _focus={{
              boxShadow: "none",
              border: "none",
            }}
          />
          <ModalBody maxW="100%" pt="0" pb="0">
            <Flex {...postCardStyle}>
              <HStack alignItems="flex-start">
                <Avatar
                  src={authUser.avatarUrl}
                  size="md"
                  name={authUser.firstName}
                  marginRight="3"
                  mt="2"
                />
                <Textarea
                  placeholder="Comment your thoughts.."
                  height="8rem"
                  width="100%"
                  outline="none"
                  border="none"
                  resize="none"
                  focusBorderColor="transparent"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </HStack>
              <Divider />
              <ModalFooter pb="0">
                <Button
                  variant="solidPrimary"
                  borderRadius="full"
                  height="70%"
                  alignSelf="center"
                  _hover={{
                    bg: useColorModeValue("purple.900", "purple.300"),
                  }}
                  onClick={onCommentClick}
                >
                  {editCommentContent ? "Update" : "Comment"}
                </Button>
              </ModalFooter>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { CommentModal };

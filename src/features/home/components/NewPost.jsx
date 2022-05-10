import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Divider,
  Flex,
  HStack,
  Avatar,
  Textarea,
  Input,
  FormControl,
  FormLabel,
  useColorModeValue,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";
import { fontAwesomeIconStyle, postCardStyle } from "styles";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { EmojiContainer } from "./EmojiContainer";
import { useState } from "react";
import { addPost, editPost } from "../postsSlice";
import { useMedia } from "../hooks/useMedia";

function NewPost({ width, boxShadow, onClose, editPostContent }) {
  const { authUser, authToken } = useSelector((state) => state.authentication);
  const [content, setContent] = useState(editPostContent?.content);
  const [mediaURL, setMediaURL] = useState(editPostContent?.mediaURL);
  const [deleteToken, setDeleteToken] = useState(editPostContent?.deleteToken);
  const dispatch = useDispatch();
  const { uploadMedia, deleteMedia } = useMedia();
  const [loader, setLoader] = useState(false);
  const [filename, setFilename] = useState("");
  const onUploadClick = async (e) => {
    setLoader(true);
    if (filename) await deleteMedia(deleteToken, setMediaURL, setDeleteToken);
    setFilename(e.target.files[0].name);
    await uploadMedia(e.target.files[0], setMediaURL, setDeleteToken);
    setLoader(false);
  };

  const onPostClick = () => {
    if (!content && !mediaURL) toast.error("Please add content to post");
    else {
      if (editPostContent)
        dispatch(
          editPost({
            postData: { ...editPostContent, content, mediaURL, deleteToken },
            authToken,
          })
        );
      else
        dispatch(
          addPost({ postData: { content, mediaURL, deleteToken }, authToken })
        );
      setContent("");
      setDeleteToken(null);
      setMediaURL("");
      setFilename("");
      editPostContent
        ? toast.success("Updated Successfully!")
        : toast.success("Posted successfully");
      onClose && onClose();
    }
  };
  return (
    <Flex {...postCardStyle} px="4" w={width} boxShadow={boxShadow}>
      <HStack alignItems="flex-start">
        <Avatar
          src={authUser.avatarUrl}
          size="md"
          name={`${authUser.firstName} ${authUser.lastName}`}
          marginRight="3"
          mt="2"
        />
        <Textarea
          placeholder="Whats happening?"
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
      <Flex mx="2" justifyContent="space-between" height="10">
        <HStack>
          <FormControl width="1rem">
            <FormLabel
              position="absolute"
              left="0"
              bottom="0"
              cursor="pointer"
              marginBottom="0"
            >
              <FontAwesomeIcon icon="image" style={fontAwesomeIconStyle} />
            </FormLabel>
            <Input
              type="file"
              visibility="hidden"
              accept="image/*, video/*"
              onChange={onUploadClick}
            />
          </FormControl>
          <EmojiContainer setContent={setContent} />
        </HStack>
        <Button
          variant="solidPrimary"
          borderRadius="full"
          height="70%"
          alignSelf="center"
          disabled={loader}
          _hover={{
            bg: useColorModeValue("purple.900", "purple.300"),
          }}
          onClick={onPostClick}
        >
          {editPostContent ? "Update" : "Post"}
        </Button>
      </Flex>
      {mediaURL && (
        <Tag
          size="md"
          borderRadius="full"
          variant="solid"
          maxW="fit-content"
          colorScheme="gray"
        >
          <TagLabel>{editPostContent?.mediaURL ? "Media" : filename}</TagLabel>
          <TagCloseButton
            background="transparent"
            onClick={() =>
              deleteToken
                ? deleteMedia(deleteToken, setMediaURL, setDeleteToken)
                : setMediaURL("")
            }
          />
        </Tag>
      )}
    </Flex>
  );
}

export { NewPost };

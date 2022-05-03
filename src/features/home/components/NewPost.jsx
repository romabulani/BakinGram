import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Divider,
  Flex,
  HStack,
  Avatar,
  Textarea,
} from "@chakra-ui/react";
import { fontAwesomeIconStyle, postCardStyle } from "styles";
import { useSelector } from "react-redux";

function NewPost() {
  const { authUser } = useSelector((state) => state.authentication);
  return (
    <Flex {...postCardStyle} px="4">
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
        ></Textarea>
      </HStack>
      <Divider />
      <Flex mx="2" justifyContent="space-between" height="10">
        <HStack>
          <FontAwesomeIcon
            icon="image"
            style={fontAwesomeIconStyle}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon="smile"
            style={fontAwesomeIconStyle}
          ></FontAwesomeIcon>
        </HStack>
        <Button
          variant="solidPrimary"
          borderRadius="full"
          height="70%"
          alignSelf="center"
        >
          Post
        </Button>
      </Flex>
    </Flex>
  );
}

export { NewPost };

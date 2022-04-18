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

function NewPost() {
  return (
    <Flex {...postCardStyle} px="4">
      <HStack alignItems="flex-start">
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
          width="100%"
          outline="none"
          border="none"
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

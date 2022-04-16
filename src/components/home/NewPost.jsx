import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Textarea,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";

function NewPost() {
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  return (
    <Flex
      flexDirection="column"
      w={isMobile ? "90%" : "30rem"}
      borderRadius="lg"
      height="fit-content"
      border="1px"
      borderColor={useColorModeValue("gray.300", "gray.700")}
      ml={isMobile ? "0" : "12"}
      mt="4"
    >
      <HStack alignItems="flex-start" padding="4">
        <Image
          src="https://randomuser.me/api/portraits/women/27.jpg"
          alt="profile-image"
          boxSize="40px"
          marginRight="8"
          borderRadius="full"
          objectFit="cover"
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
            style={{
              cursor: "pointer",
              fontSize: "1.2rem",
              marginRight: "1rem",
            }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon="smile"
            style={{
              cursor: "pointer",
              fontSize: "1.2rem",
              marginRight: "1rem",
            }}
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

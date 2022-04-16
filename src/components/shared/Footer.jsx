import { Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <Flex
      flexDirection="column"
      bottom="0"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue("white.900", "gray.900")}
      marginTop="1rem"
      p="4"
      zIndex="6"
      borderTop="1px solid"
      rowGap="3"
      borderColor={useColorModeValue("gray.300", "gray.700")}
    >
      <Text fontSize="1.2rem">{` Made with </> by Roma Bulani`}</Text>
      <HStack>
        <a
          href="https://github.com/romabulani"
          target="_blank"
          rel="noreferrer"
          aria-label="github"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            style={{
              cursor: "pointer",
              fontSize: "1.2rem",
              marginRight: "1rem",
            }}
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://twitter.com/romabulani"
          target="_blank"
          rel="noreferrer"
          aria-label="twitter"
        >
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            style={{
              cursor: "pointer",
              fontSize: "1.2rem",
              marginRight: "1rem",
            }}
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/romabulani/"
          target="_blank"
          rel="noreferrer"
          aria-label="linkedin"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin-in"]}
            style={{
              cursor: "pointer",
              fontSize: "1.2rem",
              marginRight: "1rem",
            }}
          ></FontAwesomeIcon>
        </a>
      </HStack>
      <p>© 2022 | Bakin Gram</p>
    </Flex>
  );
}

export { Footer };

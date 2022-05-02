import React from "react";
import { Link } from "react-router-dom";
import { Flex, Avatar, Text } from "@chakra-ui/react";

function SuggestionCard() {
  return (
    <Link to="/">
      <Flex height="fit-content" mt="4">
        <Avatar
          src="https://randomuser.me/api/portraits/women/27.jpg"
          alt="profile-image"
          size="sm"
          marginRight="2"
          name="Adarsh Balika"
        />
        <Flex width="100%" flexDirection="column">
          <Text fontWeight="bold">Adarsh Balika</Text>
          <Text marginTop="0px">{`@adarshbalika`}</Text>
        </Flex>
      </Flex>
    </Link>
  );
}

export { SuggestionCard };

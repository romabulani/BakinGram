import React from "react";
import { Link } from "react-router-dom";
import { Flex, Avatar, Text } from "@chakra-ui/react";

function SuggestionCard({ user }) {
  return (
    <Link to={`/profile/${user.username}`}>
      <Flex height="fit-content" mt="4">
        <Avatar
          src={user.avatarUrl}
          alt="profile-image"
          size="sm"
          marginRight="2"
          name={`${user.firstName} ${user.lastName}`}
        />
        <Flex width="100%" flexDirection="column">
          <Text fontWeight="bold">{`${user.firstName} ${user.lastName}`}</Text>
          <Text marginTop="0px">@{user.username}</Text>
        </Flex>
      </Flex>
    </Link>
  );
}

export { SuggestionCard };

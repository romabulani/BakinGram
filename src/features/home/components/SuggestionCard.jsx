import React from "react";
import { Link } from "react-router-dom";
import { Flex, Avatar, Text, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "features";

function SuggestionCard({ user, followButton, onClose }) {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.authentication);
  return (
    <Flex
      height="fit-content"
      mt="4"
      justifyContent="flex-start"
      columnGap="1rem"
    >
      <Link to={`/profile/${user.username}`} onClick={onClose}>
        <Flex>
          <Avatar
            src={user.avatarUrl}
            alt="profile-image"
            size="sm"
            marginRight="2"
            name={`${user.firstName} ${user.lastName}`}
          />
          <Flex width="100%" flexDirection="column" flexGrow="1">
            <Text w="12ch">{`${user.firstName} ${user.lastName}`}</Text>
            <Text marginTop="0px" fontSize="sm">
              @{user.username}
            </Text>
          </Flex>
        </Flex>
      </Link>
      {followButton && (
        <Button
          variant="solidPrimary"
          height="1.8rem"
          width="5rem"
          fontSize="sm"
          onClick={() =>
            dispatch(
              followUser({ followUserId: user._id, authToken, dispatch })
            )
          }
        >
          + Follow
        </Button>
      )}
    </Flex>
  );
}

export { SuggestionCard };

import React from "react";
import { Link } from "react-router-dom";
import { Flex, Avatar, Text, Button, Divider } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "features";

function UserCard({ user, followButton, onClose, gap }) {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.authentication);
  return (
    <>
      <Flex
        height="fit-content"
        mt="4"
        justifyContent="flex-start"
        columnGap={gap ? gap : "2px"}
        alignItems="center"
        pb="1"
      >
        <Link to={`/profile/${user.username}`} onClick={onClose}>
          <Avatar
            src={user.avatarUrl}
            alt="profile-image"
            size="sm"
            marginRight="2"
            name={user.firstName}
          />
        </Link>
        <Flex wrap="wrap">
          <Link to={`/profile/${user.username}`} onClick={onClose}>
            <Flex width="100%" flexDirection="column" flexGrow="1">
              <Text
                w={{ base: "fit-content", md: "13ch" }}
              >{`${user.firstName} ${user.lastName}`}</Text>
              <Text marginTop="0px" fontSize="sm">
                @{user.username}
              </Text>
            </Flex>
          </Link>
          {followButton && (
            <Button
              variant="solidPrimary"
              height="1.8rem"
              width="4.5rem"
              fontSize="sm"
              borderRadius="full"
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
      </Flex>
      <Divider />
    </>
  );
}

export { UserCard };

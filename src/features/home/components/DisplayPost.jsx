import { Link } from "react-router-dom";
import {
  Flex,
  VStack,
  HStack,
  Text,
  Divider,
  IconButton,
  Box,
  Avatar,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  Image,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { displayCardStyle, fontAwesomeIconStyle, postCardStyle } from "styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../postsSlice";
import { useMedia } from "../hooks/useMedia";
import { EditPostModal } from "./EditPostModal";

function DisplayPost({ post }) {
  const { content, mediaURL, likes, username, createdAt } = post;
  const [userDetails, setUserDetails] = useState(null);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { deleteMedia } = useMedia();
  const { authToken, authUser } = useSelector((state) => state.authentication);
  useEffect(
    () => setUserDetails(users.filter((user) => user.username === username)[0]),
    [username, users]
  );

  return (
    <>
      {userDetails && (
        <Flex {...postCardStyle} {...displayCardStyle}>
          <Flex w="100%" marginTop="1" padding="2">
            <VStack width="100%">
              <Flex
                alignSelf="flex-start"
                flexWrap="wrap"
                alignItems="center"
                columnGap="1"
                width="90%"
              >
                <Avatar
                  src={userDetails.avatarUrl}
                  alt="profile-image"
                  size="md"
                  marginRight="2"
                  name={`${userDetails.firstName} ${userDetails.lastName}`}
                />
                <Text fontWeight="bold">
                  {`${userDetails.firstName} ${userDetails.lastName}`}
                </Text>
                <Link to={`/profile/${username}`}>@{username}</Link>
                <FontAwesomeIcon icon="circle-dot" fontSize="5px" />
                <Text>{` ${new Date(createdAt)
                  .toDateString()
                  .split(" ")
                  .slice(1, 3)
                  .join(" ")}`}</Text>
                {authUser.username === userDetails.username && (
                  <Menu>
                    <MenuButton
                      pos="absolute"
                      right="8"
                      bg="transparent"
                      color="gray.700"
                      _hover={{ bg: "transparent" }}
                    >
                      <FontAwesomeIcon
                        icon="ellipsis-h"
                        {...fontAwesomeIconStyle}
                      />
                    </MenuButton>
                    <MenuList minW="8rem">
                      <MenuGroup>
                        <EditPostModal post={post} />
                        <MenuDivider />
                        <MenuItem
                          _hover={{ bg: "gray.300" }}
                          bg="inherit"
                          fontSize="md"
                          onClick={async () => {
                            dispatch(
                              deletePost({ postId: post._id, authToken })
                            );
                            post.deleteToken &&
                              (await deleteMedia(post.deleteToken));
                          }}
                        >
                          Delete
                        </MenuItem>
                      </MenuGroup>
                    </MenuList>
                  </Menu>
                )}
              </Flex>
              <Text width="100%">{content}</Text>
              {mediaURL && mediaURL.split("/")[4] === "image" ? (
                <Image
                  src={mediaURL}
                  maxHeight="20rem"
                  objectFit="fill"
                  marginLeft="0"
                  width="100%"
                />
              ) : (
                mediaURL && (
                  <video controls>
                    <source src={mediaURL} />
                  </video>
                )
              )}
              <Divider />
              <HStack alignSelf="flex-start">
                <Box>
                  <IconButton
                    variant="iconButton"
                    icon={<FontAwesomeIcon icon={faComment} />}
                  />
                  <span>4</span>
                </Box>
                <Box>
                  <IconButton
                    variant="iconButton"
                    icon={<FontAwesomeIcon icon={faHeart} />}
                  />
                  <span>2</span>
                </Box>
                <IconButton
                  variant="iconButton"
                  icon={<FontAwesomeIcon icon={faBookmark} />}
                />
                <IconButton
                  variant="iconButton"
                  icon={<FontAwesomeIcon icon="share-alt" />}
                />
              </HStack>
            </VStack>
          </Flex>
        </Flex>
      )}
    </>
  );
}

export { DisplayPost };

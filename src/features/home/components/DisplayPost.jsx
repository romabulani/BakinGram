import { Link } from "react-router-dom";
import {
  Flex,
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
import { faBookmark, faHeart } from "@fortawesome/free-regular-svg-icons";
import { displayCardStyle, fontAwesomeIconStyle, postCardStyle } from "styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, dislikePost, likePost } from "../postsSlice";
import { useMedia } from "../hooks/useMedia";
import { EditPostModal } from "./EditPostModal";
import { removeBookmark, addBookmark, CommentModal } from "features";
import { toast } from "react-toastify";

function DisplayPost({ post }) {
  const { content, mediaURL, username, createdAt } = post;
  const [userDetails, setUserDetails] = useState(null);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { deleteMedia } = useMedia();
  const { authToken, authUser, bookmarkStatus } = useSelector(
    (state) => state.authentication
  );
  const { likeDislikeStatus } = useSelector((state) => state.posts);
  useEffect(() => {
    if (users.length > 0)
      setUserDetails(users.filter((user) => user.username === username)[0]);
  }, [users, username]);

  // On Click Functions
  const deletePostClickHandler = async () => {
    dispatch(deletePost({ postId: post._id, authToken }));
    post.deleteToken && (await deleteMedia(post.deleteToken));
  };

  const likedByUser = () =>
    post.likes.likedBy.filter((user) => user._id === authUser._id).length !== 0;

  const bookmarkedByUser = () =>
    authUser.bookmarks.filter((postId) => postId === post._id).length !== 0;

  const likeClickHandler = () => {
    if (likedByUser()) dispatch(dislikePost({ postId: post._id, authToken }));
    else dispatch(likePost({ postId: post._id, authToken }));
  };

  const bookmarkClickHandler = () => {
    if (bookmarkedByUser()) {
      dispatch(removeBookmark({ postId: post._id, authToken }));
      toast.success("Removed from Bookmarks");
    } else {
      dispatch(addBookmark({ postId: post._id, authToken }));
      toast.success("Added to Bookmarks");
    }
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(
      `https://bakingram.netlify.app/post/${post._id}`
    );
    toast.info("Link Copied. Start sharing!");
  };

  return (
    <>
      {userDetails && (
        <Flex {...postCardStyle} {...displayCardStyle}>
          <Flex
            alignSelf="flex-start"
            flexWrap="wrap"
            alignItems="center"
            columnGap="1"
            width="90%"
          >
            <Link to={`/profile/${username}`}>
              <Flex>
                <Avatar
                  src={
                    userDetails.username === authUser.username
                      ? authUser.avatarUrl
                      : userDetails.avatarUrl
                  }
                  alt="profile-image"
                  size="md"
                  marginRight="2"
                  display="block"
                  name={userDetails.firstName}
                />
                <Flex flexDirection="column">
                  <Flex columnGap="10px">
                    <Text fontWeight="bold">
                      {`${userDetails.firstName} ${userDetails.lastName}`}
                    </Text>
                    <Text fontSize="sm" alignSelf="center">
                      {` ${new Date(createdAt)
                        .toDateString()
                        .split(" ")
                        .slice(1, 3)
                        .join(" ")}`}
                    </Text>
                  </Flex>
                  <Text fontSize="sm"> @{username}</Text>{" "}
                </Flex>
              </Flex>
            </Link>

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
                    size="2x"
                    style={{ ...fontAwesomeIconStyle, padding: "5px" }}
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
                      onClick={(e) => deletePostClickHandler(e)}
                    >
                      Delete
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            )}
          </Flex>
          <Link to={`/post/${post._id}`}>
            <Text width="100%" alignSelf="flex-start" py="2" my="8px">
              {content}
            </Text>
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
          </Link>

          <Divider />
          <HStack alignSelf="flex-start">
            <Flex alignItems="center" flexDirection="col">
              <IconButton
                variant="iconButton"
                disabled={likeDislikeStatus === "pending"}
                icon={
                  likedByUser() ? (
                    <FontAwesomeIcon
                      icon="heart"
                      style={{ color: "#E53E3E" }}
                    />
                  ) : (
                    <FontAwesomeIcon icon={faHeart} />
                  )
                }
                onClick={(e) => likeClickHandler()}
              />
              <span>{post.likes.likeCount > 0 && post.likes.likeCount}</span>
            </Flex>

            <IconButton
              variant="iconButton"
              disabled={bookmarkStatus === "pending"}
              icon={
                bookmarkedByUser() ? (
                  <FontAwesomeIcon icon="bookmark" />
                ) : (
                  <FontAwesomeIcon icon={faBookmark} />
                )
              }
              onClick={(e) => bookmarkClickHandler(e)}
            />
            <Box>
              <CommentModal postId={post._id} />
              {post.comments.length > 0 && <span>{post.comments.length}</span>}
            </Box>

            <IconButton
              variant="iconButton"
              icon={<FontAwesomeIcon icon="share-alt" />}
              onClick={copyHandler}
            />
          </HStack>
        </Flex>
      )}
    </>
  );
}

export { DisplayPost };

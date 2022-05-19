import {
  Flex,
  Box,
  Avatar,
  Text,
  Button,
  IconButton,
  Link,
  Divider,
  Tooltip,
  Heading,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { flexMiddleContainerStyle, postCardStyle } from "styles";
import { UpdateProfileForm, logoutUser } from "features";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  loadUserDetails,
  loadUserPosts,
  followUser,
  unfollowUser,
  DisplayPost,
} from "features";
import { FollowersModal } from "./FollowersModal";
import { FollowingModal } from "./FollowingModal";
import { Loader } from "components";

function ProfileCard() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const { profileDetails } = useSelector((state) => state.profile);
  const { followStatus } = useSelector((state) => state.users);
  const { authUser, authToken } = useSelector((state) => state.authentication);
  const { postsDetails } = useSelector((state) => state.profile);
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    if (username) {
      dispatch(loadUserDetails(username));
      dispatch(loadUserPosts(username));
    }
  }, [username, authUser, posts]);

  const isFollowed = () =>
    profileDetails.followers.some(
      (currUser) => currUser.username === authUser.username
    );

  const followUnfollowClickHandler = () => {
    isFollowed()
      ? dispatch(
          unfollowUser({
            followUserId: profileDetails._id,
            authToken,
            dispatch,
          })
        )
      : dispatch(
          followUser({ followUserId: profileDetails._id, authToken, dispatch })
        );
  };

  return (
    <>
      {profileDetails?.username !== username ? (
        <Loader />
      ) : (
        <>
          <Flex
            {...postCardStyle}
            boxShadow="none"
            w={{ base: "90vw", md: "85%", lg: "30rem" }}
          >
            <Flex w="100%" marginTop="1" padding="2">
              <Avatar
                src={profileDetails?.avatarUrl}
                size="lg"
                name={profileDetails.firstName}
              />
              <Flex w="100%" m="2" flexDirection="column" rowGap="1">
                <Flex justifyContent="space-between" flexWrap="wrap">
                  <Flex flexDirection="column">
                    <Text fontWeight="bold">{`${profileDetails.firstName} ${profileDetails.lastName}`}</Text>
                    <Text>{`@${profileDetails.username}`}</Text>
                  </Flex>
                  {authUser.username === profileDetails.username && (
                    <Flex alignItems="center">
                      <UpdateProfileForm />
                      <Tooltip label="Logout" aria-label="A tooltip">
                        <IconButton
                          variant="iconButton"
                          icon={<FontAwesomeIcon icon="sign-out" />}
                          onClick={() => dispatch(logoutUser())}
                        />
                      </Tooltip>
                    </Flex>
                  )}
                  {authUser.username !== profileDetails.username && (
                    <Button
                      variant="outline"
                      h="2rem"
                      onClick={followUnfollowClickHandler}
                      disabled={followStatus === "pending"}
                    >
                      {isFollowed() ? "Following" : "Follow"}
                    </Button>
                  )}
                </Flex>
                <Text>{profileDetails.bio}</Text>
                <Flex justifyContent="space-between" flexWrap="wrap">
                  <Link
                    href={profileDetails.website}
                    isExternal
                    target="_blank"
                  >
                    {profileDetails.website}
                  </Link>
                  <Box>
                    <FontAwesomeIcon icon="calendar" color="#718096" />
                    <span style={{ color: "#718096" }}>{` ${new Date(
                      profileDetails.createdAt
                    )
                      .toDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                      .slice(4)}`}</span>
                  </Box>
                </Flex>
                <Flex justifyContent="space-between" flexWrap="wrap">
                  <Button variant="link">{postsDetails.length} posts</Button>
                  <FollowersModal followersList={profileDetails.followers} />
                  <FollowingModal followingList={profileDetails.following} />
                </Flex>
              </Flex>
            </Flex>
            <Divider />
          </Flex>
          <Flex
            w="100%"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
          >
            {postsDetails.length > 0 ? (
              postsDetails.map((post) => (
                <DisplayPost key={post._id} post={post} />
              ))
            ) : (
              <Heading textAlign="center" pt="4">
                No Posts Yet!
              </Heading>
            )}
          </Flex>
        </>
      )}
    </>
  );
}

export { ProfileCard };

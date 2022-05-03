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
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { postCardStyle } from "styles";
import { UpdateProfileForm, logoutUser } from "features";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { loadUserDetails } from "features";

function ProfileCard() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const { profileDetails } = useSelector((state) => state.profile);
  const { authUser } = useSelector((state) => state.authentication);
  useEffect(() => {
    dispatch(loadUserDetails(username));
  }, [username]);

  return (
    <>
      {profileDetails && (
        <Flex {...postCardStyle} boxShadow="none">
          <Flex w="100%" marginTop="1" padding="2">
            <Avatar
              src={profileDetails.avatarUrl}
              size="lg"
              name={`${profileDetails.firstName} ${profileDetails.lastName}`}
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
                  <Button variant="outline" h="2rem">
                    Follow
                  </Button>
                )}
              </Flex>
              <Text>{profileDetails.bio}</Text>
              <Flex justifyContent="space-between" flexWrap="wrap">
                <Link href={profileDetails.website} isExternal target="_blank">
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
                <Button variant="link">5 posts</Button>
                <Button variant="link">40 followers</Button>
                <Button variant="link">40 following</Button>
              </Flex>
            </Flex>
          </Flex>
          <Divider />
        </Flex>
      )}
    </>
  );
}

export { ProfileCard };

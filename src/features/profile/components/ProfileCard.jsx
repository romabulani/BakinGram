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

function ProfileCard() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.authentication);

  return (
    <Flex {...postCardStyle} boxShadow="none">
      <Flex w="100%" marginTop="1" padding="2">
        <Avatar
          src="https://randomuser.me/api/portraits/women/27.jpg"
          size="lg"
          name="Adarsh Balika"
        />
        <Flex w="100%" m="2" flexDirection="column" rowGap="1">
          <Flex justifyContent="space-between" flexWrap="wrap">
            <Flex flexDirection="column">
              <Text fontWeight="bold">{`${authUser.firstName} ${authUser.lastName}`}</Text>
              <Text>{`@${authUser.username}`}</Text>
            </Flex>
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
          </Flex>
          <Text>Be yourself!</Text>
          <Flex justifyContent="space-between" flexWrap="wrap">
            <Link href="https://google.com" isExternal>
              https://google.com
            </Link>
            <Box>
              <FontAwesomeIcon icon="calendar" color="#718096" />
              <span style={{ color: "#718096" }}>{` ${new Date(
                authUser.createdAt
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
  );
}

export { ProfileCard };

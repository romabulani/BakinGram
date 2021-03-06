import { Link, NavLink } from "react-router-dom";
import { Flex, Text, useColorModeValue, Box, Avatar } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sidebarStyle } from "styles";
import { PostModal } from "features";
import { useSelector } from "react-redux";

function Sidebar() {
  const { authUser } = useSelector((state) => state.authentication);
  const getActiveStyle = ({ isActive }) =>
    isActive
      ? {
          backgroundColor: useColorModeValue("#d1d8ff", "#2d2d3a"),
          display: "block",
        }
      : { backgroundColor: "transparent", display: "block" };

  const getNavItem = (iconName, text) => (
    <Flex
      columnGap="1rem"
      alignItems="center"
      padding="0.8rem 2rem"
      justifyContent={{ md: "center", lg: "flex-start" }}
    >
      <FontAwesomeIcon icon={iconName} />
      <Text display={{ md: "none", lg: "inline-block" }}>{text}</Text>
    </Flex>
  );

  return (
    <>
      <Flex
        {...sidebarStyle}
        borderColor={useColorModeValue("gray.300", "gray.700")}
      >
        <Box pos="sticky" top="3rem">
          <NavLink to="/" style={getActiveStyle}>
            {getNavItem("house", "Home")}
          </NavLink>
          <NavLink to="/explore" style={getActiveStyle}>
            {getNavItem("compass", "Explore")}
          </NavLink>
          <NavLink to="/bookmarks" style={getActiveStyle}>
            {getNavItem("bookmark", "Bookmarks")}
          </NavLink>
          <NavLink to="/liked" style={getActiveStyle}>
            {getNavItem("heart", "Liked Posts")}
          </NavLink>
          <PostModal />
        </Box>
      </Flex>

      <Flex
        position="fixed"
        bottom="0"
        zIndex="7"
        width="100vw"
        justifyContent="space-around"
        alignItems="center"
        height="3rem"
        padding="5px"
        backgroundColor={useColorModeValue("white.900", "gray.900")}
        display={{ base: "flex", md: "none" }}
      >
        <Link to="/">
          <FontAwesomeIcon icon="home" size="lg" />
        </Link>
        <Link to="/explore">
          <FontAwesomeIcon icon="compass" size="lg" />
        </Link>
        <PostModal />
        <Link to="/bookmarks">
          <FontAwesomeIcon icon="bookmark" size="lg" />
        </Link>
        <Link to="/liked">
          <FontAwesomeIcon icon="heart" size="lg" />
        </Link>
        <Link to={`/profile/${authUser.username}`}>
          <Avatar
            src={authUser.avatarUrl}
            alt="profile-image"
            size="xs"
            name={authUser.firstName}
          />
        </Link>
      </Flex>
    </>
  );
}

export { Sidebar };

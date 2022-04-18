import { NavLink } from "react-router-dom";
import { Flex, Text, useColorModeValue, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sidebarStyle } from "styles";
import { PostModal } from "components";

function Sidebar() {
  const getActiveStyle = ({ isActive }) =>
    isActive
      ? {
          backgroundColor: useColorModeValue("#d1d8ff", "#2d2d3a"),
          display: "block",
        }
      : { backgroundColor: "transparent", display: "block" };

  const getNavItem = (iconName, text) => (
    <Flex columnGap="1rem" alignItems="center" padding="0.8rem 2rem">
      <FontAwesomeIcon icon={iconName} />
      <Text>{text}</Text>
    </Flex>
  );

  return (
    <Flex
      {...sidebarStyle}
      borderColor={useColorModeValue("gray.300", "gray.700")}
    >
      <Box pos="sticky" top="3.5rem">
        <NavLink to="/" style={getActiveStyle}>
          {getNavItem("house", "Home")}
        </NavLink>
        <NavLink to="/notifications" style={getActiveStyle}>
          {getNavItem("bell", "Notifications")}
        </NavLink>
        <NavLink to="/bookmarks" style={getActiveStyle}>
          {getNavItem("bookmark", "Bookmarks")}
        </NavLink>
        <NavLink to="/profile" style={getActiveStyle}>
          {getNavItem("user", "Profile")}
        </NavLink>
        <PostModal />
      </Box>
    </Flex>
  );
}

export { Sidebar };

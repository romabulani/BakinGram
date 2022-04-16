import { NavLink } from "react-router-dom";
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  const getActiveStyle = ({ isActive }) =>
    isActive
      ? { backgroundColor: useColorModeValue("#d1d8ff", "#2d2d3a") }
      : { backgroundColor: "transparent" };

  const getNavItem = (iconName, text) => (
    <Flex columnGap="1rem" alignItems="center" padding="0.8rem 2rem">
      <FontAwesomeIcon icon={iconName} />
      <Text>{text}</Text>
    </Flex>
  );

  return (
    <Flex
      w="15rem"
      flexDir="column"
      fontSize="1.2rem"
      borderRight="1px"
      top="3.5rem"
      pos="sticky"
      h={`calc(100vh - 3.5rem)`}
      borderColor={useColorModeValue("gray.300", "gray.700")}
    >
      <NavLink to="/" style={getActiveStyle}>
        {getNavItem("house", "Home")}
      </NavLink>
      <NavLink to="/" style={getActiveStyle}>
        {getNavItem("bell", "Notifications")}
      </NavLink>
      <NavLink to="/" style={getActiveStyle}>
        {getNavItem("bookmark", "Bookmarks")}
      </NavLink>
      <NavLink to="/" style={getActiveStyle}>
        {getNavItem("user", "Profile")}
      </NavLink>
      <Button variant="solidPrimary" margin="1rem" w="85%">
        Post
      </Button>
    </Flex>
  );
}

export { Sidebar };

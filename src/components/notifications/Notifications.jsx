import { Flex, Avatar, Divider, Text } from "@chakra-ui/react";
import { flexMiddleOuterContainerStyle, postCardStyle } from "styles";
import { Footer, Navigation, Sidebar, Suggestions } from "components";

function Notifications() {
  return (
    <>
      <Navigation />
      <Flex {...flexMiddleOuterContainerStyle}>
        <Sidebar />
        <Flex {...postCardStyle} boxShadow="none">
          <Flex w="100%" marginTop="1" padding="2" alignItems="center">
            <Avatar
              src="https://randomuser.me/api/portraits/women/27.jpg"
              alt="profile-image"
              size="md"
              marginRight="2"
              name="Adarsh Balika"
            />
            <Text>Adarsh Balika started following you.</Text>
          </Flex>
          <Divider />
          <Flex w="100%" marginTop="1" padding="2" alignItems="center">
            <Avatar
              src="https://randomuser.me/api/portraits/women/27.jpg"
              alt="profile-image"
              size="md"
              marginRight="2"
              name="Adarsh Balika"
            />
            <Flex flexDirection="column">
              <Text>Adarsh Balika commented on your post.</Text>
              <Text>Well Said. Completely agree with you!</Text>
            </Flex>
          </Flex>
          <Divider />
          <Flex w="100%" marginTop="1" padding="2" alignItems="center">
            <Avatar
              src="https://randomuser.me/api/portraits/women/27.jpg"
              alt="profile-image"
              size="md"
              marginRight="2"
              name="Adarsh Balika"
            />
            <Text>Adarsh Balika liked your post.</Text>
          </Flex>
          <Divider />
        </Flex>
        <Suggestions />
      </Flex>
      <Footer />
    </>
  );
}

export { Notifications };

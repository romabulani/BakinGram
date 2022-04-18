import { Flex, Heading } from "@chakra-ui/react";
import {
  DisplayPost,
  Footer,
  Navigation,
  Sidebar,
  Suggestions,
} from "components";
import {
  flexMiddleContainerStyle,
  flexMiddleOuterContainerStyle,
} from "styles";

function Bookmarks() {
  return (
    <>
      <Navigation />
      <Flex {...flexMiddleOuterContainerStyle}>
        <Sidebar />
        <Flex {...flexMiddleContainerStyle}>
          <Heading size="md" mt="4">
            Bookmarks
          </Heading>
          <DisplayPost />
          <DisplayPost />
          <DisplayPost />
          <DisplayPost />
        </Flex>

        <Suggestions />
      </Flex>
      <Footer />
    </>
  );
}

export { Bookmarks };

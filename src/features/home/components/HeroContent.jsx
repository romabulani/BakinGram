import { Flex } from "@chakra-ui/react";
import { NewPost, DisplayPost, Suggestions } from "features";
import {
  flexMiddleContainerStyle,
  flexMiddleOuterContainerStyle,
} from "styles";
import { Navigation, Footer, Sidebar } from "components";

function HeroContent() {
  return (
    <>
      <Navigation />
      <Flex {...flexMiddleOuterContainerStyle}>
        <Sidebar />
        <Flex {...flexMiddleContainerStyle}>
          <NewPost />
          <DisplayPost />
          <DisplayPost />
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

export { HeroContent };

import { Flex } from "@chakra-ui/react";
import { NewPost, DisplayPost, Navigation, Sidebar, Footer } from "components";
import {
  flexMiddleContainerStyle,
  flexMiddleOuterContainerStyle,
} from "styles";
import { Suggestions } from "./Suggestions";

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

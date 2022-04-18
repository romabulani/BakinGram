import React from "react";
import { ProfileCard } from "./ProfileCard";
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

function Profile() {
  return (
    <>
      <Navigation />
      <Flex {...flexMiddleOuterContainerStyle}>
        <Sidebar />
        <Flex {...flexMiddleContainerStyle}>
          <ProfileCard />
          <Heading size="md">Your Posts</Heading>
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

export { Profile };

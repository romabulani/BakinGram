import React from "react";
import { Flex } from "@chakra-ui/react";
import { DisplayPost, Suggestions, ProfileCard } from "features";
import { Footer, Navigation, Sidebar } from "components";
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

import React from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { NewPost, DisplayPost } from "components";

function HeroContent() {
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      maxW={isMobile ? "100%" : "62.5%"}
    >
      <NewPost />
      <DisplayPost />
      <DisplayPost />
      <DisplayPost />
      <DisplayPost />
      <DisplayPost />
      <DisplayPost />
    </Flex>
  );
}

export { HeroContent };

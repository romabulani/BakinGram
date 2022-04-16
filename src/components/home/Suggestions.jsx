import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { SuggestionCard } from "./SuggestionCard";

function Suggestions() {
  return (
    <Flex
      flexDirection="column"
      paddingRight="12"
      h={`calc(100vh - 3.5rem)`}
      py="4"
      position="sticky"
      right="4"
      top="3.5rem"
      minW="12rem"
    >
      <Text size="lg" fontWeight="bold">
        Suggestions for you
      </Text>
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
    </Flex>
  );
}

export { Suggestions };

import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { SuggestionCard } from "./SuggestionCard";
import { suggestionContainerStyle } from "styles";

function Suggestions() {
  return (
    <Flex
      {...suggestionContainerStyle}
      borderColor={useColorModeValue("gray.300", "gray.700")}
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

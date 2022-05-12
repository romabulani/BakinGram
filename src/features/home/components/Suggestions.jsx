import { Flex, Text, useColorModeValue, Box, Button } from "@chakra-ui/react";
import { SuggestionCard } from "./SuggestionCard";
import { suggestionContainerStyle } from "styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "features";

function Suggestions() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.authentication);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    dispatch(getUsers());
    setSuggestions(
      users.filter(
        (currUser) =>
          !authUser.following.find(
            (innerCurrUser) => innerCurrUser._id === currUser._id
          ) && currUser.username !== authUser.username
      )
    );
  }, [authUser, users]);

  return (
    <Flex
      {...suggestionContainerStyle}
      borderColor={useColorModeValue("gray.300", "gray.700")}
    >
      <Text size="lg" fontWeight="bold">
        Suggestions for you
      </Text>
      {suggestions.map(
        (user) =>
          user.username !== authUser.username && (
            <SuggestionCard user={user} key={user._id} followButton={true} />
          )
      )}
    </Flex>
  );
}

export { Suggestions };

import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { SuggestionCard } from "./SuggestionCard";
import { suggestionContainerStyle } from "styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "features";

function Suggestions() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.authentication);
  useEffect(() => dispatch(getUsers()), []);
  return (
    <Flex
      {...suggestionContainerStyle}
      borderColor={useColorModeValue("gray.300", "gray.700")}
    >
      <Text size="lg" fontWeight="bold">
        Suggestions for you
      </Text>
      {users.length > 0 &&
        users.map(
          (user) =>
            user.username !== authUser.username && (
              <SuggestionCard key={user._id} user={user} />
            )
        )}
    </Flex>
  );
}

export { Suggestions };

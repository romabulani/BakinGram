import { Flex, Text, useColorModeValue, Button } from "@chakra-ui/react";
import { UserCard } from "./UserCard";
import { suggestionContainerStyle } from "styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { changeSorting } from "../postsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Suggestions() {
  const { users } = useSelector((state) => state.users);
  const { postSorting } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.authentication);
  const [suggestions, setSuggestions] = useState([]);
  const location = useLocation();

  useEffect(() => {
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
      {location.pathname === "/" && (
        <Flex justifyContent="space-around" mb="2" wrap="wrap" rowGap="10px">
          <Button
            variant="outline"
            w="7rem"
            backgroundColor={
              postSorting === "trending"
                ? useColorModeValue("purple.100", "gray.800")
                : "none"
            }
            onClick={() => dispatch(changeSorting("trending"))}
          >
            <FontAwesomeIcon icon="fire" style={{ paddingRight: "5px" }} />
            Trending
          </Button>
          <Button
            variant="outline"
            w="7rem"
            backgroundColor={
              postSorting === "latest"
                ? useColorModeValue("purple.100", "gray.800")
                : "none"
            }
            onClick={() => dispatch(changeSorting("latest"))}
          >
            <FontAwesomeIcon icon="sort" style={{ paddingRight: "5px" }} />
            Latest
          </Button>
        </Flex>
      )}
      <Text size="lg" fontWeight="bold">
        Suggestions for you
      </Text>
      {suggestions
        .slice(0, 5)
        .map(
          (user) =>
            user.username !== authUser.username && (
              <UserCard user={user} key={user._id} followButton={true} />
            )
        )}
    </Flex>
  );
}

export { Suggestions };

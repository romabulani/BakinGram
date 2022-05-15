import {
  Flex,
  Button,
  Box,
  Heading,
  useColorModeValue,
  Divider,
  filter,
} from "@chakra-ui/react";
import { NewPost, DisplayPost, Suggestions } from "features";
import {
  flexMiddleContainerStyle,
  flexMiddleOuterContainerStyle,
  sortButtonsContainerStyle,
} from "styles";
import { Navigation, Footer, Sidebar } from "components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { changeSorting } from "../postsSlice";

function HeroContent() {
  const { posts, postSorting } = useSelector((state) => state.posts);
  const { authUser } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const [followingPosts, setFollowingPosts] = useState([]);

  useEffect(() => {
    const filteredPosts = posts.filter(
      (currPost) =>
        authUser.following.find(
          (user) => user.username === currPost.username
        ) || authUser.username === currPost.username
    );
    switch (postSorting) {
      case "trending":
        setFollowingPosts(
          filteredPosts
            .filter((post) => post.likes.likeCount > 0)
            .sort((a, b) => b.likes.likeCount - a.likes.likeCount)
        );
        break;
      case "latest":
        setFollowingPosts(
          filteredPosts.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )
        );
        break;
      default:
        setFollowingPosts(filteredPosts);
    }
  }, [authUser, posts, postSorting]);
  return (
    <>
      <Navigation />
      <Flex {...flexMiddleOuterContainerStyle}>
        <Sidebar />
        <Flex {...flexMiddleContainerStyle}>
          <Box
            display={{ base: "none", md: "block" }}
            width={{ md: "85%", lg: "30rem" }}
            alignSelf="center"
            p="0"
            m="0"
          >
            <NewPost
              width={{ base: "90vw", md: "100%", lg: "30rem" }}
              boxShadow="rgb(0 0 0 / 5%) 0px 0px 10px 4px"
            />
          </Box>

          <Flex
            {...sortButtonsContainerStyle}
            backgroundColor={useColorModeValue("white.900", "gray.900")}
            borderColor={useColorModeValue("gray.300", "gray.700")}
          >
            <Button
              variant="outline"
              border="none"
              width="50%"
              onClick={() => dispatch(changeSorting("trending"))}
            >
              <FontAwesomeIcon icon="fire" style={{ paddingRight: "5px" }} />
              Trending
            </Button>
            <Divider
              orientation="vertical"
              color={useColorModeValue("gray.300", "gray.700")}
            />
            <Button
              variant="outline"
              border="none"
              width="50%"
              onClick={() => dispatch(changeSorting("latest"))}
            >
              <FontAwesomeIcon icon="sort" style={{ paddingRight: "5px" }} />
              Latest Posts
            </Button>
          </Flex>
          {followingPosts.length > 0 ? (
            followingPosts.map((post) => (
              <DisplayPost key={post._id} post={post} />
            ))
          ) : (
            <Heading fontSize="lg" width="80%">
              No Posts to Display! Start Following and Liking your Friends Post
              to get updates on your Feed.
            </Heading>
          )}
        </Flex>
        <Suggestions />
      </Flex>
      <Footer />
    </>
  );
}

export { HeroContent };

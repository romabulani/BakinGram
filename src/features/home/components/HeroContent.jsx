import { Flex } from "@chakra-ui/react";
import { NewPost, DisplayPost, Suggestions } from "features";
import {
  flexMiddleContainerStyle,
  flexMiddleOuterContainerStyle,
} from "styles";
import { Navigation, Footer, Sidebar } from "components";
import { useSelector } from "react-redux";

function HeroContent() {
  const { posts } = useSelector((state) => state.posts);

  return (
    <>
      <Navigation />
      <Flex {...flexMiddleOuterContainerStyle}>
        <Sidebar />
        <Flex {...flexMiddleContainerStyle}>
          <NewPost
            width={{ base: "90vw", md: "30rem" }}
            boxShadow="rgb(0 0 0 / 5%) 0px 0px 10px 4px"
          />
          {posts &&
            posts.map((post) => <DisplayPost key={post._id} post={post} />)}
        </Flex>
        <Suggestions />
      </Flex>
      <Footer />
    </>
  );
}

export { HeroContent };

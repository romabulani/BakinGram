import { Flex } from "@chakra-ui/react";
import { Navigation, Sidebar } from "components";
import { DisplayPost, Footer, Suggestions } from "features";
import { useSelector } from "react-redux";
import {
  flexMiddleContainerStyle,
  flexMiddleOuterContainerStyle,
} from "styles";

function Explore() {
  const { posts } = useSelector((state) => state.posts);
  return (
    <>
      <Navigation />
      <Flex {...flexMiddleOuterContainerStyle}>
        <Sidebar />
        <Flex {...flexMiddleContainerStyle}>
          {posts &&
            [...posts]
              .reverse()
              .map((post) => <DisplayPost key={post._id} post={post} />)}
        </Flex>
        <Suggestions />
      </Flex>
      <Footer />
    </>
  );
}

export { Explore };

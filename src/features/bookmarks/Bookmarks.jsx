import { Flex, Heading } from "@chakra-ui/react";
import { DisplayPost, Suggestions } from "features";
import { Footer, Navigation, Sidebar } from "components";
import {
  flexMiddleContainerStyle,
  flexMiddleOuterContainerStyle,
} from "styles";
import { useSelector } from "react-redux";

function Bookmarks() {
  const { posts } = useSelector((state) => state.posts);
  return (
    <>
      <Navigation />
      <Flex {...flexMiddleOuterContainerStyle}>
        <Sidebar />
        <Flex {...flexMiddleContainerStyle}>
          <Heading size="md" mt="4">
            Bookmarks
          </Heading>
          {posts.map((post) => (
            <DisplayPost key={post._id} post={post} />
          ))}
        </Flex>

        <Suggestions />
      </Flex>
      <Footer />
    </>
  );
}

export { Bookmarks };

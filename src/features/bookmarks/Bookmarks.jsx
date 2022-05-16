import { Flex, Heading } from "@chakra-ui/react";
import { DisplayPost, Suggestions } from "features";
import { Footer, Navigation, Sidebar } from "components";
import {
  flexMiddleContainerStyle,
  flexMiddleOuterContainerStyle,
} from "styles";
import { useSelector } from "react-redux";

function Bookmarks() {
  const { authUser } = useSelector((state) => state.authentication);
  const { posts } = useSelector((state) => state.posts);

  const getPost = (postId) =>
    posts.filter((currPost) => currPost._id === postId)[0];

  return (
    <>
      <Navigation />
      <Flex {...flexMiddleOuterContainerStyle}>
        <Sidebar />
        <Flex {...flexMiddleContainerStyle}>
          {authUser.bookmarks.length === 0 ? (
            <Heading size="lg" mt="16">
              No Bookmarks Yet
            </Heading>
          ) : (
            <>
              <Heading size="md" mt="4">
                Your Bookmarks
              </Heading>
              {authUser.bookmarks.map((postId) => (
                <DisplayPost key={postId} post={getPost(postId)} />
              ))}
            </>
          )}
        </Flex>

        <Suggestions />
      </Flex>
      <Footer />
    </>
  );
}

export { Bookmarks };

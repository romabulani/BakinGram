import { Flex, Heading } from "@chakra-ui/react";
import { DisplayPost, Suggestions } from "features";
import { Footer, Navigation, Sidebar } from "components";
import {
  flexMiddleContainerStyle,
  flexMiddleOuterContainerStyle,
} from "styles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function LikedPosts() {
  const { authUser } = useSelector((state) => state.authentication);
  const { posts } = useSelector((state) => state.posts);
  const [postsLikedByUser, setPostsLikedByUser] = useState([]);

  useEffect(() => {
    setPostsLikedByUser(
      posts?.filter((currPost) =>
        currPost.likes.likedBy.find(
          (currUser) => currUser.username === authUser?.username
        )
      )
    );
  }, [posts]);

  return (
    <>
      <Navigation />
      <Flex {...flexMiddleOuterContainerStyle}>
        <Sidebar />
        <Flex {...flexMiddleContainerStyle}>
          {postsLikedByUser.length === 0 ? (
            <Heading size="lg" mt="4">
              No Liked Posts Yet
            </Heading>
          ) : (
            <>
              <Heading size="md" mt="4">
                Liked Posts
              </Heading>
              {postsLikedByUser.map((post) => (
                <DisplayPost key={post._id} post={post} />
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

export { LikedPosts };

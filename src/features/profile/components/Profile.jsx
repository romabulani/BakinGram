import React, { useEffect } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { loadUserPosts, Suggestions, ProfileCard, DisplayPost } from "features";
import { Footer, Navigation, Sidebar } from "components";
import {
  flexMiddleContainerStyle,
  flexMiddleOuterContainerStyle,
} from "styles";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const { postsDetails } = useSelector((state) => state.profile);
  const { authUser } = useSelector((state) => state.authentication);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadUserPosts(authUser.username)), [posts]);

  return (
    <>
      <Navigation />
      <Flex {...flexMiddleOuterContainerStyle}>
        <Sidebar />
        <Flex {...flexMiddleContainerStyle}>
          <ProfileCard />
          {postsDetails.length > 0 ? (
            postsDetails.map((post) => (
              <DisplayPost key={post._id} post={post} />
            ))
          ) : (
            <Heading>No Posts Yet!</Heading>
          )}
        </Flex>
        <Suggestions />
      </Flex>
      <Footer />
    </>
  );
}

export { Profile };

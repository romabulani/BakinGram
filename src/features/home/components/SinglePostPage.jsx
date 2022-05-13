import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Suggestions, DisplayPost, EditPostModal } from "features";
import { Footer, Navigation, Sidebar } from "components";
import {
  displayCardStyle,
  flexMiddleContainerStyle,
  flexMiddleOuterContainerStyle,
  postCardStyle,
} from "styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Comment } from "./Comment";

function SinglePostPage() {
  const { postId } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (postId && posts) {
      setPost(posts.filter((currPost) => currPost._id === postId)[0]);
    }
  }, [postId, posts]);

  return (
    <>
      <Navigation />
      <Flex {...flexMiddleOuterContainerStyle}>
        <Sidebar />
        {post && (
          <Flex {...flexMiddleContainerStyle}>
            <DisplayPost post={post} singlePage={true} />
            {post.comments &&
              post.comments.map((comment) => (
                <Flex
                  {...postCardStyle}
                  {...displayCardStyle}
                  key={comment._id}
                >
                  <Comment comment={comment} postId={post._id} />
                </Flex>
              ))}
          </Flex>
        )}
        <Suggestions />
      </Flex>
      <Footer />
    </>
  );
}

export { SinglePostPage };

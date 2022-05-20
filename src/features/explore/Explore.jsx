import { Box, Flex, Spinner } from "@chakra-ui/react";
import { Navigation, Sidebar } from "components";
import {
  DisplayPost,
  Footer,
  Suggestions,
  getPagedPosts,
  setPageNum,
} from "features";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  flexMiddleContainerStyle,
  flexMiddleOuterContainerStyle,
} from "styles";

function Explore() {
  const { posts, pagedPosts, pagedPostStatus, pageNum, totalPages } =
    useSelector((state) => state.posts);
  const [lastPost, setLastPost] = useState();
  const dispatch = useDispatch();
  const intersectionObserver = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) dispatch(setPageNum({ pageNum }));
      },
      { threshold: 1 }
    )
  );

  useEffect(() => dispatch(getPagedPosts({ pageNum })), [pageNum, posts]);

  useEffect(() => {
    // setting new last post
    if (lastPost) intersectionObserver.current.observe(lastPost);
    // unsetting the previous last post
    return () => {
      if (lastPost) intersectionObserver.current.disconnect();
    };
  }, [lastPost, intersectionObserver]);

  return (
    <>
      <Navigation />
      <Flex {...flexMiddleOuterContainerStyle}>
        <Sidebar />
        <Flex {...flexMiddleContainerStyle}>
          {pagedPosts.map((post, index) =>
            index === pagedPosts.length - 1 && pageNum < totalPages ? (
              <Box m="0" p="0" key={post._id} ref={setLastPost}>
                <DisplayPost post={post} />
              </Box>
            ) : (
              <DisplayPost post={post} key={post._id} />
            )
          )}
          {pagedPostStatus === "pending" && <Spinner size="lg" />}
        </Flex>
        <Suggestions />
      </Flex>
      <Footer />
    </>
  );
}

export { Explore };

import { Route, Routes } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  Profile,
  HeroContent,
  Bookmarks,
  LoginForm,
  SignupForm,
  PrivateRoute,
  Explore,
  SinglePostPage,
  getUsers,
} from "features";
import { NotFound, ScrollToTop } from "components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "features";

function App() {
  const color = useColorModeValue("gray.800", "whiteAlpha.900");
  const bg = useColorModeValue("whiteAlpha.800", "gray.900");
  const { authToken } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [authToken]);

  return (
    <Box color={color} bg={bg} className="App">
      <ScrollToTop />
      <ToastContainer
        theme={useColorModeValue("light", "dark")}
        position="bottom-right"
        autoClose={800}
        draggable
      />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HeroContent />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <PrivateRoute>
              <Bookmarks />
            </PrivateRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <Explore />
            </PrivateRoute>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <PrivateRoute>
              <SinglePostPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;

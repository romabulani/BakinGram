import { Route, Routes } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  Profile,
  HeroContent,
  Bookmarks,
  Notifications,
  LoginForm,
  SignupForm,
  PrivateRoute,
} from "features";
import { NotFound, ScrollToTop } from "components";

function App() {
  const color = useColorModeValue("gray.800", "whiteAlpha.900");
  const bg = useColorModeValue("whiteAlpha.800", "gray.900");

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
          path="/profile"
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
          path="/notifications"
          element={
            <PrivateRoute>
              <Notifications />
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

import { Route, Routes } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import {
  Profile,
  HeroContent,
  Bookmarks,
  Notifications,
  LoginForm,
  SignupForm,
  ScrollToTop,
} from "components";

function App() {
  const color = useColorModeValue("gray.800", "whiteAlpha.900");
  const bg = useColorModeValue("whiteAlpha.800", "gray.900");

  return (
    <Box color={color} bg={bg} className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HeroContent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Box>
  );
}

export default App;

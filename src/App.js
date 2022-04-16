import { Route, Routes } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Navigation, Home, Footer } from "components";

function App() {
  const color = useColorModeValue("gray.800", "whiteAlpha.900");
  const bg = useColorModeValue("whiteAlpha.800", "gray.900");
  return (
    <Box color={color} bg={bg}>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </div>
    </Box>
  );
}

export default App;

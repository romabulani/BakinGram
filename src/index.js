import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { makeServer } from "./server";
import { theme } from "styles";
import "assets";
import { AuthProvider } from "contexts";
// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { makeServer } from "./server";
import { theme } from "styles";
import "assets";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

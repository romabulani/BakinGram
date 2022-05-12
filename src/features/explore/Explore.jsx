import { Flex } from "@chakra-ui/react";
import { Navigation, Sidebar } from "components";
import { Suggestions } from "features";
import {
  flexMiddleContainerStyle,
  flexMiddleOuterContainerStyle,
} from "styles";

function Explore() {
  return (
    <>
      <Navigation />
      <Flex {...flexMiddleOuterContainerStyle}>
        <Sidebar />
        <Flex {...flexMiddleContainerStyle}></Flex>
        <Suggestions />
      </Flex>
    </>
  );
}

export { Explore };

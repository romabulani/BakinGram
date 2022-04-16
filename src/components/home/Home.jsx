import React from "react";
import { Sidebar, HeroContent, Suggestions } from "components";
import { Flex, useMediaQuery } from "@chakra-ui/react";

function Home() {
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  const [isTablet] = useMediaQuery("(max-width: 1024px)");
  return (
    <Flex
      width="100%"
      justifyContent={isTablet ? "flex-start" : "space-between"}
    >
      {!isMobile && <Sidebar />}
      <HeroContent />
      {!isTablet && <Suggestions />}
    </Flex>
  );
}

export { Home };

import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Avatar,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontAwesomeIconStyle } from "styles";
import { useSelector } from "react-redux";
import { SearchBar } from "features";

function Navigation() {
  const { toggleColorMode, colorMode } = useColorMode();
  const { authUser } = useSelector((state) => state.authentication);
  return (
    <Flex
      width="100%"
      borderBottom="1px"
      borderColor={useColorModeValue("gray.300", "gray.700")}
      height="3.5rem"
      justifyContent="space-between"
      alignItems="center"
      pos="sticky"
      bg={useColorModeValue("white.900", "gray.900")}
      top="0"
      zIndex="8"
    >
      <Flex alignItems="flex-end">
        <Link to="/">
          <Image
            src={useColorModeValue(
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1649076577/ecommerce/logo_sr3h5w.webp",
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652524820/quiz/logo_darktheme2.webp"
            )}
            alt="muffin-logo"
            boxSize="50px"
            objectFit="cover"
            marginLeft="4"
          />
        </Link>

        <Link to="/">
          <Heading
            fontSize="1.6rem"
            padding="1"
            display={{ base: "none", md: "block" }}
          >
            Bakin Gram
          </Heading>
        </Link>
      </Flex>
      <Flex
        border="1px solid"
        borderColor="gray.600"
        focusBorderColor="gray.600"
        borderRadius="full"
        position="relative"
        width="16rem"
        height="70%"
        mx="1rem"
        px="4"
        textAlign="center"
      >
        <SearchBar />
      </Flex>
      <HStack spacing="2" marginLeft={{ base: "2rem", md: "0" }}>
        <FontAwesomeIcon
          icon={colorMode === "light" ? "sun" : "moon"}
          onClick={toggleColorMode}
          style={{ ...fontAwesomeIconStyle, paddingRight: "10px" }}
        />
        <Link to={`/profile/${authUser.username}`}>
          <Avatar
            display={{ base: "none", md: "block" }}
            src={authUser.avatarUrl}
            alt="profile-image"
            size="sm"
            marginRight="8"
            name={authUser.firstName}
          />
        </Link>
      </HStack>
    </Flex>
  );
}

export { Navigation };

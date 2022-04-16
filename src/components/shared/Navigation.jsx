import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation() {
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  const { toggleColorMode, colorMode } = useColorMode();
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
      zIndex="2"
    >
      <Flex alignItems="flex-end">
        <Link to="/">
          <Image
            src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1649076577/ecommerce/logo_sr3h5w.webp"
            alt="muffin-logo"
            boxSize="50px"
            objectFit="cover"
            marginLeft="4"
          />
        </Link>
        {!isMobile && (
          <Link to="/">
            <Heading fontSize="1.6rem" padding="1">
              Bakin Gram
            </Heading>
          </Link>
        )}
      </Flex>
      <Flex
        border="1px solid"
        borderColor="gray.600"
        focusBorderColor="gray.600"
        borderRadius="full"
        position="relative"
        width="17rem"
        height="70%"
        mx="1rem"
        px="4"
      >
        <Input
          type="search"
          border="none"
          placeholder="Search User.."
          variant="unstyled"
          width="85%"
        />
        <FontAwesomeIcon
          icon="magnifying-glass"
          style={{ position: "absolute", right: "8px", top: "10px" }}
        />
      </Flex>
      <HStack spacing="2">
        <FontAwesomeIcon
          icon={colorMode === "light" ? "sun" : "moon"}
          onClick={toggleColorMode}
          style={{ cursor: "pointer", fontSize: "1.2rem", marginRight: "1rem" }}
        />

        {!isMobile && (
          <Link to="/">
            <Image
              src="https://randomuser.me/api/portraits/women/27.jpg"
              alt="profile-image"
              boxSize="30px"
              marginRight="8"
              borderRadius="full"
              objectFit="cover"
            />
          </Link>
        )}
      </HStack>
    </Flex>
  );
}

export { Navigation };

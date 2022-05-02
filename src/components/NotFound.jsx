import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { flexMiddleContainerStyle } from "styles";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
      gap="1rem"
    >
      <Image
        width="60%"
        src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1649009736/ecommerce/404Image_s8lokh.webp"
      />
      <Heading size="md">We couldn't find anything here!</Heading>
      <Flex alignItems="center">
        <Button
          variant="solidPrimary"
          onClick={() => navigate("/", { replace: true })}
        >
          Home
        </Button>
      </Flex>
    </Flex>
  );
}

export { NotFound };

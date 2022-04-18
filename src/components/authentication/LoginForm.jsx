import { useNavigate } from "react-router-dom";
import {
  Flex,
  Image,
  Heading,
  Input,
  Button,
  useColorModeValue,
  FormErrorMessage,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

function LoginForm() {
  const navigate = useNavigate();
  return (
    <Flex w="100%" justifyContent="space-evenly" alignItems="center">
      <Image
        src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1650220511/socialmedia/login.svg"
        width="35%"
        display={{ base: "none", md: "block" }}
        alt="bakingram-promo"
        h="30rem"
      />

      <Flex
        flexDirection="column"
        alignItems="center"
        rowGap="4"
        margin="4"
        mt="8"
        width={{ base: "90%", md: "30%" }}
      >
        <Heading size="lg">Bakin Gram</Heading>
        <form style={{ width: "100%" }}>
          <FormControl
            id="user-name"
            width="100%"
            isRequired
            isInvalid={false}
            my="2"
          >
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="Enter username"
              _focus={{
                borderColor: useColorModeValue("purple.900", "purple.300"),
              }}
            />
            <FormErrorMessage>Please enter email.</FormErrorMessage>
          </FormControl>
          <FormControl
            id="user-name"
            width="100%"
            isRequired
            isInvalid={false}
            my="2"
          >
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Enter password"
              type="password"
              _focus={{
                borderColor: useColorModeValue("purple.900", "purple.300"),
              }}
            />
            <FormErrorMessage>Please enter password.</FormErrorMessage>
          </FormControl>
          <Button variant="solidPrimary" w="100%" my="2">
            Log In
          </Button>
          <Button
            variant="outline"
            w="100%"
            my="2"
            _hover={{
              bg: useColorModeValue("purple.900", "purple.300"),
              color: useColorModeValue("whiteAlpha.900", "gray.900"),
            }}
          >
            Log In as Guest
          </Button>
        </form>
        <Flex>
          <span>Dont have an account?</span>
          <Button
            variant="link"
            display="inline"
            ml="2"
            textDecoration="underline"
            fontSize="1.1rem"
            onClick={() => navigate("/signup")}
          >
            Sign up here
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export { LoginForm };

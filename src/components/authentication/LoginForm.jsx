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
  Box,
  IconButton,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLoginHandler } from "hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LoginForm() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [errorData, setErrorData] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { loginHandler } = useLoginHandler();
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
        <form
          style={{ width: "100%" }}
          onSubmit={(e) =>
            loginHandler(e, setLoginData, setErrorData, loginData)
          }
        >
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
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
              onFocus={() => setErrorData(false)}
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
            <InputGroup size="md">
              <Input
                placeholder="Enter password"
                type={show ? "text" : "password"}
                _focus={{
                  borderColor: useColorModeValue("purple.900", "purple.300"),
                }}
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                onFocus={() => setErrorData(false)}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  size="sm"
                  onClick={handleClick}
                  variant="iconButton"
                >
                  <FontAwesomeIcon icon={show ? "eye" : "eye-slash"} />
                </IconButton>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>Please enter password.</FormErrorMessage>
          </FormControl>
          <Button variant="solidPrimary" type="submit" w="100%" my="2">
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
            onClick={(e) => loginHandler(e, setLoginData, setErrorData, null)}
          >
            Log In as Guest
          </Button>
        </form>
        {errorData && (
          <Box color="red.500">
            <FontAwesomeIcon icon="circle-exclamation"></FontAwesomeIcon>
            <span> Email or Password is incorrect</span>
          </Box>
        )}
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

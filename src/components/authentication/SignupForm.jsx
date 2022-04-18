import { useNavigate } from "react-router-dom";
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  FormErrorMessage,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { inputLeftWrapperStyle, inputWrapperStyle } from "styles";

function SignupForm() {
  const navigate = useNavigate();
  return (
    <Flex justifyContent="center">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        rowGap="4"
        margin="4"
        mt="8"
        width={{ base: "90%", md: "30%" }}
      >
        <Heading size="lg">Bakin Gram</Heading>
        <Heading size="md">SIGN UP</Heading>
        <form style={{ width: "100%" }}>
          <FormControl
            id="first-name"
            width="100%"
            isRequired
            isInvalid={false}
            my="1"
            {...inputWrapperStyle}
          >
            <FormLabel {...inputLeftWrapperStyle}>First Name</FormLabel>
            <Input
              placeholder="Enter First Name"
              _focus={{
                borderColor: useColorModeValue("purple.900", "purple.300"),
              }}
            />
            <FormErrorMessage>Please enter valid first name.</FormErrorMessage>
          </FormControl>
          <FormControl
            id="last-name"
            width="100%"
            isRequired
            isInvalid={false}
            my="1"
            {...inputWrapperStyle}
          >
            <FormLabel {...inputLeftWrapperStyle}>Last Name</FormLabel>
            <Input
              placeholder="Enter Last Name"
              _focus={{
                borderColor: useColorModeValue("purple.900", "purple.300"),
              }}
            />
            <FormErrorMessage>Please enter valid last name.</FormErrorMessage>
          </FormControl>
          <FormControl
            id="email-address"
            width="100%"
            isRequired
            isInvalid={false}
            my="1"
            {...inputWrapperStyle}
          >
            <FormLabel {...inputLeftWrapperStyle}>Email Address</FormLabel>
            <Input
              placeholder="Enter Email"
              type="email"
              _focus={{
                borderColor: useColorModeValue("purple.900", "purple.300"),
              }}
            />
            <FormErrorMessage>Please enter valid email.</FormErrorMessage>
          </FormControl>
          <FormControl
            id="user-name"
            width="100%"
            isRequired
            isInvalid={false}
            my="1"
            {...inputWrapperStyle}
          >
            <FormLabel {...inputLeftWrapperStyle}>Username</FormLabel>
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
            my="1"
            {...inputWrapperStyle}
          >
            <FormLabel {...inputLeftWrapperStyle}>Password</FormLabel>
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
            Sign up
          </Button>
        </form>
        <Flex>
          <span>Already have an account?</span>
          <Button
            variant="link"
            display="inline"
            ml="2"
            textDecoration="underline"
            fontSize="1.1rem"
            onClick={() => navigate("/login")}
          >
            Log In here
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export { SignupForm };

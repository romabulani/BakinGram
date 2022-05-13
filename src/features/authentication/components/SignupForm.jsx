import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  FormErrorMessage,
  FormLabel,
  FormControl,
  IconButton,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import {
  inputLeftWrapperStyle,
  inputRightWrapperStyle,
  inputWrapperStyle,
} from "styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSignupHandler } from "../hooks";
import { useSelector } from "react-redux";

function SignupForm() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { formData, formDispatch, errorData, errorDispatch, signUpHandler } =
    useSignupHandler();
  const location = useLocation();

  useEffect(() => {
    navigate(location?.state?.from?.pathname || "/", { replace: true });
  }, []);

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
        <form
          style={{ width: "100%" }}
          onSubmit={(e) => {
            signUpHandler(e);
          }}
          noValidate
        >
          <FormControl
            id="first-name"
            width="100%"
            isRequired
            isInvalid={errorData.firstName.length > 0}
            my="1"
            {...inputWrapperStyle}
          >
            <FormLabel {...inputLeftWrapperStyle}>First Name</FormLabel>
            <Flex flexDirection="column" {...inputRightWrapperStyle}>
              <Input
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={(e) =>
                  formDispatch({
                    type: "INPUT_FIRST_NAME",
                    payload: e.target.value,
                  })
                }
                onFocus={() => {
                  errorDispatch({
                    type: "ERROR_FIRST_NAME",
                    payload: "",
                  });
                }}
                _focus={{
                  borderColor: useColorModeValue("purple.900", "purple.300"),
                }}
              />
              <FormErrorMessage>{errorData.firstName}</FormErrorMessage>
            </Flex>
          </FormControl>

          <FormControl
            id="last-name"
            width="100%"
            isRequired
            isInvalid={errorData.lastName.length > 0}
            my="1"
            {...inputWrapperStyle}
          >
            <FormLabel {...inputLeftWrapperStyle}>Last Name</FormLabel>
            <Flex flexDirection="column" {...inputRightWrapperStyle}>
              <Input
                placeholder="Enter Last Name"
                _focus={{
                  borderColor: useColorModeValue("purple.900", "purple.300"),
                }}
                value={formData.lastName}
                onChange={(e) =>
                  formDispatch({
                    type: "INPUT_LAST_NAME",
                    payload: e.target.value,
                  })
                }
                onFocus={() =>
                  errorDispatch({
                    type: "ERROR_LAST_NAME",
                    payload: "",
                  })
                }
              />
              <FormErrorMessage>{errorData.lastName}</FormErrorMessage>
            </Flex>
          </FormControl>

          <FormControl
            id="email-address"
            width="100%"
            isRequired
            isInvalid={errorData.email.length > 0}
            my="1"
            {...inputWrapperStyle}
          >
            <FormLabel {...inputLeftWrapperStyle}>Email Address</FormLabel>
            <Flex flexDirection="column" {...inputRightWrapperStyle}>
              <Input
                placeholder="Enter Email"
                type="email"
                _focus={{
                  borderColor: useColorModeValue("purple.900", "purple.300"),
                }}
                value={formData.email}
                onChange={(e) =>
                  formDispatch({ type: "INPUT_EMAIL", payload: e.target.value })
                }
                onFocus={() =>
                  errorDispatch({
                    type: "ERROR_EMAIL",
                    payload: "",
                  })
                }
              />
              <FormErrorMessage>{errorData.email}</FormErrorMessage>
            </Flex>
          </FormControl>

          <FormControl
            id="user-name"
            width="100%"
            isRequired
            isInvalid={errorData.username.length > 0}
            my="1"
            {...inputWrapperStyle}
          >
            <FormLabel {...inputLeftWrapperStyle}>Username</FormLabel>
            <Flex flexDirection="column" {...inputRightWrapperStyle}>
              <Input
                placeholder="Enter username"
                _focus={{
                  borderColor: useColorModeValue("purple.900", "purple.300"),
                }}
                value={formData.username}
                onChange={(e) =>
                  formDispatch({
                    type: "INPUT_USERNAME",
                    payload: e.target.value,
                  })
                }
                onFocus={() =>
                  errorDispatch({
                    type: "ERROR_USERNAME",
                    payload: "",
                  })
                }
              />
              <FormErrorMessage>{errorData.username}</FormErrorMessage>
            </Flex>
          </FormControl>

          <FormControl
            id="password"
            width="100%"
            isRequired
            isInvalid={errorData.password.length > 0}
            my="1"
            {...inputWrapperStyle}
          >
            <FormLabel {...inputLeftWrapperStyle}>Password</FormLabel>
            <Flex flexDirection="column" {...inputRightWrapperStyle}>
              <InputGroup size="md">
                <Input
                  placeholder="Enter password"
                  type={show ? "text" : "password"}
                  isInvalid={errorData.password.length > 0}
                  _focus={{
                    borderColor: useColorModeValue("purple.900", "purple.300"),
                  }}
                  value={formData.password}
                  onChange={(e) =>
                    formDispatch({
                      type: "INPUT_PASSWORD",
                      payload: e.target.value,
                    })
                  }
                  onFocus={() =>
                    errorDispatch({
                      type: "ERROR_PASSWORD",
                      payload: "",
                    })
                  }
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
              <FormErrorMessage>{errorData.password}</FormErrorMessage>
            </Flex>
          </FormControl>

          <Button variant="solidPrimary" w="100%" my="2" type="submit">
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
            onClick={() =>
              navigate("/signup", { state: location.state, replace: true })
            }
          >
            Log In here
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export { SignupForm };

import { useReducer } from "react";
import { postSignupData } from "services";
import { useLoginHandler } from "./useLoginHandler";

function useSignupHandler() {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const initialErrorState = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "INPUT_FIRST_NAME":
        return {
          ...state,
          firstName: action.payload,
        };
      case "INPUT_LAST_NAME":
        return {
          ...state,
          lastName: action.payload,
        };
      case "INPUT_EMAIL":
        return {
          ...state,
          email: action.payload,
        };
      case "INPUT_USERNAME":
        return {
          ...state,
          username: action.payload,
        };
      case "INPUT_PASSWORD":
        return {
          ...state,
          password: action.payload,
        };
    }
  };

  const errorReducer = (state, action) => {
    switch (action.type) {
      case "ERROR_FIRST_NAME":
        return {
          ...state,
          firstName: action.payload,
        };
      case "ERROR_LAST_NAME":
        return {
          ...state,
          lastName: action.payload,
        };
      case "ERROR_EMAIL":
        return {
          ...state,
          email: action.payload,
        };
      case "ERROR_USERNAME":
        return {
          ...state,
          username: action.payload,
        };
      case "ERROR_PASSWORD":
        return {
          ...state,
          password: action.payload,
        };
    }
  };

  const [errorData, errorDispatch] = useReducer(
    errorReducer,
    initialErrorState
  );
  const [formData, formDispatch] = useReducer(formReducer, initialFormState);

  const checkValidation = () => {
    let signupFlag = true;

    if (!new RegExp("^[a-zA-Z]+$").test(formData.firstName)) {
      errorDispatch({
        type: "ERROR_FIRST_NAME",
        payload: "Please enter valid First Name",
      });
      signupFlag = false;
    }

    if (!new RegExp("^[a-zA-Z]+$").test(formData.lastName)) {
      errorDispatch({
        type: "ERROR_LAST_NAME",
        payload: "Please enter valid Last Name",
      });
      signupFlag = false;
    }

    if (!new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(formData.email)) {
      errorDispatch({
        type: "ERROR_EMAIL",
        payload: " Please enter valid email",
      });
      signupFlag = false;
    }
    if (!new RegExp("^[a-z0-9_.]+$").test(formData.username)) {
      errorDispatch({
        type: "ERROR_USERNAME",
        payload: "Username can contain letters, digits, _ and .",
      });
      signupFlag = false;
    }
    if (
      !new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}"
      ).test(formData.password)
    ) {
      errorDispatch({
        type: "ERROR_PASSWORD",
        payload:
          "Password should contain atleast 8 characters, 1 uppercase, 1 lowercase, 1 digit and 1 special character",
      });
      signupFlag = false;
    }

    return signupFlag;
  };
  const { loginHandler } = useLoginHandler();

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (checkValidation()) {
      const response = await postSignupData(formData);
      if (response && response.status === 201)
        loginHandler(null, null, null, {
          username: formData.username,
          password: formData.password,
        });
    }
  };

  return { formData, formDispatch, errorData, errorDispatch, signUpHandler };
}

export { useSignupHandler };

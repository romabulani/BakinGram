import axios from "axios";
import { toast } from "react-toastify";

const postLoginData = async (username, password) => {
  try {
    const response = await axios.post("/api/auth/login", {
      username,
      password,
    });
    if (response.status === 200) {
      toast.success("Log In successful");
      return response.data;
    } else throw new Error();
  } catch (e) {
    toast.error(`Couldn't Login! Please try again.`);
    console.error("postLoginData: Error in Login", e);
  }
};

const postSignupData = async (formData) => {
  let response;
  try {
    response = await axios.post("/api/auth/signup", formData);
    if (response.status === 201) {
      toast.success("Sign up successful.");
      return response;
    }
  } catch (e) {
    if (e.response.status === 422) toast.error("Username is already taken");
    else {
      toast.error(`Couldn't Signup! Please try again.`);
      console.error("signUpHandler : Error in signing up", e);
    }
  }
};

export { postLoginData, postSignupData };

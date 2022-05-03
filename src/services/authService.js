import axios from "axios";

const postLoginData = async (username, password) =>
  axios.post("/api/auth/login", {
    username,
    password,
  });

const postSignupData = async (formData) =>
  await axios.post("/api/auth/signup", {
    ...formData,
    bio: "",
    website: "",
    avatarURL: "",
  });

const editUser = async (userData, authorization) =>
  await axios.post(
    "/api/users/edit",
    { userData },
    {
      headers: { authorization },
    }
  );

export { postLoginData, postSignupData, editUser };

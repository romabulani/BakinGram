import axios from "axios";

const postLoginData = (username, password) =>
  axios.post("/api/auth/login", {
    username,
    password,
  });

const postSignupData = (formData) =>
  axios.post("/api/auth/signup", {
    ...formData,
    bio: "",
    website: "",
    avatarURL: "",
  });

const editUser = (userData, authorization) =>
  axios.post(
    "/api/users/edit",
    { userData },
    {
      headers: { authorization },
    }
  );
const addBookmarkInServer = (postId, authorization) =>
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization },
    }
  );

const removeBookmarkFromServer = (postId, authorization) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization },
    }
  );

export {
  postLoginData,
  postSignupData,
  editUser,
  addBookmarkInServer,
  removeBookmarkFromServer,
};

import axios from "axios";

const getAllUsers = () => axios.get("/api/users");

const getUser = (username) => axios.get(`/api/users/${username}`);

export { getAllUsers, getUser };

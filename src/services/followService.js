import axios from "axios";

const followUserInServer = (followUserId, authorization) => {
  return axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization } }
  );
};
const unfollowUserInServer = (followUserId, authorization) =>
  axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    { headers: { authorization } }
  );

export { followUserInServer, unfollowUserInServer };

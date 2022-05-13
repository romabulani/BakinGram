import axios from "axios";

const getCommentsOfPostFromServer = (postId) =>
  axios.get(`/api/comments/${postId}`);

const addCommentToPostInServer = (postId, commentData, authorization) =>
  axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    { headers: { authorization } }
  );

const editCommentInServer = (postId, commentId, commentData, authorization) =>
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    { headers: { authorization } }
  );

const deleteCommentFromServer = (postId, commentId, authorization) =>
  axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
    headers: { authorization },
  });

export {
  getCommentsOfPostFromServer,
  addCommentToPostInServer,
  editCommentInServer,
  deleteCommentFromServer,
};

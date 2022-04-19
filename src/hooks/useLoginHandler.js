import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts";
import { postLoginData } from "services";

function useLoginHandler() {
  const { setAuthToken, setAuthUser } = useAuth();
  const navigate = useNavigate();

  const loginHandler = async (e, setLoginData, setErrorData, loginData) => {
    if (e) e.preventDefault();
    try {
      let response;
      if (e && e.target.innerText === "Log In as Guest") {
        setLoginData({
          username: "adarshbalika",
          password: "adarshBalika123",
        });
        response = await postLoginData("adarshbalika", "adarshBalika123");
      } else
        response = await postLoginData(loginData.username, loginData.password);
      const user = JSON.stringify(response.foundUser);
      const tokenResponse = response.encodedToken;
      setAuthToken(tokenResponse);
      setAuthUser(response.foundUser);
      localStorage.setItem("authToken", tokenResponse);
      localStorage.setItem("authUser", user);
      navigate("/");
    } catch (e) {
      console.error("loginHandler: Error in Login", e);
      setErrorData(true);
    }
  };
  return { loginHandler };
}

export { useLoginHandler };

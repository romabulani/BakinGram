import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const { authToken } = useSelector((state) => state.authentication);
  const location = useLocation();
  return authToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { PrivateRoute };

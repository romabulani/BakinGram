import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "contexts";
import { HeroContent } from "components";

function PrivateRoute({ children }) {
  const { authToken } = useAuth();
  const location = useLocation();
  return authToken ? (
    children ? (
      children
    ) : (
      <HeroContent />
    )
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { PrivateRoute };

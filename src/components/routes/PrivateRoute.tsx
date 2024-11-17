/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  IsLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  IsLoggedIn,
  setIsLoggedIn,
}) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return IsLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

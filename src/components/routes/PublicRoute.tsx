import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PublicRouteProps {
  isLoggedIn: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ isLoggedIn }) => {
    return isLoggedIn ? <Navigate to={'/'} /> : <Outlet />
};

export default PublicRoute;

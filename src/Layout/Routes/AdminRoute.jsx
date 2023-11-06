import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAdmin from "../../Hooks/Admin/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../../Shared/LoadingPage/LoadingPage";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();

  if (loading || isLoading) {
    return <LoadingPage />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;

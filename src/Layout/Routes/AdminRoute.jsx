import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAdmin from "../../Hooks/Admin/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to='/' state={{ from: location }} replace />;
};

export default AdminRoute;

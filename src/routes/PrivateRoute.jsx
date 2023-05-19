/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-full"></progress>;
  }

  if (user) {
    return children;
  }
  Swal.fire({
    icon: "warning",
    title: "Login first to View Details",
  });

  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoute;

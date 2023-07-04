import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, admin }) => {
  const adminUserName = localStorage.getItem("userName");
  if (!adminUserName) return <Navigate to="/" />;

  //   if(admin && !(user.roles.includes("Administrator") || user.roles.includes("Manager")))
  //     return <Navigate to="/Unauthorized" />;

  return children;
};

export default ProtectedRoute;

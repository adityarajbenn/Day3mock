import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  let data = useSelector((store) => {
    return store;
  });
  if (data.isAuth) return children;
  return <Navigate to="/login" />;
}

export default PrivateRoute;

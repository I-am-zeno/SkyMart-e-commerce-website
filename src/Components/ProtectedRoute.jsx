import React from "react";
import { SkyMartContext } from "../Context/ContextProvider";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const isAutharized = !!localStorage.getItem("session");
  return isAutharized ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;

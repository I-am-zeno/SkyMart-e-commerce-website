import React from "react";
import { Route, Routes } from "react-router";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Shop from "../Pages/Shop";
import ProtectedRoute from "../Components/ProtectedRoute";
import About from "../Pages/About";
import ProductDetail from "../Pages/ProductDetails";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/products"} element={<Shop />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/product/:id"} element={<ProductDetail/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;

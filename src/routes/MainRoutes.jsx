import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import AddProduct from "../components/products/AddProduct";
import ProductList from "../components/products/ProductList";
import EditPoduct from "../components/products/EditPoduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>HOME PAGE</h1>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/edit/:id" element={<EditPoduct />} />
      <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
    </Routes>
  );
};

export default MainRoutes;

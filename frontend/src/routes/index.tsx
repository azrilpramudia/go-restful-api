import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Routes, Route, Navigate } from "react-router";
import Home from "../views/home";
import Register from "../views/auth/register";
import Login from "../views/auth/login";

export default function AppRoutes() {
  const auth = useContext(AuthContext);
  const isAuthenticated = auth?.isAuthenticated ?? false;

  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />

      {/* route "/register" */}
      <Route
        path="/register"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Register />
          )
        }
      />

      {/* route "/login" */}
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Login />
          )
        }
      />
    </Routes>
  );
}

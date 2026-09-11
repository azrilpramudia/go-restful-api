import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Routes, Route, Navigate } from "react-router";
import Home from "../views/home";
import Register from "../views/auth/register";
import Login from "../views/auth/login";

export default function AppRoutes() {
  const auth = useContext(AuthContext);
  const setIsAuthenticated = auth?.setIsAuthenticated ?? false;

  return (
    <Routes>
      {/* {Route} */}
      <Route path="/" element={<Home />} />

      {/* {Register} */}
      <Route
        path="/register"
        element={
          setIsAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Register />
          )
        }
      />

      {/* {Login} */}
      <Route
        path="/login"
        element={
          setIsAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Login />
          )
        }
      />
    </Routes>
  );
}

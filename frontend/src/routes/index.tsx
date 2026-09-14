import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.tsx";
import { Routes, Route, Navigate } from "react-router";
import Home from "../views/home/index.tsx";
import Register from "../views/auth/register.tsx";
import Login from "../views/auth/login.tsx";
import Dashboard from "../views/admin/dashboard/index.tsx";

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

      {/* route "/admin/dashboard" */}
      <Route
        path="/admin/dashboard"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}

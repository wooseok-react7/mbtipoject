import React, { createContext, useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const token = localStorage.getItem("authToken");

export const ProtectedRoute = ({ token }) => {
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const login = (token) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
    navigate("/");
  };

  const logout = () => {
    console.log("하하");
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    alert("로그아웃이 되었습니다.");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

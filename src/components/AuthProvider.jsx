import React, { createContext, useState, useEffect, useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const token = localStorage.getItem("authToken");

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const [user, setUser] = useState(null);

  console.log("user", user);
  const login = (token) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
    // setUser(userInfo); // 사용자 정보 설정
    navigate("/");
  };

  const logout = () => {
    console.log("하하");
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    toast("로그아웃이 되었습니다.");
    navigate("/");
  };

  console.log(user);
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

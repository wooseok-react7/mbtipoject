import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    alert("로그아웃이 되었습니다.");
  };

  const handleMyPage = () => {
    const token = localStorage.getItem("authToken");

    if (token) {
      navigate("/testPage");
    } else {
      alert("로그인이 필요한 페이지 입니다.");
      navigate("/login");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      {/* <button onClick={handleMyPage}>MBTI 검사하기🫵</button>
      {isLoggedIn ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <button onClick={handleLogin}>로그인</button>
      )} */}
    </>
  );
};

export default HomePage;

import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleMyPage = () => {
    navigate("/mbti");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <button onClick={handleMyPage}>MBTI 검사하기🫵</button>
      <button onClick={handleLogin}>로그인</button>
    </>
  );
};

export default HomePage;

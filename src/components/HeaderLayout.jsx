import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "./AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // 이 부분이 있어야 함

const Heabar = styled.header`
  background-color: #fbfbfb;
  height: 100px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBtn = styled.button`
  background-color: white;
  height: 35px;
  position: absolute;
  left: 1800px;
`;

const HeaderLayout = () => {
  const navigate = useNavigate();
  const handleMypage = () => {
    navigate("/mypage");
  };

  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleTestPage = () => {
    const token = localStorage.getItem("authToken");

    if (token) {
      navigate("/testPage");
    } else {
      toast("로그인이 필요한 페이지 입니다.");
      navigate("/login");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };
  console.log(isAuthenticated);

  return (
    <>
      <ToastContainer />
      <Heabar>
        <HeaderTitle>Yo🫵r MBTI</HeaderTitle>
        <button onClick={handleTestPage}>YOUR MBTI🫵</button>
        <LinkTag>
          <Link to="/mypage">내 정보</Link>
          <Link onClick={handleMypage}>진짜 내 정보 </Link>
          <Link to="/results">테스트 결과</Link>
        </LinkTag>
        {isAuthenticated ? (
          <LoginBtn onClick={logout}>로그아웃</LoginBtn>
        ) : (
          <LoginBtn onClick={handleLogin}>로그인 </LoginBtn>
        )}
      </Heabar>

      {/* <Bodybar></Bodybar> */}

      <Outlet />
    </>
  );
};

const LinkTag = styled.div`
  margin-left: 100px;
`;

const HeaderTitle = styled.h1`
  position: absolute;
  left: 70px;
  top: 10px;
  background-color: green;

  & :hover {
    background-color: red;
  }
`;

export default HeaderLayout;

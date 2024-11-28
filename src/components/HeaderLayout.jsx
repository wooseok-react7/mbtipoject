import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "./AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MbtiHeader from "../assets/image/MbtiHeader.png";

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
        <MbtiHeaderImg src={MbtiHeader} />
        <HeaderTitle> MBTI</HeaderTitle>
        <HeaderLink to="/">Main</HeaderLink>
        <HeaderLink to="/resultlist">모두의 Mbti</HeaderLink>
        <HeaderLink to="/mypage">내 정보 </HeaderLink>
        <HeaderLink to="/results">테스트 결과</HeaderLink>
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

const MbtiHeaderImg = styled.img`
  height: 130px;
  position: absolute;
  left: 50px;
  top: 1px;
`;

const HeaderLink = styled(Link)`
  font-size: 20px;
  margin: 50px;
  text-decoration: none; /* 밑줄 없앰 */
  color: inherit; /* 부모 색상 유지 */
  transition: transform 0.2s ease, color 0.2s ease;
  &:hover {
    transform: scale(1.1); /* 크기를 1.1배 확대 */
    color: #2ecc71; /* 색상 변경 (옵션) */
  }
  &:active,
  &:visited {
    text-decoration: none;
    color: inherit;
  }
`;

const HeaderTitle = styled.h1`
  position: absolute;
  left: 150px;
  top: 72px;
  font-size: 10px;
  /* background-color: green; */

  & :hover {
    background-color: red;
  }
`;

export default HeaderLayout;

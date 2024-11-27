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
`;

const HeaderLayout = () => {
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleMypage = () => {
    navigate("/mypage");
  };

  const { isAuthenticated, logout } = useContext(AuthContext);

  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   setIsLoggedIn(!!token);
  // }, []);

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
      <ToastContainer position="top-center" />
      <Heabar>
        <div>
          <button onClick={handleTestPage}>MBTI 검사하기🫵</button>
          {isAuthenticated ? (
            <button onClick={logout}>로그아웃</button>
          ) : (
            <button onClick={handleLogin}>로그인 </button>
          )}
          <li>
            <Link to="/mypage">내 정보</Link>
          </li>
          <Link onClick={handleMypage}>진짜 내 정보 </Link>
        </div>
      </Heabar>

      {/* <Bodybar></Bodybar> */}

      <Outlet />
    </>
  );
};

export default HeaderLayout;

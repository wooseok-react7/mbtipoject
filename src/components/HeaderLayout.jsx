import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "./AuthProvider";

const Heabar = styled.header`
  background-color: gray;
  height: 100px;
`;

const HeaderLayout = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { isAuthenticated, logout } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    // alert("로그아웃이 되었습니다.");
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
  console.log(isAuthenticated);
  return (
    <>
      <Heabar>
        <div>
          <button onClick={handleMyPage}>MBTI 검사하기🫵</button>
          {isAuthenticated ? (
            <button onClick={logout}>로그아웃</button>
          ) : (
            <button onClick={handleLogin}>로그인 </button>
          )}
          <Link to="/mypage">내 정보</Link>
        </div>
      </Heabar>

      {/* <Bodybar></Bodybar> */}

      <Outlet />
    </>
  );
};

export default HeaderLayout;

// import React, { useContext } from "react";
import { useContext } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { AuthContext } from "./AuthProvider";

const slideInBottom = keyframes`
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  `;

const TopScrollButton = styled.button`
  width: 35px;
  height: 35px;
  background: linear-gradient(#44ea76, #39fad7);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  border: none;
  bottom: -50px;
  left: 40%;

  svg path {
    fill: white;
  }

  .text {
    font-size: 10px;
    width: 100px;
    position: absolute;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: -18px;
    opacity: 0;
    transition-duration: 0.7s;
  }

  &:hover .text {
    opacity: 1;
    transition-duration: 0.7s;
  }

  &:hover svg {
    animation: ${slideInBottom} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

const Sidebar = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  gap: 80px;
  position: fixed;
  width: 120px;
  height: 500px;
  border-radius: 10px;
  top: 190px; /* 화면 상단에서 150px 떨어짐 */
  right: 120px; /* 화면 오른쪽에서 50px 떨어짐 */
  z-index: 1000; /* 다른 요소 위에 표시 */
`;

const SideLayout = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  // const { logout } = useContext(AuthContext);

  // const isLoggedIn = !!localStorage.getItem("authToken");
  // if (!isLoggedIn) {
  //   return <Navigate to="/login" replace />;
  // }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Sidebar>
        <li>
          <p>로고</p>
        </li>

        {isAuthenticated ? (
          <button onClick={logout}>로그아웃</button>
        ) : (
          <button onClick={handleLogin}>로그인 </button>
        )}

        <Link to="/">메인 화면</Link>
        <Link to="/mypage">내 정보</Link>
        <Link to="/results">모두의 MBTI</Link>
        <TopScrollButton onClick={() => scrollToTop()}>
          <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
          </svg>
        </TopScrollButton>
      </Sidebar>

      <Outlet />
    </>
  );
};

export default SideLayout;

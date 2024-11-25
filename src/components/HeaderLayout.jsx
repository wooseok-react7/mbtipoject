import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Heabar = styled.header``;

const HeaderLayout = () => {
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
      <Heabar>
        <div>
          <button onClick={handleMyPage}>MBTI 검사하기🫵</button>
          {isLoggedIn ? (
            <button onClick={handleLogout}>로그아웃</button>
          ) : (
            <button onClick={handleLogin}>로그인 </button>
          )}
          <Link to="/mypage">내 정보</Link>
        </div>
      </Heabar>

      {/* <Sidebar>
        {LayoutSide && (
          <div>
            <button onClick={handleLogout}>로그아웃</button>
            <Link to="/">메인 화면</Link>
            <Link to="/mypage">내 정보</Link>
            <TopScrollButton>
              <svg height="1.2em" class="arrow" viewBox="0 0 512 512">
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
              </svg>
              <p>Back to Top</p>
            </TopScrollButton>
          </div>
        )}
      </Sidebar> */}

      <Outlet />
    </>
  );
};

export default HeaderLayout;

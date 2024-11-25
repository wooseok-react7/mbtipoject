import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  background-color: gray;
  height: 100px;
`;
const LoginBut = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1850px;
  height: 50px;
  margin-top: -80px;
`;

// const Sidebar = styled.div`
//   background-color: green;
//   position: fixed;
//   width: 150px;
//   height: 500px;
//   border-radius: 10px;
//   margin-left: auto;
//   margin-top: 100px;
//   margin-right: 50px;
// `;

const Sidebar = styled.div`
  background-color: green;
  position: fixed;
  width: 150px;
  height: 500px;
  border-radius: 10px;
  top: 150px; /* 화면 상단에서 150px 떨어짐 */
  right: 50px; /* 화면 오른쪽에서 50px 떨어짐 */
  z-index: 1000; /* 다른 요소 위에 표시 */
`;

const Badybar = styled.div`
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 1000px;
`;

const Header = () => {
  return (
    <>
      <Navbar>
        <h1>MBTI TEST</h1>
        <Link>mbti 종류</Link>
        <Link>마이페이지</Link>
        <LoginBut>로그인</LoginBut>
      </Navbar>

      <Badybar>
        <p>아오아오아오</p>
      </Badybar>

      <Sidebar>
        <p>아오</p>
      </Sidebar>
    </>
  );
};

export default Header;

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

const Header = () => {
  return (
    <>
      <Navbar>
        <h1>MBTI TEST</h1>
        <Link>mbti 종류</Link>
        <Link>마이페이지</Link>
        <LoginBut>로그인</LoginBut>
      </Navbar>
    </>
  );
};

export default Header;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import axios from "axios";
import { AuthContext } from "../components/AuthProvider";
import { toast } from "react-toastify";
import styled from "styled-components";
import MbtiLogin from "../assets/image/MbtiLogin.png";
import MbtiLogin1 from "../assets/image/MbtiLogin1.png";
import MbtiLogin2 from "../assets/image/MbtiLogin2.png";
import MbtiLogin3 from "../assets/image/MbtiLogin3.png";
import MbtiLogin4 from "../assets/image/MbtiLogin4.png";
// import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { login: loginContext } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    const userData = {
      id: userId,
      password,
    };

    try {
      const response = await login(userData);
      console.log(toast);
      setUser({ nickname: response.nickname, userId: response.userId });
      if (response.success) {
        toast("로그인 성공!");
        // 토큰 저장 (예: localStorage)
        loginContext();
        // 홈 이동
      } else {
        toast(response.message || "로그인에 실패했습니다.");
      }
    } catch (error) {
      console.error("로그인 중 오류:", error.message);
      toast(error.message);
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <Wrapper>
      <LoginCard>
        <label>로그인</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        ></input>
        <label>패스워드</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={handleLogin}>로그인</button>
        <button onClick={handleSignup}>회원가입</button>
        <LoginImg>
          <MbtiLoginImg src={MbtiLogin1} />
          <MbtiLoginImg src={MbtiLogin2} />
          <MbtiLoginImg src={MbtiLogin} />
          <MbtiLoginImg src={MbtiLogin3} />
          <MbtiLoginImg src={MbtiLogin4} />
        </LoginImg>
      </LoginCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: wheat;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
`;
const MbtiLoginImg = styled.img`
  margin-top: 90px;
  height: 100px;
  transition: transform 0.2s ease, color 0.2s ease;
  &:hover {
    transform: scale(1.1); /* 크기를 1.1배 확대 */
    color: #2ecc71; /* 색상 변경 (옵션) */
  }
`;

const LoginImg = styled.div`
  gap: 10px;
`;

const LoginCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 100px;
  position: absolute;
  top: 120px;
  gap: 30px;
  width: 500px;
  height: 600px;
  background-color: wheat;
  border-radius: 10px;
`;

export default Login;

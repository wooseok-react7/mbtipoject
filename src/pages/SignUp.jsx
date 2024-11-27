import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import styled from "styled-components";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const goSignUp = async () => {
    if (!userId.trim()) {
      alert("아이디를 입력하세요.");
      return;
    }

    if (!userNickname.trim()) {
      alert("닉네임을 입력하세요.");
      return;
    }

    if (!password.trim()) {
      alert("비밀번호를 입력하세요.");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 회원가입 처리
    try {
      const userData = { id: userId, password, nickname: userNickname };
      const result = await register(userData);
      console.log(result);

      if (!result.success) {
        // 서버 응답에 따른 에러 메시지 처리
        if (result.error === "duplicate_id") {
          alert("이미 존재하는 아이디입니다.");
        } else {
          alert(result.message || "회원가입에 실패했습니다.");
        }
        return;
      }

      // 회원가입 성공 처리
      alert("회원가입이 완료되었습니다!");
      navigate("/login");
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
      alert("회원가입 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <LoginCard>
        <label>아이디</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        ></input>

        <label>닉네임</label>
        <input
          type="text"
          value={userNickname}
          onChange={(e) => setUserNickname(e.target.value)}
        ></input>

        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <label>비밀번호 확인</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>

        <button onClick={goSignUp}>회원가입</button>
        <button onClick={handleHome}>뒤로가기</button>
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

export default SignUp;

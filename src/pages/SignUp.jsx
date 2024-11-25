import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const goSignUp = async () => {
    // 유효성 검사
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

    // 회원가입 및 중복 확인
    try {
      const userData = { id: userId, password, nickname: userNickname };
      const result = await register(userData);

      if (result.error === "duplicate_id") {
        alert("중복된 아이디입니다.");
        return;
      }

      if (result.error === "duplicate_nickname") {
        alert("중복된 닉네임입니다.");
        return;
      }

      // 회원가입 성공 처리
      console.log("Registration successful:", result);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("회원가입 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div>
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
    </div>
  );
};

export default SignUp;

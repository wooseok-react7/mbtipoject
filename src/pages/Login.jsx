import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // try {
    const userData = { id: userId, password };
    const response = await login(userData);

    if (response.length > 0) {
      navigate("/");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      // }
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <form>
        <label>로그인</label>
        <input type="text" value={} onChange={}></input>
        <label>패스워드</label>
        <input type="password" value={} onChange={}></input>
        <button onClick={handleLogin}>로그인</button>
        <button onClick={handleSignup}>회원가입</button>
      </form>
    </>
  );
};

export default Login;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import axios from "axios";
import { AuthContext } from "../components/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <>
      <div>
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
      </div>
    </>
  );
};

export default Login;

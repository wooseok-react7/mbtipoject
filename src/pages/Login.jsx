import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import axios from "axios";
import { AuthContext } from "../components/AuthProvider";

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
      console.log("res", response);
      setUser({ nickname: response.nickname, userId: response.userId });
      if (response.success) {
        alert("로그인 성공!");
        // setUser()
        // console.log("받은 토큰:", response.token);
        // 토큰 저장 (예: localStorage)
        loginContext();
        // 홈 이동
      } else {
        alert(response.message || "로그인에 실패했습니다.");
      }
    } catch (error) {
      console.error("로그인 중 오류:", error.message);
      alert(error.message);
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

//   const userData = {
//     id: userId,
//     password,
//   };
//   try {
//     const response = await login(userData);
//     console.log(response);
//     if (response.success) {
//       alert("로그인 성공!");
//       console.log("받은 토큰:", response.token);
//       // 토큰 저장 (예: localStorage)
//       localStorage.setItem("authToken", response.token);
//       // 홈 이동
//       navigate("/");
//     } else {
//       alert(response.message || "로그인에 실패했습니다.");
//     }
//   } catch (error) {
//     console.error("로그인 중 오류:", error.message);
//     alert(error.message);
//   }

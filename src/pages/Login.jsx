import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("./SignUp");
  };

  return (
    <>
      <form>
        <label>로그인</label>
        <input type="text"></input>
        <label>패스워드</label>
        <input type="password"></input>
        <button>로그인</button>
        <button onClick={handleSignup}>회원가입</button>
      </form>
    </>
  );
};

export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div>
      <label>아이디</label>
      <input></input>
      <label>닉네임</label>
      <input></input>
      <label>비밀번호</label>
      <input></input>
      <label>비밀번호 확인</label>
      <input></input>

      <button>회원가입</button>
      <button onClick={handleHome}>뒤로가기</button>
    </div>
  );
};

export default SignUp;

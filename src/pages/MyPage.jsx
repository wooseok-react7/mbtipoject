import React, { useContext, useState } from "react";
import { updateProfile } from "../api/auth";
import { AuthContext } from "../components/AuthProvider";
import { toast } from "react-toastify";
import styled from "styled-components";

const MyPage = () => {
  const { user, setUser } = useContext(AuthContext);
  const [nickname, setNickname] = useState(user?.nickname || "");
  console.log("user", user);
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessToken = localStorage.getItem("accessToken"); // token 확인
    if (!accessToken) {
      toast("로그인이 필요합니다.");
      return;
    }

    const formData = new FormData();
    formData.append("nickname", nickname);

    try {
      console.log("formData", formData);
      const data = await updateProfile(formData, accessToken);
      if (data.success) {
        toast("프로필 수정이 완료되었습니다.");
        setUser({ ...user, nickname }); // 응답 데이터 기반으로 업데이트
      }
    } catch (error) {
      console.error(error); // 디버깅용
      toast(
        `프로필 수정에 실패했습니다. 다시 시도해주세요. ${
          error.response?.data?.message || "알 수 없는 오류"
        }`
      );
    }
  };

  return (
    <div>
      <MyPageCard>
        <h1>{user?.nickname || "닉네임을 설정해 주세요."}님 안녕하세요</h1>
        {/* user가 null인지 undefined인지 확인하고 user에 있는 nickname을 가져옴 */}
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임</label>
            <NickChange
              placeholder="변경하실 닉네임을 입력해주세요."
              onChange={handleNicknameChange}
            />
            <button type="submit">프로필 업데이트</button>
          </div>
        </form>
      </MyPageCard>
    </div>
  );
};

const NickChange = styled.input`
  padding: 20px;
  margin-top: 30px;
`;

const MyPageCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default MyPage;

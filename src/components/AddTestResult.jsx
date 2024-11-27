import React, { useState } from "react";
import { createTestResult } from "./api/testResults";

const AddTestResult = () => {
  const [formData, setFormData] = useState({
    mbtiResult: "",
    nickname: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resultData = {
        ...formData,
        timestamp: new Date().toISOString(), // 현재 시간 추가
      };
      const response = await createTestResult(resultData); // API로 전송
      console.log("Result saved:", response);
    } catch (error) {
      console.error("Error saving result:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="mbtiResult"
        placeholder="MBTI 결과"
        value={formData.mbtiResult}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="nickname"
        placeholder="닉네임"
        value={formData.nickname}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="결과에 대한 설명"
        value={formData.content}
        onChange={handleChange}
        required
      />
      <button type="submit">결과 저장</button>
    </form>
  );
};

export default AddTestResult;

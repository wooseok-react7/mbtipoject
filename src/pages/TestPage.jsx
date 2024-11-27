import styled from "styled-components";
// import Side from "../components/Side";
import React, { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import "../tailwindcss/TestPage.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: rgb(246, 249, 250);
`;

const Bodybar = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  /* padding-top: 100px; */
  margin-top: 200px;
  margin-bottom: 50px;
  /* height: 500px; */
  width: 100%;
  max-width: 900px;
  & > div {
    width: 100%;
    text-align: center;
  }
  & h1 {
    margin-bottom: 100px;
  }
`;

const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers); // MBTI 결과 계산
    // 인증 토큰 가져오기 (예: 로컬 스토리지에서 가져오기)
    const token = localStorage.getItem("authToken");
    // 결과를 서버에 저장

    const payload = {
      userId: token.id, // 실제 user id 값을 받아와야 된다. 그게 뭔데...
      mbtiResult,
      timestamp: new Date().toISOString(),
    };

    const savedResult = await createTestResult(payload);
    setResult(savedResult.mbtiResult);
    console.log("Test result saved:", savedResult);
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };
  return (
    <>
      <Wrapper>
        {/* <Bodybar> */}
        <Bodybar className="w-full flex flex-col items-center justify-center bg-white">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
            {!result ? (
              <>
                <h1 className="text-3xl font-bold text-primary-color mb-6">
                  Who Are 🫵 MBTI
                </h1>
                <TestForm onSubmit={handleTestSubmit} />
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-primary-color mb-6">
                  테스트 결과: {result}
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  {mbtiDescriptions[result] ||
                    "해당 성격 유형에 대한 설명이 없습니다."}
                </p>
                <button
                  onClick={handleNavigateToResults}
                  className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
                >
                  결과 페이지로 이동하기
                </button>
              </>
            )}
          </div>
        </Bodybar>
      </Wrapper>
    </>
  );
};

export default TestPage;

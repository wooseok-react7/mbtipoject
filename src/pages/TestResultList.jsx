import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const API_URL = "http://localhost:4000/testResults";

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

  flex-direction: column;
  margin-top: 200px;
  margin-bottom: 50px;
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

const TestResultList = () => {
  const [testResults, setTestResults] = useState([]); // 초기 상태 빈 배열
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  const fetchTestResults = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(API_URL);

      // 공개 데이터만 필터링하고 누락된 mbtiDescriptions 처리
      const visibleResults = response.data
        .filter((result) => result.visibility === true) // 공개 데이터만 필터링
        .map((result) => ({
          ...result,
          mbtiDescriptions:
            result.mbtiDescriptions || "해당 성격 유형에 대한 설명이 없습니다.",
        }));

      setTestResults(visibleResults); // 필터링된 데이터 설정
    } catch (error) {
      console.error("Error fetching test results:", error);
      setTestResults([]); // 에러 발생 시 빈 배열로 설정
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  useEffect(() => {
    fetchTestResults(); // 데이터 가져오기
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // 로딩 상태
  }

  return (
    <Wrapper>
      <div>
        <Bodybar>
          <h1>테스트 결과</h1>
          {testResults.length > 0 ? (
            testResults.map((result) => (
              <Bodybar
                key={result.id}
                style={{
                  border: "1px solid #ccc",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <p>
                  <strong>MBTI 결과:</strong> {result.mbtiResult}
                </p>
                <p>
                  <strong>생성 시간:</strong>{" "}
                  {result.timestamp
                    ? new Date(result.timestamp).toLocaleString()
                    : "유효한 생성 시간이 없습니다."}
                </p>
                <strong>MBTI</strong>
                {result.mbtiDescriptions}
              </Bodybar>
            ))
          ) : (
            <div>결과가 없습니다.</div>
          )}
        </Bodybar>
      </div>
    </Wrapper>
  );
};

export default TestResultList;

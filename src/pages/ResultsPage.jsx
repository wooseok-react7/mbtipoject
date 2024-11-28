import React, { useEffect, useState } from "react";
import {
  getTestResults,
  updateTestResultVisibility,
  deleteTestResult,
} from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import styled from "styled-components";

const ResultsPage = () => {
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTestResults = async () => {
    try {
      setLoading(true);
      const results = await getTestResults();
      console.log("Fetched results after visibility update:", results); // 결과 출력
      setTestResults(results);
    } catch (error) {
      console.error("Error fetching test results", error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleVisibility = async (id, currentVisibility) => {
    try {
      const response = await updateTestResultVisibility(id, !currentVisibility);
      console.log("Visibility updated:", response); // 서버 응답 확인
      setTestResults((prevResults) =>
        prevResults.map((result) =>
          result.id === id
            ? { ...result, visibility: !currentVisibility }
            : result
        )
      );
    } catch (error) {
      console.error("Error updating visibility:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTestResult(id);
      setTestResults((prevResults) =>
        prevResults.filter((result) => result.id !== id)
      );
    } catch (error) {
      console.error("Error deleting test result:", error);
    }
  };

  useEffect(() => {
    fetchTestResults();
  }, []);

  if (loading) {
    return <div>데이터를 불러오고 있습니다. 잠시만 기다려주세요.</div>;
  }

  return (
    <Wrapper>
      <h1>MBTI 결과</h1>
      {testResults.map((result) => (
        <ListCard key={result.id}>
          <h3>
            {result.visibility ? result.mbtiResult : "비공개 상태입니다."}
          </h3>
          <p>
            {result.visibility
              ? mbtiDescriptions[result.mbtiResult] ||
                "해당 성격 유형에 대한 설명이 없습니다."
              : ""}
          </p>
          <p>공개 여부: {result.visibility ? "공개" : "비공개"}</p>
          <div>
            <button
              onClick={() =>
                handleToggleVisibility(result.id, result.visibility)
              }
            >
              {result.visibility ? "비공개로 전환" : "공개로 전환"}
            </button>
            <button
              onClick={() => handleDelete(result.id)}
              style={{ marginLeft: "10px" }}
            >
              삭제
            </button>
          </div>
        </ListCard>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(246, 249, 250);
  padding: 20px;
`;

const ListCard = styled.div`
  width: 800px;
  background-color: white;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default ResultsPage;

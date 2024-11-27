import React, { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import { deleteTestResult } from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import styled from "styled-components";

//뭘 불러와야 되냐 내 db.json에 있는 데이터를 testResults.js를 이용해서

const ResultsPage = () => {
  const [testResults, setTestResults] = useState([]); // api 데이터 저장
  const [loading, setLoading] = useState(true); // 로딩 상태를 관리

  const fetchTestResults = async () => {
    try {
      setLoading(true); // 데잍처를 가져오는 중임을 표시함
      const results = await getTestResults(); //api 호출함
      setTestResults(results); // 가져온 데이터를 상태에 저장함
    } catch (error) {
      console.error("Error fetching test results", error); // api 호출 실패시 에러 출력
    } finally {
      setLoading(false); // 데이처를 가져오면 로딩 상탤르 false로 변경
      // finally : 성공하든 실패하든 데이터를 가져오는 작업이 끝난 후 로딩 상태를 false로 변경
    }
  };

  const handleDelete = async (id) => {
    console.log("삭제", id);
    if (!id) {
      console.error("id 값이 유효하지 않다?", id);
      return;
    }
    try {
      await deleteTestResult(id);
      setTestResults((prevResulus) =>
        prevResulus.filter((result) => result.id !== id)
      );
    } catch (error) {
      console.error("삭제중 오류 ㅋㅋ", error);
    }
  };

  useEffect(() => {
    fetchTestResults();
    // 컴포넌트가 처음 렌더링될 때 fetchTestResults 실행
  }, []);

  if (loading) {
    return <div>데이터를 불러오고 있습니다 잠시만 기달려주세요.</div>;
  }

  return (
    <Wrapper>
      <h1>MBTI</h1>
      {testResults.map((results) => (
        <ListCard key={results.id}>
          {results.mbtiResult} -
          {new Date(results.timestamp).toLocaleDateString()}
          <p className="text-lg text-gray-700 mb-6">
            {mbtiDescriptions[results.mbtiResult] ||
              "해당 성격 유형에 대한 설명이 없습니다."}
          </p>
          <button onClick={() => handleDelete(results.id)}>삭제</button>
        </ListCard>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(246, 249, 250);
`;

const ListCard = styled.div`
  width: 800px;
  height: 300px;
  background-color: white;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1.2rem;
`;

export default ResultsPage;

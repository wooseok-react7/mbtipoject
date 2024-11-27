import React from "react";
import {
  updateTestResultVisibility,
  deleteTestResult,
} from "../api/testResults";

console.log(updateTestResultVisibility);

const TestResultItem = ({ result, onUpdate }) => {
  const { id, title, visibility, isOwner } = result;

  // 공개 여부 변경
  const handleToggleVisibility = async () => {
    try {
      await updateTestResultVisibility(id, !visibility);
      onUpdate(); // 부모 컴포넌트에서 목록 다시 불러오기
    } catch (error) {
      console.error("Error updating visibility:", error);
    }
  };

  // 결과 삭제
  const handleDelete = async () => {
    try {
      await deleteTestResult(id);
      onUpdate(); // 부모 컴포넌트에서 목록 다시 불러오기
    } catch (error) {
      console.error("Error deleting test result:", error);
    }
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <h3>{title}</h3>
      <p>공개 여부: {visibility ? "공개" : "비공개"}</p>
      {isOwner && (
        <>
          <button onClick={handleToggleVisibility}>
            {visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
            삭제
          </button>
        </>
      )}
    </div>
  );
};

export default TestResultItem;

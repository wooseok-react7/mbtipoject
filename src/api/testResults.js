import axios from "axios";

const API_URL = "https://separated-buttery-pajama.glitch.me/testResults";

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axios.post(API_URL, resultData);
  return response.data;
};

export const getUserTestResults = async (userId) => {
  const response = await axios.get(`${API_URL}?userId=${userId}`);
  return response.data;
};

// 전체 결과 조회
export const getAllTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  console.log(id, !visibility);
  const response = await axios.put(`${API_URL}/${id}`, { visibility });
  return response.data;
};

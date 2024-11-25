import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  try {
    // 기존 데이터 가져오기
    const { data: users } = await axios.get(API_URL);

    // 중복 확인
    const isDuplicateId = users.some((user) => user.id === userData.id);
    const isDuplicateNickname = users.some(
      (user) => user.nickname === userData.nickname
    );

    if (isDuplicateId) {
      return { error: "duplicate_id" }; // 중복된 아이디
    }

    if (isDuplicateNickname) {
      return { error: "duplicate_nickname" }; // 중복된 닉네임
    }

    // 회원가입 진행
    const response = await axios.post(API_URL, userData);
    return response.data; // 성공 응답 반환
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const { data } = await axios.get(API_URL, {
      params: userData,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async (token) => {};

export const updateProfile = async (formData) => {};

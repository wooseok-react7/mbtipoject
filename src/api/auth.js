import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data; // 성공 시 서버의 응답 반환
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;

      // 서버가 반환한 409 에러 처리
      if (status === 409) {
        return {
          success: false,
          error: data.error || "conflict",
          message: data.message || "중복된 데이터가 있습니다.",
        };
      }
    }

    // 네트워크 오류 또는 기타 예외 처리
    return {
      success: false,
      message: "알 수 없는 오류가 발생했습니다.",
    };
  }
};

export const login = async (userData) => {
  try {
    // POST 요청을 통해 로그인 API 호출
    const { data } = await axios.post(`${API_URL}/login`, userData);

    // 서버 응답 반환 (성공/실패 여부 포함)
    return data;
  } catch (error) {
    if (error.response) {
      // 서버에서 반환된 오류 처리
      const { status, data } = error.response;
      throw new Error(data.message || `로그인 실패 (HTTP ${status})`);
    } else {
      // 네트워크 오류 또는 기타 예외
      throw new Error("로그인 요청 중 문제가 발생했습니다.");
    }
  }
};

export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/getUserProfile`, {
    headers: {
      Authorization: "Bearer AccessToken",
    },
  });
};
// 유저의 정보를 이걸로 받아옴

export const updateProfile = async (formData) => {};

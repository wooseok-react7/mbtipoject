import React from "react";
import styled from "styled-components";
import Side from "../components/Side";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 화면 전체 높이 */
  background-color: lightgray; /* 배경색으로 영역 확인 */
`;

const Bodybar = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 1000px;
`;

// const Sidebar = styled.div`
//   background-color: white;
//   position: fixed;
//   width: 150px;
//   height: 500px;
//   border-radius: 10px;
//   top: 210px; /* 화면 상단에서 150px 떨어짐 */
//   right: 120px; /* 화면 오른쪽에서 50px 떨어짐 */
//   z-index: 1000; /* 다른 요소 위에 표시 */
// `;

const MbtiTestPage = () => {
  return (
    <>
      <Wrapper>
        <Bodybar>
          <p>아오아오아오</p>
        </Bodybar>
      </Wrapper>
      {/* <Sidebar> */}
      {/* <TopScrollButton> */}
      <Side buttonText="Back to Top" />
      {/* </TopScrollButton> */}
      {/* </Sidebar> */}
    </>
  );
};

export default MbtiTestPage;

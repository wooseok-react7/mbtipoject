// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const Navbar = styled.nav`
//   background-color: gray;
//   height: 100px;
// `;
// const LoginBut = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-left: 1850px;
//   height: 50px;
//   margin-top: -80px;
// `;

// const Header = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     setIsLoggedIn(false);
//     alert("로그아웃이 되었습니다.");
//   };

//   const handleMyPage = () => {
//     const token = localStorage.getItem("authToken");

//     if (token) {
//       navigate("/testPage");
//     } else {
//       alert("로그인이 필요한 페이지 입니다.");
//       navigate("/login");
//     }
//   };

//   const handleLogin = () => {
//     navigate("/login");
//   };

//   return (
//     <>
//       <Navbar>
//         <h1>MBTI TEST</h1>
//         <Link>mbti 종류</Link>
//         <Link>마이페이지</Link>
//         <LoginBut>로그인</LoginBut>
//       </Navbar>
//     </>
//   );
// };

// export default Header;

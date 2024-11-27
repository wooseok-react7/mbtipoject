import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeImg1 from "../assets/image/HomeImg1.png";
import HomeImg2 from "../assets/image/HomeImg2.png";
import HomeImg3 from "../assets/image/HomeImg3.png";
import HomeImg4 from "../assets/image/HomeImg4.png";

const Bodybar = styled.div`
  height: 500px;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  /* background-color: green; */
  & img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  const imgslied = [HomeImg1, HomeImg2, HomeImg3, HomeImg4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgslied.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleTestPage = () => {
    navigate("/testPage");
  };

  return (
    <>
      <Bodybar>
        <img src={imgslied[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <StyledLink to={"/testPage"}>Who Are 🫵</StyledLink>
      </Bodybar>
    </>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 50px;
  margin-top: 50px;
  text-decoration: none; /* 밑줄 없앰 */
  color: inherit; /* 부모 색상 유지 */
  transition: transform 0.2s ease, color 0.2s ease;
  &:hover {
    transform: scale(1.1); /* 크기를 1.1배 확대 */
    color: #2ecc71; /* 색상 변경 (옵션) */
  }
  &:active,
  &:visited {
    text-decoration: none;
    color: inherit;
  }
`;

export default HomePage;

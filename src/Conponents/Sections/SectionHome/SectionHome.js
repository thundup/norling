import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledImageWrapper = styled.div`
  position: relative
  z-index: -1;
  object-fit: cover;
  display: flex;
  @media only screen and (max-width: 600px) {
    display: block;
    height: auto;
   img { 
     height: 400px;
     width: 100vw;
     box-shadow: none !important;
    }
  }
  img { 
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 2);
    border-radius: 4px;
    width: 100vw;
  }
  justify-content: center;
  height: 100vh;
`;

const StyledContent = styled.div`
  position: absolute;
  top: calc(20% - 24px);
  left: 0;
  text-align: center;
  width: 100%;
  font-size: 75px;
  color: white;
  @media only screen and (max-width: 600px) {
    color: black;
    position: relative;
    display: block;
    top: 50px;
  }
`;

const StyledIntro = styled.div`
  position: absolute;
  top: calc(60% - 24px);
  text-align: center;
  width: 60%;
  font-size: 25px;
  color: white;
  @media only screen and (max-width: 600px) {
    color: black;
    position: relative;
    display: block;
    font-size: 16px;
    width: 100%;
    top: 50px;
  }
`;

const intro =
  "Peak is one of the best luxury hotels in our state. We offer high-quality accommodation with a wide variety of rooms, additional services, and amenities available to all our guests.";

export const SectionHome = () => {
  return (
    <StyledWrapper id="home">
      <StyledImageWrapper>
        <img
          src="https://cdn.pixabay.com/photo/2022/02/09/17/22/cat-7003849_1280.jpg"
          alt="hero"
        />
        <StyledContent>
          <h1>WELCOME</h1>
        </StyledContent>
        <StyledIntro>{intro}</StyledIntro>
      </StyledImageWrapper>
    </StyledWrapper>
  );
};

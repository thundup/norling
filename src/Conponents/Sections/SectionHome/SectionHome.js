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
     width: 100% !important;
     box-shadow: none !important;
    }
  }
  img { 
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 2);
    border-radius: 4px;
    width: 80%;
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
    background: none;
  }
`;

const StyledIntro = styled.div`
  position: absolute;
  top: calc(60% - 24px);
  text-align: center;
  width: 60%;
  font-size: 25px;
  background: #757575;
  opacity: 80%;
  color: ghostwhite;
  @media only screen and (max-width: 600px) {
    color: black;
    background: none;
    position: relative;
    display: block;
    font-size: 16px;
    width: 100%;
    top: 50px;
  }
`;

const intro =
  "Norling is one of the best luxury hotels in our state. We offer high-quality accommodation with a wide variety of rooms, additional services, and amenities available to all our guests.";

export const SectionHome = () => {
  return (
    <StyledWrapper id="home">
      <StyledImageWrapper>
        <img
          src="https://scontent.fixb3-1.fna.fbcdn.net/v/t1.6435-9/32207852_1359030177532468_2395111980315705344_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=B3r2R1EflRYAX-ILvXp&_nc_ht=scontent.fixb3-1.fna&oh=00_AT80m8T8PJWmAH3r7beEnOnkwSqIHcH9GMSVMDXSd7ShGA&oe=623F7E1B"
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

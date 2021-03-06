import React from "react";
import styled from "styled-components";

const StyledSectionAboutWrapper = styled.div`
  :target::before {
    content: "";
    display: block;
    height: 200px; /* fixed header height*/
    margin: -200px 0 0; /* negative fixed header height */
  }

  :target::after {
    content: "";
    display: block;
    height: 100px; /* fixed header height*/
    margin: -100px 0 0; /* negative fixed header height */
  }
  height: 500px;
  margin-top: 100px;
  margin-bottom: 200px;
  margin-left: 200px;
  margin-right: 200px;
  @media only screen and (max-width: 600px) {
    margin: 10px;
    margin-top: 80px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  background-color: #cfcac9;
  border-radius: 16px;
  @media only screen and (max-width: 600px) {
    display: block;
    box-shadow: none;
  }
  box-shadow: rgb(51, 51, 51) 15px 15px 5px;
`;

const StyledContent = styled.div`
  margin: 50px;
  font-size: 20px;
  text-align: center;
  color: #282727;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin-top: 16px;
  }
`;

const StyledImgWrapper = styled.div`
  img {
    border-radius: 16px 0 0 16px;
    @media only screen and (max-width: 600px) {
      border-radius: 16px;
      height: 300px;
    }
  }
`;
const text =
  "Norling is a family-owned hotel that desires to cater and provide guests with personalized hospitality based on what they prefer. While we aim to give you an authentic experience whenever you stay with us, we also guarantee consistent high standards of customer service at Roof. Contemporary amenities and timeless elegance are reflected throughout every guest room at our luxury hotel. We hope to make your stay unforgettable in the best way.";

export const SectionAbout = () => {
  return (
    <StyledSectionAboutWrapper id="about">
      <StyledWrapper>
        <StyledImgWrapper>
          <img
            height="400px"
            width="400px"
            src="https://scontent.fixb3-1.fna.fbcdn.net/v/t1.6435-9/32372858_1361515263950626_1221165734621609984_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=9267fe&_nc_ohc=Vvi1QIZOW4IAX_Ugg30&_nc_ht=scontent.fixb3-1.fna&oh=00_AT_uaqGAg63PmTsHUdjmYjywK8R_taYatUAwP-bOEuzMbQ&oe=6240AE0A"
            alt="asd"
          />
        </StyledImgWrapper>

        <StyledContent>{text}</StyledContent>
      </StyledWrapper>
    </StyledSectionAboutWrapper>
  );
};

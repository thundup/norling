import React from "react";
import { SectionHome } from "./SectionHome";
import { SectionAbout } from "./SectionAbout";
import { SectionRooms } from "./SectionRooms";
import { SectionMenu } from "./SectionMenu";
import { SectionAmenities } from "./SectionAmenities";

import styled from "styled-components";

const StyledGray = styled.div`
  background-color: #e6e6e6;
  height: 100vh;
  padding-top: 50px;
  @media only screen and (max-width: 600px) {
    height: auto;
    margin-top: 200px;
  }
`;

const StyledWhite = styled.div`
  background-color: white;
  height: 100vh;
  padding-top: 50px;
  @media only screen and (max-width: 600px) {
    height: auto;
  }
`;

export const Sections = () => {
  return (
    <>
      <SectionHome />
      <StyledWhite>
        <SectionAbout />
      </StyledWhite>
      <StyledGray>
        <SectionRooms />
      </StyledGray>
      <SectionMenu />
      <SectionAmenities />
    </>
  );
};

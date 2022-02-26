import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import styled from "styled-components";
import { FoodCard } from "./FoodCard";

import { mains, deserts, drinks } from "./mockItems";

const StyledWrapper = styled(Tabs)`
  justify-content: center;
  .nav-tabs {
    background-color: lightblue;
  }
  :target::before {
    content: "";
    display: block;
    height: 200px; /* fixed header height*/
    margin: -200px 0 0; /* negative fixed header height */
  }
`;

const StyledBigWrapper = styled.div`
  width: 500px;
  margin: auto;
  margin-top: 150px;
  @media only screen and (max-width: 600px) {
    margin-top: 50px;
    width: 100%;
  }
`;

const StyledHeader = styled.div`
  font-size: 50px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const SectionMenu = () => {
  return (
    <StyledBigWrapper>
      <StyledHeader id="menu"> Some of our Signature Items </StyledHeader>
      <StyledWrapper
        defaultActiveKey="mains"
        id="uncontrolled-tab-example"
        className="mb-2"
      >
        <Tab eventKey="mains" title="Mains">
          {mains.map((item) => {
            return <FoodCard item={item} />;
          })}
        </Tab>
        <Tab eventKey="deserts" title="Deserts">
          {deserts.map((item) => {
            return <FoodCard item={item} />;
          })}
        </Tab>
        <Tab eventKey="drinks" title="Drinks">
          {drinks.map((item) => {
            return <FoodCard item={item} />;
          })}
        </Tab>
      </StyledWrapper>
    </StyledBigWrapper>
  );
};

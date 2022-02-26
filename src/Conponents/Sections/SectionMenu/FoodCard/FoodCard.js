import React from "react";
import styled from "styled-components";

const StyledItemImg = styled.div`
  @media only screen and (max-width: 600px) {
    img {
      height: 100px;
    }
  }
`;

const StyledFoodCardWrapper = styled.div`
  display: flex;
  margin: 24px;
`;

const StyledItemDetails = styled.div`
  display: block;
  .item-name {
    font-size: 24px;
    @media only screen and (max-width: 600px) {
      font-size: 24px;
    }
  }
  .item-price {
    font-size: 16px;
    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  }

  margin: 24px;
`;

export const FoodCard = ({ item }) => {
  console.log(item);
  const itemName = item.name;
  const itemImgUrl = item.url;
  const itemPrice = item.price;
  return (
    <StyledFoodCardWrapper>
      <StyledItemImg>
        <img src={itemImgUrl} height="150px" alt={itemName} />
      </StyledItemImg>
      <StyledItemDetails>
        <div className="item-name">{itemName}</div>
        <div className="item-price">{itemPrice}</div>
      </StyledItemDetails>
    </StyledFoodCardWrapper>
  );
};

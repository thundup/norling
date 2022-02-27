import React, { useState } from "react";
import styled from "styled-components";
import { ImageGallery } from "../ImageGallery";
import { isMobile } from "react-device-detect";

const StyledWrapper = styled.div`
  :target::before {
    content: "";
    display: block;
    height: 100px; /* fixed header height*/
    margin: -100px 0 0; /* negative fixed header height */
  }
`;

const StyledSmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImageGalleryWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    display: block;
  }
  justify-content: center;
  img {
    margin: 16px;
    cursor: ${(props) => (props.isMobile ? "none" : "pointer")};
    :hover {
      opacity: ${(props) => (props.isMobile ? "none" : "0.3")};
      transition: 0.5s ease;
    }
    border-radius: 8px;
    box-shadow: 15px 15px 15px rgb(0 0 0);
    @media only screen and (max-width: 600px) {
      box-shadow: none;
    }
  }
`;

const header = "Rooms & Suites";
const content =
  "At our hotel, there is a variety of rooms to choose from. Whether you are a casual traveler or a person demanding luxury wherever you go, you won’t be disappointed.";

export const SectionRooms = () => {
  const [showModal, setShowModal] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const img1 =
    "https://i.ibb.co/crCHbgL/Whats-App-Image-2022-02-26-at-9-40-51-AM.jpg";
  const img2 =
    "https://cdn.pixabay.com/photo/2022/02/09/17/22/cat-7003849_1280.jpg";
  const img3 =
    "https://cdn.pixabay.com/photo/2022/02/09/17/22/cat-7003849_1280.jpg";

  const imgOpenHandler = () => {
    setShowModal(true);
    setImgUrl(img1);
  };
  const imgOpenHandler1 = () => {
    setShowModal(true);
    setImgUrl(img2);
  };
  const imgOpenHandler2 = () => {
    setShowModal(true);
    setImgUrl(img3);
  };
  console.log(isMobile);
  return (
    <StyledWrapper id="rooms">
      <StyledSmallWrapper>
        <h1>{header}</h1>
        <p>{content}</p>
      </StyledSmallWrapper>
      <StyledImageGalleryWrapper isMobile={isMobile}>
        <img
          height="400px"
          width="400px"
          src={img1}
          alt="asd"
          onClick={imgOpenHandler}
        />
        <img
          height="400px"
          width="400px"
          src="https://cdn.pixabay.com/photo/2022/02/09/17/22/cat-7003849_1280.jpg"
          alt="asd"
          onClick={imgOpenHandler1}
        />
        <img
          height="400px"
          width="400px"
          src="https://cdn.pixabay.com/photo/2022/02/09/17/22/cat-7003849_1280.jpg"
          alt="asd"
          onClick={imgOpenHandler2}
        />
      </StyledImageGalleryWrapper>
      {showModal && !isMobile && (
        <ImageGallery
          showModal={showModal}
          setShowModal={setShowModal}
          imgUrl={imgUrl}
        />
      )}
    </StyledWrapper>
  );
};

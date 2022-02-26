import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  .modal-header {
    border: none;
  }
  .modal-body {
    text-align: center;
  }
  img {
    height: 600px;
    @media only screen and (max-width: 600px) {
      height: 300px;
      width: 300px;
    }
  }
`;

export const ImageGallery = ({ showModal, setShowModal, imgUrl }) => {
  const handleClose = () => setShowModal(false);

  return (
    <>
      <StyledModal show={showModal} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={imgUrl} alt="asd" />
        </Modal.Body>
      </StyledModal>
    </>
  );
};

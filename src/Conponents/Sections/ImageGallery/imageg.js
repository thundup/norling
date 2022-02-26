import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const Example = ({ showModal, setShowModal }) => {
  return (
    <>
      <Modal show={showModal} fullscreen onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
};

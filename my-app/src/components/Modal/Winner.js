import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Winner = (props) => {
  return (
    <Modal
      style={{ textAlign: "center" }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.showModal}
      onHide={props.hideModal}
    >
      <Modal.Header
        onClick={props.hideModal}
        closeButton
        style={{ background: "white" }}
      ></Modal.Header>
      <Modal.Body style={{ color: "gray", background: "rgb(22,25,40)" }}>
        <p>
          <span style={{ color: "white" }}>
            CONGRATULATIONS! <br />
            GREAT VICTORY!
          </span>
          <br /> ENJOY YOUR LIFE WITH GREAT MEMORIES
        </p>
        <img
          style={{ width: "200px", height: "200px" }}
          src={require("../../assets/images/w1.gif")}
          alt="Memory Game"
        ></img>
      </Modal.Body>
      <Button onClick={props.hideModal}>Lets Try Again</Button>
    </Modal>
  );
};
export default Winner;

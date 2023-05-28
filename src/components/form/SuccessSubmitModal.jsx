import React from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const SuccessSubmitModal = ({ setToggleModal }) => {
  return (
    <Modal setToggleModal={setToggleModal}>
      <h2>Congratulations, your account has been succesfully created!</h2>
      <Button onClick={() => setToggleModal(false)}>ok</Button>
    </Modal>
  );
};

export default SuccessSubmitModal;

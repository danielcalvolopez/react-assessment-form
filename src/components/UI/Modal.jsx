import classes from "./modal.module.css";
import Backdrop from "./Backdrop";

const Modal = ({ children, setToggleModal }) => {
  return (
    <>
      <Backdrop onClick={() => setToggleModal(false)} />
      <div className={classes.modal}>{children}</div>
    </>
  );
};

export default Modal;

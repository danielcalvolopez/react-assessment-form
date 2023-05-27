import classes from "./button.module.css";

const Button = ({ children, onClick, onSubmit }) => {
  return (
    <button
      className={classes.button}
      onClick={onClick}
      onSubmit={onSubmit}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;

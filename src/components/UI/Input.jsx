import classes from "./input.module.css";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className={classes.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

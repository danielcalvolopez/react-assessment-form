import classes from "./input.module.css";

const Input = ({ type, placeholder, value, onChange, title, register }) => {
  return (
    <input
      {...register(title, { required: true })}
      className={classes.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

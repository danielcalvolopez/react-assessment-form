import classes from "./input.module.css";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  id,
  onBlur,
  touched,
  errors,
}) => {
  return (
    <input
      className={`${errors ? classes.error : classes.input}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      touched={touched}
      id={id}
    />
  );
};

export default Input;

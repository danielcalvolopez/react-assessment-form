import Input from "../UI/Input";
import classes from "./form-item.module.css";

const FormItem = ({
  label,
  placeholder,
  type,
  required,
  errors,
  value,
  touched,
  onChange,
  onBlur,
  id,
}) => {
  return (
    <div className={classes["form-item"]}>
      <label className={classes.label}>
        {required && <span className={classes.error}>*</span>}
        {label}
      </label>
      <Input
        onBlur={onBlur}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        type={type}
        touched={touched}
        value={value}
        id={id}
        errors={errors}
      />
      {errors && <p className={classes.error}>{errors}</p>}
    </div>
  );
};

export default FormItem;

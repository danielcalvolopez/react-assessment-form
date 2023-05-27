import Input from "../UI/Input";
import classes from "./form-item.module.css";

const FormItem = ({
  label,
  placeholder,
  type,
  title,
  required,
  register,
  errors,
}) => {
  return (
    <div className={classes["form-item"]}>
      <label className={classes.label}>
        {required && <span className={classes.error}>*</span>}
        {label}
      </label>
      <Input
        register={register}
        title={title}
        required={required}
        placeholder={placeholder}
        type={type}
      />
      {errors && <p className={classes.error}>{errors}</p>}
    </div>
  );
};

export default FormItem;

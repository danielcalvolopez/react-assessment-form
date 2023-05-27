import Input from "../UI/Input";
import classes from "./form-item.module.css";

const FormItem = ({ label, placeholder, type, title, required, register }) => {
  return (
    <div className={classes["form-item"]}>
      <label className={classes.label}>
        {required && <span>*</span>}
        {label}
      </label>
      <Input
        register={register}
        title={title}
        required={required}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default FormItem;

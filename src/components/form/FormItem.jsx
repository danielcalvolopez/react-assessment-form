import Input from "../UI/Input";
import classes from "./form-item.module.css";

const FormItem = ({ label }) => {
  return (
    <div className={classes["form-item"]}>
      <label className={classes.label}>{label}</label>
      <Input />
    </div>
  );
};

export default FormItem;

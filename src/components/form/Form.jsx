import Button from "../UI/Button";
import classes from "./form.module.css";

const Form = ({ children, onSubmit, error }) => {
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      {children}
      <Button>submit</Button>
    </form>
  );
};

export default Form;

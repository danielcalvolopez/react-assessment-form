import Form from "./components/form/Form";
import FormItem from "./components/form/FormItem";
import classes from "./app.module.css";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={classes.container}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem
          register={register}
          required
          title="name"
          label="name"
          placeholder="John Doe"
          type="text"
        />
        <FormItem
          register={register}
          required
          title="email"
          label="email"
          placeholder="john@doe.com"
          type="text"
        />
        <FormItem
          register={register}
          required
          title="phone"
          label="phone number"
          placeholder="07123456789"
          type="number"
        />
      </Form>
    </div>
  );
};

export default App;

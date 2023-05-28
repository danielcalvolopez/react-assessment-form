import Form from "./components/form/Form";
import FormItem from "./components/form/FormItem";
import classes from "./app.module.css";
import { useFormik } from "formik";
import schema from "./utils/schema";
import { doc, setDoc } from "firebase/firestore";
import SuccessSubmitModal from "./components/form/SuccessSubmitModal";
import { useState } from "react";
import { db } from "./firebase_setup/firebase";

const App = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const onSubmit = async (values, actions) => {
    await setDoc(doc(db, "users", "new-user"), values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    setToggleModal(true);
  };

  const {
    values,
    errors,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: schema,
    onSubmit,
  });

  return (
    <div className={classes.container}>
      {toggleModal && <SuccessSubmitModal setToggleModal={setToggleModal} />}
      <Form isSubmitting={isSubmitting} onSubmit={handleSubmit}>
        <FormItem
          errors={errors.name}
          value={values.name}
          required
          label="name"
          placeholder="John Doe"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          id="name"
        />
        <FormItem
          errors={errors.email}
          value={values.email}
          required
          label="email"
          placeholder="john@doe.com"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          id="email"
        />
        <FormItem
          errors={errors.phone}
          value={values.phone}
          required
          label="phone number"
          placeholder="07123456789"
          type="number"
          onBlur={handleBlur}
          onChange={handleChange}
          id="phone"
        />
      </Form>
    </div>
  );
};

export default App;

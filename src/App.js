import classes from "./app.module.css";
import { useFormik } from "formik";
import schema from "./utils/schema";
import { doc, setDoc } from "firebase/firestore";
import SuccessSubmitModal from "./components/form/SuccessSubmitModal";
import { useState } from "react";
import { db } from "./firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import UserForm from "./components/form/UserForm";

const App = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const onSubmit = (values, actions) => {
    setDoc(doc(db, "users", uuidv4()), values);
    setToggleModal(true);
    actions.resetForm();
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
      <UserForm
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        errors={errors}
        values={values}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
    </div>
  );
};

export default App;

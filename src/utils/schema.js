import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phone: yup
    .number()
    .positive("Value must be positive")
    .integer("Value must be an integer")
    .required("Phone number is required")
    .typeError("Phone number is required"),
});

export default schema;

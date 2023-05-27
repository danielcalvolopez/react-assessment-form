import * as yup from "yup";

const schemaValidation = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Incorrect email format")
    .required("Email is required"),
  phone: yup
    .number()
    .min(10)
    .positive()
    .integer()
    .required("Phone number is required")
    .typeError("Phone number is required"),
});

export default schemaValidation;

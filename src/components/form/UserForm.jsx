import React from "react";
import Form from "./Form";
import FormItem from "./FormItem";

const UserForm = ({
  isSubmitting,
  handleSubmit,
  errors,
  values,
  handleBlur,
  handleChange,
}) => {
  return (
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
  );
};

export default UserForm;

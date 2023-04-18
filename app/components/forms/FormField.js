import React from "react";
import { useFormikContext } from "formik";

import { AppTextInput, ErrorMessage } from "../controls";

function FormField({ name, width, ...otherProps }) {
  const { errors, handleChange, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;

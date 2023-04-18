import React from "react";
import { useFormikContext } from "formik";

import { Button } from "../controls";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} onPress={handleSubmit} />;
}

export default SubmitButton;

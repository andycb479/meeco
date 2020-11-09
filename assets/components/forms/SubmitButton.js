import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ from, to, title }) {
  const { handleSubmit } = useFormikContext();

  return <Button from={from} to={to} title={title} onPress={handleSubmit} />;
}

export default SubmitButton;

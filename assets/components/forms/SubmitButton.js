import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ disabled, from, to, title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      disabled={disabled}
      from={from}
      to={to}
      title={title}
      onPress={handleSubmit}
    />
  );
}

export default SubmitButton;

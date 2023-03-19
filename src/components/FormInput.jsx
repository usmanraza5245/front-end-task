import React from "react";
import TextField from "@mui/material/TextField";

function FormInput(props) {
  const { value, onChange, label, required, type } = props;
  return (
    <TextField
      value={value}
      type={type || "text"}
      label={label}
      variant="outlined"
      onChange={onChange}
      fullWidth
      sx={{ m: 1 }}
      required={required}
    />
  );
}

export default FormInput;

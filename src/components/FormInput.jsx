/**

A component for rendering a form input field with MUI TextField
@param {object} props - Props object for the component
@param {string} props.value - Value of the input field
@param {function} props.onChange - Function to handle the input field's onChange event
@param {string} props.label - Label for the input field
@param {boolean} props.required - Whether the input field is required or not
@param {string} props.type - Type of the input field (e.g. text, number, email, etc.)
@param {number} props.min - Minimum value for the input field (applicable only for number type)
@returns {JSX.Element} - Returns the JSX element for the FormInput component
*/

import React from "react";
import TextField from "@mui/material/TextField";

function FormInput(props) {
  const { value, onChange, label, required, type, min } = props;
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
      inputProps={{
        min: min,
      }}
    />
  );
}

export default FormInput;

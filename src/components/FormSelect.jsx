/**

A component for rendering a form input field with MUI TextField
@param {object} props - Props object for the component
@param {string} props.value - Value of the input field
@param {function} props.onChange - Function to handle the input field's onChange event
@param {string} props.label - Label for the input field
@param {Array} props.options - an array of objects that represents the options for the select input
@param {boolean} props.required - Whether the input field is required or not
@returns {JSX.Element} - Returns the JSX element for the FormInput component
*/

import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import React from "react";

function FormSelect(props) {
  const { label, value, onChange, options, required } = props;
  return (
    // Material-UI FormControl component for better control over form inputs
    <FormControl fullWidth sx={{ m: 1 }}>
      {/* InputLabel component to show the label for the select input */}
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      {/* Select component to display the dropdown menu */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={onChange}
        required={required}
      >
        {/* MenuItem to show default text for dropdown menu */}
        <MenuItem disabled selected>
          Equipment Type
        </MenuItem>
        {/* Map through the options and display as menu items */}
        {options.length > 0 &&
          options.map((option) => (
            <MenuItem value={option.value} key={option.id}>
              {option.label}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default FormSelect;

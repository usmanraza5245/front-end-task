import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import React from "react";

function FormSelect(props) {
  const { label, value, onChange, options, required } = props;
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={onChange}
        required={required}
      >
        <MenuItem disabled selected>
          Equipment Type
        </MenuItem>
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

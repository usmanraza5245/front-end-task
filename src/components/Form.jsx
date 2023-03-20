import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

function Form(props) {
  // Destructuring the props object
  const { data, setData } = props;

  // Using the useState hook to create a formData object and an error message
  const [formData, setFormData] = useState({
    equipmentType: "",
    equipmentName: "",
    sensorType: "",
    sensorName: "",
    sensorPoint: "",
  });

  const [error, setError] = useState("");

  // Handling changes in the form fields and updating the formData object
  const handleChange = (e, type) => {
    const { value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [type]: value,
    }));
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Checking if the equipment name already exists in the data array
    const isUniqueEquipmentName = data.find(
      (record) => record.equipmentName === formData.equipmentName
    );
    // Displaying an error message if the equipment name already exist
    if (
      isUniqueEquipmentName &&
      Object.keys(isUniqueEquipmentName).length > 0
    ) {
      setError("Equipment name must be unique");
    } else {
      // Adding the form data to the data array if the equipment name is unique
      setError("");
      setData((data) => [...data, formData]);
      // Resetting the formData object to empty values after successful form submission
      setFormData({
        equipmentType: "",
        equipmentName: "",
        sensorType: "",
        sensorName: "",
        sensorPoint: "",
      });
    }
  };

  // Rendering the form with input and select fields, error message and a submit button
  return (
    <Box
      component={"form"}
      //   noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <FormSelect
        value={formData.equipmentType}
        options={equipmentData}
        label="Select Equipment"
        onChange={(e) => handleChange(e, "equipmentType")}
        required={true}
      />
      <FormInput
        value={formData.equipmentName}
        label="Equipment Name"
        onChange={(e) => handleChange(e, "equipmentName")}
        required={true}
      />
      <FormSelect
        value={formData.sensorType}
        options={sensorData}
        label="Select Sensor"
        onChange={(e) => handleChange(e, "sensorType")}
        required={true}
      />
      <FormInput
        value={formData.sensorName}
        label="Sensor Name"
        onChange={(e) => handleChange(e, "sensorName")}
        required={true}
      />
      <FormInput
        value={formData.sensorPoint}
        label="Sensor Setpoint"
        onChange={(e) => handleChange(e, "sensorPoint")}
        required={true}
        type="number"
        min={0}
      />
      {error && <Typography sx={{ mx: 1, color: "red" }}>{error}</Typography>}
      <Button variant="contained" color="primary" type="submit" sx={{ m: 1 }}>
        Submit
      </Button>
    </Box>
  );
}

export default Form;

// Creating equipmentData and sensorData arrays for the select fields
const equipmentData = [
  {
    id: 1,
    label: "AHU",
    value: "AHU",
  },
  {
    id: 2,
    label: "RTU",
    value: "RTU",
  },
  {
    id: 3,
    label: "Chiller",
    value: "Chiller",
  },
];

const sensorData = [
  {
    id: 1,
    label: "Temperature",
    value: "Temperature",
  },
  {
    id: 2,
    label: "Pressure",
    value: "Pressure",
  },
  {
    id: 3,
    label: "Humidity",
    value: "Humidity",
  },
];

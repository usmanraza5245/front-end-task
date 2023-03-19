import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

function Form(props) {
  const { data, setData } = props;
  const [formData, setFormData] = useState({
    equipmentType: "",
    equipmentName: "",
    sensorType: "",
    sensorName: "",
    sensorPoint: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e, type) => {
    const { value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [type]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUniqueEquipmentName = data.find(
      (record) => record.equipmentName === formData.equipmentName
    );

    if (
      isUniqueEquipmentName &&
      Object.keys(isUniqueEquipmentName).length > 0
    ) {
      setError("Equipment name must be unique");
    } else {
      setError("");
      setData((data) => [...data, formData]);
      setFormData({
        equipmentType: "",
        equipmentName: "",
        sensorType: "",
        sensorName: "",
        sensorPoint: "",
      });
    }
  };
  return (
    <Box
      component={"form"}
      //   noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      {error && <Typography sx={{ mx: 1, color: "red" }}>{error}</Typography>}

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
      />
      <Button variant="contained" color="primary" type="submit" sx={{ m: 1 }}>
        Submit
      </Button>
    </Box>
  );
}

export default Form;

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

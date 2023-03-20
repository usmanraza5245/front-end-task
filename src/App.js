import { useState } from "react";
import Form from "./components/Form";
import "./App.css";
import { Grid } from "@mui/material";
import SensorTable from "./components/SensorTable";
function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      {/* Use Material-UI Grid to create a grid layout with spacing */}
      <Grid container spacing={{ xs: 0, md: 3, lg: 5 }}>
        {/* Render the Form component in a column for small, medium, and large screens */}
        <Grid item xs={12} md={6} lg={4}>
          {/* Pass the 'data' and 'setData' props to the Form component */}
          <Form data={data} setData={setData} />
        </Grid>
        {/* Render the SensorTable component in a column for small, medium, and large screens */}
        <Grid item xs={12} md={6} lg={8}>
          {/* Pass the 'data' prop to the SensorTable component */}
          <SensorTable data={data} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

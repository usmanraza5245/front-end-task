import { useState } from "react";
import Form from "./components/Form";
import "./App.css";
import { Grid } from "@mui/material";
import SensorTable from "./components/SensorTable";
function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Grid container spacing={{ xs: 0, md: 3, lg: 5 }}>
        <Grid item xs={12} md={6} lg={4}>
          <Form data={data} setData={setData} />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <SensorTable data={data} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

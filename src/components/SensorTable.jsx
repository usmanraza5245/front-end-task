import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function SensorTable(props) {
  const { data } = props;
  return (
    <TableContainer component={Paper} sx={{ m: 1 }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Equipment Name</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Sensor Name</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Sensor Setpoint</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.length > 0 ? (
            data.map((record) => (
              <TableRow
                key={record.equipmentName}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{record.equipmentName}</TableCell>
                <TableCell>{record.sensorName}</TableCell>
                <TableCell>{record.sensorPoint}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

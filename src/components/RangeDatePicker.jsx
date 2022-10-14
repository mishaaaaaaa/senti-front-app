import * as React from "react";
import { Box, TextField, Grid, Button } from "@mui/material/";
import FromDatePicker from "./FromDatePicker";

export default function RangeDatePicker() {
  return (
    <Grid
      my={10}
      container
      spacing={0.5}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6} lg={4}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3} lg={3}>
        <FromDatePicker />
      </Grid>
      <Grid item xs={3} lg={3}>
        <FromDatePicker />
      </Grid>
      <Grid item xs={6} lg={2}>
        <Button variant="contained">Contained</Button>
      </Grid>
    </Grid>
  );
}

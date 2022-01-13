// import React from "react";
// import Layout from "./Layout";

// const PlanJourney = () => {
//   return (
//     <Layout>
//       <h1>About</h1>
//     </Layout>
//   );
// };

// export default PlanJourney;

import React from "react";

import Autocomplete from "@material-ui/lab/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Layout from "./Layout";
const PlanJourney = () => {
  const [value, setValue] = React.useState(new Date());
  // Sample options for dropdown
  const myOptions = ["One", "Two", "Three", "Four", "Five"];

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <div className="container" style={{ marginTop: "60px" }}>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Item>
              {" "}
              <Autocomplete
                style={{ width: "100%" }}
                options={myOptions}
                getOptionDisabled={(option) => {
                  // Mention options which needs to be disable
                  return option === myOptions[1] || option === myOptions[3];
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Source Stations"
                    variant="outlined"
                  />
                )}
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Autocomplete
                style={{ width: "100%" }}
                options={myOptions}
                getOptionDisabled={(option) => {
                  // Mention options which needs to be disable
                  return option === myOptions[1] || option === myOptions[3];
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Destination Stations"
                    variant="outlined"
                  />
                )}
              />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              {" "}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Booking Date"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </Item>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button variant="outlined" large>
              Booking Now
            </Button>
          </Grid>
        </Grid>
      </div>
      <div></div>
    </Layout>
  );
};

export default PlanJourney;

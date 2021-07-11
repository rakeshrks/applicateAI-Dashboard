import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import OrderChart from "./OrderChart";
import OrderTabels from "./OrderTabels";
import OrderReport from "./OrderReport";

const useStyle = makeStyles({
  card: {
    margin: "2px 2px  ",
  },
  title: {
    fontSize: 14,
  },
});

export default function App() {
  const classes = useStyle();

  return (
    <>
      <Grid container spacing={1} className={classes.card}>
        <Grid item xs={12} sm={3}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            <Typography className={classes.title}>
              Today’s order- 200
            </Typography>
            <Typography className={classes.title}>.</Typography>
            <Typography className={classes.title}>
              Current Week Order- 450
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            <Typography className={classes.title}>
              Today’s order amount- 20000
            </Typography>
            <Typography className={classes.title}>.</Typography>
            <Typography className={classes.title}>
              Current Week amount- 45000
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            <Typography className={classes.title}>MTD order- 400</Typography>
            <Typography className={classes.title}>.</Typography>
            <Typography className={classes.title}>
              Last Month Order- 200
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            <Typography className={classes.title}>
              MTD order amount- 65000
            </Typography>
            <Typography className={classes.title}>.</Typography>
            <Typography className={classes.title}>
              Last month amount- 45000
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <div className="App">
        <OrderChart />
      </div>
      <div className="App">
        <OrderTabels />
      </div>
      <div className="App">
        <OrderReport />
      </div>
    </>
  );
}

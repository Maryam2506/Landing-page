import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Beyblade from "../Images/Beybladee.png";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      justifyContent: "center",
      padding: 10,
    },
    text: {
      color: "#3f51b5",
      marginBottom: 10,
    },

    img: {
      width: "80%",
    },
    Mtext: {
      marginTop: "5%",
      marginBottom: "6%",
      padding: 30,
    },
    btn: {
      marginTop: 10,
    }
  };
});

function LPage() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item sm={12} md={5} className={classes.Mtext}>
        <Typography className={classes.text} variant="h5">
          BECOME A BEYMASTER
        </Typography>
        <Typography variant="body1">
          Launch into BEYBLADE BURST! Discover new tech, battle strategies, and
          everything you need for next level tournament battling.
        </Typography>
        <Button variant="contained" color="primary" className={classes.btn}>
          Check It Out
        </Button>
      </Grid>
      <Grid item sm={12} md={5}>
        <img src={Beyblade} alt="" className={classes.img} />
      </Grid>
    </Grid>
  );
}

export default LPage;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";

import logo from "../assets/logo.png";

const useStyles = makeStyles({
  logo: {
    maxWidth: 160,
    margin: "auto",
  },
});

export default function Nav() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" style={{ backgroundColor: "black" }} sx={{ p: 2 }}>
      <Toolbar>
        <img src={logo} className={classes.logo} alt="logo" />
      </Toolbar>
    </AppBar>
  );
}

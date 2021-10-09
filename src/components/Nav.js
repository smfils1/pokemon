import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import logo from "../assets/logo.png";

export default function Nav() {
  return (
    <AppBar position="fixed" style={{ backgroundColor: "black" }} sx={{ p: 2 }}>
      <Toolbar>
        <img
          src={logo}
          style={{
            maxWidth: 160,
            margin: "auto",
          }}
          alt="logo"
        />
      </Toolbar>
    </AppBar>
  );
}

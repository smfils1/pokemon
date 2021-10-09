import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { displayName } from "../utils/pokemon";

export default function NameButton({ name, handleOpen }) {
  return (
    <Button onClick={handleOpen}>
      <Box
        sx={{
          p: 3,
          backgroundColor: "black",
          color: "white",
        }}
      >
        {displayName(name).toUpperCase()}
      </Box>
    </Button>
  );
}

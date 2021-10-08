import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function NameLink({ name, handleOpen }) {
  return (
    <Button onClick={handleOpen}>
      <Box
        sx={{
          p: 3,
          backgroundColor: "black",
        }}
      >
        {name}
      </Box>
    </Button>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function NameLink({ name }) {
  return (
    <Link href={`https://pokeapi.co/api/v2/pokemon/${name}`}>
      <Box
        sx={{
          p: 3,
          backgroundColor: "black",
        }}
      >
        {name}
      </Box>
    </Link>
  );
}

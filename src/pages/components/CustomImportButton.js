import React from "react";

import { Box, Typography, Button } from "@mui/material";

export default function CustomImportButton({ open }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "48px",
        display: "flex",
        justifyContent: "center",
        height: "100px",
        width: "100%",
        backgroundColor: "red",
        transition: "all 0.3s ease",
        opacity: open === true ? "0" : "1",
        pointerEvents: open === true ? "none" : "all",
      }}
    >
      <Button
        sx={{
          transition: "all 0.3s ease",
        }}
      >
        <Typography>yeah</Typography>
      </Button>
    </Box>
  );
}

import React from "react";

import { Modal, Paper, Typography, TextField, Button } from "@mui/material";

export default function CustomMaterialQuantity({
  open,
  onClose,
  material_quanity,
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginLeft: "40px",
      }}
    >
      <Paper
        sx={{
          width: "1000px",
          outline: "none",
          overflow: "hidden",
        }}
      >
        <Box sx={{ height: "4px", width: "100%" }}>
          <Typography>material_quanity.quantity</Typography>
        </Box>
      </Paper>
    </Modal>
  );
}

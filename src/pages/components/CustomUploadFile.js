import React from "react";
import { Box, TextField, Button } from "@mui/material";

export const MaterialsUploadFile = ({
  accept,
  onChange,
  value,
  disabled,
  children,
}) => {
  return (
    <Box
      component="label"
      htmlFor="upload_file"
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <TextField
        type="file"
        disabled={disabled}
        id="upload_file"
        name="upload_file"
        onChange={disabled ? () => {} : onChange}
        sx={{ display: "none" }}
      />
      {children}
    </Box>
  );
};

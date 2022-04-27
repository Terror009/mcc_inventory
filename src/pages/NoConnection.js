import React from "react";

import { Box, Typography, Button } from "@mui/material";

export default function NoConnection() {
    const Reload = () => {
      window.location.reload();
      }
  return (
    <Box>
      <Typography>No Internet Connection</Typography>
      <Button type="submit" onClick={Reload}>Please Try Again</Button>
    </Box>
  );
}

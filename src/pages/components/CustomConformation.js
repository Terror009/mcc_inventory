import React from "react";

import { Modal, Box, Paper, Typography, Button } from "@mui/material";

export default function CustomConformation({ open, onClose, message }) {
  const isClose = () => {
    onClose();
  };

  const LogOut = () => {
    localStorage.clear();
    window.location.reload();
  };
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
          width: "700px",
          outline: "none",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          }}
        >
          <Typography>Warning</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Box sx={{ padding: "40px 40px" }}>
            <Typography
              sx={{
                fontSize: "20px",
                color: (theme) => theme.palette.textColor.col1,
              }}
            >
              {message}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 20px",
          }}
        >
          <Button
            sx={{
              height: "30px",
              width: "150px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: (theme) => theme.palette.secondary.main,
              marginRight: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                color: (theme) => theme.palette.textColor.col1,
              }}
              onClick={LogOut}
            >
              Confirm
            </Typography>
          </Button>
          <Button
            sx={{
              height: "30px",
              width: "150px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: (theme) => theme.palette.secondary.bg4,
            }}
            onClick={isClose}
          >
            <Typography
              sx={{
                fontSize: "18px",
                color: (theme) => theme.palette.textColor.col6,
              }}
            >
              Cancel
            </Typography>
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
}

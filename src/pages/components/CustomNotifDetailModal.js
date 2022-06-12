import React from "react";

import {
  Modal,
  Paper,
  Box,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
export default function CustomNotifDetailModal({
  open,
  onClose,
  request_info,
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
          width: "500px",
          outline: "none",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 20px",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          }}
        >
          <Typography>Material Details</Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: (theme) => theme.palette.textColor.col3,
              marginRight: "90px",
            }}
          >
            Material:
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: (theme) => theme.palette.textColor.col5,
            }}
          >
            {request_info.material_name}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: (theme) => theme.palette.textColor.col3,
              marginRight: "60px",
            }}
          >
            Manufacturer
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: (theme) => theme.palette.textColor.col5,
            }}
          >
            {request_info.manufacturer}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: (theme) => theme.palette.textColor.col3,
              marginRight: "35px",
            }}
          >
            Storage Location
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: (theme) => theme.palette.textColor.col5,
            }}
          >
            {request_info.storage_location}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: (theme) => theme.palette.textColor.col3,
              marginRight: "90px",
            }}
          >
            Quantity
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: (theme) => theme.palette.textColor.col5,
            }}
          >
            {request_info.quantity}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: (theme) => theme.palette.textColor.col3,
              marginRight: "35px",
            }}
          >
            Date Requested:
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: (theme) => theme.palette.textColor.col5,
            }}
          >
            {request_info.date_requested}
          </Typography>
        </Box>
      </Paper>
    </Modal>
  );
}

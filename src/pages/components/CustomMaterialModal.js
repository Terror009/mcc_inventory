import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Paper,
  IconButton,
  TextField,
} from "@mui/material";

import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";
import CustomMaterialEditModal from "./CustomMaterialEditModal";
export default function CustomMaterialModal({ open, onClose, material_info }) {
  const [payload, Setpayload] = useState({
    isOpen: false,
  });

  const ModalHandleOpen = () => {
    Setpayload({ ...payload, isOpen: true });
  };
  const ModalHandleClose = () => {
    Setpayload({ ...payload, isOpen: false });
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
          height: "500px",
          width: "1000px",
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
          <Typography>{material_info.name} Information</Typography>
          <Box Component="span" sx={{ flexGrow: "1" }} />
          <IconButton onClick={ModalHandleOpen}>
            <EditIcon />
          </IconButton>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "160px",
            }}
          >
            Name
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.name}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "100px",
            }}
          >
            Storage Location
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.location}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "147px",
            }}
          >
            Quantity
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.quantity}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "110px",
            }}
          >
            Inventory Code
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.inventory_code}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "118px",
            }}
          >
            Product Code
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.product_code}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "122px",
            }}
          >
            Manufacturer
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.manufacturer}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "125px",
            }}
          >
            Part Number
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.part_no}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,

              marginRight: "112px",
            }}
          >
            Item Condition
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.status}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,

              marginRight: "82px",
            }}
          >
            Parts Requirements
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>N/A</Typography>
        </Box>
        <CustomMaterialEditModal
          open={payload.isOpen}
          onClose={ModalHandleClose}
          material_info={material_info}
        />
      </Paper>
    </Modal>
  );
}

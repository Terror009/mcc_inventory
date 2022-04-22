import React, { useState } from "react";

import { Modal, Paper, Box, Typography, IconButton } from "@mui/material";

import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";

import CustomSupplierEditModal from "./CustomEditModal";

export default function CustomSupplierModal({
  open,
  onClose,
  supplier_info,
  path_url,
}) {
  const [supplier_edit_modal, setsupplier_edit_modal] = useState({
    isOpen: false,
  });
  const SupplierModalHandleOpen = () => {
    setsupplier_edit_modal({ ...supplier_edit_modal, isOpen: true });
  };
  const SupplierModalHandleClose = () => {
    setsupplier_edit_modal({ ...setsupplier_edit_modal, isOpen: false });
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
          height: "400px",
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
          {path_url === "/suppliers" ? (
            <Typography
              variant="h5"
              sx={{ color: (theme) => theme.palette.textColor.col3 }}
            >
              Supplier Information
            </Typography>
          ) : (
            <Typography
              variant="h5"
              sx={{ color: (theme) => theme.palette.textColor.col3 }}
            >
              Manufacturer Information
            </Typography>
          )}
          <Box component="span" sx={{ flexGrow: "1" }} />
          <IconButton onClick={SupplierModalHandleOpen}>
            <EditIcon />
          </IconButton>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "20px 40px" }}
        >
          <Typography
            sx={{
              marginRight: "132px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Name
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {supplier_info.name}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "20px 40px" }}
        >
          {path_url === "/suppliers" ? (
            <Typography
              sx={{
                marginRight: "100px",
                color: (theme) => theme.palette.textColor.col3,
                fontSize: "14px",
              }}
            >
              Supplier ID
            </Typography>
          ) : (
            <Typography
              sx={{
                marginRight: "66px",
                color: (theme) => theme.palette.textColor.col3,
                fontSize: "14px",
              }}
            >
              Manufacturer ID
            </Typography>
          )}
          <Typography sx={{ fontSize: "14px" }}>
            {supplier_info.supplier_id}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "20px 40px" }}
        >
          <Typography
            sx={{
              marginRight: "135px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Email
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {supplier_info.email}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "20px 40px" }}
        >
          <Typography
            sx={{
              marginRight: "95px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Contact No.
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {supplier_info.contact}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "20px 40px" }}
        >
          <Typography
            sx={{
              marginRight: "120px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Address
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {supplier_info.address}
          </Typography>
        </Box>
        <CustomSupplierEditModal
          open={supplier_edit_modal.isOpen}
          onClose={SupplierModalHandleClose}
          supplier_info={supplier_info}
          path_url={path_url}
        />
      </Paper>
    </Modal>
  );
}

import React, { useState } from "react";

import {
  Modal,
  Paper,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import { classes } from "../../design/uiDesign";

export default function CustomEditModal({
  open,
  onClose,
  supplier_info,
  path_url,
}) {
  const [supplier_edit, Setsupplier_edit] = useState({
    name: supplier_info.name,
    supplier_id: supplier_info.supplier_id,
    email: supplier_info.email,
    contact: supplier_info.contact,
    address: supplier_info.address,
  });

  const SupplierHandleChange = (prop) => (e) => {
    Setsupplier_edit({ ...supplier_edit, [prop]: e.target.value });
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
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{
              marginRight: "120px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Name
          </Typography>
          <TextField
            onChange={SupplierHandleChange("name")}
            value={supplier_edit.name}
            size="small"
            sx={classes.supplier_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          {path_url === "/suppliers" ? (
            <Typography
              sx={{
                marginRight: "88px",
                color: (theme) => theme.palette.textColor.col3,
                fontSize: "14px",
              }}
            >
              Supplier ID
            </Typography>
          ) : (
            <Typography
              sx={{
                marginRight: "56px",
                color: (theme) => theme.palette.textColor.col3,
                fontSize: "14px",
              }}
            >
              Manufacturer ID
            </Typography>
          )}
          <TextField
            onChange={SupplierHandleChange("supplier_id")}
            value={supplier_edit.supplier_id}
            size="small"
            sx={classes.supplier_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          <Typography
            sx={{
              marginRight: "122px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Email
          </Typography>
          <TextField
            onChange={SupplierHandleChange("email")}
            value={supplier_edit.email}
            size="small"
            sx={classes.supplier_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          <Typography
            sx={{
              marginRight: "84px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Contact No.
          </Typography>
          <TextField
            onChange={SupplierHandleChange("contact")}
            value={supplier_edit.contact}
            size="small"
            sx={classes.supplier_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          <Typography
            sx={{
              marginRight: "108px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Address
          </Typography>
          <TextField
            onChange={SupplierHandleChange("address")}
            value={supplier_edit.address}
            size="small"
            sx={classes.supplier_edit_input}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px 0px",
          }}
        >
          <Button
            sx={{
              height: "40px",
              width: "150px",
              border: "1px solid #3A57E8",
              borderRadius: "10px",
              color: (theme) => theme.palette.textColor.col1,
              marginRight: "40px",
            }}
          >
            <Typography>Save</Typography>
          </Button>
          <Button
            sx={{
              height: "40px",
              width: "150px",
              border: "1px solid #439B38",
              borderRadius: "10px",
              color: (theme) => theme.palette.textColor.col6,
            }}
          >
            <Typography>Cancel</Typography>
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
}

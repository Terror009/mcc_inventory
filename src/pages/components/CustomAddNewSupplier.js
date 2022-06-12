import React, { useState } from "react";

import {
  Modal,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import { addsupplier } from "../../api/supplierApi";
import { classes } from "../../design/uiDesign";

export default function CustomAddNewSupplier({ open, onClose, AddUpdate }) {
  const [payload, setPayload] = useState({
    supplier_name: "",
    supplier_email: "",
    supplier_contact: "",
    supplier_address: "",
  });
  const AddNewHandleChange = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };
  const isClose = () => {
    onClose();
    setPayload({
      ...payload,
      supplier_name: "",
      supplier_email: "",
      supplier_contact: "",
      supplier_address: "",
    });
  };
  const AddNewSupplier = () => {
    const admin_id = JSON.parse(localStorage.getItem("user"));

    const obj = {
      supplier_name: payload.supplier_name,
      supplier_email: payload.supplier_email,
      supplier_contact: "0" + payload.supplier_contact,
      supplier_address: payload.supplier_address,
    };

    addsupplier(obj);
    isClose();
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
          <Typography
            variant="h5"
            sx={{ color: (theme) => theme.palette.textColor.col3 }}
          >
            Add New Supplier
          </Typography>
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
            size="small"
            sx={classes.edit_input}
            value={payload.supplier_name}
            onChange={AddNewHandleChange("supplier_name")}
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
            size="small"
            sx={classes.edit_input}
            value={payload.supplier_email}
            onChange={AddNewHandleChange("supplier_email")}
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
            type="number"
            size="small"
            sx={classes.edit_input}
            value={payload.supplier_contact}
            onChange={AddNewHandleChange("supplier_contact")}
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
            size="small"
            sx={classes.edit_input}
            value={payload.supplier_address}
            onChange={AddNewHandleChange("supplier_address")}
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
              height: "35px",
              width: "150px",
              border: "1px solid #3A57E8",
              borderRadius: "10px",
              color: (theme) => theme.palette.textColor.col1,
              marginRight: "40px",
            }}
            onClick={AddNewSupplier}
          >
            <Typography>Save</Typography>
          </Button>
          <Button
            sx={{
              height: "35px",
              width: "150px",
              border: "1px solid #439B38",
              borderRadius: "10px",
              color: (theme) => theme.palette.textColor.col6,
            }}
            onClick={isClose}
          >
            <Typography>Cancel</Typography>
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
}

import React, { useState } from "react";

import {
  Modal,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import { addmanufacturer } from "../../api/manufacturerApi";
import { classes } from "../../design/uiDesign";

export default function CustomAddNewManufacturer({ open, onClose }) {
  const [payload, setPayload] = useState({
    manufacturer_name: "",
    manufacturer_email: "",
    manufacturer_contact: "",
    manufacturer_address: "",
    user_id: "",
  });
  const AddNewHandleChange = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };
  const isClose = () => {
    onClose();
    setPayload({
      ...payload,
      manufacturer_name: "",
      manufacturer_email: "",
      manufacturer_contact: "",
      manufacturer_address: "",
    });
  };
  const AddNewManufacturer = () => {
    const user_id = JSON.parse(localStorage.getItem("user"));
    const obj = {
      manufacturer_name: payload.manufacturer_name,
      manufacturer_email: payload.manufacturer_email,
      manufacturer_contact: "0" + payload.manufacturer_contact,
      manufacturer_address: payload.manufacturer_address,
      user_id: user_id.user_id,
    };
    addmanufacturer(obj);
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
            Add New Manufacturer
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
            value={payload.manufacturer_name}
            onChange={AddNewHandleChange("manufacturer_name")}
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
            value={payload.manufacturer_email}
            onChange={AddNewHandleChange("manufacturer_email")}
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
            value={payload.manufacturer_contact}
            onChange={AddNewHandleChange("manufacturer_contact")}
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
            value={payload.manufacturer_address}
            onChange={AddNewHandleChange("manufacturer_address")}
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
            onClick={AddNewManufacturer}
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

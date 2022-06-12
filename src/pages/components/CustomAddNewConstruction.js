import React, { useState } from "react";

import {
  Modal,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import { createConstruction } from "../../api/constructionApi";
import { classes } from "../../design/uiDesign";

export default function CustomAddNewConstruction({ open, onClose }) {
  const [payload, setPayload] = useState({
    construction_site_name: "",
    construction_client_name: "",
  });

  const AddNewHandleChange = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };

  const isClose = () => {
    onClose();
    setPayload({
      ...payload,
      construction_site_name: "",
      construction_client_name: "",
    });
  };
  const AddNewConstruction = () => {

    const admin_id = JSON.parse(localStorage.getItem("user"));

    const obj = {
      construction_site_name: payload.construction_site_name,
      construction_client_name: payload.construction_client_name,
    };
    createConstruction(obj);
    console.log(obj);
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
          height: "300px",
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
            Add New Construction Site
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
              marginRight: "90px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Site Name
          </Typography>
          <TextField
            size="small"
            sx={classes.edit_input}
            value={payload.construction_site_name}
            onChange={AddNewHandleChange("construction_site_name")}
          />
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
              marginRight: "80px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Client Name
          </Typography>
          <TextField
            size="small"
            sx={classes.edit_input}
            value={payload.construction_client_name}
            onChange={AddNewHandleChange("construction_client_name")}
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
            onClick={AddNewConstruction}
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

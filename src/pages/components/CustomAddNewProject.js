import React, { useState } from "react";

import {
  Modal,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

import { classes } from "../../design/uiDesign";
import { createProject } from "../../api/projectApi";

export default function CustomAddNewProject({ open, onClose }) {
  const [payload, Setpayload] = useState({
    project_name: "",
    site_location: "",
    budget: "",
    client_name: "",
  });

  const [status, SetStatus] = useState("Ongoing");

  const AddNewHandleChange = (prop) => (e) => {
    Setpayload({ ...payload, [prop]: e.target.value });
  };
  const SelectHandleChange = (e) => {
    SetStatus(e.target.value);
  };

  const AddNewProject = () => {
    const user_id = JSON.parse(localStorage.getItem("user"));
    const obj = {
      project_name: payload.project_name,
      site_location: payload.site_location,
      budget: payload.budget,
      client_name: payload.client_name,
      status: status,
      project_time: new Date().toLocaleTimeString(),
      user_id: user_id.user_id,
    };
    createProject(obj);
    isClose();
    window.location.reload();
  };

  const isClose = () => {
    onClose();
    Setpayload({
      ...payload,
      project_name: "",
      site_location: "",
      budget: "",
      client_name: "",
    });
    SetStatus("Ongoing");
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
          <Typography
            variant="h5"
            sx={{ color: (theme) => theme.palette.textColor.col3 }}
          >
            Add New Projects
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "70px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Project Name
          </Typography>
          <TextField
            sx={classes.project_edit_input}
            value={payload.project_name}
            onChange={AddNewHandleChange("project_name")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "70px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Site Location
          </Typography>
          <TextField
            sx={classes.project_edit_input}
            value={payload.site_location}
            onChange={AddNewHandleChange("site_location")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "110px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Budget
          </Typography>
          <TextField
            sx={classes.project_edit_input}
            value={payload.budget}
            onChange={AddNewHandleChange("budget")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "74px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Client Name
          </Typography>
          <TextField
            sx={classes.project_edit_input}
            value={payload.client_name}
            onChange={AddNewHandleChange("client_name")}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "20px 20px" }}
        >
          <Typography
            sx={{
              marginRight: "112px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Status
          </Typography>
          <Select
            value={status}
            label="Status"
            onChange={SelectHandleChange}
            sx={{
              height: "35px",
              width: "80%",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: (theme) => theme.palette.secondary.main,
              borderRadius: "30px",
              fontSize: "14px",
              textTransform: "uppercase",
            }}
          >
            <MenuItem
              value={"Ongoing"}
              sx={{ fontSize: "14px", textTransform: "uppercase" }}
            >
              Ongoing
            </MenuItem>
            <MenuItem
              value={"Canceled"}
              sx={{ fontSize: "14px", textTransform: "uppercase" }}
            >
              Canceled
            </MenuItem>
            <MenuItem
              value={"Complete"}
              sx={{ fontSize: "14px", textTransform: "uppercase" }}
            >
              Complete
            </MenuItem>
            <MenuItem
              value={"Pending"}
              sx={{ fontSize: "14px", textTransform: "uppercase" }}
            >
              Pending
            </MenuItem>
          </Select>
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
            onClick={AddNewProject}
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

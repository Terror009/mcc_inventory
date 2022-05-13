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
import { createUserList } from "../../api/userlistApi";

export default function CustomAddNewUsers({ open, onClose }) {
  const [payload, setPayload] = useState({
    user_list_name: "",
    user_list_email: "",
    user_list_phone: "",
  });

  const [usertype, SetUserType] = useState("");
  const AddNewHandleChange = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };

  const SelectHandleChange = (e) => {
    SetUserType(e.target.value);
  };
  const AddNewUser = () => {
    const user_id = JSON.parse(localStorage.getItem("user"));
    const obj = {
      user_list_name: payload.user_list_name,
      user_list_email: payload.user_list_email,
      user_list_phone: payload.user_list_phone,
      user_list_user_type: usertype,
      user_id: user_id.user_id,
    };

    createUserList(obj);
    isClose();
    window.location.reload();
  };
  const isClose = () => {
    onClose();
    setPayload({
      ...payload,
      user_list_name: "",
      user_list_email: "",
      user_list_phone: "",
      user_list_user_type: "",
    });
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
            Add New Users
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
            sx={classes.edit_input}
            value={payload.user_list_name}
            onChange={AddNewHandleChange("user_list_name")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
          }}
        >
          <Typography
            sx={{
              marginRight: "120px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Email
          </Typography>
          <TextField
            sx={classes.edit_input}
            value={payload.user_list_email}
            onChange={AddNewHandleChange("user_list_email")}
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
            sx={classes.edit_input}
            value={payload.user_list_phone}
            onChange={AddNewHandleChange("user_list_phone")}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          <Typography
            sx={{
              marginRight: "95px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            User Type
          </Typography>
          <Select
            value={usertype}
            label="User Type"
            onChange={SelectHandleChange}
            sx={{ width: "80%", border: "1px solid blue"}}
            size="small"
          >
            <MenuItem value={"Intern"}>INTERN</MenuItem>
            <MenuItem value={"MCC Core Team"}>MCC CORE TEAM</MenuItem>
            <MenuItem value={"MCC HR Team"}>MCC HR TEAM</MenuItem>
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
            onClick={AddNewUser}
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

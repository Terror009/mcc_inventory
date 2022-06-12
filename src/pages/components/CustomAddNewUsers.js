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
import NumberFormat from "react-number-format";

import { classes } from "../../design/uiDesign";
import { createUserList } from "../../api/userlistApi";
import { createUserListHistory } from "../../api/userlisthistoryApi";
export default function CustomAddNewUsers({ open, onClose }) {
  const [payload, setPayload] = useState({
    user_list_name: "",
    user_list_email: "",
    user_list_contact: "",
    start_date: "",
    end_date: "",
  });

  const [usertype, SetUserType] = useState("");
  const AddNewHandleChange = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };

  const SelectHandleChange = (e) => {
    SetUserType(e.target.value);
  };
  const AddNewUser = () => {
    const admin_id = JSON.parse(localStorage.getItem("user"));
    const obj = {
      user_list_name: payload.user_list_name,
      user_list_email: payload.user_list_email,
      user_list_contact: payload.user_list_contact,
      user_list_type: usertype,
      user_date_created: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      user_time_created: new Date().toLocaleTimeString(),
      start_date: payload.start_date,
      end_date: payload.end_date,
    };

    const obj1 = {
      user_list_name: payload.user_list_name,
      user_list_email: payload.user_list_email,
      user_list_contact: payload.user_list_contact,
      user_list_type: usertype,
      user_date_created: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      user_time_created: new Date().toLocaleTimeString(),
      start_date: payload.start_date,
      end_date: payload.end_date,
      action: "create user",
    };
    createUserList(obj);
    createUserListHistory(obj1);
    isClose();
    window.location.reload();
  };
  const isClose = () => {
    onClose();
    setPayload({
      ...payload,
      user_list_name: "",
      user_list_email: "",
      user_list_contact: "",
      start_date: "",
      end_date: "",
    });
    SetUserType("");
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
            type="tel"
            sx={classes.edit_input}
            value={payload.user_list_contact}
            onChange={AddNewHandleChange("user_list_contact")}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          <Typography
            sx={{
              marginRight: "94px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Start Date
          </Typography>
          <TextField
            type="date"
            sx={classes.edit_input}
            value={payload.start_date}
            onChange={AddNewHandleChange("start_date")}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          <Typography
            sx={{
              marginRight: "96px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            End Date
          </Typography>
          <TextField
            type="date"
            sx={classes.edit_input}
            value={payload.end_date}
            onChange={AddNewHandleChange("end_date")}
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

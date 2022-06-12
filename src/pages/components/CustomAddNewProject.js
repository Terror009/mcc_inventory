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
import { DatePicker } from "@mui/lab";
import { classes } from "../../design/uiDesign";
import { createProject } from "../../api/projectApi";
import { createConstruction } from "../../api/constructionApi";
import CustomDatepicker from "./CustomDatepicker";
import dayjs from "dayjs";

export default function CustomAddNewProject({ open, onClose }) {
  const [payload, Setpayload] = useState({
    project_name: "",
    site_location: "",
    budget: "",
    client_name: "",
    start_date: "",
    end_date: "",
  });

  const [status, SetStatus] = useState("Ongoing");

  const AddNewHandleChange = (prop) => (e) => {
    Setpayload({ ...payload, [prop]: e.target.value });
  };

  const SelectHandleChange = (e) => {
    SetStatus(e.target.value);
  };

  const AddNewProject = () => {
    const date = new Date();
    const setDate = date.getDate();
    const day = date.getDay();
    const month = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const admin_id = JSON.parse(localStorage.getItem("user"));

    const obj = {
      project_name: payload.project_name,
      site_location: payload.site_location,
      budget: payload.budget,
      client_name: payload.client_name,
      status:
        dayjs(payload.start_date).format("MM/DD/YYYY") >
        new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
          ? "Pending"
          : "Ongoing",
      project_date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      start_date: dayjs(payload.start_date).format("MM/DD/YYYY"),
      end_date: dayjs(payload.end_date).format("MM/DD/YYYY"),
      month: month[date.getMonth()],
      week: Math.ceil((setDate + 6 - day) / 7) + "week",
    };

    const obj1 = {
      project_name: payload.project_name,
      site_location: payload.site_location,
      budget: payload.budget,
      client_name: payload.client_name,
      status:
        dayjs(payload.start_date).format("MM/DD/YYYY") >
        new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
          ? "Pending"
          : "Ongoing",
      project_date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      start_date: dayjs(payload.start_date).format("MM/DD/YYYY"),
      end_date: dayjs(payload.end_date).format("MM/DD/YYYY"),
    };

    createProject(obj);
    createConstruction(obj1);
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
      start_date: "",
      end_date: "",
    });
    /*    SetDate({
      start_date: "",
      end_date: "",
    }); */
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
          <NumberFormat
            customInput={TextField}
            sx={classes.project_edit_input}
            type="text"
            value={payload.budget}
            onChange={AddNewHandleChange("budget")}
            thousandSeparator={true}
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
              marginRight: "90px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Start Date
          </Typography>
          <TextField
            type="date"
            value={payload.start_date}
            onChange={AddNewHandleChange("start_date")}
            sx={classes.project_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "20px 20px" }}
        >
          <Typography
            sx={{
              marginRight: "95px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            End Date
          </Typography>
          <TextField
            type="date"
            value={payload.end_date}
            onChange={AddNewHandleChange("end_date")}
            sx={classes.project_edit_input}
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

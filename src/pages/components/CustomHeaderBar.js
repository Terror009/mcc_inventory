import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  TextField,
  Paper,
} from "@mui/material";

import { ReactComponent as NotificationIcon } from "../../assets/svg/notification.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

export default function CustomHeaderBar() {
  const [payload, Setpayload] = useState({
    data: {},
  });
  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("user"));
    const fetchData = () => {
      Setpayload({
        ...payload,
        data: arr,
      });
    };
    fetchData();
  }, []);
  return (
    <Box
      sx={{
        position: "fixed",
        width: "1320px",
        overflow: "hidden",
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Toolbar>
        <TextField
          InputProps={{
            startAdornment: <SearchIcon style={{ marginRight: "20px" }} />,
            style: {
              height: "40px",
              border: "1px solid blue",
            },
          }}
          placeholder="Search"
          type="search"
        />
        <Box component="span" sx={{ flexGrow: "1" }} />
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "",
            width: "300px",
          }}
        >
          <NotificationIcon />
          <Avatar />
          <Box>
            <Typography variant="body1">
              {payload.data.firstname + " " + payload.data.lastname}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: (theme) => theme.palette.textColor.col4 }}
            >
              Manager
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );
}

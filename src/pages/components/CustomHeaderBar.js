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

import { API } from "../../api/api";
import axios from "axios";

import { ReactComponent as NotificationIcon } from "../../assets/svg/notification.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

export default function CustomHeaderBar() {
  const [payload, Setpayload] = useState({
    data: [{}],
  });
  useEffect(() => {
    const key = JSON.parse(localStorage.getItem("user"));
    const session_key = {
      session_key: key.session_key,
    };
    const fetchData = () => {
      axios({
        method: "POST",
        url: API.user.findUser,
        data: JSON.stringify(session_key),
      })
        .then((response) => {
          console.log(response.data);
          Setpayload({ ...payload, data: response.data });
        })
        .catch((response) => {
          console.log(response.data);
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
            {payload.data.map((index, i) => (
              <Typography variant="body1" key={i}>
                {index.firstname + " " + index.lastname}
              </Typography>
            ))}
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

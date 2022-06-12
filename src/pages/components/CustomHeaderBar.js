import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  TextField,
  Paper,
  IconButton,
  Badge,
} from "@mui/material";

import { Link as NLink, useLocation } from "react-router-dom";
import { API } from "../../api/api";
import axios from "axios";

import { ReactComponent as NotificationIcon } from "../../assets/svg/notification.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import CustomNavigationPanel from "./CustomNavigationPanel";

export default function CustomHeaderBar() {
  const { pathname } = useLocation();
  const [payload, Setpayload] = useState({
    data: [{}],
  });
  const [notif, SetNotif] = useState({
    isNotif: [{}],
  });

  const [panel, SetPanel] = useState({
    isOpen: false,
  });

  const PanelHandleChangeOpen = () => {
    SetPanel({ ...panel, isOpen: true });
  };

  const PanelHandleChangeClose = () => {
    SetPanel({ ...panel, isOpen: false });
  };

  useEffect(() => {
    const key = JSON.parse(localStorage.getItem("user"));
    const session_key = {
      session_key: key.session_key,
    };
    const fetchData = async () => {
      await axios({
        method: "POST",
        url: API.admin.findAdmin,
        data: JSON.stringify(session_key),
      })
        .then((response) => {
          /*        console.log(response.data); */
          Setpayload({ ...payload, data: response.data });
        })
        .catch((response) => {
          console.log(response.data);
        });
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: API.materialRequest.fetchMaterial,
      })
        .then((response) => {
          console.log(response.data);
          SetNotif({ ...notif, isNotif: response.data });
        })
        .catch(({ response }) => {
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
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Toolbar sx={{ position: "relative" }}>
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
            width: "400px",
          }}
        >
          <IconButton onClick={PanelHandleChangeOpen}>
            <Badge badgeContent={notif.isNotif.length} color="secondary">
              <NotificationIcon
                style={{
                  height: "25px",
                  width: "25px",
                  pointerEvents: "none",
                }}
              />
            </Badge>
          </IconButton>
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
      <CustomNavigationPanel
        open={panel.isOpen}
        onClose={PanelHandleChangeClose}
      />
    </Box>
  );
}

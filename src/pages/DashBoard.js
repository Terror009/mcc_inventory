import React, { useState, useEffect } from "react";
import { API } from "../api/api";
import axios from "axios";
import {
  Box,
  Card,
  Paper,
  Typography,
  Avatar,
  LinearProgress,
  Button,
} from "@mui/material";

import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";

import backgroundImg from "../assets/img/background.png";
import { ReactComponent as PendingIcon } from "../assets/svg/pending.svg";
import { ReactComponent as ActiveIcon } from "../assets/svg/active.svg";
import { ReactComponent as ReturnIcon } from "../assets/svg/returned.svg";
import { ReactComponent as DeliverIcon } from "../assets/svg/delivered.svg";
import { ReactComponent as CancelIcon } from "../assets/svg/cancel.svg";

import { DashBoard_Helmet } from "./components/CustomMetaTag";

export default function DashBoard() {
  const [payload, Setpayload] = useState({
    data: {},
  });

  const [user_data, Setuser_data] = useState({
    projects: "",
    materials: "",
  });
/*   useEffect(() => {
    const fetchData = () => {
      axios({
        method: "GET",
        url: API.user.findUser,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((response) => {
          console.log(response.data);
        });
    };
    fetchData();
  }, []); */

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

  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });

  const SideBarHandle = () => {
    Setsidebar({ ...sidebar, isOpen: true });
  };

  const SideBarHandleClose = () => {
    Setsidebar({ ...sidebar, isOpen: false });
  };
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: (theme) => theme.palette.secondary.bg1,
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", width: "59px", zIndex: "3" }}>
        <CustomSideBar
          open={sidebar.isOpen}
          onOpen={SideBarHandle}
          onClose={SideBarHandleClose}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: (theme) => theme.palette.secondary.bg2,
        }}
      >
        <Box sx={{ position: "relative", zIndex: "2" }}>
          <CustomHeaderBar />
        </Box>
        <Box sx={{ marginTop: "65px" }}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              height: "150px",
              width: "100%",
              overflow: "hidden",
              display: "flex",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                zIndex: "1",
                color: (theme) => theme.palette.textColor.col2,
                fontWeight: "bolder",
                marginLeft: "30px",
                fontSize: "2vw",
              }}
            >
              Welcome {payload.data.firstname +" "+ payload.data.lastname}!
            </Typography>
            <Box
              component="img"
              src={backgroundImg}
              alt="header_backgound_img"
              sx={{
                position: "absolute",
                top: "-20rem",
                width: "100%",
                height: "700px",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "190vh",
            width: "100%",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "75%",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Typography>Ongoing Projects</Typography>
              <Paper
                sx={{
                  height: "160px",
                  width: "100%",
                  marginTop: "10px",
                  borderRadius: "10px",
                }}
              ></Paper>
              <Paper
                sx={{
                  height: "160px",
                  width: "100%",
                  marginTop: "10px",
                  borderRadius: "10px",
                }}
              ></Paper>
            </Box>
            <Box
              sx={{
                width: "100%",
                marginTop: "20px",
              }}
            >
              <Typography>Stat</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <Paper
                  sx={{ height: "160px", width: "19%", borderRadius: "10px" }}
                ></Paper>
                <Paper
                  sx={{ height: "160px", width: "19%", borderRadius: "10px" }}
                ></Paper>
                <Paper
                  sx={{ height: "160px", width: "19%", borderRadius: "10px" }}
                ></Paper>
                <Paper
                  sx={{ height: "160px", width: "19%", borderRadius: "10px" }}
                ></Paper>
                <Paper
                  sx={{ height: "160px", width: "19%", borderRadius: "10px" }}
                ></Paper>
              </Box>
            </Box>
            <Paper
              sx={{
                height: "460px",
                width: "100%",
                marginTop: "40px",
                borderRadius: "10px",
              }}
            ></Paper>
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "35%",
              padding: "20px",
            }}
          >
            <Paper
              sx={{ height: "400px", width: "100%", marginTop: "34px" }}
            ></Paper>
            <Box
              sx={{
                width: "100%",
                marginTop: "40px",
              }}
            >
              <Typography>Materials</Typography>
              <Paper
                sx={{
                  height: "100px",
                  width: "100%",
                  borderRadius: "0px 10px 10px 0px",
                  marginTop: "10px",
                }}
              ></Paper>
              <Paper
                sx={{
                  height: "100px",
                  width: "100%",
                  borderRadius: "0px 10px 10px 0px",
                  marginTop: "10px",
                }}
              ></Paper>
              <Paper
                sx={{
                  height: "100px",
                  width: "100%",
                  borderRadius: "0px 10px 10px 0px",
                  marginTop: "10px",
                }}
              ></Paper>
              <Paper
                sx={{
                  height: "100px",
                  width: "100%",
                  borderRadius: "0px 10px 10px 0px",
                  marginTop: "10px",
                }}
              ></Paper>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            bottom: "0px",
            height: "40px",
            width: "100%",
            backgroundColor: (theme) => theme.palette.primary.main,
          }}
        >
          <Typography>@ 2022 made by UIP Dev Interns</Typography>
        </Box>
      </Box>
    </Box>
  );
}

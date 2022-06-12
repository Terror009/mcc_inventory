import React, { useState, useEffect, useRef } from "react";
import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Divider,
} from "@mui/material";

import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";

import { API } from "../api/api";
import axios from "axios";
import { uploadProfilePic } from "../api/profilepicApi";
export default function Setting() {
  const [user, SetUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    admin_id: "",
    password: "",
  });

  const [profile, SetProfile] = useState({
    profile_pic: [{}],
    data: "",
  });

  const selectedFile = useRef();

  useEffect(() => {
    const key = JSON.parse(localStorage.getItem("user"));
    const session_key = {
      session_key: key.session_key,
    };
    const fetchData = () => {
      axios({
        method: "POST",
        url: API.admin.findAdmin,
        data: JSON.stringify(session_key),
      })
        .then((response) => {
          console.log(response.data);
          response.data.map((index) => {
            SetUser({
              ...user,
              firstname: index.firstname,
              lastname: index.lastname,
              email: index.email,
              admin_id: index.admin_id,
            });
          });
        })
        .catch((response) => {
          console.log(response.data);
        });
    };
    fetchData();
  }, []);

  const handleChangeProfile = (e) => {
    SetProfile({
      ...profile,
      profile_pic: e.target.files[0],
      data: e.target.name,
    });
  };
  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });
  const SideBarHandle = () => {
    Setsidebar({ ...sidebar, isOpen: true });
  };

  const SideBarHandleClose = () => {
    Setsidebar({ ...sidebar, isOpen: false });
  };

  const uploadImage = () => {
    const admin = JSON.parse(localStorage.getItem("user"));
    let data_arr = [];
    const formData = new FormData();

    data_arr.push(profile.profile_pic);
    data_arr.forEach((index) => {
      const obj = {
        filename: index.name,
        filedata: profile.data,
        filetype: index.type,
        filesize: index.size,
        admin_id: admin.admin_id,
      };
      console.log(profile.profile_pic)
      uploadProfilePic(obj);
    });
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
          width: "1310px",
          backgroundColor: (theme) => theme.palette.secondary.bg2,
        }}
      >
        <Box sx={{ position: "relative", zIndex: "2" }}>
          <CustomHeaderBar />
        </Box>
        <Box sx={{ marginTop: "60px" }}>
          <Box
            sx={{
              height: "150vh",
              backgroundColor: (theme) => theme.palette.secondary.bg3,
              padding: "20px 20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: (theme) => theme.palette.textColor.col4,
                margin: "20px 0px 0px 20px",
              }}
            >
              Settings
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                margin: "20px 20px 20px 20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  color: (theme) => theme.palette.textColor.col1,
                }}
              >
                Profile Information
              </Typography>
              <Divider
                variant="middle"
                sx={{
                  height: "0.5px",
                  backgroundColor: (theme) => theme.palette.secondary.main,
                  borderRadius: "30px",
                  width: "82%",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                height: "700px",
                width: "100%",
              }}
            >
              <Box sx={{ height: "100%", width: "30%" }}>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "300px",
                    width: "100%",
                    margin: "20px 0px 10px 20px",
                  }}
                >
                  <Avatar sx={{ height: "180px", width: "180px" }} />
                  <Typography>
                    {user.firstname + " " + user.lastname}
                  </Typography>
                </Paper>
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "150px",
                    width: "100%",
                    margin: "20px 0px 10px 20px",
                  }}
                >
                  <input
                    type="file"
                    onChange={handleChangeProfile}
                    name="upload"
                    ref={selectedFile}
                  />
                  <Button
                    sx={{
                      height: "30px",
                      width: "80%",
                      backgroundColor: "red",
                    }}
                    onClick={uploadImage}
                  >
                    <Typography>Upload</Typography>
                  </Button>
                </Paper>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aligItems: "center",
                  height: "470px",
                  width: "63%",
                  marginTop: "20px",
                }}
              >
                <Paper sx={{ height: "100%", width: "100%" }}></Paper>
              </Box>
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

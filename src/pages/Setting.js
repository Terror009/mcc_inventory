import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  IconButton,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";

import TimezoneSelect from "react-timezone-select";

import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";

import { ReactComponent as ArrowDownIcon } from "../assets/svg/black_arrow_down.svg";

import { classes } from "../design/uiDesign";
import { API } from "../api/api";
import axios from "axios";

import { updateUserData, updateUserPasswordData } from "../api/userApi";

export default function Setting() {
  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });

  const SideBarHandle = () => {
    Setsidebar({ ...sidebar, isOpen: true });
  };

  const SideBarHandleClose = () => {
    Setsidebar({ ...sidebar, isOpen: false });
  };
  const [user, SetUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    user_id: "",
    password: "",
  });

  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

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
          response.data.map((index) => {
            SetUser({
              ...user,
              firstname: index.firstname,
              lastname: index.lastname,
              email: index.email,
              user_id: index.user_id,
            });
          });
        })
        .catch((response) => {
          console.log(response.data);
        });
    };
    fetchData();
  }, []);

  const HandleChange = (prop) => (e) => {
    SetUser({ ...user, [prop]: e.target.value });
  };

  const UpdateUserData = () => {
    const obj = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      user_id: user.user_id,
    };
    updateUserData(obj);
    window.location.reload();
  };

  const UpdateUserPasswordData = () => {
    const obj = {
      password: user.password,
      user_id: user.user_id,
    };

    updateUserPasswordData(obj);
    window.location.reload();
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
              display: "flex",
              justifyContent: "space-evenly",
              width: "95%",
              backgroundColor: (theme) => theme.palette.primary.bg1,
              padding: "50px 40px",
            }}
          >
            <Box sx={{ width: "50%" }}>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "lighter",
                  color: (theme) => theme.palette.textColor.col4,
                }}
              >
                Settings
              </Typography>
              <Paper
                sx={{
                  marginTop: "40px",
                  width: "90%",
                  backgroundColor: (theme) => theme.palette.secondary.main,
                  padding: "20px 20px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress
                    variant="determinate"
                    value={85}
                    size={100}
                    sx={{
                      backgroundColor: (theme) => theme.palette.primary.bg2,
                      borderRadius: "50px",
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      color: (theme) => theme.palette.textColor.col2,
                      fontWeight: "bolder",
                    }}
                  >
                    80%
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "30px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "24px",
                      color: (theme) => theme.palette.textColor.col2,
                    }}
                  >
                    Profile Information
                  </Typography>
                  <Button
                    sx={{
                      height: "50px",
                      width: "100%",
                      backgroundColor: (theme) => theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: (theme) => theme.palette.primary.bg1,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: (theme) => theme.palette.textColor.col1,
                        fontWeight: "bolder",
                      }}
                    >
                      Complete your profile
                    </Typography>
                  </Button>
                </Box>
              </Paper>
            </Box>
            <Paper
              sx={{
                height: "80vh",
                width: "30%",
                padding: "20px 20px",
                overflow: "hidden",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bolder",
                  color: (theme) => theme.palette.textColor.col5,
                }}
              >
                User Management
              </Typography>
              <Box
                sx={{
                  backgroundColor: "",
                  maxHeight: "100%",
                  overflow: "auto",
                  "&::-webkit-scrollbar": {
                    width: "4px",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "transparent",
                    marginTop: "30px",
                    marginBottom: "30px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    borderRadius: "30px",
                    backgroundColor: (theme) => theme.palette.secondary.main,
                  },
                }}
              >
                <Accordion
                  disableGutters
                  sx={{
                    width: "95%",
                    boxShadow: "none",
                    "&.MuiAccordion-root": {
                      borderRadius: "0px",
                      borderStyle: "solid",
                      borderWidth: "0px 0px 2px 0px",
                      borderColor: (theme) => theme.palette.secondary.main,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ArrowDownIcon />}
                    sx={{
                      height: "100px",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ fontWeight: "bolder" }}>
                        Profile
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: (theme) => theme.palette.textColor.col4,
                        }}
                      >
                        Name, Surname, Email Address
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <TextField
                        sx={classes.settings_input}
                        value={user.firstname}
                        onChange={HandleChange("firstname")}
                      />
                      <TextField
                        sx={[classes.settings_input, { marginTop: "10px" }]}
                        value={user.lastname}
                        onChange={HandleChange("lastname")}
                      />
                      <TextField
                        sx={[classes.settings_input, { marginTop: "10px" }]}
                        value={user.email}
                        onChange={HandleChange("email")}
                      />
                      <Button
                        sx={{
                          height: "35px",
                          width: "40%",
                          backgroundColor: (theme) =>
                            theme.palette.secondary.main,
                          textTransform: "capitalize",
                          marginTop: "10px",
                          "&:hover": {
                            backgroundColor: (theme) =>
                              theme.palette.secondary.bg1,
                          },
                        }}
                        onClick={UpdateUserData}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Update
                        </Typography>
                      </Button>
                    </Box>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  disableGutters
                  sx={{
                    width: "95%",
                    boxShadow: "none",
                    "&.MuiAccordion-root": {
                      borderRadius: "0px",
                      borderStyle: "solid",
                      borderWidth: "0px 0px 2px 0px",
                      borderColor: (theme) => theme.palette.secondary.main,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ArrowDownIcon />}
                    sx={{
                      height: "100px",
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontWeight: "bolder" }}>
                        Password
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: (theme) => theme.palette.textColor.col4,
                        }}
                      >
                        Change Your Password
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <TextField
                        sx={classes.settings_input}
                        type="password"
                        value={user.password}
                        onChange={HandleChange("password")}
                      />
                      <Button
                        sx={{
                          height: "35px",
                          width: "60%",
                          backgroundColor: (theme) =>
                            theme.palette.secondary.main,
                          textTransform: "capitalize",
                          marginTop: "10px",
                          "&:hover": {
                            backgroundColor: (theme) =>
                              theme.palette.secondary.bg1,
                          },
                        }}
                        onClick={UpdateUserPasswordData}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Change Password
                        </Typography>
                      </Button>
                    </Box>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  disableGutters
                  sx={{
                    width: "95%",
                    boxShadow: "none",
                    "&.MuiAccordion-root": {
                      borderRadius: "0px",
                      borderStyle: "solid",
                      borderWidth: "0px 0px 2px 0px",
                      borderColor: (theme) => theme.palette.secondary.main,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ArrowDownIcon />}
                    sx={{ height: "100px" }}
                  >
                    <Box>
                      <Typography sx={{ fontWeight: "bolder" }}>
                        Notification
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: (theme) => theme.palette.textColor.col4,
                        }}
                      >
                        UIP will send you notification
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography></Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  disableGutters
                  sx={{
                    width: "95%",
                    boxShadow: "none",
                    "&.MuiAccordion-root": {
                      borderRadius: "0px",
                      borderStyle: "solid",
                      borderWidth: "0px 0px 2px 0px",
                      borderColor: (theme) => theme.palette.secondary.main,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ArrowDownIcon />}
                    sx={{ height: "100px" }}
                  >
                    <Box>
                      <Typography sx={{ fontWeight: "bolder" }}>
                        Time Zone
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: (theme) => theme.palette.textColor.col4,
                        }}
                      >
                        Currently time set:
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                        
                      />
                      <Button
                        sx={{
                          height: "35px",
                          width: "50%",
                          backgroundColor: (theme) =>
                            theme.palette.secondary.main,
                          textTransform: "capitalize",
                          marginTop: "10px",
                          "&:hover": {
                            backgroundColor: (theme) =>
                              theme.palette.secondary.bg1,
                          },
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Set Time
                        </Typography>
                      </Button>
                    </Box>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  disableGutters
                  sx={{
                    width: "95%",
                    boxShadow: "none",
                    "&.MuiAccordion-root": {
                      borderRadius: "0px",
                      borderStyle: "solid",
                      borderWidth: "0px 0px 2px 0px",
                      borderColor: (theme) => theme.palette.secondary.main,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ArrowDownIcon />}
                    sx={{ height: "100px" }}
                  >
                    <Box>
                      <Typography sx={{ fontWeight: "bolder" }}>
                        Deactivate Account
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: (theme) => theme.palette.textColor.col4,
                        }}
                      >
                        if you no longer employee of MCC
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Button
                      sx={{
                        height: "35px",
                        width: "50%",
                        backgroundColor: (theme) => theme.palette.secondary.bg4,
                        textTransform: "capitalize",
                        marginTop: "10px",
                        "&:hover": {
                          backgroundColor: (theme) =>
                            theme.palette.secondary.bg5,
                        },
                      }}
                    >
                      <Typography>Deactivate</Typography>
                    </Button>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

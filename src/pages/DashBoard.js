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

import { OngoingProjectChart } from "./components/CustomChartData";

import backgroundImg from "../assets/img/background.png";

import { ReactComponent as PendingIcon } from "../assets/svg/pending.svg";
import { ReactComponent as ActiveIcon } from "../assets/svg/active.svg";
import { ReactComponent as ReturnIcon } from "../assets/svg/returned.svg";
import { ReactComponent as DeliverIcon } from "../assets/svg/delivered.svg";
import { ReactComponent as CancelIcon } from "../assets/svg/cancel.svg";

import { DashBoard_Helmet } from "./components/CustomMetaTag";
import {
  FetchUserData,
  FetchPendingProjectData,
  FetchActiveProjectData,
  FetchCanceledProjectData,
  FetchDeliveredMaterialData,
  FetchReturnedMaterialData,
} from "./components/CustomFetchDashBoardData";
export default function DashBoard() {
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
            <FetchUserData />
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
            height: "200vh",
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
              <Typography>Projects</Typography>
              <Paper
                sx={{
                  display: "flex",
                  height: "140px",
                  width: "95%",
                  marginTop: "10px",
                  borderRadius: "10px",
                  padding: "20px 20px",
                }}
              >
                <Box
                  sx={{ height: "100%", width: "20%", backgroundColor: "" }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: (theme) => theme.palette.textColor.col4,
                    }}
                  >
                    Ongoing Projects
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    width: "80%",
                    backgroundColor: "",
                  }}
                >
       {/*            <OngoingProjectChart /> */}
                </Box>
              </Paper>
              <Paper
                sx={{
                  height: "140px",
                  width: "95%",
                  marginTop: "10px",
                  borderRadius: "10px",
                  padding: "20px 20px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: (theme) => theme.palette.textColor.col4,
                  }}
                >
                  Complete Projects
                </Typography>
              </Paper>
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
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "180px",
                    width: "19%",
                    borderRadius: "10px",
                  }}
                >
                  <PendingIcon style={{ height: "40px", width: "40px" }} />
                  <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
                    Pending
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>Projects</Typography>
                  <FetchPendingProjectData />
                </Paper>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "180px",
                    width: "19%",
                    borderRadius: "10px",
                  }}
                >
                  <ActiveIcon style={{ height: "40px", width: "40px" }} />
                  <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
                    Active
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>Projects</Typography>
                  <FetchActiveProjectData />
                </Paper>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "180px",
                    width: "19%",
                    borderRadius: "10px",
                  }}
                >
                  <DeliverIcon style={{ height: "40px", width: "40px" }} />
                  <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
                    Delivered
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>Materials</Typography>
                  <FetchDeliveredMaterialData />
                </Paper>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "180px",
                    width: "19%",
                    borderRadius: "10px",
                  }}
                >
                  <ReturnIcon style={{ height: "40px", width: "40px" }} />
                  <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
                    Returned
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>Materials</Typography>
                  <FetchReturnedMaterialData />
                </Paper>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "180px",
                    width: "19%",
                    borderRadius: "10px",
                  }}
                >
                  <CancelIcon style={{ height: "40px", width: "40px" }} />
                  <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
                    Canceled
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>Projects</Typography>
                  <FetchCanceledProjectData />
                </Paper>
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

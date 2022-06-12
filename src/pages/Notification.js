import React, { useState } from "react";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  Checkbox,
} from "@mui/material";
import { Link as NLink } from "react-router-dom";

import CustomHeaderBar from "./components/CustomHeaderBar";
import CustomSideBar from "./components/CustomSideBar";

import { ReactComponent as BackIcon } from "../assets/svg/back.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/trash.svg";
export default function Notification() {
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
        width: "98.75vw",
        backgroundColor: (theme) => theme.palette.secondary.bg1,
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
              padding: "40px 40px",
            }}
          >
            <Link
              component={NLink}
              to="/setting"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <BackIcon style={{ marginRight: "10px" }} />
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col5,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Back to Settings
              </Typography>
            </Link>
            <Typography
              sx={{
                fontSize: "28px",
                color: (theme) => theme.palette.textColor.col3,
                margin: "20px 0px 0px 30px",
              }}
            >
              Notification
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "60px",
                width: "100%",
                backgroundColor: "",
              }}
            >
              <Box component="span" sx={{ flexGrow: "1" }} />
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  height: "40px",
                  width: "110px",
                  backgroundColor: (theme) => theme.palette.primary.main,
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: (theme) => theme.palette.secondary.main,
                  borderRadius: "12px",
                  textTransform: "capitalize",
                }}
              >
                <DeleteIcon />
                <Typography
                  sx={{ color: (theme) => theme.palette.textColor.col1 }}
                >
                  Delete
                </Typography>
              </Button>
              <Checkbox
                color="secondary"
                sx={{ margin: "0px 30px 0px 30px" }}
              />
            </Box>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "600px",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "32px",
                  color: (theme) => theme.palette.textColor.col3,
                }}
              >
                No Data
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

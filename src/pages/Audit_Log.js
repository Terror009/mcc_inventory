import React, { useState } from "react";

import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  IconButton,
  Avatar,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";
import CustomImportButton from "./components/CustomImportButton";
import CustomExportButton from "./components/CustomExportButton";

import { ReactComponent as SearchIcon } from "../assets/svg/search1.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/svg/arrow_down.svg";

import { audit_data } from "../utils/audit_data";

export default function Audit_Log() {
  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });
  const [dropdownbtn, Setdropdownbtn] = useState({
    isImport: true,
    isExport: true,
  });
  const [users, SetUsers] = useState({
    isUsers: "All Users",
  });
  const [types, SetTypes] = useState({
    isTypes: "All Types",
  });
  const [entity, SetEntity] = useState({
    isEntity: "All Types",
  });

  const UsersHandleChange = (prop) => (e) => {
    SetUsers({ ...users, [prop]: e.target.value });
  };

  const TypesHandleChange = (prop) => (e) => {
    SetTypes({ ...types, [prop]: e.target.value });
  };

  const EntityHandleChange = (prop) => (e) => {
    SetEntity({ ...entity, [prop]: e.target.value });
  };

  const SideBarHandle = () => {
    Setsidebar({ ...sidebar, isOpen: true });
  };

  const SideBarHandleClose = () => {
    Setsidebar({ ...sidebar, isOpen: false });
  };

  const ImportHandle = () => {
    Setdropdownbtn({ ...dropdownbtn, isImport: !dropdownbtn.isImport });
  };
  const ExportHandle = () => {
    Setdropdownbtn({ ...dropdownbtn, isExport: !dropdownbtn.isExport });
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
        <Box
          sx={{
            marginTop: "64px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "60px",
              width: "100%",
              backgroundColor: (theme) => theme.palette.secondary.main,
            }}
          >
            <Box component="span" sx={{ flexGrow: "1" }} />
            <Box
              sx={{
                position: "relative",
                marginRight: "50px",
              }}
            >
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
                onClick={ImportHandle}
              >
                <Typography
                  sx={{
                    marginRight: "20px",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                >
                  import
                </Typography>
                <ArrowDownIcon />
              </Button>
              <CustomImportButton open={dropdownbtn.isImport} />
            </Box>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "60px",
              }}
            >
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
                onClick={ExportHandle}
              >
                <Typography
                  sx={{
                    marginRight: "20px",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                >
                  export
                </Typography>
                <ArrowDownIcon />
              </Button>
              <CustomExportButton open={dropdownbtn.isExport} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "150vh",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
            padding: "20px 20px",
          }}
        >
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              height: "70px",
              width: "97%",
              padding: "0px 20px",
              borderRadius: "10px",
            }}
          >
            <TextField
              InputProps={{
                startAdornment: <SearchIcon style={{ marginRight: "10px" }} />,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: (theme) => theme.palette.secondary.main,
                    color: (theme) => theme.palette.textColor.col1,
                    border: "none",
                    backgroundColor: "transparent",
                  },
                },
              }}
              placeholder="search"
              type="search"
              size="small"
            />
            <Box component="span" sx={{ flexGrow: "1" }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "30%",
                marginRight: "50px",
              }}
            >
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                }}
              >
                Sort By:
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                }}
              >
                Group By:
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                }}
              >
                Result 1 - 15 of 15
              </Typography>
            </Box>
          </Paper>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor: "red",
              width: "100%",
              margin: "20px 0px",
            }}
          >
            <Box sx={{ width: "13%", backgroundColor: "lime" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: (theme) => theme.palette.textColor.col4,
                }}
              >
                Users
              </Typography>
              <Select
                onChange={UsersHandleChange("isUsers")}
                value={users.isUsers}
                sx={{
                  height: "25px",
                  width: "100%",
                  fontSize: "13px",
                  marginTop: "5px",
                  backgroundColor: (theme) => theme.palette.primary.main,
                }}
              >
                <MenuItem value={"All Users"} sx={{ fontSize: "12px" }}>
                  All Users
                </MenuItem>
                <MenuItem value={"Created Users"} sx={{ fontSize: "12px" }}>
                  Created Users
                </MenuItem>
                <MenuItem value={"Deleted Users"} sx={{ fontSize: "12px" }}>
                  Deleted Users
                </MenuItem>
              </Select>
            </Box>
            <Box sx={{ width: "13%", backgroundColor: "lime" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: (theme) => theme.palette.textColor.col4,
                }}
              >
                Types
              </Typography>
              <Select
                onChange={TypesHandleChange("isTypes")}
                value={types.isTypes}
                sx={{
                  height: "25px",
                  width: "100%",
                  fontSize: "13px",
                  marginTop: "5px",
                  backgroundColor: (theme) => theme.palette.primary.main,
                }}
              >
                <MenuItem value={"All Types"} sx={{ fontSize: "12px" }}>
                  All Types
                </MenuItem>
                <MenuItem value={"Created"} sx={{ fontSize: "12px" }}>
                  Created
                </MenuItem>
                <MenuItem value={"Deleted"} sx={{ fontSize: "12px" }}>
                  Deleted
                </MenuItem>
              </Select>
            </Box>
            <Box sx={{ width: "13%", backgroundColor: "lime" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: (theme) => theme.palette.textColor.col4,
                }}
              >
                Entity Type
              </Typography>
              <Select
                onChange={EntityHandleChange("isEntity")}
                value={entity.isEntity}
                sx={{
                  height: "25px",
                  width: "100%",
                  fontSize: "13px",
                  marginTop: "5px",
                  backgroundColor: (theme) => theme.palette.primary.main,
                }}
              >
                <MenuItem value={"All Types"} sx={{ fontSize: "12px" }}>
                  All Types
                </MenuItem>
                <MenuItem value={"Created"} sx={{ fontSize: "12px" }}>
                  Created
                </MenuItem>
                <MenuItem value={"Deleted"} sx={{ fontSize: "12px" }}>
                  Deleted
                </MenuItem>
              </Select>
            </Box>
            <Box sx={{ width: "13%", backgroundColor: "lime" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: (theme) => theme.palette.textColor.col4,
                }}
              >
                Start Date
              </Typography>
              <TextField
                type="date"
                InputProps={{
                  style: {
                    height: "25px",
                    width: "100%",
                    marginTop: "5px",
                    backgroundColor: "#fff",
                  },
                }}
              />
            </Box>
            <Box sx={{ width: "13%", backgroundColor: "lime" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: (theme) => theme.palette.textColor.col4,
                }}
              >
                End Date
              </Typography>
              <TextField
                type="date"
                InputProps={{
                  style: {
                    height: "25px",
                    width: "100%",
                    marginTop: "5px",
                    backgroundColor: "#fff",
                  },
                }}
              />
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>DATE</TableCell>
                  <TableCell>TYPE</TableCell>
                  <TableCell>ACTION</TableCell>
                  <TableCell>USER</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {audit_data.map((index, i) => (
                  <TableRow key={i}>
                    <TableCell>{index.date + " " + index.time}</TableCell>
                    <TableCell>{index.type}</TableCell>
                    <TableCell>{index.action}</TableCell>
                    <TableCell>
                      <Avatar
                        src={index.user}
                        alt={index.user}
                        sx={{
                          height: "35px",
                          width: "35px",
                          backgroundColor: "transparent",
                          borderWidth: "2px",
                          borderStyle: "solid",
                          borderColor: (theme) => theme.palette.secondary.main,
                          color: (theme) => theme.palette.textColor.col1,
                          fontSize: "15px",
                          fontWeight: "bold"
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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

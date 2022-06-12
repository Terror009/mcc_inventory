import React, { useState, useEffect } from "react";

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
  TableFooter,
  TableRow,
  TablePagination,
} from "@mui/material";
import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";

import { ReactComponent as SearchIcon } from "../assets/svg/search1.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/svg/arrow_down.svg";
import { ReactComponent as ImportIcon } from "../assets/svg/import.svg";
import { ReactComponent as ExportIcon } from "../assets/svg/export.svg";

import { API } from "../api/api";
import axios from "axios";

export default function Audit_Log() {
  const [page, Setpage] = useState(0);
  const [rowperpage, SetRowperPage] = useState(5);

  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });
  const [users, SetUsers] = useState({
    isUsers: "all users",
    isTypes: "all types",
    isEntity: "all entity",
  });
  const [payload, SetPayload] = useState({
    data: [{}],
  });
  const [search, SetSearch] = useState({
    isSearch: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: API.user_list_history.fetchUserListHistory,
      })
        .then((response) => {
          console.log(response.data);
          SetPayload({ ...payload, data: response.data });
        })
        .catch(({ response }) => {
          console.log(response.data);
        });
    };
    fetchData();
  }, []);

  const [sort, SetSort] = useState({
    isSort: "",
  });

  const SortHandelChange = (prop) => (e) => {
    SetSort({ ...sort, [prop]: e.target.value });
  };
  const SearchHandleChange = (prop) => (e) => {
    SetSearch({ ...search, [prop]: e.target.value });
  };

  const handleChangePage = (e, newPage) => {
    Setpage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    SetRowperPage(+e.target.value);
    Setpage(0);
  };

  const UsersHandleChange = (prop) => (e) => {
    SetUsers({ ...users, [prop]: e.target.value });
  };

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
              >
                <ExportIcon
                  style={{ height: "20px", width: "20px", marginRight: "10px" }}
                />
                <Typography
                  sx={{
                    marginRight: "20px",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                >
                  export
                </Typography>
              </Button>
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
              marginTop: "20px",
            }}
          >
            <TextField
              value={search.isSearch}
              onChange={SearchHandleChange("isSearch")}
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
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "40%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.textColor.col4,
                    fontSize: "14px",
                    marginRight: "10px",
                  }}
                >
                  Sort By:
                </Typography>
                <Select
                  value={sort.isSort}
                  onChange={SortHandelChange("isSort")}
                  sx={{
                    height: "30px",
                    width: "100px",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor: (theme) => theme.palette.textColor.col3,
                    backgroundColor: "transparent",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      borderColor: (theme) => theme.palette.textColor.col1,
                    },
                  }}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value="ASC">ASC</MenuItem>
                  <MenuItem value="DESC">DESC</MenuItem>
                </Select>
              </Box>
            </Box>
          </Paper>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor: "",
              width: "100%",
              margin: "20px 0px",
            }}
          >
            <Box sx={{ width: "13%", backgroundColor: "" }}>
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
                <MenuItem value="all users" sx={{ fontSize: "12px" }}>
                  all user
                </MenuItem>
                <MenuItem value="create user" sx={{ fontSize: "12px" }}>
                  Created Users
                </MenuItem>
                <MenuItem value="deleted user" sx={{ fontSize: "12px" }}>
                  Deleted Users
                </MenuItem>
                <MenuItem value="update user" sx={{ fontSize: "12px" }}>
                  Update Users
                </MenuItem>
              </Select>
            </Box>
            <Box sx={{ width: "13%", backgroundColor: "" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: (theme) => theme.palette.textColor.col4,
                }}
              >
                Types
              </Typography>
              <Select
                onChange={UsersHandleChange("isTypes")}
                value={users.isTypes}
                sx={{
                  height: "25px",
                  width: "100%",
                  fontSize: "13px",
                  marginTop: "5px",
                  backgroundColor: (theme) => theme.palette.primary.main,
                }}
              >
                <MenuItem value="all types" sx={{ fontSize: "12px" }}>
                  all types
                </MenuItem>
                <MenuItem value="Intern" sx={{ fontSize: "12px" }}>
                  Intern
                </MenuItem>
                <MenuItem value="MCC Core Team" sx={{ fontSize: "12px" }}>
                  MCC Core Team
                </MenuItem>
                <MenuItem value="MCC Hr Team" sx={{ fontSize: "12px" }}>
                  MCC HR Team
                </MenuItem>
              </Select>
            </Box>
            <Box sx={{ width: "13%", backgroundColor: "" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: (theme) => theme.palette.textColor.col4,
                }}
              >
                Entity Type
              </Typography>
              <Select
                onChange={UsersHandleChange("isEntity")}
                value={users.isEntity}
                sx={{
                  height: "25px",
                  width: "100%",
                  fontSize: "13px",
                  marginTop: "5px",
                  backgroundColor: (theme) => theme.palette.primary.main,
                }}
              >
                <MenuItem value="all entity">All entity</MenuItem>
                <MenuItem value="Created" sx={{ fontSize: "12px" }}>
                  Created
                </MenuItem>
                <MenuItem value="Deleted" sx={{ fontSize: "12px" }}>
                  Deleted
                </MenuItem>
              </Select>
            </Box>
            <Box sx={{ width: "13%", backgroundColor: "" }}>
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
            <Box sx={{ width: "13%", backgroundColor: "" }}>
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
                {payload.data.length === 0 ? (
                  <TableRow>
                    <TableCell
                      sx={{
                        position: "relative",
                        left: "70%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "300px",
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{ color: (theme) => theme.palette.textColor.col4 }}
                      >
                        No Data
                      </Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  payload.data
                    .filter((index) =>
                      users.isUsers !== "all users" ||
                      users.isTypes !== "all types" ||
                      search.isSearch !== ""
                        ? index.user_date_created.includes(search.isSearch) ||
                          index.user_time_created.includes(search.isSearch) ||
                          index.user_list_name.includes(search.isSearch) ||
                          index.action.includes(search.isSearch) ||
                          index.user_history_id.includes(search.isSearch) ||
                          index.action === users.isUsers ||
                          index.user_list_type === users.isTypes
                        : index
                    )
                    .sort(() =>
                      sort.isSort === "DESC"
                        ? 1
                        : sort.isSort === "ASC"
                        ? -1
                        : 1
                    )
                    .slice(page * rowperpage, page * rowperpage + rowperpage)
                    .map((index, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          {index.user_date_created +
                            " " +
                            index.user_time_created}
                        </TableCell>
                        <TableCell>{index.user_list_type}</TableCell>
                        <TableCell>{index.action}</TableCell>
                        <TableCell>
                          <Avatar
                            src={index.user_list_name}
                            alt={index.user_list_name}
                            sx={{
                              height: "35px",
                              width: "35px",
                              backgroundColor: "transparent",
                              borderWidth: "2px",
                              borderStyle: "solid",
                              borderColor: (theme) =>
                                theme.palette.secondary.main,
                              color: (theme) => theme.palette.textColor.col1,
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    count={
                      users.isUsers === "all users" ||
                      users.isTypes === "all types" ||
                      search.isSearch !== ""
                        ? payload.data.length
                        : payload.data.filter(
                            (index) =>
                              index.user_date_created.includes(
                                search.isSearch
                              ) ||
                              index.user_time_created.includes(
                                search.isSearch
                              ) ||
                              index.user_list_name.includes(search.isSearch) ||
                              index.action.includes(search.isSearch) ||
                              index.user_history_id.includes(search.isSearch) ||
                              index.action === users.isUsers
                          ).length
                    }
                    rowsPerPage={rowperpage}
                    page={page}
                    SelectProps={{
                      label: "row per page",
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
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

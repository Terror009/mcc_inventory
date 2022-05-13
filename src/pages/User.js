import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  IconButton,
  Avatar,
  Checkbox,
  Stack,
  Pagination,
} from "@mui/material";

import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";
import CustomAddNewUsers from "./components/CustomAddNewUsers";
import { CustomUserListModal } from "./components/CustomUserListModal";

import { ReactComponent as ImportIcon } from "../assets/svg/import.svg";
import { ReactComponent as ExportIcon } from "../assets/svg/export.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search1.svg";
import { ReactComponent as UserIcon } from "../assets/svg/user1.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/trash.svg";
import { ReactComponent as UpdateIcon } from "../assets/svg/update.svg";

import { deleteUserList } from "../api/userlistApi";
import { API } from "../api/api";
import axios from "axios";
import * as XLSX from "xlsx";

export default function User() {
  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });

  const [user_list_modal, Setuser_list_modal] = useState({
    isOpen: false,
    isAddbtn: false,
  });

  const [payload, setPayload] = useState({
    data: [{}],
  });
  const [user_list_info, setUser_list_info] = useState({
    data: {},
  });

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("user"));

    const obj = {
      user_id: user_id.user_id,
    };
    const fetchData = async () => {
      await axios({
        method: "POST",
        url: API.user_list.fetchUserList,
        data: JSON.stringify(obj),
      })
        .then((response) => {
          console.log(response.data);
          setPayload({ ...payload, data: response.data });
        })
        .catch(({ response }) => {
          console.log(response.data);
        });
    };
    fetchData();
  }, []);

  const [deleteData, SetDeleteData] = useState([]);

  const [deleteAllData, SetDeleteAllData] = useState([]);

  const SideBarHandle = () => {
    Setsidebar({ ...sidebar, isOpen: true });
  };

  const SideBarHandleClose = () => {
    Setsidebar({ ...sidebar, isOpen: false });
  };

  const UserAddHandleOpen = () => {
    Setuser_list_modal({ ...user_list_modal, isAddbtn: true });
  };

  const UserAddHandleClose = () => {
    Setuser_list_modal({ ...user_list_modal, isAddbtn: false });
  };

  const UserListHandleOpen = () => {
    Setuser_list_modal({ ...user_list_modal, isOpen: true });
  };

  const UserListData = (data) => {
    setUser_list_info({ ...user_list_info, data: data });
  };
  const UserListFunc = (data, e) => {
    if (e.target.id === "paper") {
      UserListHandleOpen();
      UserListData(data);
    }
  };

  const UserListHandleClose = () => {
    Setuser_list_modal({ ...user_list_modal, isOpen: false });
  };

  const isChecked = (e) => {
    const { id, checked } = e.target;
    if (id === "checkAll") {
      let tempUser = payload.data.map((index) => {
        return { ...index, ischecked: checked };
      });
      setPayload({ ...payload, data: tempUser });
      let data_arr = [];

      tempUser.forEach((index) => {
        const obj = {
          user_list_id: index.user_list_id,
        };
        data_arr.push(obj);
      });
      if (!checked) {
        SetDeleteAllData(deleteAllData.filter((index) => index === data_arr));
        SetDeleteData(
          deleteData.filter((index) => index.user_list_id === data_arr)
        );
      } else {
        SetDeleteAllData(data_arr);
        SetDeleteData(
          deleteData.filter((index) => index.user_list_id === data_arr)
        );
      }
    } else {
      let tempUser = payload.data.map((index) =>
        index.user_list_id === id ? { ...index, ischecked: checked } : index
      );
      setPayload({ ...payload, data: tempUser });
      let removeItem = id;
      if (!checked) {
        SetDeleteData(
          deleteData.filter((index) => index.user_list_id !== removeItem)
        );
        SetDeleteAllData(
          deleteAllData.filter((index) => index.user_list_id !== removeItem)
        );
      } else {
        SetDeleteData([...deleteData, { construction_id: id }]);
        SetDeleteAllData(
          deleteAllData.filter((index) => index.construction_id !== removeItem)
        );
      }
    }
  };

  const DeleteData = () => {
    deleteAllData.forEach((index) => {
      const obj = {
        user_list_id: index.user_list_id,
      };
      console.log(obj);
      deleteUserList(obj);
    });
    deleteData.forEach((index) => {
      const obj = {
        user_list_id: index.user_list_id,
      };
      console.log(obj);
      deleteUserList(obj);
    });
    window.location.reload();
  };

  const DownloadUserList = () => {
    let data_arr = [];
    payload.data.forEach((index) => {
      const obj = {
        user_list_id: index.user_list_id,
        user_list_name: index.user_list_name,
        user_list_email: index.user_list_email,
        user_list_phone: index.user_list_phone,
        user_list_user_type: index.user_list_user_type,
      };
      data_arr.push(obj);
    });
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(data_arr);

    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    XLSX.writeFile(wb, "UserList.xlsx");
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
        <Box sx={{ marginTop: "64px" }}>
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
              >
                <ImportIcon
                  style={{ height: "20px", width: "20px", marginRight: "10px" }}
                />
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                >
                  import
                </Typography>
              </Button>
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
                onClick={DownloadUserList}
              >
                <ExportIcon
                  style={{ height: "20px", width: "20px", marginRight: "10px" }}
                />

                <Typography sx={{ fontWeight: "bolder", fontSize: "14px" }}>
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
          <Typography
            variant="h5"
            sx={{ color: (theme) => theme.palette.textColor.col4 }}
          >
            User List
          </Typography>
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
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: "30px",
            }}
          >
            <Box sx={{ display: "flex", width: "100%" }}>
              <Button
                sx={{
                  height: "35px",
                  width: "150px",
                  border: "1px solid #3A57E8",
                  borderRadius: "10px",
                  textTransform: "capitalize",
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: (theme) => theme.palette.textColor.col1,
                }}
                onClick={UserAddHandleOpen}
              >
                <UserIcon style={{ marginRight: "10px" }} />
                <Typography sx={{ fontSize: "14px" }}>Add New</Typography>
              </Button>
              <Box component="span" sx={{ flexGrow: "1" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "20%",
                }}
              >
                <Button
                  sx={{
                    height: "35px",
                    width: "100px",
                    border: "1px solid #3A57E8",
                    borderRadius: "10px",
                    textTransform: "capitalize",
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.textColor.col1,
                  }}
                  onClick={DeleteData}
                >
                  <DeleteIcon style={{ marginRight: "10px" }} />
                  <Typography sx={{ fontSize: "14px" }}>Delete</Typography>
                </Button>
                <Checkbox
                  id="checkAll"
                  color="secondary"
                  onClick={isChecked}
                  checked={
                    !payload.data.some((index) => index?.ischecked !== true)
                  }
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
                marginTop: "40px",
              }}
            >
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                }}
              >
                Name
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                }}
              >
                Email
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                }}
              >
                Phone
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                }}
              >
                User Type
              </Typography>
            </Box>
            {payload.data == "" ? (
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                  width: "100%",
                  borderRadius: "10px",
                  backgroundColor: (theme) => theme.palette.primary.main,
                  marginTop: "20px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: (theme) => theme.palette.textColor.col4,
                    opacity: "0.5",
                  }}
                >
                  No Data
                </Typography>
              </Paper>
            ) : (
              payload.data.map((index, i) => (
                <Paper
                  key={i}
                  id="paper"
                  sx={{
                    display: "flex",
                    height: "80px",
                    width: "100%",
                    marginTop: "20px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.secondary.bg2,
                    },
                  }}
                  onClick={(e) => UserListFunc(index, e)}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "30%",
                      pointerEvents: "none",
                    }}
                  >
                    <Typography sx={{ fontSize: "15px", marginLeft: "50px" }}>
                      {index.user_list_name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "30%",
                      pointerEvents: "none",
                    }}
                  >
                    <Typography sx={{ fontSize: "15px", marginLeft: "50px" }}>
                      {index.user_list_email}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "30%",
                      pointerEvents: "none",
                    }}
                  >
                    <Typography sx={{ fontSize: "15px", marginLeft: "50px" }}>
                      {index.user_list_phone}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "30%",
                      pointerEvents: "none",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        borderColor: (theme) => theme.palette.secondary.main,
                        borderRadius: "15px",
                        padding: "2px 10px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "13px",
                          textTransform: "uppercase",
                          color: (theme) => theme.palette.textColor.col1,
                        }}
                      >
                        {index.user_list_user_type}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      height: "100%",
                      width: "10%",
                      backgroundColor: "",
                      paddingRight: "20px",
                    }}
                  >
                    <Checkbox
                      id={index.user_list_id}
                      color="secondary"
                      onClick={isChecked}
                      checked={index?.ischecked || false}
                    />
                  </Box>
                </Paper>
              ))
            )}
            <Stack spacing={2} sx={{ marginTop: "60px" }}>
              <Pagination count={3} shape="rounded" color="primary" />
            </Stack>
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
        <CustomAddNewUsers
          open={user_list_modal.isAddbtn}
          onClose={UserAddHandleClose}
        />
        <CustomUserListModal
          open={user_list_modal.isOpen}
          onClose={UserListHandleClose}
          user_list_info={user_list_info.data}
        />
      </Box>
    </Box>
  );
}

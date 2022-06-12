import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Stack,
  Pagination,
} from "@mui/material";

import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";
import CustomAddNewUsers from "./components/CustomAddNewUsers";
import { CustomUserListModal } from "./components/CustomUserListModal";
import CustomDeleteConformation from "./components/CustomDeleteConformation";

import { ReactComponent as ImportIcon } from "../assets/svg/import.svg";
import { ReactComponent as ExportIcon } from "../assets/svg/export.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search1.svg";
import { ReactComponent as UserIcon } from "../assets/svg/user1.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/trash.svg";

import { deleteUserList } from "../api/userlistApi";
import { createUserListHistory } from "../api/userlisthistoryApi";
import { approvedUser, emailedUser } from "../api/userApprovedApi";
import { API } from "../api/api";
import axios from "axios";
import * as XLSX from "xlsx";
import uniqid from "uniqid";

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
  const [admin, SetAdmin] = useState({
    data: [{}],
  });

  const [user_list_info, setUser_list_info] = useState({
    data: {},
  });

  const [dialog, SetDialog] = useState({
    isOpen: false,
  });

  const [message, SetMessage] = useState({
    message: "",
  });

  const ConfirmHandleChangeOpen = () => {
    if (deleteAllData.length !== 0 || deleteData.length !== 0) {
      SetDialog({ ...dialog, isOpen: true });
      SetMessage({ ...message, message: "Do you want to delete data??" });
    }
  };

  const ConfirmHandleChangeClose = () => {
    SetDialog({ ...dialog, isOpen: false });
  };
  const [deleteData, SetDeleteData] = useState([]);
  const [deleteAllData, SetDeleteAllData] = useState([]);
  const [approvedData, SetApprovedData] = useState([]);
  const [approvedAllData, SetApprovedAllData] = useState([]);

  const [user_history, SetUser_history] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: API.user_list.fetchUserList,
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

  useEffect(() => {
    const key = JSON.parse(localStorage.getItem("user"));

    const obj = {
      session_key: key.session_key,
    };
    const fetchData = async () => {
      await axios({
        method: "POST",
        url: API.admin.findAdmin,
        data: JSON.stringify(obj),
      })
        .then((response) => {
          console.log(response.data);
          SetAdmin({ ...admin, data: response.data });
        })
        .catch(({ response }) => {
          console.log(response);
        });
    };
    fetchData();
  }, []);
  const [page, SetPage] = useState(1);
  const [postperpage, SetPostperPage] = useState(5);

  const indexofLastPage = page * postperpage;
  const indexofFirstPage = indexofLastPage - postperpage;

  const handleChangePage = (e, newPage) => {
    SetPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    SetPostperPage(parseInt(+e.target.value));
    SetPage(1);
  };

  const [sort, SetSort] = useState({
    isSort: "",
  });
  const [search, SetSearch] = useState({
    isSearch: "",
  });
  const SortHandelChange = (prop) => (e) => {
    SetSort({ ...sort, [prop]: e.target.value });
  };
  const SearchHandleChange = (prop) => (e) => {
    SetSearch({ ...search, [prop]: e.target.value });
  };

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
      let data_arr1 = [];

      tempUser.forEach((index) => {
        const obj = {
          user_list_id: index.user_list_id,
          user_list_name: index.user_list_name,
          user_list_email: index.user_list_email,
          user_list_contact: index.user_list_contact,
          user_date_created: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          user_time_created: new Date().toLocaleTimeString(),
          start_date: index.start_date,
          end_date: index.end_date,
          user_list_type: index.user_list_type,
        };
        const obj1 = {
          user_list_id: index.user_list_id,
          user_list_name: index.user_list_name,
          user_list_email: index.user_list_email,
          user_list_contact: index.user_list_contact,
          user_date_created: new Date().toLocaleDateString(),
          user_time_created: new Date().toLocaleTimeString(),
          start_date: index.start_date,
          end_date: index.end_date,
          action: "deleted user",
          user_list_type: index.user_list_type,
        };
        data_arr.push(obj);
        data_arr1.push(obj1);
      });
      if (!checked) {
        SetUser_history(user_history.filter((index) => index === data_arr1));
        SetApprovedAllData(
          approvedAllData.filter((index) => index === data_arr)
        );
        SetApprovedData(approvedData.filter((index) => index === data_arr));
        SetDeleteAllData(deleteAllData.filter((index) => index === data_arr));
        SetDeleteData(
          deleteData.filter((index) => index.user_list_id === data_arr)
        );
        console.log(approvedData);
        console.log(approvedAllData);
      } else {
        SetApprovedAllData(data_arr);
        SetDeleteAllData(data_arr);
        SetUser_history(data_arr1);
        SetDeleteData(
          deleteData.filter((index) => index.user_list_id === data_arr)
        );
        SetApprovedData(
          approvedData.filter((index) => index.user_list_id === data_arr)
        );
      }
    } else {
      let data_arr = [];
      let data_arr1 = [];
      let tempUser = payload.data.map((index) =>
        index.user_list_id === id ? { ...index, ischecked: checked } : index
      );

      tempUser.forEach((index) => {
        const obj = {
          user_list_id: index.user_list_id,
          user_list_name: index.user_list_name,
          user_list_email: index.user_list_email,
          user_list_contact: index.user_list_contact,
          user_date_created: new Date().toLocaleDateString(),
          user_time_created: new Date().toLocaleTimeString(),
          start_date: index.start_date,
          end_date: index.end_date,
          action: "deleted user",
          user_list_type: index.user_list_type,
        };
        const obj1 = {
          user_list_id: index.user_list_id,
          user_list_name: index.user_list_name,
          user_list_email: index.user_list_email,
          user_list_contact: index.user_list_contact,
          user_date_created: new Date().toLocaleDateString(),
          user_time_created: new Date().toLocaleTimeString(),
          start_date: index.start_date,
          end_date: index.end_date,
          action: "deleted user",
          user_list_type: index.user_list_type,
        };

        data_arr.push(obj);
        data_arr1.push(obj1);
      });
      setPayload({ ...payload, data: tempUser });

      let removeItem = id;
      if (!checked) {
        SetUser_history(
          user_history.filter((index) => index.user_list_id !== removeItem)
        );
        SetApprovedData(
          approvedData.filter((index) => index.user_list_id !== removeItem)
        );
        SetDeleteData(
          deleteData.filter((index) => index.user_list_id !== removeItem)
        );
        SetDeleteAllData(
          deleteAllData.filter((index) => index.user_list_id !== removeItem)
        );
        SetApprovedAllData(
          approvedAllData.filter((index) => index.user_list_id !== removeItem)
        );
      } else {
        data_arr1.map((index) =>
          index.user_list_id === removeItem ? user_history.push(index) : index
        );
        data_arr.map((index) =>
          index.user_list_id === id ? approvedData.push(index) : index
        );
        SetDeleteData([...deleteData, { user_list_id: id }]);
        SetDeleteAllData(
          deleteAllData.filter((index) => index.user_list_id !== removeItem)
        );
        console.log(approvedData);
        console.log(approvedAllData);
      }
    }
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

  const Approved = () => {
    approvedAllData.forEach((index) => {
      const obj = {
        user_list_id: index.user_list_id,
      };
      admin.data.forEach((index1) => {
        const obj1 = {
          user_name: index.user_list_name,
          contact: index.user_list_contact,
          email: index.user_list_email,
          password: uniqid(),
          user_date_approved: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          user_time_approved: new Date().toLocaleTimeString(),
          start_date: index.start_date,
          end_date: index.end_date,
          status: "offline",
        };

        approvedUser(obj1);
        emailedUser(obj1);
        deleteUserList(obj);
      });
    });
    approvedData.forEach((index) => {
      const obj = {
        user_list_id: index.user_list_id,
      };
      admin.data.forEach((index1) => {
        const obj1 = {
          user_name: index.user_list_name,
          contact: index.user_list_contact,
          email: index.user_list_email,
          password: uniqid(),
          user_date_approved: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          user_time_approved: new Date().toLocaleTimeString(),
          start_date: index.start_date,
          end_date: index.end_date,
          status: "offline",
          admin_email: index1.admin_email,
        };
        approvedUser(obj1);
        emailedUser(obj1);
        deleteUserList(obj);
      });
      user_history.forEach((index) => {
        createUserListHistory(index);
      });
    });
    /* window.location.reload(); */
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
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.textColor.col4,
                    fontSize: "14px",
                    marginRight: "10px",
                  }}
                >
                  Page
                </Typography>
                <Select
                  value={postperpage}
                  onChange={handleChangeRowsPerPage}
                  sx={{
                    height: "30px",
                    width: "70px",
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
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="10">10</MenuItem>
                  <MenuItem value="25">25</MenuItem>
                </Select>
              </Box>
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
                  width: "26%",
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
                  onClick={() => Approved()}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: (theme) => theme.palette.textColor.col1,
                    }}
                  >
                    Approved
                  </Typography>
                </Button>
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
                  onClick={ConfirmHandleChangeOpen}
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
                width: "100%",
                marginTop: "40px",
              }}
            >
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                  margin: "0px 230px 0px 120px ",
                }}
              >
                ID
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                  margin: "0px 260px 0px 0px",
                }}
              >
                Name
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                  margin: "0px 280px 0px 0px",
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
            </Box>
            {payload.data.length === 0 ? (
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
              <Box
                sx={{
                  height: "84vh",
                  width: "100%",
                  overflow: "auto",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                {payload.data
                  .filter((index) =>
                    search.isSearch !== ""
                      ? index.user_list_name.includes(search.isSearch) ||
                        index.user_list_email.includes(search.isSearch) ||
                        index.user_list_contact.includes(search.isSearch) ||
                        index.user_list_type.includes(search.isSearch) ||
                        index.user_list_id.includes(search.isSearch)
                      : index
                  )
                  .sort(() =>
                    sort.isSort === "DESC" ? 1 : sort.isSort === "ASC" ? -1 : 1
                  )
                  .slice(indexofFirstPage, indexofLastPage)
                  .map((index, i) => (
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
                          backgroundColor: (theme) =>
                            theme.palette.secondary.bg2,
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
                          width: "20%",
                          pointerEvents: "none",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "15px", marginLeft: "50px" }}
                        >
                          {index.user_list_id}
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
                        <Typography
                          sx={{ fontSize: "15px", marginLeft: "50px" }}
                        >
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
                        <Typography
                          sx={{ fontSize: "15px", marginLeft: "50px" }}
                        >
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
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "15px", marginLeft: "50px" }}
                        >
                          0{index.user_list_contact}
                        </Typography>
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
                  ))}
              </Box>
            )}
            <Stack spacing={2} sx={{ marginTop: "20px" }}>
              <Pagination
                count={
                  search.isSearch === ""
                    ? Math.ceil(payload.data.length / postperpage)
                    : Math.ceil(
                        payload.data.filter(
                          (index) =>
                            index.user_list_name.includes(search.isSearch) ||
                            index.user_list_email.includes(search.isSearch) ||
                            index.user_list_contact.includes(search.isSearch) ||
                            index.user_list_type.includes(search.isSearch) ||
                            index.user_list_id.includes(search.isSearch)
                        ).length / postperpage
                      )
                }
                page={page}
                siblingCount={2}
                boundaryCount={2}
                variant="outlined"
                onChange={handleChangePage}
              />
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
        <CustomDeleteConformation
          open={dialog.isOpen}
          onClose={ConfirmHandleChangeClose}
          message={message.message}
          Alldata={deleteAllData}
          data={deleteData}
          history={user_history}
        />
      </Box>
    </Box>
  );
}

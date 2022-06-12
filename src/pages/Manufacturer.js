import React, { useState, useEffect } from "react";

import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Checkbox,
  Avatar,
  Select,
  MenuItem,
  Stack,
  Pagination,
} from "@mui/material";

import axios from "axios";
import { API } from "../api/api";
import * as XLSX from "xlsx";

import { deletemanufacturer } from "../api/manufacturerApi";
import { useLocation } from "react-router-dom";

import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";
import CustomSupManufactModal from "./components/CustomSupManufactModal";
import CustomAddNewManufacturer from "./components/CustomAddNewManufacturer";
import CustomDeleteConformation from "./components/CustomDeleteConformation";

import { ReactComponent as UserIcon } from "../assets/svg/user1.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/trash.svg";
import { ReactComponent as UpdateIcon } from "../assets/svg/update.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search1.svg";
import { ReactComponent as ImportIcon } from "../assets/svg/import.svg";
import { ReactComponent as ExportIcon } from "../assets/svg/export.svg";

export default function Manufacturer() {
  const { pathname } = useLocation();
  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });

  const [manufacturer_modal, SetManufacturer_modal] = useState({
    isOpen: false,
    isAddbtn: false,
  });
  const [manufacturer_info, SetManufacturer_info] = useState({
    data: {},
  });

  const [payload, setPayload] = useState({
    data: [{}],
  });

  const [dialog, SetDialog] = useState({
    isOpen: false,
  });

  const [message, SetMessage] = useState({
    message: "",
  });

  const [deleteData, SetDeleteData] = useState([]);

  const [deleteAllData, SetDeleteAllData] = useState([]);
  const ConfirmationHandleChangeOpen = () => {
    if (deleteAllData.length !== 0 || deleteData.length !== 0) {
      SetDialog({ ...dialog, isOpen: true });
      SetMessage({ ...message, message: "Do you want to delete data?? " });
    }
  };

  const ConfirmationHandleChangeClose = () => {
    SetDialog({ ...dialog, isOpen: false });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: API.manufacturer.fetchManufacturer,
      })
        .then((response) => {
          console.log(response.data);
          setPayload({ ...payload, data: response.data });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  let data_arr = [];
  const [total, SetTotal] = useState("");
  const [page, SetPage] = useState(1);
  const [postperpage, SetPostperPage] = useState(5);

  const indexofLastPage = page * postperpage;
  const indexofFirstPage = indexofLastPage - postperpage;
  const currentPosts = payload.data.slice(indexofFirstPage, indexofLastPage);

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

  const ManufacturerHandleOpen = () => {
    SetManufacturer_modal({ ...manufacturer_modal, isOpen: true });
  };

  const ManufacturerHandleClose = () => {
    SetManufacturer_modal({ ...manufacturer_modal, isOpen: false });
  };
  const ManufacturerFunc = (data, e) => {
    if (e.target.id === "paper") {
      ManufacturerHandleOpen();
      ManufacturerData(data);
    }
  };
  const ManufacturerData = (data) => {
    SetManufacturer_info({ ...manufacturer_info, data: data });
  };
  const ManufacturerAddHandleOpen = () => {
    SetManufacturer_modal({ ...manufacturer_modal, isAddbtn: true });
  };
  const ManufacturerAddHandleClose = () => {
    SetManufacturer_modal({ ...manufacturer_modal, isAddbtn: false });
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
          manufacturer_id: index.manufacturer_id,
        };
        data_arr.push(obj);
      });
      if (!checked) {
        SetDeleteAllData(deleteAllData.filter((index) => index === data_arr));
        SetDeleteData(
          deleteData.filter((index) => index.manufacturer_id === data_arr)
        );
      } else {
        SetDeleteAllData(data_arr);
        SetDeleteData(
          deleteData.filter((index) => index.manufacturer_id === data_arr)
        );
      }
      console.log(data_arr);
    } else {
      let tempUser = payload.data.map((index) =>
        index.manufacturer_id === id ? { ...index, ischecked: checked } : index
      );
      setPayload({ ...payload, data: tempUser });
      let removeItem = id;
      if (!checked) {
        SetDeleteData(
          deleteData.filter((index) => index.manufacturer_id !== removeItem)
        );
        SetDeleteAllData(
          deleteAllData.filter((index) => index.manufacturer_id !== removeItem)
        );
      } else {
        SetDeleteData([...deleteData, { manufacturer_id: id }]);
        SetDeleteAllData(
          deleteAllData.filter((index) => index.manufacturer_id !== removeItem)
        );
      }
    }
  };
  const DownloadManufacturer = () => {
    let data_arr = [];
    payload.data.forEach((index) => {
      const obj = {
        manufacturer_id: index.manufacturer_id,
        manufacturer_name: index.manufacturer_name,
        manufacturer_email: index.manufacturer_email,
        manufacturer_contact: index.manufacturer_contact,
        manufacturer_address: index.manufacturer_address,
      };
      data_arr.push(obj);
    });
    if (!data_arr) {
      var wb = XLSX.utils.book_new();
      var ws = XLSX.utils.json_to_sheet(data_arr);

      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
      XLSX.writeFile(wb, "Manufacturer.xlsx");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "98.75vw",
        backgroundColor: (theme) => theme.palette.secondary.bg1,
      }}
    >
      <Box sx={{ position: "relative", width: "59px", zIndex: "10000" }}>
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
        <Box
          sx={{
            position: "relative",
            zIndex: "2",
            backgroundColor: (theme) => theme.palette.primary.main,
          }}
        >
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
                onClick={DownloadManufacturer}
              >
                <ExportIcon
                  style={{ height: "20px", width: "20px", marginRight: "10px" }}
                />
                <Typography
                  sx={{
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
                onClick={ManufacturerAddHandleOpen}
              >
                <UserIcon style={{ marginRight: "10px" }} />
                <Typography sx={{ fontSize: "14px" }}>Add New</Typography>
              </Button>
              <Box component="span" sx={{ flexGrow: "1" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "18%",
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
                  onClick={ConfirmationHandleChangeOpen}
                >
                  <DeleteIcon style={{ marginRight: "10px" }} />
                  <Typography sx={{ fontSize: "14px" }}>Delete</Typography>
                </Button>
                <Checkbox
                  id="checkAll"
                  onClick={isChecked}
                  checked={
                    !payload.data.some((index) => index?.ischecked !== true)
                  }
                  color="secondary"
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
                Address
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
                      ? index.manufacturer_name.includes(search.isSearch) ||
                        index.manufacturer_email.includes(search.isSearch) ||
                        index.manufacturer_contact.includes(search.isSearch) ||
                        index.manufacturer_address.includes(search.isSearch) ||
                        index.manufacturer_id.includes(search.isSearch)
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
                      onClick={(e) => ManufacturerFunc(index, e)}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: (theme) =>
                            theme.palette.secondary.main,
                          height: "100%",
                          width: "7%",
                          pointerEvents: "none",
                        }}
                      >
                        <Avatar
                          src={index.manufacturer_name}
                          alt={index.manufacturer_name}
                          sx={{
                            height: "60px",
                            width: "60px",
                            backgroundColor: (theme) =>
                              theme.palette.secondary.main,
                            fontSize: "40px",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          width: "20%",
                          pointerEvents: "none",
                        }}
                      >
                        <Typography
                          sx={{
                            color: (theme) => theme.palette.textColor.col1,
                            fontSize: "14px",
                          }}
                        >
                          {index.manufacturer_name}
                        </Typography>
                        <Typography
                          sx={{
                            color: (theme) => theme.palette.textColor.col4,
                            fontSize: "12px",
                          }}
                        >
                          Manufacturer ID: {index.manufacturer_id}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          width: "22%",
                          pointerEvents: "none",
                        }}
                      >
                        <Typography
                          sx={{
                            color: (theme) => theme.palette.textColor.col4,
                            fontSize: "12px",
                          }}
                        >
                          {index.manufacturer_email}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          width: "22%",
                          pointerEvents: "none",
                        }}
                      >
                        <Typography
                          sx={{
                            color: (theme) => theme.palette.textColor.col4,
                            fontSize: "12px",
                          }}
                        >
                          {index.manufacturer_contact}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          width: "22%",
                          pointerEvents: "none",
                        }}
                      >
                        <Typography
                          sx={{
                            color: (theme) => theme.palette.textColor.col4,
                            fontSize: "12px",
                          }}
                        >
                          {index.manufacturer_address}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          width: "7%",
                        }}
                      >
                        <Checkbox
                          id={index.manufacturer_id}
                          onClick={isChecked}
                          checked={index?.ischecked || false}
                          color="secondary"
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
                            index.manufacturer_name.includes(search.isSearch) ||
                            index.manufacturer_email.includes(
                              search.isSearch
                            ) ||
                            index.manufacturer_contact.includes(
                              search.isSearch
                            ) ||
                            index.manufacturer_address.includes(
                              search.isSearch
                            ) ||
                            index.manufacturer_id.includes(search.isSearch)
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
        <CustomSupManufactModal
          open={manufacturer_modal.isOpen}
          onClose={ManufacturerHandleClose}
          company_info={manufacturer_info.data}
          path_url={pathname}
        />
        <CustomAddNewManufacturer
          open={manufacturer_modal.isAddbtn}
          onClose={ManufacturerAddHandleClose}
        />
        <CustomDeleteConformation
          open={dialog.isOpen}
          onClose={ConfirmationHandleChangeClose}
          Alldata={deleteAllData}
          data={deleteData}
          message={message.message}
        />
      </Box>
    </Box>
  );
}

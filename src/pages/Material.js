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
import CustomDeleteConformation from "./components/CustomDeleteConformation";

import { ReactComponent as ArrowDownIcon } from "../assets/svg/arrow_down.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search1.svg";
import { ReactComponent as UserIcon } from "../assets/svg/user1.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/trash.svg";
import { ReactComponent as UpdateIcon } from "../assets/svg/update.svg";
import { ReactComponent as StarIcon } from "../assets/svg/star.svg";
import { ReactComponent as SolidStarIcon } from "../assets/svg/solid_star.svg";
import { ReactComponent as ImportIcon } from "../assets/svg/import.svg";
import { ReactComponent as ExportIcon } from "../assets/svg/export.svg";

import CustomMaterialDropDown from "./components/CustomMaterialDropDown";
import CustomMaterialModal from "./components/CustomMaterialModal";
import CustomAddNewMaterial from "./components/CustomAddNewMaterial";

import { API } from "../api/api";
import axios from "axios";
import * as XLSX from "xlsx";

export default function Material() {
  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });
  const [material_modal, Setmaterial_modal] = useState({
    isOpen: false,
    isAddbtn: false,
  });
  const [dialog, SetDialog] = useState({
    isOpen: false,
  });
  const [message, SetMessage] = useState({
    isDialog: "",
  });

  const ConfirmationHandleChangeOpen = () => {
    if (deleteAllData.length !== 0 || deleteData.length !== 0) {
      SetDialog({ ...dialog, isOpen: true });
      SetMessage({ ...message, isDialog: "Do you want to delete data??" });
    }
  };

  const ConfirmationHandleChangeClose = () => {
    SetDialog({ ...dialog, isOpen: false });
  };

  const [material_info, Setmaterial_info] = useState({
    data: {},
  });
  const [payload, Setpayload] = useState({
    data: [{}],
  });

  const [notif, SetNotif] = useState({
    data: [{}],
  });

  const [material_history, SetMaterial_history] = useState([]);

  const [deleteData, SetDeleteData] = useState([]);

  const [deleteAllData, SetDeleteAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: API.material.fetchMaterial,
      })
        .then((response) => {
          console.log(response.data);
          Setpayload({ ...payload, data: response.data });
        })
        .catch(({ response }) => {
          console.log(response.data);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchMaterialData = async () => {
      await axios({
        method: "GET",
        url: API.material_notif.fetchMaterialNotif,
      })
        .then((response) => {
          console.log(response.data);
          SetNotif({ ...notif, data: response.data });
        })
        .catch(({ response }) => {
          console.log(response.data);
        });
    };
    fetchMaterialData();
  }, []);

  const [page, SetPage] = useState(1);
  const [pages, SetPages] = useState(0);
  const [rowperpage, SetRowperPage] = useState(5);
  const [postperpage, SetPostperPage] = useState(5);

  const indexofLastPage = page * postperpage;
  const indexofFirstPage = indexofLastPage - postperpage;

  const handleChangePage = (e, newPage) => {
    SetPage(newPage);
  };

  const handleChangePage1 = (e, newPage) => {
    SetPages(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    SetPostperPage(parseInt(+e.target.value));
    SetPage(1);
  };

  const handleChangeRowsPerPage1 = (e) => {
    SetRowperPage(+e.target.value);
    SetPages(0);
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

  const MaterialAddHandleOpen = () => {
    Setmaterial_modal({ ...material_modal, isAddbtn: true });
  };
  const MaterialAddHandleClose = () => {
    Setmaterial_modal({ ...material_modal, isAddbtn: false });
  };

  const MaterialFunc = (data, e) => {
    if (e.target.id === "paper") {
      MaterialModalHandleOpen();
      MaterialData(data);
    }
  };
  const MaterialModalHandleOpen = () => {
    Setmaterial_modal({ ...material_modal, isOpen: true });
  };
  const MaterialModalHandleClose = () => {
    Setmaterial_modal({ ...material_modal, isOpen: false });
  };
  const MaterialData = (data) => {
    Setmaterial_info({ ...material_info, data: data });
  };

  const isChecked = (e) => {
    const { id, checked } = e.target;
    if (id === "checkAll") {
      let tempUser = payload.data.map((index) => {
        return { ...index, ischecked: checked };
      });
      Setpayload({ ...payload, data: tempUser });
      let data_arr = [];
      let data_arr1 = [];

      tempUser.forEach((index) => {
        const obj = {
          material_id: index.material_id,
          material_name: index.material_name,
          quantity: index.quantity,
          storage_location: index.storage_location,
          inventory_code: index.inventory_code,
          part_no: index.part_no,
          item_condition: index.item_condition,
          type: index.type,
        };
        const obj1 = {
          material_id: index.material_id,
          material_name: index.material_name,
          manufacturer: index.manufacturer,
          quantity: index.quantity,
          storage_location: index.storage_location,
          inventory_code: index.inventory_code,
          part_no: index.part_no,
          part_req: index.part_req,
          item_condition: index.item_condition,
          type: index.type,
          stock_date: new Date().toLocaleDateString(),
          action: "delete material",
        };
        data_arr.push(obj);
        data_arr1.push(obj1);
      });
      if (!checked) {
        SetMaterial_history(
          material_history.filter((index) => index === data_arr1)
        );
        SetDeleteAllData(deleteAllData.filter((index) => index === data_arr));
        SetDeleteData(
          deleteData.filter((index) => index.material_id === data_arr)
        );
      } else {
        SetDeleteAllData(data_arr);
        SetMaterial_history(data_arr1);
        SetDeleteData(
          deleteData.filter((index) => index.material_id === data_arr)
        );
      }
    } else {
      let tempUser = payload.data.map((index) =>
        index.material_id === id ? { ...index, ischecked: checked } : index
      );
      Setpayload({ ...payload, data: tempUser });
      let dat_arr = [];
      let data_arr1 = [];

      tempUser.forEach((index) => {
        const obj = {
          material_id: index.material_id,
          material_name: index.material_name,
          quantity: index.quantity,
          storage_location: index.storage_location,
          inventory_code: index.inventory_code,
          part_no: index.part_no,
          item_condition: index.item_condition,
          type: index.type,
          stock_date: index.stock_date,
        };
        const obj1 = {
          material_id: index.material_id,
          material_name: index.material_name,
          manufacturer: index.manufacturer,
          quantity: index.quantity,
          storage_location: index.storage_location,
          inventory_code: index.inventory_code,
          part_no: index.part_no,
          item_condition: index.item_condition,
          type: index.type,
          part_req: index.part_req,
          stock_date: new Date().toLocaleDateString(),
          action: "delete material",
        };
        dat_arr.push(obj);
        data_arr1.push(obj1);
      });
      let removeItem = id;
      if (!checked) {
        SetMaterial_history(
          material_history.filter((index) => index.material_id !== removeItem)
        );
        SetDeleteData(
          deleteData.filter((index) => index.material_id !== removeItem)
        );
        SetDeleteAllData(
          deleteAllData.filter((index) => index.material_id !== removeItem)
        );
      } else {
        data_arr1.map((index) =>
          index.material_id === id ? material_history.push(index) : index
        );
        SetDeleteData([...deleteData, { material_id: id }]);
        SetDeleteAllData(
          deleteAllData.filter((index) => index.material_id !== removeItem)
        );
      }
    }
  };

  const DownloadMaterial = () => {
    let data_arr = [];
    payload.data.forEach((index) => {
      const obj = {
        material_id: index.material_id,
        material_name: index.material_name,
        manufacturer: index.manufacturer,
        storage_location: index.storage_location,
        quantity: index.quantity,
        quantity_on_hand: index.quantity_on_hand,
        part_no: index.part_no,
        item_condition: index.item_condition,
        type: index.type,
        part_req: index.part_req,
        inventory_code: index.inventory_code,
        material_stock_date: index.material_stock_date,
      };
      data_arr.push(obj);
    });
    if (data_arr.length !== 0) {
      var wb = XLSX.utils.book_new();
      var ws = XLSX.utils.json_to_sheet(data_arr);

      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
      XLSX.writeFile(wb, "Material.xlsx");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: (theme) => theme.palette.secondary.bg1,
        overflow: "hidden",
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
                onClick={DownloadMaterial}
              >
                <ExportIcon
                  style={{
                    height: "20px",
                    width: "20px",
                    marginRight: "10px",
                  }}
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
        <Box sx={{ display: "flex", height: "250vh" }}>
          <Box
            sx={{
              height: "100%",
              width: "25%",
              backgroundColor: "",
              padding: "10px 10px",
            }}
          >
            <CustomMaterialDropDown />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "70.3%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                backgroundColor: "",
                padding: "30px 20px",
              }}
            >
              <Paper
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "70px",
                  width: "96%",
                  padding: "0px 20px",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
              >
                <TextField
                  value={search.isSearch}
                  onChange={SearchHandleChange("isSearch")}
                  InputProps={{
                    startAdornment: (
                      <SearchIcon style={{ marginRight: "10px" }} />
                    ),
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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Button
                    sx={{
                      height: "30px",
                      width: "130px",
                      border: "1px solid #3A57E8",
                      borderRadius: "10px",
                      textTransform: "capitalize",
                      backgroundColor: (theme) => theme.palette.primary.main,
                      color: (theme) => theme.palette.textColor.col1,
                    }}
                    onClick={MaterialAddHandleOpen}
                  >
                    <UserIcon style={{ marginRight: "10px" }} />
                    <Typography sx={{ fontSize: "14px" }}>Add New</Typography>
                  </Button>
                  <Box component="span" sx={{ flexGrow: "1" }} />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      width: "30%",
                    }}
                  >
                    <Button
                      sx={{
                        height: "30px",
                        width: "90px",
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
                    width: "100%",
                    marginTop: "40px",
                  }}
                >
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.textColor.col4,
                      fontSize: "14px",
                      margin: "0px 100px 0px 80px",
                    }}
                  >
                    Name
                  </Typography>
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.textColor.col4,
                      fontSize: "14px",
                      margin: "0px 80px 0px 0px",
                    }}
                  >
                    STORAGE LOCATION
                  </Typography>
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.textColor.col4,
                      fontSize: "14px",
                      margin: "0px 80px 0px 0px",
                    }}
                  >
                    QUANTITY
                  </Typography>
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.textColor.col4,
                      fontSize: "14px",
                      margin: "0px 70px 0px 0px",
                    }}
                  >
                    TYPE
                  </Typography>
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.textColor.col4,
                      fontSize: "14px",
                    }}
                  >
                    STATUS
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
                          ? index.material_name.includes(search.isSearch) ||
                            index.inventory_code.includes(search.isSearch) ||
                            index.storage_location.includes(search.isSearch) ||
                            index.quantity.includes(search.isSearch) ||
                            index.type.includes(search.isSearch) ||
                            index.item_condition.includes(search.isSearch) ||
                            index.material_id.includes(search.isSearch)
                          : index
                      )
                      .sort(() =>
                        sort.isSort === "DESC"
                          ? 1
                          : sort.isSort === "ASC"
                          ? -1
                          : 1
                      )
                      .slice(indexofFirstPage, indexofLastPage)
                      .map((index, i) => (
                        <Paper
                          key={i}
                          id="paper"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            height: "70px",
                            width: "100%",
                            marginTop: "20px",
                            borderRadius: "10px",
                            overflow: "hidden",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              backgroundColor: (theme) =>
                                theme.palette.secondary.bg2,
                            },
                          }}
                          onClick={(e) => MaterialFunc(index, e)}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "70px",
                              width: "22%",
                              backgroundColor: "",
                              pointerEvents: "none",
                            }}
                          >
                            <Typography sx={{ fontSize: "13px" }}>
                              {index.material_name}
                            </Typography>
                            <Box sx={{ display: "flex" }}>
                              <Typography
                                sx={{ fontSize: "12px", marginRight: "4px" }}
                              >
                                Inventory code:
                              </Typography>
                              <Typography sx={{ fontSize: "12px" }}>
                                {index.inventory_code}
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "70px",
                              width: "18%",
                              backgroundColor: "",
                              marginRight: "50px",
                              pointerEvents: "none",
                            }}
                          >
                            <Typography sx={{ fontSize: "13px" }}>
                              {index.storage_location}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "70px",
                              width: "13%",
                              backgroundColor: "",
                              marginRight: "85px",
                              pointerEvents: "none",
                            }}
                          >
                            <Typography sx={{ fontSize: "13px" }}>
                              {index.quantity}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "70px",
                              width: "0%",
                              backgroundColor: "",
                              marginRight: "30px",
                              pointerEvents: "none",
                            }}
                          >
                            <Typography sx={{ fontSize: "13px" }}>
                              {index.type}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "70px",
                              width: "19%",
                              backgroundColor: "",
                              pointerEvents: "none",
                            }}
                          >
                            <Box
                              sx={{
                                border:
                                  index.item_condition === "Available"
                                    ? "1px solid #3A57E8"
                                    : "1px solid #D0D3DB",
                                borderRadius: "30px",
                                padding: "3px 10px",
                                pointerEvents: "none",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  color:
                                    index.item_condition === "Available"
                                      ? (theme) => theme.palette.textColor.col1
                                      : (theme) => theme.palette.textColor.col4,
                                }}
                              >
                                {index.item_condition}
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              height: "100%",
                              width: "2%",
                            }}
                          >
                            <Checkbox
                              id={index.material_id}
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
                                index.material_name.includes(search.isSearch) ||
                                index.inventory_code.includes(
                                  search.isSearch
                                ) ||
                                index.storage_location.includes(
                                  search.isSearch
                                ) ||
                                index.quantity.includes(search.isSearch) ||
                                index.type.includes(search.isSearch) ||
                                index.item_condition.includes(
                                  search.isSearch
                                ) ||
                                index.material_id.includes(search.isSearch)
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
                display: "flex",
                alignItems: "center",
                height: "50px",
                width: "100%",
                backgroundColor: (theme) => theme.palette.primary.main,
                padding: "0px 20.3px",
                marginTop: "150px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "13px",
                  color: (theme) => theme.palette.textColor.col3,
                }}
              >
                Materials Maintenance
              </Typography>
              <Box component="span" sx={{ flexGrow: "1" }} />
              <Typography
                sx={{
                  fontSize: "13px",
                  fontStyle: "italic",
                  color: (theme) => theme.palette.textColor.col3,
                }}
              >
                As of {new Date().toLocaleDateString()}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                height: "30%",
                width: "100%",
                backgroundColor: "",
                padding: "30px 20px",
              }}
            >
              <Box
                sx={{
                  width: "38%",
                  backgroundColor: "",
                  padding: "10px 10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: (theme) => theme.palette.textColor.col1,
                  }}
                >
                  Materials
                </Typography>
                {payload.data.length === 0 ? (
                  <Paper
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "465px",
                      width: "93%",
                      borderRadius: "20px",
                      marginTop: "10px",
                      padding: "0px 10px",
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
                  payload.data
                    .slice(indexofFirstPage, indexofLastPage)
                    .map((index, i) => (
                      <Paper
                        key={i}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          height: "60px",
                          width: "93%",
                          borderRadius: "20px",
                          marginTop: "10px",
                          padding: "0px 10px",
                        }}
                      >
                        <Checkbox
                          icon={
                            <StarIcon
                              style={{
                                height: "20px",
                                width: "20px",
                                color: "#3A57E8",
                              }}
                            />
                          }
                          checkedIcon={
                            <SolidStarIcon
                              style={{
                                height: "20px",
                                width: "20px",
                                color: "#3A57E8",
                              }}
                            />
                          }
                        />
                        <Typography
                          sx={{ fontSize: "13px", fontWeight: "lighter" }}
                        >
                          {index.material_name}
                        </Typography>
                        <Box compoent="span" sx={{ flexGrow: "1" }} />
                        <Button
                          sx={{
                            height: "20px",
                            width: "70px",
                            borderRadius: "30px",
                            border: "1px solid #3A57E8",
                            marginRight: "10px",
                            color: (theme) => theme.palette.textColor.col1,
                          }}
                        >
                          <Typography sx={{ fontSize: "12px" }}>
                            Notes
                          </Typography>
                        </Button>
                        <Button
                          sx={{
                            height: "20px",
                            width: "90px",
                            borderRadius: "30px",
                            border: "1px solid #3A57E8",
                            marginRight: "10px",
                            color: (theme) => theme.palette.textColor.col1,
                          }}
                        >
                          <Typography sx={{ fontSize: "12px" }}>
                            Remarks
                          </Typography>
                        </Button>
                      </Paper>
                    ))
                )}
              </Box>
              <Box
                sx={{
                  width: "58%",
                  backgroundColor: "",
                  padding: "10px 10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: (theme) => theme.palette.textColor.col1,
                  }}
                >
                  Notifications
                </Typography>
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    borderRadius: "10px",
                    marginTop: "10px",
                  }}
                >
                  <TableContainer component={Box}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ textAlign: "center" }}>
                            Date
                          </TableCell>
                          <TableCell sx={{ textAlign: "center" }}>
                            Quantity
                          </TableCell>
                          <TableCell sx={{ textAlign: "center" }}>
                            Action
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody
                        sx={{
                          width: "96%",
                          overflow: "auto",
                          "&::-webkit-scrollbar": {
                            display: "none",
                          },
                        }}
                      >
                        {notif.data.length === 0 ? (
                          <TableRow>
                            <TableCell
                              sx={{
                                position: "relative",
                                left: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "300px",
                              }}
                            >
                              <Typography
                                variant="h4"
                                sx={{
                                  color: (theme) =>
                                    theme.palette.textColor.col4,
                                }}
                              >
                                No Data
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ) : (
                          notif.data
                            .slice(
                              pages * rowperpage,
                              pages * rowperpage + rowperpage
                            )
                            .map((index, i) => (
                              <TableRow key={i}>
                                <TableCell sx={{ textAlign: "center" }}>
                                  {index.stock_date}
                                </TableCell>
                                <TableCell sx={{ textAlign: "center" }}>
                                  {index.quantity}
                                </TableCell>
                                <TableCell sx={{ textAlign: "center" }}>
                                  {index.action}
                                </TableCell>
                              </TableRow>
                            ))
                        )}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TablePagination
                            count={notif.data.length}
                            page={pages}
                            rowsPerPage={rowperpage}
                            onPageChange={handleChangePage1}
                            onRowsPerPageChange={handleChangeRowsPerPage1}
                            SelectProps={{
                              label: "row per page",
                            }}
                            rowsPerPageOptions={[
                              5,
                              10,
                              25,
                              { label: "All", value: -1 },
                            ]}
                          />
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </TableContainer>
                </Paper>
              </Box>
            </Box>
          </Box>
          <CustomMaterialModal
            open={material_modal.isOpen}
            onClose={MaterialModalHandleClose}
            material_info={material_info.data}
          />
          <CustomAddNewMaterial
            open={material_modal.isAddbtn}
            onClose={MaterialAddHandleClose}
          />
          <CustomDeleteConformation
            open={dialog.isOpen}
            onClose={ConfirmationHandleChangeClose}
            message={message.isDialog}
            Alldata={deleteAllData}
            data={deleteData}
            history={material_history}
          />
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

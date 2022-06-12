import React, { useState, useEffect } from "react";

import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Stack,
  Pagination,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";

import { API } from "../api/api";
import axios from "axios";
import * as XLSX from "xlsx";

import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";
import CustomDeleteConformation from "./components/CustomDeleteConformation";

import { ReactComponent as UserIcon } from "../assets/svg/user1.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/trash.svg";
import { ReactComponent as UpdateIcon } from "../assets/svg/update.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search1.svg";
import { ReactComponent as ImportIcon } from "../assets/svg/import.svg";
import { ReactComponent as ExportIcon } from "../assets/svg/export.svg";

import { CustomConstructionInfo } from "./components/CustomConstructionModal";
import { deleteConstruction } from "../api/constructionApi";

export default function Construction_Site() {
  const [payload, setPayload] = useState({
    data: [{}],
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

  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });

  const [construction_modal, Setconstruction_modal] = useState({
    isOpen: false,
  });
  const [construction_info, Setconstruction_info] = useState({
    data: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: API.construction_site.fetchConstruction,
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

  const ConstructionHandleOpen = () => {
    Setconstruction_modal({ ...construction_modal, isOpen: true });
  };
  const ConstructionFunc = (data, e) => {
    if (e.target.id === "paper") {
      ConstructionHandleOpen();
      ConstructionData(data);
    }
  };
  const ConstructionHandleClose = () => {
    Setconstruction_modal({ ...construction_modal, isOpen: false });
  };
  const ConstructionData = (data) => {
    Setconstruction_info({ ...construction_info, data: data });
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
          construction_id: index.construction_id,
        };
        data_arr.push(obj);
      });
      if (!checked) {
        SetDeleteAllData(deleteAllData.filter((index) => index === data_arr));
        SetDeleteData(
          deleteData.filter((index) => index.construction_id === data_arr)
        );
      } else {
        SetDeleteAllData(data_arr);
        SetDeleteData(
          deleteData.filter((index) => index.construction_id === data_arr)
        );
      }
      console.log(data_arr);
    } else {
      let tempUser = payload.data.map((index) =>
        index.construction_id === id ? { ...index, ischecked: checked } : index
      );
      setPayload({ ...payload, data: tempUser });
      let removeItem = id;
      if (!checked) {
        SetDeleteData(
          deleteData.filter((index) => index.construction_id !== removeItem)
        );
        SetDeleteAllData(
          deleteAllData.filter((index) => index.construction_id !== removeItem)
        );
      } else {
        SetDeleteData([...deleteData, { construction_id: id }]);
        SetDeleteAllData(
          deleteAllData.filter((index) => index.construction_id !== removeItem)
        );
      }
    }
  };


  const DownloadConstruction = () => {
    let data_arr = [];
    payload.data.forEach((index) => {
      const obj = {
        construction_id: index.construction_id,
        construction_site_name: index.construction_site_name,
        construction_client_name: index.construction_client_name,
      };
      data_arr.push(obj);
    });
    if (payload.data.length !== 0) {
      var wb = XLSX.utils.book_new();
      var ws = XLSX.utils.json_to_sheet(data_arr);

      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
      XLSX.writeFile(wb, "Construction_Site.xlsx");
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
                onClick={DownloadConstruction}
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
              <Box component="span" sx={{ flexGrow: "1" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
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
                  onClick={ConfirmHandleChangeOpen}
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  width: "30%",
                }}
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.textColor.col4,
                    fontSize: "14px",
                    marginLeft: "50px",
                  }}
                >
                  ID NUMBER
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  width: "30%",
                }}
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.textColor.col4,
                    fontSize: "14px",
                    marginLeft: "40px",
                  }}
                >
                  Project Name
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  width: "40%",
                }}
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.textColor.col4,
                    fontSize: "14px",
                    marginLeft: "40px",
                  }}
                >
                  Site Location
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  width: "40%",
                }}
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.textColor.col4,
                    fontSize: "14px",
                    marginLeft: "40px",
                  }}
                >
                  Budget
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  width: "40%",
                }}
              >
                <Typography
                  sx={{
                    color: (theme) => theme.palette.textColor.col4,
                    fontSize: "14px",
                    marginLeft: "40px",
                  }}
                >
                  Status
                </Typography>
              </Box>
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
              payload.data
                .filter((index) =>
                  search.isSearch !== ""
                    ? index.project_name.includes(search.isSearch) ||
                      index.site_location.includes(search.isSearch) ||
                      index.budget.includes(search.isSearch) ||
                      index.client_name.includes(search.isSearch) ||
                      index.status.includes(search.isSearch) ||
                      index.construction_id.includes(search.isSearch)
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
                      alignItems: "center",
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
                    onClick={(e) => ConstructionFunc(index, e)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        width: "30%",
                        backgroundColor: "",
                        pointerEvents: "none",
                      }}
                    >
                      <Typography sx={{ fontSize: "15px", marginLeft: "50px" }}>
                        {index.construction_id}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        width: "30%",
                        backgroundColor: "",
                        pointerEvents: "none",
                      }}
                    >
                      <Typography sx={{ fontSize: "15px", marginLeft: "50px" }}>
                        {index.project_name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        width: "30%",
                        backgroundColor: "",
                        pointerEvents: "none",
                      }}
                    >
                      <Typography sx={{ fontSize: "15px", marginLeft: "50px" }}>
                        {index.site_location}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        width: "30%",
                        backgroundColor: "",
                        pointerEvents: "none",
                      }}
                    >
                      <Typography sx={{ fontSize: "15px", marginLeft: "50px" }}>
                        {index.budget}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        width: "30%",
                        backgroundColor: "",
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
                          borderRadius: "30px",
                          textTransform: "uppercase",
                          padding: "2px 5px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "15px",
                            color: (theme) => theme.palette.textColor.col1,
                          }}
                        >
                          {index.status}
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
                        id={index.construction_id}
                        onClick={isChecked}
                        checked={index?.ischecked || false}
                        color="secondary"
                      />
                    </Box>
                  </Paper>
                ))
            )}
            <Stack spacing={2} sx={{ marginTop: "20px" }}>
              <Pagination
                count={
                  search.isSearch === ""
                    ? Math.ceil(payload.data.length / postperpage)
                    : Math.ceil(
                        payload.data.filter(
                          (index) =>
                            index.project_name.includes(search.isSearch) ||
                            index.site_location.includes(search.isSearch) ||
                            index.budget.includes(search.isSearch) ||
                            index.client_name.includes(search.isSearch) ||
                            index.status.includes(search.isSearch) ||
                            index.construction_id.includes(search.isSearch)
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
          <CustomConstructionInfo
            open={construction_modal.isOpen}
            onClose={ConstructionHandleClose}
            construction_info={construction_info.data}
          />
          <CustomDeleteConformation
            open={dialog.isOpen}
            onClose={ConfirmHandleChangeClose}
            Alldata={deleteAllData}
            data={deleteData}
            message={message.message}
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

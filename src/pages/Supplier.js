import React, { useState, useEffect, useReducer } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Select,
  Avatar,
  Checkbox,
  Stack,
  Pagination,
} from "@mui/material";

import { sample_data } from "../utils/sample_data";

import CustomImportButton from "./components/CustomImportButton";
import CustomExportButton from "./components/CustomExportButton";
import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";
import CustomSupManufactModal from "./components/CustomSupManufactModal";
import CustomAddNewSupplier from "./components/CustomAddNewSupplier";

import { ReactComponent as ArrowDownIcon } from "../assets/svg/arrow_down.svg";
import { ReactComponent as UserIcon } from "../assets/svg/user1.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/trash.svg";
import { ReactComponent as UpdateIcon } from "../assets/svg/update.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search1.svg";

import { API } from "../api/api";
import axios from "axios";
import { deleteSupplier } from "../api/supplierApi";

import { useLocation } from "react-router-dom";

export default function Supplier() {
  let { pathname } = useLocation();

  const [Deleteignored, DeleteUpdate] = useReducer((x) => (x = 1), 0);
  const [Addignored, AddUpdate] = useReducer((x) => (x = 1), 0);
  const [Updateignored, UpdateForce] = useReducer((x) => (x = 1), 0);

  const [payload, setPayload] = useState({
    data: [{}],
    idChecked: false,
    id: "",
  });
  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });

  const [dropdownbtn, Setdropdownbtn] = useState({
    isImport: true,
    isExport: true,
  });

  const [supplier_modal, Setsupplier_modal] = useState({
    isOpen: false,
    isAddbtn: false,
  });

  const [supplier_info, Setsupplier_info] = useState({
    data: {},
  });
  const [shorttext, SetShortText] = useState({
    text: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: API.supplier.fetchSupplier,
      })
        .then((response) => {
          setPayload({ ...payload, data: response.data });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, [Addignored, Deleteignored, Updateignored]);

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
  
  const SupplierHandleOpen = () => {
    Setsupplier_modal({ ...supplier_modal, isOpen: true });
  };

  const SupplierAddHandleOpen = () => {
    Setsupplier_modal({ ...supplier_modal, isAddbtn: true });
  };

  const SupplierFunc = (data, e) => {
    if (e.target.id === "paper") {
      SupplierHandleOpen();
      SupplierData(data);
      return;
    }
  };

  const SupplierHandleClose = () => {
    Setsupplier_modal({ ...supplier_modal, isOpen: false });
  };

  const SupplierAddHandleClose = () => {
    Setsupplier_modal({ ...supplier_modal, isAddbtn: false });
  };

  const SupplierData = (data) => {
    Setsupplier_info({ ...supplier_info, data: data });
  };
  const isChecked = (data) => {
    /*     setPayload({ ...payload, idChecked: !payload.idChecked }); */
    setPayload({ ...payload, id: data });
  };
  console.log(payload.id);
  const CheckAll = (e) => {
    setPayload({ ...payload, idChecked: !payload.idChecked });
  };

  const DeleteAll = () => {
    payload.data.forEach((index) => {
      if (payload.idChecked === true) {
        const obj = {
          supplier_id: index.supplier_id,
        };
        console.log(JSON.stringify(obj));
        deleteSupplier(obj);
      }
    });
    const obj = {
      supplier_id: payload.id,
    };
    deleteSupplier(obj);
    window.location.reload();
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
                onClick={SupplierAddHandleOpen}
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
                  onClick={DeleteAll}
                >
                  <DeleteIcon style={{ marginRight: "10px" }} />
                  <Typography sx={{ fontSize: "14px" }}>Delete</Typography>
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
                >
                  <UpdateIcon style={{ marginRight: "10px" }} />
                  <Typography sx={{ fontSize: "14px" }}>Update</Typography>
                </Button>
                <Checkbox onClick={CheckAll} />
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
                  onClick={(e) => SupplierFunc(index, e)}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: (theme) => theme.palette.secondary.main,
                      height: "100%",
                      width: "7%",
                      pointerEvents: "none",
                    }}
                  >
                    <Avatar
                      src={index.supplier_name}
                      alt={index.supplier_name}
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
                      {index.supplier_name}
                    </Typography>
                    <Typography
                      sx={{
                        color: (theme) => theme.palette.textColor.col4,
                        fontSize: "12px",
                      }}
                    >
                      Supplier ID: {index.supplier_id}
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
                      {index.supplier_email}
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
                      {index.supplier_contact}
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
                      {index.supplier_address}
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
                      checked={payload.idChecked}
                      onClick={() => isChecked(index.supplier_id)}
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
        <CustomSupManufactModal
          open={supplier_modal.isOpen}
          onClose={SupplierHandleClose}
          company_info={supplier_info.data}
          path_url={pathname}
          updateForce={UpdateForce}
        />
        <CustomAddNewSupplier
          open={supplier_modal.isAddbtn}
          onClose={SupplierAddHandleClose}
          AddUpdate={AddUpdate}
        />
      </Box>
    </Box>
  );
}

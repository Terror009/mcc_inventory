import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Select,
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

import { ReactComponent as ArrowDownIcon } from "../assets/svg/arrow_down.svg";
import { ReactComponent as UserIcon } from "../assets/svg/user1.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/trash.svg";
import { ReactComponent as UpdateIcon } from "../assets/svg/update.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search1.svg";
import { useLocation } from "react-router-dom";

export default function Manufacturer() {
  const { pathname } = useLocation();
  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });
  const [dropdownbtn, Setdropdownbtn] = useState({
    isImport: true,
    isExport: true,
  });
  const [manufacturer_modal, SetManufacturer_modal] = useState({
    isOpen: false,
  });
  const [manufacturer_info, SetManufacturer_info] = useState({
    data: {},
  });

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
    SetManufacturer_modal({ ...manufacturer_modal, isOpen: true });
  };
  const SupplierFunc = (data) => {
    SupplierHandleOpen();
    SupplierData(data)
  }
  const SupplierHandleClose = () => {
    SetManufacturer_modal({ ...manufacturer_modal, isOpen: false });
  };
  const SupplierData = (data) => {
    SetManufacturer_info({...manufacturer_info, data: data})
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
                <Checkbox />
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
            {sample_data.map((index, i) => (
              <Paper
                key={i}
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
                onClick={() => SupplierFunc(index)}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    height: "100%",
                    width: "7%",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ color: (theme) => theme.palette.textColor.col2 }}
                  >
                    {index.alt}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "20%",
                  }}
                >
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.textColor.col1,
                      fontSize: "14px",
                    }}
                  >
                    {index.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.textColor.col4,
                      fontSize: "12px",
                    }}
                  >
                    Manufacturer ID: {index.id}
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
                  }}
                >
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.textColor.col4,
                      fontSize: "12px",
                    }}
                  >
                    {index.email}
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
                  }}
                >
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.textColor.col4,
                      fontSize: "12px",
                    }}
                  >
                    {index.contact}
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
                  }}
                >
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.textColor.col4,
                      fontSize: "12px",
                    }}
                  >
                    {index.address}
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
                  <Checkbox />
                </Box>
              </Paper>
            ))}
            <Stack spacing={2} sx={{ marginTop: "60px" }}>
              <Pagination count={10} shape="rounded" color="primary" />
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
          onClose={SupplierHandleClose}
          company_info={manufacturer_info.data}
          path_url={pathname}
        />
      </Box>
    </Box>
  );
}

import React, { useState } from "react";

import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  IconButton,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
} from "@mui/material";

import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";
import CustomImportButton from "./components/CustomImportButton";
import CustomExportButton from "./components/CustomExportButton";

import { ReactComponent as ArrowDownIcon } from "../assets/svg/arrow_down.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search1.svg";
import { ReactComponent as UserIcon } from "../assets/svg/user1.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/trash.svg";
import { ReactComponent as UpdateIcon } from "../assets/svg/update.svg";
import { ReactComponent as StarIcon } from "../assets/svg/star.svg";
import { ReactComponent as SolidStarIcon } from "../assets/svg/solid_star.svg";

import { material_data } from "../utils/materials_sample_data";
import CustomMaterialDropDown from "./components/CustomMaterialDropDown";
import CustomMaterialModal from "./components/CustomMaterialModal";
import CustomAddNewMaterial from "./components/CustomAddNewMaterial";

export default function Material() {
  const [dropdownbtn, Setdropdownbtn] = useState({
    isImport: true,
    isExport: true,
  });
  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });
  const [material_modal, Setmaterial_modal] = useState({
    isOpen: false,
    isAddbtn: false,
  });
  const [payload, Setpayload] = useState({
    data: {},
  });

  const ImportHandle = () => {
    Setdropdownbtn({ ...dropdownbtn, isImport: !dropdownbtn.isImport });
  };
  const ExportHandle = () => {
    Setdropdownbtn({ ...dropdownbtn, isExport: !dropdownbtn.isExport });
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

  const MaterialFunc = (data) => {
    MaterialModalHandleOpen();
    MaterialData(data);
  };
  const MaterialModalHandleOpen = () => {
    Setmaterial_modal({ ...material_modal, isOpen: true });
  };
  const MaterialModalHandleClose = () => {
    Setmaterial_modal({ ...material_modal, isOpen: false });
  };
  const MaterialData = (data) => {
    Setpayload({ ...payload, data: data });
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
        <Box sx={{ display: "flex", height: "200vh" }}>
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
                  justifyContent: "center",
                  alignItems: "center",
                  height: "70px",
                  width: "92%",
                  padding: "0px 35px",
                }}
              >
                <TextField
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
                    justifyContent: "space-evenly",
                    width: "30%",
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
                    >
                      <DeleteIcon style={{ marginRight: "10px" }} />
                      <Typography sx={{ fontSize: "14px" }}>Delete</Typography>
                    </Button>
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
                    STORAGE LOCATION
                  </Typography>
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.textColor.col4,
                      fontSize: "14px",
                    }}
                  >
                    QUANTITY
                  </Typography>
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.textColor.col4,
                      fontSize: "14px",
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
                {material_data.map((index, i) => (
                  <Paper
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "70px",
                      width: "96%",
                      marginTop: "20px",
                      borderRadius: "10px",
                      padding: "0px 20px",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: (theme) => theme.palette.secondary.bg2,
                      },
                    }}
                    onClick={() => MaterialFunc(index)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        height: "70px",
                        width: "17%",
                        backgroundColor: "",
                      }}
                    >
                      <Typography sx={{ fontSize: "13px" }}>
                        {index.name}
                      </Typography>
                      <Typography sx={{ fontSize: "13px" }}>
                        Inventory code: {index.inventory_code}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "70px",
                        width: "30%",
                        backgroundColor: "",
                        marginRight: "50px",
                      }}
                    >
                      <Typography sx={{ fontSize: "13px" }}>
                        {index.location}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "70px",
                        width: "5%",
                        backgroundColor: "",
                        marginRight: "85px",
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
                        width: "10%",
                        backgroundColor: "",
                        marginRight: "30px",
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
                        width: "15%",
                        backgroundColor: "",
                      }}
                    >
                      <Box
                        sx={{
                          border:
                            index.status === "AVAILABLE"
                              ? "1px solid #3A57E8"
                              : "1px solid #D0D3DB",
                          borderRadius: "30px",
                          padding: "3px 10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color:
                              index.status === "AVAILABLE"
                                ? (theme) => theme.palette.textColor.col1
                                : (theme) => theme.palette.textColor.col4,
                          }}
                        >
                          {index.status}
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
                      <Checkbox />
                    </Box>
                  </Paper>
                ))}
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
                As of 12/04/2022
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
                {material_data.map((index, i) => (
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
                        <StarIcon style={{ height: "20px", width: "20px" }} />
                      }
                      checkedIcon={
                        <SolidStarIcon
                          style={{ height: "20px", width: "20px" }}
                        />
                      }
                    />
                    <Typography
                      sx={{ fontSize: "13px", fontWeight: "lighter" }}
                    >
                      {index.name}
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
                      <Typography sx={{ fontSize: "12px" }}>Notes</Typography>
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
                      <Typography sx={{ fontSize: "12px" }}>Remarks</Typography>
                    </Button>
                  </Paper>
                ))}
              </Box>
              <Box
                sx={{
                  width: "28%",
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
                  Maintenance Progress
                </Typography>
                <Paper
                  sx={{
                    height: "300px",
                    width: "100%",
                    borderRadius: "10px",
                    marginTop: "10px",
                  }}
                ></Paper>
              </Box>
              <Box
                sx={{
                  width: "28%",
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
                    height: "300px",
                    width: "100%",
                    borderRadius: "10px",
                    marginTop: "10px",
                  }}
                ></Paper>
              </Box>
            </Box>
          </Box>
          <CustomMaterialModal
            open={material_modal.isOpen}
            onClose={MaterialModalHandleClose}
            material_info={payload.data}
          />
          <CustomAddNewMaterial
            open={material_modal.isAddbtn}
            onClose={MaterialAddHandleClose}
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

import React, { useState, useEffect } from "react";

import {
  Box,
  Paper,
  Typography,
  Button,
  Link,
  TextField,
  Checkbox,
} from "@mui/material";
import { Link as NLink } from "react-router-dom";
import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";
import CustomMaterialLevelModal from "./components/CustomMaterialLevelModal";

import { ReactComponent as BackIcon } from "../assets/svg/back.svg";
import { ReactComponent as ImportIcon } from "../assets/svg/import.svg";
import { ReactComponent as ExportIcon } from "../assets/svg/export.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search1.svg";
import { ReactComponent as UserIcon } from "../assets/svg/user1.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/trash.svg";

import { deleteMaterialLevelApi } from "../api/materiallevelApi";
import { API } from "../api/api";
import axios from "axios";
export default function Material_Stock_level() {
  const [payload, SetPayload] = useState({
    data: [{}],
  });
  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });

  const [material_modal, Setmaterial_modal] = useState({
    isOpen: false,
  });
  const [material_info, Setmaterial_info] = useState({
    data: {},
  });

  const [deleteData, SetDeleteData] = useState([]);

  const [deleteAllData, SetDeleteAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: API.material_stock_level.fetchMaterialLevel,
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

  console.log(payload.data);

  const SideBarHandle = () => {
    Setsidebar({ ...sidebar, isOpen: true });
  };

  const SideBarHandleClose = () => {
    Setsidebar({ ...sidebar, isOpen: false });
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

  const MaterialFunc = (data, e) => {
    if (e.target.id === "paper") {
      MaterialModalHandleOpen();
      MaterialData(data);
    }
  };

  const isChecked = (e) => {
    const { id, checked } = e.target;
    if (id === "checkAll") {
      let tempUser = payload.data.map((index) => {
        return { ...index, ischecked: checked };
      });
      SetPayload({ ...payload, data: tempUser });
      let data_arr = [];

      tempUser.forEach((index) => {
        const obj = {
          material_level_id: index.material_level_id,
        };
        data_arr.push(obj);
      });
      if (!checked) {
        SetDeleteAllData(deleteAllData.filter((index) => index === data_arr));
        SetDeleteData(
          deleteData.filter((index) => index.material_level_id === data_arr)
        );
      } else {
        SetDeleteAllData(data_arr);
        SetDeleteData(
          deleteData.filter((index) => index.material_level_id === data_arr)
        );
      }
    } else {
      let tempUser = payload.data.map((index) =>
        index.material_level_id === id
          ? { ...index, ischecked: checked }
          : index
      );
      SetPayload({ ...payload, data: tempUser });
      let removeItem = id;
      if (!checked) {
        SetDeleteData(
          deleteData.filter((index) => index.material_level_id !== removeItem)
        );
        SetDeleteAllData(
          deleteAllData.filter(
            (index) => index.material_level_id !== removeItem
          )
        );
      } else {
        SetDeleteData([...deleteData, { material_level_id: id }]);
        SetDeleteAllData(
          deleteAllData.filter(
            (index) => index.material_level_id !== removeItem
          )
        );
      }
    }
  };

  const DeleteData = () => {
    deleteAllData.forEach((index) => {
      const obj = {
        material_level_id: index.material_level_id,
      };
      console.log(obj);
      deleteMaterialLevelApi(obj);
    });
    deleteData.forEach((index) => {
      const obj = {
        material_level_id: index.material_level_id,
      };
      console.log(obj);
      deleteMaterialLevelApi(obj);
    });
    window.location.reload();
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
        <Box sx={{ marginTop: "60px" }}>
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
                  style={{
                    height: "20px",
                    width: "20px",
                    marginRight: "10px",
                  }}
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
            padding: "40px 40px",
          }}
        >
          <Link
            component={NLink}
            to="/reports"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <BackIcon style={{ marginRight: "10px" }} />
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col5,
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Back to Report
            </Typography>
          </Link>
          <Typography
            variant="h5"
            sx={{
              color: (theme) => theme.palette.textColor.col4,
              margin: "20px 0px 0px 40px",
            }}
          >
            Material Stock Level
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
                  onClick={isChecked}
                  checked={
                    !payload.data.some((index) => index?.ischecked !== true)
                  }
                  color="secondary"
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "90%",
              marginTop: "40px",
            }}
          >
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col4,
                fontSize: "14px",
              }}
            >
              Inventory Code
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col4,
                fontSize: "14px",
              }}
            >
              LOCATION
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col4,
                fontSize: "14px",
              }}
            >
              MATERIALS
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col4,
                fontSize: "14px",
              }}
            >
              QUANTITY ON HAND
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col4,
                fontSize: "14px",
              }}
            >
              ON ORDER
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
            payload.data.map((index, i) => (
              <Paper
                key={i}
                id="paper"
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
                onClick={(e) => MaterialFunc(index, e)}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70px",
                    width: "15%",
                    backgroundColor: "",
                    pointerEvents: "none",
                  }}
                >
                  <Typography sx={{ fontSize: "13px" }}>
                    {index.inventory_code}
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
                    marginRight: "50px",
                    pointerEvents: "none",
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
                    width: "15%",
                    backgroundColor: "",
                    marginRight: "50px",
                    pointerEvents: "none",
                  }}
                >
                  <Typography sx={{ fontSize: "13px" }}>
                    {index.material}
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
                    marginRight: "85px",
                    pointerEvents: "none",
                  }}
                >
                  <Typography sx={{ fontSize: "13px" }}>
                    {index.quantity_on_hand}
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
                    marginRight: "85px",
                    pointerEvents: "none",
                  }}
                >
                  <Typography sx={{ fontSize: "13px" }}>
                    {index.on_order}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "100%",
                    width: "5.5%",
                  }}
                >
                  <Checkbox
                    id={index.material_level_id}
                    onClick={isChecked}
                    checked={index?.ischecked || false}
                    color="secondary"
                  />
                </Box>
              </Paper>
            ))
          )}
        </Box>
        <CustomMaterialLevelModal
          open={material_modal.isOpen}
          onClose={MaterialModalHandleClose}
          material_level_info={material_info.data}
        />
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

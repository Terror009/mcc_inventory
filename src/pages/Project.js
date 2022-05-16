import React, { useState, useEffect } from "react";

import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Checkbox,
} from "@mui/material";

import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";
import CustomAddNewProject from "./components/CustomAddNewProject";
import { CustomProjectInfo } from "./components/CustomProjectModal";

import { ReactComponent as ImportIcon } from "../assets/svg/import.svg";
import { ReactComponent as ExportIcon } from "../assets/svg/export.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search1.svg";
import { ReactComponent as UserIcon } from "../assets/svg/user1.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/trash.svg";

import { API } from "../api/api";
import axios from "axios";
import * as XLSX from "xlsx";

import { deleteProject } from "../api/projectApi";

export default function Project() {
  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });
  const [project_modal, Setproject_modal] = useState({
    isOpen: false,
    isAddbtn: false,
  });

  const [payload, setPayload] = useState({
    data: [{}],
  });
  const [project_info, setProject_info] = useState({
    data: {},
  });
  const [deleteData, SetDeleteData] = useState([]);

  const [deleteAllData, SetDeleteAllData] = useState([]);

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("user"));

    const obj = {
      user_id: user_id.user_id,
    };
    const fetchData = async () => {
      await axios({
        method: "POST",
        url: API.project.fetchProject,
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
  const SideBarHandle = () => {
    Setsidebar({ ...sidebar, isOpen: true });
  };

  const SideBarHandleClose = () => {
    Setsidebar({ ...sidebar, isOpen: false });
  };

  const ProjectAddHandleOpen = () => {
    Setproject_modal({ ...project_modal, isAddbtn: true });
  };

  const ProjectAddHandleClose = () => {
    Setproject_modal({ ...project_modal, isAddbtn: false });
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
          project_id: index.project_id,
        };
        data_arr.push(obj);
      });
      if (!checked) {
        SetDeleteAllData(deleteAllData.filter((index) => index === data_arr));
        SetDeleteData(
          deleteData.filter((index) => index.project_id === data_arr)
        );
      } else {
        SetDeleteAllData(data_arr);
        SetDeleteData(
          deleteData.filter((index) => index.project_id === data_arr)
        );
      }
      console.log(data_arr);
    } else {
      let tempUser = payload.data.map((index) =>
        index.project_id === id ? { ...index, ischecked: checked } : index
      );
      setPayload({ ...payload, data: tempUser });
      let removeItem = id;
      if (!checked) {
        SetDeleteData(
          deleteData.filter((index) => index.project_id !== removeItem)
        );
        SetDeleteAllData(
          deleteAllData.filter((index) => index.project_id !== removeItem)
        );
      } else {
        SetDeleteData([...deleteData, { project_id: id }]);
        SetDeleteAllData(
          deleteAllData.filter((index) => index.project_id !== removeItem)
        );
      }
    }
  };

  const ProjectHandleOpen = () => {
    Setproject_modal({ ...project_modal, isOpen: true });
  };

  const ProjectHandleClose = () => {
    Setproject_modal({ ...project_modal, isOpen: false });
  };

  const ProjectFunc = (data, e) => {
    if (e.target.id === "paper") {
      ProjectHandleOpen();
      ProjectData(data);
    }
  };

  const ProjectData = (data) => {
    setProject_info({ ...project_info, data: data });
  };

  const DeleteData = () => {
    deleteAllData.forEach((index) => {
      const obj = {
        project_id: index.project_id,
      };
      console.log(obj);
      deleteProject(obj);
    });
    deleteData.forEach((index) => {
      const obj = {
        project_id: index.project_id,
      };
      console.log(obj);
      deleteProject(obj);
    });
    window.location.reload();
  };

  const DownloadProject = () => {
    if (payload.data.length === 0) {
    return false;
    } else {
      let data_arr = [];
      payload.data.forEach((index) => {
        const obj = {
          construction_id: index.construction_id,
          construction_site_name: index.construction_site_name,
          construction_client_name: index.construction_client_name,
        };
        data_arr.push(obj);
      });
      var wb = XLSX.utils.book_new();
      var ws = XLSX.utils.json_to_sheet(data_arr);

      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
      XLSX.writeFile(wb, "Project.xlsx");
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
                onClick={DownloadProject}
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
            Projects
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
                onClick={ProjectAddHandleOpen}
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
                width: "90%",
                marginTop: "40px",
              }}
            >
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                  marginLeft: "-90px",
                }}
              >
                ID NUMBER
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                }}
              >
                PROJECT NAME
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                }}
              >
                SITE LOCATION
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                }}
              >
                BUDGET
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                }}
              >
                CLIENT NAME
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
              payload.data.map((index, i) => (
                <Paper
                  key={i}
                  id="paper"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
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
                  onClick={(e) => ProjectFunc(index, e)}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "15%",
                      pointerEvents: "none",
                    }}
                  >
                    <Typography sx={{ fontSize: "15px", marginLeft: "50px" }}>
                      {index.project_id}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "15%",
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
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "15%",
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
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "15%",
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
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "15%",
                      pointerEvents: "none",
                    }}
                  >
                    <Typography sx={{ fontSize: "15px", marginLeft: "50px" }}>
                      {index.client_name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "15%",
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
                      width: "4%",
                      backgroundColor: "",
                      paddingRight: "40px",
                    }}
                  >
                    <Checkbox
                      id={index.project_id}
                      color="secondary"
                      onClick={isChecked}
                      checked={index?.ischecked || false}
                    />
                  </Box>
                </Paper>
              ))
            )}
          </Box>
        </Box>
        <CustomAddNewProject
          open={project_modal.isAddbtn}
          onClose={ProjectAddHandleClose}
        />
        <CustomProjectInfo
          open={project_modal.isOpen}
          onClose={ProjectHandleClose}
          project_info={project_info.data}
        />
      </Box>
    </Box>
  );
}

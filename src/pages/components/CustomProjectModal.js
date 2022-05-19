import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

import { classes } from "../../design/uiDesign";
import { updateProject } from "../../api/projectApi";
import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";

export const CustomProjectInfo = ({ open, onClose, project_info }) => {
  const [project_edit_modal, setproject_edit_modal] = useState({
    isOpen: false,
  });

  const ProjectModalHandleOpen = () => {
    setproject_edit_modal({ ...project_edit_modal, isOpen: true });
  };
  const ProjectModalHandleClose = () => {
    setproject_edit_modal({ ...project_edit_modal, isOpen: false });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginLeft: "40px",
      }}
    >
      <Paper
        sx={{
          width: "1000px",
          outline: "none",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          }}
        >
          <Typography>{project_info.client_name}'s Information</Typography>
          <Box component="span" sx={{ flexGrow: "1" }} />
          <IconButton onClick={ProjectModalHandleOpen}>
            <EditIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 40px",
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{
              marginRight: "54px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Project Name
          </Typography>
          <Typography>{project_info.project_name}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "20px 40px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "54px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Site Location
          </Typography>
          <Typography>{project_info.site_location}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "20px 40px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "90px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Budget
          </Typography>
          <Typography>{project_info.budget}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "20px 40px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "56px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Client Name
          </Typography>
          <Typography>{project_info.client_name}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "20px 40px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "91px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Status
          </Typography>
          <Box
            sx={{
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "30px",
              borderColor: (theme) => theme.palette.secondary.main,
              padding: "2px 7px",
            }}
          >
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col1,
                textTransform: "uppercase",
                fontSize: "14px",
              }}
            >
              {project_info.status}
            </Typography>
          </Box>
        </Box>
        <ProjectEditModal
          open={project_edit_modal.isOpen}
          onClose={ProjectModalHandleClose}
          project_info={project_info}
        />
      </Paper>
    </Modal>
  );
};

const ProjectEditModal = ({ open, onClose, project_info }) => {
  const [payload, setpayload] = useState({
    project_name: project_info.project_name,
    site_location: project_info.site_location,
    budget: project_info.budget,
    client_name: project_info.client_name,
  });

  const [status, SetStatus] = useState(project_info.status);

  const SelectHandleChange = (e) => {
    SetStatus(e.target.value);
  };

  const ProjectHandleChange = (prop) => (e) => {
    setpayload({ ...payload, [prop]: e.target.value });
  };

  const UpdateProject = () => {
    const obj = {
      project_name: payload.project_name,
      site_location: payload.site_location,
      budget: payload.budget,
      client_name: payload.client_name,
      status: status,
      project_time: new Date().toLocaleTimeString(),
      project_id: project_info.project_id,
    };
    updateProject(obj);
    window.location.reload();
  };
  const isClose = () => {
    onClose();
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginLeft: "40px",
      }}
    >
      <Paper
        sx={{
          width: "1000px",
          outline: "none",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          }}
        >
          <Typography>{project_info.client_name}'s Information</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 40px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "54px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Project Name
          </Typography>
          <TextField
            sx={classes.project_edit_input}
            value={payload.project_name}
            onChange={ProjectHandleChange("project_name")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 40px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "54px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Site Location
          </Typography>
          <TextField
            sx={classes.project_edit_input}
            value={payload.site_location}
            onChange={ProjectHandleChange("site_location")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 40px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "90px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Budget
          </Typography>
          <TextField
            sx={classes.project_edit_input}
            value={payload.budget}
            onChange={ProjectHandleChange("budget")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 40px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "56px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Client Name
          </Typography>
          <TextField
            sx={classes.project_edit_input}
            value={payload.client_name}
            onChange={ProjectHandleChange("client_name")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 40px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "91px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Status
          </Typography>
          <Select
            value={status}
            label="Status"
            onChange={SelectHandleChange}
            sx={{
              height: "35px",
              width: "80%",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: (theme) => theme.palette.secondary.main,
              borderRadius: "30px",
              fontSize: "14px",
              textTransform: "uppercase",
            }}
          >
            <MenuItem
              value={"Ongoing"}
              sx={{ fontSize: "14px", textTransform: "uppercase" }}
            >
              Ongoing
            </MenuItem>
            <MenuItem
              value={"Canceled"}
              sx={{ fontSize: "14px", textTransform: "uppercase" }}
            >
              Canceled
            </MenuItem>
            <MenuItem
              value={"Complete"}
              sx={{ fontSize: "14px", textTransform: "uppercase" }}
            >
              Complete
            </MenuItem>
            <MenuItem
              value={"Pending"}
              sx={{ fontSize: "14px", textTransform: "uppercase" }}
            >
              Pending
            </MenuItem>
          </Select>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px 0px",
          }}
        >
          <Button
            sx={{
              height: "35px",
              width: "150px",
              border: "1px solid #3A57E8",
              borderRadius: "10px",
              color: (theme) => theme.palette.textColor.col1,
              marginRight: "40px",
            }}
            onClick={UpdateProject}
          >
            <Typography>Save</Typography>
          </Button>
          <Button
            sx={{
              height: "35px",
              width: "150px",
              border: "1px solid #439B38",
              borderRadius: "10px",
              color: (theme) => theme.palette.textColor.col6,
            }}
            onClick={isClose}
          >
            <Typography>Cancel</Typography>
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

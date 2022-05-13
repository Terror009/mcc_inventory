import React, { useState } from "react";

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

import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";
import { classes } from "../../design/uiDesign";
import { updateUserList } from "../../api/userlistApi";

export const CustomUserListModal = ({ open, onClose, user_list_info }) => {
  const [user_list_edit_modal, setuser_list_edit_modal] = useState({
    isOpen: false,
  });

  const UserListModalHandleOpen = () => {
    setuser_list_edit_modal({ ...setuser_list_edit_modal, isOpen: true });
  };
  const UserListModalHandleClose = () => {
    setuser_list_edit_modal({ ...setuser_list_edit_modal, isOpen: false });
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
          height: "350px",
          width: "1000px",
          outline: "none",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "15px 20px",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          }}
        >
          <Typography>{user_list_info.user_list_name} Information </Typography>
          <Box component="span" sx={{ flexGrow: "1" }} />
          <IconButton onClick={UserListModalHandleOpen}>
            <EditIcon />
          </IconButton>
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
            Name
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {user_list_info.user_list_name}
          </Typography>
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
            Email
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {user_list_info.user_list_email}
          </Typography>
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
              marginRight: "55px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Contact No
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {user_list_info.user_list_phone}
          </Typography>
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
              marginRight: "60px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            User Type
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {user_list_info.user_list_user_type}
          </Typography>
        </Box>
        <CustomUserListEditModal
          open={user_list_edit_modal.isOpen}
          onClose={UserListModalHandleClose}
          user_list_info={user_list_info}
        />
      </Paper>
    </Modal>
  );
};

const CustomUserListEditModal = ({ open, onClose, user_list_info }) => {
  const [payload, setPayload] = useState({
    user_list_name: user_list_info.user_list_name,
    user_list_email: user_list_info.user_list_email,
    user_list_phone: user_list_info.user_list_phone,
  });

  const [usertype, SetUserType] = useState(user_list_info.user_list_user_type);

  const SelectHandleChange = (e) => {
    SetUserType(e.target.value);
  };

  const UserListHandleChange = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };
  const UpdateUserList = () => {
    const obj = {
      user_list_name: payload.user_list_name,
      user_list_email: payload.user_list_email,
      user_list_phone: payload.user_list_phone,
      user_list_user_type: usertype,
      user_list_id: user_list_info.user_list_id,
    };

    updateUserList(obj);
    isClose();
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
          height: "400px",
          width: "1000px",
          outline: "none",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "15px 20px",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          }}
        >
          <Typography>{user_list_info.user_list_name} Information</Typography>
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
            Name
          </Typography>
          <TextField
            sx={classes.user_list_edit_input}
            value={payload.user_list_name}
            onChange={UserListHandleChange("user_list_name")}
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
            Email
          </Typography>
          <TextField
            sx={classes.user_list_edit_input}
            value={payload.user_list_email}
            onChange={UserListHandleChange("user_list_email")}
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
              marginRight: "55px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Contact No.
          </Typography>
          <TextField
            sx={classes.user_list_edit_input}
            value={payload.user_list_phone}
            onChange={UserListHandleChange("user_list_phone")}
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
              marginRight: "62px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            User Type
          </Typography>
          <Select
            value={usertype}
            onChange={SelectHandleChange}
            label="User Type"
            sx={{
              height: "35px",
              width: "85%",
              border: "1px solid blue",
              borderRadius: "30px",
              fontSize: "13px",
              textTransform: "uppercase",
            }}
            
          >
            <MenuItem
              value={"Intern"}
              sx={{ fontSize: "13px", textTransform: "uppercase" }}
            >
              Intern
            </MenuItem>
            <MenuItem
              value={"MCC Core Team"}
              sx={{ fontSize: "13px", textTransform: "uppercase" }}
            >
              Mcc Core Team
            </MenuItem>
            <MenuItem
              value={"MCC HR Team"}
              sx={{ fontSize: "13px", textTransform: "uppercase" }}
            >
              Mcc Hr Team
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
            onClick={UpdateUserList}
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
